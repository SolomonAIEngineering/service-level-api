// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: accounting_service/v1/business_profile_database_schema.proto

package accounting_servicev1

import (
	_ "github.com/envoyproxy/protoc-gen-validate/validate"
	_ "github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2/options"
	_ "github.com/infobloxopen/protoc-gen-gorm/options"
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

// MergeBusinessProfile stores high level user profile details
// such as the id, user_id tied to the profile, and many more
type MergeBusinessProfile struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// id
	Id uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	// the auth0 user id is required to create an account as it will be the source of truth used across the platform
	AuthZeroUserId string `protobuf:"bytes,2,opt,name=auth_zero_user_id,json=authZeroUserId,proto3" json:"auth_zero_user_id,omitempty"`
	CompanyName    string `protobuf:"bytes,3,opt,name=company_name,json=companyName,proto3" json:"company_name,omitempty"`
	// a user profile can have many links (connected institutions) of which finanical accounts are tied to (checking, savings, etc)
	Email string `protobuf:"bytes,8,opt,name=email,proto3" json:"email,omitempty"`
	// this is the accounting integration the business has decided to authorize
	AccountingIntegrationMergeLink []*AccountingIntegrationMergeLink `protobuf:"bytes,9,rep,name=accounting_integration_merge_link,json=accountingIntegrationMergeLink,proto3" json:"accounting_integration_merge_link,omitempty"`
	// this is the payroll integration the business has decided to authorize
	PayrollIntegrationMergeLink []*HrisIntegrationMergeLink `protobuf:"bytes,10,rep,name=payroll_integration_merge_link,json=payrollIntegrationMergeLink,proto3" json:"payroll_integration_merge_link,omitempty"`
	// ths is the actionable inisghts the business has be provided with
	ActionablePersonalInsights []*BusinessActionableInsight `protobuf:"bytes,11,rep,name=actionable_personal_insights,json=actionablePersonalInsights,proto3" json:"actionable_personal_insights,omitempty"`
}

func (x *MergeBusinessProfile) Reset() {
	*x = MergeBusinessProfile{}
	if protoimpl.UnsafeEnabled {
		mi := &file_accounting_service_v1_business_profile_database_schema_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MergeBusinessProfile) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MergeBusinessProfile) ProtoMessage() {}

func (x *MergeBusinessProfile) ProtoReflect() protoreflect.Message {
	mi := &file_accounting_service_v1_business_profile_database_schema_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MergeBusinessProfile.ProtoReflect.Descriptor instead.
func (*MergeBusinessProfile) Descriptor() ([]byte, []int) {
	return file_accounting_service_v1_business_profile_database_schema_proto_rawDescGZIP(), []int{0}
}

func (x *MergeBusinessProfile) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *MergeBusinessProfile) GetAuthZeroUserId() string {
	if x != nil {
		return x.AuthZeroUserId
	}
	return ""
}

func (x *MergeBusinessProfile) GetCompanyName() string {
	if x != nil {
		return x.CompanyName
	}
	return ""
}

func (x *MergeBusinessProfile) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *MergeBusinessProfile) GetAccountingIntegrationMergeLink() []*AccountingIntegrationMergeLink {
	if x != nil {
		return x.AccountingIntegrationMergeLink
	}
	return nil
}

func (x *MergeBusinessProfile) GetPayrollIntegrationMergeLink() []*HrisIntegrationMergeLink {
	if x != nil {
		return x.PayrollIntegrationMergeLink
	}
	return nil
}

func (x *MergeBusinessProfile) GetActionablePersonalInsights() []*BusinessActionableInsight {
	if x != nil {
		return x.ActionablePersonalInsights
	}
	return nil
}

var File_accounting_service_v1_business_profile_database_schema_proto protoreflect.FileDescriptor

var file_accounting_service_v1_business_profile_database_schema_proto_rawDesc = []byte{
	0x0a, 0x3c, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73,
	0x5f, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x62, 0x61, 0x73,
	0x65, 0x5f, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x15,
	0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x76, 0x31, 0x1a, 0x22, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x2d, 0x67, 0x65,
	0x6e, 0x2d, 0x67, 0x6f, 0x72, 0x6d, 0x2f, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2f, 0x67,
	0x6f, 0x72, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x76, 0x61, 0x6c, 0x69, 0x64,
	0x61, 0x74, 0x65, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x2d, 0x67, 0x65, 0x6e, 0x2d, 0x6f,
	0x70, 0x65, 0x6e, 0x61, 0x70, 0x69, 0x76, 0x32, 0x2f, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x3f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x61, 0x62, 0x6c, 0x65, 0x5f, 0x69, 0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x73, 0x5f, 0x64, 0x61,
	0x74, 0x61, 0x62, 0x61, 0x73, 0x65, 0x5f, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x33, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x61, 0x79, 0x72, 0x6f,
	0x6c, 0x6c, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x62, 0x61, 0x73, 0x65, 0x5f, 0x73, 0x63, 0x68, 0x65,
	0x6d, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x36, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x2f,
	0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x62,
	0x61, 0x73, 0x65, 0x5f, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x66, 0x69, 0x65,
	0x6c, 0x64, 0x5f, 0x62, 0x65, 0x68, 0x61, 0x76, 0x69, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x22, 0xe0, 0x04, 0x0a, 0x14, 0x4d, 0x65, 0x72, 0x67, 0x65, 0x42, 0x75, 0x73, 0x69, 0x6e,
	0x65, 0x73, 0x73, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x12, 0x39, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x42, 0x29, 0x92, 0x41, 0x00, 0xba, 0xb9, 0x19, 0x22, 0x0a,
	0x20, 0x5a, 0x1e, 0x69, 0x64, 0x78, 0x5f, 0x6d, 0x65, 0x72, 0x67, 0x65, 0x5f, 0x62, 0x75, 0x73,
	0x69, 0x6e, 0x65, 0x73, 0x73, 0x5f, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x5f, 0x69,
	0x64, 0x52, 0x02, 0x69, 0x64, 0x12, 0x35, 0x0a, 0x11, 0x61, 0x75, 0x74, 0x68, 0x5f, 0x7a, 0x65,
	0x72, 0x6f, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x42, 0x0a, 0xe0, 0x41, 0x02, 0xfa, 0x42, 0x04, 0x72, 0x02, 0x10, 0x01, 0x52, 0x0e, 0x61, 0x75,
	0x74, 0x68, 0x5a, 0x65, 0x72, 0x6f, 0x55, 0x73, 0x65, 0x72, 0x49, 0x64, 0x12, 0x21, 0x0a, 0x0c,
	0x63, 0x6f, 0x6d, 0x70, 0x61, 0x6e, 0x79, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0b, 0x63, 0x6f, 0x6d, 0x70, 0x61, 0x6e, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x12,
	0x20, 0x0a, 0x05, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x42, 0x0a,
	0xe0, 0x41, 0x02, 0xfa, 0x42, 0x04, 0x72, 0x02, 0x60, 0x01, 0x52, 0x05, 0x65, 0x6d, 0x61, 0x69,
	0x6c, 0x12, 0x8a, 0x01, 0x0a, 0x21, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67,
	0x5f, 0x69, 0x6e, 0x74, 0x65, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x6d, 0x65, 0x72,
	0x67, 0x65, 0x5f, 0x6c, 0x69, 0x6e, 0x6b, 0x18, 0x09, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x35, 0x2e,
	0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67,
	0x49, 0x6e, 0x74, 0x65, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4d, 0x65, 0x72, 0x67, 0x65,
	0x4c, 0x69, 0x6e, 0x6b, 0x42, 0x08, 0xba, 0xb9, 0x19, 0x04, 0x2a, 0x02, 0x48, 0x01, 0x52, 0x1e,
	0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x49, 0x6e, 0x74, 0x65, 0x67, 0x72,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4d, 0x65, 0x72, 0x67, 0x65, 0x4c, 0x69, 0x6e, 0x6b, 0x12, 0x7e,
	0x0a, 0x1e, 0x70, 0x61, 0x79, 0x72, 0x6f, 0x6c, 0x6c, 0x5f, 0x69, 0x6e, 0x74, 0x65, 0x67, 0x72,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x6d, 0x65, 0x72, 0x67, 0x65, 0x5f, 0x6c, 0x69, 0x6e, 0x6b,
	0x18, 0x0a, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2f, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x48,
	0x72, 0x69, 0x73, 0x49, 0x6e, 0x74, 0x65, 0x67, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4d, 0x65,
	0x72, 0x67, 0x65, 0x4c, 0x69, 0x6e, 0x6b, 0x42, 0x08, 0xba, 0xb9, 0x19, 0x04, 0x2a, 0x02, 0x48,
	0x01, 0x52, 0x1b, 0x70, 0x61, 0x79, 0x72, 0x6f, 0x6c, 0x6c, 0x49, 0x6e, 0x74, 0x65, 0x67, 0x72,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4d, 0x65, 0x72, 0x67, 0x65, 0x4c, 0x69, 0x6e, 0x6b, 0x12, 0x7c,
	0x0a, 0x1c, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x5f, 0x70, 0x65, 0x72,
	0x73, 0x6f, 0x6e, 0x61, 0x6c, 0x5f, 0x69, 0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x73, 0x18, 0x0b,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x30, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e,
	0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x42, 0x75, 0x73,
	0x69, 0x6e, 0x65, 0x73, 0x73, 0x41, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x49,
	0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x42, 0x08, 0xba, 0xb9, 0x19, 0x04, 0x2a, 0x02, 0x48, 0x01,
	0x52, 0x1a, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x50, 0x65, 0x72, 0x73,
	0x6f, 0x6e, 0x61, 0x6c, 0x49, 0x6e, 0x73, 0x69, 0x67, 0x68, 0x74, 0x73, 0x3a, 0x06, 0xba, 0xb9,
	0x19, 0x02, 0x08, 0x01, 0x42, 0xb3, 0x02, 0x0a, 0x19, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e,
	0x76, 0x31, 0x42, 0x22, 0x42, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x50, 0x72, 0x6f, 0x66,
	0x69, 0x6c, 0x65, 0x44, 0x61, 0x74, 0x61, 0x62, 0x61, 0x73, 0x65, 0x53, 0x63, 0x68, 0x65, 0x6d,
	0x61, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x80, 0x01, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x53, 0x6f, 0x6c, 0x6f, 0x6d, 0x6f, 0x6e, 0x41, 0x49, 0x45,
	0x6e, 0x67, 0x69, 0x6e, 0x65, 0x65, 0x72, 0x69, 0x6e, 0x67, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2d, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x6b, 0x67,
	0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2f, 0x61, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x69, 0x6e, 0x67, 0x2d, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x76, 0x31,
	0x2f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x3b, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e,
	0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x41, 0x58,
	0x58, 0xaa, 0x02, 0x14, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x14, 0x41, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x69, 0x6e, 0x67, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5c, 0x56, 0x31, 0xe2,
	0x02, 0x20, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0xea, 0x02, 0x15, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x53,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_accounting_service_v1_business_profile_database_schema_proto_rawDescOnce sync.Once
	file_accounting_service_v1_business_profile_database_schema_proto_rawDescData = file_accounting_service_v1_business_profile_database_schema_proto_rawDesc
)

func file_accounting_service_v1_business_profile_database_schema_proto_rawDescGZIP() []byte {
	file_accounting_service_v1_business_profile_database_schema_proto_rawDescOnce.Do(func() {
		file_accounting_service_v1_business_profile_database_schema_proto_rawDescData = protoimpl.X.CompressGZIP(file_accounting_service_v1_business_profile_database_schema_proto_rawDescData)
	})
	return file_accounting_service_v1_business_profile_database_schema_proto_rawDescData
}

var file_accounting_service_v1_business_profile_database_schema_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_accounting_service_v1_business_profile_database_schema_proto_goTypes = []interface{}{
	(*MergeBusinessProfile)(nil),           // 0: accounting_service.v1.MergeBusinessProfile
	(*AccountingIntegrationMergeLink)(nil), // 1: accounting_service.v1.AccountingIntegrationMergeLink
	(*HrisIntegrationMergeLink)(nil),       // 2: accounting_service.v1.HrisIntegrationMergeLink
	(*BusinessActionableInsight)(nil),      // 3: accounting_service.v1.BusinessActionableInsight
}
var file_accounting_service_v1_business_profile_database_schema_proto_depIdxs = []int32{
	1, // 0: accounting_service.v1.MergeBusinessProfile.accounting_integration_merge_link:type_name -> accounting_service.v1.AccountingIntegrationMergeLink
	2, // 1: accounting_service.v1.MergeBusinessProfile.payroll_integration_merge_link:type_name -> accounting_service.v1.HrisIntegrationMergeLink
	3, // 2: accounting_service.v1.MergeBusinessProfile.actionable_personal_insights:type_name -> accounting_service.v1.BusinessActionableInsight
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_accounting_service_v1_business_profile_database_schema_proto_init() }
func file_accounting_service_v1_business_profile_database_schema_proto_init() {
	if File_accounting_service_v1_business_profile_database_schema_proto != nil {
		return
	}
	file_accounting_service_v1_actionable_insights_database_schema_proto_init()
	file_accounting_service_v1_payroll_database_schema_proto_init()
	file_accounting_service_v1_accounting_database_schema_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_accounting_service_v1_business_profile_database_schema_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MergeBusinessProfile); i {
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
			RawDescriptor: file_accounting_service_v1_business_profile_database_schema_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_accounting_service_v1_business_profile_database_schema_proto_goTypes,
		DependencyIndexes: file_accounting_service_v1_business_profile_database_schema_proto_depIdxs,
		MessageInfos:      file_accounting_service_v1_business_profile_database_schema_proto_msgTypes,
	}.Build()
	File_accounting_service_v1_business_profile_database_schema_proto = out.File
	file_accounting_service_v1_business_profile_database_schema_proto_rawDesc = nil
	file_accounting_service_v1_business_profile_database_schema_proto_goTypes = nil
	file_accounting_service_v1_business_profile_database_schema_proto_depIdxs = nil
}
