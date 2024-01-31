package workspace_servicev1

// GetDatabaseSchemas returns a suite of database schemas
func GetDatabaseSchemas() []interface{} {
	models := []interface{}{
		WorkspaceORM{},
		AccountORM{},
		FileMetadataORM{},
		FolderMetadataORM{},
	}

	return models
}
