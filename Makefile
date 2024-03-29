# Define the base command for generating TypeScript API
BASE_CMD := npx swagger-typescript-api

# Common options for the command
COMMON_OPTS := --name service.ts \
               --extract-request-body \
               --extract-response-body \
               --modular -r --union-enums \
               --add-readonly \
               --route-types \
               --sort-types \
               --sort-routes \
               --another-array-type \
               --route-types \
               --no-client \
               --extract-request-body

# Define targets for each service
.PHONY: user_service financial_service social_service accounting_service

all: user_service financial_service social_service accounting_service

fmt: 
	go fmt ./...
	gofumpt -l -w .

lint: 
	golangci-lint run ./...

test: 
	set -o pipefail && go test -v ./... 

user_service:
	$(BASE_CMD) -p ./pkg/generated/user_service/v1/apidocs.swagger.json -o ./component-library/src/data-contracts/user-service $(COMMON_OPTS) --api-class-name UserService

financial_service:
	$(BASE_CMD) -p ./pkg/generated/financial_service/v1/apidocs.swagger.json -o ./component-library/src/data-contracts/financial-service $(COMMON_OPTS) --api-class-name FinancialService

social_service:
	$(BASE_CMD) -p ./pkg/generated/social_service/v2/apidocs.swagger.json -o ./component-library/src/data-contracts/social-service $(COMMON_OPTS) --api-class-name SocialService

accounting_service:
	$(BASE_CMD) -p ./pkg/generated/accounting_service/v1/apidocs.swagger.json -o ./component-library/src/data-contracts/accounting-service $(COMMON_OPTS) --api-class-name AccountingService

workspace_service:
	$(BASE_CMD) -p ./pkg/generated/workspace_service/v1/apidocs.swagger.json -o ./component-library/src/data-contracts/workspace-service $(COMMON_OPTS) --api-class-name WorkspaceService

# New gen target to incorporate the build process of different services
gen:
	for service in financial-service social-service user-service accounting-service workspace-service; do \
		cd api/$$service && make && cd ../..; \
	done
	make all
	./generate.sh

precommit: gen fmt test
	cd component-library && make precommit && cd ..