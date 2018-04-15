CLIENT_VERSION ?= "0.1.11"
CLIENT_PACK    := carbonql-kubernetes-client-node-$(CLIENT_VERSION).tgz

BUILD_DIR ?= dist
TSC       ?= tsc
NPM       ?= npm
MOCHA     ?= mocha
SED       ?= sed

MAKE_PACKAGE_JSON := $(SED) s/{{CLIENT_VERSION}}/$(CLIENT_VERSION)/g package.json.template

package.json: package.json.template
	$(MAKE_PACKAGE_JSON) > package.json

dependencies: package.json
	$(NPM) install

build: package.json
	$(TSC)
	$(MAKE_PACKAGE_JSON) > "$(BUILD_DIR)"/package.json

pack:
	cd "$(BUILD_DIR)" && $(NPM) pack
	mv "$(BUILD_DIR)"/$(CLIENT_PACK) .

.PHONY: publish
publish: build
	cd "$(BUILD_DIR)" && $(NPM) publish --access public

test:
	$(MOCHA) -r ts-node/register src/**/*_test.ts

.PHONY: clean
clean:
	rm -Rf node_modules/ "$(BUILD_DIR)"
