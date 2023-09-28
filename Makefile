gen:
	cd api/financial-service && make && cd ..
	cd api/social-service && make && cd ..
	cd api/user-service && make && cd ..
	make gen-sdk

gen-sdk: 
	npx swagger-typescript-api -p ./pkg/generated/user_service/v1/apidocs.swagger.json -o ./sdk/src/user-service -n service.ts \
		--extract-request-body \
		--extract-response-body \
		--modular -r --union-enums \
		--add-readonly \
		--route-types --sort-types  \
		--sort-routes  \
		--axios \
		--another-array-type \
		 --route-types \
		 --extract-request-body --api-class-name UserService 
	npx swagger-typescript-api -p ./pkg/generated/financial_service/v1/apidocs.swagger.json -o ./sdk/src/financial-service -n service.ts \
		 --extract-request-body --extract-response-body \
		 --modular -r --union-enums --add-readonly \
		 --route-types --sort-types  --sort-routes --axios \
		  --another-array-type \
		 --api-class-name FinancialService       
	npx swagger-typescript-api -p ./pkg/generated/social_service/v2/apidocs.swagger.json -o ./sdk/src/social-service -n service.ts \
		--extract-request-body --extract-response-body \
		--modular  -r --union-enums --add-readonly \
		--route-types --sort-types  --sort-routes \
		 --route-types \
		 --axios \
		 --another-array-type \
		--api-class-name SocialService 

test:
	openapi-generator generate -i ./pkg/generated/user_service/v1/apidocs.swagger.json -g typescript-axios -o /tmp/test/