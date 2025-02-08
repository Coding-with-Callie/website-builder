package page

import (
	"api/internal/auth"

	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"
)

func RegisterPageHandlers(router *gin.Engine, pageService PageService, logger zerolog.Logger) {
	router.GET("/pages", func(c *gin.Context) { GetPages(c, pageService) })
	router.POST("/pages", auth.AuthMiddleware(logger), func(c *gin.Context) { CreatePage(c, pageService) })
	router.PATCH("/pages/:id/move", auth.AuthMiddleware(logger), func(c *gin.Context) { MovePage(c, pageService) })
}

func GetPages(c *gin.Context, pageService PageService) {
	pages, err := pageService.GetPages()
	if err != nil {
		c.JSON(500, gin.H{"message": "Failed to get pages"})
		return
	}

	c.JSON(200, gin.H{"pages": pages})
}

func CreatePage(c *gin.Context, pageService PageService) {
	var page Page
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

func MovePage(c *gin.Context, pageService PageService) {
	id := c.Param("id")
	direction := c.Query("direction")

	pageService.MovePage(id, direction)

	c.JSON(200, gin.H{"message": "Page moved"})
}
