package services

import (
	"api/internal/config"
	"database/sql"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	"github.com/rs/zerolog"
	"golang.org/x/crypto/bcrypt"
)

type AuthService interface {
	Login(c *gin.Context, username string, password string) (map[string]interface{}, error)
	Logout(c *gin.Context)
	GetUserDetails(username string) (map[string]interface{}, error)
}

type authService struct {
	db        *sql.DB
	jwtSecret string
	logger    zerolog.Logger
}

func NewAuthService(db *sql.DB, logger zerolog.Logger) AuthService {
	// Get the JWT secret from the environment variable
	jwtSecret := config.AppConfig.JWTSecret

	return &authService{db: db, jwtSecret: jwtSecret, logger: logger}
}

func (s *authService) Login(c *gin.Context, username string, password string) (map[string]interface{}, error) {
	s.logger.Info().Str("username", username).Msg("Logging in user")

	// Get the user from the database
	var storedPassword string
	err := s.db.QueryRow("SELECT password FROM users WHERE username = $1", username).Scan(&storedPassword)
	if err != nil {
		s.logger.Error().Err(err).Str("username", username).Msg("Login failed")
		return nil, err
	}

	// Check if the password is correct
	err = bcrypt.CompareHashAndPassword([]byte(storedPassword), []byte(password))
	if err != nil {
		s.logger.Error().Err(err).Str("username", username).Msg("Login failed")
		return nil, err
	}

	// Generate a JWT with a 1-hour expiration time
	expirationTime := time.Now().Add(1 * time.Hour).Unix()
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"username": username,
		"exp":      expirationTime,
	})
	tokenString, err := token.SignedString([]byte(s.jwtSecret))
	if err != nil {
		s.logger.Error().Err(err).Str("username", username).Msg("Login failed")
		return nil, err
	}

	s.logger.Info().Str("username", username).Msg("User logged in successfully")

	// Create an HTTP only cookie with the JWT
	cookie := &http.Cookie{
		Name:     "jwt",
		Value:    tokenString,
		Expires:  time.Unix(expirationTime, 0),
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
	}

	// Create a non-HTTP only cookie to indicate the user is logged in
	cookieLoggedIn := &http.Cookie{
		Name:     "loggedIn",
		Value:    "true",
		Expires:  time.Unix(expirationTime, 0),
		HttpOnly: false,
		SameSite: http.SameSiteLaxMode,
	}

	// Set the cookies in the response
	http.SetCookie(c.Writer, cookie)
	http.SetCookie(c.Writer, cookieLoggedIn)

	// Set the username and role in the context
	c.Set("username", username)
	c.Set("role", "admin")

	userDetails, err := s.GetUserDetails(username)
	if err != nil {
		return nil, err
	}

	return userDetails, nil
}

func (s *authService) GetUserDetails(username string) (map[string]interface{}, error) {
	// Get the user from the database
	var firstName string
	var lastName string
	var role string
	var photo string
	err := s.db.QueryRow("SELECT first_name, last_name, role, photo FROM users WHERE username = $1", username).Scan(&firstName, &lastName, &role, &photo)
	if err != nil {
		return nil, err
	}

	userDetails := map[string]interface{}{
		"username":  username,
		"firstName": firstName,
		"lastName":  lastName,
		"role":      role,
		"photo":     photo,
	}

	return userDetails, nil
}

func (s *authService) Logout(c *gin.Context) {
	// Delete the JWT cookie
	cookie := &http.Cookie{
		Name:     "jwt",
		Value:    "",
		Expires:  time.Unix(0, 0),
		HttpOnly: true,
		SameSite: http.SameSiteLaxMode,
	}
	http.SetCookie(c.Writer, cookie)

	// Delete the loggedIn cookie
	cookieLoggedIn := &http.Cookie{
		Name:     "loggedIn",
		Value:    "",
		Expires:  time.Unix(0, 0),
		HttpOnly: false,
		SameSite: http.SameSiteLaxMode,
	}
	http.SetCookie(c.Writer, cookieLoggedIn)
}
