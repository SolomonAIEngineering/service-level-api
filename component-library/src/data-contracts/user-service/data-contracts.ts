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

export interface AIPoweredInsights {
  /**
   * List of areas of interest for insights
   * List of areas for insights
   */
  areasOfInterest?: Array<string>;
  /** True if user agrees to share data for insights */
  dataSharing?: boolean;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  insightFrequency?: Frequency;
}

export interface AccountInformation {
  businessName?: string;
  businessRegistrationNumber?: string;
  businessType?: BusinessType;
  contactInfo?: ContactInformation;
  /**
   * address id
   * @format uint64
   */
  id?: string;
}

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
  '@type'?: string;
  [key: string]: any;
}

/** BusinessAccount represents a business account within the context of solomon-ai. */
export interface BusinessAccount {
  /** The type of profile associated with the business account (e.g., individual, corporate). */
  accountType?: ProfileType;
  /** Physical address associated with the business account. */
  address?: Address;
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
  /** Settings specific to the business account. */
  businessAccountSettings?: BusinessAccountSettings;
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
  /**
   * Website URL of the company associated with the business account.
   * @example "https://solomon-ai.io"
   */
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

/** Business Account Settings */
export interface BusinessAccountSettings {
  accountInformation?: AccountInformation;
  aiPoweredInsights?: AIPoweredInsights;
  financialPreferences?: FinancialPreferences;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  integrationSettings?: IntegrationSettings;
  notificationSettings?: NotificationSettings;
}

/** @default "BUSINESS_TYPE_UNSPECIFIED" */
export type BusinessType =
  | 'BUSINESS_TYPE_UNSPECIFIED'
  | 'BUSINESS_TYPE_SOLE_PROPRIETORSHIP'
  | 'BUSINESS_TYPE_PARTNERSHIP'
  | 'BUSINESS_TYPE_LLC'
  | 'BUSINESS_TYPE_CORPORATION'
  | 'BUSINESS_TYPE_OTHER';

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

export interface ContactInformation {
  address?: string;
  email?: string;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  phoneNumber?: string;
}

export type CreateUserData = any;

/**
 * CreateUserRequest: Represents the request object invoked against the user
 * service to create a user account
 */
export interface CreateUserRequest {
  /**
   * User account to create
   * Validations:
   * - cannot be nil hence required
   * @brief Represents a user account in the context of simfinni.
   */
  account: UserAccount;
  /**
   * set of community IDs to follow
   * Validations:
   * - at least 0 and at most 20 community ids supported at one time
   */
  communityIdsToFollow?: Array<string>;
  /**
   * The password  of the user
   * Validations:
   * - must be a at least 10 characters long
   * @example "tesdfkdkfhsdgd"
   */
  password: string;
  /**
   * The profile image of the user
   * Validations:
   * - must be a valid URI
   * @example "lksdjhfgsdhfghdsgfhgdh.com"
   */
  profileImage: string;
}

/**
 * CreateUserResponse: Represents the response object returned as a response to
 * the `create-user` request
 */
export interface CreateUserResponse {
  /** @format uint64 */
  userId?: string;
}

export type CreateUserV2Data = any;

/**
 * CreateUserV2Request: Represents the request object invoked against the user
 * service to create a user account
 */
export interface CreateUserV2Request {
  /** BusinessAccount represents a business account within the context of solomon-ai. */
  businessAccount?: BusinessAccount;
  /**
   * set of community IDs to follow
   * Validations:
   * - at least 0 and at most 20 community ids supported at one time
   */
  communityIdsToFollow?: Array<string>;
  /**
   * The password  of the user
   * Validations:
   * - must be a at least 10 characters long
   * @example "tesdfkdkfhsdgd"
   */
  password: string;
  /**
   * The profile image of the user
   * Validations:
   * - must be a valid URI
   * @example "lksdjhfgsdhfghdsgfhgdh.com"
   */
  profileImage: string;
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

/** @default "DASHBOARD_WIDGET_TRANSACTIONS_UNSPECIFIED" */
export type DashboardWidget =
  | 'DASHBOARD_WIDGET_TRANSACTIONS_UNSPECIFIED'
  | 'DASHBOARD_WIDGET_TRANSACTIONS_OVERVIEW'
  | 'DASHBOARD_WIDGET_INVESTMENT_SUMMARY'
  | 'DASHBOARD_WIDGET_MONTHLY_SPENDING_REPORT'
  | 'DASHBOARD_WIDGET_SAVINGS_TRACKER'
  | 'DASHBOARD_WIDGET_CREDIT_SCORE_MONITOR';

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

export interface FinancialPreferences {
  currencyPreference?: string;
  financialYearStart?: string;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  taxSettings?: TaxSettings;
}

/**
 * frequency by which insights should be generated
 * @default "FREQUENCY_UNSPECIFIED"
 */
export type Frequency =
  | 'FREQUENCY_UNSPECIFIED'
  | 'FREQUENCY_DAILY'
  | 'FREQUENCY_WEEKLY'
  | 'FREQUENCY_MONTHLY';

export interface GetBusinessSettingsResponse {
  businessSettings?: BusinessAccountSettings;
}

export interface GetCannyUserSSOTokenResponse {
  token?: string;
}

export type GetCannyUserSsoTokenData = any;

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

export interface IntegrationSettings {
  /** wether to enable linking bank account for account */
  bankAccountLinking?: boolean;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  /**
   * list of supported third party apps of interest
   * List of connected third-party apps
   */
  thirdPartyApps?: Array<string>;
}

export interface NotificationSettings {
  /** True if user wants to be alerted for anomalies */
  alerts?: boolean;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  /**
   * - TYPE_EMAIL: email based notification
   *  - TYPE_SMS: sms based notification
   *  - TYPE_IN_APP: app based notification
   */
  notificationType?: NotificationSettingsType;
}

/**
 * type of enabled notification
 * - TYPE_EMAIL: email based notification
 *  - TYPE_SMS: sms based notification
 *  - TYPE_IN_APP: app based notification
 * @default "TYPE_UNSPECIFIED"
 */
export type NotificationSettingsType =
  | 'TYPE_UNSPECIFIED'
  | 'TYPE_EMAIL'
  | 'TYPE_SMS'
  | 'TYPE_IN_APP';

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
export type ProfileType =
  | 'PROFILE_TYPE_UNSPECIFIED'
  | 'PROFILE_TYPE_USER'
  | 'PROFILE_TYPE_BUSINESS';

export type ReadynessCheckData = any;

export interface ReadynessCheckResponse {
  healthy?: boolean;
}

export type RetrieveBusinessSettingsData = any;

/**
 * Investment preferences.
 * @default "RISK_TOLERANCE_UNSPECIFIED"
 */
export type RiskTolerance =
  | 'RISK_TOLERANCE_UNSPECIFIED'
  | 'RISK_TOLERANCE_LOW'
  | 'RISK_TOLERANCE_MEDIUM'
  | 'RISK_TOLERANCE_HIGH';

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

export interface TaxSettings {
  /**
   * address id
   * @format uint64
   */
  id?: string;
  taxCode?: string;
  /** @format double */
  taxPercentage?: number;
}

/**
 * Display and interaction preferences.
 * @default "THEME_UNSPECIFIED"
 */
export type Theme = 'THEME_UNSPECIFIED' | 'THEME_LIGHT' | 'THEME_DARK';

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
  /** Enum indicating the type of profile (e.g., individual, corporate). */
  accountType?: ProfileType;
  /** Physical address associated with the user. */
  address?: Address;
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
  /** Tags associated with the user account, between 1 and 10. */
  tags?: Array<Tags>;
  /** Settings specific to the user account. */
  userSettings?: UserSettings;
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

/** User settings for the fintech application. */
export interface UserSettings {
  /** Display and interaction preferences. */
  appTheme?: Theme;
  /** Dashboard customization, e.g., specific widgets or reports. */
  dashboardWidgets?: Array<DashboardWidget>;
  /** Preferred date-time format. */
  datetimeFormat?: string;
  /** Currency preference. */
  defaultCurrency?: string;
  /** Notification preferences. */
  emailNotifications?: boolean;
  /** Option to share transaction history with friends/family. */
  enableGoalJournal?: boolean;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  /** Investment preferences. */
  investmentRiskTolerance?: RiskTolerance;
  /** Language preference. */
  preferredLanguage?: string;
  /**
   * Privacy settings.
   *
   * Whether the user's profile is public.
   */
  publicProfile?: boolean;
  pushNotifications?: boolean;
  smsNotifications?: boolean;
  /** Two-factor authentication status. */
  twoFactorAuthenticationEnabled?: boolean;
}

export type VerificationData = any;

export interface VerifyUserResponse {
  accountVerified?: boolean;
}

export type VerifyUserV2Data = any;

export interface VerifyUserV2Response {
  accountVerified?: boolean;
}
