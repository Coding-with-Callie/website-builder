package auth

import (
	"api/internal/config"
	"database/sql"
	"fmt"
	"time"

	"github.com/golang-jwt/jwt"
	"github.com/rs/zerolog"
	"golang.org/x/crypto/bcrypt"
)

type AuthService interface {
	Login(username string, password string) (string, error)
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

func (s *authService) Login(username string, password string) (string, error) {
	s.logger.Info().Str("username", username).Msg("Logging in user")

	// Get the user from the database
	var storedPassword string
	err := s.db.QueryRow("SELECT password FROM users WHERE username = $1", username).Scan(&storedPassword)
	if err != nil {
		fmt.Println(err.Error())
		return "", err
	}

	// Check if the password is correct
	err = bcrypt.CompareHashAndPassword([]byte(storedPassword), []byte(password))
	if err != nil {
		s.logger.Error().Err(err).Str("username", username).Msg("Login failed")
		return "", err
	}

	// Generate a JWT with a 30-section expiration time
	expirationTime := time.Now().Add(30 * time.Second).Unix()
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"username": username,
		"exp":      expirationTime,
	})
	tokenString, err := token.SignedString([]byte(s.jwtSecret))
	if err != nil {
		s.logger.Error().Err(err).Str("username", username).Msg("Login failed")
		return "", err
	}

	s.logger.Info().Str("username", username).Msg("User logged in successfully")

	return tokenString, nil
}

func (s *authService) GetUserDetails(username string) (map[string]interface{}, error) {
	// Get the user from the database
	var firstName string
	var lastName string
	var role string
	err := s.db.QueryRow("SELECT first_name, last_name, role FROM users WHERE username = $1", username).Scan(&firstName, &lastName, &role)
	if err != nil {
		return nil, err
	}

	userDetails := map[string]interface{}{
		"username":  username,
		"firstName": firstName,
		"lastName":  lastName,
		"role":      role,
	}

	return userDetails, nil
}
