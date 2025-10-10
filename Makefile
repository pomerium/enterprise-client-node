.PHONY: build
build:
	@echo "==> $@"
	npm run build

build-cjs:
	@echo "==> $@"
	npm run build:cjs

build-esm:
	@echo "==> $@"
	npm run build:esm

clean:
	@echo "==> $@"
	npm run clean

.PHONY: generate
generate:
	@echo "==> $@"
	./scripts/update
