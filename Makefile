PATCH_VERSION?=$(shell grep 'VERSION' pkg/version/version.go | awk -F'[".]' '{ printf "%s.%s.%d", $$2, $$3, $$4+1 }')
MINOR_VERSION?=$(shell grep 'VERSION' pkg/version/version.go | awk -F'[".]' '{ printf "%s.%d.0", $$2, $$3+1 }')
MAJOR_VERSION?=$(shell grep 'VERSION' pkg/version/version.go | awk -F'[".]' '{ printf "%d.0.0", $$2+1 }')
VERSION:=$(shell grep 'VERSION' pkg/version/version.go | awk '{ print $$4 }' | tr -d '"')

# Define a function to update version
define update-version
	@next="$(1)"; \
	current="$(VERSION)"; \
	echo "version-set: current: $$current, next: $$next"; \
	FILES="pkg/version/version.go"; \
	for file in $$FILES; do \
		/usr/bin/sed -i '' "s/$$current/$$next/g" $$file; \
	done; \
	echo "Version $$next set in code"; 
endef

minor-version-set:
	$(call update-version,$(MINOR_VERSION))

major-version-set:
	$(call update-version,$(MAJOR_VERSION))

patch-version-set:
	$(call update-version,$(PATCH_VERSION))
	
release-minor-version: 
	echo "Releasing $(MINOR_VERSION)"
	git checkout -b release-$(MINOR_VERSION)
	make minor-version-set
	git add .
	git commit -m "bumping version from $(VERSION) to $(MINOR_VERSION)"
	git tag v$(MINOR_VERSION)
	git push --set-upstream origin release-$(MINOR_VERSION)
	git push origin v$(MINOR_VERSION)

release-major-version: 
	echo "Releasing $(MAJOR_VERSION)"
	git checkout -b release-$(MAJOR_VERSION)
	make major-version-set 
	git add .
	git commit -m "bumping version from $(VERSION) to $(MAJOR_VERSION)"
	git tag v$(MAJOR_VERSION)
	git push --set-upstream origin release-$(MAJOR_VERSION)
	git push origin v$(MAJOR_VERSION)

release-patch-version:
	echo "Releasing $(PATCH_VERSION)"
	git checkout -b release-$(PATCH_VERSION)
	make patch-version-set
	git add .
	git commit -m "bumping version from $(VERSION) to $(PATCH_VERSION)"
	git tag v$(PATCH_VERSION)
	git push --set-upstream origin release-$(PATCH_VERSION)
	git push origin v$(PATCH_VERSION)

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