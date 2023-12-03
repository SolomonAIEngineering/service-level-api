# RFC | Simfiny Stream state update services

Owner: D Yoan L Mekontchou Yomba

**Date:** 2021-08-08

**Project:** Social Graph Worker Design Development

**Audience:** Engineering

**Authors:** Yoan Yomba, Srikar Dandaraju, Sean Killian

**Emails:** yoan@simfinii.com, srikar@simfinii.com, sean@simifinii.com

**Reply To:** yoan@simfinii.com, srikar@simfinii.com, sean@simifinii.com

## Introduction

The primary goal of the Social Graph Worker service is to asynchronously build the social graph maintained by GetStream on simfiny’s behalf. This service is pivotal for any social feature the simfiny aims to build. 

## Motivation

Simfiny provides a medium by which numerous stakeholders can not only track the health of their finances, but leverage their peers and our various offerings to achieve all conceivable financial goals they may withhold. 

Given financial habits are emotion-based and highly influenced by group dynamics; we believe a social experience is pivotal for our end-users. Social experiences although hard and incredibly complex (think of instagram, tiktok, linkedIn, …etc) are extremely useful when attempting to generate re-affirming feedback loops especially around emotion-based behaviors. With this in mind, we at simfiny have concluded that properly defining a social experience for our end-users and adequately architecting a backend that can support this initiative is critical for us to provide the value we believe our users need. 

The social graph will serve as the core service driving all features tied to digital social experiences on the simfiny platform.

This technical design document provides granular details specific to service level interactions, dependencies, monitoring, …etc. The aim here is to provide as much detail as possible in hopes of easing the onboarding process of any future developer and effectively providing a reference to be utilized throughout development

## Potential Solutions

### **Singular service**

This service will serve as a consumer to a few managed topics; some of which include: activities, follow-relationships, and mentions. Essentially, when a user initiates any social action from the context of the social service api, a message is placed on a message queue (topic specific). The social graph worker will consume messages from this queue, perform some validation/sanitation checks against the message and send it to the GetStream platform enabling us to asynchronous enhance the social graph for write traffic. 

For now, this service will not expose any external facing api’s and will be stateless. 

**Note:** This is subject to change. 

### **Asynchronous Processing**

**Amazon SQS & SNS**

We will leverage Amazon Simple Notification Service (SNS) and Amazon Simple Queue Service (SQS) for asynchronously building the social graph via GetStream. 

SNS withholds pub/sub functionality which provides topics for our high-throughput, push-based, many-many messaging use case. With SNS topics, our backend can fanout messages to subscribing systems which in our case is SQS.

SQS is a fully managed message queuing service that enables us to decouple and scale our microservices. SQS eliminates the complexity and overhead associated with managing and operating message-oriented middleware, and empowers us to focus on differentiating work. Using SQS, we can send, store, and receive messages between service components at any volume, without losing messages or requiring other services to be available. 

## High Level System Design & Assumptions

This assumptions will be expanded upon later in the future. 

## Constraints/Limitations

According to the CAP theorem it is not possible for a distributed system to provide more than two of the following guarantees simultaneously.

- Consistency: Consistency implies that every read receives the most recent write or errors out
- Availability: Availability implies that every request receives a response. It is not guaranteed that the response contains the most recent write or data.
- Partition tolerance: Partition tolerance refers to the tolerance of a storage system to failure of a network partition. Even if some of the messages are dropped or delayed the system continues to operate.

CAP theorem implies that when using a network partition, with the inherent risk of partition failure, one has to choose between consistency and availability and both cannot be guaranteed at the same time.

High availability is a priority for social applications and to this objective, the social graph worker service chooses availability and partition tolerance from the CAP guarantees compromising on data consistency to some extent. We are comfortable with eventual consistency and these ideals are defined in our architecture and service level interactions.

To enforce this notion of eventual consistency, all write requests should be performed with the proper set of retries upon encountered failures. Additionally, a granular set of metrics should be emitted for all operations on the write path. **** All writes are performed via the consumption from the message queue. Lastly, this service's load patterns will primarily be on the WRITES side hence, any mechanism introduced to elevate scale should take this into account.

## System Design/Architecture

### Terminology & Components

**SLA**: Service Level Agreements

  **CAP**: Consistency, Availability, Partition Tolerance

### Hard & Soft Requirements

This is a very crucial part of the system. Hence , if there is an outage across all instances, users will no longer be able to perform operations against their social feeds or any social feature. 

Additionally, if for instance there is an instance of wide-scaled unavailability, we could experience enormous latencies as queues fill up given there is no consumer available to service write operations. This potentially exposes us to dropped messages and a backend composed of many divergent states. An outage with this service would substantially affect our business offerings. Thus, it is crucial we provision the proper mitigations in place to limit this from occurring.

Some potential mitigations to set in place are the following:

1. Ensure at least 3 stateless instances of the service are always running behind k8s pod load balancer allowing for automatic failover to healthy pods
2. Ensure LinkerD sidecar deployed alongside every service
    1. Metrics, load balancing, retries, timeouts, traffic split
3. Provide extensive telemetry
    1. Custom Metrics (Infra., Operational, Business Logic, Requests, Failure Rates, Database Performance Metrics, ...etc)
    2. Sensitive Alerting Logic
4. Service level dependency isolation
5. Allow service to report health metrics and diagnostics.

## SLA & Service Guarantees

This Social Graph Worker Service Level Agreement (“SLA”) is a policy governing the construction of the Social Graph by this service. In the event of a conflict between the terms of this SLA and the terms of the Simfiny Customer Agreement or other agreement with us governing the use of the Social Graph Worker Service (the “Agreement”), the terms and conditions of this SLA apply, but only to the extent of such conflict.

**Service Commitment**

The Social Graph Worker Service will provide 3 9’s of availability (99.95% uptime) SLA per month.

**SLA Exclusions**

The SLA applies only the Social Graph Worker Service or any additional services encompassing social. It does not apply to any of the following:

- Issues caused by situations outside the context of the social service, such as large-scale internet outages, datacenter outages and natural disasters
- Issues related to service or account restrictions, including but not limited to a customer’s use of the services in violation of the Agreement
- Downtime during maintenance windows, user-initiated downtime, or automated upgrades

**SLA Definitions**

The terms used in this SLA document are defined as follows:

- **Monthly Uptime: M**onthly uptime is calculated by subtracting from 100% the percentage of 5-minute intervals during the monthly cycle in which the social service was Unavailable. Monthly Uptime measurements exclude Unavailability resulting directly or indirectly from any SLA exclusion
- **Unavailability**: All the requests to the social service fail for more than 5 minutes.

### Data Definition, Schema Design, Persistence Requirements

**Activity Message Definition**

```json
**Activity Schema (Message Body)
	Actor**: [String] -- User ID associated with the activity (**Simfiny User ID**)
	**Verb**: [String] -- Activity Action
		Allowed Verbs: **Post, RePost, Question, Achievement**
	**ObjectID**: [String] -- Post ID encompassing the activity (**Simfiny Post ID**)
	**FeedType**: [String] -- Type of feed this activity should be posted to
		Allowed Feed Types: **User (Flat) | Timeline (Flat) | Notification (Notification)**
	**CreatedAt**: [String] -- Time at which activity was created
	**To**: [array<String> ...] -- User IDs tagged or mentioned in the activity
	**ForeignID**: [String] -- Unique ID tied to the activity -- Comprised of Verb: Actor - Object ID .. I.E Post:12334235-235353
	**HashTags**: [array<String> ...] - List of hashtags tied to the activity	
```

**Comment Message Definition**

```json
**Comment Schema (Message Body)
	Actor**: [String] -- User ID associated with the activity (**Simfiny User ID**)
	**Verb**: [String] -- Activity Action [**Comment]**
	**ObjectID**: [String] -- Comment ID encompassing the activity (**Simfiny Comment ID**)
	**ParentID**: [String] -- ID of parent activty ID (parent ID can be tied to a comment or a post)(**Simfiny Post/Comment ID -- Parent**)
	**FeedType**: [String] -- Type of feed this activity should be posted to
		Allowed Feed Types: **User (Flat) | Timeline (Flat) | Notification (Notification)**
	**Time**: [String] -- Time at which activity was created
	**To**: [array<String> ...] -- User IDs tagged or mentioned in the activity
	**ForeignID**: [String] -- Unique ID tied to the activity -- Comprised of Verb: Actor - Object ID .. I.E Post:12334235-235353
	**HashTags**: [array<String> ...] - List of hashtags tied to the activity	
```

**Reactions Message Definition**

```json
**Reactions Schema (Message Body)
	ActivityID**: [String] -- ID of activity to which this reaction refers to
	**Kind**: [String] -- Reaction type
		Allowed Kinds: **Like, Unlike, Star, Share
	TargetFeed**: [array<String> ...] -- The feeds (IDs) that should receive a notification activity
	**Data3**: [String] -- Unique ID of the reaction object tied to the activity
	**UserID**: [String] -- ID of the user adding the reaction
```

**Following Message Definition**

```json
**Following Schema (Message Body)
	SourceFeedID**: [String] -- ID of the source feed to trying to follow the target
	**TargetFeedID**: [String] -- ID of the target feed trying to be followed
	**ActivityCopyLimit**: [Int] -- Number of activities that should be copied from the target feed
```

### Caching Requirements

As of now we have no present caching requirements. 

### Capacity Planning

Capacity planning requirements will be determined later.

### Performance Requirements

Performance requirements will be determined later.

### Security

We must enforce mTLS termination at the linkerD sidecar layer and all communication between services should utilize mTLS within the cluster. It is also important to note that any request originating from the service to the queue withholding messages should be secure hence utilize ssl.

### Multi Region Story

The service does not have any multi-region requirements as of yet. We will expand on our multi-region story at later points.

## Rollout Plan

### Rollout Phases

Rollout phases will be determined later.

### A/B Tests

A/B Tests will be determined later.

### Data Migration

Data Migration will be determined later.

## Test Plan

Test Plan will be determined later.

## Appendix

- References, links to additional documentation (E.g. Product specification or Business requirements with acceptance criteria )

## Asynchronous Processing Best Practices

• [Queue Server Side Encryption](https://www.trendmicro.com/cloudoneconformity/knowledge-base/aws/SQS/server-side-encryption.html)
Ensure Amazon SQS queues enforce Server-Side Encryption (SSE).
• [Queue Unprocessed Messages](https://www.trendmicro.com/cloudoneconformity/knowledge-base/aws/SQS/queue-unprocessed-messages.html)
Ensure AWS SQS queues do not retain a high number of unprocessed messages.
• [SQS Cross Account Access](https://www.trendmicro.com/cloudoneconformity/knowledge-base/aws/SQS/sqs-cross-account-access.html)
Ensure AWS Simple Queue Service (SQS) queues do not allow unknown cross account access.
• [SQS Dead Letter Queue](https://www.trendmicro.com/cloudoneconformity/knowledge-base/aws/SQS/dead-letter-queue.html)
Ensure there is a Dead Letter Queue configured for each Amazon SQS queue.
• [SQS Encrypted With KMS Customer Master Keys](https://www.trendmicro.com/cloudoneconformity/knowledge-base/aws/SQS/queue-encrypted-with-kms-customer-master-keys.html)
Ensure SQS queues are encrypted with KMS CMKs to gain full control over data encryption and decryption
• [SQS Queue Exposed](https://www.trendmicro.com/cloudoneconformity/knowledge-base/aws/SQS/sqs-queue-exposed.html)
Ensure that AWS Simple Queue Service (SQS) queues are not exposed to everyone.
Whether your cloud exploration is just starting to take shape, you’re mid-way through a migration or you’re already running complex workloads in the cloud, Conformity offers full visibility into your overall security and governance posture across various standards and frameworks.

## Review Sign-Off

- Team Lead - sign off by Yoan Yomba
- Sponsor - sign off by Yoan Yomba