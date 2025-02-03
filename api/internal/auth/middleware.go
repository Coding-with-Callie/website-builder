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
		// Get the JWT from the cookie
		tokenString, err := c.Cookie("jwt")
		if err != nil {
			// If the JWT is not present, log the error and return an unauthorized response
			logger.Error().Err(err).Msg("AuthMiddleware")

			c.JSON(401, gin.H{"message": "Unauthorized", "error": err.Error()})
			c.Abort()
			return
		}

		// Validate the JWT and parse the token
		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			return []byte(config.AppConfig.JWTSecret), nil
		})
		if err != nil || !token.Valid {
			// The JWT is invalid...

			// If the request is for the user details, return a guest user
			if c.Request.URL.Path == "/auth/user-details" {
				logger.Info().Msg("AuthMiddleware: Guest user")

				c.JSON(http.StatusOK, gin.H{"user": map[string]string{
					"firstName": "guest",
					"lastName":  "guest",
					"role":      "guest",
					"username":  "guest",
				}})
				c.Abort()
				return
			}

			// Otherwise, log the error and return an unauthorized response
			logger.Error().Err(err).Msg("AuthMiddleware")
			c.JSON(401, gin.H{"message": "Unauthorized"})
			c.Abort()
			return
		}

		// Extract the username from the token
		claims := token.Claims.(jwt.MapClaims)
		username := claims["username"].(string)

		// Set the username in the context
		c.Set("username", username)

		// Continue to the next middleware
		c.Next()
	}
}
