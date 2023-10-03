package user_servicev1

// Schemas database schema
func GetDatabaseSchemas() []interface{} {
	schemas := make([]interface{}, 0)
	schemas = append(schemas,
		UserAccountORM{},
		AddressORM{},
		TagsORM{},
		UserSettingsORM{},
		ContactInformationORM{},
		AccountInformationORM{},
		TaxSettingsORM{},
		FinancialPreferencesORM{},
		AIPoweredInsightsORM{},
		IntegrationSettingsORM{},
		NotificationSettingsORM{},
		BusinessAccountSettingsORM{},
	)
	return schemas
}
