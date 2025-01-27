package auth

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"
)

type LoginRequestBody struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func RegisterAuthHandlers(router *gin.Engine, authService AuthService, logger zerolog.Logger) {
	router.POST("/login", func(c *gin.Context) { Login(c, authService) })

	// Protected routes
	authorized := router.Group("/auth/")
	authorized.Use(AuthMiddleware(logger))
	{
		authorized.GET("/user-details", func(c *gin.Context) { GetUserDetails(c, authService) })
	}
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

func GetUserDetails(c *gin.Context, authService AuthService) {
	username := c.MustGet("username").(string)

	// Get user details from the database
	userDetails, err := authService.GetUserDetails(username)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid request",
		})
		return
	}

	// Return user details
	c.JSON(http.StatusOK, gin.H{
		"user": userDetails,
	})
}
