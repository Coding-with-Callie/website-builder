package page

import (
	"database/sql"
	"time"

	"github.com/rs/zerolog"
)

type PageService interface {
	GetPages() ([]Page, error)
}

type Page struct {
	CreateDate  time.Time               `json:"create_date"`
	PublishDate *time.Time              `json:"publish_date"`
	ModifyDate  *time.Time              `json:"modify_date"`
	MenuName    string                  `json:"menu_name"`
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

func (s *pageService) GetPages() ([]Page, error) {
	rows, err := s.db.Query("SELECT create_date, publish_date, modify_date, menu_name, heading, path, creator_id, metadata FROM pages")
	if err != nil {
		s.logger.Error().Err(err).Msg("Failed to get pages")
		return nil, err
	}
	defer rows.Close()

	pages := []Page{}
	for rows.Next() {
		var createDate time.Time
		var publishDate, modifyDate *time.Time
		var menuName, path string
		var heading *string
		var creatorID int
		var metadata *map[string]interface{}
		err = rows.Scan(&createDate, &publishDate, &modifyDate, &menuName, &heading, &path, &creatorID, &metadata)
		if err != nil {
			s.logger.Error().Err(err).Msg("Failed to scan row")
			return nil, err
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
		pages = append(pages, page)
	}

	return pages, nil
}
