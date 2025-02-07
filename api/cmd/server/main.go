package main

import (
	"api/internal/auth"
	"api/internal/config"
	"api/internal/database"
	"os"
	"time"

	"github.com/gin-contrib/cors"
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

	// Create tables in the database
	database.CreateTables(logger)

	// Seed the database with an admin user
	database.Seed(logger)

	router := gin.New()
	router.Use(requestLogger(logger))

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// Create auth service and register auth handlers
	authService := auth.NewAuthService(database.DB, logger)
	auth.RegisterAuthHandlers(router, authService, logger)

	router.Run(":8080")
}

func requestLogger(logger zerolog.Logger) gin.HandlerFunc {
	return func(c *gin.Context) {
		// Record the start time
		start := time.Now()

		// Get the request path and raw query
		path := c.Request.URL.Path
		raw := c.Request.URL.RawQuery

		// Process the request to get the final status code, response time, etc.
		c.Next()

		// Record the end time
		end := time.Now()

		// Reconstruct the full path with query parameters
		if raw != "" {
			path = path + "?" + raw
		}

		// Create an info level log event and message
		event := logger.Info()
		message := "Request completed"

		// Check the status code and adjust the log level if necessary
		status := c.Writer.Status()
		if status >= 400 {
			event = logger.Error()
		}

		// Get username from context if it exists and add it to the log event
		username, exists := c.Get("username")
		if exists {
			event.Str("username", username.(string))
		}

		// Add additional fields to the log event
		event.
			Str("method", c.Request.Method).
			Str("path", path).
			Int("status", c.Writer.Status()).
			Dur("duration", end.Sub(start)).
			Msg(message)
	}
}
