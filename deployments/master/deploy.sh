#!/bin/bash
kubectl version --client
kubectl -n promhub get po
kubectl -n promhub delete po -l app=frontend
kubectl apply -f deployments/master/frontend-deployment.yaml
kubectl -n promhub get po