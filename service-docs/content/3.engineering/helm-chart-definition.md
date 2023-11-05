# headless-authentication-service

Headless Authentication Service Helm chart for Kubernetes

## TL;DR
```console
$ helm repo add simfinii https://github.com/SimifiniiCTO/simfinii
$ helm install my-release simfinii/headless-authentication-service
```

## Maintainers

| Name | Email | Url |
| ---- | ------ | --- |
| yoan yomba | <yoan@simfinii.com> |  |

![Version: 2.0.2](https://img.shields.io/badge/Version-2.0.2-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 2.0.2](https://img.shields.io/badge/AppVersion-2.0.2-informational?style=flat-square) ![Version: 2.0.2](https://img.shields.io/badge/Version-2.0.2-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 2.0.2](https://img.shields.io/badge/AppVersion-2.0.2-informational?style=flat-square)

```
          ,-.
 ,     ,-.   ,-.
/ \   (   )-(   )
\ |  ,.>-(   )-<
 \|,' (   )-(   )
  Y ___`-'   `-'
  |/__/   `-'
  |
  |
  |    SIMFINY PLATFORM - This platform is attempting to revolutionize the finacial gamification as well
  |                        as the social experience users consumers by both enabling them to better reach their
  |                        target goals as well as allowing such consumers to share ideas and progress in communities
__|_____________
```

## Service Background

Authentication is an extremely important aspect of an any platform due in part to the fact that data protection
at the user level must be enforced as well as access level permissions. Authentication however,
in a distributed system provides more complexities. In monolithic applications, authentication and
authorization can be performed via sessions. However, in a distributed system, since multiple instances
of a service can be deployed at one time, enforcing user requests to the originating
session instance (sticky sessions) isn’t viable and introduces a ton of operational overhead.

With this in mind, we at the simifinii aim to implement our authorization scheme via 2 sets of services
via json web tokens (JWT). We also make use of a distributed cache for session storage which ensures
that we don’t need to maintain stickiness across instances of a server. The authentication framework
developed by us consists of 2 service instances. One is a stateful instance which utilizes the
open-sourced keratin-authn microservice and interfaces with either a postgres or mysql database.
The second instance is a headless authentication service which is stateless and serves as an interface
through which the keratin-authn service can be interacted with

## Introduction
This chart bootstraps the headless authentication service deployment on a Kubernetes cluster using the Helm package manager.

This chart can be used with Kubeapps for deployment and management of Helm Charts in clusters. This Helm chart has been tested on top of a Kubernetes Runtime.

* Kubernetes 1.19+
* Helm 3.2.0+
* PV provisioner support in the underlying infrastructure

## Installing the Chart

To install the chart with the release name `my-release`:

```console
$ helm repo add simfinii https://github.com/SimifiniiCTO/simfinii
$ helm install my-release simfinii/headless-authentication-service
```

These commands deploy the headless authentication service on the Kubernetes cluster in the default configuration. The Parameters section lists the parameters that can be configured during installation.

> **Tip**: List all releases using `helm list`

## Uninstalling the Chart

To uninstall/delete the `my-release` deployment:

```console
$ helm delete my-release
```

The command removes all the Kubernetes components associated with the chart and deletes the release.

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| affinity | object | `{}` |  |
| authService.domains | string | `"localhost"` |  |
| authService.enableAuthIntegration | string | `"true"` |  |
| authService.externalPort | string | `"3000"` |  |
| authService.host | string | `"authentication-service"` |  |
| authService.internalPort | string | `"8000"` |  |
| authService.issuerURI | string | `"http://localhost"` |  |
| authService.origin | string | `"http://localhost"` |  |
| authService.password | string | `"simifinii"` |  |
| authService.publicURI | string | `"http://localhost"` |  |
| authService.username | string | `"simifinii"` |  |
| autoscaling.behavior.scaleDown.percent | int | `100` |  |
| autoscaling.behavior.scaleDown.periodSeconds | int | `15` |  |
| autoscaling.behavior.scaleDown.stabilizationWindowSeconds | int | `300` |  |
| autoscaling.behavior.scaleUp.percent | int | `100` |  |
| autoscaling.behavior.scaleUp.periodSeconds | int | `15` |  |
| autoscaling.behavior.scaleUp.stabilizationWindowSeconds | int | `0` |  |
| autoscaling.cpu | int | `90` |  |
| autoscaling.enabled | bool | `true` |  |
| autoscaling.maxReplicas | int | `10` |  |
| autoscaling.memory | int | `90` |  |
| autoscaling.minReplicas | int | `1` |  |
| aws.config.id | string | `"AKIA2EPOPXDPD3Z2NOUY"` |  |
| aws.config.profile | string | `"solomon-ai-engineering"` |  |
| aws.config.secret | string | `"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"` |  |
| aws.consumer.backoffDuration | string | `"2s"` |  |
| aws.consumer.batchSize | int | `1000` |  |
| aws.consumer.concurrencyFactor | int | `10` |  |
| aws.consumer.messageTimeout | string | `"1m"` |  |
| aws.consumer.pollingDuration | string | `"10s"` |  |
| aws.consumer.waitTimeInSeconds | int | `20` |  |
| aws.queue.config.endpoint | string | `"https://sqs.us-east-1.amazonaws.com/696821725406"` |  |
| aws.queue.config.maxMessagesRead | int | `10` |  |
| aws.queue.config.readAttributes[0] | string | `"All"` |  |
| aws.queue.config.readTimeoutSec | string | `"5s"` |  |
| aws.queue.config.region | string | `"us-east-1"` |  |
| aws.queue.config.writeTimeoutSec | string | `"5s"` |  |
| aws.queue.deadLetterQueueUrl | string | `"https://sqs.us-east-1.amazonaws.com/696821725406/authentication-service-account-deletion-staging-dl"` |  |
| aws.queue.queueUrl | string | `"https://sqs.us-east-1.amazonaws.com/696821725406/authentication-service-account-deletion-staging"` |  |
| backend | string | `nil` |  |
| backends | list | `[]` |  |
| cache | string | `""` |  |
| certificate.create | bool | `false` |  |
| certificate.dnsNames[0] | string | `"headless-authentication-service"` |  |
| certificate.duration | string | `"24h"` |  |
| certificate.ipAddresses | object | `{}` |  |
| certificate.issuerRef.kind | string | `"ClusterIssuer"` |  |
| certificate.issuerRef.name | string | `"self-signed"` |  |
| certificate.key.algorithm | string | `"rsa"` |  |
| certificate.key.rotationPolicy | string | `"Never"` |  |
| certificate.key.size | string | `"2048"` |  |
| certificate.namespace | string | `""` |  |
| certificate.renewBefore | string | `"12h"` |  |
| certificate.usages[0] | string | `"server auth"` |  |
| certificate.usages[1] | string | `"client auth"` |  |
| deploymentStrategy.maxSurge | string | `"25%"` |  |
| deploymentStrategy.maxUnavailable | string | `"25%"` |  |
| deploymentStrategy.type | string | `"RollingUpdate"` |  |
| dnsPolicy | string | `"ClusterFirst"` |  |
| failures.failurethreshold | int | `5` |  |
| failures.initialDelaySeconds | int | `30` |  |
| failures.periodSeconds | int | `30` |  |
| failures.successThresholds | int | `1` |  |
| failures.timeoutSeconds | int | `10` |  |
| faults.delay | bool | `false` |  |
| faults.error | bool | `false` |  |
| faults.testFail | bool | `false` |  |
| faults.testTimeout | bool | `false` |  |
| faults.unhealthy | bool | `false` |  |
| faults.unready | bool | `false` |  |
| fullnameOverride | string | `""` |  |
| h2c.enabled | bool | `false` |  |
| host | string | `nil` |  |
| image.pullPolicy | string | `"IfNotPresent"` |  |
| image.repository | string | `"feelguuds/headless-authentication-service"` |  |
| image.tag | string | `"2.0.2"` |  |
| imagePullSecrets | list | `[]` |  |
| ingress.annotations | object | `{}` |  |
| ingress.className | string | `""` |  |
| ingress.enabled | bool | `false` |  |
| ingress.hosts[0].host | string | `"headless-authentication-service.local"` |  |
| ingress.hosts[0].paths[0].path | string | `"/"` |  |
| ingress.hosts[0].paths[0].pathType | string | `"ImplementationSpecific"` |  |
| ingress.tls[0].hosts[0] | string | `"headless-authentication-service.local"` |  |
| ingress.tls[0].secretName | string | `"headless-authentication-service-tls"` |  |
| integrationTests.enabled | bool | `false` |  |
| linkerd.annotations."linkerd.io/inject" | string | `"enabled"` |  |
| linkerd.annotations."prometheus.io/path" | string | `"/metrics"` |  |
| linkerd.annotations."prometheus.io/port" | string | `"4191\""` |  |
| linkerd.annotations."prometheus.io/scrape" | string | `"true"` |  |
| linkerd.profile.enabled | bool | `false` |  |
| logLevel | string | `"info"` |  |
| nameOverride | string | `"headless-authentication-service"` |  |
| nodeSelector | object | `{}` |  |
| podAnnotations.service | string | `"feelguuds/headless-authentication-service"` |  |
| podSecurityContext | object | `{}` |  |
| probes.liveliness.failurethreshold | int | `3` |  |
| probes.liveliness.initialDelaySeconds | int | `0` |  |
| probes.liveliness.periodSeconds | int | `30` |  |
| probes.liveliness.timeoutSeconds | int | `1` |  |
| probes.readiness.successThresholds | int | `3` |  |
| progressDeadlineInSeconds | int | `600` |  |
| redis.enabled | bool | `false` |  |
| redis.repository | string | `"redis"` |  |
| redis.tag | string | `"6.0.8"` |  |
| replicaCount | int | `3` |  |
| resources.limits.memory | string | `"256Mi"` |  |
| resources.requests.cpu | string | `"100m"` |  |
| resources.requests.memory | string | `"64Mi"` |  |
| restartPolicy | string | `"Always"` |  |
| revisionHistoryLimit | int | `3` |  |
| schedulerName | string | `"default-scheduler"` |  |
| securityContext | object | `{}` |  |
| service.annotations | object | `{}` |  |
| service.enabled | bool | `true` |  |
| service.env.backendServiceUrls | string | `""` |  |
| service.env.certPath | string | `"/data/cert"` |  |
| service.env.configFile | string | `"config.yaml"` |  |
| service.env.configPath | string | `"/config"` |  |
| service.env.dataLoadedInMemoryForStressTestInMB | string | `"0"` |  |
| service.env.dataPath | string | `"/data"` |  |
| service.env.downstreamServiceConnectionLimit | string | `"8"` |  |
| service.env.enableCpuStressTest | string | `"false"` |  |
| service.env.enableH2c | string | `"false"` |  |
| service.env.enableMemoryStressTest | string | `"false"` |  |
| service.env.enableRandomDelay | string | `"false"` |  |
| service.env.enableRandomError | string | `"false"` |  |
| service.env.enableVersionFromFile | string | `"true"` |  |
| service.env.metricConnectionAddress | string | `"http://jaeger-collector:14268/api/traces"` |  |
| service.env.numStressCpus | string | `"0"` |  |
| service.env.randomDelayMax | string | `"75"` |  |
| service.env.randomDelayMin | string | `"25"` |  |
| service.env.randomDelayUnit | string | `"ms"` |  |
| service.env.setServiceHealthy | string | `"false"` |  |
| service.env.setServiceUnhealthy | string | `"false"` |  |
| service.env.uiColor | string | `""` |  |
| service.env.uiLogo | string | `"#34577c"` |  |
| service.env.uiMessage | string | `"headless-authentication-service"` |  |
| service.env.uiPath | string | `"./ui"` |  |
| service.externalPort | int | `9897` |  |
| service.grpcPort | int | `9796` |  |
| service.hostPort | string | `nil` |  |
| service.http.clientTimeoutInMinutes | string | `"2m"` |  |
| service.http.maxRetries | string | `"5"` |  |
| service.http.maxRetryWaitTimeInMs | string | `"400ms"` |  |
| service.http.minRetryWatiTimeInMs | string | `"200ms"` |  |
| service.http.requestTimeoutInMs | string | `"2000ms"` |  |
| service.http.serverShutdownTimeoutInSeconds | string | `"5s"` |  |
| service.http.serverTimeoutInSeconds | string | `"30s"` |  |
| service.httpPort | int | `9897` |  |
| service.logLevel | string | `"info"` |  |
| service.metricsPort | int | `9899` |  |
| service.name | string | `"headless-authentication-service"` |  |
| service.nodePort | int | `31198` |  |
| service.rpc.rpcDeadlineInMs | string | `"500ms"` |  |
| service.rpc.rpcRetries | string | `"3"` |  |
| service.rpc.rpcRetryBackoffInMs | string | `"20ms"` |  |
| service.rpc.rpcRetryTimeoutInMs | string | `"100ms"` |  |
| service.telemetry.apiKey | string | `"px-api-96674db8-6d46-482f-92af-f48b416a9032"` |  |
| service.telemetry.deployKey | string | `"px-dep-47a828ae-259d-4ce6-a143-3f28ac7fa090"` |  |
| service.telemetry.enabled | bool | `true` |  |
| service.telemetry.licence | string | `"NRJS-289e4caff97051d3722"` |  |
| service.type | string | `"ClusterIP"` |  |
| serviceAccount.annotations.melodiy/service | string | `"headless-authentication-service"` |  |
| serviceAccount.create | bool | `true` |  |
| serviceAccount.enabled | bool | `true` |  |
| serviceAccount.imagePullSecrets | object | `{}` |  |
| serviceAccount.name | string | `""` |  |
| serviceAccount.namespace | string | `""` |  |
| serviceMonitor.additionalLabels.function | string | `"service-monitoring"` |  |
| serviceMonitor.additionalLabels.service | string | `"headless-authentication-service"` |  |
| serviceMonitor.enabled | bool | `false` |  |
| serviceMonitor.honorLabels | bool | `true` |  |
| serviceMonitor.interval | string | `"30s"` |  |
| serviceMonitor.namespace | string | `"monitoring"` |  |
| serviceMonitor.path | string | `"/metrics"` |  |
| serviceMonitor.port | string | `"http"` |  |
| serviceMonitor.scrapeTimeout | string | `"10s"` |  |
| terminationGracePeriodSeconds | int | `30` |  |
| tls.certPath | string | `"/data/cert"` |  |
| tls.enabled | bool | `false` |  |
| tls.hostPort | string | `nil` |  |
| tls.port | int | `9898` |  |
| tls.secretName | string | `nil` |  |
| tolerations | list | `[]` |  |
| ui.color | string | `"#34577c"` |  |
| ui.logo | string | `""` |  |
| ui.message | string | `""` |  |

Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`. For example,

```console
$ helm install my-release \
  --set image.repository=keratin/authn-server \
    simfinii/headless-authentication-service
```

The above command sets the repository from which to get the container of interest.

> NOTE: Once this chart is deployed, it is not possible to change the application's access credentials, such as usernames or passwords, using Helm. To change these application credentials after deployment, delete any persistent volumes (PVs) used by the chart and re-deploy it, or use the application's built-in administrative tools if available.

Alternatively, a YAML file that specifies the values for the parameters can be provided while installing the chart. For example,

```console
$ helm install my-release -f values.yaml simfinii/headless-authentication-service
```

> **Tip**: You can use the default [values.yaml](values.yaml)

## Troubleshooting

Find more information about how to deal with common errors related to Bitnami's Helm charts in [this troubleshooting guide](https://docs.bitnami.com/general/how-to/troubleshoot-helm-chart-issues).

## Upgrading

### To 0.0.1
Base chart version

---
## License

Copyright &copy; 2022 Simfinii

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

----------------------------------------------
Autogenerated from chart metadata using [helm-docs v1.11.0](https://github.com/norwoodj/helm-docs/releases/v1.11.0)