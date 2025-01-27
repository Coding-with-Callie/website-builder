package auth

import (
	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"
)

func AuthMiddleware(logger zerolog.Logger) gin.HandlerFunc {
	return func(c *gin.Context) {
		tokenString, err := c.Cookie("jwt")
		if err != nil {
			c.JSON(401, gin.H{"message": "Unauthorized"})
			c.Abort()
			return
		}

		logger.Info().Str("token", tokenString).Msg("AuthMiddleware")

		c.Next()
	}
}
