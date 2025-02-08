package page

import (
	"database/sql"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"
)

type PageService interface {
	GetPages(c *gin.Context) ([]Page, error)
	CreatePage(page Page) error
	MovePage(c *gin.Context, id string, direction string) error
}

type Page struct {
	CreateDate  time.Time               `json:"create_date"`
	PublishDate *time.Time              `json:"publish_date"`
	ModifyDate  *time.Time              `json:"modify_date"`
	MenuName    *string                 `json:"menu_name"`
	Heading     *string                 `json:"heading"`
	Path        string                  `json:"path"`
	CreatorID   int                     `json:"creator_id"`
	Metadata    *map[string]interface{} `json:"metadata"`
}

type pageService struct {
	db     *sql.DB
	logger zerolog.Logger
}

func NewPageService(db *sql.DB, logger zerolog.Logger) PageService {
	return &pageService{db: db, logger: logger}
}

func (s *pageService) GetPages(c *gin.Context) ([]Page, error) {
	// Get role from context
	role, _ := c.Get("role")

	rows, err := s.db.Query("SELECT create_date, publish_date, modify_date, menu_name, heading, path, creator_id, metadata FROM pages ORDER BY page_order ASC")
	if err != nil {
		s.logger.Error().Err(err).Msg("Failed to get pages")
		return nil, err
	}
	defer rows.Close()

	pages := []Page{}
	for rows.Next() {
		var createDate time.Time
		var publishDate, modifyDate *time.Time
		var path string
		var menuName, heading *string
		var creatorID int
		var metadata *map[string]interface{}
		err = rows.Scan(&createDate, &publishDate, &modifyDate, &menuName, &heading, &path, &creatorID, &metadata)
		if err != nil {
			s.logger.Error().Err(err).Msg("Failed to scan row")
			return nil, err
		}

		show := true

		if role == "guest" {
			if publishDate == nil {
				show = false
			}
		}

		page := Page{
			CreateDate:  createDate,
			PublishDate: publishDate,
			ModifyDate:  modifyDate,
			MenuName:    menuName,
			Heading:     heading,
			Path:        path,
			CreatorID:   creatorID,
			Metadata:    metadata,
		}

		if show {
			pages = append(pages, page)
		}
	}

	return pages, nil
}

func (s *pageService) CreatePage(page Page) error {
	// Get the highest page order in the table
	var maxPageOrder int
	err := s.db.QueryRow("SELECT MAX(page_order) FROM pages").Scan(&maxPageOrder)
	if err != nil {
		s.logger.Error().Err(err).Msg("Failed to get max page order")
	}

	_, err = s.db.Exec("INSERT INTO pages (create_date, publish_date, modify_date, menu_name, heading, path, creator_id, metadata, page_order) VALUES (NOW(), $1, $2, $3, $4, $5, $6, $7, $8)", page.PublishDate, page.ModifyDate, page.MenuName, page.Heading, page.Path, page.CreatorID, page.Metadata, maxPageOrder+1)
	if err != nil {
		s.logger.Error().Err(err).Msg("Failed to create page")
		return err
	}

	return nil
}

func (s *pageService) MovePage(c *gin.Context, path string, direction string) error {
	// Get the username from the context
	username, _ := c.Get("username")

	path = "/" + path

	s.logger.Info().Str("path", path).Str("direction", direction).Str("username", username.(string)).Msg("Moving page")

	// Get the current page order
	var currentPageOrder int
	err := s.db.QueryRow("SELECT page_order FROM pages WHERE path = $1", path).Scan(&currentPageOrder)
	if err != nil {
		s.logger.Error().Err(err).Msg("Failed to get current page order")
		return err
	}

	// Edit the page order based on the direction
	if direction == "up" {
		if currentPageOrder == 3 {
			s.logger.Info().Str("path", path).Str("direction", direction).Str("username", username.(string)).Msg("Page is already at the top")
			return nil
		}

		// Get the page above the current page
		var abovePageOrder int
		var abovePagePath string
		err = s.db.QueryRow("SELECT page_order, path FROM pages WHERE page_order < $1 ORDER BY page_order DESC LIMIT 1", currentPageOrder).Scan(&abovePageOrder, &abovePagePath)
		if err != nil {
			s.logger.Error().Err(err).Msg("Failed to get above page order")
			return err
		}

		// Swap the current and above page order
		// Update the current page order
		_, err = s.db.Exec("UPDATE pages SET page_order = $1 WHERE path = $2", abovePageOrder, path)
		if err != nil {
			s.logger.Error().Err(err).Msg("Failed to update current page order")
			return err
		}

		// Update the above page order
		_, err = s.db.Exec("UPDATE pages SET page_order = $1 WHERE path = $2", currentPageOrder, abovePagePath)
		if err != nil {
			s.logger.Error().Err(err).Msg("Failed to update above page order")
			return err
		}

		s.logger.Info().Str("path", path).Str("direction", direction).Str("username", username.(string)).Msg("Swapped page orders")
	} else {
		// Get the page below the current page
		var belowPageOrder int
		var belowPagePath string
		err = s.db.QueryRow("SELECT page_order, path FROM pages WHERE page_order > $1 ORDER BY page_order ASC LIMIT 1", currentPageOrder).Scan(&belowPageOrder, &belowPagePath)
		if err != nil {
			if err == sql.ErrNoRows {
				s.logger.Info().Str("path", path).Str("direction", direction).Str("username", username.(string)).Msg("Page is already at the bottom")
				return nil
			}

			s.logger.Error().Err(err).Msg("Failed to get below page order")
			return err
		}

		// Swap the current and below page order
		// Update the current page order
		_, err = s.db.Exec("UPDATE pages SET page_order = $1 WHERE path = $2", belowPageOrder, path)
		if err != nil {
			s.logger.Error().Err(err).Msg("Failed to update current page order")
		}

		// Update the below page order
		_, err = s.db.Exec("UPDATE pages SET page_order = $1 WHERE path = $2", currentPageOrder, belowPagePath)
		if err != nil {
			s.logger.Error().Err(err).Msg("Failed to update below page order")
			return err
		}

		s.logger.Info().Str("path", path).Str("direction", direction).Str("username", username.(string)).Msg("Changed page order")
	}
	return nil
}
