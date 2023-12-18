package accounting_servicev1

// GetDatabaseSchemas returns a suite of database schemas
func GetDatabaseSchemas() []interface{} {
	models := []interface{}{
		MergeBusinessProfileORM{},
		BusinessActionableInsightORM{},
		MergeLinkedAccountTokenORM{},
		CategoryORM{},
		AccountingIntegrationMergeLinkORM{},
		LinkedAccountingAccountORM{},
		BusinessChartOfAccountsORM{},
		CompanyAddressORM{},
		AccountingAttachmentORM{},
		BalanceSheetORM{},
		ReportItemORM{},
		CashFlowStatementsORM{},
		CompanyInfoORM{},
		AccountingAttachmentORM{},
		ContactsORM{},
		CreditNoteORM{},
		CreditNoteLineItemORM{},
		ExpenseORM{},
		ExpenseLineORM{},
		IncomeStatementORM{},
		InvoiceORM{},
		InvoiceLineItemORM{},
		ItemORM{},
		JournalEntryORM{},
		JournalLineORM{},
		PaymentORM{},
		PurchaseOrderORM{},
		PurchaseOrderLineItemORM{},
		TaxRateORM{},
		TrackingCategoryORM{},
		BusinessTransactionORM{},
		TransactionLineItemORM{},
		VendorCreditORM{},
		VendorCreditLineORM{},
	}

	return models
}