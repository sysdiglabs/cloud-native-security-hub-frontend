#!/bin/bash
kubectl version --client
kubectl -n staging get po
kubectl -n staging delete po -l app=frontend
kubectl apply -f deployments/master/frontend-deployment.yaml
kubectl -n staging get po