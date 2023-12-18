// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: accounting_service/v1/response.proto

package accounting_servicev1

import (
	_ "github.com/cosmos/gogoproto/gogoproto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type HealthCheckResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// whether the service is healthy
	Healthy bool `protobuf:"varint,1,opt,name=healthy,proto3" json:"healthy,omitempty"`
}

func (x *HealthCheckResponse) Reset() {
	*x = HealthCheckResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounting_service_v1_response_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *HealthCheckResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*HealthCheckResponse) ProtoMessage() {}

func (x *HealthCheckResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounting_service_v1_response_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use HealthCheckResponse.ProtoReflect.Descriptor instead.
func (*HealthCheckResponse) Descriptor() ([]byte, []int) {
	return file_accounting_service_v1_response_proto_rawDescGZIP(), []int{0}
}

func (x *HealthCheckResponse) GetHealthy() bool {
	if x != nil {
		return x.Healthy
	}
	return false
}

type ReadynessCheckResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// whether the service is ready to receive traffic
	Healthy bool `protobuf:"varint,1,opt,name=healthy,proto3" json:"healthy,omitempty"`
}

func (x *ReadynessCheckResponse) Reset() {
	*x = ReadynessCheckResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounting_service_v1_response_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReadynessCheckResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReadynessCheckResponse) ProtoMessage() {}

func (x *ReadynessCheckResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounting_service_v1_response_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReadynessCheckResponse.ProtoReflect.Descriptor instead.
func (*ReadynessCheckResponse) Descriptor() ([]byte, []int) {
	return file_accounting_service_v1_response_proto_rawDescGZIP(), []int{1}
}

func (x *ReadynessCheckResponse) GetHealthy() bool {
	if x != nil {
		return x.Healthy
	}
	return false
}

type CreateProfileResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the profile identifier
	ProfileId uint64 `protobuf:"varint,1,opt,name=profile_id,json=profileId,proto3" json:"profile_id,omitempty"`
}

func (x *CreateProfileResponse) Reset() {
	*x = CreateProfileResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounting_service_v1_response_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateProfileResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateProfileResponse) ProtoMessage() {}

func (x *CreateProfileResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounting_service_v1_response_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateProfileResponse.ProtoReflect.Descriptor instead.
func (*CreateProfileResponse) Descriptor() ([]byte, []int) {
	return file_accounting_service_v1_response_proto_rawDescGZIP(), []int{2}
}

func (x *CreateProfileResponse) GetProfileId() uint64 {
	if x != nil {
		return x.ProfileId
	}
	return 0
}

type ReadProfileResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the profile of interest
	Profile *MergeBusinessProfile `protobuf:"bytes,1,opt,name=profile,proto3" json:"profile,omitempty"` // A field named "profile" of type BusinessPayrollProfile with field number 1.
}

func (x *ReadProfileResponse) Reset() {
	*x = ReadProfileResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounting_service_v1_response_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReadProfileResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReadProfileResponse) ProtoMessage() {}

func (x *ReadProfileResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounting_service_v1_response_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReadProfileResponse.ProtoReflect.Descriptor instead.
func (*ReadProfileResponse) Descriptor() ([]byte, []int) {
	return file_accounting_service_v1_response_proto_rawDescGZIP(), []int{3}
}

func (x *ReadProfileResponse) GetProfile() *MergeBusinessProfile {
	if x != nil {
		return x.Profile
	}
	return nil
}

type DeleteProfileResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// whether the profile is deleted
	IsDeleted bool `protobuf:"varint,1,opt,name=is_deleted,json=isDeleted,proto3" json:"is_deleted,omitempty"` // A boolean field named "is_deleted" with field number 1.
}

func (x *DeleteProfileResponse) Reset() {
	*x = DeleteProfileResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounting_service_v1_response_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteProfileResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteProfileResponse) ProtoMessage() {}

func (x *DeleteProfileResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounting_service_v1_response_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteProfileResponse.ProtoReflect.Descriptor instead.
func (*DeleteProfileResponse) Descriptor() ([]byte, []int) {
	return file_accounting_service_v1_response_proto_rawDescGZIP(), []int{4}
}

func (x *DeleteProfileResponse) GetIsDeleted() bool {
	if x != nil {
		return x.IsDeleted
	}
	return false
}

type UpdateProfileResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Profile *MergeBusinessProfile `protobuf:"bytes,1,opt,name=profile,proto3" json:"profile,omitempty"` // A field named "profile" of type BusinessPayrollProfile with field number 1.
}

func (x *UpdateProfileResponse) Reset() {
	*x = UpdateProfileResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounting_service_v1_response_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateProfileResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateProfileResponse) ProtoMessage() {}

func (x *UpdateProfileResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounting_service_v1_response_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateProfileResponse.ProtoReflect.Descriptor instead.
func (*UpdateProfileResponse) Descriptor() ([]byte, []int) {
	return file_accounting_service_v1_response_proto_rawDescGZIP(), []int{5}
}

func (x *UpdateProfileResponse) GetProfile() *MergeBusinessProfile {
	if x != nil {
		return x.Profile
	}
	return nil
}

type GetMergeLinkTokenResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the link token
	LinkToken string `protobuf:"bytes,1,opt,name=link_token,json=linkToken,proto3" json:"link_token,omitempty"` // A string field named "link_token" with field number 1.
	// the integration name
	IntegrationName string `protobuf:"bytes,2,opt,name=integration_name,json=integrationName,proto3" json:"integration_name,omitempty"` // A string field named "integration_name" with field number 2.
	// the magic link URL
	MagicLinkUrl string `protobuf:"bytes,3,opt,name=magic_link_url,json=magicLinkUrl,proto3" json:"magic_link_url,omitempty"` // A string field named "magic_link_url" with field number 3.
	// the end user origin id
	EndUserOriginId string `protobuf:"bytes,4,opt,name=end_user_origin_id,json=endUserOriginId,proto3" json:"end_user_origin_id,omitempty"` // A string field named "end_user_origin_id" with field number 4.
	// the organization name
	OrganizationName string `protobuf:"bytes,5,opt,name=organization_name,json=organizationName,proto3" json:"organization_name,omitempty"` // A string field named "organization_name" with field number 5.
}

func (x *GetMergeLinkTokenResponse) Reset() {
	*x = GetMergeLinkTokenResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounting_service_v1_response_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMergeLinkTokenResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMergeLinkTokenResponse) ProtoMessage() {}

func (x *GetMergeLinkTokenResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounting_service_v1_response_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMergeLinkTokenResponse.ProtoReflect.Descriptor instead.
func (*GetMergeLinkTokenResponse) Descriptor() ([]byte, []int) {
	return file_accounting_service_v1_response_proto_rawDescGZIP(), []int{6}
}

func (x *GetMergeLinkTokenResponse) GetLinkToken() string {
	if x != nil {
		return x.LinkToken
	}
	return ""
}

func (x *GetMergeLinkTokenResponse) GetIntegrationName() string {
	if x != nil {
		return x.IntegrationName
	}
	return ""
}

func (x *GetMergeLinkTokenResponse) GetMagicLinkUrl() string {
	if x != nil {
		return x.MagicLinkUrl
	}
	return ""
}

func (x *GetMergeLinkTokenResponse) GetEndUserOriginId() string {
	if x != nil {
		return x.EndUserOriginId
	}
	return ""
}

func (x *GetMergeLinkTokenResponse) GetOrganizationName() string {
	if x != nil {
		return x.OrganizationName
	}
	return ""
}

type ExchangePublicLinkTokenForAccountTokenResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the status of the exchange token
	Success bool `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"`
}

func (x *ExchangePublicLinkTokenForAccountTokenResponse) Reset() {
	*x = ExchangePublicLinkTokenForAccountTokenResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounting_service_v1_response_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ExchangePublicLinkTokenForAccountTokenResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExchangePublicLinkTokenForAccountTokenResponse) ProtoMessage() {}

func (x *ExchangePublicLinkTokenForAccountTokenResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounting_service_v1_response_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExchangePublicLinkTokenForAccountTokenResponse.ProtoReflect.Descriptor instead.
func (*ExchangePublicLinkTokenForAccountTokenResponse) Descriptor() ([]byte, []int) {
	return file_accounting_service_v1_response_proto_rawDescGZIP(), []int{7}
}

func (x *ExchangePublicLinkTokenForAccountTokenResponse) GetSuccess() bool {
	if x != nil {
		return x.Success
	}
	return false
}

type ReadBalanceSheetsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the balance sheets
	BalanceSheets []*BalanceSheet `protobuf:"bytes,1,rep,name=balance_sheets,json=balanceSheets,proto3" json:"balance_sheets,omitempty"`
	// the pagination token
	NextPage int32 `protobuf:"varint,2,opt,name=next_page,json=nextPage,proto3" json:"next_page,omitempty"`
}

func (x *ReadBalanceSheetsResponse) Reset() {
	*x = ReadBalanceSheetsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounting_service_v1_response_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReadBalanceSheetsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReadBalanceSheetsResponse) ProtoMessage() {}

func (x *ReadBalanceSheetsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounting_service_v1_response_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReadBalanceSheetsResponse.ProtoReflect.Descriptor instead.
func (*ReadBalanceSheetsResponse) Descriptor() ([]byte, []int) {
	return file_accounting_service_v1_response_proto_rawDescGZIP(), []int{8}
}

func (x *ReadBalanceSheetsResponse) GetBalanceSheets() []*BalanceSheet {
	if x != nil {
		return x.BalanceSheets
	}
	return nil
}

func (x *ReadBalanceSheetsResponse) GetNextPage() int32 {
	if x != nil {
		return x.NextPage
	}
	return 0
}

type ReadCashFlowStatementsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the cashflow sheets
	CashFlowStatements []*CashFlowStatement `protobuf:"bytes,1,rep,name=cash_flow_statements,json=cashFlowStatements,proto3" json:"cash_flow_statements,omitempty"`
	// the pagination token
	NextPage int32 `protobuf:"varint,2,opt,name=next_page,json=nextPage,proto3" json:"next_page,omitempty"`
}

func (x *ReadCashFlowStatementsResponse) Reset() {
	*x = ReadCashFlowStatementsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounting_service_v1_response_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReadCashFlowStatementsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReadCashFlowStatementsResponse) ProtoMessage() {}

func (x *ReadCashFlowStatementsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounting_service_v1_response_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReadCashFlowStatementsResponse.ProtoReflect.Descriptor instead.
func (*ReadCashFlowStatementsResponse) Descriptor() ([]byte, []int) {
	return file_accounting_service_v1_response_proto_rawDescGZIP(), []int{9}
}

func (x *ReadCashFlowStatementsResponse) GetCashFlowStatements() []*CashFlowStatement {
	if x != nil {
		return x.CashFlowStatements
	}
	return nil
}

func (x *ReadCashFlowStatementsResponse) GetNextPage() int32 {
	if x != nil {
		return x.NextPage
	}
	return 0
}

type ReadIncomeStatementsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the cashflow sheets
	IncomeStatements []*IncomeStatement `protobuf:"bytes,1,rep,name=income_statements,json=incomeStatements,proto3" json:"income_statements,omitempty"`
	// the pagination token
	NextPage int32 `protobuf:"varint,2,opt,name=next_page,json=nextPage,proto3" json:"next_page,omitempty"`
}

func (x *ReadIncomeStatementsResponse) Reset() {
	*x = ReadIncomeStatementsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounting_service_v1_response_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReadIncomeStatementsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReadIncomeStatementsResponse) ProtoMessage() {}

func (x *ReadIncomeStatementsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounting_service_v1_response_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReadIncomeStatementsResponse.ProtoReflect.Descriptor instead.
func (*ReadIncomeStatementsResponse) Descriptor() ([]byte, []int) {
	return file_accounting_service_v1_response_proto_rawDescGZIP(), []int{10}
}

func (x *ReadIncomeStatementsResponse) GetIncomeStatements() []*IncomeStatement {
	if x != nil {
		return x.IncomeStatements
	}
	return nil
}

func (x *ReadIncomeStatementsResponse) GetNextPage() int32 {
	if x != nil {
		return x.NextPage
	}
	return 0
}

type ReadBusinessChartOfAccountsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the chart of accounts
	ChartOfAccounts []*BusinessChartOfAccount `protobuf:"bytes,1,rep,name=chart_of_accounts,json=chartOfAccounts,proto3" json:"chart_of_accounts,omitempty"`
}

func (x *ReadBusinessChartOfAccountsResponse) Reset() {
	*x = ReadBusinessChartOfAccountsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounting_service_v1_response_proto_msgTypes[11]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReadBusinessChartOfAccountsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReadBusinessChartOfAccountsResponse) ProtoMessage() {}

func (x *ReadBusinessChartOfAccountsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_accounting_service_v1_response_proto_msgTypes[11]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReadBusinessChartOfAccountsResponse.ProtoReflect.Descriptor instead.
func (*ReadBusinessChartOfAccountsResponse) Descriptor() ([]byte, []int) {
	return file_accounting_service_v1_response_proto_rawDescGZIP(), []int{11}
}

func (x *ReadBusinessChartOfAccountsResponse) GetChartOfAccounts() []*BusinessChartOfAccount {
	if x != nil {
		return x.ChartOfAccounts
	}
	return nil
}

var File_accounting_service_v1_response_proto protoreflect.FileDescriptor

var file_accounting_service_v1_response_proto_rawDesc = []byte{
	0x0a, 0x24, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x15, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69,
	0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x1a, 0x3c, 0x61,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x2f, 0x76, 0x31, 0x2f, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x5f, 0x70, 0x72,
	0x6f, 0x66, 0x69, 0x6c, 0x65, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x62, 0x61, 0x73, 0x65, 0x5f, 0x73,
	0x63, 0x68, 0x65, 0x6d, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x36, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f,
	0x76, 0x31, 0x2f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x64, 0x61,
	0x74, 0x61, 0x62, 0x61, 0x73, 0x65, 0x5f, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x66, 0x69, 0x65, 0x6c, 0x64, 0x5f, 0x62, 0x65, 0x68, 0x61, 0x76, 0x69, 0x6f, 0x72, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x14, 0x67, 0x6f, 0x67, 0x6f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f,
	0x67, 0x6f, 0x67, 0x6f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x2f, 0x0a, 0x13, 0x48, 0x65,
	0x61, 0x6c, 0x74, 0x68, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x18, 0x0a, 0x07, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x79, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x08, 0x52, 0x07, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x79, 0x22, 0x32, 0x0a, 0x16, 0x52,
	0x65, 0x61, 0x64, 0x79, 0x6e, 0x65, 0x73, 0x73, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x79, 0x22,
	0x36, 0x0a, 0x15, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x66,
	0x69, 0x6c, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x09, 0x70, 0x72,
	0x6f, 0x66, 0x69, 0x6c, 0x65, 0x49, 0x64, 0x22, 0x5c, 0x0a, 0x13, 0x52, 0x65, 0x61, 0x64, 0x50,
	0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x45,
	0x0a, 0x07, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x2b, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x65, 0x72, 0x67, 0x65, 0x42, 0x75, 0x73,
	0x69, 0x6e, 0x65, 0x73, 0x73, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x52, 0x07, 0x70, 0x72,
	0x6f, 0x66, 0x69, 0x6c, 0x65, 0x22, 0x36, 0x0a, 0x15, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50,
	0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1d,
	0x0a, 0x0a, 0x69, 0x73, 0x5f, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x08, 0x52, 0x09, 0x69, 0x73, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x22, 0x5e, 0x0a,
	0x15, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x45, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2b, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e,
	0x4d, 0x65, 0x72, 0x67, 0x65, 0x42, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x50, 0x72, 0x6f,
	0x66, 0x69, 0x6c, 0x65, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x22, 0xe5, 0x01,
	0x0a, 0x19, 0x47, 0x65, 0x74, 0x4d, 0x65, 0x72, 0x67, 0x65, 0x4c, 0x69, 0x6e, 0x6b, 0x54, 0x6f,
	0x6b, 0x65, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x6c,
	0x69, 0x6e, 0x6b, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x09, 0x6c, 0x69, 0x6e, 0x6b, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x29, 0x0a, 0x10, 0x69, 0x6e,
	0x74, 0x65, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x69, 0x6e, 0x74, 0x65, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x24, 0x0a, 0x0e, 0x6d, 0x61, 0x67, 0x69, 0x63, 0x5f, 0x6c,
	0x69, 0x6e, 0x6b, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x6d,
	0x61, 0x67, 0x69, 0x63, 0x4c, 0x69, 0x6e, 0x6b, 0x55, 0x72, 0x6c, 0x12, 0x2b, 0x0a, 0x12, 0x65,
	0x6e, 0x64, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x6f, 0x72, 0x69, 0x67, 0x69, 0x6e, 0x5f, 0x69,
	0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x65, 0x6e, 0x64, 0x55, 0x73, 0x65, 0x72,
	0x4f, 0x72, 0x69, 0x67, 0x69, 0x6e, 0x49, 0x64, 0x12, 0x2b, 0x0a, 0x11, 0x6f, 0x72, 0x67, 0x61,
	0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x10, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x4e, 0x61, 0x6d, 0x65, 0x22, 0x4f, 0x0a, 0x2e, 0x45, 0x78, 0x63, 0x68, 0x61, 0x6e, 0x67,
	0x65, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x4c, 0x69, 0x6e, 0x6b, 0x54, 0x6f, 0x6b, 0x65, 0x6e,
	0x46, 0x6f, 0x72, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1d, 0x0a, 0x07, 0x73, 0x75, 0x63, 0x63, 0x65,
	0x73, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x42, 0x03, 0xe0, 0x41, 0x02, 0x52, 0x07, 0x73,
	0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x22, 0x84, 0x01, 0x0a, 0x19, 0x52, 0x65, 0x61, 0x64, 0x42,
	0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x53, 0x68, 0x65, 0x65, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4a, 0x0a, 0x0e, 0x62, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x5f,
	0x73, 0x68, 0x65, 0x65, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x23, 0x2e, 0x61,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x53, 0x68, 0x65, 0x65,
	0x74, 0x52, 0x0d, 0x62, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x53, 0x68, 0x65, 0x65, 0x74, 0x73,
	0x12, 0x1b, 0x0a, 0x09, 0x6e, 0x65, 0x78, 0x74, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x08, 0x6e, 0x65, 0x78, 0x74, 0x50, 0x61, 0x67, 0x65, 0x22, 0x99, 0x01,
	0x0a, 0x1e, 0x52, 0x65, 0x61, 0x64, 0x43, 0x61, 0x73, 0x68, 0x46, 0x6c, 0x6f, 0x77, 0x53, 0x74,
	0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x5a, 0x0a, 0x14, 0x63, 0x61, 0x73, 0x68, 0x5f, 0x66, 0x6c, 0x6f, 0x77, 0x5f, 0x73, 0x74,
	0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x28,
	0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x61, 0x73, 0x68, 0x46, 0x6c, 0x6f, 0x77, 0x53,
	0x74, 0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x12, 0x63, 0x61, 0x73, 0x68, 0x46, 0x6c,
	0x6f, 0x77, 0x53, 0x74, 0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x1b, 0x0a, 0x09,
	0x6e, 0x65, 0x78, 0x74, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x08, 0x6e, 0x65, 0x78, 0x74, 0x50, 0x61, 0x67, 0x65, 0x22, 0x90, 0x01, 0x0a, 0x1c, 0x52, 0x65,
	0x61, 0x64, 0x49, 0x6e, 0x63, 0x6f, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e,
	0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x53, 0x0a, 0x11, 0x69, 0x6e,
	0x63, 0x6f, 0x6d, 0x65, 0x5f, 0x73, 0x74, 0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x18,
	0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x26, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69,
	0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x6e,
	0x63, 0x6f, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x10, 0x69,
	0x6e, 0x63, 0x6f, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x12,
	0x1b, 0x0a, 0x09, 0x6e, 0x65, 0x78, 0x74, 0x5f, 0x70, 0x61, 0x67, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x08, 0x6e, 0x65, 0x78, 0x74, 0x50, 0x61, 0x67, 0x65, 0x22, 0x80, 0x01, 0x0a,
	0x23, 0x52, 0x65, 0x61, 0x64, 0x42, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x43, 0x68, 0x61,
	0x72, 0x74, 0x4f, 0x66, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x59, 0x0a, 0x11, 0x63, 0x68, 0x61, 0x72, 0x74, 0x5f, 0x6f, 0x66,
	0x5f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x2d, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73,
	0x43, 0x68, 0x61, 0x72, 0x74, 0x4f, 0x66, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x0f,
	0x63, 0x68, 0x61, 0x72, 0x74, 0x4f, 0x66, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x42,
	0xca, 0x02, 0x0a, 0x19, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69,
	0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x42, 0x0d, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x80,
	0x01, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x53, 0x6f, 0x6c, 0x6f,
	0x6d, 0x6f, 0x6e, 0x41, 0x49, 0x45, 0x6e, 0x67, 0x69, 0x6e, 0x65, 0x65, 0x72, 0x69, 0x6e, 0x67,
	0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2d, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x2d, 0x61,
	0x70, 0x69, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64,
	0x2f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x2d, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e,
	0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x3b, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x76,
	0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x14, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x69, 0x6e, 0x67, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x56, 0x31, 0xca, 0x02,
	0x14, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x20, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69,
	0x6e, 0x67, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42,
	0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x15, 0x41, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x69, 0x6e, 0x67, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x3a, 0x3a, 0x56, 0x31,
	0xd8, 0xe1, 0x1e, 0x00, 0xe0, 0xe1, 0x1e, 0x01, 0xf0, 0xe1, 0x1e, 0x01, 0xf8, 0xe1, 0x1e, 0x01,
	0x80, 0xe2, 0x1e, 0x01, 0xa8, 0xe2, 0x1e, 0x01, 0xb8, 0xe2, 0x1e, 0x01, 0xc0, 0xe2, 0x1e, 0x01,
	0xc8, 0xe2, 0x1e, 0x01, 0xd0, 0xe2, 0x1e, 0x01, 0xe0, 0xe2, 0x1e, 0x01, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_accounting_service_v1_response_proto_rawDescOnce sync.Once
	file_accounting_service_v1_response_proto_rawDescData = file_accounting_service_v1_response_proto_rawDesc
)

func file_accounting_service_v1_response_proto_rawDescGZIP() []byte {
	file_accounting_service_v1_response_proto_rawDescOnce.Do(func() {
		file_accounting_service_v1_response_proto_rawDescData = protoimpl.X.CompressGZIP(file_accounting_service_v1_response_proto_rawDescData)
	})
	return file_accounting_service_v1_response_proto_rawDescData
}

var file_accounting_service_v1_response_proto_msgTypes = make([]protoimpl.MessageInfo, 12)
var file_accounting_service_v1_response_proto_goTypes = []interface{}{
	(*HealthCheckResponse)(nil),                            // 0: accounting_service.v1.HealthCheckResponse
	(*ReadynessCheckResponse)(nil),                         // 1: accounting_service.v1.ReadynessCheckResponse
	(*CreateProfileResponse)(nil),                          // 2: accounting_service.v1.CreateProfileResponse
	(*ReadProfileResponse)(nil),                            // 3: accounting_service.v1.ReadProfileResponse
	(*DeleteProfileResponse)(nil),                          // 4: accounting_service.v1.DeleteProfileResponse
	(*UpdateProfileResponse)(nil),                          // 5: accounting_service.v1.UpdateProfileResponse
	(*GetMergeLinkTokenResponse)(nil),                      // 6: accounting_service.v1.GetMergeLinkTokenResponse
	(*ExchangePublicLinkTokenForAccountTokenResponse)(nil), // 7: accounting_service.v1.ExchangePublicLinkTokenForAccountTokenResponse
	(*ReadBalanceSheetsResponse)(nil),                      // 8: accounting_service.v1.ReadBalanceSheetsResponse
	(*ReadCashFlowStatementsResponse)(nil),                 // 9: accounting_service.v1.ReadCashFlowStatementsResponse
	(*ReadIncomeStatementsResponse)(nil),                   // 10: accounting_service.v1.ReadIncomeStatementsResponse
	(*ReadBusinessChartOfAccountsResponse)(nil),            // 11: accounting_service.v1.ReadBusinessChartOfAccountsResponse
	(*MergeBusinessProfile)(nil),                           // 12: accounting_service.v1.MergeBusinessProfile
	(*BalanceSheet)(nil),                                   // 13: accounting_service.v1.BalanceSheet
	(*CashFlowStatement)(nil),                              // 14: accounting_service.v1.CashFlowStatement
	(*IncomeStatement)(nil),                                // 15: accounting_service.v1.IncomeStatement
	(*BusinessChartOfAccount)(nil),                         // 16: accounting_service.v1.BusinessChartOfAccount
}
var file_accounting_service_v1_response_proto_depIdxs = []int32{
	12, // 0: accounting_service.v1.ReadProfileResponse.profile:type_name -> accounting_service.v1.MergeBusinessProfile
	12, // 1: accounting_service.v1.UpdateProfileResponse.profile:type_name -> accounting_service.v1.MergeBusinessProfile
	13, // 2: accounting_service.v1.ReadBalanceSheetsResponse.balance_sheets:type_name -> accounting_service.v1.BalanceSheet
	14, // 3: accounting_service.v1.ReadCashFlowStatementsResponse.cash_flow_statements:type_name -> accounting_service.v1.CashFlowStatement
	15, // 4: accounting_service.v1.ReadIncomeStatementsResponse.income_statements:type_name -> accounting_service.v1.IncomeStatement
	16, // 5: accounting_service.v1.ReadBusinessChartOfAccountsResponse.chart_of_accounts:type_name -> accounting_service.v1.BusinessChartOfAccount
	6,  // [6:6] is the sub-list for method output_type
	6,  // [6:6] is the sub-list for method input_type
	6,  // [6:6] is the sub-list for extension type_name
	6,  // [6:6] is the sub-list for extension extendee
	0,  // [0:6] is the sub-list for field type_name
}

func init() { file_accounting_service_v1_response_proto_init() }
func file_accounting_service_v1_response_proto_init() {
	if File_accounting_service_v1_response_proto != nil {
		return
	}
	file_accounting_service_v1_business_profile_database_schema_proto_init()
	file_accounting_service_v1_accounting_database_schema_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_accounting_service_v1_response_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*HealthCheckResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounting_service_v1_response_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReadynessCheckResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounting_service_v1_response_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateProfileResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounting_service_v1_response_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReadProfileResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounting_service_v1_response_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteProfileResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounting_service_v1_response_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateProfileResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounting_service_v1_response_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetMergeLinkTokenResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounting_service_v1_response_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ExchangePublicLinkTokenForAccountTokenResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounting_service_v1_response_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReadBalanceSheetsResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounting_service_v1_response_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReadCashFlowStatementsResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounting_service_v1_response_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReadIncomeStatementsResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_accounting_service_v1_response_proto_msgTypes[11].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReadBusinessChartOfAccountsResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_accounting_service_v1_response_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   12,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_accounting_service_v1_response_proto_goTypes,
		DependencyIndexes: file_accounting_service_v1_response_proto_depIdxs,
		MessageInfos:      file_accounting_service_v1_response_proto_msgTypes,
	}.Build()
	File_accounting_service_v1_response_proto = out.File
	file_accounting_service_v1_response_proto_rawDesc = nil
	file_accounting_service_v1_response_proto_goTypes = nil
	file_accounting_service_v1_response_proto_depIdxs = nil
}
