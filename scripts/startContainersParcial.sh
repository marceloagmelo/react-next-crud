#!/usr/bin/env bash

echo "Derrubando containers..."
docker-compose -f docker/docker-composer-parcial.yml down

echo "Subindo containers..."
docker-compose -f docker/docker-composer-parcial.yml up -d
