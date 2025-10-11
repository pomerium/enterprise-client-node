.PHONY: build
build: install
	@echo "==> $@"
	npm run build

build-cjs: install
	@echo "==> $@"
	npm run build:cjs

build-esm: install
	@echo "==> $@"
	npm run build:esm

clean:
	@echo "==> $@"
	npm run clean

.PHONY: generate
generate: install
	@echo "==> $@"
	./scripts/generate

.PHONY: install
install:
	@echo "==> $0"
	npm install
