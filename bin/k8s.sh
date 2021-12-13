#!/bin/sh

SHA=$(git rev-parse HEAD | tr -d '\n')
AWS="138858716852.dkr.ecr.eu-west-2.amazonaws.com"
REPO="${AWS}/myjuiceplus"
TAG="$REPO:$SHA"

docker build --platform linux/amd64 -t "$TAG" -t "$REPO:latest" .
aws ecr get-login-password | docker login --username AWS --password-stdin "${AWS}"
docker push "$REPO" --all-tags