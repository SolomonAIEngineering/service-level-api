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

// CreateProfile ...
func (m *AccountingServiceDefaultServer) CreateProfile(ctx context.Context, in *CreateProfileRequest) (*CreateProfileResponse, error) {
	out := &CreateProfileResponse{}
	return out, nil
}

// ReadProfile ...
func (m *AccountingServiceDefaultServer) ReadProfile(ctx context.Context, in *ReadProfileRequest) (*ReadProfileResponse, error) {
	out := &ReadProfileResponse{}
	return out, nil
}

// DeleteProfile ...
func (m *AccountingServiceDefaultServer) DeleteProfile(ctx context.Context, in *DeleteProfileRequest) (*DeleteProfileResponse, error) {
	out := &DeleteProfileResponse{}
	return out, nil
}

// UpdateProfile ...
func (m *AccountingServiceDefaultServer) UpdateProfile(ctx context.Context, in *UpdateProfileRequest) (*UpdateProfileResponse, error) {
	out := &UpdateProfileResponse{}
	return out, nil
}

// GetLinkToken ...
func (m *AccountingServiceDefaultServer) GetLinkToken(ctx context.Context, in *GetLinkTokenRequest) (*GetLinkTokenResponse, error) {
	out := &GetLinkTokenResponse{}
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
