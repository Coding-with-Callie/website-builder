package auth

import (
	"api/internal/config"
	"database/sql"
	"fmt"

	"github.com/golang-jwt/jwt"
	"github.com/rs/zerolog"
	"golang.org/x/crypto/bcrypt"
)

type AuthService interface {
	Login(username string, password string) (string, error)
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
	s.logger.Info().Msg("Logging in user")

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
		s.logger.Error().Err(err).Msg("Login failed")
		return "", err
	}

	// Generate a JWT
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"username": username,
	})
	tokenString, err := token.SignedString([]byte(s.jwtSecret))
	if err != nil {
		s.logger.Error().Err(err).Msg("Login failed")
		return "", err
	}

	s.logger.Info().Msg("User logged in successfully")

	return tokenString, nil
}
