// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: accounting_service/v1/service.proto

package accounting_servicev1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	AccountingService_HealthCheck_FullMethodName                            = "/accounting_service.v1.AccountingService/HealthCheck"
	AccountingService_ReadynessCheck_FullMethodName                         = "/accounting_service.v1.AccountingService/ReadynessCheck"
	AccountingService_CreateProfile_FullMethodName                          = "/accounting_service.v1.AccountingService/CreateProfile"
	AccountingService_ReadProfile_FullMethodName                            = "/accounting_service.v1.AccountingService/ReadProfile"
	AccountingService_DeleteProfile_FullMethodName                          = "/accounting_service.v1.AccountingService/DeleteProfile"
	AccountingService_UpdateProfile_FullMethodName                          = "/accounting_service.v1.AccountingService/UpdateProfile"
	AccountingService_GetLinkToken_FullMethodName                           = "/accounting_service.v1.AccountingService/GetLinkToken"
	AccountingService_ExchangePublicLinkTokenForAccountToken_FullMethodName = "/accounting_service.v1.AccountingService/ExchangePublicLinkTokenForAccountToken"
	AccountingService_ReadBalanceSheets_FullMethodName                      = "/accounting_service.v1.AccountingService/ReadBalanceSheets"
	AccountingService_ReadCashFlowStatements_FullMethodName                 = "/accounting_service.v1.AccountingService/ReadCashFlowStatements"
	AccountingService_ReadIncomeStatements_FullMethodName                   = "/accounting_service.v1.AccountingService/ReadIncomeStatements"
)

// AccountingServiceClient is the client API for AccountingService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AccountingServiceClient interface {
	// Healthcheck performs a health check on the service
	HealthCheck(ctx context.Context, in *HealthCheckRequest, opts ...grpc.CallOption) (*HealthCheckResponse, error)
	// ReadynessCheck performs a readiness check on the service
	ReadynessCheck(ctx context.Context, in *ReadynessCheckRequest, opts ...grpc.CallOption) (*ReadynessCheckResponse, error)
	// creates a business accouting profile on the service
	CreateProfile(ctx context.Context, in *CreateProfileRequest, opts ...grpc.CallOption) (*CreateProfileResponse, error)
	// gets business accounting profile
	ReadProfile(ctx context.Context, in *ReadProfileRequest, opts ...grpc.CallOption) (*ReadProfileResponse, error)
	// delete business payroll profile
	DeleteProfile(ctx context.Context, in *DeleteProfileRequest, opts ...grpc.CallOption) (*DeleteProfileResponse, error)
	// updates a business account
	UpdateProfile(ctx context.Context, in *UpdateProfileRequest, opts ...grpc.CallOption) (*UpdateProfileResponse, error)
	// enables the client to get a link_token to initialize a Link session for your end user.
	GetLinkToken(ctx context.Context, in *GetLinkTokenRequest, opts ...grpc.CallOption) (*GetLinkTokenResponse, error)
	// enables the client to exchange a public link token for an access token
	ExchangePublicLinkTokenForAccountToken(ctx context.Context, in *ExchangePublicLinkTokenForAccountTokenRequest, opts ...grpc.CallOption) (*ExchangePublicLinkTokenForAccountTokenResponse, error)
	ReadBalanceSheets(ctx context.Context, in *ReadBalanceSheetsRequest, opts ...grpc.CallOption) (*ReadBalanceSheetsResponse, error)
	ReadCashFlowStatements(ctx context.Context, in *ReadCashFlowStatementsRequest, opts ...grpc.CallOption) (*ReadCashFlowStatementsResponse, error)
	ReadIncomeStatements(ctx context.Context, in *ReadIncomeStatementsRequest, opts ...grpc.CallOption) (*ReadIncomeStatementsResponse, error)
}

type accountingServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAccountingServiceClient(cc grpc.ClientConnInterface) AccountingServiceClient {
	return &accountingServiceClient{cc}
}

func (c *accountingServiceClient) HealthCheck(ctx context.Context, in *HealthCheckRequest, opts ...grpc.CallOption) (*HealthCheckResponse, error) {
	out := new(HealthCheckResponse)
	err := c.cc.Invoke(ctx, AccountingService_HealthCheck_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountingServiceClient) ReadynessCheck(ctx context.Context, in *ReadynessCheckRequest, opts ...grpc.CallOption) (*ReadynessCheckResponse, error) {
	out := new(ReadynessCheckResponse)
	err := c.cc.Invoke(ctx, AccountingService_ReadynessCheck_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountingServiceClient) CreateProfile(ctx context.Context, in *CreateProfileRequest, opts ...grpc.CallOption) (*CreateProfileResponse, error) {
	out := new(CreateProfileResponse)
	err := c.cc.Invoke(ctx, AccountingService_CreateProfile_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountingServiceClient) ReadProfile(ctx context.Context, in *ReadProfileRequest, opts ...grpc.CallOption) (*ReadProfileResponse, error) {
	out := new(ReadProfileResponse)
	err := c.cc.Invoke(ctx, AccountingService_ReadProfile_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountingServiceClient) DeleteProfile(ctx context.Context, in *DeleteProfileRequest, opts ...grpc.CallOption) (*DeleteProfileResponse, error) {
	out := new(DeleteProfileResponse)
	err := c.cc.Invoke(ctx, AccountingService_DeleteProfile_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountingServiceClient) UpdateProfile(ctx context.Context, in *UpdateProfileRequest, opts ...grpc.CallOption) (*UpdateProfileResponse, error) {
	out := new(UpdateProfileResponse)
	err := c.cc.Invoke(ctx, AccountingService_UpdateProfile_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountingServiceClient) GetLinkToken(ctx context.Context, in *GetLinkTokenRequest, opts ...grpc.CallOption) (*GetLinkTokenResponse, error) {
	out := new(GetLinkTokenResponse)
	err := c.cc.Invoke(ctx, AccountingService_GetLinkToken_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountingServiceClient) ExchangePublicLinkTokenForAccountToken(ctx context.Context, in *ExchangePublicLinkTokenForAccountTokenRequest, opts ...grpc.CallOption) (*ExchangePublicLinkTokenForAccountTokenResponse, error) {
	out := new(ExchangePublicLinkTokenForAccountTokenResponse)
	err := c.cc.Invoke(ctx, AccountingService_ExchangePublicLinkTokenForAccountToken_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountingServiceClient) ReadBalanceSheets(ctx context.Context, in *ReadBalanceSheetsRequest, opts ...grpc.CallOption) (*ReadBalanceSheetsResponse, error) {
	out := new(ReadBalanceSheetsResponse)
	err := c.cc.Invoke(ctx, AccountingService_ReadBalanceSheets_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountingServiceClient) ReadCashFlowStatements(ctx context.Context, in *ReadCashFlowStatementsRequest, opts ...grpc.CallOption) (*ReadCashFlowStatementsResponse, error) {
	out := new(ReadCashFlowStatementsResponse)
	err := c.cc.Invoke(ctx, AccountingService_ReadCashFlowStatements_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountingServiceClient) ReadIncomeStatements(ctx context.Context, in *ReadIncomeStatementsRequest, opts ...grpc.CallOption) (*ReadIncomeStatementsResponse, error) {
	out := new(ReadIncomeStatementsResponse)
	err := c.cc.Invoke(ctx, AccountingService_ReadIncomeStatements_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AccountingServiceServer is the server API for AccountingService service.
// All implementations must embed UnimplementedAccountingServiceServer
// for forward compatibility
type AccountingServiceServer interface {
	// Healthcheck performs a health check on the service
	HealthCheck(context.Context, *HealthCheckRequest) (*HealthCheckResponse, error)
	// ReadynessCheck performs a readiness check on the service
	ReadynessCheck(context.Context, *ReadynessCheckRequest) (*ReadynessCheckResponse, error)
	// creates a business accouting profile on the service
	CreateProfile(context.Context, *CreateProfileRequest) (*CreateProfileResponse, error)
	// gets business accounting profile
	ReadProfile(context.Context, *ReadProfileRequest) (*ReadProfileResponse, error)
	// delete business payroll profile
	DeleteProfile(context.Context, *DeleteProfileRequest) (*DeleteProfileResponse, error)
	// updates a business account
	UpdateProfile(context.Context, *UpdateProfileRequest) (*UpdateProfileResponse, error)
	// enables the client to get a link_token to initialize a Link session for your end user.
	GetLinkToken(context.Context, *GetLinkTokenRequest) (*GetLinkTokenResponse, error)
	// enables the client to exchange a public link token for an access token
	ExchangePublicLinkTokenForAccountToken(context.Context, *ExchangePublicLinkTokenForAccountTokenRequest) (*ExchangePublicLinkTokenForAccountTokenResponse, error)
	ReadBalanceSheets(context.Context, *ReadBalanceSheetsRequest) (*ReadBalanceSheetsResponse, error)
	ReadCashFlowStatements(context.Context, *ReadCashFlowStatementsRequest) (*ReadCashFlowStatementsResponse, error)
	ReadIncomeStatements(context.Context, *ReadIncomeStatementsRequest) (*ReadIncomeStatementsResponse, error)
	mustEmbedUnimplementedAccountingServiceServer()
}

// UnimplementedAccountingServiceServer must be embedded to have forward compatible implementations.
type UnimplementedAccountingServiceServer struct {
}

func (UnimplementedAccountingServiceServer) HealthCheck(context.Context, *HealthCheckRequest) (*HealthCheckResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method HealthCheck not implemented")
}
func (UnimplementedAccountingServiceServer) ReadynessCheck(context.Context, *ReadynessCheckRequest) (*ReadynessCheckResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReadynessCheck not implemented")
}
func (UnimplementedAccountingServiceServer) CreateProfile(context.Context, *CreateProfileRequest) (*CreateProfileResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateProfile not implemented")
}
func (UnimplementedAccountingServiceServer) ReadProfile(context.Context, *ReadProfileRequest) (*ReadProfileResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReadProfile not implemented")
}
func (UnimplementedAccountingServiceServer) DeleteProfile(context.Context, *DeleteProfileRequest) (*DeleteProfileResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteProfile not implemented")
}
func (UnimplementedAccountingServiceServer) UpdateProfile(context.Context, *UpdateProfileRequest) (*UpdateProfileResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateProfile not implemented")
}
func (UnimplementedAccountingServiceServer) GetLinkToken(context.Context, *GetLinkTokenRequest) (*GetLinkTokenResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetLinkToken not implemented")
}
func (UnimplementedAccountingServiceServer) ExchangePublicLinkTokenForAccountToken(context.Context, *ExchangePublicLinkTokenForAccountTokenRequest) (*ExchangePublicLinkTokenForAccountTokenResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ExchangePublicLinkTokenForAccountToken not implemented")
}
func (UnimplementedAccountingServiceServer) ReadBalanceSheets(context.Context, *ReadBalanceSheetsRequest) (*ReadBalanceSheetsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReadBalanceSheets not implemented")
}
func (UnimplementedAccountingServiceServer) ReadCashFlowStatements(context.Context, *ReadCashFlowStatementsRequest) (*ReadCashFlowStatementsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReadCashFlowStatements not implemented")
}
func (UnimplementedAccountingServiceServer) ReadIncomeStatements(context.Context, *ReadIncomeStatementsRequest) (*ReadIncomeStatementsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReadIncomeStatements not implemented")
}
func (UnimplementedAccountingServiceServer) mustEmbedUnimplementedAccountingServiceServer() {}

// UnsafeAccountingServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AccountingServiceServer will
// result in compilation errors.
type UnsafeAccountingServiceServer interface {
	mustEmbedUnimplementedAccountingServiceServer()
}

func RegisterAccountingServiceServer(s grpc.ServiceRegistrar, srv AccountingServiceServer) {
	s.RegisterService(&AccountingService_ServiceDesc, srv)
}

func _AccountingService_HealthCheck_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(HealthCheckRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountingServiceServer).HealthCheck(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountingService_HealthCheck_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountingServiceServer).HealthCheck(ctx, req.(*HealthCheckRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountingService_ReadynessCheck_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReadynessCheckRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountingServiceServer).ReadynessCheck(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountingService_ReadynessCheck_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountingServiceServer).ReadynessCheck(ctx, req.(*ReadynessCheckRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountingService_CreateProfile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateProfileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountingServiceServer).CreateProfile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountingService_CreateProfile_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountingServiceServer).CreateProfile(ctx, req.(*CreateProfileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountingService_ReadProfile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReadProfileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountingServiceServer).ReadProfile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountingService_ReadProfile_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountingServiceServer).ReadProfile(ctx, req.(*ReadProfileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountingService_DeleteProfile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteProfileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountingServiceServer).DeleteProfile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountingService_DeleteProfile_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountingServiceServer).DeleteProfile(ctx, req.(*DeleteProfileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountingService_UpdateProfile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateProfileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountingServiceServer).UpdateProfile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountingService_UpdateProfile_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountingServiceServer).UpdateProfile(ctx, req.(*UpdateProfileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountingService_GetLinkToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetLinkTokenRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountingServiceServer).GetLinkToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountingService_GetLinkToken_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountingServiceServer).GetLinkToken(ctx, req.(*GetLinkTokenRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountingService_ExchangePublicLinkTokenForAccountToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ExchangePublicLinkTokenForAccountTokenRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountingServiceServer).ExchangePublicLinkTokenForAccountToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountingService_ExchangePublicLinkTokenForAccountToken_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountingServiceServer).ExchangePublicLinkTokenForAccountToken(ctx, req.(*ExchangePublicLinkTokenForAccountTokenRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountingService_ReadBalanceSheets_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReadBalanceSheetsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountingServiceServer).ReadBalanceSheets(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountingService_ReadBalanceSheets_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountingServiceServer).ReadBalanceSheets(ctx, req.(*ReadBalanceSheetsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountingService_ReadCashFlowStatements_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReadCashFlowStatementsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountingServiceServer).ReadCashFlowStatements(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountingService_ReadCashFlowStatements_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountingServiceServer).ReadCashFlowStatements(ctx, req.(*ReadCashFlowStatementsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountingService_ReadIncomeStatements_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReadIncomeStatementsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountingServiceServer).ReadIncomeStatements(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountingService_ReadIncomeStatements_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountingServiceServer).ReadIncomeStatements(ctx, req.(*ReadIncomeStatementsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AccountingService_ServiceDesc is the grpc.ServiceDesc for AccountingService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AccountingService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "accounting_service.v1.AccountingService",
	HandlerType: (*AccountingServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "HealthCheck",
			Handler:    _AccountingService_HealthCheck_Handler,
		},
		{
			MethodName: "ReadynessCheck",
			Handler:    _AccountingService_ReadynessCheck_Handler,
		},
		{
			MethodName: "CreateProfile",
			Handler:    _AccountingService_CreateProfile_Handler,
		},
		{
			MethodName: "ReadProfile",
			Handler:    _AccountingService_ReadProfile_Handler,
		},
		{
			MethodName: "DeleteProfile",
			Handler:    _AccountingService_DeleteProfile_Handler,
		},
		{
			MethodName: "UpdateProfile",
			Handler:    _AccountingService_UpdateProfile_Handler,
		},
		{
			MethodName: "GetLinkToken",
			Handler:    _AccountingService_GetLinkToken_Handler,
		},
		{
			MethodName: "ExchangePublicLinkTokenForAccountToken",
			Handler:    _AccountingService_ExchangePublicLinkTokenForAccountToken_Handler,
		},
		{
			MethodName: "ReadBalanceSheets",
			Handler:    _AccountingService_ReadBalanceSheets_Handler,
		},
		{
			MethodName: "ReadCashFlowStatements",
			Handler:    _AccountingService_ReadCashFlowStatements_Handler,
		},
		{
			MethodName: "ReadIncomeStatements",
			Handler:    _AccountingService_ReadIncomeStatements_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "accounting_service/v1/service.proto",
}
