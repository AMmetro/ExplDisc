# Deploying

Having [built](building.md) a Docker image, you'll want to deploy it. At time of
writing this is a work in progress.

At a high level it should look something like this once it's compelted:

- Push the Docker image to [ECR](https://aws.amazon.com/ecr)
- Run it inside of a Kubernetes Pod

This is deliberately simple because simple is reliable.
