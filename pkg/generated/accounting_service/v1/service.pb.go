// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: accounting_service/v1/service.proto

package accounting_servicev1

import (
	_ "github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2/options"
	_ "github.com/infobloxopen/protoc-gen-gorm/options"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_accounting_service_v1_service_proto protoreflect.FileDescriptor

var file_accounting_service_v1_service_proto_rawDesc = []byte{
	0x0a, 0x23, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x15, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e,
	0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x1a, 0x23, 0x61, 0x63,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x2f, 0x76, 0x31, 0x2f, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x24, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x22, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x2d,
	0x67, 0x65, 0x6e, 0x2d, 0x67, 0x6f, 0x72, 0x6d, 0x2f, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x2f, 0x67, 0x6f, 0x72, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x63, 0x2d, 0x67, 0x65, 0x6e, 0x2d, 0x6f, 0x70, 0x65, 0x6e, 0x61, 0x70, 0x69, 0x76, 0x32, 0x2f,
	0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32, 0xe9, 0x1f, 0x0a, 0x11, 0x41, 0x63,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12,
	0x97, 0x02, 0x0a, 0x0b, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x12,
	0x29, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x43, 0x68,
	0x65, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2a, 0x2e, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e,
	0x76, 0x31, 0x2e, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0xb0, 0x01, 0x92, 0x41, 0x96, 0x01, 0x0a, 0x0e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x20, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x12, 0x0c, 0x48,
	0x65, 0x61, 0x6c, 0x74, 0x68, 0x20, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x1a, 0x27, 0x50, 0x65, 0x72,
	0x66, 0x6f, 0x72, 0x6d, 0x73, 0x20, 0x61, 0x20, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x20, 0x63,
	0x68, 0x65, 0x63, 0x6b, 0x20, 0x6f, 0x6e, 0x20, 0x74, 0x68, 0x65, 0x20, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2e, 0x2a, 0x0b, 0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x43, 0x68, 0x65, 0x63,
	0x6b, 0x4a, 0x40, 0x0a, 0x03, 0x32, 0x30, 0x30, 0x12, 0x39, 0x0a, 0x16, 0x41, 0x20, 0x73, 0x75,
	0x63, 0x63, 0x65, 0x73, 0x73, 0x66, 0x75, 0x6c, 0x20, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x2e, 0x12, 0x1f, 0x0a, 0x1d, 0x1a, 0x1b, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e,
	0x48, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x10, 0x12, 0x0e, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x76, 0x31, 0x2f, 0x68, 0x65, 0x61, 0x6c, 0x74, 0x68, 0x12, 0xae, 0x02, 0x0a, 0x0e, 0x52, 0x65,
	0x61, 0x64, 0x79, 0x6e, 0x65, 0x73, 0x73, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x12, 0x2c, 0x2e, 0x61,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x61, 0x64, 0x79, 0x6e, 0x65, 0x73, 0x73, 0x43, 0x68,
	0x65, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2d, 0x2e, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e,
	0x76, 0x31, 0x2e, 0x52, 0x65, 0x61, 0x64, 0x79, 0x6e, 0x65, 0x73, 0x73, 0x43, 0x68, 0x65, 0x63,
	0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0xbe, 0x01, 0x92, 0x41, 0xa5, 0x01,
	0x0a, 0x11, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x20, 0x52, 0x65, 0x61, 0x64, 0x69, 0x6e,
	0x65, 0x73, 0x73, 0x12, 0x0f, 0x52, 0x65, 0x61, 0x64, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x20, 0x43,
	0x68, 0x65, 0x63, 0x6b, 0x1a, 0x2a, 0x50, 0x65, 0x72, 0x66, 0x6f, 0x72, 0x6d, 0x73, 0x20, 0x61,
	0x20, 0x72, 0x65, 0x61, 0x64, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x20, 0x63, 0x68, 0x65, 0x63, 0x6b,
	0x20, 0x6f, 0x6e, 0x20, 0x74, 0x68, 0x65, 0x20, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e,
	0x2a, 0x0e, 0x52, 0x65, 0x61, 0x64, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x43, 0x68, 0x65, 0x63, 0x6b,
	0x4a, 0x43, 0x0a, 0x03, 0x32, 0x30, 0x30, 0x12, 0x3c, 0x0a, 0x16, 0x41, 0x20, 0x73, 0x75, 0x63,
	0x63, 0x65, 0x73, 0x73, 0x66, 0x75, 0x6c, 0x20, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x2e, 0x12, 0x22, 0x0a, 0x20, 0x1a, 0x1e, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x52,
	0x65, 0x61, 0x64, 0x79, 0x6e, 0x65, 0x73, 0x73, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x0f, 0x12, 0x0d, 0x2f, 0x61, 0x70,
	0x69, 0x2f, 0x76, 0x31, 0x2f, 0x72, 0x65, 0x61, 0x64, 0x79, 0x12, 0xd9, 0x02, 0x0a, 0x17, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x50,
	0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x12, 0x35, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x50,
	0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x36, 0x2e,
	0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x41, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0xce, 0x01, 0x92, 0x41, 0xb0, 0x01, 0x0a, 0x07, 0x70, 0x72,
	0x6f, 0x66, 0x69, 0x6c, 0x65, 0x12, 0x16, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x20, 0x50, 0x61,
	0x79, 0x72, 0x6f, 0x6c, 0x6c, 0x20, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x1a, 0x1a, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x73, 0x20, 0x61, 0x20, 0x70, 0x61, 0x79, 0x72, 0x6f, 0x6c, 0x6c,
	0x20, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x2e, 0x2a, 0x14, 0x43, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x50, 0x61, 0x79, 0x72, 0x6f, 0x6c, 0x6c, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x4a,
	0x5b, 0x0a, 0x03, 0x32, 0x30, 0x30, 0x12, 0x54, 0x0a, 0x16, 0x41, 0x20, 0x73, 0x75, 0x63, 0x63,
	0x65, 0x73, 0x73, 0x66, 0x75, 0x6c, 0x20, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2e,
	0x12, 0x3a, 0x0a, 0x38, 0x1a, 0x36, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x42, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x50, 0x61, 0x79, 0x72,
	0x6f, 0x6c, 0x6c, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x50, 0x72, 0x6f,
	0x66, 0x69, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x82, 0xd3, 0xe4, 0x93,
	0x02, 0x14, 0x3a, 0x01, 0x2a, 0x22, 0x0f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x70,
	0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x12, 0xd5, 0x02, 0x0a, 0x15, 0x52, 0x65, 0x61, 0x64, 0x41,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65,
	0x12, 0x33, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x61, 0x64, 0x41, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x34, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69,
	0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65,
	0x61, 0x64, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x50, 0x72, 0x6f, 0x66,
	0x69, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0xd0, 0x01, 0x92, 0x41,
	0xa1, 0x01, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x12, 0x1c, 0x47, 0x65, 0x74,
	0x20, 0x42, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x20, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x20, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x1a, 0x25, 0x52, 0x65, 0x74, 0x72, 0x69,
	0x65, 0x76, 0x65, 0x73, 0x20, 0x61, 0x20, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x20,
	0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x20, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x2e,
	0x2a, 0x1d, 0x52, 0x65, 0x61, 0x64, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67,
	0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x4a,
	0x32, 0x0a, 0x03, 0x32, 0x30, 0x30, 0x12, 0x2b, 0x12, 0x29, 0x0a, 0x27, 0x1a, 0x25, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x61, 0x64, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x69, 0x6e, 0x67, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x25, 0x12, 0x23, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x76, 0x31, 0x2f, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x2f, 0x7b, 0x61, 0x75, 0x74, 0x68,
	0x5f, 0x7a, 0x65, 0x72, 0x6f, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x7d, 0x12, 0xc5,
	0x02, 0x0a, 0x17, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x69, 0x6e, 0x67, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x12, 0x35, 0x2e, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e,
	0x76, 0x31, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x69, 0x6e, 0x67, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x36, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c,
	0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0xba, 0x01, 0x92, 0x41, 0x8b, 0x01,
	0x0a, 0x07, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x12, 0x16, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x20, 0x50, 0x61, 0x79, 0x72, 0x6f, 0x6c, 0x6c, 0x20, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c,
	0x65, 0x1a, 0x23, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x73, 0x20, 0x61, 0x20, 0x62, 0x75, 0x73,
	0x69, 0x6e, 0x65, 0x73, 0x73, 0x20, 0x70, 0x61, 0x79, 0x72, 0x6f, 0x6c, 0x6c, 0x20, 0x70, 0x72,
	0x6f, 0x66, 0x69, 0x6c, 0x65, 0x2e, 0x2a, 0x0d, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x72,
	0x6f, 0x66, 0x69, 0x6c, 0x65, 0x4a, 0x34, 0x0a, 0x03, 0x32, 0x30, 0x30, 0x12, 0x2d, 0x12, 0x2b,
	0x0a, 0x29, 0x1a, 0x27, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x50, 0x72, 0x6f, 0x66,
	0x69, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x82, 0xd3, 0xe4, 0x93, 0x02,
	0x25, 0x2a, 0x23, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x72, 0x6f, 0x66, 0x69,
	0x6c, 0x65, 0x2f, 0x7b, 0x61, 0x75, 0x74, 0x68, 0x5f, 0x7a, 0x65, 0x72, 0x6f, 0x5f, 0x75, 0x73,
	0x65, 0x72, 0x5f, 0x69, 0x64, 0x7d, 0x12, 0xca, 0x02, 0x0a, 0x17, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x50, 0x72, 0x6f, 0x66, 0x69,
	0x6c, 0x65, 0x12, 0x35, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x50, 0x72, 0x6f, 0x66, 0x69,
	0x6c, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x36, 0x2e, 0x61, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76,
	0x31, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69,
	0x6e, 0x67, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0xbf, 0x01, 0x92, 0x41, 0xa1, 0x01, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x66, 0x69, 0x6c,
	0x65, 0x12, 0x16, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x20, 0x50, 0x61, 0x79, 0x72, 0x6f, 0x6c,
	0x6c, 0x20, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x1a, 0x1a, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x73, 0x20, 0x61, 0x20, 0x70, 0x61, 0x79, 0x72, 0x6f, 0x6c, 0x6c, 0x20, 0x70, 0x72, 0x6f,
	0x66, 0x69, 0x6c, 0x65, 0x2e, 0x2a, 0x14, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x61, 0x79,
	0x72, 0x6f, 0x6c, 0x6c, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x4a, 0x4c, 0x0a, 0x03, 0x32,
	0x30, 0x30, 0x12, 0x45, 0x0a, 0x16, 0x41, 0x20, 0x73, 0x75, 0x63, 0x63, 0x65, 0x73, 0x73, 0x66,
	0x75, 0x6c, 0x20, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2e, 0x12, 0x2b, 0x0a, 0x29,
	0x1a, 0x27, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c,
	0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x14, 0x3a,
	0x01, 0x2a, 0x1a, 0x0f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x72, 0x6f, 0x66,
	0x69, 0x6c, 0x65, 0x12, 0xca, 0x02, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x4d, 0x65, 0x72, 0x67, 0x65,
	0x4c, 0x69, 0x6e, 0x6b, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x2f, 0x2e, 0x61, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76,
	0x31, 0x2e, 0x47, 0x65, 0x74, 0x4d, 0x65, 0x72, 0x67, 0x65, 0x4c, 0x69, 0x6e, 0x6b, 0x54, 0x6f,
	0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x30, 0x2e, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e,
	0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x4d, 0x65, 0x72, 0x67, 0x65, 0x4c, 0x69, 0x6e, 0x6b, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0xd1, 0x01, 0x92,
	0x41, 0x9d, 0x01, 0x0a, 0x10, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x20, 0x4d, 0x61, 0x6e, 0x61, 0x67,
	0x65, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x0e, 0x47, 0x65, 0x74, 0x20, 0x4c, 0x69, 0x6e, 0x6b, 0x20,
	0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x1a, 0x40, 0x50, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65, 0x73, 0x20,
	0x61, 0x20, 0x6c, 0x69, 0x6e, 0x6b, 0x20, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x20, 0x74, 0x6f, 0x20,
	0x69, 0x6e, 0x69, 0x74, 0x69, 0x61, 0x6c, 0x69, 0x7a, 0x65, 0x20, 0x61, 0x20, 0x4c, 0x69, 0x6e,
	0x6b, 0x20, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x20, 0x66, 0x6f, 0x72, 0x20, 0x74, 0x68,
	0x65, 0x20, 0x75, 0x73, 0x65, 0x72, 0x2e, 0x2a, 0x0c, 0x47, 0x65, 0x74, 0x4c, 0x69, 0x6e, 0x6b,
	0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x4a, 0x29, 0x0a, 0x03, 0x32, 0x30, 0x30, 0x12, 0x22, 0x12, 0x20,
	0x0a, 0x1e, 0x1a, 0x1c, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x4c,
	0x69, 0x6e, 0x6b, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x82, 0xd3, 0xe4, 0x93, 0x02, 0x2a, 0x3a, 0x01, 0x2a, 0x22, 0x25, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x76, 0x31, 0x2f, 0x6d, 0x65, 0x72, 0x67, 0x65, 0x2f, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x61, 0x74,
	0x65, 0x2d, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x2d, 0x65, 0x78, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65,
	0x12, 0xb4, 0x03, 0x0a, 0x26, 0x45, 0x78, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x50, 0x75, 0x62,
	0x6c, 0x69, 0x63, 0x4c, 0x69, 0x6e, 0x6b, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x46, 0x6f, 0x72, 0x41,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x44, 0x2e, 0x61, 0x63,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x2e, 0x76, 0x31, 0x2e, 0x45, 0x78, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x50, 0x75, 0x62, 0x6c,
	0x69, 0x63, 0x4c, 0x69, 0x6e, 0x6b, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x46, 0x6f, 0x72, 0x41, 0x63,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x45, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x45, 0x78, 0x63, 0x68, 0x61, 0x6e,
	0x67, 0x65, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x4c, 0x69, 0x6e, 0x6b, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x46, 0x6f, 0x72, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x54, 0x6f, 0x6b, 0x65, 0x6e,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0xfc, 0x01, 0x92, 0x41, 0xd1, 0x01, 0x0a,
	0x10, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x20, 0x4d, 0x61, 0x6e, 0x61, 0x67, 0x65, 0x6d, 0x65, 0x6e,
	0x74, 0x12, 0x13, 0x45, 0x78, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x20, 0x4c, 0x69, 0x6e, 0x6b,
	0x20, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x1a, 0x33, 0x45, 0x78, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65,
	0x73, 0x20, 0x61, 0x20, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x20, 0x6c, 0x69, 0x6e, 0x6b, 0x20,
	0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x20, 0x66, 0x6f, 0x72, 0x20, 0x61, 0x6e, 0x20, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x20, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x2e, 0x2a, 0x2e, 0x45, 0x78, 0x63,
	0x68, 0x61, 0x6e, 0x67, 0x65, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x4c, 0x69, 0x6e, 0x6b, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x46, 0x6f, 0x72, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x54, 0x6f,
	0x6b, 0x65, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x4a, 0x43, 0x0a, 0x03, 0x32,
	0x30, 0x30, 0x12, 0x3c, 0x12, 0x3a, 0x0a, 0x38, 0x1a, 0x36, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76,
	0x31, 0x2e, 0x45, 0x78, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x50, 0x75, 0x62, 0x6c, 0x69, 0x63,
	0x4c, 0x69, 0x6e, 0x6b, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x46, 0x6f, 0x72, 0x41, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x82, 0xd3, 0xe4, 0x93, 0x02, 0x21, 0x3a, 0x01, 0x2a, 0x22, 0x1c, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x76, 0x31, 0x2f, 0x6d, 0x65, 0x72, 0x67, 0x65, 0x2f, 0x65, 0x78, 0x63, 0x68, 0x61, 0x6e, 0x67,
	0x65, 0x2d, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0xae, 0x02, 0x0a, 0x11, 0x52, 0x65, 0x61, 0x64,
	0x42, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x53, 0x68, 0x65, 0x65, 0x74, 0x73, 0x12, 0x2f, 0x2e,
	0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x61, 0x64, 0x42, 0x61, 0x6c, 0x61, 0x6e, 0x63,
	0x65, 0x53, 0x68, 0x65, 0x65, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x30,
	0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x61, 0x64, 0x42, 0x61, 0x6c, 0x61, 0x6e,
	0x63, 0x65, 0x53, 0x68, 0x65, 0x65, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0xb5, 0x01, 0x92, 0x41, 0x90, 0x01, 0x0a, 0x0e, 0x42, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65,
	0x20, 0x53, 0x68, 0x65, 0x65, 0x74, 0x73, 0x12, 0x13, 0x47, 0x65, 0x74, 0x73, 0x20, 0x42, 0x61,
	0x6c, 0x61, 0x6e, 0x63, 0x65, 0x20, 0x53, 0x68, 0x65, 0x65, 0x74, 0x73, 0x1a, 0x26, 0x51, 0x75,
	0x65, 0x72, 0x69, 0x65, 0x73, 0x20, 0x62, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x20, 0x73, 0x68,
	0x65, 0x65, 0x74, 0x73, 0x20, 0x66, 0x6f, 0x72, 0x20, 0x61, 0x20, 0x62, 0x75, 0x73, 0x69, 0x6e,
	0x65, 0x73, 0x73, 0x2e, 0x2a, 0x11, 0x52, 0x65, 0x61, 0x64, 0x42, 0x61, 0x6c, 0x61, 0x6e, 0x63,
	0x65, 0x53, 0x68, 0x65, 0x65, 0x74, 0x73, 0x4a, 0x2e, 0x0a, 0x03, 0x32, 0x30, 0x30, 0x12, 0x27,
	0x12, 0x25, 0x0a, 0x23, 0x1a, 0x21, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65,
	0x61, 0x64, 0x42, 0x61, 0x6c, 0x61, 0x6e, 0x63, 0x65, 0x53, 0x68, 0x65, 0x65, 0x74, 0x73, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1b, 0x3a, 0x01, 0x2a,
	0x22, 0x16, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x62, 0x61, 0x6c, 0x61, 0x6e, 0x63,
	0x65, 0x2d, 0x73, 0x68, 0x65, 0x65, 0x74, 0x73, 0x12, 0xcf, 0x02, 0x0a, 0x16, 0x52, 0x65, 0x61,
	0x64, 0x43, 0x61, 0x73, 0x68, 0x46, 0x6c, 0x6f, 0x77, 0x53, 0x74, 0x61, 0x74, 0x65, 0x6d, 0x65,
	0x6e, 0x74, 0x73, 0x12, 0x34, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67,
	0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x61, 0x64,
	0x43, 0x61, 0x73, 0x68, 0x46, 0x6c, 0x6f, 0x77, 0x53, 0x74, 0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e,
	0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x35, 0x2e, 0x61, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76,
	0x31, 0x2e, 0x52, 0x65, 0x61, 0x64, 0x43, 0x61, 0x73, 0x68, 0x46, 0x6c, 0x6f, 0x77, 0x53, 0x74,
	0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0xc7, 0x01, 0x92, 0x41, 0x9d, 0x01, 0x0a, 0x0f, 0x43, 0x61, 0x73, 0x68, 0x66, 0x6c, 0x6f,
	0x77, 0x20, 0x53, 0x68, 0x65, 0x65, 0x74, 0x73, 0x12, 0x14, 0x47, 0x65, 0x74, 0x73, 0x20, 0x43,
	0x61, 0x73, 0x68, 0x66, 0x6c, 0x6f, 0x65, 0x20, 0x53, 0x68, 0x65, 0x65, 0x74, 0x73, 0x1a, 0x27,
	0x51, 0x75, 0x65, 0x72, 0x69, 0x65, 0x73, 0x20, 0x63, 0x61, 0x73, 0x68, 0x66, 0x6c, 0x6f, 0x77,
	0x20, 0x73, 0x68, 0x65, 0x65, 0x74, 0x73, 0x20, 0x66, 0x6f, 0x72, 0x20, 0x61, 0x20, 0x62, 0x75,
	0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x2e, 0x2a, 0x16, 0x52, 0x65, 0x61, 0x64, 0x43, 0x61, 0x73,
	0x68, 0x46, 0x6c, 0x6f, 0x77, 0x53, 0x74, 0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x4a,
	0x33, 0x0a, 0x03, 0x32, 0x30, 0x30, 0x12, 0x2c, 0x12, 0x2a, 0x0a, 0x28, 0x1a, 0x26, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x61, 0x64, 0x43, 0x61, 0x73, 0x68, 0x46, 0x6c,
	0x6f, 0x77, 0x53, 0x74, 0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x20, 0x3a, 0x01, 0x2a, 0x22, 0x1b, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x61, 0x73, 0x68, 0x66, 0x6c, 0x6f, 0x77, 0x2d,
	0x73, 0x74, 0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x12, 0xc1, 0x02, 0x0a, 0x14, 0x52,
	0x65, 0x61, 0x64, 0x49, 0x6e, 0x63, 0x6f, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x65, 0x6d, 0x65,
	0x6e, 0x74, 0x73, 0x12, 0x32, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67,
	0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x61, 0x64,
	0x49, 0x6e, 0x63, 0x6f, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x33, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e,
	0x52, 0x65, 0x61, 0x64, 0x49, 0x6e, 0x63, 0x6f, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x65, 0x6d,
	0x65, 0x6e, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0xbf, 0x01, 0x92,
	0x41, 0x97, 0x01, 0x0a, 0x0f, 0x43, 0x61, 0x73, 0x68, 0x66, 0x6c, 0x6f, 0x77, 0x20, 0x53, 0x68,
	0x65, 0x65, 0x74, 0x73, 0x12, 0x14, 0x47, 0x65, 0x74, 0x73, 0x20, 0x43, 0x61, 0x73, 0x68, 0x66,
	0x6c, 0x6f, 0x65, 0x20, 0x53, 0x68, 0x65, 0x65, 0x74, 0x73, 0x1a, 0x25, 0x51, 0x75, 0x65, 0x72,
	0x69, 0x65, 0x73, 0x20, 0x69, 0x6e, 0x63, 0x6f, 0x6d, 0x65, 0x20, 0x73, 0x68, 0x65, 0x65, 0x74,
	0x73, 0x20, 0x66, 0x6f, 0x72, 0x20, 0x61, 0x20, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73,
	0x2e, 0x2a, 0x14, 0x52, 0x65, 0x61, 0x64, 0x49, 0x6e, 0x63, 0x6f, 0x6d, 0x65, 0x53, 0x74, 0x61,
	0x74, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x4a, 0x31, 0x0a, 0x03, 0x32, 0x30, 0x30, 0x12, 0x2a,
	0x12, 0x28, 0x0a, 0x26, 0x1a, 0x24, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65,
	0x61, 0x64, 0x49, 0x6e, 0x63, 0x6f, 0x6d, 0x65, 0x53, 0x74, 0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e,
	0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1e,
	0x3a, 0x01, 0x2a, 0x22, 0x19, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x69, 0x6e, 0x63,
	0x6f, 0x6d, 0x65, 0x2d, 0x73, 0x74, 0x61, 0x74, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x73, 0x12, 0xec,
	0x02, 0x0a, 0x1b, 0x52, 0x65, 0x61, 0x64, 0x42, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x43,
	0x68, 0x61, 0x72, 0x74, 0x4f, 0x66, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x12, 0x39,
	0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x61, 0x64, 0x42, 0x75, 0x73, 0x69, 0x6e,
	0x65, 0x73, 0x73, 0x43, 0x68, 0x61, 0x72, 0x74, 0x4f, 0x66, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x3a, 0x2e, 0x61, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76,
	0x31, 0x2e, 0x52, 0x65, 0x61, 0x64, 0x42, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73, 0x43, 0x68,
	0x61, 0x72, 0x74, 0x4f, 0x66, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0xd5, 0x01, 0x92, 0x41, 0xad, 0x01, 0x0a, 0x11, 0x43, 0x68,
	0x61, 0x72, 0x74, 0x20, 0x6f, 0x66, 0x20, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x12,
	0x16, 0x47, 0x65, 0x74, 0x73, 0x20, 0x43, 0x68, 0x61, 0x72, 0x74, 0x20, 0x6f, 0x66, 0x20, 0x41,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x1a, 0x29, 0x51, 0x75, 0x65, 0x72, 0x69, 0x65, 0x73,
	0x20, 0x63, 0x68, 0x61, 0x72, 0x74, 0x20, 0x6f, 0x66, 0x20, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x73, 0x20, 0x66, 0x6f, 0x72, 0x20, 0x61, 0x20, 0x62, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73,
	0x73, 0x2e, 0x2a, 0x1b, 0x52, 0x65, 0x61, 0x64, 0x42, 0x75, 0x73, 0x69, 0x6e, 0x65, 0x73, 0x73,
	0x43, 0x68, 0x61, 0x72, 0x74, 0x4f, 0x66, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x4a,
	0x38, 0x0a, 0x03, 0x32, 0x30, 0x30, 0x12, 0x31, 0x12, 0x2f, 0x0a, 0x2d, 0x1a, 0x2b, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x61, 0x64, 0x42, 0x75, 0x73, 0x69, 0x6e, 0x65,
	0x73, 0x73, 0x43, 0x68, 0x61, 0x72, 0x74, 0x4f, 0x66, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1e, 0x3a,
	0x01, 0x2a, 0x22, 0x19, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x68, 0x61, 0x72,
	0x74, 0x2d, 0x6f, 0x66, 0x2d, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x73, 0x1a, 0x06, 0xba,
	0xb9, 0x19, 0x02, 0x08, 0x01, 0x42, 0x9d, 0x02, 0x0a, 0x19, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x63,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x2e, 0x76, 0x31, 0x42, 0x0c, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x50, 0x72, 0x6f, 0x74,
	0x6f, 0x50, 0x01, 0x5a, 0x80, 0x01, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x53, 0x6f, 0x6c, 0x6f, 0x6d, 0x6f, 0x6e, 0x41, 0x49, 0x45, 0x6e, 0x67, 0x69, 0x6e, 0x65,
	0x65, 0x72, 0x69, 0x6e, 0x67, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2d, 0x6c, 0x65,
	0x76, 0x65, 0x6c, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x6b, 0x67, 0x2f, 0x67, 0x65, 0x6e, 0x65,
	0x72, 0x61, 0x74, 0x65, 0x64, 0x2f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67,
	0x2d, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x76,
	0x31, 0x3b, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x14, 0x41,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x2e, 0x56, 0x31, 0xca, 0x02, 0x14, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x20, 0x41, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5c, 0x56,
	0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x15,
	0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_accounting_service_v1_service_proto_goTypes = []interface{}{
	(*HealthCheckRequest)(nil),                             // 0: accounting_service.v1.HealthCheckRequest
	(*ReadynessCheckRequest)(nil),                          // 1: accounting_service.v1.ReadynessCheckRequest
	(*CreateAccountingProfileRequest)(nil),                 // 2: accounting_service.v1.CreateAccountingProfileRequest
	(*ReadAccountingProfileRequest)(nil),                   // 3: accounting_service.v1.ReadAccountingProfileRequest
	(*DeleteAccountingProfileRequest)(nil),                 // 4: accounting_service.v1.DeleteAccountingProfileRequest
	(*UpdateAccountingProfileRequest)(nil),                 // 5: accounting_service.v1.UpdateAccountingProfileRequest
	(*GetMergeLinkTokenRequest)(nil),                       // 6: accounting_service.v1.GetMergeLinkTokenRequest
	(*ExchangePublicLinkTokenForAccountTokenRequest)(nil),  // 7: accounting_service.v1.ExchangePublicLinkTokenForAccountTokenRequest
	(*ReadBalanceSheetsRequest)(nil),                       // 8: accounting_service.v1.ReadBalanceSheetsRequest
	(*ReadCashFlowStatementsRequest)(nil),                  // 9: accounting_service.v1.ReadCashFlowStatementsRequest
	(*ReadIncomeStatementsRequest)(nil),                    // 10: accounting_service.v1.ReadIncomeStatementsRequest
	(*ReadBusinessChartOfAccountsRequest)(nil),             // 11: accounting_service.v1.ReadBusinessChartOfAccountsRequest
	(*HealthCheckResponse)(nil),                            // 12: accounting_service.v1.HealthCheckResponse
	(*ReadynessCheckResponse)(nil),                         // 13: accounting_service.v1.ReadynessCheckResponse
	(*CreateAccountingProfileResponse)(nil),                // 14: accounting_service.v1.CreateAccountingProfileResponse
	(*ReadAccountingProfileResponse)(nil),                  // 15: accounting_service.v1.ReadAccountingProfileResponse
	(*DeleteAccountingProfileResponse)(nil),                // 16: accounting_service.v1.DeleteAccountingProfileResponse
	(*UpdateAccountingProfileResponse)(nil),                // 17: accounting_service.v1.UpdateAccountingProfileResponse
	(*GetMergeLinkTokenResponse)(nil),                      // 18: accounting_service.v1.GetMergeLinkTokenResponse
	(*ExchangePublicLinkTokenForAccountTokenResponse)(nil), // 19: accounting_service.v1.ExchangePublicLinkTokenForAccountTokenResponse
	(*ReadBalanceSheetsResponse)(nil),                      // 20: accounting_service.v1.ReadBalanceSheetsResponse
	(*ReadCashFlowStatementsResponse)(nil),                 // 21: accounting_service.v1.ReadCashFlowStatementsResponse
	(*ReadIncomeStatementsResponse)(nil),                   // 22: accounting_service.v1.ReadIncomeStatementsResponse
	(*ReadBusinessChartOfAccountsResponse)(nil),            // 23: accounting_service.v1.ReadBusinessChartOfAccountsResponse
}
var file_accounting_service_v1_service_proto_depIdxs = []int32{
	0,  // 0: accounting_service.v1.AccountingService.HealthCheck:input_type -> accounting_service.v1.HealthCheckRequest
	1,  // 1: accounting_service.v1.AccountingService.ReadynessCheck:input_type -> accounting_service.v1.ReadynessCheckRequest
	2,  // 2: accounting_service.v1.AccountingService.CreateAccountingProfile:input_type -> accounting_service.v1.CreateAccountingProfileRequest
	3,  // 3: accounting_service.v1.AccountingService.ReadAccountingProfile:input_type -> accounting_service.v1.ReadAccountingProfileRequest
	4,  // 4: accounting_service.v1.AccountingService.DeleteAccountingProfile:input_type -> accounting_service.v1.DeleteAccountingProfileRequest
	5,  // 5: accounting_service.v1.AccountingService.UpdateAccountingProfile:input_type -> accounting_service.v1.UpdateAccountingProfileRequest
	6,  // 6: accounting_service.v1.AccountingService.GetMergeLinkToken:input_type -> accounting_service.v1.GetMergeLinkTokenRequest
	7,  // 7: accounting_service.v1.AccountingService.ExchangePublicLinkTokenForAccountToken:input_type -> accounting_service.v1.ExchangePublicLinkTokenForAccountTokenRequest
	8,  // 8: accounting_service.v1.AccountingService.ReadBalanceSheets:input_type -> accounting_service.v1.ReadBalanceSheetsRequest
	9,  // 9: accounting_service.v1.AccountingService.ReadCashFlowStatements:input_type -> accounting_service.v1.ReadCashFlowStatementsRequest
	10, // 10: accounting_service.v1.AccountingService.ReadIncomeStatements:input_type -> accounting_service.v1.ReadIncomeStatementsRequest
	11, // 11: accounting_service.v1.AccountingService.ReadBusinessChartOfAccounts:input_type -> accounting_service.v1.ReadBusinessChartOfAccountsRequest
	12, // 12: accounting_service.v1.AccountingService.HealthCheck:output_type -> accounting_service.v1.HealthCheckResponse
	13, // 13: accounting_service.v1.AccountingService.ReadynessCheck:output_type -> accounting_service.v1.ReadynessCheckResponse
	14, // 14: accounting_service.v1.AccountingService.CreateAccountingProfile:output_type -> accounting_service.v1.CreateAccountingProfileResponse
	15, // 15: accounting_service.v1.AccountingService.ReadAccountingProfile:output_type -> accounting_service.v1.ReadAccountingProfileResponse
	16, // 16: accounting_service.v1.AccountingService.DeleteAccountingProfile:output_type -> accounting_service.v1.DeleteAccountingProfileResponse
	17, // 17: accounting_service.v1.AccountingService.UpdateAccountingProfile:output_type -> accounting_service.v1.UpdateAccountingProfileResponse
	18, // 18: accounting_service.v1.AccountingService.GetMergeLinkToken:output_type -> accounting_service.v1.GetMergeLinkTokenResponse
	19, // 19: accounting_service.v1.AccountingService.ExchangePublicLinkTokenForAccountToken:output_type -> accounting_service.v1.ExchangePublicLinkTokenForAccountTokenResponse
	20, // 20: accounting_service.v1.AccountingService.ReadBalanceSheets:output_type -> accounting_service.v1.ReadBalanceSheetsResponse
	21, // 21: accounting_service.v1.AccountingService.ReadCashFlowStatements:output_type -> accounting_service.v1.ReadCashFlowStatementsResponse
	22, // 22: accounting_service.v1.AccountingService.ReadIncomeStatements:output_type -> accounting_service.v1.ReadIncomeStatementsResponse
	23, // 23: accounting_service.v1.AccountingService.ReadBusinessChartOfAccounts:output_type -> accounting_service.v1.ReadBusinessChartOfAccountsResponse
	12, // [12:24] is the sub-list for method output_type
	0,  // [0:12] is the sub-list for method input_type
	0,  // [0:0] is the sub-list for extension type_name
	0,  // [0:0] is the sub-list for extension extendee
	0,  // [0:0] is the sub-list for field type_name
}

func init() { file_accounting_service_v1_service_proto_init() }
func file_accounting_service_v1_service_proto_init() {
	if File_accounting_service_v1_service_proto != nil {
		return
	}
	file_accounting_service_v1_request_proto_init()
	file_accounting_service_v1_response_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_accounting_service_v1_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_accounting_service_v1_service_proto_goTypes,
		DependencyIndexes: file_accounting_service_v1_service_proto_depIdxs,
	}.Build()
	File_accounting_service_v1_service_proto = out.File
	file_accounting_service_v1_service_proto_rawDesc = nil
	file_accounting_service_v1_service_proto_goTypes = nil
	file_accounting_service_v1_service_proto_depIdxs = nil
}
