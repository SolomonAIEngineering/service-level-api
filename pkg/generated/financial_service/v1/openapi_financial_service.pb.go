// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: financial_service/v1/openapi_financial_service.proto

package financial_servicev1

import (
	_ "github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2/options"
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

var File_financial_service_v1_openapi_financial_service_proto protoreflect.FileDescriptor

var file_financial_service_v1_openapi_financial_service_proto_rawDesc = []byte{
	0x0a, 0x34, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x5f, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x6f, 0x70, 0x65, 0x6e, 0x61, 0x70, 0x69, 0x5f, 0x66,
	0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x14, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61,
	0x6c, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x1a, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x63, 0x2d, 0x67, 0x65, 0x6e, 0x2d, 0x6f, 0x70, 0x65, 0x6e, 0x61, 0x70, 0x69,
	0x76, 0x32, 0x2f, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x42, 0xb5, 0x07, 0x0a,
	0x18, 0x63, 0x6f, 0x6d, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x5f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x42, 0x1c, 0x4f, 0x70, 0x65, 0x6e, 0x61,
	0x70, 0x69, 0x46, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x7d, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x53, 0x6f, 0x6c, 0x6f, 0x6d, 0x6f, 0x6e, 0x41, 0x49, 0x45,
	0x6e, 0x67, 0x69, 0x6e, 0x65, 0x65, 0x72, 0x69, 0x6e, 0x67, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2d, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x6b, 0x67,
	0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2f, 0x66, 0x69, 0x6e, 0x61, 0x6e,
	0x63, 0x69, 0x61, 0x6c, 0x2d, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x2f,
	0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x2f, 0x76, 0x31, 0x3b, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x5f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x46, 0x58, 0x58, 0xaa, 0x02,
	0x13, 0x46, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x13, 0x46, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c,
	0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x1f, 0x46, 0x69, 0x6e,
	0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5c, 0x56, 0x31,
	0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x14, 0x46,
	0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x3a,
	0x3a, 0x56, 0x31, 0x92, 0x41, 0x8d, 0x05, 0x12, 0xc9, 0x02, 0x0a, 0x07, 0x53, 0x69, 0x6d, 0x66,
	0x69, 0x6e, 0x79, 0x12, 0xb7, 0x01, 0x57, 0x69, 0x74, 0x68, 0x20, 0x6f, 0x75, 0x72, 0x20, 0x41,
	0x49, 0x2d, 0x64, 0x72, 0x69, 0x76, 0x65, 0x6e, 0x20, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69,
	0x61, 0x6c, 0x20, 0x72, 0x65, 0x63, 0x6f, 0x6d, 0x6d, 0x65, 0x6e, 0x64, 0x61, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x20, 0x74, 0x72, 0x61, 0x63, 0x6b, 0x20, 0x79, 0x6f, 0x75, 0x72, 0x20, 0x73, 0x70,
	0x65, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x2c, 0x20, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x20, 0x61,
	0x20, 0x62, 0x75, 0x64, 0x67, 0x65, 0x74, 0x2c, 0x20, 0x73, 0x61, 0x76, 0x65, 0x20, 0x66, 0x6f,
	0x72, 0x20, 0x74, 0x68, 0x65, 0x20, 0x66, 0x75, 0x74, 0x75, 0x72, 0x65, 0x2c, 0x20, 0x61, 0x6c,
	0x6c, 0x20, 0x77, 0x68, 0x69, 0x6c, 0x65, 0x20, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69,
	0x6e, 0x67, 0x20, 0x77, 0x69, 0x74, 0x68, 0x20, 0x6f, 0x74, 0x68, 0x65, 0x72, 0x73, 0x20, 0x77,
	0x68, 0x6f, 0x20, 0x61, 0x72, 0x65, 0x20, 0x6f, 0x6e, 0x20, 0x74, 0x68, 0x65, 0x20, 0x73, 0x61,
	0x6d, 0x65, 0x20, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x20, 0x6a, 0x6f, 0x75,
	0x72, 0x6e, 0x65, 0x79, 0x20, 0x61, 0x73, 0x20, 0x79, 0x6f, 0x75, 0x20, 0x21, 0x22, 0x3b, 0x0a,
	0x09, 0x59, 0x6f, 0x61, 0x6e, 0x59, 0x6f, 0x6d, 0x62, 0x61, 0x12, 0x15, 0x68, 0x74, 0x74, 0x70,
	0x73, 0x3a, 0x2f, 0x2f, 0x73, 0x6f, 0x6c, 0x6f, 0x6d, 0x6f, 0x6e, 0x2d, 0x61, 0x69, 0x2e, 0x69,
	0x70, 0x1a, 0x17, 0x79, 0x6f, 0x61, 0x6e, 0x79, 0x6f, 0x6d, 0x62, 0x61, 0x40, 0x73, 0x6f, 0x6c,
	0x6f, 0x6d, 0x6f, 0x6e, 0x2d, 0x61, 0x69, 0x2e, 0x63, 0x6f, 0x2a, 0x42, 0x0a, 0x0a, 0x41, 0x70,
	0x61, 0x63, 0x68, 0x65, 0x2d, 0x32, 0x2e, 0x30, 0x12, 0x34, 0x68, 0x74, 0x74, 0x70, 0x73, 0x3a,
	0x2f, 0x2f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6f, 0x70, 0x65,
	0x6e, 0x66, 0x67, 0x61, 0x2f, 0x6f, 0x70, 0x65, 0x6e, 0x66, 0x67, 0x61, 0x2f, 0x62, 0x6c, 0x6f,
	0x62, 0x2f, 0x6d, 0x61, 0x69, 0x6e, 0x2f, 0x4c, 0x49, 0x43, 0x45, 0x4e, 0x53, 0x45, 0x32, 0x03,
	0x30, 0x2e, 0x31, 0x2a, 0x02, 0x01, 0x02, 0x32, 0x10, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x6a, 0x73, 0x6f, 0x6e, 0x3a, 0x10, 0x61, 0x70, 0x70, 0x6c, 0x69,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2f, 0x6a, 0x73, 0x6f, 0x6e, 0x52, 0x59, 0x0a, 0x03, 0x34,
	0x30, 0x30, 0x12, 0x52, 0x0a, 0x24, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x20, 0x66, 0x61,
	0x69, 0x6c, 0x65, 0x64, 0x20, 0x64, 0x75, 0x65, 0x20, 0x74, 0x6f, 0x20, 0x69, 0x6e, 0x76, 0x61,
	0x6c, 0x69, 0x64, 0x20, 0x69, 0x6e, 0x70, 0x75, 0x74, 0x2e, 0x12, 0x2a, 0x0a, 0x28, 0x1a, 0x26,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x56, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x52, 0x5b, 0x0a, 0x03, 0x34, 0x30, 0x34, 0x12, 0x54, 0x0a,
	0x25, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x20, 0x66, 0x61, 0x69, 0x6c, 0x65, 0x64, 0x20,
	0x64, 0x75, 0x65, 0x20, 0x74, 0x6f, 0x20, 0x69, 0x6e, 0x63, 0x6f, 0x72, 0x72, 0x65, 0x63, 0x74,
	0x20, 0x70, 0x61, 0x74, 0x68, 0x2e, 0x12, 0x2b, 0x0a, 0x29, 0x1a, 0x27, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x31, 0x2e, 0x50, 0x61, 0x74, 0x68, 0x55, 0x6e, 0x6b, 0x6e, 0x6f, 0x77, 0x6e, 0x45,
	0x72, 0x72, 0x6f, 0x72, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x52, 0x5f, 0x0a, 0x03, 0x35, 0x30, 0x30, 0x12, 0x58, 0x0a, 0x2c, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x20, 0x66, 0x61, 0x69, 0x6c, 0x65, 0x64, 0x20, 0x64, 0x75, 0x65,
	0x20, 0x74, 0x6f, 0x20, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x20, 0x73, 0x65, 0x72,
	0x76, 0x65, 0x72, 0x20, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x2e, 0x12, 0x28, 0x0a, 0x26, 0x1a, 0x24,
	0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c,
	0x45, 0x72, 0x72, 0x6f, 0x72, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_financial_service_v1_openapi_financial_service_proto_goTypes = []interface{}{}
var file_financial_service_v1_openapi_financial_service_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_financial_service_v1_openapi_financial_service_proto_init() }
func file_financial_service_v1_openapi_financial_service_proto_init() {
	if File_financial_service_v1_openapi_financial_service_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_financial_service_v1_openapi_financial_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_financial_service_v1_openapi_financial_service_proto_goTypes,
		DependencyIndexes: file_financial_service_v1_openapi_financial_service_proto_depIdxs,
	}.Build()
	File_financial_service_v1_openapi_financial_service_proto = out.File
	file_financial_service_v1_openapi_financial_service_proto_rawDesc = nil
	file_financial_service_v1_openapi_financial_service_proto_goTypes = nil
	file_financial_service_v1_openapi_financial_service_proto_depIdxs = nil
}
