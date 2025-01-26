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
	router.GET("test", getTest)

	// Create auth service
	authService := auth.NewAuthService(database.DB)

	auth.RegisterAuthHandlers(router, authService)

	router.Run(":8080")
}

func getTest(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "test",
	})
}
