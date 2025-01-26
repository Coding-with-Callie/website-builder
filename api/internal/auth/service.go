package auth

import (
	"database/sql"
	"fmt"
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
	fmt.Printf("username: %s, password: %s\n", username, password)

	// Get the user from the database
	var storedPassword string
	err := s.db.QueryRow("SELECT password FROM users WHERE username = $1", username).Scan(&storedPassword)
	if err != nil {
		fmt.Println(err.Error())
		return "", err
	}

	if storedPassword != password {
		return "", fmt.Errorf("invalid password")
	}

	return "HERE'S YOURE TOKEN", nil
}
