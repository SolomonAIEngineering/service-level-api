# RFC: User Microservice API

<aside>
❗ **Notion Tip:** Use this page as an example of how you can structure your API Reference and host it on Notion.
The Endpoints database also includes an endpoint template for further documentation.

</aside>

# Generic

## Introduction

The reference is your key to a comprehensive understanding of the Notion API.

<aside>
❗ You need an integration token to interact with the Notion API. You can find an integration token after you create an integration on the integration settings page. If this is your first look at the Notion API, we recommend beginning with the [Getting started guide](https://developers.notion.com/docs/getting-started) to learn how to create an integration.

</aside>

### **Conventions**

The base URL to send all API requests is `https://api.notion.com`. HTTPS is required for all API requests.

The Notion API follows RESTful conventions when possible, with most operations performed via `GET`, `POST`, `PATCH`, and `DELETE` requests on page and database resources. Request and response bodies are encoded as JSON.

**JSON CONVENTIONS**

- Top-level resources have an `"object"` property. This property can be used to determine the type of the resource (e.g. `"database"`, `"user"`, etc.)
- Top-level resources are addressable by a UUIDv4 `"id"` property. You may omit dashes from the ID when making requests to the API, e.g. when copying the ID from a Notion URL.
- Property names are in `snake_case` (not `camelCase` or `kebab-case`).
- Temporal values (dates and datetimes) are encoded in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) strings. Datetimes will include the time value (`2020-08-12T02:12:33.231Z`) while dates will include only the date (`2020-08-12`)
- The Notion API does not support empty strings. To unset a string value for properties like a `url`[Property value object](https://developers.notion.com/reference/property-value-object), for example, use an explicit `null` instead of `""`.

### ****Code samples & SDKs****

Samples requests and responses are shown for each endpoint. Requests are shown using the Notion [JavaScript SDK](https://github.com/makenotion/notion-sdk-js), and [cURL](https://curl.se/). These samples make it easy to copy, paste, and modify as you build your integration.

Notion SDKs are open source projects that you can install to easily start building. You may also choose any other language or library that allows you to make HTTP requests.

### **Pagination**

Endpoints that return lists of objects support cursor-based pagination requests. By default, Notion returns ten items per API call. If the number of items in a response from a support endpoint exceeds the default, then an integration can use pagination to request a specific set of the results and/or to limit the number of returned items.****

**SUPPORTED ENDPOINTS**

| HTTP method | Endpoint |
| --- | --- |
| GET | https://developers.notion.com/reference/get-users |
| GET | https://developers.notion.com/reference/get-block-children |
| GET | https://developers.notion.com/reference/retrieve-a-comment |
| GET | https://developers.notion.com/reference/retrieve-a-page-property |
| POST | https://developers.notion.com/reference/post-database-query |
| POST | https://developers.notion.com/reference/post-search |

**RESPONSES**

| Field | Type | Description |
| --- | --- | --- |
| has_more | boolean | Whether the response includes the end of the list. false if there are no more results. Otherwise, true. |
| next_cursor | string | A string that can be used to retrieve the next page of results by passing the value as the start_cursor https://developers.notion.com/reference/intro#parameters-for-paginated-requests to the same endpoint.Only available when has_more is true. |
| object | "list" | The constant string "list". |
| results | array of objects | The list, or partial list, of endpoint-specific results. Refer to a https://developers.notion.com/reference/intro#supported-endpoints's individual documentation for details. |

## Request Limits

To ensure a consistent developer experience for all API users, the Notion API is rate limited and basic size limits apply to request parameters.

### Rate Limits

Rate-limited requests will return a `"rate_limited"` error code (HTTP response status 429). **The rate limit for incoming requests per integration is an average of three requests per second.** Some bursts beyond the average rate are allowed.

<aside>
❗ **Rate limits may change**

In the future, we plan to adjust rate limits to balance for demand and reliability. We may also introduce distinct rate limits for workspaces in different pricing plans.

</aside>

### **Size limits**

Notion limits the size of certain parameters, and the depth of children in requests. A requests that exceeds any of these limits will return `"validation_error"` error code (HTTP response status 400) and contain more specific details in the `"message"` property.

| Property value type | Inner property | Size limit |
| --- | --- | --- |
| https://developers.notion.com/reference/rich-text | text.content | 2000 characters |
| https://developers.notion.com/reference/rich-text | text.link.url | 2000 characters |
| https://developers.notion.com/reference/rich-text | equation.expression | 1000 characters |
| Any array of https://developers.notion.com/reference/rich-text |  | 100 elements |

## Status Codes

HTTP response codes are used to indicate general classes of success and error. 

### Success Code

| HTTP Status Quote | Description |
| --- | --- |
| 200 | Successfully processed request. |

### Error Codes

Error responses contain more detail about the error in the response body, in the `"code"` and `"message"`properties.

| HTTP Status Quote | code | message |
| --- | --- | --- |
| 400 | invalid_json | The request body could not be decoded as JSON |
|  | invalid_request_url | This request URL is not valid. |
|  | invalid_request | This request is not supported. |
| 401 | unauthorized | The bearer token is not valid. |

## **Versioning**

Our API versions are named for the date the version is released. For example, our latest version is 2022-06-28.

You set the version by including a `Notion-Version` header. Setting the `Notion-Version` header in **required**.

```jsx
curl https://api.notion.com/v1/users/01da9b00-e400-4959-91ce-af55307647e5 \
  -H "Authorization: Bearer secret_t1CdN9S8yicG5eWLUOfhcWaOscVnFXns"
  -H "Notion-Version: 2022-06-28"
```

# Objects

## Users

### **Where user objects appear in the API**

User objects appear in the API in nearly all objects returned by the API, including:

- [Block object](https://developers.notion.com/reference/block) under `created_by` and `last_edited_by`.
- [Page object](https://developers.notion.com/reference/page) under `created_by` and `last_edited_by` and in `people` property items.
- [Database object](https://developers.notion.com/reference/database) under `created_by` and `last_edited_by`.
- [Rich text object](https://developers.notion.com/reference/rich-text), as user mentions.
- [Property object](https://developers.notion.com/reference/property-object) when the property is a `people` property.

User objects will **always** contain `object` and `id` keys, as described below. The remaining properties may appear if the user is being rendered in a rich text or page property context, and the bot has the correct capabilities to access those properties. For more about capabilities, see the [Capabilities guide](https://developers.notion.com/reference/capabilities) and the [Authorization guide](https://developers.notion.com/docs/authorization).

### ****All users****

These fields are shared by all users, including people and bots. Fields marked with * are always present.

| Property | Updatable | Type | Description | Example value |
| --- | --- | --- | --- | --- |
| object* | Display-only | "user" | Always "user" | "user" |
| id* | Display-only | string(UUID) | Unique identifier for this user. | "e79a0b74-3aba-4149-9f74-0bb5791a6ee6" |
| type | Display-only | string(optional, enum) | Type of the user. Possible values are "person" and "bot". | "person" |
| name | Display-only | string(optional) | User's name, as displayed in Notion. | "Avocado Lovelace" |
| avatar_url | Display-only | string(optional) | Chosen avatar image. | "https://secure.notion-static.com/e6a352a8-8381-44d0-a1dc-9ed80e62b53d.jpg" |

## **File**

File objects contain data about a file that is uploaded to Notion, or data about an external file that is linked to in Notion.

```jsx
{
  "type": "file",
  "file": {
    "url": "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7b8b0713-dbd4-4962-b38b-955b6c49a573/My_test_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221024T205211Z&X-Amz-Expires=3600&X-Amz-Signature=208aa971577ff05e75e68354e8a9488697288ff3fb3879c2d599433a7625bf90&X-Amz-SignedHeaders=host&x-id=GetObject",
    "expiry_time": "2022-10-24T22:49:22.765Z"
  }
}
```

Page, embed, image, video, file, pdf, and bookmark [block types](https://developers.notion.com/reference/block) all contain file objects. Icon and cover [page object values](https://developers.notion.com/reference/page#all-pages) also contain file objects.

Each file object includes the following fields:

| Field | Type | Description | Example value |
| --- | --- | --- | --- |
| type | string (enum) | The type of the file object. Possible type values are: "external", "file". | "external" |
| external| file | object | An object containing type-specific configuration. The key of the object is external for external files, and file for Notion-hosted files.Refer to the type sections below for details on type-specific values. | Refer to to the type-specific sections below for examples. |

# Endpoints

[Endpoints](https://www.notion.so/60a70b750b3a457a83876dc54112fe8d?pvs=21)