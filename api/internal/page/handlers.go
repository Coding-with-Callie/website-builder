package page

import (
	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"
)

func RegisterPageHandlers(router *gin.Engine, pageService PageService, logger zerolog.Logger) {
	router.GET("/pages", func(c *gin.Context) { GetPages(c, pageService) })
}

func GetPages(c *gin.Context, pageService PageService) {
	pages, err := pageService.GetPages()
	if err != nil {
		c.JSON(500, gin.H{"message": "Failed to get pages"})
		return
	}

	c.JSON(200, gin.H{"pages": pages})
}
