package auth

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type LoginRequestBody struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func RegisterAuthHandlers(router *gin.Engine, authService AuthService) {
	router.POST("/login", func(c *gin.Context) {
		Login(c, authService)
	})
}

func Login(c *gin.Context, authService AuthService) {
	var requestBody LoginRequestBody

	// Bind the request body
	if err := c.BindJSON(&requestBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid request body",
		})
		return
	}

	// Call the auth service to login
	access_token, err := authService.Login(requestBody.Username, requestBody.Password)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"message": "Invalid username or password",
		})
		return
	}

	// Return the access token
	c.JSON(http.StatusOK, gin.H{
		"access_token": access_token,
	})
}
