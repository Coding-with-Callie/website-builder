package auth

import (
	"database/sql"
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

type AuthService interface {
	Login(username string, password string) (string, error)
}

type authService struct {
	db *sql.DB
}

func NewAuthService(db *sql.DB) AuthService {
	return &authService{db: db}
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
	return "HERE'S YOURE TOKEN", nil
}
