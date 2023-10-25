package financial_servicev1

// GetDatabaseSchemas returns a suite of database schemas
func GetDatabaseSchemas() []interface{} {
	models := []interface{}{
		LinkORM{},
		ActionableInsightORM{},
		TokenORM{},
		PlaidLinkORM{},
		FinancialUserProfileORM{},
		StripeSubscriptionORM{},
		StudentLoanAccountORM{},
		CreditAccountORM{},
		MortgageAccountORM{},
		InvestmentAccountORM{},
		BankAccountORM{},
		PocketORM{},
		SmartGoalORM{},
		ForecastORM{},
		MilestoneORM{},
		BudgetORM{},
		CategoryORM{},
		InvesmentHoldingORM{},
		InvestmentSecurityORM{},
		AprORM{},
		PlaidSyncORM{},
		MergeLinkORM{},
		LinkedAccountingAccountORM{},
		TransactionDetailsORM{},
		ReferenceDetailsORM{},
		ReportDetailsORM{},
		BusinessChartOfAccountsORM{},
		AddressORM{},
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
		PersonalActionableInsightORM{},
		PlaidAccountInvestmentTransactionORM{},
		PlaidAccountTransactionORM{},
		PlaidAccountRecurringTransactionORM{},
		SmartNoteORM{},
	}

	return models
}

func GetClickhouseSchemas() []interface{} {
	models := []interface{}{
		TransactionORM{},
		ReOccuringTransactionORM{},
		InvestmentTransactionORM{},
	}
	return models
}

func GetClickhouseTableNameToSchemaMap() map[string]interface{} {
	schemaMap := make(map[string]interface{}, 0)
	schemaMap[TransactionORM{}.TableName()] = TransactionORM{}
	schemaMap[ReOccuringTransactionORM{}.TableName()] = ReOccuringTransactionORM{}
	schemaMap[InvestmentTransactionORM{}.TableName()] = InvestmentTransactionORM{}
	return schemaMap
}
