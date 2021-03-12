test:
	# Run tests in the test container
	docker-compose -f docker-compose.test.yaml up  --abort-on-container-exit --build
serve:
	# Build the frontend files in a docker container which maps to the host
	docker-compose -f docker-compose.serve.yaml up --force-recreate --build
deploy: 
  # Deploys the built files to s3
	docker-compose -f docker-compose.deploy.yaml up --force-recreate --build
deploy-staging: 
  # Deploys the built files to s3 staging sites
	docker-compose -f docker-compose.deploy.staging.yaml up --force-recreate --build