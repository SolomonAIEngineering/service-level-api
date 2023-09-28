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
  CreateBankAccountData,
  CreateBankAccountPayload,
  CreateBudgetData,
  CreateBudgetRequest,
  CreateLinkData,
  CreateManualLinkRequest,
  CreateMilestoneData,
  CreateMilestoneRequest,
  CreateSmartGoalData,
  CreateSmartGoalRequest,
  CreateSubscriptionData,
  CreateSubscriptionRequest,
  CreateUserProfileData,
  CreateUserProfileRequest,
  DeleteBudgetData,
  DeleteLinkData,
  DeleteMilestoneData,
  DeleteSmartGoalData,
  DeleteUserProfile2Data,
  DeleteUserProfileData,
  ExchangePlaidTokenData,
  GetAccountBalanceData,
  GetAccountBalanceHistoryData,
  GetAllBudgetsData,
  GetBankAccountData,
  GetBudgetData,
  GetCategoryMonthlyTransactionCountData,
  GetDebtToIncomeRatioData,
  GetExpenseMetricsData,
  GetFinancialProfileData,
  GetForecastData,
  GetIncomeExpenseRatioData,
  GetIncomeMetricsData,
  GetInvestmentAccountData,
  GetLiabilityAccountData,
  GetLinkData,
  GetLinksData,
  GetMelodyFinancialContextData,
  GetMerchantMonthlyExpenditureData,
  GetMilestoneData,
  GetMilestonesData,
  GetMonthlyBalanceData,
  GetMonthlyExpenditureData,
  GetMonthlyIncomeData,
  GetMonthlySavingsData,
  GetMonthlyTotalQuantityBySecurityAndUserData,
  GetMonthlyTransactionCountData,
  GetMortageAccountData,
  GetPaymentChannelMonthlyExpenditureData,
  GetPocketData,
  GetRecurringTransactionsData,
  GetSmartGoalsByPocketIdData,
  GetStudentLoanAccountData,
  GetTotalInvestmentBySecurityData,
  GetTransactions2Data,
  GetTransactionsData,
  GetUserAccountBalanceHistoryData,
  GetUserCategoryMonthlyExpenditureData,
  GetUserCategoryMonthlyIncomeData,
  GetUserProfileData,
  HealthCheckData,
  InitiatePlaidSetupData,
  InitiatePlaidTokenUpdateData,
  MergeExchangePublicLinkTokenForAccountTokenData,
  MergeExchangePublicLinkTokenForAccountTokenRequest,
  MergeGetPublicLinkTokenData,
  MergeGetPublicLinkTokenRequest,
  PlaidExchangeTokenRequest,
  PlaidInitiateTokenExchangeRequest,
  PlaidInitiateTokenUpdateRequest,
  ProcessStripeWebhookData,
  ProcessWebhookData,
  ProcessWebhookRequest,
  ReadynessCheckData,
  Status,
  StripeWebhookRequest,
  TransactionAggregatesData,
  UpdateBankAccountData,
  UpdateBankAccountRequest,
  UpdateBudgetRequest,
  UpdateMilestoneRequest,
  UpdateSmartGoalData,
  UpdateSmartGoalRequest,
  UpdateUserProfileData,
  UpdateUserProfileRequest,
  UpdatesBudgetData,
  UpdatesMilestoneData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description This endpoint creates a bank account for a given user profile
   *
   * @tags bank account
   * @name CreateBankAccount
   * @summary create a bank account for a given user profile
   * @request POST:/api/v1/bank-account/profile/{userId}
   * @response `200` `CreateBankAccountData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createBankAccount = (userId: string, body: CreateBankAccountPayload, params: RequestParams = {}) =>
    this.request<CreateBankAccountData, Status>({
      path: `/api/v1/bank-account/profile/${userId}`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint creates a budget
   *
   * @tags budget
   * @name CreateBudget
   * @summary create a budget
   * @request POST:/api/v1/budget
   * @response `200` `CreateBudgetData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createBudget = (body: CreateBudgetRequest, params: RequestParams = {}) =>
    this.request<CreateBudgetData, Status>({
      path: `/api/v1/budget`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint creates a link
   *
   * @tags link
   * @name CreateLink
   * @summary create link
   * @request POST:/api/v1/link
   * @response `200` `CreateLinkData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createLink = (body: CreateManualLinkRequest, params: RequestParams = {}) =>
    this.request<CreateLinkData, Status>({
      path: `/api/v1/link`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint creates a milestone
   *
   * @tags milestone
   * @name CreateMilestone
   * @summary create a milestone
   * @request POST:/api/v1/milestone
   * @response `200` `CreateMilestoneData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createMilestone = (body: CreateMilestoneRequest, params: RequestParams = {}) =>
    this.request<CreateMilestoneData, Status>({
      path: `/api/v1/milestone`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint creates a smart goal
   *
   * @tags smart goals
   * @name CreateSmartGoal
   * @summary create a smart goal
   * @request POST:/api/v1/smart-goal
   * @response `200` `CreateSmartGoalData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createSmartGoal = (body: CreateSmartGoalRequest, params: RequestParams = {}) =>
    this.request<CreateSmartGoalData, Status>({
      path: `/api/v1/smart-goal`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enabled a user to create a new subscription against stripe
   *
   * @tags payment
   * @name CreateSubscription
   * @summary Creates a new subscription for a given customer against stripe
   * @request POST:/api/v1/stripe/subscription
   * @response `200` `CreateSubscriptionData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createSubscription = (body: CreateSubscriptionRequest, params: RequestParams = {}) =>
    this.request<CreateSubscriptionData, Status>({
      path: `/api/v1/stripe/subscription`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint performs an a creation operation of a user profile based on the provided parametersThis operation is implemented as a distributed transactions as this operation can span multiple services
   *
   * @tags user profile
   * @name CreateUserProfile
   * @summary create a user profile
   * @request POST:/api/v1/profile
   * @response `200` `CreateUserProfileData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  createUserProfile = (body: CreateUserProfileRequest, params: RequestParams = {}) =>
    this.request<CreateUserProfileData, Status>({
      path: `/api/v1/profile`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint deletes a budget
   *
   * @tags budget
   * @name DeleteBudget
   * @summary delete a budget
   * @request DELETE:/api/v1/budget/{budgetId}
   * @response `200` `DeleteBudgetData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteBudget = (budgetId: string, params: RequestParams = {}) =>
    this.request<DeleteBudgetData, Status>({
      path: `/api/v1/budget/${budgetId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint deletes the link if the link exists
   *
   * @tags link
   * @name DeleteLink
   * @summary delete link by id
   * @request DELETE:/api/v1/link/{linkId}/user/{userId}
   * @response `200` `DeleteLinkData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteLink = (linkId: string, userId: string, params: RequestParams = {}) =>
    this.request<DeleteLinkData, Status>({
      path: `/api/v1/link/${linkId}/user/${userId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint deletes a milestone
   *
   * @tags milestone
   * @name DeleteMilestone
   * @summary delete a milestone
   * @request DELETE:/api/v1/milestone/{milestoneId}
   * @response `200` `DeleteMilestoneData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteMilestone = (milestoneId: string, params: RequestParams = {}) =>
    this.request<DeleteMilestoneData, Status>({
      path: `/api/v1/milestone/${milestoneId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint deletes a smart goal
   *
   * @tags smart goals
   * @name DeleteSmartGoal
   * @summary delete a smart goal
   * @request DELETE:/api/v1/smart-goal/{smartGoalId}
   * @response `200` `DeleteSmartGoalData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteSmartGoal = (smartGoalId: string, params: RequestParams = {}) =>
    this.request<DeleteSmartGoalData, Status>({
      path: `/api/v1/smart-goal/${smartGoalId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint performs a delete operation on a user profile based on the provided parametersThis deletion operation spans multiple services (plaid) as user details are stored across a suite of our backend servicesThe operation itself is an atomic one of nature. Either all services successfully delete the recod or we fail the requestDivergent state is not expected to be encountered with this endpoint.
   *
   * @tags bank account
   * @name DeleteUserProfile
   * @summary deletes a bank account for a given user profile
   * @request DELETE:/api/v1/bank-account/{bankAccountId}
   * @response `200` `DeleteUserProfileData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteUserProfile = (
    bankAccountId: string,
    query: {
      /**
       * The account ID associated with the user
       * Validations:
       * - user_id must be greater than 0
       * @format uint64
       */
      userId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<DeleteUserProfileData, Status>({
      path: `/api/v1/bank-account/${bankAccountId}`,
      method: "DELETE",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint performs a delete operation on a user profile based on the provided parametersThis deletion operation spans multiple services (plaid) as user details are stored across a suite of our backend servicesThe operation itself is an atomic one of nature. Either all services successfully delete the recod or we fail the requestDivergent state is not expected to be encountered with this endpoint.
   *
   * @tags user profile
   * @name DeleteUserProfile2
   * @summary deletes a user profile
   * @request DELETE:/api/v1/profile/{userId}
   * @originalName deleteUserProfile
   * @duplicate
   * @response `200` `DeleteUserProfile2Data` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  deleteUserProfile2 = (userId: string, params: RequestParams = {}) =>
    this.request<DeleteUserProfile2Data, Status>({
      path: `/api/v1/profile/${userId}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description This endpoint exchanges a plaid link token for a plaid access token
   *
   * @tags plaid link token
   * @name ExchangePlaidToken
   * @summary exchange plaid token
   * @request POST:/api/v1/plaid/exchange-token
   * @response `200` `ExchangePlaidTokenData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  exchangePlaidToken = (body: PlaidExchangeTokenRequest, params: RequestParams = {}) =>
    this.request<ExchangePlaidTokenData, Status>({
      path: `/api/v1/plaid/exchange-token`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint returns the historical balance for a given account
   *
   * @tags analytics, account-balance
   * @name GetAccountBalance
   * @summary gets account balance of an account
   * @request GET:/api/v1/historical-account-balance/user/{userId}/plaid-account-id/{plaidAccountId}
   * @response `200` `GetAccountBalanceData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getAccountBalance = (userId: string, plaidAccountId: string, params: RequestParams = {}) =>
    this.request<GetAccountBalanceData, Status>({
      path: `/api/v1/historical-account-balance/user/${userId}/plaid-account-id/${plaidAccountId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This API could accept account_id as input parameters and return the account balance history for that account.
   *
   * @tags analytics, balance-history
   * @name GetAccountBalanceHistory
   * @summary Returns the account balance history for an account
   * @request GET:/api/v1/analytics/balance-history/account/{plaidAccountId}/pagenumber/{pageNumber}/pagesize/{pageSize}
   * @response `200` `GetAccountBalanceHistoryData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getAccountBalanceHistory = (
    plaidAccountId: string,
    pageNumber: string,
    pageSize: string,
    params: RequestParams = {},
  ) =>
    this.request<GetAccountBalanceHistoryData, Status>({
      path: `/api/v1/analytics/balance-history/account/${plaidAccountId}/pagenumber/${pageNumber}/pagesize/${pageSize}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint returns all budgets
   *
   * @tags budget
   * @name GetAllBudgets
   * @summary get all budgets
   * @request GET:/api/v1/budget
   * @response `200` `GetAllBudgetsData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getAllBudgets = (
    query: {
      /**
       * The milestone id
       * Validations:
       * - milestone_id must be greater than 0
       * @format uint64
       */
      milestoneId: string;
      /**
       * The pocket account id
       * Validations:
       * - pocket_account_id must be greater than 0
       * @format uint64
       */
      pocketId: string;
      /**
       * The smart goal id
       * Validations:
       * - smart_goal_id must be greater than 0
       * @format uint64
       */
      smartGoalId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetAllBudgetsData, Status>({
      path: `/api/v1/budget`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint returns the bank account if the user record id and bank account id exists example: /api/v1/bank-account?user_id=xxxxxx&&bank_account_id=xxxxxxx
   *
   * @tags bank account
   * @name GetBankAccount
   * @summary get a bank account for a given user profile
   * @request GET:/api/v1/bank-account/{bankAccountId}
   * @response `200` `GetBankAccountData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getBankAccount = (bankAccountId: string, params: RequestParams = {}) =>
    this.request<GetBankAccountData, Status>({
      path: `/api/v1/bank-account/${bankAccountId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint returns the budget if the budget exists
   *
   * @tags budget
   * @name GetBudget
   * @summary get budget by id
   * @request GET:/api/v1/budget/{budgetId}
   * @response `200` `GetBudgetData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getBudget = (budgetId: string, params: RequestParams = {}) =>
    this.request<GetBudgetData, Status>({
      path: `/api/v1/budget/${budgetId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, category, transactions
   * @name GetCategoryMonthlyTransactionCount
   * @summary Get monthly transaction count by user, month, and category
   * @request GET:/api/v1/analytics/category-monthly-transaction-count/user/{userId}
   * @response `200` `GetCategoryMonthlyTransactionCountData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getCategoryMonthlyTransactionCount = (
    userId: string,
    query?: {
      /**
       * optional
       * @format int64
       */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
      /** optional */
      personalFinanceCategoryPrimary?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetCategoryMonthlyTransactionCountData, Status>({
      path: `/api/v1/analytics/category-monthly-transaction-count/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, debt
   * @name GetDebtToIncomeRatio
   * @summary Get Debt-to-Income ratio by user and month
   * @request GET:/api/v1/analytics/debt-to-income-ratio/user/{userId}
   * @response `200` `GetDebtToIncomeRatioData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getDebtToIncomeRatio = (
    userId: string,
    query?: {
      /**
       * optional
       * @format int64
       */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetDebtToIncomeRatioData, Status>({
      path: `/api/v1/analytics/debt-to-income-ratio/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, expense
   * @name GetExpenseMetrics
   * @summary Get Expense Metrics by user, month and category
   * @request GET:/api/v1/analytics/expenses/user/{userId}
   * @response `200` `GetExpenseMetricsData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getExpenseMetrics = (
    userId: string,
    query?: {
      /**
       * optonal
       * @format int64
       */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
      /** optional */
      personalFinanceCategoryPrimary?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetExpenseMetricsData, Status>({
      path: `/api/v1/analytics/expenses/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, finance-profile
   * @name GetFinancialProfile
   * @summary Get Financial Profile by user and month
   * @request GET:/api/v1/analytics/finance-profile/user/{userId}
   * @response `200` `GetFinancialProfileData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getFinancialProfile = (
    userId: string,
    query?: {
      /**
       * optional
       * @format int64
       */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetFinancialProfileData, Status>({
      path: `/api/v1/analytics/finance-profile/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint returns the forecast if the forecast exists
   *
   * @tags forecast
   * @name GetForecast
   * @summary get forecast by id
   * @request GET:/api/v1/forecast/{smartGoalId}
   * @response `200` `GetForecastData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getForecast = (smartGoalId: string, params: RequestParams = {}) =>
    this.request<GetForecastData, Status>({
      path: `/api/v1/forecast/${smartGoalId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, income
   * @name GetIncomeExpenseRatio
   * @summary Get Income Expense Ratio by user and month
   * @request GET:/api/v1/analytics/income-expense-ratio/user/{userId}
   * @response `200` `GetIncomeExpenseRatioData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getIncomeExpenseRatio = (
    userId: string,
    query?: {
      /**
       * optional
       * @format int64
       */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetIncomeExpenseRatioData, Status>({
      path: `/api/v1/analytics/income-expense-ratio/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, income
   * @name GetIncomeMetrics
   * @summary Get Income Metrics by user, month and category
   * @request GET:/api/v1/analytics/income/user/{userId}
   * @response `200` `GetIncomeMetricsData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getIncomeMetrics = (
    userId: string,
    query?: {
      /**
       * optional
       * @format int64
       */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
      /** optional */
      personalFinanceCategoryPrimary?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetIncomeMetricsData, Status>({
      path: `/api/v1/analytics/income/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint returns the investment account if the investment account exists
   *
   * @tags investment account
   * @name GetInvestmentAccount
   * @summary get investment account by id
   * @request GET:/api/v1/account/{userId}/investment/{investmentAccountId}
   * @response `200` `GetInvestmentAccountData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getInvestmentAccount = (userId: string, investmentAccountId: string, params: RequestParams = {}) =>
    this.request<GetInvestmentAccountData, Status>({
      path: `/api/v1/account/${userId}/investment/${investmentAccountId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint returns the liability account if the liability account exists
   *
   * @tags liability account
   * @name GetLiabilityAccount
   * @summary get liability account by id
   * @request GET:/api/v1/account/{userId}/liability/{liabilityAccountId}
   * @response `200` `GetLiabilityAccountData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getLiabilityAccount = (userId: string, liabilityAccountId: string, params: RequestParams = {}) =>
    this.request<GetLiabilityAccountData, Status>({
      path: `/api/v1/account/${userId}/liability/${liabilityAccountId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint returns the link if the link exists
   *
   * @tags link
   * @name GetLink
   * @summary get link by id
   * @request GET:/api/v1/link/{linkId}
   * @response `200` `GetLinkData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getLink = (
    linkId: string,
    query: {
      /**
       * The user id
       * Validations:
       * - user_id must be greater than 0
       * @format uint64
       */
      userId: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetLinkData, Status>({
      path: `/api/v1/link/${linkId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint returns the links
   *
   * @tags link
   * @name GetLinks
   * @summary get links
   * @request GET:/api/v1/links/{userId}
   * @response `200` `GetLinksData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getLinks = (userId: string, params: RequestParams = {}) =>
    this.request<GetLinksData, Status>({
      path: `/api/v1/links/${userId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, financial-context
   * @name GetMelodyFinancialContext
   * @summary Get Melody Financial Context
   * @request GET:/api/v1/analytics/melody-financial-context/user/{userId}
   * @response `200` `GetMelodyFinancialContextData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getMelodyFinancialContext = (userId: string, params: RequestParams = {}) =>
    this.request<GetMelodyFinancialContextData, Status>({
      path: `/api/v1/analytics/melody-financial-context/user/${userId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, expense
   * @name GetMerchantMonthlyExpenditure
   * @summary Get Merchant Monthly Expenditure by user, month and merchant name
   * @request GET:/api/v1/analytics/merchant-monthly-expenditure/user/{userId}
   * @response `200` `GetMerchantMonthlyExpenditureData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getMerchantMonthlyExpenditure = (
    userId: string,
    query?: {
      /** optional */
      merchantName?: string;
      /**
       * optional
       * @format int64
       */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetMerchantMonthlyExpenditureData, Status>({
      path: `/api/v1/analytics/merchant-monthly-expenditure/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint returns the milestone if the milestone exists
   *
   * @tags milestone
   * @name GetMilestone
   * @summary get milestone by id
   * @request GET:/api/v1/milestone/{milestoneId}
   * @response `200` `GetMilestoneData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getMilestone = (milestoneId: string, params: RequestParams = {}) =>
    this.request<GetMilestoneData, Status>({
      path: `/api/v1/milestone/${milestoneId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint returns the milestones if the smart goal exists
   *
   * @tags milestone
   * @name GetMilestones
   * @summary get milestones by smart goal id
   * @request GET:/api/v1/milestone/smart-goal/{smartGoalId}
   * @response `200` `GetMilestonesData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getMilestones = (smartGoalId: string, params: RequestParams = {}) =>
    this.request<GetMilestonesData, Status>({
      path: `/api/v1/milestone/smart-goal/${smartGoalId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, balance
   * @name GetMonthlyBalance
   * @summary Get Monthly Balance by user and month
   * @request GET:/api/v1/analytics/monthly-balance/user/{userId}
   * @response `200` `GetMonthlyBalanceData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getMonthlyBalance = (
    userId: string,
    query?: {
      /**
       * optional
       * @format int64
       */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetMonthlyBalanceData, Status>({
      path: `/api/v1/analytics/monthly-balance/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, expense
   * @name GetMonthlyExpenditure
   * @summary Get Monthly Expenditure by user and month
   * @request GET:/api/v1/analytics/monthly-expenditure/user/{userId}
   * @response `200` `GetMonthlyExpenditureData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getMonthlyExpenditure = (
    userId: string,
    query?: {
      /** @format int64 */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetMonthlyExpenditureData, Status>({
      path: `/api/v1/analytics/monthly-expenditure/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, income
   * @name GetMonthlyIncome
   * @summary Get Monthly Income by user and month
   * @request GET:/api/v1/analytics/monthly-income/user/{userId}
   * @response `200` `GetMonthlyIncomeData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getMonthlyIncome = (
    userId: string,
    query?: {
      /** @format int64 */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetMonthlyIncomeData, Status>({
      path: `/api/v1/analytics/monthly-income/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, savings
   * @name GetMonthlySavings
   * @summary Get Monthly Savings by user and month
   * @request GET:/api/v1/analytics/monthly-savings/{userId}
   * @response `200` `GetMonthlySavingsData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getMonthlySavings = (
    userId: string,
    query?: {
      /** @format int64 */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetMonthlySavingsData, Status>({
      path: `/api/v1/analytics/monthly-savings/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, securities
   * @name GetMonthlyTotalQuantityBySecurityAndUser
   * @summary Get Monthly Total Quantity of Security by user, month and security
   * @request GET:/api/v1/analytics/monthly-total-quantity-by-security-and-user/user/{userId}
   * @response `200` `GetMonthlyTotalQuantityBySecurityAndUserData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getMonthlyTotalQuantityBySecurityAndUser = (
    userId: string,
    query?: {
      /** @format int64 */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
      securityId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetMonthlyTotalQuantityBySecurityAndUserData, Status>({
      path: `/api/v1/analytics/monthly-total-quantity-by-security-and-user/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, transaction
   * @name GetMonthlyTransactionCount
   * @summary Get Monthly Transaction Count by user and month
   * @request GET:/api/v1/analytics/monthly-transaction-count/user/{userId}
   * @response `200` `GetMonthlyTransactionCountData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getMonthlyTransactionCount = (
    userId: string,
    query?: {
      /** @format int64 */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetMonthlyTransactionCountData, Status>({
      path: `/api/v1/analytics/monthly-transaction-count/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint returns the mortgage account if the mortgage account exists
   *
   * @tags mortgage account
   * @name GetMortageAccount
   * @summary get mortgage account by id
   * @request GET:/api/v1/account/{userId}/mortgage/{mortgageAccountId}
   * @response `200` `GetMortageAccountData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getMortageAccount = (userId: string, mortgageAccountId: string, params: RequestParams = {}) =>
    this.request<GetMortageAccountData, Status>({
      path: `/api/v1/account/${userId}/mortgage/${mortgageAccountId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, expense
   * @name GetPaymentChannelMonthlyExpenditure
   * @summary Get Payment Channel Monthly Expenditure by user, month, and payment channel
   * @request GET:/api/v1/analytics/payment-channel-expenditure/user/{userId}
   * @response `200` `GetPaymentChannelMonthlyExpenditureData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPaymentChannelMonthlyExpenditure = (
    userId: string,
    query?: {
      /** @format int64 */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
      paymentChannel?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetPaymentChannelMonthlyExpenditureData, Status>({
      path: `/api/v1/analytics/payment-channel-expenditure/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint returns the pocket if the pocket exists example: /api/v1/pocket/xxxxxxx
   *
   * @tags pocket
   * @name GetPocket
   * @summary get a pocket
   * @request GET:/api/v1/pocket/{pocketId}
   * @response `200` `GetPocketData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getPocket = (pocketId: string, params: RequestParams = {}) =>
    this.request<GetPocketData, Status>({
      path: `/api/v1/pocket/${pocketId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint returns the recurring transactions for a given user id
   *
   * @tags recurring transactions
   * @name GetRecurringTransactions
   * @summary get recurring transactions
   * @request GET:/api/v1/transactions/recurring-transactions/{userId}
   * @response `200` `GetRecurringTransactionsData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getRecurringTransactions = (userId: string, params: RequestParams = {}) =>
    this.request<GetRecurringTransactionsData, Status>({
      path: `/api/v1/transactions/recurring-transactions/${userId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint returns the smart goals if the pocket exists
   *
   * @tags smart goals
   * @name GetSmartGoalsByPocketId
   * @summary get smart goals by pocket id
   * @request GET:/api/v1/smart-goal/pocket/{pocketId}
   * @response `200` `GetSmartGoalsByPocketIdData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getSmartGoalsByPocketId = (pocketId: string, params: RequestParams = {}) =>
    this.request<GetSmartGoalsByPocketIdData, Status>({
      path: `/api/v1/smart-goal/pocket/${pocketId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint returns the student loan account if the student loan account exists
   *
   * @tags student loan account
   * @name GetStudentLoanAccount
   * @summary get student loan account by id
   * @request GET:/api/v1/account/{userId}/student-loan/{studentLoanAccountId}
   * @response `200` `GetStudentLoanAccountData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getStudentLoanAccount = (userId: string, studentLoanAccountId: string, params: RequestParams = {}) =>
    this.request<GetStudentLoanAccountData, Status>({
      path: `/api/v1/account/${userId}/student-loan/${studentLoanAccountId}`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, security
   * @name GetTotalInvestmentBySecurity
   * @summary Get Total Investment by user and security
   * @request GET:/api/v1/analytics/total-investment/user/{userId}
   * @response `200` `GetTotalInvestmentBySecurityData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getTotalInvestmentBySecurity = (
    userId: string,
    query?: {
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
      securityId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetTotalInvestmentBySecurityData, Status>({
      path: `/api/v1/analytics/total-investment/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint returns the transactions for a given user id and a business account id
   *
   * @tags analytics, transactions
   * @name GetTransactions
   * @summary get transactions tied to a bank account and account id
   * @request GET:/api/v1/transactions/user/{userId}/plaid-account-id/{plaidAccountId}/pageNumber/{pageNumber}/pageSize/{pageSize}
   * @response `200` `GetTransactionsData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getTransactions = (
    userId: string,
    plaidAccountId: string,
    pageNumber: string,
    pageSize: string,
    params: RequestParams = {},
  ) =>
    this.request<GetTransactionsData, Status>({
      path: `/api/v1/transactions/user/${userId}/plaid-account-id/${plaidAccountId}/pageNumber/${pageNumber}/pageSize/${pageSize}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This endpoint returns the transactions for a given user id
   *
   * @tags transactions
   * @name GetTransactions2
   * @summary get transactions
   * @request GET:/api/v1/transactions/{userId}/pageNumber/{pageNumber}/pageSize/{pageSize}
   * @originalName getTransactions
   * @duplicate
   * @response `200` `GetTransactions2Data` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getTransactions2 = (userId: string, pageNumber: string, pageSize: string, params: RequestParams = {}) =>
    this.request<GetTransactions2Data, Status>({
      path: `/api/v1/transactions/${userId}/pageNumber/${pageNumber}/pageSize/${pageSize}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This API could accept user_id as input parameters and return the account balance history for that user.
   *
   * @tags analytics, balance-history
   * @name GetUserAccountBalanceHistory
   * @summary Returns the account balance history for a user
   * @request GET:/api/v1/analytics/balance-history/user/{userId}/pagenumber/{pageNumber}/pagesize/{pageSize}
   * @response `200` `GetUserAccountBalanceHistoryData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUserAccountBalanceHistory = (userId: string, pageNumber: string, pageSize: string, params: RequestParams = {}) =>
    this.request<GetUserAccountBalanceHistoryData, Status>({
      path: `/api/v1/analytics/balance-history/user/${userId}/pagenumber/${pageNumber}/pagesize/${pageSize}`,
      method: "GET",
      ...params,
    });
  /**
   * @description This API could accept user_id as an input parameter and return the monthly category expenditure for that user.
   *
   * @tags analytics, category, expense
   * @name GetUserCategoryMonthlyExpenditure
   * @summary Returns the monthly category expenditure for a user
   * @request GET:/api/v1/analytics/category-monthly-expenditure/user/{userId}
   * @response `200` `GetUserCategoryMonthlyExpenditureData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUserCategoryMonthlyExpenditure = (
    userId: string,
    query?: {
      /**
       * Month in the format of YYYYMM
       * @format int64
       */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
      /** Personal finance category */
      personalFinanceCategoryPrimary?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetUserCategoryMonthlyExpenditureData, Status>({
      path: `/api/v1/analytics/category-monthly-expenditure/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags analytics, category, income
   * @name GetUserCategoryMonthlyIncome
   * @summary Get monthly income by user for a specific category
   * @request GET:/api/v1/analytics/category-monthly-income/user/{userId}
   * @response `200` `GetUserCategoryMonthlyIncomeData` Successful operation
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUserCategoryMonthlyIncome = (
    userId: string,
    query?: {
      /** @format int64 */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
      personalFinanceCategoryPrimary?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<GetUserCategoryMonthlyIncomeData, Status>({
      path: `/api/v1/analytics/category-monthly-income/user/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description Queries and obtains a user profile based on the provided parameters
   *
   * @tags user profile
   * @name GetUserProfile
   * @summary Gets a user profile
   * @request GET:/api/v1/profile/{userId}
   * @response `200` `GetUserProfileData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  getUserProfile = (userId: string, params: RequestParams = {}) =>
    this.request<GetUserProfileData, Status>({
      path: `/api/v1/profile/${userId}`,
      method: "GET",
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
   * @description This endpoint initiates a plaid link token creation
   *
   * @tags plaid link token
   * @name InitiatePlaidSetup
   * @summary initiate plaid setup
   * @request POST:/api/v1/plaid/initiate-token-exchange
   * @response `200` `InitiatePlaidSetupData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  initiatePlaidSetup = (body: PlaidInitiateTokenExchangeRequest, params: RequestParams = {}) =>
    this.request<InitiatePlaidSetupData, Status>({
      path: `/api/v1/plaid/initiate-token-exchange`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint initiates a plaid link token update
   *
   * @tags plaid link token
   * @name InitiatePlaidTokenUpdate
   * @summary initiate plaid link token update
   * @request POST:/api/v1/plaid/initiate-token-update
   * @response `200` `InitiatePlaidTokenUpdateData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  initiatePlaidTokenUpdate = (body: PlaidInitiateTokenUpdateRequest, params: RequestParams = {}) =>
    this.request<InitiatePlaidTokenUpdateData, Status>({
      path: `/api/v1/plaid/initiate-token-update`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags merge
   * @name MergeExchangePublicLinkTokenForAccountToken
   * @request POST:/api/v1/merge/exchange-token
   * @response `200` `MergeExchangePublicLinkTokenForAccountTokenData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  mergeExchangePublicLinkTokenForAccountToken = (
    body: MergeExchangePublicLinkTokenForAccountTokenRequest,
    params: RequestParams = {},
  ) =>
    this.request<MergeExchangePublicLinkTokenForAccountTokenData, Status>({
      path: `/api/v1/merge/exchange-token`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
 * @description MergeGetPublicLinkToken enables the client to get a link_token to initialize a Link session for your end user.
 *
 * @tags merge
 * @name MergeGetPublicLinkToken
 * @summary Link utilizes a series of token exchanges to securely authenticate your users' integrations.
1. Get a link_token to initialize a Link session for your end user.
2. Make Link appear in your frontend.
3. Swap for an account_token, which authenticates future requests to the Unified API.
 * @request POST:/api/v1/merge/initiate-token-exchange
 * @response `200` `MergeGetPublicLinkTokenData` A successful response.
 * @response `400` `any` Request failed due to invalid input.
 * @response `404` `any` Request failed due to incorrect path.
 * @response `500` `any` Request failed due to internal server error.
 * @response `default` `Status` An unexpected error response.
 */
  mergeGetPublicLinkToken = (body: MergeGetPublicLinkTokenRequest, params: RequestParams = {}) =>
    this.request<MergeGetPublicLinkTokenData, Status>({
      path: `/api/v1/merge/initiate-token-exchange`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enabled simfiny to process triggered webhooks from stripe
   *
   * @tags webhook
   * @name ProcessStripeWebhook
   * @summary Processes a webhook obtained from stripe
   * @request POST:/api/v1/stripe/webhook
   * @response `200` `ProcessStripeWebhookData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  processStripeWebhook = (body: StripeWebhookRequest, params: RequestParams = {}) =>
    this.request<ProcessStripeWebhookData, Status>({
      path: `/api/v1/stripe/webhook`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint enabled simfiny to process triggered webhooks
   *
   * @tags webhook
   * @name ProcessWebhook
   * @summary Processes a webhook obtained from plaid
   * @request POST:/api/v1/plaid/webhook
   * @response `200` `ProcessWebhookData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  processWebhook = (body: ProcessWebhookRequest, params: RequestParams = {}) =>
    this.request<ProcessWebhookData, Status>({
      path: `/api/v1/plaid/webhook`,
      method: "POST",
      body: body,
      type: ContentType.Json,
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
  /**
   * @description This API could accept user_id and month as input parameters and return the aggregated transactions for that user and month.
   *
   * @tags analytics, transaction, category
   * @name TransactionAggregates
   * @summary Returns the aggregated transactions for a user and month
   * @request GET:/api/v1/analytics/transaction-aggregates/{userId}
   * @response `200` `TransactionAggregatesData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  transactionAggregates = (
    userId: string,
    query?: {
      locationCity?: string;
      merchantName?: string;
      /** @format int64 */
      month?: number;
      /** @format int64 */
      pageNumber?: string;
      /**
       * Number of items to return per page.
       * @format int64
       */
      pageSize?: string;
      paymentChannel?: string;
      personalFinanceCategoryPrimary?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<TransactionAggregatesData, Status>({
      path: `/api/v1/analytics/transaction-aggregates/${userId}`,
      method: "GET",
      query: query,
      ...params,
    });
  /**
   * @description This endpoint updates a bank account if the user record id and bank account id exists
   *
   * @tags bank account
   * @name UpdateBankAccount
   * @summary update a bank account for a given user profile
   * @request PUT:/api/v1/bank-account
   * @response `200` `UpdateBankAccountData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  updateBankAccount = (body: UpdateBankAccountRequest, params: RequestParams = {}) =>
    this.request<UpdateBankAccountData, Status>({
      path: `/api/v1/bank-account`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint updates a budget
   *
   * @tags budget
   * @name UpdatesBudget
   * @summary updates a budget
   * @request PUT:/api/v1/budget
   * @response `200` `UpdatesBudgetData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  updatesBudget = (body: UpdateBudgetRequest, params: RequestParams = {}) =>
    this.request<UpdatesBudgetData, Status>({
      path: `/api/v1/budget`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint updates a smart goal
   *
   * @tags smart goals
   * @name UpdateSmartGoal
   * @summary update a smart goal
   * @request PUT:/api/v1/smart-goal
   * @response `200` `UpdateSmartGoalData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  updateSmartGoal = (body: UpdateSmartGoalRequest, params: RequestParams = {}) =>
    this.request<UpdateSmartGoalData, Status>({
      path: `/api/v1/smart-goal`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint updates a milestone
   *
   * @tags milestone
   * @name UpdatesMilestone
   * @summary updates a milestone
   * @request PUT:/api/v1/milestone
   * @response `200` `UpdatesMilestoneData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  updatesMilestone = (body: UpdateMilestoneRequest, params: RequestParams = {}) =>
    this.request<UpdatesMilestoneData, Status>({
      path: `/api/v1/milestone`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This endpoint performs an updates operation on a user profile based on the provided parametersThis update operation can span multiple services on specific cases (such as when the client is explicitly attempting to update the email of the user)All update operations are atomic by nature hence we should not expect any form of divergent state
   *
   * @tags user profile
   * @name UpdateUserProfile
   * @summary update a user profile
   * @request PUT:/api/v1/profile
   * @response `200` `UpdateUserProfileData` A successful response.
   * @response `400` `any` Request failed due to invalid input.
   * @response `404` `any` Request failed due to incorrect path.
   * @response `500` `any` Request failed due to internal server error.
   * @response `default` `Status` An unexpected error response.
   */
  updateUserProfile = (body: UpdateUserProfileRequest, params: RequestParams = {}) =>
    this.request<UpdateUserProfileData, Status>({
      path: `/api/v1/profile`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      ...params,
    });
}
