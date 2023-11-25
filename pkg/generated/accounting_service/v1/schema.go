package accounting_servicev1

// GetDatabaseSchemas returns a suite of database schemas
func GetDatabaseSchemas() []interface{} {
	models := []interface{}{
		BusinessAccountingProfileORM{},
		BusinessActionableInsightORM{},
		MergeLinkedAccountTokenORM{},
		CategoryORM{},
		AccountingIntegrationMergeLinkORM{},
		LinkedAccountingAccountORM{},
		TransactionDetailsORM{},
		ReferenceDetailsORM{},
		ReportDetailsORM{},
		BusinessChartOfAccountsORM{},
		CompanyAddressORM{},
		AttachmentsORM{},
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
