install:
	make -C frontend install & make -C backend install

lint:
	make -C frontend lint

start-frontend:
	make -C frontend start

start-backend:
	make -C backend start-server

start:
	make start-backend & make start-frontend

build:
	make -C frontend build

test:
	make -C frontend test

.PHONY: test