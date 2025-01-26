package main

import (
	"api/internal/auth"
	"api/internal/config"
	"api/internal/database"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"
)

func main() {
	// Load configuration
	config.LoadConfig()

	// Set up logger
	logger := zerolog.New(zerolog.ConsoleWriter{Out: os.Stdout, NoColor: false}).With().Timestamp().Logger()

	// Connect to the database
	database.Connect(logger)

	router := gin.New()
	router.Use(requestLogger(logger))

	// Create auth service and register auth handlers
	authService := auth.NewAuthService(database.DB, logger)
	auth.RegisterAuthHandlers(router, authService)

	router.Run(":8080")
}

func requestLogger(logger zerolog.Logger) gin.HandlerFunc {
	return func(c *gin.Context) {
		start := time.Now()
		path := c.Request.URL.Path
		raw := c.Request.URL.RawQuery

		c.Next()

		end := time.Now()

		if raw != "" {
			path = path + "?" + raw
		}

		event := logger.Info()
		status := c.Writer.Status()
		message := "Request completed"

		if status >= 400 {
			event = logger.Error()
		}

		event.
			Str("method", c.Request.Method).
			Str("path", path).
			Int("status", c.Writer.Status()).
			Dur("duration", end.Sub(start)).
			Msg(message)
	}
}
