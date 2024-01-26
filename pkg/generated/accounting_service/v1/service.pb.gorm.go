package accounting_servicev1

import (
	context "context"

	gorm "github.com/jinzhu/gorm"
)

type AccountingServiceDefaultServer struct {
	DB *gorm.DB
}

// HealthCheck ...
func (m *AccountingServiceDefaultServer) HealthCheck(ctx context.Context, in *HealthCheckRequest) (*HealthCheckResponse, error) {
	out := &HealthCheckResponse{}
	return out, nil
}

// ReadynessCheck ...
func (m *AccountingServiceDefaultServer) ReadynessCheck(ctx context.Context, in *ReadynessCheckRequest) (*ReadynessCheckResponse, error) {
	out := &ReadynessCheckResponse{}
	return out, nil
}

// CreateAccountingProfile ...
func (m *AccountingServiceDefaultServer) CreateAccountingProfile(ctx context.Context, in *CreateAccountingProfileRequest) (*CreateAccountingProfileResponse, error) {
	out := &CreateAccountingProfileResponse{}
	return out, nil
}

// ReadAccountingProfile ...
func (m *AccountingServiceDefaultServer) ReadAccountingProfile(ctx context.Context, in *ReadAccountingProfileRequest) (*ReadAccountingProfileResponse, error) {
	out := &ReadAccountingProfileResponse{}
	return out, nil
}

// DeleteAccountingProfile ...
func (m *AccountingServiceDefaultServer) DeleteAccountingProfile(ctx context.Context, in *DeleteAccountingProfileRequest) (*DeleteAccountingProfileResponse, error) {
	out := &DeleteAccountingProfileResponse{}
	return out, nil
}

// UpdateAccountingProfile ...
func (m *AccountingServiceDefaultServer) UpdateAccountingProfile(ctx context.Context, in *UpdateAccountingProfileRequest) (*UpdateAccountingProfileResponse, error) {
	out := &UpdateAccountingProfileResponse{}
	return out, nil
}

// GetMergeLinkToken ...
func (m *AccountingServiceDefaultServer) GetMergeLinkToken(ctx context.Context, in *GetMergeLinkTokenRequest) (*GetMergeLinkTokenResponse, error) {
	out := &GetMergeLinkTokenResponse{}
	return out, nil
}

// ExchangePublicLinkTokenForAccountToken ...
func (m *AccountingServiceDefaultServer) ExchangePublicLinkTokenForAccountToken(ctx context.Context, in *ExchangePublicLinkTokenForAccountTokenRequest) (*ExchangePublicLinkTokenForAccountTokenResponse, error) {
	out := &ExchangePublicLinkTokenForAccountTokenResponse{}
	return out, nil
}

// ReadBalanceSheets ...
func (m *AccountingServiceDefaultServer) ReadBalanceSheets(ctx context.Context, in *ReadBalanceSheetsRequest) (*ReadBalanceSheetsResponse, error) {
	out := &ReadBalanceSheetsResponse{}
	return out, nil
}

// ReadCashFlowStatements ...
func (m *AccountingServiceDefaultServer) ReadCashFlowStatements(ctx context.Context, in *ReadCashFlowStatementsRequest) (*ReadCashFlowStatementsResponse, error) {
	out := &ReadCashFlowStatementsResponse{}
	return out, nil
}

// ReadIncomeStatements ...
func (m *AccountingServiceDefaultServer) ReadIncomeStatements(ctx context.Context, in *ReadIncomeStatementsRequest) (*ReadIncomeStatementsResponse, error) {
	out := &ReadIncomeStatementsResponse{}
	return out, nil
}

// ReadBusinessChartOfAccounts ...
func (m *AccountingServiceDefaultServer) ReadBusinessChartOfAccounts(ctx context.Context, in *ReadBusinessChartOfAccountsRequest) (*ReadBusinessChartOfAccountsResponse, error) {
	out := &ReadBusinessChartOfAccountsResponse{}
	return out, nil
}
