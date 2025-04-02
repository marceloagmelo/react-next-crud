#!/usr/bin/env bash

echo "Removendo deployments e statefulsets no kubernetes..."
kubectl -n crud delete deployment adminer backend crud
kubectl -n crud delete statefulset mysql

echo "Removendo services no kubernetes..."
kubectl -n crud delete svc adminer-service backend-service crud-service

echo "Removendo ingress no kubernetes..."
kubectl -n crud delete ingress adminer-ingress backend-ingress crud-ingress