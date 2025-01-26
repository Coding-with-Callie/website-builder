package database

import (
	"api/internal/config"
	"database/sql"
	"fmt"

	"github.com/rs/zerolog"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func Connect(logger zerolog.Logger) {
	config := config.AppConfig

	user := config.DBUser
	password := config.DBPassword

	// Connect to defailt postgres database
	db, err := sql.Open("postgres", fmt.Sprintf("user=%s password=%s dbname=postgres sslmode=disable", user, password))
	if err != nil {
		logger.Fatal().Err(err).Msg("Failed to connect to default postgres database")
	}

	// Create a website-builder database if it doesn't exist
	_, err = db.Exec("CREATE DATABASE website_builder")
	if err != nil {
		if err.Error() == "pq: database \"website_builder\" already exists" {
			logger.Info().Msg("Website builder database already exists")
		} else {
			logger.Fatal().Err(err).Msg("Failed to create website builder database")
		}
	}

	// Close the connection to the default database
	err = db.Close()
	if err != nil {
		logger.Fatal().Err(err).Msg("Failed to close connection to default database")
	}

	// Connect to the website-builder database
	db, err = sql.Open("postgres", fmt.Sprintf("user=%s password=%s dbname=website_builder sslmode=disable", user, password))
	if err != nil {
		logger.Fatal().Err(err).Msg("Failed to connect to website builder database")
	}

	// Check if the connection is successful
	err = db.Ping()
	if err != nil {
		logger.Fatal().Err(err).Msg("Failed to ping website builder database")
	}

	logger.Info().Msg("Connected to website builder database")

	// Create a users table if it doesn't exist
	_, err = db.Exec("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, first_name VARCHAR(50), last_name VARCHAR(50), email VARCHAR(50), username VARCHAR(50), password VARCHAR(255), role VARCHAR(50), photo VARCHAR(255))")
	if err != nil {
		logger.Fatal().Err(err).Msg("Failed to create users table")
	}

	DB = db
}
