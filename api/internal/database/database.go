package database

import (
	"database/sql"
	"fmt"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

var DB *sql.DB

func Connect() {
	err := godotenv.Load()
	if err != nil {
		panic(err)
	}

	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")

	// Connect to defailt postgres database
	db, err := sql.Open("postgres", fmt.Sprintf("user=%s password=%s dbname=postgres sslmode=disable", user, password))
	if err != nil {
		panic(err)
	}

	// Create a website-builder database if it doesn't exist
	_, err = db.Exec("CREATE DATABASE website_builder")
	if err != nil && err.Error() != "pq: database \"website_builder\" already exists" {
		panic(err)
	}

	// Close the connection to the default database
	err = db.Close()
	if err != nil {
		fmt.Println(err.Error())
	}

	// Connect to the website-builder database
	db, err = sql.Open("postgres", fmt.Sprintf("user=%s password=%s dbname=website_builder sslmode=disable", user, password))
	if err != nil {
		panic(err)
	}

	// Check if the connection is successful
	err = db.Ping()
	if err != nil {
		panic(err)
	}

	fmt.Println("Connected to database")

	// Create a users table if it doesn't exist
	_, err = db.Exec("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, first_name VARCHAR(50), last_name VARCHAR(50), email VARCHAR(50), username VARCHAR(50), password VARCHAR(50), role VARCHAR(50), photo VARCHAR(255))")
	if err != nil {
		panic(err)
	}

	DB = db
}
