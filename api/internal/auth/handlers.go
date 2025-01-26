package auth

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func RegisterAuthHandlers(router *gin.Engine) {
	router.POST("/login", Login)
}

func Login(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "login",
	})
}
