package auth

import (
	"api/internal/config"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/rs/zerolog"
)

func AuthMiddleware(logger zerolog.Logger) gin.HandlerFunc {
	return func(c *gin.Context) {
		tokenString, err := c.Cookie("jwt")
		if err != nil {
			c.JSON(401, gin.H{"message": "Unauthorized", "error": err.Error()})
			c.Abort()
			return
		}

		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			return []byte(config.AppConfig.JWTSecret), nil
		})
		if err != nil || !token.Valid {
			if c.Request.URL.Path == "/auth/user-details" {
				c.JSON(http.StatusOK, gin.H{"user": map[string]string{
					"firstName": "guest",
					"lastName":  "guest",
					"role":      "guest",
					"username":  "guest",
				}})
				c.Abort()
				return
			}

			logger.Error().Err(err).Msg("AuthMiddleware")
			c.JSON(401, gin.H{"message": "Unauthorized"})
			c.Abort()
			return
		}

		claims := token.Claims.(jwt.MapClaims)
		username := claims["username"].(string)
		c.Set("username", username)

		c.Next()
	}
}
