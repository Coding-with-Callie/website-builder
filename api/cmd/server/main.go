package main

import (
	"api/internal/auth"
	"api/internal/config"
	"api/internal/database"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"
)

func main() {
	// Load configuration
	config.LoadConfig()

	logger := zerolog.New(os.Stdout)

	// Connect to the database
	database.Connect(logger)

	router := gin.Default()

	// Create auth service and register auth handlers
	authService := auth.NewAuthService(database.DB)
	auth.RegisterAuthHandlers(router, authService)

	router.Run(":8080")
}
