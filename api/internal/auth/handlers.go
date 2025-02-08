package auth

import (
	"api/internal/page"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"
)

type LoginRequestBody struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func RegisterAuthHandlers(router *gin.Engine, authService AuthService, pageService page.PageService, logger zerolog.Logger) {
	router.POST("/login", func(c *gin.Context) { Login(c, authService, pageService) })

	// Protected routes
	router.GET("/user-details", AuthMiddleware(logger), func(c *gin.Context) { GetUserDetails(c, authService) })
	router.GET("/pages", AuthMiddleware(logger), func(c *gin.Context) { GetPages(c, pageService) })
	router.POST("/pages", AuthMiddleware(logger), func(c *gin.Context) { CreatePage(c, pageService) })
	router.PATCH("/pages/:path/move", AuthMiddleware(logger), func(c *gin.Context) { MovePage(c, pageService) })
}

func Login(c *gin.Context, authService AuthService, pageService page.PageService) {
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

func GetUserDetails(c *gin.Context, authService AuthService) {
	username := c.MustGet("username").(string)

	// Get user details from the database
	userDetails, err := authService.GetUserDetails(username)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid request",
		})
		return
	}

	// Return user details
	c.JSON(http.StatusOK, gin.H{
		"user": userDetails,
	})
}

func GetPages(c *gin.Context, pageService page.PageService) {
	pages, err := pageService.GetPages(c)
	if err != nil {
		c.JSON(500, gin.H{"message": "Failed to get pages"})
		return
	}

	c.JSON(200, gin.H{"pages": pages})
}

func CreatePage(c *gin.Context, pageService page.PageService) {
	var page page.Page
	err := c.BindJSON(&page)
	if err != nil {
		c.JSON(400, gin.H{"message": "Invalid request"})
		return
	}

	err = pageService.CreatePage(page)
	if err != nil {
		c.JSON(500, gin.H{"message": "Failed to create page"})
		return
	}

	c.JSON(200, gin.H{"message": "Page created"})
}

func MovePage(c *gin.Context, pageService page.PageService) {
	path := c.Param("path")
	direction := c.Query("direction")

	err := pageService.MovePage(c, path, direction)
	if err != nil {
		c.JSON(500, gin.H{"message": "Failed to move page"})
		return
	}

	c.JSON(200, gin.H{"message": "Page moved"})
}
