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
  /** List of areas for insights */
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
   * - must be exactly 5 characters
   * @example "12345"
   */
  zipcode?: string;
}

export interface Any {
  "@type"?: string;
  [key: string]: any;
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
  notifications?: Notifications;
}

/** @default "BUSINESS_TYPE_UNSPECIFIED" */
export type BusinessType =
  | "BUSINESS_TYPE_UNSPECIFIED"
  | "BUSINESS_TYPE_SOLE_PROPRIETORSHIP"
  | "BUSINESS_TYPE_PARTNERSHIP"
  | "BUSINESS_TYPE_LLC"
  | "BUSINESS_TYPE_CORPORATION"
  | "BUSINESS_TYPE_OTHER";

export type CheckEmailExistsData = any;

export interface CheckEmailExistsResponse {
  exists?: boolean;
}

export type CheckUsernameExistsData = any;

export interface CheckUsernameExistsResponse {
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

/** @default "DASHBOARD_WIDGET_TRANSACTIONS_UNSPECIFIED" */
export type DashboardWidget =
  | "DASHBOARD_WIDGET_TRANSACTIONS_UNSPECIFIED"
  | "DASHBOARD_WIDGET_TRANSACTIONS_OVERVIEW"
  | "DASHBOARD_WIDGET_INVESTMENT_SUMMARY"
  | "DASHBOARD_WIDGET_MONTHLY_SPENDING_REPORT"
  | "DASHBOARD_WIDGET_SAVINGS_TRACKER"
  | "DASHBOARD_WIDGET_CREDIT_SCORE_MONITOR";

export type DeleteUserData = any;

/**
 * DeleteUserResponse: Represents the object returned as a response to
 * `delete-user` request
 */
export interface DeleteUserResponse {
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

/** @default "FREQUENCY_UNSPECIFIED" */
export type Frequency = "FREQUENCY_UNSPECIFIED" | "FREQUENCY_DAILY" | "FREQUENCY_WEEKLY" | "FREQUENCY_MONTHLY";

export type GetUserByEmailData = any;

export type GetUserByEmailOrUsernameData = any;

export interface GetUserByEmailOrUsernameResponse {
  /** The account ID associated with the user */
  account?: UserAccount;
}

export interface GetUserByEmailResponse {
  /** The account ID associated with the user */
  account?: UserAccount;
}

export type GetUserByUsernameData = any;

export interface GetUserByUsernameResponse {
  /** The account ID associated with the user */
  account?: UserAccount;
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

/**
 * GetUserResponse: Represents the object returned as a response to `get-user`
 * request
 */
export interface GetUserResponse {
  account?: UserAccount;
}

export type HealthCheckData = any;

export interface HealthCheckResponse {
  healthy?: boolean;
}

export interface IntegrationSettings {
  bankAccountLinking?: boolean;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  /** List of connected third-party apps */
  thirdPartyApps?: Array<string>;
}

export interface Notifications {
  /** True if user wants to be alerted for anomalies */
  alerts?: boolean;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  notificationType?: NotificationsType;
}

/** @default "TYPE_UNSPECIFIED" */
export type NotificationsType = "TYPE_UNSPECIFIED" | "TYPE_EMAIL" | "TYPE_SMS" | "TYPE_IN_APP";

export type PasswordResetData = any;

export interface PasswordResetWebhookResponse {
  success?: boolean;
}

export type ReadynessCheckData = any;

export interface ReadynessCheckResponse {
  healthy?: boolean;
}

/**
 * Investment preferences.
 * @default "RISK_TOLERANCE_UNSPECIFIED"
 */
export type RiskTolerance =
  | "RISK_TOLERANCE_UNSPECIFIED"
  | "RISK_TOLERANCE_LOW"
  | "RISK_TOLERANCE_MEDIUM"
  | "RISK_TOLERANCE_HIGH";

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
export type Theme = "THEME_UNSPECIFIED" | "THEME_LIGHT" | "THEME_DARK";

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
   */
  account: UserAccount;
}

/**
 * UpdateUserResponse: Represents the response object returned as a response to
 * the `update-user` request
 */
export interface UpdateUserResponse {
  account?: UserAccount;
  accountUpdated?: boolean;
}

/** UserAccount: represents a user account in the context of simfinni */
export interface UserAccount {
  /**
   * the address associated with the user
   * Validations:
   * - can be empty
   */
  address?: Address;
  /**
   * authentication service account id
   * @format uint64
   */
  authnAccountId?: string;
  /**
   * simple description specific to account should be less than 200 characters
   * Validations:
   * - can be empty
   * @example "lksdjhfgsdhfghdsgfhgdha;hdgjsdfhaghsldfhagjkh;sdafjhsdjflhgjhjsfhgjsdhfjfkgjhsdfhgjhjdfhgjsdhjglsdjjghjdfhsjghjsadfhgjsdfhjghsdfkjghdfj"
   */
  bio?: string;
  businessAccountSettings?: BusinessAccountSettings;
  /**
   * Company description
   * @example "we help businesses stay in business"
   */
  companyDescription?: string;
  /**
   * Established Date is the date the company was created
   * optional field for business profile
   */
  companyEstablishedDate?: string;
  /**
   * Industry Type is the type of business associated to this business
   * @example "fintech"
   */
  companyIndustryType?: string;
  /**
   * Company Name is the name of the company profile
   * @example "solomon-ai"
   */
  companyName?: string;
  /**
   * Website url of the business
   * @example "https://solomon-ai.io"
   */
  companyWebsiteUrl?: string;
  /** @format date-time */
  createdAt?: string;
  /**
   * account email
   * Validations:
   * - must be an email and required
   * @example "lksdjhfgsdhfghdsgfhgdh@gmail.com"
   */
  email?: string;
  /**
   * account first name
   * Validations:
   * - can be empty
   * @example "testuser96"
   */
  firstname?: string;
  /**
   * profile headline
   * Validations:
   * - can be empty
   * @example "lksdjhfgsdhfghdsgfhgdha;hdgjsdfhaghsldfhagjkh;sdafjhsdjflhgjhjsfhgjsdhfjfkgjhsdfhgjhjdfhgjsdhjglsdjjghjdfhsjghjsadfhgjsdfhjghsdfkjghdfj"
   */
  headline?: string;
  /**
   * account id
   * @format uint64
   */
  id?: string;
  /**
   * infers wether the account is active
   * @example true
   */
  isActive?: boolean;
  /** IsBusinessAccount enables us to check if this is a business account of interest */
  isBusinessAccount?: boolean;
  /**
   * isEmailVerified is a field denoting wether or not the user account has
   * indeed verified their email address
   * @example false
   */
  isEmailVerified?: boolean;
  /**
   * account is private
   * @example false
   */
  isPrivate?: boolean;
  /**
   * account last name
   * Validations:
   * - can be empty
   * @example "testuserlastname"
   */
  lastname?: string;
  /**
   * account phone number
   * Validations:
   * - mcan be empty
   * @example "6513424124"
   */
  phoneNumber?: string;
  /**
   * sample tags easily associable to account
   * account first name
   * Validations:
   * - must be at provide between 1 and 10 tags
   */
  tags?: Array<Tags>;
  /** User settings for the fintech application. */
  userSettings?: UserSettings;
  /**
   * account user name
   * Validations:
   * - must be at least 10 character
   * @example "testuser9696"
   */
  username?: string;
  /** @format date-time */
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
