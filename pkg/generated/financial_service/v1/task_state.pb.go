// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: financial_service/v1/task_state.proto

package financial_servicev1

import (
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

type TaskState int32

const (
	// The zero value is omitted in proto3 by convention if it's not used.
	// In your case, since you start your iota with 1, we will not define a zero value.
	TaskState_TASK_STATE_UNSPECIFIED TaskState = 0
	// Indicates that the task is currently being processed by Handler.
	TaskState_TASK_STATE_ACTIVE TaskState = 1
	// Indicates that the task is ready to be processed by Handler.
	TaskState_TASK_STATE_PENDING TaskState = 2
	// Indicates that the task is scheduled to be processed some time in the future.
	TaskState_TASK_STATE_SCHEDULED TaskState = 3
	// Indicates that the task has previously failed and scheduled to be processed some time in the future.
	TaskState_TASK_STATE_RETRY TaskState = 4
	// Indicates that the task is archived and stored for inspection purposes.
	TaskState_TASK_STATE_ARCHIVED TaskState = 5
	// Indicates that the task is processed successfully and retained until the retention TTL expires.
	TaskState_TASK_STATE_COMPLETED TaskState = 6
	// Indicates that the task is waiting in a group to be aggregated into one task.
	TaskState_TASK_STATE_AGGREGATING TaskState = 7
	// Indicates that the task has failed and will not be retried.
	TaskState_TASK_STATE_FAILED TaskState = 8
)

// Enum value maps for TaskState.
var (
	TaskState_name = map[int32]string{
		0: "TASK_STATE_UNSPECIFIED",
		1: "TASK_STATE_ACTIVE",
		2: "TASK_STATE_PENDING",
		3: "TASK_STATE_SCHEDULED",
		4: "TASK_STATE_RETRY",
		5: "TASK_STATE_ARCHIVED",
		6: "TASK_STATE_COMPLETED",
		7: "TASK_STATE_AGGREGATING",
		8: "TASK_STATE_FAILED",
	}
	TaskState_value = map[string]int32{
		"TASK_STATE_UNSPECIFIED": 0,
		"TASK_STATE_ACTIVE":      1,
		"TASK_STATE_PENDING":     2,
		"TASK_STATE_SCHEDULED":   3,
		"TASK_STATE_RETRY":       4,
		"TASK_STATE_ARCHIVED":    5,
		"TASK_STATE_COMPLETED":   6,
		"TASK_STATE_AGGREGATING": 7,
		"TASK_STATE_FAILED":      8,
	}
)

func (x TaskState) Enum() *TaskState {
	p := new(TaskState)
	*p = x
	return p
}

func (x TaskState) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TaskState) Descriptor() protoreflect.EnumDescriptor {
	return file_financial_service_v1_task_state_proto_enumTypes[0].Descriptor()
}

func (TaskState) Type() protoreflect.EnumType {
	return &file_financial_service_v1_task_state_proto_enumTypes[0]
}

func (x TaskState) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TaskState.Descriptor instead.
func (TaskState) EnumDescriptor() ([]byte, []int) {
	return file_financial_service_v1_task_state_proto_rawDescGZIP(), []int{0}
}

var File_financial_service_v1_task_state_proto protoreflect.FileDescriptor

var file_financial_service_v1_task_state_proto_rawDesc = []byte{
	0x0a, 0x25, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x5f, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x2f, 0x74, 0x61, 0x73, 0x6b, 0x5f, 0x73, 0x74, 0x61, 0x74,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x14, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69,
	0x61, 0x6c, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x2a, 0xec, 0x01,
	0x0a, 0x09, 0x54, 0x61, 0x73, 0x6b, 0x53, 0x74, 0x61, 0x74, 0x65, 0x12, 0x1a, 0x0a, 0x16, 0x54,
	0x41, 0x53, 0x4b, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43,
	0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x15, 0x0a, 0x11, 0x54, 0x41, 0x53, 0x4b, 0x5f,
	0x53, 0x54, 0x41, 0x54, 0x45, 0x5f, 0x41, 0x43, 0x54, 0x49, 0x56, 0x45, 0x10, 0x01, 0x12, 0x16,
	0x0a, 0x12, 0x54, 0x41, 0x53, 0x4b, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x45, 0x5f, 0x50, 0x45, 0x4e,
	0x44, 0x49, 0x4e, 0x47, 0x10, 0x02, 0x12, 0x18, 0x0a, 0x14, 0x54, 0x41, 0x53, 0x4b, 0x5f, 0x53,
	0x54, 0x41, 0x54, 0x45, 0x5f, 0x53, 0x43, 0x48, 0x45, 0x44, 0x55, 0x4c, 0x45, 0x44, 0x10, 0x03,
	0x12, 0x14, 0x0a, 0x10, 0x54, 0x41, 0x53, 0x4b, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x45, 0x5f, 0x52,
	0x45, 0x54, 0x52, 0x59, 0x10, 0x04, 0x12, 0x17, 0x0a, 0x13, 0x54, 0x41, 0x53, 0x4b, 0x5f, 0x53,
	0x54, 0x41, 0x54, 0x45, 0x5f, 0x41, 0x52, 0x43, 0x48, 0x49, 0x56, 0x45, 0x44, 0x10, 0x05, 0x12,
	0x18, 0x0a, 0x14, 0x54, 0x41, 0x53, 0x4b, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x45, 0x5f, 0x43, 0x4f,
	0x4d, 0x50, 0x4c, 0x45, 0x54, 0x45, 0x44, 0x10, 0x06, 0x12, 0x1a, 0x0a, 0x16, 0x54, 0x41, 0x53,
	0x4b, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x45, 0x5f, 0x41, 0x47, 0x47, 0x52, 0x45, 0x47, 0x41, 0x54,
	0x49, 0x4e, 0x47, 0x10, 0x07, 0x12, 0x15, 0x0a, 0x11, 0x54, 0x41, 0x53, 0x4b, 0x5f, 0x53, 0x54,
	0x41, 0x54, 0x45, 0x5f, 0x46, 0x41, 0x49, 0x4c, 0x45, 0x44, 0x10, 0x08, 0x42, 0x96, 0x02, 0x0a,
	0x18, 0x63, 0x6f, 0x6d, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x5f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x76, 0x31, 0x42, 0x0e, 0x54, 0x61, 0x73, 0x6b, 0x53,
	0x74, 0x61, 0x74, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x7d, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x53, 0x6f, 0x6c, 0x6f, 0x6d, 0x6f, 0x6e, 0x41,
	0x49, 0x45, 0x6e, 0x67, 0x69, 0x6e, 0x65, 0x65, 0x72, 0x69, 0x6e, 0x67, 0x2f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x2d, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x2d, 0x61, 0x70, 0x69, 0x2f, 0x70,
	0x6b, 0x67, 0x2f, 0x67, 0x65, 0x6e, 0x65, 0x72, 0x61, 0x74, 0x65, 0x64, 0x2f, 0x66, 0x69, 0x6e,
	0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x2d, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x76,
	0x31, 0x2f, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x5f, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2f, 0x76, 0x31, 0x3b, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c,
	0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x46, 0x58, 0x58,
	0xaa, 0x02, 0x13, 0x46, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x13, 0x46, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69,
	0x61, 0x6c, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x1f, 0x46,
	0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x5c,
	0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02,
	0x14, 0x46, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x69, 0x61, 0x6c, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_financial_service_v1_task_state_proto_rawDescOnce sync.Once
	file_financial_service_v1_task_state_proto_rawDescData = file_financial_service_v1_task_state_proto_rawDesc
)

func file_financial_service_v1_task_state_proto_rawDescGZIP() []byte {
	file_financial_service_v1_task_state_proto_rawDescOnce.Do(func() {
		file_financial_service_v1_task_state_proto_rawDescData = protoimpl.X.CompressGZIP(file_financial_service_v1_task_state_proto_rawDescData)
	})
	return file_financial_service_v1_task_state_proto_rawDescData
}

var file_financial_service_v1_task_state_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_financial_service_v1_task_state_proto_goTypes = []interface{}{
	(TaskState)(0), // 0: financial_service.v1.TaskState
}
var file_financial_service_v1_task_state_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_financial_service_v1_task_state_proto_init() }
func file_financial_service_v1_task_state_proto_init() {
	if File_financial_service_v1_task_state_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_financial_service_v1_task_state_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_financial_service_v1_task_state_proto_goTypes,
		DependencyIndexes: file_financial_service_v1_task_state_proto_depIdxs,
		EnumInfos:         file_financial_service_v1_task_state_proto_enumTypes,
	}.Build()
	File_financial_service_v1_task_state_proto = out.File
	file_financial_service_v1_task_state_proto_rawDesc = nil
	file_financial_service_v1_task_state_proto_goTypes = nil
	file_financial_service_v1_task_state_proto_depIdxs = nil
}
