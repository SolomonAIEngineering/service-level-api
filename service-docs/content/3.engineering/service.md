# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [api/v1/headless_auth_service.proto](#api_v1_headless_auth_service-proto)
    - [Account](#api-v1-Account)
    - [ChangePasswordRequest](#api-v1-ChangePasswordRequest)
    - [CreateUserAccountRequest](#api-v1-CreateUserAccountRequest)
    - [CreateUserAccountResponse](#api-v1-CreateUserAccountResponse)
    - [DeleteUserAccountRequest](#api-v1-DeleteUserAccountRequest)
    - [DeleteUserAccountResponse](#api-v1-DeleteUserAccountResponse)
    - [EmptyResponse](#api-v1-EmptyResponse)
    - [GetUserAccountRequest](#api-v1-GetUserAccountRequest)
    - [GetUserAccountResponse](#api-v1-GetUserAccountResponse)
    - [LockUserAccountRequest](#api-v1-LockUserAccountRequest)
    - [LockUserAccountResponse](#api-v1-LockUserAccountResponse)
    - [LoginUserRequest](#api-v1-LoginUserRequest)
    - [LoginUserResponse](#api-v1-LoginUserResponse)
    - [LogoutUserRequest](#api-v1-LogoutUserRequest)
    - [LogoutUserResponse](#api-v1-LogoutUserResponse)
    - [RequestPasswordChangeRequest](#api-v1-RequestPasswordChangeRequest)
    - [ResetPasswordRequest](#api-v1-ResetPasswordRequest)
    - [ResetUrlRequest](#api-v1-ResetUrlRequest)
    - [ServiceHealthRequest](#api-v1-ServiceHealthRequest)
    - [ServiceHealthResponse](#api-v1-ServiceHealthResponse)
    - [TokenResponse](#api-v1-TokenResponse)
    - [UnlockUserAccountRequest](#api-v1-UnlockUserAccountRequest)
    - [UnlockUserAccountResponse](#api-v1-UnlockUserAccountResponse)
    - [UpdateUserAccountEmailRequest](#api-v1-UpdateUserAccountEmailRequest)
    - [UpdateUserAccountEmailResponse](#api-v1-UpdateUserAccountEmailResponse)
  
    - [authsvc](#api-v1-authsvc)
  
- [Scalar Value Types](#scalar-value-types)



<a name="api_v1_headless_auth_service-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## api/v1/headless_auth_service.proto



<a name="api-v1-Account"></a>

### Account
Account is an AuthN user account


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint32](#uint32) |  |  |
| username | [string](#string) |  |  |
| locked | [bool](#bool) |  |  |
| deleted | [bool](#bool) |  |  |






<a name="api-v1-ChangePasswordRequest"></a>

### ChangePasswordRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| newPassword | [string](#string) |  |  |
| currentPassword | [string](#string) |  |  |






<a name="api-v1-CreateUserAccountRequest"></a>

### CreateUserAccountRequest
CreateUserAccountRequest: Represents the request object invoked against the
user service to create a user account


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email | [string](#string) |  |  |
| password | [string](#string) |  |  |






<a name="api-v1-CreateUserAccountResponse"></a>

### CreateUserAccountResponse
CreateUserAccountResponse: Represents the response object returned as a
product of the create user account endpoint being hit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint32](#uint32) |  |  |
| code | [uint32](#uint32) |  |  |
| err | [string](#string) |  |  |






<a name="api-v1-DeleteUserAccountRequest"></a>

### DeleteUserAccountRequest
DeleteUserAccountRequest: Represents the request object invoked against the
user service to delete a user account


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint32](#uint32) |  |  |






<a name="api-v1-DeleteUserAccountResponse"></a>

### DeleteUserAccountResponse
DeleteUserAccountResponse: Represents the response object returned as a
product of the delete user account email endpoint being hit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [uint32](#uint32) |  |  |
| err | [string](#string) |  |  |






<a name="api-v1-EmptyResponse"></a>

### EmptyResponse







<a name="api-v1-GetUserAccountRequest"></a>

### GetUserAccountRequest
GetUserAccountRequest: Represents the request object invoked against the user
service to get a user account


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint32](#uint32) |  |  |






<a name="api-v1-GetUserAccountResponse"></a>

### GetUserAccountResponse
GetUserAccountResponse: Represents the response object returned as a product
of the get user account endpoint being hit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account | [Account](#api-v1-Account) |  |  |
| code | [uint32](#uint32) |  |  |
| err | [string](#string) |  |  |






<a name="api-v1-LockUserAccountRequest"></a>

### LockUserAccountRequest
LockUserAccountRequest: Represents the request object invoked against the
user service to lock a user account


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint32](#uint32) |  |  |






<a name="api-v1-LockUserAccountResponse"></a>

### LockUserAccountResponse
LockUserAccountResponse: Represents the response object returned as a product
of the lock user account endpoint being hit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [uint32](#uint32) |  |  |
| err | [string](#string) |  |  |






<a name="api-v1-LoginUserRequest"></a>

### LoginUserRequest
LoginUserRequest: Represents the request object invoked against the user
service to log in a user account


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email | [string](#string) |  |  |
| password | [string](#string) |  |  |






<a name="api-v1-LoginUserResponse"></a>

### LoginUserResponse
LoginUserResponse: Represents the response object returned as a product
of the log in endpoint being hit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token | [string](#string) |  |  |
| code | [uint32](#uint32) |  |  |
| err | [string](#string) |  |  |






<a name="api-v1-LogoutUserRequest"></a>

### LogoutUserRequest
LogoutUserRequest: Represents the request object invoked against the user
service to log out a user account


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint32](#uint32) |  |  |






<a name="api-v1-LogoutUserResponse"></a>

### LogoutUserResponse
LogoutUserResponse: Represents the response object returned as a product
of the log out endpoint being hit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [uint32](#uint32) |  |  |
| err | [string](#string) |  |  |






<a name="api-v1-RequestPasswordChangeRequest"></a>

### RequestPasswordChangeRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email | [string](#string) |  |  |






<a name="api-v1-ResetPasswordRequest"></a>

### ResetPasswordRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| password | [string](#string) |  |  |
| token | [string](#string) |  |  |






<a name="api-v1-ResetUrlRequest"></a>

### ResetUrlRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_id | [string](#string) |  |  |
| token | [string](#string) |  |  |






<a name="api-v1-ServiceHealthRequest"></a>

### ServiceHealthRequest
ServiceHealthRequest: Represents a request object to obtain the service&#39;s
health






<a name="api-v1-ServiceHealthResponse"></a>

### ServiceHealthResponse
ServiceHealthResponse: Represents the response object returned as a product
of the the service health rpc call


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [string](#string) |  |  |






<a name="api-v1-TokenResponse"></a>

### TokenResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token | [string](#string) |  |  |
| code | [uint32](#uint32) |  |  |
| err | [string](#string) |  |  |






<a name="api-v1-UnlockUserAccountRequest"></a>

### UnlockUserAccountRequest
UnlockUserAccountRequest: Represents the request object invoked against the
user service to unlock a user account


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint32](#uint32) |  |  |






<a name="api-v1-UnlockUserAccountResponse"></a>

### UnlockUserAccountResponse
UnlockUserAccountResponse: Represents the response object returned as a
product of the unlock user account endpoint being hit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [uint32](#uint32) |  |  |
| err | [string](#string) |  |  |






<a name="api-v1-UpdateUserAccountEmailRequest"></a>

### UpdateUserAccountEmailRequest
UpdateUserAccountEmailRequest: Represents the request object invoked against
the user service to update a user account&#39;s email parameter


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [uint32](#uint32) |  |  |
| email | [string](#string) |  |  |






<a name="api-v1-UpdateUserAccountEmailResponse"></a>

### UpdateUserAccountEmailResponse
UpdateUserAccountEmailResponse: Represents the response object returned as a
product of the update user account email endpoint being hit


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [uint32](#uint32) |  |  |
| err | [string](#string) |  |  |





 

 

 


<a name="api-v1-authsvc"></a>

### authsvc
authsvc: Represents the Headless Authentication service of the simifinii
platform.

The authsvc service serves as the sole store of all user specific credentials

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| LoginUserAccount | [LoginUserRequest](#api-v1-LoginUserRequest) | [LoginUserResponse](#api-v1-LoginUserResponse) | LoginUserAccount: authenticates a user account based on provided credentials against the authentication service. |
| LogoutUserAccount | [LogoutUserRequest](#api-v1-LogoutUserRequest) | [LogoutUserResponse](#api-v1-LogoutUserResponse) | LogoutUserAccount: logs user account out of the system from the context of the authentication service |
| CreateUserAccount | [CreateUserAccountRequest](#api-v1-CreateUserAccountRequest) | [CreateUserAccountResponse](#api-v1-CreateUserAccountResponse) | CreateUserAccount: creates a new user account in the authentication service |
| UpdateUserAccountEmail | [UpdateUserAccountEmailRequest](#api-v1-UpdateUserAccountEmailRequest) | [UpdateUserAccountEmailResponse](#api-v1-UpdateUserAccountEmailResponse) | UpdateUserAccountEmail: Updates the email field of the user account from the context of the authentication service |
| DeleteUserAccount | [DeleteUserAccountRequest](#api-v1-DeleteUserAccountRequest) | [DeleteUserAccountResponse](#api-v1-DeleteUserAccountResponse) | DeleteUserAccount: Deletes user account in the authentication service |
| UnlockUserAccount | [UnlockUserAccountRequest](#api-v1-UnlockUserAccountRequest) | [UnlockUserAccountResponse](#api-v1-UnlockUserAccountResponse) | UnLockUserAccount: Unlocks a user account from the context of the authentication service |
| LockUserAccount | [LockUserAccountRequest](#api-v1-LockUserAccountRequest) | [LockUserAccountResponse](#api-v1-LockUserAccountResponse) | LockUserAccount: Locks a user account from the context of the authentication service |
| GetUserAccount | [GetUserAccountRequest](#api-v1-GetUserAccountRequest) | [GetUserAccountResponse](#api-v1-GetUserAccountResponse) | GetUserAccount: Gets a user account in the authentication service |
| Health | [ServiceHealthRequest](#api-v1-ServiceHealthRequest) | [ServiceHealthResponse](#api-v1-ServiceHealthResponse) | Health: Attempts to obtain service health |
| Ready | [ServiceHealthRequest](#api-v1-ServiceHealthRequest) | [ServiceHealthResponse](#api-v1-ServiceHealthResponse) | Health: Attempts to obtain service readiness status |
| RequestPasswordChange | [RequestPasswordChangeRequest](#api-v1-RequestPasswordChangeRequest) | [EmptyResponse](#api-v1-EmptyResponse) |  |
| ResetPassword | [ResetPasswordRequest](#api-v1-ResetPasswordRequest) | [TokenResponse](#api-v1-TokenResponse) |  |
| ChangePassword | [ChangePasswordRequest](#api-v1-ChangePasswordRequest) | [TokenResponse](#api-v1-TokenResponse) |  |
| ResetUrl | [ResetUrlRequest](#api-v1-ResetUrlRequest) | [EmptyResponse](#api-v1-EmptyResponse) |  |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

