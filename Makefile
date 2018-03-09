TESTS = $(shell find test/specs -type f -name "*.js")
TEST_TIMEOUT = 10000
# NPM_REGISTRY = "--registry=http://registry.npm.taobao.org"
NPM_REGISTRY = "" 

all: test

install:
	npm install $(NPM_REGISTRY)

pretest:
	@if ! test -f config.js; then \
		cp config.default.js config.js; \
	fi
	@if ! test -d static/upload; then \
		mkdir static/upload; \
	fi

test: pretest
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--timeout $(TEST_TIMEOUT) \
		$(TESTS)

run:
	@node app.js

start: install
	@NODE_ENV=production ./node_modules/.bin/pm2 start app.js --name "zsedc800" --max-memory-restart 400M

restart: install
	@NODE_ENV=production ./node_modules/.bin/pm2 restart "zsedc800"

.PHONY: install test run start restart