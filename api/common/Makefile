# Adapted from github.com/temporalio/api

$(VERBOSE).SILENT:
############################# Main targets #############################
ci-build: install proto

# Install dependencies.
install: grpc-install api-linter-install buf-install

# Run all linters and compile proto files.
proto: grpc
########################################################################

##### Variables ######
ifndef GOPATH
GOPATH := $(shell go env GOPATH)
endif

GOBIN := $(if $(shell go env GOBIN),$(shell go env GOBIN),$(GOPATH)/bin)
SHELL := PATH=$(GOBIN):$(PATH) /bin/sh

COLOR := "\e[1;36m%s\e[0m\n"

PROTO_ROOT := protobuf
PROTO_FILES = $(shell find $(PROTO_ROOT) -name "*.proto")
PROTO_DIRS = $(sort $(dir $(PROTO_FILES)))
PROTO_OUT := gen

$(PROTO_OUT):
	mkdir $(PROTO_OUT)

##### Compile proto files for go #####
grpc: buf-lint buf-generate

grpc-install: buf-install api-linter-install

.PHONY: buf-generate
buf-generate:
	printf $(COLOR) "Run buf generate..."
	(cd $(PROTO_ROOT) && buf generate)
	find ../../pkg/generated/financial_service/v1 -type f -name "*.pb.go" -exec protoc-go-inject-tag -input="{}" \;

##### Plugins & tools #####
api-linter-install:
	printf $(COLOR) "Install/update api-linter..."
	go install github.com/googleapis/api-linter/cmd/api-linter@v1.22.0

buf-install:
	printf $(COLOR) "Install/update buf..."
	go install github.com/bufbuild/buf/cmd/buf@v1.14.0

protoc-gen-gorm-install:
	printf $(COLOR) "Install/update protoc-gen-gorm..."
	go install github.com/infobloxopen/protoc-gen-gorm@cedaaf0105d24596b9987100c864b1021d362519

##### Linters #####
api-linter:
	printf $(COLOR) "Run api-linter..."
	api-linter --set-exit-status --config $(PROTO_ROOT)/api-linter.yaml $(PROTO_FILES)

buf-lint:
	printf $(COLOR) "Run buf linter..."
	(cd $(PROTO_ROOT) && buf lint)

buf-breaking:
	@printf $(COLOR) "Run buf breaking changes check against main branch..."	
	@(cd $(PROTO_ROOT) && buf breaking --against '.git#branch=main')

buf-format:
	buf format -w
	
##### Clean #####
clean:
	printf $(COLOR) "Delete generated go files..."
	rm -rf $(PROTO_OUT)

get_go_tools:
	@echo Installing protobuf golang and gRPC drivers
	@go install google.golang.org/protobuf/cmd/protoc-gen-go
	@go install google.golang.org/grpc/cmd/protoc-gen-go-grpc
	@go get -u github.com/favadi/protoc-go-inject-tag
