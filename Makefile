.PHONY: all
all: generate build

.PHONY: build
build: install
	@echo "==> $@"
	npm run build

.PHONY: build-cjs
build-cjs: install
	@echo "==> $@"
	npm run build:cjs

.PHONY: build-esm
build-esm: install
	@echo "==> $@"
	npm run build:esm

.PHONY: clean
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
