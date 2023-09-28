/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  CheckEmailExistsData,
  CheckUsernameExistsData,
  CreateUserData,
  CreateUserRequest,
  DeleteUserData,
  GetUserByEmailData,
  GetUserByEmailOrUsernameData,
  GetUserByUsernameData,
  GetUserData,
  GetUserIdData,
  HealthCheckData,
  PasswordResetData,
  ReadynessCheckData,
  Status,
  UpdateUserData,
  UpdateUserRequest,
  VerificationData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Checks if an email exists or not
   *
   * @tags user account
   * @name CheckEmailExists
   * @summary Checks that an email exists or not
   * @request GET:/api/v1/user/email/{email}/exists
   * @response `200` `CheckEmailExistsData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  checkEmailExists = (email: string, params: RequestParams = {}) =>
    this.request<CheckEmailExistsData, Status>({
      path: `/api/v1/user/email/${email}/exists`,
      method: "GET",
      ...params,
    });
  /**
   * @description Checks if a username exists or not
   *
   * @tags user account
   * @name CheckUsernameExists
   * @summary Checks that a username exists or not
   * @request GET:/api/v1/user/username/{username}/exists
   * @response `200` `CheckUsernameExistsData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  checkUsernameExists = (username: string, params: RequestParams = {}) =>
    this.request<CheckUsernameExistsData, Status>({
      path: `/api/v1/user/username/${username}/exists`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint performs an a creation operation of a user account based on the provided parametersThis operation is implemented as a distributed transactions as this operation spans multiple services
   *
   * @tags user account
   * @name CreateUser
   * @summary create a user account
   * @request POST:/api/v1/user
   * @response `200` `CreateUserData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createUser = (body: CreateUserRequest, params: RequestParams = {}) =>
    this.request<CreateUserData, Status>({
      path: `/api/v1/user`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint performs a delete operation on a user account based on the provided parametersThis deletion operation spans multiple services as user details are stored across a suite of our backend servicesThe operation itself is an atomic one of nature. Either all services successfully delete the recod or we fail the requestDivergent state is not expected to be encountered with this endpoint.
   *
   * @tags user account
   * @name DeleteUser
   * @summary deletes a user account
   * @request DELETE:/api/v1/user/{userId}
   * @response `200` `DeleteUserData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteUser = (userId: string, params: RequestParams = {}) =>
    this.request<DeleteUserData, Status>({
      path: `/api/v1/user/${userId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Queries and obtains a user account based on the provided parameters
   *
   * @tags user account
   * @name GetUser
   * @summary Gets a user account
   * @request GET:/api/v1/user/{userId}
   * @response `200` `GetUserData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUser = (userId: string, params: RequestParams = {}) =>
    this.request<GetUserData, Status>({
      path: `/api/v1/user/${userId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description Queries and obtains a user account based on the email
   *
   * @tags user account
   * @name GetUserByEmail
   * @summary Gets a user account by email
   * @request GET:/api/v1/user/email/{email}
   * @response `200` `GetUserByEmailData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUserByEmail = (email: string, params: RequestParams = {}) =>
    this.request<GetUserByEmailData, Status>({
      path: `/api/v1/user/email/${email}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint returns a user account by either provided email or username
   *
   * @tags user account
   * @name GetUserByEmailOrUsername
   * @summary gets a user account by either email or username
   * @request GET:/api/v1/user/account
   * @response `200` `GetUserByEmailOrUsernameData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUserByEmailOrUsername = (
    query?: {
      /** The email of the user of interest */
      email?: string;
      /** The username of the user of interest */
      username?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetUserByEmailOrUsernameData, Status>({
      path: `/api/v1/user/account`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description Queries and obtains a user account based on the username
   *
   * @tags user account
   * @name GetUserByUsername
   * @summary Gets a user account by user name
   * @request GET:/api/v1/user/username/{username}
   * @response `200` `GetUserByUsernameData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUserByUsername = (username: string, params: RequestParams = {}) =>
    this.request<GetUserByUsernameData, Status>({
      path: `/api/v1/user/username/${username}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint returns the user record id if the user record exists example: /api/v1/user?email=testuser@gmail.com&&username=testuser
   *
   * @tags user account
   * @name GetUserId
   * @summary get a user account id
   * @request GET:/api/v1/user
   * @response `200` `GetUserIdData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUserId = (
    query?: {
      /** The email of the user of interest */
      email?: string;
      /** The username of the user of interest */
      username?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetUserIdData, Status>({
      path: `/api/v1/user`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint performs a healc check on the service
   *
   * @tags service health
   * @name HealthCheck
   * @summary health check
   * @request GET:/api/v1/user/health
   * @response `200` `HealthCheckData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  healthCheck = (params: RequestParams = {}) =>
    this.request<HealthCheckData, Status>({
      path: `/api/v1/user/health`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint performs password reset for a given user account
   *
   * @tags password reset
   * @name PasswordReset
   * @summary password reset
   * @request POST:/api/v1/user/webhook/password-reset
   * @response `200` `PasswordResetData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  passwordReset = (
    query?: {
      /** @format uint64 */
      accountId?: string;
      token?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<PasswordResetData, Status>({
      path: `/api/v1/user/webhook/password-reset`,
      method: "POST",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint performs a readiness check on the service
   *
   * @tags service readyness
   * @name ReadynessCheck
   * @summary readyness check
   * @request GET:/api/v1/user/ready
   * @response `200` `ReadynessCheckData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  readynessCheck = (params: RequestParams = {}) =>
    this.request<ReadynessCheckData, Status>({
      path: `/api/v1/user/ready`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint performs an updates operation on a user account based on the provided parametersThis update operation can span multiple services on specific cases (such as when the client is explicitly attempting to update the email of the user)All update operations are atomic by nature hence we should not expect any form of divergent state
   *
   * @tags user account
   * @name UpdateUser
   * @summary update a user account
   * @request PUT:/api/v1/user
   * @response `200` `UpdateUserData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  updateUser = (body: UpdateUserRequest, params: RequestParams = {}) =>
    this.request<UpdateUserData, Status>({
      path: `/api/v1/user`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint performs verification of a user account email
   *
   * @tags user account
   * @name Verification
   * @summary user verification
   * @request POST:/api/v1/user/verification/{userId}
   * @response `200` `VerificationData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  verification = (userId: string, params: RequestParams = {}) =>
    this.request<VerificationData, Status>({
      path: `/api/v1/user/verification/${userId}`,
      method: "POST",
      ...params,
    });
}
