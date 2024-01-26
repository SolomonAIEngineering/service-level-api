package user_servicev1

// Schemas database schema
func GetDatabaseSchemas() []interface{} {
	schemas := make([]interface{}, 0)
	schemas = append(schemas,
		UserAccountORM{},
		AddressORM{},
		TagsORM{},
		SettingsORM{},
		NotificationSettingsORM{},
		DigitalWorkerSettingsORM{},
		FinancialPreferencesORM{},
		BusinessAccountORM{},
		RoleAuditEventsORM{},
		RoleORM{},
	)
	return schemas
}
