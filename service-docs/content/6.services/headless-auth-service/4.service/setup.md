## Running The Service Locally

---

This document aims to serve as a guide to get this service and its dependencies up and running. If you haven't yet, it is imperative
you follow the steps provided on this [minikube installation guide](https://v1-18.docs.kubernetes.io/docs/tasks/tools/install-minikube/) prior to
executing any of the below operations.

### Running Service Locally With Live Reload During Development
To run the service and it's dependencies with live reload enabled to expedite development, open the terminal and run the following command
```bash
cd ~/go/src/github.com/SolomonAIEngineering/backend-headless-authentication-service
make start-local-live
```

This spins up the service and its dependencies as part of a docker-compose workflow. If you do not want to see the service logs and would rather
opt to run the service in the background ... run `make start-local` instead

### Running Minikube locally
In order to start a local minikube cluster perform the following
```bash
cd ~/go/src/github.com/SolomonAIEngineering/backend-headless-authentication-service
make mk-start
```

### Deploying Your Changes To Minikube Locally
To deploy your local changes in a container in the minikube cluster, run the below operations. It builds and containerizes your local changes then
updates the docker registry at which the container is stored from local to that of minikube. After, it deploys the helm charts referencing
this container as well as dependent services into the cluster. Lastly, it opens, a tab with a k8's dashboard shedding light on the state of the
deployment, services, pods, ...etc

```bash
cd ~/go/src/github.com/SolomonAIEngineering/backend-headless-authentication-service
make mk-launch-new
```

If you want to deploy with the docker container present on dockerhub instead of local changes, run `make mk-launch` instead.

### Stopping And Deleting Minikube Cluster
To stop minikube cluster run
```bash
cd ~/go/src/github.com/SolomonAIEngineering/backend-headless-authentication-service
make mk-stop
```

To delete the minikube cluster run
```bash
cd ~/go/src/github.com/SolomonAIEngineering/backend-headless-authentication-service
make mk-delete
```

### Running Tests Locally
#### Unit Tests
To run service level unit tests run
```bash
cd ~/go/src/github.com/SolomonAIEngineering/backend-headless-authentication-service
make test
```

This will spin up the service with your changes in a container as well as dependent services as part of a docker compose workflow and
run a set of tests against them all

#### Integration Tests
To run integration tests, make sure you have a minikube cluster up and running as well as have deployed the set of dependent helm charts. For
reference, utilize the following commands to execute a suite of E2E tests against the service in the cluster.
```bash
cd ~/go/src/github.com/SolomonAIEngineering/backend-headless-authentication-service
make integration-test
```

#### Suite Of Tests
To run all tests execute the following set of commands
```bash
cd ~/go/src/github.com/SolomonAIEngineering/backend-headless-authentication-service
make test
```
