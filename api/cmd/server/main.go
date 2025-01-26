package main

import (
	"api/internal/auth"
	"api/internal/config"
	"api/internal/database"

	"github.com/gin-gonic/gin"
)

func main() {
	// Load configuration
	config.LoadConfig()

	// Connect to the database
	database.Connect()

	router := gin.Default()

	// Create auth service and register auth handlers
	authService := auth.NewAuthService(database.DB)
	auth.RegisterAuthHandlers(router, authService)

	router.Run(":8080")
}
