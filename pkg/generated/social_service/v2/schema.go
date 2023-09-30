package social_servicev2

// GetDatabaseSchemas returns a suite of database schemas
func GetDatabaseSchemas() []interface{} {
	models := []interface{}{
		FollowerORM{},
		TagsORM{},
		TopicORM{},
		BlockedORM{},
		VirtualProfileORM{},
		UserProfileORM{},
		PublicationORM{},
		BookmarkORM{},
		CommunityProfileORM{},
	}

	return models
}
