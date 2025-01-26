package main

import (
	"api/internal/auth"
	"api/internal/database"

	"github.com/gin-gonic/gin"
)

func main() {
	// Connect to the database
	database.Connect()

	router := gin.Default()

	// Create auth service and register auth handlers
	authService := auth.NewAuthService(database.DB)
	auth.RegisterAuthHandlers(router, authService)

	router.Run(":8080")
}
