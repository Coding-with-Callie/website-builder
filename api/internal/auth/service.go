package auth

import (
	"api/internal/config"
	"database/sql"
	"fmt"

	"github.com/golang-jwt/jwt"
	"golang.org/x/crypto/bcrypt"
)

type AuthService interface {
	Login(username string, password string) (string, error)
}

type authService struct {
	db        *sql.DB
	jwtSecret string
}

func NewAuthService(db *sql.DB) AuthService {
	// Get the JWT secret from the environment variable
	jwtSecret := config.AppConfig.JWTSecret

	return &authService{db: db, jwtSecret: jwtSecret}
}

func (s *authService) Login(username string, password string) (string, error) {
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
		return "", err
	}

	// Generate a JWT
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"username": username,
	})
	tokenString, err := token.SignedString([]byte(s.jwtSecret))
	if err != nil {
		return "", err
	}

	return tokenString, nil
}
