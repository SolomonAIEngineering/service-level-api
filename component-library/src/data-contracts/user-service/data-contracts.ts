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

/** Address: represents an account's address */
export interface Address {
  /**
   * the address field
   * Validations:
   * - must be at least 5 character long (meaning cannot be empty)
   * @example "1234 5th Ave"
   */
  address?: string;
  /**
   * the city
   * Validations:
   * - must be at least 3 characters long (meaning cannot be empty)
   * @example "New York"
   */
  city?: string;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  /**
   * latittude
   * Validations: None - can be empty
   * @example "40.123456"
   */
  lattitude?: string;
  /**
   * longitude
   * Validations: None - can be empty
   * @example "-73.987654"
   */
  longitude?: string;
  /**
   * the state/municipality
   * Validations
   * - must be at least 2 characters long
   * @example "New York"
   */
  state?: string;
  /**
   * the unit if the address is an apartment
   * Validations:
   * - must be at least 1 character long (meaning cannot be empty)
   * @example "Apt 1"
   */
  unit?: string;
  /**
   * the address zipcode
   * Validations:
   * - must be exactly 5 characters this is to ensure the client inputs the proper zip code
   * @example "12345"
   */
  zipcode?: string;
}

export interface Any {
  "@type"?: string;
  [key: string]: any;
}

/**
 * Display and interaction preferences.
 * @default "APPLICATION_THEME_UNSPECIFIED"
 */
export type ApplicationTheme = "APPLICATION_THEME_UNSPECIFIED" | "APPLICATION_THEME_LIGHT" | "APPLICATION_THEME_DARK";

/**
 * AuditAction defines the types of actions that can be audited.
 * @default "AUDIT_ACTION_UNSPECIFIED"
 */
export type AuditAction =
  | "AUDIT_ACTION_UNSPECIFIED"
  | "AUDIT_ACTION_CREATED"
  | "AUDIT_ACTION_UPDATED"
  | "AUDIT_ACTION_DELETED";

/** BusinessAccount represents a business account within the context of solomon-ai. */
export interface BusinessAccount {
  /** auth0 user id associated with the business account */
  auth0UserId?: string;
  /** The type of profile associated with the business account (e.g., individual, corporate). */
  accountType?: ProfileType;
  /** Physical address associated with the business account. */
  address?: Address;
  /** Algolia user id */
  algoliaUserId?: string;
  /**
   * Identifier for the associated authentication service account.
   * @format uint64
   */
  authnAccountId?: string;
  /**
   * Short description of the business account. Maximum of 200 characters.
   * @example "sample description"
   */
  bio?: string;
  /**
   * Description of the company associated with the business account.
   * @example "We help businesses succeed"
   */
  companyDescription?: string;
  /** Date when the company associated with the business account was established. */
  companyEstablishedDate?: string;
  /**
   * Industry type of the company associated with the business account.
   * @example "fintech"
   */
  companyIndustryType?: string;
  /**
   * Name of the company associated with the business account.
   * @example "Solomon AI"
   */
  companyName?: string;
  /** Website URL of the company associated with the business account. */
  companyWebsiteUrl?: string;
  /**
   * Timestamp indicating when the business account was created.
   * @format date-time
   */
  createdAt?: string;
  /**
   * Email associated with the business account.
   * @example "example@gmail.com"
   */
  email?: string;
  /**
   * Headline for the profile of the business account.
   * @example "sample headline"
   */
  headline?: string;
  /**
   * Unique identifier for the business account.
   * @format uint64
   */
  id?: string;
  /**
   * Indicates whether the business account is active.
   * @example true
   */
  isActive?: boolean;
  /**
   * Indicates whether the email associated with the business account has been verified.
   * @example false
   */
  isEmailVerified?: boolean;
  /**
   * Indicates whether the business account is private.
   * @example false
   */
  isPrivate?: boolean;
  /**
   * Phone number associated with the business account.
   * @example "6513424124"
   */
  phoneNumber?: string;
  /** Profile image associated with the user account. */
  profileImageUrl?: string;
  /** Role defines the role of a user in the system with specific permissions. */
  role?: Role;
  /** Settings specific to the business account. */
  settings?: Settings;
  /** Tags associated with the business account. Between 1 and 10 tags are allowed. */
  tags?: Array<Tags>;
  /**
   * Username for the business account. Must be at least 10 characters long.
   * @example "testuser9696"
   */
  username?: string;
  /**
   * Timestamp indicating when the email for the business account was verified.
   * @format date-time
   */
  verifiedAt?: string;
}

export type CheckEmailExistsData = any;

export interface CheckEmailExistsResponse {
  exists?: boolean;
}

export type CheckEmailExistsV2Data = any;

export interface CheckEmailExistsV2Response {
  exists?: boolean;
}

export type CheckUsernameExistsData = any;

export interface CheckUsernameExistsResponse {
  exists?: boolean;
}

export type CheckUsernameExistsV2Data = any;

export interface CheckUsernameExistsV2Response {
  exists?: boolean;
}

export type CreateRoleData = CreateRoleResponse;

export interface CreateRoleResponse {
  /** Role defines the role of a user in the system with specific permissions. */
  role?: Role;
}

export type CreateUserV2Data = any;

/**
 * CreateUserV2Request: Represents the request object invoked against the user
 * service to create a user account
 */
export interface CreateUserV2Request {
  /**
   * The auth0 user id of the user
   * @example "lksdjhfgsdhfghdsgfhgdh.com"
   */
  auth0UserId: string;
  /** BusinessAccount represents a business account within the context of solomon-ai. */
  businessAccount?: BusinessAccount;
  /**
   * set of community IDs to follow
   * Validations:
   * - at least 0 and at most 20 community ids supported at one time
   */
  communityIdsToFollow?: Array<string>;
  /**
   * The profile image of the user
   * Validations:
   * - must be a valid URI
   * @example "lksdjhfgsdhfghdsgfhgdh.com"
   */
  profileImageUrl: string;
  /** @brief Represents a user account in the context of simfinni. */
  userAccount?: UserAccount;
}

/**
 * CreateUserResponse: Represents the response object returned as a response to
 * the `create-user` request
 */
export interface CreateUserV2Response {
  /** @format uint64 */
  userId?: string;
}

export type DeleteRoleData = DeleteRoleResponse;

export interface DeleteRoleResponse {
  success?: boolean;
}

export type DeleteUserData = any;

/**
 * DeleteUserResponse: Represents the object returned as a response to
 * `delete-user` request
 */
export interface DeleteUserResponse {
  accountDeleted?: boolean;
}

export type DeleteUserV2Data = any;

/**
 * DeleteUserResponse: Represents the object returned as a response to
 * `delete-user` request
 */
export interface DeleteUserV2Response {
  accountDeleted?: boolean;
}

/** DigitalWorkerToolChainConfiguration defines the overall settings for a digital worker. */
export interface DigitalWorkerSettings {
  enableLogging?: boolean;
  /**
   * Unique identifier for the toolchain configuration.
   * @format uint64
   */
  id?: string;
  workerName?: string;
  workerVersion?: string;
}

export interface FinancialPreferences {
  currencyPreference?: string;
  financialYearStart?: string;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  taxCode?: string;
  /** @format double */
  taxPercentage?: number;
}

export interface GetBusinessSettingsResponse {
  /** User settings for the fintech application. */
  settings?: Settings;
}

export interface GetCannyUserSSOTokenResponse {
  token?: string;
}

export type GetCannyUserSsoTokenData = any;

export type GetRoleData = Role;

export interface GetRoleResponse {
  /** Role defines the role of a user in the system with specific permissions. */
  role?: Role;
}

export interface GetUserByAuth0IDResponse {
  /** BusinessAccount represents a business account within the context of solomon-ai. */
  businessAccount?: BusinessAccount;
  /** @brief Represents a user account in the context of simfinni. */
  userAccount?: UserAccount;
}

export type GetUserByAuth0IdData = any;

/** Represents the response object for fetching user details by authn id. */
export interface GetUserByAuthnIDV2Response {
  /** BusinessAccount represents a business account within the context of solomon-ai. */
  businessAccount?: BusinessAccount;
  /** @brief Represents a user account in the context of simfinni. */
  userAccount?: UserAccount;
}

export type GetUserByAuthnIdv2Data = any;

export type GetUserByEmailData = any;

export type GetUserByEmailOrUsernameData = any;

export interface GetUserByEmailOrUsernameResponse {
  /**
   * The account ID associated with the user
   * @brief Represents a user account in the context of simfinni.
   */
  account?: UserAccount;
}

export type GetUserByEmailOrUsernameV2Data = any;

export interface GetUserByEmailOrUsernameV2Response {
  /** BusinessAccount represents a business account within the context of solomon-ai. */
  businessAccount?: BusinessAccount;
  ssoToken?: string;
  /** @brief Represents a user account in the context of simfinni. */
  userAccount?: UserAccount;
}

export interface GetUserByEmailResponse {
  /**
   * The account ID associated with the user
   * @brief Represents a user account in the context of simfinni.
   */
  account?: UserAccount;
}

export type GetUserByEmailV2Data = any;

export interface GetUserByEmailV2Response {
  /** BusinessAccount represents a business account within the context of solomon-ai. */
  businessAccount?: BusinessAccount;
  /** @brief Represents a user account in the context of simfinni. */
  userAccount?: UserAccount;
}

export type GetUserByUsernameData = any;

export interface GetUserByUsernameResponse {
  /**
   * The account ID associated with the user
   * @brief Represents a user account in the context of simfinni.
   */
  account?: UserAccount;
}

export type GetUserByUsernameV2Data = any;

export interface GetUserByUsernameV2Response {
  /** BusinessAccount represents a business account within the context of solomon-ai. */
  businessAccount?: BusinessAccount;
  ssoToken?: string;
  /** @brief Represents a user account in the context of simfinni. */
  userAccount?: UserAccount;
}

export type GetUserData = any;

export type GetUserIdData = any;

/**
 * GetUserIdResponse: Represents the response object returned as a product of
 * calling the `get-user-id` request
 */
export interface GetUserIdResponse {
  /**
   * The account ID associated with the user
   * @format uint64
   */
  userId?: string;
}

export type GetUserIdV2Data = any;

/**
 * GetUserIdResponse: Represents the response object returned as a product of
 * calling the `get-user-id` request
 */
export interface GetUserIdV2Response {
  /**
   * The account ID associated with the user
   * @format uint64
   */
  userId?: string;
}

/**
 * GetUserResponse: Represents the object returned as a response to `get-user`
 * request
 */
export interface GetUserResponse {
  /** @brief Represents a user account in the context of simfinni. */
  account?: UserAccount;
}

export type GetUserV2Data = any;

/** Represents the response object for fetching user details. */
export interface GetUserV2Response {
  /** BusinessAccount represents a business account within the context of solomon-ai. */
  businessAccount?: BusinessAccount;
  /** @brief Represents a user account in the context of simfinni. */
  userAccount?: UserAccount;
}

export type HealthCheckData = any;

export interface HealthCheckResponse {
  healthy?: boolean;
}

/** @default "LIKED_DASHBOARD_PANELS_TRANSACTIONS_UNSPECIFIED" */
export type LikedDashboardPanels =
  | "LIKED_DASHBOARD_PANELS_TRANSACTIONS_UNSPECIFIED"
  | "LIKED_DASHBOARD_PANELS_TRANSACTIONS_OVERVIEW"
  | "LIKED_DASHBOARD_PANELS_INVESTMENT_SUMMARY"
  | "LIKED_DASHBOARD_PANELS_MONTHLY_SPENDING_REPORT"
  | "LIKED_DASHBOARD_PANELS_SAVINGS_TRACKER"
  | "LIKED_DASHBOARD_PANELS_CREDIT_SCORE_MONITOR";

export type ListRolesData = ListRolesResponse;

export interface ListRolesResponse {
  roles?: Array<Role>;
  /** @format int32 */
  totalCount?: number;
}

export interface NotificationSettings {
  /** True if user wants to be alerted for anomalies */
  alerts?: boolean;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  notificationType?: NotificationType;
}

/**
 * - NOTIFICATION_TYPE_EMAIL: email based notification
 *  - NOTIFICATION_TYPE_SMS: sms based notification
 *  - NOTIFICATION_TYPE_IN_APP: app based notification
 *  - NOTIFICATION_TYPE_SLACK: slack based notification
 * @default "NOTIFICATION_TYPE_UNSPECIFIED"
 */
export type NotificationType =
  | "NOTIFICATION_TYPE_UNSPECIFIED"
  | "NOTIFICATION_TYPE_EMAIL"
  | "NOTIFICATION_TYPE_SMS"
  | "NOTIFICATION_TYPE_IN_APP"
  | "NOTIFICATION_TYPE_SLACK";

export type PasswordResetData = any;

export interface PasswordResetWebhookResponse {
  success?: boolean;
}

export type PasswordResetWebhookV2Data = any;

export interface PasswordResetWebhookV2Response {
  success?: boolean;
}

/**
 * ProfileType: represents the type of account tied to a given profile
 * @default "PROFILE_TYPE_UNSPECIFIED"
 */
export type ProfileType = "PROFILE_TYPE_UNSPECIFIED" | "PROFILE_TYPE_USER" | "PROFILE_TYPE_BUSINESS";

export type ReadynessCheckData = any;

export interface ReadynessCheckResponse {
  healthy?: boolean;
}

export type RetrieveBusinessSettingsData = any;

/**
 * Risk Tolerance Investment preferences.
 * @default "RISK_TOLERANCE_SETTINGS_UNSPECIFIED"
 */
export type RiskToleranceSettings =
  | "RISK_TOLERANCE_SETTINGS_UNSPECIFIED"
  | "RISK_TOLERANCE_SETTINGS_LOW"
  | "RISK_TOLERANCE_SETTINGS_MEDIUM"
  | "RISK_TOLERANCE_SETTINGS_HIGH";

/** Role defines the role of a user in the system with specific permissions. */
export interface Role {
  /** Audit log for this role. */
  auditLog?: Array<RoleAuditEvents>;
  /** Permissions related to project management. */
  canCreateProjects?: boolean;
  /** Permissions related to report management. */
  canCreateReports?: boolean;
  /** Permissions related to user management. */
  canCreateUsers?: boolean;
  canDeleteProjects?: boolean;
  canDeleteReports?: boolean;
  canDeleteUsers?: boolean;
  canReadProjects?: boolean;
  canReadReports?: boolean;
  canReadUsers?: boolean;
  canUpdateProjects?: boolean;
  canUpdateReports?: boolean;
  canUpdateUsers?: boolean;
  /**
   * Add more permissions as necessary for other modules or features.
   * Timestamps for tracking creation and modification times.
   * @format date-time
   */
  createdAt?: string;
  /**
   * Unique identifier for the role.
   * @format int64
   */
  id?: string;
  /** Name of the role. */
  name?: string;
  /** Type of the role. */
  type?: RoleType;
  /** @format date-time */
  updatedAt?: string;
}

/** RoleAuditEvents defines the audit record for any changes made to a role. */
export interface RoleAuditEvents {
  /**
   * The type of action (created, updated, deleted)
   * AuditAction defines the types of actions that can be audited.
   */
  action?: AuditAction;
  /**
   * Additional fields for enhanced auditing:
   * Specific fields that were changed (if applicable)
   */
  affectedFields?: Array<string>;
  /** IP address of the client that initiated the change */
  clientIp?: string;
  /** Additional context about the change (e.g., reason for change) */
  context?: string;
  /** @format int64 */
  id?: string;
  /** Identifier of the user who performed the action */
  performedBy?: string;
  /** Values of those fields before the change */
  previousValues?: Array<string>;
  /**
   * Time of the event
   * @format date-time
   */
  timestamp?: string;
  /** User agent string of the client */
  userAgent?: string;
}

/**
 * RoleType defines the different types of roles.
 * @default "ROLE_TYPE_UNSPECIFIED"
 */
export type RoleType = "ROLE_TYPE_UNSPECIFIED" | "ROLE_TYPE_SUPER_ADMIN" | "ROLE_TYPE_TEAM_ADMIN" | "ROLE_TYPE_REGULAR";

/** User settings for the fintech application. */
export interface Settings {
  /** Display and interaction preferences. */
  appTheme?: ApplicationTheme;
  /** Settings specific to the user's digital worker. */
  digitalWorkerSettings?: DigitalWorkerSettings;
  financialPreferences?: FinancialPreferences;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  /** Dashboard customization, e.g., specific widgets or reports. */
  likedDashboardPanels?: Array<LikedDashboardPanels>;
  /** Notification preferences. */
  notificationSettings?: NotificationSettings;
  /** Language preference. */
  preferredLanguage?: string;
  /** Risk tolerance settings defined for user settings. */
  riskTolerance?: RiskToleranceSettings;
}

export interface Status {
  /** @format int32 */
  code?: number;
  details?: Array<Any>;
  message?: string;
}

/** Tags: represents metadata tags associated to an account */
export interface Tags {
  /**
   * tag id
   * @format uint64
   */
  id?: string;
  /**
   * metadata associated with tag
   * validations:
   * - must provide between 1 and 10 metadata tags
   * @example ["testmetadata1","testmetadata2"]
   */
  metadata?: Array<string>;
  /**
   * description of tag
   * validations:
   * - cannot be empty
   * - must be at least 10 characters long
   * @example "testtagdescription"
   */
  tagDescription?: string;
  /**
   * name of tag
   * validations:
   * - cannot be empty
   * - must be at least 3 characters long
   * @example "testtagname"
   */
  tagName?: string;
}

export type UpdateRoleData = UpdateRoleResponse;

/** Role defines the role of a user in the system with specific permissions. */
export interface UpdateRolePayload {
  /** Audit log for this role. */
  auditLog?: Array<RoleAuditEvents>;
  /** Permissions related to project management. */
  canCreateProjects?: boolean;
  /** Permissions related to report management. */
  canCreateReports?: boolean;
  /** Permissions related to user management. */
  canCreateUsers?: boolean;
  canDeleteProjects?: boolean;
  canDeleteReports?: boolean;
  canDeleteUsers?: boolean;
  canReadProjects?: boolean;
  canReadReports?: boolean;
  canReadUsers?: boolean;
  canUpdateProjects?: boolean;
  canUpdateReports?: boolean;
  canUpdateUsers?: boolean;
  /**
   * Add more permissions as necessary for other modules or features.
   * Timestamps for tracking creation and modification times.
   * @format date-time
   */
  createdAt?: string;
  /** Name of the role. */
  name?: string;
  /** Type of the role. */
  type?: RoleType;
  /** @format date-time */
  updatedAt?: string;
}

export interface UpdateRoleResponse {
  /** Role defines the role of a user in the system with specific permissions. */
  role?: Role;
}

export type UpdateUserData = any;

/**
 * UpdateUserRequest: Represents the request object invoked against the user
 * service to update a given user account
 */
export interface UpdateUserRequest {
  /**
   * UserAccount to update
   * Validation:
   * - cannot nil hence required
   * @brief Represents a user account in the context of simfinni.
   */
  account: UserAccount;
}

/**
 * UpdateUserResponse: Represents the response object returned as a response to
 * the `update-user` request
 */
export interface UpdateUserResponse {
  /** @brief Represents a user account in the context of simfinni. */
  account?: UserAccount;
  accountUpdated?: boolean;
}

export type UpdateUserV2Data = any;

export interface UpdateUserV2Request {
  /** BusinessAccount represents a business account within the context of solomon-ai. */
  businessAccount?: BusinessAccount;
  /** @brief Represents a user account in the context of simfinni. */
  userAccount?: UserAccount;
}

export interface UpdateUserV2Response {
  accountUpdated?: boolean;
  /** BusinessAccount represents a business account within the context of solomon-ai. */
  businessAccount?: BusinessAccount;
  /** @brief Represents a user account in the context of simfinni. */
  userAccount?: UserAccount;
}

/** @brief Represents a user account in the context of simfinni. */
export interface UserAccount {
  /** Auth0 user id */
  auth0UserId?: string;
  /** Enum indicating the type of profile (e.g., individual, corporate). */
  accountType?: ProfileType;
  /** Physical address associated with the user. */
  address?: Address;
  /** Algolia user id */
  algoliaUserId?: string;
  /**
   * ID for the authentication service linked to this account.
   * @format uint64
   */
  authnAccountId?: string;
  /** Brief description about the user, up to 200 characters. */
  bio?: string;
  /**
   * Timestamp for when the account was created.
   * @format date-time
   */
  createdAt?: string;
  /**
   * Email associated with the user account.
   * @example "sample@example.com"
   */
  email?: string;
  /** User's first name. */
  firstname?: string;
  /** Short headline for the user's profile. */
  headline?: string;
  /**
   * Unique identifier for the account.
   * @format uint64
   */
  id?: string;
  /** Indicates if the account is currently active. */
  isActive?: boolean;
  /** Indicates if the user's email has been verified. */
  isEmailVerified?: boolean;
  /** Indicates if the account is set to private. */
  isPrivate?: boolean;
  /** User's last name. */
  lastname?: string;
  /** Phone number associated with the account. */
  phoneNumber?: string;
  /** Profile image associated with the user account. */
  profileImageUrl?: string;
  /** Role defines the role of a user in the system with specific permissions. */
  role?: Role;
  /** Settings specific to the user account. */
  settings?: Settings;
  /** Tags associated with the user account, between 1 and 10. */
  tags?: Array<Tags>;
  /**
   * Username associated with the account, minimum of 10 characters.
   * @example "testuser9696"
   */
  username?: string;
  /**
   * Timestamp for when the email was verified.
   * @format date-time
   */
  verifiedAt?: string;
}

export type VerificationData = any;

export interface VerifyUserResponse {
  accountVerified?: boolean;
}

export type VerifyUserV2Data = any;

export interface VerifyUserV2Response {
  accountVerified?: boolean;
}
