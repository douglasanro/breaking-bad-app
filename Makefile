build:
	$(info Make: Building containers.)
	@TAG=$(TAG) APP_CMD='sh -c "yarn && yarn build"' docker-compose up

start:
	$(info Make: Starting containers.)
	@TAG=$(TAG) APP_CMD='sh -c "yarn && yarn start"' docker-compose up

test:
	$(info Make: Starting containers.)
	@TAG=$(TAG) APP_CMD='sh -c "yarn && yarn test --coverage --watchAll=false"' docker-compose up

stop:
	$(info Make: Stopping containers.)
	@docker-compose stop

restart:
	$(info Make: Restarting containers.)
	@make -s stop
	@make -s start
