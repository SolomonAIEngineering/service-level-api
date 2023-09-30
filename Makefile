gen:
	cd api/financial-service && make && cd ..
	cd api/social-service && make && cd ..
	cd api/user-service && make && cd ..
	make gen-sdk
	./generate.sh

gen-sdk: 
	npx swagger-typescript-api -p ./pkg/generated/user_service/v1/apidocs.swagger.json -o ./component-library/src/data-contracts/user-service \
		--name service.ts \
		--extract-request-body \
		--extract-response-body \
		--modular -r --union-enums \
		--add-readonly \
		--route-types \
		--sort-types  \
		--sort-routes  \
		--another-array-type \
		--route-types \
		--no-client \
		--extract-request-body --api-class-name UserService 
	npx swagger-typescript-api -p ./pkg/generated/financial_service/v1/apidocs.swagger.json -o ./component-library/src/data-contracts/financial-service \
		--name service.ts \
		--extract-request-body \
		--extract-response-body \
		--modular -r --union-enums \
		--add-readonly \
		--route-types \
		--sort-types  \
		--sort-routes  \
		--another-array-type \
		--route-types \
		--no-client \
		--extract-request-body --api-class-name FinancialService      
	npx swagger-typescript-api -p ./pkg/generated/social_service/v2/apidocs.swagger.json -o ./component-library/src/data-contracts/social-service \
		--name service.ts \
		--extract-request-body \
		--extract-response-body \
		--modular -r --union-enums \
		--add-readonly \
		--route-types \
		--sort-types  \
		--sort-routes  \
		--another-array-type \
		--route-types \
		--no-client \
		--extract-request-body --api-class-name SocialService 

fmt: 
	go fmt ./...
	gofumpt -l -w .

lint: 
	golangci-lint run ./...

test: 
	set -o pipefail && go test -v ./... -json | tparse -all

precommit: fmt lint test