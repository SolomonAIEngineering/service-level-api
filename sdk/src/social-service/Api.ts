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

import { EditUserProfileData, HealthCheckData, ReadynessCheckData, Status, UserProfile } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description This endpoint performs an updates operation on a user profile based on the provided parametersThis update operation can span multiple services on specific cases (such as when the client is explicitly attempting to update the email of the user)All update operations are atomic by nature hence we should not expect any form of divergent state
   *
   * @tags user profile
   * @name EditUserProfile
   * @summary update a user profile
   * @request PUT:/api/v1/user/{userId}
   * @response `200` `EditUserProfileData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  editUserProfile = (userId: string, profile: UserProfile, params: RequestParams = {}) =>
    this.request<EditUserProfileData, Status>({
      path: `/api/v1/user/${userId}`,
      method: "PUT",
      body: profile,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint performs a healc check on the service
   *
   * @tags service health
   * @name HealthCheck
   * @summary health check
   * @request GET:/api/v1/health
   * @response `200` `HealthCheckData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  healthCheck = (params: RequestParams = {}) =>
    this.request<HealthCheckData, Status>({
      path: `/api/v1/health`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint performs a readiness check on the service
   *
   * @tags service readyness
   * @name ReadynessCheck
   * @summary readyness check
   * @request GET:/api/v1/ready
   * @response `200` `ReadynessCheckData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  readynessCheck = (params: RequestParams = {}) =>
    this.request<ReadynessCheckData, Status>({
      path: `/api/v1/ready`,
      method: "GET",
      ...params,
    });
}
