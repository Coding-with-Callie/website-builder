package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"

	"api/internal/middleware"
	"api/internal/services"
)

type LoginRequestBody struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func RegisterAuthHandlers(router *gin.Engine, authService services.AuthService, pageService services.PageService, logger zerolog.Logger) {
	router.POST("/login", func(c *gin.Context) { Login(c, authService, pageService) })
	router.POST("/logout", func(c *gin.Context) { Logout(c, authService, pageService) })

	// Protected routes
	router.GET("/user-details", middleware.AuthMiddleware(logger), func(c *gin.Context) { GetUserDetails(c, authService) })
	router.GET("/pages", middleware.AuthMiddleware(logger), func(c *gin.Context) { GetPages(c, pageService) })
	router.POST("/pages", middleware.AuthMiddleware(logger), func(c *gin.Context) { CreatePage(c, pageService) })
	router.PATCH("/pages/:path/move", middleware.AuthMiddleware(logger), func(c *gin.Context) { MovePage(c, pageService) })
}

func Login(c *gin.Context, authService services.AuthService, pageService services.PageService) {
	var requestBody LoginRequestBody

	// Bind the request body
	if err := c.BindJSON(&requestBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid request body",
		})
		return
	}

	// Call the auth service to login
	userDetails, err := authService.Login(c, requestBody.Username, requestBody.Password)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"message": "Invalid username or password",
		})
		return
	}

	// Get pages from the database
	pages, err := pageService.GetPages(c)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid request",
		})
		return
	}

	// Return the logged-in user details and pages
	c.JSON(http.StatusOK, gin.H{
		"user":  userDetails,
		"pages": pages,
	})
}

func Logout(c *gin.Context, authService services.AuthService, pageService services.PageService) {
	// Call the auth service to logout
	authService.Logout(c)

	// Get pages from the database
	pages, err := pageService.GetPages(c)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid request",
		})
		return
	}

	guest := map[string]interface{}{"role": "guest"}

	// Return the logged-out message
	c.JSON(http.StatusOK, gin.H{
		"user":  guest,
		"pages": pages,
	})
}

func GetUserDetails(c *gin.Context, authService services.AuthService) {
	username := c.MustGet("username").(string)

	// Get user details from the database
	userDetails, err := authService.GetUserDetails(username)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid request",
		})
		return
	}

	// Set the role in the context
	c.Set("role", userDetails["role"])

	// Return user details
	c.JSON(http.StatusOK, gin.H{
		"user": userDetails,
	})
}

func GetPages(c *gin.Context, pageService services.PageService) {
	pages, err := pageService.GetPages(c)
	if err != nil {
		c.JSON(500, gin.H{"message": "Failed to get pages"})
		return
	}

	c.JSON(200, gin.H{"pages": pages})
}

func CreatePage(c *gin.Context, pageService services.PageService) {
	var request struct {
		MenuName string `json:"menu_name"`
		Path     string `json:"path"`
		Heading  string `json:"heading"`
	}
	err := c.BindJSON(&request)
	if err != nil {
		c.JSON(400, gin.H{"message": "Invalid request"})
		return
	}

	err = pageService.CreatePage(request.MenuName, request.Path, request.Heading)
	if err != nil {
		c.JSON(500, gin.H{"path": request.Path, "message": "Failed to create page"})
		return
	}

	// Get pages from the database
	pages, err := pageService.GetPages(c)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid request",
		})
		return
	}

	c.JSON(200, gin.H{"pages": pages})
}

func MovePage(c *gin.Context, pageService services.PageService) {
	path := c.Param("path")
	direction := c.Query("direction")

	err := pageService.MovePage(c, path, direction)
	if err != nil {
		c.JSON(500, gin.H{"message": "Failed to move page"})
		return
	}

	c.JSON(200, gin.H{"message": "Page moved"})
}
