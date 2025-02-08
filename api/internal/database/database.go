package database

import (
	"api/internal/config"
	"database/sql"
	"fmt"

	"github.com/rs/zerolog"
	"golang.org/x/crypto/bcrypt"

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

	DB = db
}

func CreateTables(logger zerolog.Logger) {
	// Create a users table if it doesn't exist
	_, err := DB.Exec("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, first_name VARCHAR(50), last_name VARCHAR(50), email VARCHAR(50), username VARCHAR(50), password VARCHAR(255), role VARCHAR(50), photo VARCHAR(255), UNIQUE(email, username))")
	if err != nil {
		logger.Fatal().Err(err).Msg("Failed to create users table")
	}

	// Create a pages table if it doesn't exist
	_, err = DB.Exec("CREATE TABLE IF NOT EXISTS pages (id SERIAL PRIMARY KEY, create_date TIMESTAMP, publish_date TIMESTAMP, modify_date TIMESTAMP, menu_name VARCHAR(50), heading VARCHAR(255), path VARCHAR(50), creator_id INT, metadata JSONB, FOREIGN KEY (creator_id) REFERENCES users(id), UNIQUE(menu_name, path))")
	if err != nil {
		logger.Fatal().Err(err).Msg("Failed to create pages table")
	}
}

func Seed(logger zerolog.Logger) {
	// Get the admin info from the config
	password := config.AppConfig.AdminPassword

	// Hash the admin password before storing it in the database
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		logger.Error().Err(err).Msg("Failed to hash the admin password")
	}

	// Create an admin user if it doesn't exist
	_, err = DB.Exec("INSERT INTO users (first_name, last_name, email, username, password, role, photo) VALUES ('Callie', 'Stoscup', 'calliestoscup@gmail.com', 'calliestoscup', $1, 'admin', '') ON CONFLICT (username, email) DO NOTHING", hashedPassword)
	if err != nil {
		logger.Error().Err(err).Msg("Failed to create test user")
	}

	// Create a home page if it doesn't exist
	// Will need to edit this once we have multiple users
	_, err = DB.Exec("INSERT INTO pages (create_date, publish_date, modify_date, menu_name, heading, path, creator_id, metadata) VALUES (NOW(), NOW(), null, 'Home', 'Home Page', '/', 1, null) ON CONFLICT (menu_name, path) DO NOTHING")
	if err != nil {
		logger.Error().Err(err).Msg("Failed to create home page")
	}

	// Create a wildcard page if it doesn't exist
	_, err = DB.Exec("INSERT INTO pages (create_date, publish_date, modify_date, menu_name, heading, path, creator_id, metadata) VALUES (NOW(), NOW(), null, null, 'Page Not Found', '/*', 1, null) ON CONFLICT (menu_name, path) DO NOTHING")
	if err != nil {
		logger.Error().Err(err).Msg("Failed to create wildcard page")
	}
}
