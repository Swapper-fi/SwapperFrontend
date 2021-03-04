test:
	# Run tests in the test container
	docker-compose -f docker-compose.test.yaml up --exit-code-from swapper-test --force-recreate --build
serve:
	# Build the frontend files in a docker container which maps to the host
	docker-compose -f docker-compose.serve.yaml up --force-recreate --build
deploy: 
  # Deploys the built files to s3
	docker-compose -f docker-compose.deploy.yaml up --force-recreate --build

