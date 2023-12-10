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

/**
 * Account Balance History
 * This message is used to represent the balance history of an account.
 */
export interface AccountBalanceHistory {
  accountId?: string;
  /** @format double */
  balance?: number;
  id?: string;
  isoCurrencyCode?: string;
  profileType?: FinancialUserProfileType;
  /** @format int64 */
  sign?: number;
  /** @format date-time */
  time?: string;
  /** @format uint64 */
  userId?: string;
}

/**
 * An actionable insight serves as a basic insight users
 * can leverage and act upon and is typically generated based off of their financial contexts
 */
export interface ActionableInsight {
  /** for each user we generate a detailed actionable insights for them to see */
  detailedAction?: string;
  /**
   * the time the insight was generated
   * @format date-time
   */
  generatedTime?: string;
  /** @format uint64 */
  id?: string;
  /** for each user we generate a summarized insight targeted at optimizing a certain condition */
  summarizedAction?: string;
  /** associated tags with the generated insights */
  tags?: Array<string>;
}

export type AddDefaultPocketsToBankAccountData = any;

export interface AddDefaultPocketsToBankAccountRequest {
  /**
   * The bank account id
   * Validations:
   * - bank_account_id must be greater than 0
   * @format uint64
   */
  bankAccountId: string;
  profileType: FinancialUserProfileType;
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   * @format uint64
   */
  userId: string;
}

export interface AddDefaultPocketsToBankAccountResponse {
  /** The bank account id */
  bankAccount?: BankAccount;
}

export type AddNoteToRecurringTransactionData = any;

/** AddNoteToRecurringTransactionResponse is the responsed obtained after we add a note to a transaction */
export interface AddNoteToRecurringTransactionResponse {
  /**
   * The transaction id
   * Message representing recurring transactions associated with a Plaid account.
   */
  transaction?: PlaidAccountRecurringTransaction;
}

export type AddNoteToSmartGoalData = any;

export interface AddNoteToSmartGoalRequest {
  /**
   * The note to add
   * Validations:
   * - cannot be nil hence required
   */
  note: SmartNote;
  /**
   * The smart goal id
   * Validations:
   * - smart_goal_id must be greater than 0
   * @format uint64
   */
  smartGoalId: string;
}

export interface AddNoteToSmartGoalResponse {
  /**
   * The smart goal id
   * SmartGoal: The Goals table stores information about each financial goal, including the name of the goal,
   * its description, the target amount of money the user wants to save or invest, and the expected date of completion.
   *
   * The Goals table also includes columns for the start date of the goal, the current amount of money saved or
   * invested towards the goal, and a boolean flag indicating whether the goal has been achieved.
   * These additional columns allow the user to track their progress towards the goal and see how much
   * more they need to save or invest to reach their target amount.
   */
  goal?: SmartGoal;
}

export type AddNoteToTransactionData = any;

/** AddNoteToTransactionResponse is the responsed obtained after we add a note to a transaction */
export interface AddNoteToTransactionResponse {
  /**
   * The transaction id
   * Message representing Plaid account transactions.
   */
  transaction?: PlaidAccountTransaction;
}

/**
 * `Any` contains an arbitrary serialized protocol buffer message along with a
 * URL that describes the type of the serialized message.
 *
 * Protobuf library provides support to pack/unpack Any values in the form
 * of utility functions or additional generated methods of the Any type.
 *
 * Example 1: Pack and unpack a message in C++.
 *
 *     Foo foo = ...;
 *     Any any;
 *     any.PackFrom(foo);
 *     ...
 *     if (any.UnpackTo(&foo)) {
 *       ...
 *     }
 *
 * Example 2: Pack and unpack a message in Java.
 *
 *     Foo foo = ...;
 *     Any any = Any.pack(foo);
 *     ...
 *     if (any.is(Foo.class)) {
 *       foo = any.unpack(Foo.class);
 *     }
 *
 * Example 3: Pack and unpack a message in Python.
 *
 *     foo = Foo(...)
 *     any = Any()
 *     any.Pack(foo)
 *     ...
 *     if any.Is(Foo.DESCRIPTOR):
 *       any.Unpack(foo)
 *       ...
 *
 * Example 4: Pack and unpack a message in Go
 *
 *      foo := &pb.Foo{...}
 *      any, err := anypb.New(foo)
 *      if err != nil {
 *        ...
 *      }
 *      ...
 *      foo := &pb.Foo{}
 *      if err := any.UnmarshalTo(foo); err != nil {
 *        ...
 *      }
 *
 * The pack methods provided by protobuf library will by default use
 * 'type.googleapis.com/full.type.name' as the type URL and the unpack
 * methods only use the fully qualified type name after the last '/'
 * in the type URL, for example "foo.bar.com/x/y.z" will yield type
 * name "y.z".
 *
 *
 * JSON
 *
 * The JSON representation of an `Any` value uses the regular
 * representation of the deserialized, embedded message, with an
 * additional field `@type` which contains the type URL. Example:
 *
 *     package google.profile;
 *     message Person {
 *       string first_name = 1;
 *       string last_name = 2;
 *     }
 *
 *     {
 *       "@type": "type.googleapis.com/google.profile.Person",
 *       "firstName": <string>,
 *       "lastName": <string>
 *     }
 *
 * If the embedded message type is well-known and has a custom JSON
 * representation, that representation will be embedded adding a field
 * `value` which holds the custom JSON in addition to the `@type`
 * field. Example (for message [google.protobuf.Duration][]):
 *
 *     {
 *       "@type": "type.googleapis.com/google.protobuf.Duration",
 *       "value": "1.212s"
 *     }
 */
export interface Any {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   *
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   *
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   *
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  "@type"?: string;
  [key: string]: any;
}

export interface Apr {
  /** @format double */
  balanceSubjectToApr?: number;
  /** @format uint64 */
  id?: string;
  /** @format double */
  interestChargeAmount?: number;
  /** @format double */
  percentage?: number;
  type?: string;
}

export interface BankAccount {
  /**
   * the bank account balance
   * @format float
   */
  balance: number;
  /** @format uint64 */
  balanceLimit?: string;
  /** the bank account currency */
  currency: string;
  /** @format double */
  currentFunds: number;
  /**
   * id
   * @format uint64
   */
  id?: string;
  /** the bank account name */
  name: string;
  /** the bank account number */
  number: string;
  /** plaid account id mapped to this bank account */
  plaidAccountId?: string;
  /**
   * the set of "virtualized accounts this user witholds"
   * NOTE: these pockets are automatically created by the system
   * when a user connects a bank account
   */
  pockets?: Array<Pocket>;
  /** the set of subscriptions tied to this account */
  recurringTransactions?: Array<PlaidAccountRecurringTransaction>;
  /** the bank account status */
  status?: BankAccountStatus;
  /** account subtype */
  subtype?: string;
  /** the set of transactions tied to this account */
  transactions?: Array<PlaidAccountTransaction>;
  /** the bank account type */
  type: BankAccountType;
  /**
   * the user id to which this bank account is tied to
   * @format uint64
   */
  userId?: string;
}

/** @default "BANK_ACCOUNT_STATUS_UNSPECIFIED" */
export type BankAccountStatus =
  | "BANK_ACCOUNT_STATUS_UNSPECIFIED"
  | "BANK_ACCOUNT_STATUS_ACTIVE"
  | "BANK_ACCOUNT_STATUS_INACTIVE";

/** @default "BANK_ACCOUNT_TYPE_UNSPECIFIED" */
export type BankAccountType = "BANK_ACCOUNT_TYPE_UNSPECIFIED" | "BANK_ACCOUNT_TYPE_PLAID" | "BANK_ACCOUNT_TYPE_MANUAL";

/**
 * The Budgets table stores information about each budget created by the user,
 * including the name of the budget, the start and end dates, and the user ID.
 */
export interface Budget {
  /**
   * category associated with the goal
   * The Categories table stores information about the different categories of expenses or income,
   * such as "Housing", "Food", "Transportation", and "Entertainment". Each category has one or more
   * subcategories, which are stored in the Subcategories table.
   *
   * For example, the "Housing" category might have subcategories for "Rent", "Utilities", and "Home Maintenance".
   */
  category?: Category;
  description?: string;
  /** the time the goal was updated */
  endDate?: string;
  /**
   * id
   * @format uint64
   */
  id?: string;
  /**
   * The name of the budget
   * @minLength 10
   * @example "Buy a car"
   */
  name?: string;
  /** the time the goal was created */
  startDate?: string;
}

export type BulkUpdateRecurringTransactionData = any;

/** BulkUpdateRecurringTransactionRequest is the bulk update transaction request */
export interface BulkUpdateRecurringTransactionRequest {
  /**
   * The transactions to update
   * Validations:
   * - cannot be nil hence required
   */
  transactions: Array<PlaidAccountRecurringTransaction>;
}

/** BulkUpdateRecurringTransactionResponse is the bulk update transaction response */
export interface BulkUpdateRecurringTransactionResponse {
  /** The transactions that were successfully updated */
  transactions?: Array<PlaidAccountRecurringTransaction>;
}

export type BulkUpdateTransactionData = any;

/** BulkUpdateTransactionRequest is the bulk update transaction request */
export interface BulkUpdateTransactionRequest {
  /**
   * The transactions to update
   * Validations:
   * - cannot be nil hence required
   */
  transactions: Array<PlaidAccountTransaction>;
}

/** BulkUpdateTransactionResponse is the bulk update transaction response */
export interface BulkUpdateTransactionResponse {
  /** The transactions that were successfully updated */
  transactions?: Array<PlaidAccountTransaction>;
}

/**
 * The Categories table stores information about the different categories of expenses or income,
 * such as "Housing", "Food", "Transportation", and "Entertainment". Each category has one or more
 * subcategories, which are stored in the Subcategories table.
 *
 * For example, the "Housing" category might have subcategories for "Rent", "Utilities", and "Home Maintenance".
 */
export interface Category {
  /**
   * The description of the category
   * @minLength 10
   * @example "Housing is a category primarily for housing"
   */
  description?: string;
  /**
   * id
   * @format uint64
   */
  id?: string;
  /**
   * The name of the category
   * @minLength 3
   * @example "Housing"
   */
  name?: string;
  /** the sub categories of the category */
  subcategories?: Array<string>;
}

/**
 * CategoryMetricsFinancialSubProfile
 * This message is used to represent the financial sub profile of a category.
 */
export interface CategoryMetricsFinancialSubProfile {
  /** @format int64 */
  month?: number;
  personalFinanceCategoryPrimary?: string;
  profileType?: FinancialUserProfileType;
  /** @format double */
  spentLastMonth?: number;
  /** @format double */
  spentLastSixMonths?: number;
  /** @format double */
  spentLastTwoWeeks?: number;
  /** @format double */
  spentLastTwoYears?: number;
  /** @format double */
  spentLastWeek?: number;
  /** @format double */
  spentLastYear?: number;
  /** @format uint64 */
  transactionCount?: string;
  /** @format uint64 */
  userId?: string;
}

/**
 * CategoryMonthlyExpenditure represents the monthly expenditure of a category.
 * This message is used to represent the monthly expenditure of a category.
 */
export interface CategoryMonthlyExpenditure {
  /** @format int64 */
  month?: number;
  personalFinanceCategoryPrimary?: string;
  profileType?: FinancialUserProfileType;
  /** @format double */
  totalSpending?: number;
  /** @format uint64 */
  userId?: string;
}

/**
 * CategoryMonthlyIncome
 * This message is used to represent the monthly income of a category.
 */
export interface CategoryMonthlyIncome {
  /** @format int64 */
  month?: number;
  personalFinanceCategoryPrimary?: string;
  profileType?: FinancialUserProfileType;
  /** @format double */
  totalIncome?: number;
  /** @format uint64 */
  userId?: string;
}

/**
 * CategoryMonthlyTransactionCount
 * This message is used to represent the monthly transaction count of a category.
 */
export interface CategoryMonthlyTransactionCount {
  /** @format int64 */
  month?: number;
  personalFinanceCategoryPrimary?: string;
  profileType?: FinancialUserProfileType;
  /** @format int64 */
  transactionCount?: number;
  /** @format uint64 */
  userId?: string;
}

export type CreateBankAccountData = any;

/**
 * CreateBankAccountRequest: Represents the request object invoked against the financial
 * service to create a bank account for a given user
 */
export interface CreateBankAccountPayload {
  /**
   * The bank account to create
   * Validations:
   * - cannot be nil hence required
   */
  bankAccount: BankAccount;
  /**
   * The linkId to associate this bank account with
   * @format uint64
   */
  linkId: string;
  profileType: FinancialUserProfileType;
}

/**
 * CreateBankAccountResponse: Represents the response object returned as a response to
 * the `create bank account` request
 */
export interface CreateBankAccountResponse {
  /**
   * The bank account id
   * @format uint64
   */
  bankAccountId?: string;
}

export type CreateBudgetData = any;

export interface CreateBudgetRequest {
  /**
   * The budget to create
   * Validations:
   * - cannot be nil hence required
   * The Budgets table stores information about each budget created by the user,
   * including the name of the budget, the start and end dates, and the user ID.
   */
  budget: Budget;
  /**
   * The milestone to associate this budget with
   * @format uint64
   */
  milestroneId: string;
}

export interface CreateBudgetResponse {
  /**
   * The budget id
   * @format uint64
   */
  budgetId?: string;
}

export type CreateLinkData = any;

export interface CreateManualLinkRequest {
  /**
   * The manual account link
   * A Link represents a login at a financial institution. A single end-user of your application might have accounts at different financial
   * institutions, which means they would have multiple different Items. An Item is not the same as a financial institution account,
   * although every account will be associated with an Item. For example, if a user has one login at their bank that allows them to access
   * both their checking account and their savings account, a single Item would be associated with both of those accounts. Each Item
   * linked within your application will have a corresponding access_token, which is a token that you can use to make API requests related
   * to that specific Item.
   * Two Items created for the same set of credentials at the same institution will be considered different and not share the same item_id.
   */
  manualAccountLink: Link;
  profileType: FinancialUserProfileType;
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   * @format uint64
   */
  userId: string;
}

export interface CreateManualLinkResponse {
  /**
   * The link's id
   * @format uint64
   */
  linkId?: string;
}

export type CreateMilestoneData = any;

export interface CreateMilestoneRequest {
  /**
   * The milestone to create
   * Validations:
   * - cannot be nil hence required
   */
  milestone: Milestone;
  /**
   * The smart goal id
   * Validations:
   * - smart_goal_id must be greater than 0
   * @format uint64
   */
  smartGoalId: string;
}

export interface CreateMilestoneResponse {
  /**
   * The milestone id
   * @format uint64
   */
  milestoneId?: string;
}

export type CreateSmartGoalData = any;

export interface CreateSmartGoalRequest {
  /**
   * The pocket account id
   * Validations:
   * - pocket_account_id must be greater than 0
   * @format uint64
   */
  pocketId: string;
  /**
   * The smart goal to create
   * Validations:
   * - cannot be nil hence required
   * SmartGoal: The Goals table stores information about each financial goal, including the name of the goal,
   * its description, the target amount of money the user wants to save or invest, and the expected date of completion.
   *
   * The Goals table also includes columns for the start date of the goal, the current amount of money saved or
   * invested towards the goal, and a boolean flag indicating whether the goal has been achieved.
   * These additional columns allow the user to track their progress towards the goal and see how much
   * more they need to save or invest to reach their target amount.
   */
  smartGoal: SmartGoal;
}

export interface CreateSmartGoalResponse {
  /**
   * The smart goal id
   * @format uint64
   */
  smartGoalId?: string;
}

export type CreateSubscriptionData = any;

export interface CreateSubscriptionRequest {
  priceId: string;
  profileType: FinancialUserProfileType;
  /** @format uint64 */
  userId: string;
}

export interface CreateSubscriptionResponse {
  paymentIntentClientSecret?: string;
  subscriptionId?: string;
}

export type CreateUserProfileData = any;

/**
 * CreateUserProfileRequest: Represents the request object invoked against the user
 * service to create a user profile
 */
export interface CreateUserProfileRequest {
  /** the email of the account to create */
  email: string;
  /**
   * User profile to create
   * Validations:
   * - cannot be nil hence required
   */
  profile: FinancialUserProfile;
}

/**
 * CreateUserProfileResponse: Represents the response object returned as a response to
 * the `create user profile` request
 */
export interface CreateUserProfileResponse {
  /** @format uint64 */
  userId?: string;
}

export interface CreditAccount {
  /** the aprs */
  aprs?: Array<Apr>;
  /**
   * the bank account balance
   * @format float
   */
  balance?: number;
  /**
   * balance limit
   * @format uint64
   */
  balanceLimit?: string;
  /**
   * current funds on the account
   * @format double
   */
  currentFunds?: number;
  /**
   * id
   * @format uint64
   */
  id?: string;
  /** wether the account is overdue */
  isOverdue?: boolean;
  /**
   * the last payment amount
   * @format double
   */
  lastPaymentAmount?: number;
  /** the last payment date */
  lastPaymentDate?: string;
  /**
   * the last statement balance
   * @format double
   */
  lastStatementBalance?: number;
  /** the last statement issue date */
  lastStatementIssueDate?: string;
  /**
   * the minimum amount due date
   * @format double
   */
  minimumAmountDueDate?: number;
  /**
   * the minimum payment amount
   * @format double
   */
  minimumPaymentAmount?: number;
  /** the account name */
  name?: string;
  /** the next payment date */
  nextPaymentDate?: string;
  /** the next payment due date */
  nextPaymentDueDate?: string;
  /** the bank account number */
  number?: string;
  /** plaid account id mapped to this bank account */
  plaidAccountId?: string;
  /** the set of subscriptions tied to this account */
  recurringTransactions?: Array<PlaidAccountRecurringTransaction>;
  /** the bank account status */
  status?: BankAccountStatus;
  /** accoint subtype */
  subtype?: string;
  /** the set of transactions tied to this account */
  transactions?: Array<PlaidAccountTransaction>;
  /** the bank account type */
  type?: string;
  /**
   * the user id to which this bank account is tied to
   * @format uint64
   */
  userId?: string;
}

/**
 * DebtToIncomeRatio
 * This message is used to represent the debt to income ratio of a user.
 */
export interface DebtToIncomeRatio {
  /** @format int64 */
  month?: number;
  profileType?: FinancialUserProfileType;
  /** @format double */
  ratio?: number;
  /** @format uint64 */
  userId?: string;
}

export interface DeleteBankAccountResponse {
  /**
   * The bank account id
   * @example "true"
   */
  deleted?: boolean;
}

export type DeleteBudgetData = any;

export interface DeleteBudgetResponse {
  /** The budget id */
  deleted?: boolean;
}

export type DeleteLinkData = any;

export interface DeleteLinkResponse {
  /**
   * The link's id
   * @format uint64
   */
  linkId?: string;
}

export type DeleteMilestoneData = any;

export interface DeleteMilestoneResponse {
  /** The milestone id */
  deleted?: boolean;
}

export type DeleteNoteFromRecurringTransactionData = any;

export interface DeleteNoteFromRecurringTransactionResponse {
  /** The transaction id */
  deleted?: boolean;
}

export type DeleteNoteFromSmartGoalData = any;

export interface DeleteNoteFromSmartGoalResponse {
  /** The smart goal id */
  deleted?: boolean;
}

export type DeleteNoteFromTransactionData = any;

export interface DeleteNoteFromTransactionResponse {
  /** The transaction id */
  deleted?: boolean;
}

export type DeletePocketData = any;

export interface DeletePocketResponse {
  /** The pocket id */
  deleted?: boolean;
}

/** DeleteTransactionResponse is the delete transaction response */
export interface DeleteRecurringTransactionResponse {
  /** the transaction that was successfully deleted */
  deleted?: boolean;
}

export type DeleteSmartGoalData = any;

export interface DeleteSmartGoalResponse {
  /** The smart goal id */
  deleted?: boolean;
}

export type DeleteTransaction2Data = any;

export type DeleteTransactionData = any;

/** DeleteTransactionResponse is the delete transaction response */
export interface DeleteTransactionResponse {
  /** the transaction that was successfully deleted */
  deleted?: boolean;
}

export type DeleteUserProfile2Data = any;

export type DeleteUserProfileData = any;

/**
 * DeleteUserProfileResponse: Represents the response object returned as a response to
 * the `delete user profile` request
 */
export interface DeleteUserProfileResponse {
  profileDeleted?: boolean;
}

export type ExchangePlaidTokenData = any;

/**
 * ExpenseMetrics
 * This message is used to represent the expense metrics of a user.
 */
export interface ExpenseMetrics {
  /** @format int64 */
  month?: number;
  personalFinanceCategoryPrimary?: string;
  profileType?: FinancialUserProfileType;
  /** @format double */
  totalExpenses?: number;
  /** @format uint64 */
  transactionCount?: string;
  /** @format uint64 */
  userId?: string;
}

/**
 * ExpenseMetricsFinancialSubProfileMetrics
 * This message is used to represent the financial sub profile metrics of a user.
 */
export interface ExpenseMetricsFinancialSubProfileMetrics {
  /** @format double */
  averageMonthlyDiscretionarySpending?: number;
  /** @format double */
  averageMonthlyRecurringSpending?: number;
  /** @format int64 */
  month?: number;
  profileType?: FinancialUserProfileType;
  /** @format double */
  spentLastMonth?: number;
  /** @format double */
  spentLastSixMonths?: number;
  /** @format double */
  spentLastWeek?: number;
  /** @format uint64 */
  userId?: string;
}

/** @default "FINANCIAL_ACCOUNT_TYPE_UNSPECIFIED" */
export type FinancialAccountType =
  | "FINANCIAL_ACCOUNT_TYPE_UNSPECIFIED"
  | "FINANCIAL_ACCOUNT_TYPE_BANK"
  | "FINANCIAL_ACCOUNT_TYPE_INVESTMENT"
  | "FINANCIAL_ACCOUNT_TYPE_CREDIT"
  | "FINANCIAL_ACCOUNT_TYPE_MORTGAGE"
  | "FINANCIAL_ACCOUNT_TYPE_STUDENT_LOAN";

/**
 * FinancialProfile
 * This message is used to represent the financial profile of a user.
 */
export interface FinancialProfile {
  /** @format int64 */
  month?: number;
  mostExpensiveCategory?: string;
  /** @format uint64 */
  numberOfTransactions?: string;
  profileType?: FinancialUserProfileType;
  /** @format double */
  totalExpenses?: number;
  /** @format double */
  totalIncome?: number;
  /** @format uint64 */
  userId?: string;
}

/**
 * FinancialUserProfile stores high level user profile details
 * such as the id, user_id tied to the profile, and many more
 */
export interface FinancialUserProfile {
  actionableInsights?: Array<ActionableInsight>;
  actionablePersonalInsights?: Array<PersonalActionableInsight>;
  email?: string;
  /**
   * id
   * @format uint64
   */
  id?: string;
  /** a user profile can have many links (connected institutions) of which finanical accounts are tied to (checking, savings, etc) */
  link?: Array<Link>;
  profileType?: FinancialUserProfileType;
  stripeCustomerId?: string;
  /** the stripe subscriptions the user profile actively maintains */
  stripeSubscriptions?: StripeSubscription;
  /**
   * the user id tied to the profile
   * @format uint64
   */
  userId?: string;
}

/** @default "FINANCIAL_USER_PROFILE_TYPE_UNSPECIFIED" */
export type FinancialUserProfileType =
  | "FINANCIAL_USER_PROFILE_TYPE_UNSPECIFIED"
  | "FINANCIAL_USER_PROFILE_TYPE_USER"
  | "FINANCIAL_USER_PROFILE_TYPE_BUSINESS";

/**
 * The Forecast table stores information about each forecast generated for a particular goal,
 * including the forecast date, the forecasted amount of money saved or invested for the
 * goal by the target date, and the variance between the forecasted and target amounts.
 * This allows the user to track how well they are progressing towards their goal and make adjustments as needed.
 */
export interface Forecast {
  /**
   * the forecasted amount of the goal
   * @example "Active"
   */
  forecastedAmount?: string;
  /**
   * the forecasted completion date of the goal
   * @example "Active"
   */
  forecastedCompletionDate?: string;
  /**
   * id
   * @format uint64
   */
  id?: string;
  /**
   * the forecasted variance of the goal between the forecasted and target amounts
   * @example "Active"
   */
  varianceAmount?: string;
}

export type GetAccountBalanceData = any;

export type GetAccountBalanceHistoryData = any;

export interface GetAccountBalanceHistoryResponse {
  /** List of account balance history records for specific account */
  accountBalanceHistory?: Array<AccountBalanceHistory>;
}

export type GetAllBudgetsData = any;

export interface GetAllBudgetsResponse {
  /** The budgets */
  budgets?: Array<Budget>;
}

export type GetBankAccountData = any;

/**
 * GetBankAccountResponse: Represents the response object returned as a response to
 * the `get bank account` request
 */
export interface GetBankAccountResponse {
  /** The bank account */
  bankAccount?: BankAccount;
}

export type GetBudgetData = any;

export interface GetBudgetResponse {
  /**
   * The budget
   * The Budgets table stores information about each budget created by the user,
   * including the name of the budget, the start and end dates, and the user ID.
   */
  budget?: Budget;
}

export type GetCategoryMonthlyTransactionCountData = any;

export interface GetCategoryMonthlyTransactionCountResponse {
  categoryMonthlyTransactionCount?: Array<CategoryMonthlyTransactionCount>;
  /** @format int64 */
  nextPageNumber?: string;
}

export type GetDebtToIncomeRatioData = any;

export interface GetDebtToIncomeRatioResponse {
  debtToIncomeRatios?: Array<DebtToIncomeRatio>;
  /** @format int64 */
  nextPageNumber?: string;
}

export type GetExpenseMetricsData = any;

export interface GetExpenseMetricsResponse {
  expenseMetrics?: Array<ExpenseMetrics>;
  /** @format int64 */
  nextPageNumber?: string;
}

export type GetFinancialProfileData = any;

export interface GetFinancialProfileResponse {
  financialProfiles?: Array<FinancialProfile>;
  /** @format int64 */
  nextPageNumber?: string;
}

export type GetForecastData = any;

export interface GetForecastResponse {
  /**
   * The forecast
   * The Forecast table stores information about each forecast generated for a particular goal,
   * including the forecast date, the forecasted amount of money saved or invested for the
   * goal by the target date, and the variance between the forecasted and target amounts.
   * This allows the user to track how well they are progressing towards their goal and make adjustments as needed.
   */
  forecast?: Forecast;
}

export interface GetHistoricalAccountBalanceResponse {
  historicalAccountBalance?: Array<AccountBalanceHistory>;
}

export type GetIncomeExpenseRatioData = any;

export interface GetIncomeExpenseRatioResponse {
  incomeExpenseRatios?: Array<IncomeExpenseRatio>;
  /** @format int64 */
  nextPageNumber?: string;
}

export type GetIncomeMetricsData = any;

export interface GetIncomeMetricsResponse {
  incomeMetrics?: Array<IncomeMetrics>;
  /** @format int64 */
  nextPageNumber?: string;
}

export interface GetInvestmentAcccountResponse {
  /** The investment account */
  investmentAccount?: InvestmentAccount;
}

export type GetInvestmentAccountData = any;

export type GetLiabilityAccountData = any;

export interface GetLiabilityAccountResponse {
  /** The liability account */
  liabilityAccount?: CreditAccount;
}

export type GetLinkData = any;

export interface GetLinkResponse {
  /**
   * The link
   * A Link represents a login at a financial institution. A single end-user of your application might have accounts at different financial
   * institutions, which means they would have multiple different Items. An Item is not the same as a financial institution account,
   * although every account will be associated with an Item. For example, if a user has one login at their bank that allows them to access
   * both their checking account and their savings account, a single Item would be associated with both of those accounts. Each Item
   * linked within your application will have a corresponding access_token, which is a token that you can use to make API requests related
   * to that specific Item.
   * Two Items created for the same set of credentials at the same institution will be considered different and not share the same item_id.
   */
  link?: Link;
}

export type GetLinksData = any;

export interface GetLinksResponse {
  /** The links */
  links?: Array<Link>;
}

export type GetMelodyFinancialContextData = any;

export interface GetMelodyFinancialContextResponse {
  /**
   * MelodyFinancialContext represents the financial context of a user.
   * This message is used to represent the financial context of a user.
   */
  melodyFinancialContext?: MelodyFinancialContext;
}

export type GetMerchantMonthlyExpenditureData = any;

export interface GetMerchantMonthlyExpenditureResponse {
  merchantMonthlyExpenditures?: Array<MerchantMonthlyExpenditure>;
  /** @format int64 */
  nextPageNumber?: string;
}

export type GetMilestoneData = any;

export interface GetMilestoneResponse {
  /** The milestone */
  milestone?: Milestone;
}

export interface GetMilestonesBySmartGoalIdResponse {
  /** The milestones */
  milestones?: Array<Milestone>;
}

export type GetMilestonesData = any;

export type GetMonthlyBalanceData = any;

export interface GetMonthlyBalanceResponse {
  monthlyBalances?: Array<MonthlyBalance>;
  /** @format int64 */
  nextPageNumber?: string;
}

export type GetMonthlyExpenditureData = any;

export interface GetMonthlyExpenditureResponse {
  monthlyExpenditures?: Array<MonthlyExpenditure>;
  /** @format int64 */
  nextPageNumber?: string;
}

export type GetMonthlyIncomeData = any;

export interface GetMonthlyIncomeResponse {
  monthlyIncomes?: Array<MonthlyIncome>;
  /** @format int64 */
  nextPageNumber?: string;
}

export type GetMonthlySavingsData = any;

export interface GetMonthlySavingsResponse {
  monthlySavings?: Array<MonthlySavings>;
  /** @format int64 */
  nextPageNumber?: string;
}

export type GetMonthlyTotalQuantityBySecurityAndUserData = any;

export interface GetMonthlyTotalQuantityBySecurityAndUserResponse {
  monthlyTotalQuantityBySecurityAndUser?: Array<MonthlyTotalQuantityBySecurityAndUser>;
  /** @format int64 */
  nextPageNumber?: string;
}

export type GetMonthlyTransactionCountData = any;

export interface GetMonthlyTransactionCountResponse {
  monthlyTransactionCounts?: Array<MonthlyTransactionCount>;
  /** @format int64 */
  nextPageNumber?: string;
}

export type GetMortageAccountData = any;

export interface GetMortgageAccountResponse {
  /** The mortage account */
  mortageAccount?: MortgageAccount;
}

export type GetNoteFromSmartGoalData = any;

export interface GetNoteFromSmartGoalResponse {
  /** The note */
  note?: SmartNote;
}

export type GetNoteFromTransactionData = any;

export interface GetNoteFromTransactionResponse {
  /** The note */
  note?: SmartNote;
}

export type GetNotesFromSmartGoalData = any;

export interface GetNotesFromSmartGoalResponse {
  /** The notes */
  notes?: Array<SmartNote>;
}

export type GetPaymentChannelMonthlyExpenditureData = any;

export interface GetPaymentChannelMonthlyExpenditureResponse {
  /** @format int64 */
  nextPageNumber?: string;
  paymentChannelMonthlyExpenditure?: Array<PaymentChannelMonthlyExpenditure>;
}

export type GetPocketData = any;

export interface GetPocketResponse {
  /** The pocket account */
  pocket?: Pocket;
}

export interface GetReCurringTransactionsResponse {
  /** The re-occuring transactions */
  reCcuringTransactions?: Array<ReOccuringTransaction>;
}

export type GetRecurringTransactionData = any;

/** GetRecurringTransactionResponse is the get transaction response */
export interface GetRecurringTransactionResponse {
  /**
   * the transaction queried
   * Message representing recurring transactions associated with a Plaid account.
   */
  transaction?: PlaidAccountRecurringTransaction;
}

export type GetRecurringTransactionsData = any;

export type GetSmartGoalsByPocketIdData = any;

export interface GetSmartGoalsByPocketIdResponse {
  /** The smart goals */
  smartGoals?: Array<SmartGoal>;
}

export type GetSplitTransactionData = any;

export interface GetSplitTransactionResponse {
  /** The split transactions */
  splitTransactions?: Array<TransactionSplit>;
}

export type GetStudentLoanAccountData = any;

export interface GetStudentLoanAccountResponse {
  /** The student loan account */
  studentLoanAccount?: StudentLoanAccount;
}

export type GetTotalInvestmentBySecurityData = any;

export interface GetTotalInvestmentBySecurityResponse {
  /** @format int64 */
  nextPageNumber?: string;
  totalInvestmentBySecurity?: Array<TotalInvestmentBySecurity>;
}

export interface GetTransactionAggregatesResponse {
  /** @format int64 */
  nextPageNumber?: string;
  transactionAggregates?: Array<TransactionAggregatesByMonth>;
}

export type GetTransactionData = any;

/** GetTransactionResponse is the get transaction response */
export interface GetTransactionResponse {
  /**
   * the transaction queried
   * Message representing Plaid account transactions.
   */
  transaction?: PlaidAccountTransaction;
}

export type GetTransactions2Data = any;

export interface GetTransactionsBetweenTimeRangesResponse {
  /**
   * Current page number
   * @format int64
   */
  currentPage?: number;
  /**
   * Total number of pages
   * @format int64
   */
  totalAges?: number;
  /**
   * Total number of transactions in the month
   * @format uint64
   */
  totalTransactions?: string;
  /** The transactions */
  transactions?: Array<PlaidAccountTransaction>;
}

export type GetTransactionsByTimeData = any;

export type GetTransactionsData = any;

export interface GetTransactionsForBankAccountResponse {
  /** @format uint64 */
  nextPageNumber?: string;
  /** The transactions */
  transactions?: Array<Transaction>;
}

export type GetTransactionsForPastMonthData = any;

export interface GetTransactionsForPastMonthResponse {
  /**
   * Current page number
   * @format int64
   */
  currentPage?: number;
  /**
   * Total number of pages
   * @format int64
   */
  totalPages?: number;
  /**
   * Total number of transactions in the month
   * @format uint64
   */
  totalTransactions?: string;
  transactions?: Array<PlaidAccountTransaction>;
}

export type GetTransactionsForPastWeekData = any;

export interface GetTransactionsForPastWeekResponse {
  /**
   * Current page number
   * @format int64
   */
  currentPage?: number;
  /**
   * Total number of pages
   * @format int64
   */
  totalPages?: number;
  /**
   * Total number of transactions in the week
   * @format uint64
   */
  totalTransactions?: string;
  transactions?: Array<PlaidAccountTransaction>;
}

export interface GetTransactionsResponse {
  /** @format uint64 */
  nextPageNumber?: string;
  /** The transactions */
  transactions?: Array<Transaction>;
}

export type GetUserAccountBalanceHistoryData = any;

export interface GetUserAccountBalanceHistoryResponse {
  /** List of account balance history records */
  accountBalanceHistory?: Array<AccountBalanceHistory>;
}

export type GetUserCategoryMonthlyExpenditureData = any;

export interface GetUserCategoryMonthlyExpenditureResponse {
  /** List of CategoryMonthlyExpenditure records for the user */
  categoryMonthlyExpenditure?: Array<CategoryMonthlyExpenditure>;
  /** @format int64 */
  nextPageNumber?: string;
}

export type GetUserCategoryMonthlyIncomeData = any;

export interface GetUserCategoryMonthlyIncomeResponse {
  categoryMonthlyIncome?: Array<CategoryMonthlyIncome>;
  /** @format int64 */
  nextPageNumber?: string;
}

export type GetUserProfileData = any;

/**
 * GetUserProfileResponse: Represents the response object returned as a response to
 * the `get user profile` request
 */
export interface GetUserProfileResponse {
  /**
   * financial context for the user
   * MelodyFinancialContext represents the financial context of a user.
   * This message is used to represent the financial context of a user.
   */
  financialContext: MelodyFinancialContext;
  profile?: FinancialUserProfile;
}

/** @default "GOAL_TYPE_UNSPECIFIED" */
export type GoalType =
  | "GOAL_TYPE_UNSPECIFIED"
  | "GOAL_TYPE_SAVINGS"
  | "GOAL_TYPE_INVESTMENT"
  | "GOAL_TYPE_DEBT"
  | "GOAL_TYPE_EXPENSE";

export type HealthCheckData = any;

export interface HealthCheckResponse {
  healthy?: boolean;
}

/**
 * IncomeExpenseRatio
 * This message is used to represent the income expense ratio of a user.
 */
export interface IncomeExpenseRatio {
  /** @format int64 */
  month?: number;
  profileType?: FinancialUserProfileType;
  /** @format double */
  ratio?: number;
  /** @format uint64 */
  userId?: string;
}

/**
 * IncomeMetrics
 * This message is used to represent the income metrics of a user.
 */
export interface IncomeMetrics {
  /** @format int64 */
  month?: number;
  personalFinanceCategoryPrimary?: string;
  profileType?: FinancialUserProfileType;
  /** @format double */
  totalIncome?: number;
  /** @format uint64 */
  transactionCount?: string;
  /** @format uint64 */
  userId?: string;
}

/**
 * IncomeMetricsFinancialSubProfile
 * This message is used to represent the financial sub profile of a user.
 */
export interface IncomeMetricsFinancialSubProfile {
  /** @format double */
  incomeLastMonth?: number;
  /** @format double */
  incomeLastSixMonths?: number;
  /** @format double */
  incomeLastTwoMonths?: number;
  /** @format double */
  incomeLastTwoWeeks?: number;
  /** @format double */
  incomeLastYear?: number;
  /** @format int64 */
  month?: number;
  profileType?: FinancialUserProfileType;
  /** @format uint64 */
  userId?: string;
}

export type InitiatePlaidSetupData = any;

export type InitiatePlaidTokenUpdateData = any;

export interface InvesmentHolding {
  /**
   * @format double
   * @example "15"
   */
  costBasis?: number;
  /**
   * id
   * @format uint64
   */
  id?: string;
  /**
   * @format double
   * @example "13.73"
   */
  institutionPrice?: number;
  /** @example "2021-04-13" */
  institutionPriceAsOf?: string;
  /** @example "2022-06-07T23:01:00Z" */
  institutionPriceDatetime?: string;
  /**
   * @format double
   * @example "4437.35905"
   */
  institutionValue?: number;
  /** @example "USD" */
  isoCurrencyCode?: string;
  /**
   * The name of the investment holding
   * @minLength 3
   * @example "nfdkjfjksdhjhfjsdhjgf"
   */
  name?: string;
  /**
   * plaid account id
   * @example "k67E4xKvMlhmleEa4pg9hlwGGNnnEeixPolGm"
   */
  plaidAccountId?: string;
  /**
   * @format double
   * @example "25000"
   */
  quantity?: number;
  /** @example "vLRMV3MvY1FYNP91on35CJD5QN5rw9Fpa9qOL" */
  securityId?: string;
  /** @example "USD" */
  unofficialCurrencyCode?: string;
}

export interface InvestmentAccount {
  /**
   * the bank account balance
   * @format float
   */
  balance?: number;
  /** @format uint64 */
  balanceLimit?: string;
  /** @format double */
  currentFunds?: number;
  /** invesment holding is the set of securities this account witholds */
  holdings?: Array<InvesmentHolding>;
  /**
   * id
   * @format uint64
   */
  id?: string;
  /** the account name */
  name?: string;
  /** the bank account number */
  number?: string;
  /** plaid account id mapped to this bank account */
  plaidAccountId?: string;
  /** the set of securities this account witholds */
  securities?: Array<InvestmentSecurity>;
  /** the bank account status */
  status?: BankAccountStatus;
  /** accoint subtype */
  subtype?: string;
  /** the set of transactions tied to this account */
  transactions?: Array<PlaidAccountInvestmentTransaction>;
  /** the bank account type */
  type?: string;
  /**
   * the user id to which this bank account is tied to
   * @format uint64
   */
  userId?: string;
}

export interface InvestmentSecurity {
  /**
   * @format double
   * @example " 0.140034616"
   */
  closePrice?: number;
  /** @example "2022-01-24" */
  closePriceAsOf?: string;
  /** @example "dfkjhdgjdhhgd" */
  cusip?: string;
  /**
   * id
   * @format uint64
   */
  id?: string;
  /** @example "ins_3" */
  institutionId?: string;
  /** @example "dfkjhdgjdhhgd" */
  institutionSecurityId?: string;
  /** @example "true" */
  isCashEquivalent?: boolean;
  /** @example "dfkjhdgjdhhgd" */
  isin?: string;
  /** @example "USD" */
  isoCurrencyCode?: string;
  /** @example "Dogecoin" */
  name?: string;
  /** @example "dfkjhdgjdhhgd" */
  proxySecurityId?: string;
  /** @example "vLRMV3MvY1FYNP91on35CJD5QN5rw9Fpa9qOL" */
  securityId?: string;
  /** @example "dfkjhdgjdhhgd" */
  sedol?: string;
  /** @example "DOGE" */
  tickerSymbol?: string;
  /** @example "cryptocurrency" */
  type?: string;
  /** @example "USD" */
  unofficialCurrencyCode?: string;
  /** @example "2022-06-07T23:01:00Z" */
  updateDatetime?: string;
}

/**
 * A Link represents a login at a financial institution. A single end-user of your application might have accounts at different financial
 * institutions, which means they would have multiple different Items. An Item is not the same as a financial institution account,
 * although every account will be associated with an Item. For example, if a user has one login at their bank that allows them to access
 * both their checking account and their savings account, a single Item would be associated with both of those accounts. Each Item
 * linked within your application will have a corresponding access_token, which is a token that you can use to make API requests related
 * to that specific Item.
 * Two Items created for the same set of credentials at the same institution will be considered different and not share the same item_id.
 */
export interface Link {
  /**
   * a link event - or client login event can have many connected bank accounts
   * for example a log in link against one instition like chase can have many account (checking and savings)
   * it is important though to ensure that if a link against an instition already exists, we dont fascilitate duplicated
   */
  bankAccounts?: Array<BankAccount>;
  /** credit accounts tied to a user */
  creditAccounts?: Array<CreditAccount>;
  customInstitutionName?: string;
  description?: string;
  errorCode?: string;
  expirationDate?: string;
  /**
   * id
   * @format uint64
   */
  id?: string;
  institutionName?: string;
  /**
   * a link event - or client login event can have many connected investment accounts
   * for example a log in link against one instition like fidelity can have many accounts (401k and investment account)
   * it is important though to ensure that if a link against an instition already exists, we dont fascilitate duplicated
   */
  investmentAccounts?: Array<InvestmentAccount>;
  lastManualSync?: string;
  lastSuccessfulUpdate?: string;
  linkStatus?: LinkStatus;
  /** the type of link this is ... can be either a manual or plaid link type */
  linkType?: LinkType;
  /** mortgage accounts tied to a user */
  mortgageAccounts?: Array<MortgageAccount>;
  newAccountsAvailable?: boolean;
  /** the id of the institution this link is tied to and against */
  plaidInstitutionId?: string;
  plaidLink?: PlaidLink;
  plaidNewAccountsAvailable?: boolean;
  plaidSync?: PlaidSync;
  shouldBeUpdated?: boolean;
  /** student loan accounts tied to a link */
  studentLoanAccounts?: Array<StudentLoanAccount>;
  /**
   * token object witholds an access token which is a token used to make API requests related to a specific Item. You will typically obtain an access_token
   * by calling /item/public_token/exchange. For more details, see the Token exchange flow. An access_token does not expire,
   * although it may require updating, such as when a user changes their password, or when working with European institutions
   * that comply with PSD2's 90-day consent window. For more information, see When to use update mode.
   * Access tokens should always be stored securely, and associated with the user whose data they represent.
   * If compromised, an access_token can be rotated via /item/access_token/invalidate. If no longer needed,
   * it can be revoked via /item/remove.(gorm.field).has_one = {disable_association_autocreate: false disable_association_autoupdate: false preload: true}];
   */
  token?: Token;
  updatedAt?: string;
}

/** @default "LINK_STATUS_UNSPECIFIED" */
export type LinkStatus =
  | "LINK_STATUS_UNSPECIFIED"
  | "LINK_STATUS_SETUP"
  | "LINK_STATUS_PENDING"
  | "LINK_STATUS_ERROR"
  | "LINK_STATUS_SUCCESS"
  | "LINK_STATUS_PENDING_EXPIRATION"
  | "LINK_STATUS_REVOKED"
  | "LINK_STATUS_ITEM_LOGIN_REQUIRED";

/** @default "LINK_TYPE_UNSPECIFIED" */
export type LinkType = "LINK_TYPE_UNSPECIFIED" | "LINK_TYPE_PLAID" | "LINK_TYPE_MANUAL";

export type ListRecurringTransactionNotesData = any;

export interface ListRecurringTransactionNotesResponse {
  /** The notes */
  notes?: Array<SmartNote>;
}

export type ListRecurringTransactionsData = any;

/** ListRecurringTransactionsResponse is the list transaction response */
export interface ListRecurringTransactionsResponse {
  nextPage?: string;
  transactions?: Array<PlaidAccountRecurringTransaction>;
}

export type ListTransactionNotesData = any;

export interface ListTransactionNotesResponse {
  /** The notes */
  notes?: Array<SmartNote>;
}

export type ListTransactions2Data = any;

/** ListTransactionsResponse is the list transaction response */
export interface ListTransactionsAcrossAllAccountsResponse {
  /** @format uint64 */
  nextPage?: string;
  transactions?: Array<PlaidAccountTransaction>;
}

export type ListTransactionsData = any;

/** ListTransactionsResponse is the list transaction response */
export interface ListTransactionsResponse {
  nextPage?: string;
  transactions?: Array<PlaidAccountTransaction>;
}

/**
 * LocationFinancialSubProfile
 * This message is used to represent the financial sub profile of a location.
 */
export interface LocationFinancialSubProfile {
  locationCity?: string;
  /** @format int64 */
  month?: number;
  profileType?: FinancialUserProfileType;
  /** @format double */
  spentLastMonth?: number;
  /** @format double */
  spentLastSixMonths?: number;
  /** @format double */
  spentLastTwoWeeks?: number;
  /** @format double */
  spentLastTwoYears?: number;
  /** @format double */
  spentLastWeek?: number;
  /** @format double */
  spentLastYear?: number;
  /** @format uint64 */
  transactionCount?: string;
  /** @format uint64 */
  userId?: string;
}

/**
 * MelodyFinancialContext represents the financial context of a user.
 * This message is used to represent the financial context of a user.
 */
export interface MelodyFinancialContext {
  bankAccounts?: Array<BankAccount>;
  categories?: Array<CategoryMetricsFinancialSubProfile>;
  creditAccounts?: Array<CreditAccount>;
  expenses?: Array<ExpenseMetricsFinancialSubProfileMetrics>;
  financialUserProfileType?: FinancialUserProfileType;
  income?: Array<IncomeMetricsFinancialSubProfile>;
  investmentAccounts?: Array<InvestmentAccount>;
  locations?: Array<LocationFinancialSubProfile>;
  merchants?: Array<MerchantMetricsFinancialSubProfile>;
  mortgageLoanAccounts?: Array<MortgageAccount>;
  paymentChannels?: Array<PaymentChannelMetricsFinancialSubProfile>;
  studentLoanAccounts?: Array<StudentLoanAccount>;
}

/**
 * MerchantFinancialSubProfile
 * This message is used to represent the financial sub profile of a merchant.
 */
export interface MerchantMetricsFinancialSubProfile {
  merchantName?: string;
  /** @format int64 */
  month?: number;
  profileType?: FinancialUserProfileType;
  /** @format double */
  spentLastMonth?: number;
  /** @format double */
  spentLastSixMonths?: number;
  /** @format double */
  spentLastTwoWeeks?: number;
  /** @format double */
  spentLastTwoYears?: number;
  /** @format double */
  spentLastWeek?: number;
  /** @format double */
  spentLastYear?: number;
  /** @format uint64 */
  userId?: string;
}

/**
 * MerchantMonthlyExpenditure
 * This message is used to represent the monthly expenditure of a merchant.
 */
export interface MerchantMonthlyExpenditure {
  merchantName?: string;
  /** @format int64 */
  month?: number;
  profileType?: FinancialUserProfileType;
  /** @format double */
  totalSpending?: number;
  /** @format uint64 */
  userId?: string;
}

/**
 * Milestone: represents a milestone in the context of simfinni. A financial milestone that is both smart
 * and achievable. A milestone is a sub goal of a goal and is tied to a goal by the goal id
 */
export interface Milestone {
  /**
   * the budget associated with the milestone
   * The Budgets table stores information about each budget created by the user,
   * including the name of the budget, the start and end dates, and the user ID.
   */
  budget?: Budget;
  /**
   * The description of the miletone
   * Validations:
   * - must be at least 3 characters long
   * @example "Buy a car"
   */
  description?: string;
  /**
   * id
   * @format uint64
   */
  id?: string;
  /**
   * wethe milestone is completed or not
   * @example true
   */
  isCompleted?: boolean;
  /**
   * The name of the milestone
   * Validations:
   * - must be at least 3 characters long
   * @example "Buy a car"
   */
  name?: string;
  /**
   * the target amount of the milestone
   * @example "Active"
   */
  targetAmount?: string;
  /**
   * the target date of the milestone
   * Validations:
   * - must be at least 3 characters long
   * @example "testtagdescription"
   */
  targetDate?: string;
}

/**
 * MonthlyBalance
 * This message is used to represent the monthly balance of a user.
 */
export interface MonthlyBalance {
  /** @format int64 */
  month?: number;
  /** @format double */
  netBalance?: number;
  profileType?: FinancialUserProfileType;
  /** @format uint64 */
  userId?: string;
}

/**
 * MonthlyExpenditure
 * This message is used to represent the monthly expenditure of a user.
 */
export interface MonthlyExpenditure {
  /** @format int64 */
  month?: number;
  profileType?: FinancialUserProfileType;
  /** @format double */
  totalSpending?: number;
  /** @format uint64 */
  userId?: string;
}

/**
 * MonthlyIncome
 * This message is used to represent the monthly income of a user.
 */
export interface MonthlyIncome {
  /** @format int64 */
  month?: number;
  profileType?: FinancialUserProfileType;
  /** @format double */
  totalIncome?: number;
  /** @format uint64 */
  userId?: string;
}

/**
 * MonthlySavings
 * This message is used to represent the monthly savings of a user.
 */
export interface MonthlySavings {
  /** @format int64 */
  month?: number;
  /** @format double */
  netSavings?: number;
  profileType?: FinancialUserProfileType;
  /** @format uint64 */
  userId?: string;
}

/**
 * MonthlyTotalQuantityBySecurityAndUser
 * This message is used to represent the monthly total quantity of a security.
 */
export interface MonthlyTotalQuantityBySecurityAndUser {
  /** @format int64 */
  month?: number;
  profileType?: FinancialUserProfileType;
  securityId?: string;
  /** @format double */
  totalQuantity?: number;
  /** @format uint64 */
  userId?: string;
}

/**
 * MonthlyTransactionCount
 * This message is used to represent the monthly transaction count of a user.
 */
export interface MonthlyTransactionCount {
  /** @format int64 */
  month?: number;
  profileType?: FinancialUserProfileType;
  /** @format uint64 */
  transactionCount?: string;
  /** @format uint64 */
  userId?: string;
}

export interface MortgageAccount {
  accountNumber?: string;
  /** @format double */
  currentLateFee?: number;
  /** @format double */
  escrowBalance?: number;
  hasPmi?: boolean;
  hasPrepaymentPenalty?: boolean;
  /** @format uint64 */
  id?: string;
  /** @format double */
  interestRatePercentage?: number;
  interestRateType?: string;
  /** @format double */
  lastPaymentAmount?: number;
  lastPaymentDate?: string;
  loanTerm?: string;
  loanTypeDescription?: string;
  maturityDate?: string;
  /** @format double */
  nextMonthlyPayment?: number;
  nextPaymentDueDate?: string;
  /** @format double */
  originalPrincipalBalance?: number;
  /** @format double */
  originalPropertyValue?: number;
  originationDate?: string;
  /** @format double */
  originationPrincipalAmount?: number;
  /** @format double */
  outstandingPrincipalBalance?: number;
  /** @format double */
  pastDueAmount?: number;
  /** @format double */
  paymentAmount?: number;
  paymentDate?: string;
  plaidAccountId?: string;
  propertyAddressCity?: string;
  propertyAddressPostalCode?: string;
  propertyAddressState?: string;
  propertyAddressStreet?: string;
  propertyCountry?: string;
  propertyRegion?: string;
  /** the bank account status */
  status?: BankAccountStatus;
  /** @format double */
  ytdInterestPaid?: number;
  /** @format double */
  ytdPrincipalPaid?: number;
}

/**
 * PaymentChannelMetricsFinancialSubProfile
 * This message is used to represent the financial sub profile of a payment channel.
 */
export interface PaymentChannelMetricsFinancialSubProfile {
  /** @format int64 */
  month?: number;
  paymentChannel?: string;
  profileType?: FinancialUserProfileType;
  /** @format double */
  spentLastMonth?: number;
  /** @format double */
  spentLastSixMonths?: number;
  /** @format double */
  spentLastTwoWeeks?: number;
  /** @format double */
  spentLastTwoYears?: number;
  /** @format double */
  spentLastWeek?: number;
  /** @format double */
  spentLastYear?: number;
  /** @format uint64 */
  transactionCount?: string;
  /** @format uint64 */
  userId?: string;
}

/**
 * PaymentChannelMonthlyExpenditure
 * This message is used to represent the monthly expenditure of a payment channel.
 */
export interface PaymentChannelMonthlyExpenditure {
  /** @format int64 */
  month?: number;
  paymentChannel?: string;
  profileType?: FinancialUserProfileType;
  /** @format double */
  totalSpending?: number;
  /** @format uint64 */
  userId?: string;
}

export interface PersonalActionableInsight {
  /** insight action */
  action?: string;
  /** insight description */
  description?: string;
  /** insight expected benefit */
  expectedBenefit?: string;
  /**
   * insight generated time
   * @format date-time
   */
  generatedTime?: string;
  /** @format uint64 */
  id?: string;
  /** insight name */
  insightName?: PersonalActionableInsightName;
  /** metrics to optimize for */
  metricsToOptimizeFor?: Array<string>;
  /** insight tags */
  tags?: Array<string>;
  /** insight takeaway */
  takeaway?: string;
}

/** @default "PERSONAL_ACTIONABLE_INSIGHT_NAME_UNSPECIFIED" */
export type PersonalActionableInsightName =
  | "PERSONAL_ACTIONABLE_INSIGHT_NAME_UNSPECIFIED"
  | "PERSONAL_ACTIONABLE_INSIGHT_NAME_EXPENSE"
  | "PERSONAL_ACTIONABLE_INSIGHT_NAME_EMERGENCY_FUND"
  | "PERSONAL_ACTIONABLE_INSIGHT_NAME_DEBT_PRIORITIZATION"
  | "PERSONAL_ACTIONABLE_INSIGHT_NAME_NON_ESSENTIAL_EXPENSES"
  | "PERSONAL_ACTIONABLE_INSIGHT_NAME_NON_SUBSCRIPTIONS"
  | "PERSONAL_ACTIONABLE_INSIGHT_NAME_DISCRETIONARY_SPENDING";

/** Message representing investment transactions associated with a Plaid account. */
export interface PlaidAccountInvestmentTransaction {
  /**
   * The unique identifier for the associated investment account.
   * @gotag: ch:"account_id"
   */
  accountId?: string;
  /**
   * Additional properties related to this investment transaction.
   * @gotag: ch:"additional_properties"
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   * Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   * Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   *
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  additionalProperties?: Any;
  /**
   * The amount of the investment transaction.
   * @gotag: ch:"amount"
   */
  ammount?: string;
  /**
   * The monetary amount of the investment transaction.
   * @gotag: ch:"amount"
   * @format double
   */
  amount?: number;
  /**
   * The date and time when this investment transaction was created.
   * @gotag: ch:"created_at"
   * @format date-time
   */
  createdAt?: string;
  /**
   * The date of the investment transaction.
   * @gotag: ch:"date"
   */
  currentDate?: string;
  /**
   * The fees associated with the investment transaction.
   * @gotag: ch:"fees"
   * @format double
   */
  fees?: number;
  /**
   * The unique identifier for this investment transaction.
   * @gotag: ch:"id"
   * @format uint64
   */
  id?: string;
  /**
   * The unique identifier for the investment transaction.
   * @gotag: ch:"investment_transaction_id"
   */
  investmentTransactionId?: string;
  /**
   * The ISO currency code for the investment transaction.
   * @gotag: ch:"iso_currency_code"
   */
  isoCurrencyCode?: string;
  /**
   * The link ID associated with this investment transaction.
   * @gotag: ch:"link_id"
   * @format uint64
   */
  linkId?: string;
  /**
   * The name or description of the investment transaction.
   * @gotag: ch:"name"
   */
  name?: string;
  /**
   * Notes associated with this investment transaction.
   * @gotag: ch:"notes"
   */
  notes?: Array<SmartNote>;
  /**
   * The price per unit of the security for the investment transaction.
   * @gotag: ch:"price"
   * @format double
   */
  price?: number;
  /**
   * The quantity of the investment transaction (e.g., number of shares).
   * @gotag: ch:"quantity"
   * @format double
   */
  quantity?: number;
  /**
   * The security or asset identifier associated with the investment transaction.
   * @gotag: ch:"security_id"
   */
  securityId?: string;
  /**
   * The subtype of the investment transaction (e.g., stock, bond).
   * @gotag: ch:"subtype"
   */
  subtype?: string;
  /**
   * The timestamp associated with this investment transaction.
   * @gotag: ch:"time"
   * @format date-time
   */
  time?: string;
  /**
   * The type of the investment transaction (e.g., buy, sell, dividend).
   * @gotag: ch:"type"
   */
  type?: string;
  /**
   * The unofficial currency code of the investment transaction.
   * @gotag: ch:"unofficial_currency_code"
   */
  unofficialCurrencyCode?: string;
  /**
   * The user ID associated with this investment transaction.
   * @gotag: ch:"user_id"
   * @format uint64
   */
  userId?: string;
}

/** Message representing recurring transactions associated with a Plaid account. */
export interface PlaidAccountRecurringTransaction {
  /**
   * The unique identifier for the associated bank account.
   * @gotag: ch:"account_id"
   */
  accountId?: string;
  /** Additional properties related to this recurring transaction. */
  additionalProperties?: Any;
  /**
   * The average amount of the recurring transaction.
   * @gotag: ch:"average_amount"
   */
  averageAmount?: string;
  /**
   * The ISO currency code for the average transaction amount.
   * @gotag: ch:"average_amount_iso_currency_code"
   */
  averageAmountIsoCurrencyCode?: string;
  /**
   * The category ID associated with the recurring transaction.
   * @gotag: ch:"category_id"
   */
  categoryId?: string;
  /**
   * A description or note for the recurring transaction.
   * @gotag: ch:"description"
   */
  description?: string;
  /**
   * The date of the first occurrence of the recurring transaction.
   * @gotag: ch:"first_date"
   * @format date-time
   */
  firstDate?: string;
  /**
   * The flow associated with this recurring transaction.
   * @gotag: ch:"flow"
   */
  flow?: string;
  /**
   * The frequency at which the recurring transaction occurs (e.g., monthly).
   * @gotag: ch:"frequency"
   */
  frequency?: string;
  /**
   * The unique identifier for this recurring transaction.
   * @gotag: ch:"id"
   * @format uint64
   */
  id?: string;
  /**
   * Indicates whether the recurring transaction is currently active.
   * @gotag: ch:"is_active"
   */
  isActive?: boolean;
  /**
   * The amount of the most recent occurrence of the recurring transaction.
   * @gotag: ch:"last_amount"
   */
  lastAmount?: string;
  /**
   * The ISO currency code for the most recent transaction amount.
   * @gotag: ch:"last_amount_iso_currency_code"
   */
  lastAmountIsoCurrencyCode?: string;
  /**
   * The date of the last occurrence of the recurring transaction.
   * @gotag: ch:"last_date"
   * @format date-time
   */
  lastDate?: string;
  /**
   * The link ID associated with this recurring transaction.
   * @gotag: ch:"link_id"
   * @format uint64
   */
  linkId?: string;
  /**
   * The name of the merchant associated with the recurring transaction.
   * @gotag: ch:"merchant_name"
   */
  merchantName?: string;
  /** Notes associated with this recurring transaction. */
  notes?: Array<SmartNote>;
  /**
   * The detailed personal finance category of the recurring transaction.
   * @gotag: ch:"personal_finance_category_detailed"
   */
  personalFinanceCategoryDetailed?: string;
  /**
   * The primary personal finance category of the recurring transaction.
   * @gotag: ch:"personal_finance_category_primary"
   */
  personalFinanceCategoryPrimary?: string;
  /**
   * The status of the recurring transaction (e.g., "Active" or "Inactive").
   * @gotag: ch:"status"
   */
  status?: string;
  /**
   * The identifier for the recurring transaction stream.
   * @gotag: ch:"stream_id"
   */
  streamId?: string;
  /**
   * The timestamp associated with this recurring transaction.
   * @format date-time
   */
  time?: string;
  /**
   * A comma-separated list of transaction IDs associated with this recurring transaction.
   * @gotag: ch:"transaction_ids,array"
   */
  transactionIds?: string;
  /**
   * The timestamp when this recurring transaction was last updated.
   * @gotag: ch:"updated_time"
   * @format date-time
   */
  updatedTime?: string;
  /**
   * The user ID associated with this recurring transaction.
   * @gotag: ch:"user_id"
   * @format uint64
   */
  userId?: string;
}

/** Message representing Plaid account transactions. */
export interface PlaidAccountTransaction {
  /**
   * The bank account ID associated with the transaction.
   *
   * @gotag: ch:"account_id"
   */
  accountId?: string;
  /**
   * The account owner associated with the transaction.
   *
   * @gotag: ch:"account_owner"
   */
  accountOwner?: string;
  /** Additional properties that can be of any type. */
  additionalProperties?: Any;
  /**
   * The amount of the transaction.
   *
   * @gotag: ch:"amount"
   * @format double
   */
  amount?: number;
  /**
   * The time at which the transaction was authorized.
   *
   * @gotag: ch:"authorized_date"
   * @format date-time
   */
  authorizedDate?: string;
  /**
   * The date-time when the transaction was authorized.
   *
   * @gotag: ch:"authorized_datetime"
   * @format date-time
   */
  authorizedDatetime?: string;
  /** The set of categories that the transaction belongs to. */
  categories?: Array<string>;
  /**
   * The category ID of the transaction.
   *
   * @gotag: ch:"category_id"
   */
  categoryId?: string;
  /**
   * The check number associated with the transaction.
   *
   * @gotag: ch:"check_number"
   */
  checkNumber?: string;
  /**
   * The date of the transaction.
   *
   * @gotag: ch:"date"
   * @format date-time
   */
  currentDate?: string;
  /**
   * The current datetime of the transaction.
   *
   * @gotag: ch:"datetime"
   * @format date-time
   */
  currentDatetime?: string;
  /** Indicates whether this transaction should be hidden. */
  hideTransaction?: boolean;
  /**
   * The unique ID for this transaction.
   * @format uint64
   */
  id?: string;
  /**
   * The currency code of the transaction.
   *
   * @gotag: ch:"iso_currency_code"
   */
  isoCurrencyCode?: string;
  /**
   * The link ID associated with this transaction.
   * @format uint64
   */
  linkId?: string;
  /** The street address of the transaction location (if available). */
  locationAddress?: string;
  /** The city of the transaction location (if available). */
  locationCity?: string;
  /** The country of the transaction location (if available). */
  locationCountry?: string;
  /**
   * The latitude of the transaction location (if available).
   * @format double
   */
  locationLat?: number;
  /**
   * The longitude of the transaction location (if available).
   * @format double
   */
  locationLon?: number;
  /** The postal code of the transaction location (if available). */
  locationPostalCode?: string;
  /** The region or state of the transaction location (if available). */
  locationRegion?: string;
  /** The store number associated with the transaction location (if available). */
  locationStoreNumber?: string;
  /**
   * The merchant name of the transaction.
   *
   * @gotag: ch:"merchant_name"
   */
  merchantName?: string;
  /** Indicates whether this transaction needs review. */
  needsReview?: boolean;
  /** Notes associated with this transaction. */
  notes?: Array<SmartNote>;
  /**
   * The payment channel for the transaction.
   *
   * @gotag: ch:"payment_channel"
   */
  paymentChannel?: string;
  /** Information about the entity to whom the payment is made (if available). */
  paymentMetaByOrderOf?: string;
  /** Information about the payee (if available). */
  paymentMetaPayee?: string;
  /** Information about the payer (if available). */
  paymentMetaPayer?: string;
  /** The payment method used for the transaction (if available). */
  paymentMetaPaymentMethod?: string;
  /** The payment processor involved in the transaction (if available). */
  paymentMetaPaymentProcessor?: string;
  /** The Prearranged Payment and Deposit (PPD) ID (if available). */
  paymentMetaPpdId?: string;
  /** The reason for the payment (if available). */
  paymentMetaReason?: string;
  /** The reference number associated with the payment (if available). */
  paymentMetaReferenceNumber?: string;
  /**
   * Indicates whether the transaction is pending.
   *
   * @gotag: ch:"pending"
   */
  pending?: boolean;
  /**
   * The ID of the pending transaction, if applicable.
   *
   * @gotag: ch:"pending_transaction_id"
   */
  pendingTransactionId?: string;
  /**
   * The detailed personal finance category of the transaction.
   *
   * @gotag: ch:"personal_finance_category_detailed"
   */
  personalFinanceCategoryDetailed?: string;
  /**
   * The primary personal finance category of the transaction.
   *
   * @gotag: ch:"personal_finance_category_primary"
   */
  personalFinanceCategoryPrimary?: string;
  /** The number of splits associated with this transaction. */
  splits?: Array<TransactionSplit>;
  /** Tags associated with this transaction. */
  tags?: Array<string>;
  /**
   * The timestamp associated with the transaction.
   * @format date-time
   */
  time?: string;
  /**
   * The transaction code.
   *
   * @gotag: ch:"transaction_code"
   */
  transactionCode?: string;
  /**
   * The transaction ID of interest.
   *
   * @gotag: ch:"transaction_id"
   */
  transactionId?: string;
  /**
   * The name of the transaction.
   *
   * @gotag: ch:"name"
   */
  transactionName?: string;
  /**
   * The unofficial currency code of the transaction.
   *
   * @gotag: ch:"unofficial_currency_code"
   */
  unofficialCurrencyCode?: string;
  /**
   * The user ID associated with this transaction.
   * @format uint64
   */
  userId?: string;
}

export interface PlaidExchangeTokenRequest {
  /** The institution id */
  institutionId?: string;
  /** The institution name */
  institutionName?: string;
  profileType: FinancialUserProfileType;
  /**
   * The public token
   * Validations:
   * - cannot be nil hence required
   */
  publicToken: string;
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   * @format uint64
   */
  userId: string;
}

export interface PlaidExchangeTokenResponse {
  /** wether the operation was successful */
  success: boolean;
}

export interface PlaidInitiateTokenExchangeRequest {
  /**
   * The user's email address. This field is optional, but required to enable the
   * [pre-authenticated returning user flow](https://plaid.com/docs/link/returning-user/#enabling-the-returning-user-experience).
   */
  email: string;
  /**
   * The user's full legal name. This is an optional field used in
   * the [returning user experience](https://plaid.com/docs/link/returning-user) to associate Items to the user.
   */
  fullName: string;
  /**
   * The user's phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
   * This field is optional, but required to enable the [returning user experience](https://plaid.com/docs/link/returning-user).
   */
  phoneNumber: string;
  profileType: FinancialUserProfileType;
  /**
   * A unique ID representing the end user. Typically this will be a user ID number from your application.
   * Personally identifiable information, such as an email address or phone number,
   * should not be used in the `client_user_id`. It is currently used as a means of searching logs
   * for the given user in the Plaid Dashboard.
   * Validations:
   * - user_id must be greater than 0
   * @format uint64
   */
  userId: string;
}

export interface PlaidInitiateTokenExchangeResponse {
  expiration?: string;
  linkToken?: string;
  plaidRequestId?: string;
}

export interface PlaidInitiateTokenUpdateRequest {
  /**
   * The link id we want to update for
   * Validations:
   * - cannot be nil hence required
   * @format uint64
   */
  linkId: string;
  profileType: FinancialUserProfileType;
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   * @format uint64
   */
  userId: string;
}

export interface PlaidInitiateTokenUpdateResponse {
  expiration?: string;
  linkToken?: string;
}

export interface PlaidLink {
  /**
   * id
   * @format uint64
   */
  id?: string;
  institutionId?: string;
  institutionName?: string;
  itemId?: string;
  products?: Array<string>;
  usePlaidSync?: boolean;
  webhookUrl?: string;
}

export interface PlaidSync {
  /** @format int64 */
  added?: string;
  /**
   * id
   * @format uint64
   */
  id?: string;
  /** @format int64 */
  modified?: string;
  nextCursor?: string;
  /** @format int64 */
  removed?: string;
  timeStamp?: string;
  trigger?: string;
}

/**
 * Pocket is an abstraction of a over a bank account. A user can has at most 4 pockets per connected account
 * NOTE: these pockets are automatically created by the system and should not be exposed for mutation
 * by any client. The only operations that can be performed against a pocket are:
 * 1. Get the pocket
 * 2. Get the pocket's smart goals
 * 3. Adding a smart goal to the pocket
 */
export interface Pocket {
  /** the set of smart goals this user witholds */
  goals?: Array<SmartGoal>;
  /**
   * id
   * @format uint64
   */
  id?: string;
  /** The type of the pocket */
  type?: PocketType;
}

/** @default "POCKET_TYPE_UNSPECIFIED" */
export type PocketType =
  | "POCKET_TYPE_UNSPECIFIED"
  | "POCKET_TYPE_DISCRETIONARY_SPENDING"
  | "POCKET_TYPE_FUN_MONEY"
  | "POCKET_TYPE_DEBT_REDUCTION"
  | "POCKET_TYPE_EMERGENCY_FUND"
  | "POCKET_TYPE_INVESTMENT"
  | "POCKET_TYPE_SHORT_TERM_SAVINGS"
  | "POCKET_TYPE_LONG_TERM_SAVINGS";

export type PollAsyncTaskExecutionStatusData = any;

export interface PollAsyncTaskExecutionStatusResponse {
  /**
   * The time the task completed
   * @format date-time
   */
  completedAt?: string;
  /** Wether the task is orphaned */
  isOrphaned?: boolean;
  /**
   * The task status
   *  - TASK_STATE_UNSPECIFIED: The zero value is omitted in proto3 by convention if it's not used.
   * In your case, since you start your iota with 1, we will not define a zero value.
   *  - TASK_STATE_ACTIVE: Indicates that the task is currently being processed by Handler.
   *  - TASK_STATE_PENDING: Indicates that the task is ready to be processed by Handler.
   *  - TASK_STATE_SCHEDULED: Indicates that the task is scheduled to be processed some time in the future.
   *  - TASK_STATE_RETRY: Indicates that the task has previously failed and scheduled to be processed some time in the future.
   *  - TASK_STATE_ARCHIVED: Indicates that the task is archived and stored for inspection purposes.
   *  - TASK_STATE_COMPLETED: Indicates that the task is processed successfully and retained until the retention TTL expires.
   *  - TASK_STATE_AGGREGATING: Indicates that the task is waiting in a group to be aggregated into one task.
   */
  status?: TaskState;
  /**
   * The task id
   * @format uint64
   */
  taskId?: string;
  /** The type of task that was executed */
  taskType?: string;
}

/** @default "RE_CURRING_FLOW_UNSPECIFIED" */
export type ReCurringFlow = "RE_CURRING_FLOW_UNSPECIFIED" | "RE_CURRING_FLOW_INFLOW" | "RE_CURRING_FLOW_OUTFLOW";

export interface ReOccuringTransaction {
  /** @gotag: ch:"account_id" */
  accountId?: string;
  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   * Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   * Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   *
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  additionalProperties?: Any;
  /** @gotag: ch:"average_amount" */
  averageAmount?: string;
  /** @gotag: ch:"average_amount_iso_currency_code" */
  averageAmountIsoCurrencyCode?: string;
  /** @gotag: ch:"category_id" */
  categoryId?: string;
  /** @gotag: ch:"description" */
  description?: string;
  /** @gotag: ch:"first_date" */
  firstDate?: string;
  /** @gotag: ch:"flow" */
  flow?: ReCurringFlow;
  /** @gotag: ch:"frequency" */
  frequency?: ReOccuringTransactionsFrequency;
  /** @gotag: ch:"id" */
  id?: string;
  /** @gotag: ch:"is_active" */
  isActive?: boolean;
  /** @gotag: ch:"last_amount" */
  lastAmount?: string;
  /** @gotag: ch:"last_amount_iso_currency_code" */
  lastAmountIsoCurrencyCode?: string;
  /** @gotag: ch:"last_date" */
  lastDate?: string;
  /**
   * @gotag: ch:"link_id"
   * @format uint64
   */
  linkId?: string;
  /** @gotag: ch:"merchant_name" */
  merchantName?: string;
  /** @gotag: ch:"personal_finance_category_detailed" */
  personalFinanceCategoryDetailed?: string;
  /** @gotag: ch:"personal_finance_category_primary" */
  personalFinanceCategoryPrimary?: string;
  /** @gotag: ch:"profile_type" */
  profileType?: FinancialUserProfileType;
  /** @format int32 */
  sign?: number;
  /**
   * @gotag: ch:"status"
   *  - RE_OCCURING_TRANSACTIONS_STATUS_MATURE: A MATURE recurring stream should have at least 3 transactions and happen
   *  on a regular cadence (For Annual recurring stream, we will mark it MATURE after 2 instances).
   *  - RE_OCCURING_TRANSACTIONS_STATUS_EARLY_DETECTION: When a recurring transaction first appears in the transaction history and before it fulfills
   * the requirement of a mature stream, the status will be EARLY_DETECTION.
   *  - RE_OCCURING_TRANSACTIONS_STATUS_TOMBSTONED: A stream that was previously in the EARLY_DETECTION status will move to the TOMBSTONED
   * status when no further transactions were found at the next expected date.
   */
  status?: ReOccuringTransactionsStatus;
  /** @gotag: ch:"stream_id" */
  streamId?: string;
  /** @format date-time */
  time?: string;
  /** @gotag: ch:"transaction_ids,array" */
  transactionIds?: string;
  /** @gotag: ch:"updated_time" */
  updatedTime?: string;
  /**
   * @gotag: ch:"user_id"
   * @format uint64
   */
  userId?: string;
}

/** @default "RE_OCCURING_TRANSACTIONS_FREQUENCY_UNSPECIFIED" */
export type ReOccuringTransactionsFrequency =
  | "RE_OCCURING_TRANSACTIONS_FREQUENCY_UNSPECIFIED"
  | "RE_OCCURING_TRANSACTIONS_FREQUENCY_WEEKLY"
  | "RE_OCCURING_TRANSACTIONS_FREQUENCY_BIWEEKLY"
  | "RE_OCCURING_TRANSACTIONS_FREQUENCY_SEMI_MONTHLY"
  | "RE_OCCURING_TRANSACTIONS_FREQUENCY_MONTHLY"
  | "RE_OCCURING_TRANSACTIONS_FREQUENCY_ANNUALLY";

/**
 *  - RE_OCCURING_TRANSACTIONS_STATUS_MATURE: A MATURE recurring stream should have at least 3 transactions and happen
 *  on a regular cadence (For Annual recurring stream, we will mark it MATURE after 2 instances).
 *  - RE_OCCURING_TRANSACTIONS_STATUS_EARLY_DETECTION: When a recurring transaction first appears in the transaction history and before it fulfills
 * the requirement of a mature stream, the status will be EARLY_DETECTION.
 *  - RE_OCCURING_TRANSACTIONS_STATUS_TOMBSTONED: A stream that was previously in the EARLY_DETECTION status will move to the TOMBSTONED
 * status when no further transactions were found at the next expected date.
 * @default "RE_OCCURING_TRANSACTIONS_STATUS_UNSPECIFIED"
 */
export type ReOccuringTransactionsStatus =
  | "RE_OCCURING_TRANSACTIONS_STATUS_UNSPECIFIED"
  | "RE_OCCURING_TRANSACTIONS_STATUS_MATURE"
  | "RE_OCCURING_TRANSACTIONS_STATUS_EARLY_DETECTION"
  | "RE_OCCURING_TRANSACTIONS_STATUS_TOMBSTONED";

export type ReadynessCheckData = any;

export interface ReadynessCheckResponse {
  healthy?: boolean;
}

export type SearchTransactionsData = any;

export interface SearchTransactionsResponse {
  /** @format uint64 */
  nextPageNumber?: string;
  /** The transactions */
  transactions?: Array<PlaidAccountTransaction>;
}

/**
 * SmartGoal: The Goals table stores information about each financial goal, including the name of the goal,
 * its description, the target amount of money the user wants to save or invest, and the expected date of completion.
 *
 * The Goals table also includes columns for the start date of the goal, the current amount of money saved or
 * invested towards the goal, and a boolean flag indicating whether the goal has been achieved.
 * These additional columns allow the user to track their progress towards the goal and see how much
 * more they need to save or invest to reach their target amount.
 */
export interface SmartGoal {
  /**
   * the current amount of the goal
   * current amount of money saved or invested towards the goal
   * @example "Active"
   */
  currentAmount?: string;
  /**
   * The description of the goal
   * Validations:
   * - must be at least 3 characters long
   * @example "Buy a car"
   */
  description?: string;
  /**
   * The duration of the goal
   * @example "Active"
   */
  duration?: string;
  /**
   * the end date of the goal
   * @example "Active"
   */
  endDate?: string;
  /**
   * Forecasts associated with the goal
   * The Forecast table stores information about each forecast generated for a particular goal,
   * including the forecast date, the forecasted amount of money saved or invested for the
   * goal by the target date, and the variance between the forecasted and target amounts.
   * This allows the user to track how well they are progressing towards their goal and make adjustments as needed.
   */
  forecasts?: Forecast;
  /** The type of the goal */
  goalType?: GoalType;
  /**
   * id
   * @format uint64
   */
  id?: string;
  /**
   * wether the goal has been achieved or not
   * @example true
   */
  isCompleted?: boolean;
  /** Milestones associated with the goal */
  milestones?: Array<Milestone>;
  /**
   * The name of the goal
   * Validations:
   * - must be at least 3 characters long
   * @example "Buy a car"
   */
  name?: string;
  /** Notes associated with the goal */
  notes?: Array<SmartNote>;
  /**
   * the start date of the goal
   * @example "Active"
   */
  startDate?: string;
  /**
   * the target amount of the goal
   * amount of money the user wants to save or invest
   * @example "Active"
   */
  targetAmount?: string;
  /**
   * the user id to which this goal is tied to
   * @format uint64
   */
  userId?: string;
}

/** Note schema */
export interface SmartNote {
  /**
   * The content of the note
   * Validations:
   * - must be at least 3 characters long
   * @example "Note content here..."
   */
  content?: string;
  /**
   * Timestamp indicating when the note was created
   * @format date-time
   */
  createdAt?: string;
  /**
   * Unique identifier for the note
   * @format uint64
   */
  id?: string;
  /**
   * Timestamp indicating when the note was last updated
   * @format date-time
   */
  updatedAt?: string;
  /**
   * The user id who created the note. This can be useful if in the future you allow multiple users to add notes to the same goal.
   * @format uint64
   */
  userId?: string;
}

export type SplitTransactionData = any;

export interface SplitTransactionPayload {
  /**
   * The split transaction
   * Validations:
   * - cannot be nil hence required
   */
  splitTransactions: Array<TransactionSplit>;
}

export interface SplitTransactionResponse {
  /**
   * The transaction id
   * Message representing Plaid account transactions.
   */
  transaction?: PlaidAccountTransaction;
}

export interface Status {
  /** @format int32 */
  code?: number;
  details?: Array<Any>;
  message?: string;
}

/** StripeSubscription stores high level stripe subscription details of which the user profile has */
export interface StripeSubscription {
  /** @format uint64 */
  id?: string;
  /** wether the subscription is trialing */
  isTrialing?: boolean;
  /** stripe subscription active until */
  stripeSubscriptionActiveUntil?: string;
  /** stripe subscription id tied to the customer */
  stripeSubscriptionId?: string;
  /** stripe subscription status */
  stripeSubscriptionStatus?: StripeSubscriptionStatus;
  /** stripe webhook latest timestamp */
  stripeWebhookLatestTimestamp?: string;
}

/** @default "STRIPE_SUBSCRIPTION_STATUS_UNSPECIFIED" */
export type StripeSubscriptionStatus =
  | "STRIPE_SUBSCRIPTION_STATUS_UNSPECIFIED"
  | "STRIPE_SUBSCRIPTION_STATUS_TRIALING"
  | "STRIPE_SUBSCRIPTION_STATUS_ACTIVE"
  | "STRIPE_SUBSCRIPTION_STATUS_PAST_DUE"
  | "STRIPE_SUBSCRIPTION_STATUS_CANCELED"
  | "STRIPE_SUBSCRIPTION_STATUS_UNPAID"
  | "STRIPE_SUBSCRIPTION_STATUS_COMPLETE"
  | "STRIPE_SUBSCRIPTION_STATUS_INCOMPLETE"
  | "STRIPE_SUBSCRIPTION_STATUS_INCOMPLETE_EXPIRED"
  | "STRIPE_SUBSCRIPTION_STATUS_CREATED"
  | "STRIPE_SUBSCRIPTION_STATUS_PAUSED";

export interface StudentLoanAccount {
  disbursementDates?: Array<string>;
  expectedPayoffDate?: string;
  guarantor?: string;
  /**
   * id
   * @format uint64
   */
  id?: string;
  /** @format double */
  interestRatePercentage?: number;
  isOverdue?: boolean;
  /** @format double */
  lastPaymentAmount?: number;
  lastPaymentDate?: string;
  lastStatementIssueDate?: string;
  loanEndDate?: string;
  loanName?: string;
  loanType?: string;
  /** @format double */
  minimumPaymentAmount?: number;
  /** the account name */
  name?: string;
  nextPaymentDueDate?: string;
  originationDate?: string;
  /** @format double */
  originationPrincipalAmount?: number;
  /** @format double */
  outstandingInterestAmount?: number;
  paymentReferenceNumber?: string;
  plaidAccountId?: string;
  pslfStatusEstimatedEligibilityDate?: string;
  /** @format int32 */
  pslfStatusPaymentsMade?: number;
  /** @format int32 */
  pslfStatusPaymentsRemaining?: number;
  repaymentPlanDescription?: string;
  repaymentPlanType?: string;
  sequenceNumber?: string;
  servicerAddressCity?: string;
  servicerAddressCountry?: string;
  servicerAddressPostalCode?: string;
  servicerAddressRegion?: string;
  servicerAddressState?: string;
  servicerAddressStreet?: string;
  /** the bank account status */
  status?: BankAccountStatus;
  /**
   * the user id to which this bank account is tied to
   * @format uint64
   */
  userId?: string;
  /** @format double */
  ytdInterestPaid?: number;
  /** @format double */
  ytdPrincipalPaid?: number;
}

/**
 *  - TASK_STATE_UNSPECIFIED: The zero value is omitted in proto3 by convention if it's not used.
 * In your case, since you start your iota with 1, we will not define a zero value.
 *  - TASK_STATE_ACTIVE: Indicates that the task is currently being processed by Handler.
 *  - TASK_STATE_PENDING: Indicates that the task is ready to be processed by Handler.
 *  - TASK_STATE_SCHEDULED: Indicates that the task is scheduled to be processed some time in the future.
 *  - TASK_STATE_RETRY: Indicates that the task has previously failed and scheduled to be processed some time in the future.
 *  - TASK_STATE_ARCHIVED: Indicates that the task is archived and stored for inspection purposes.
 *  - TASK_STATE_COMPLETED: Indicates that the task is processed successfully and retained until the retention TTL expires.
 *  - TASK_STATE_AGGREGATING: Indicates that the task is waiting in a group to be aggregated into one task.
 * @default "TASK_STATE_UNSPECIFIED"
 */
export type TaskState =
  | "TASK_STATE_UNSPECIFIED"
  | "TASK_STATE_ACTIVE"
  | "TASK_STATE_PENDING"
  | "TASK_STATE_SCHEDULED"
  | "TASK_STATE_RETRY"
  | "TASK_STATE_ARCHIVED"
  | "TASK_STATE_COMPLETED"
  | "TASK_STATE_AGGREGATING";

export interface Token {
  accessToken?: string;
  /**
   * id
   * @format uint64
   */
  id?: string;
  /** the id of the item the token is tied to */
  itemId?: string;
  keyId?: string;
  /**
   * last time you performed a merge fetch
   * @format date-time
   */
  lastMergeCreatedAt?: string;
  /** This is what you'll pass to Merge as the end_user_origin_id. */
  mergeEndUserOriginId?: string;
  /** The integration slug/identifier. This is returned at the end of the linking flow. */
  mergeIntegrationSlug?: string;
  version?: string;
}

/**
 * TotalInvestmentBySecurity
 * This message is used to represent the total investment of a security.
 */
export interface TotalInvestmentBySecurity {
  profileType?: FinancialUserProfileType;
  securityId?: string;
  /** @format double */
  totalInvestment?: number;
  /** @format uint64 */
  userId?: string;
}

export interface Transaction {
  /** @gotag: ch:"account_id" */
  accountId?: string;
  /** @gotag: ch:"account_owner" */
  accountOwner?: string;
  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   *
   * Example 1: Pack and unpack a message in C++.
   *
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   *
   * Example 2: Pack and unpack a message in Java.
   *
   *     Foo foo = ...;
   *     Any any = Any.pack(foo);
   *     ...
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *     }
   *
   * Example 3: Pack and unpack a message in Python.
   *
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     ...
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *       ...
   *
   * Example 4: Pack and unpack a message in Go
   *
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   *        ...
   *      }
   *
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   *
   *
   * JSON
   *
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     }
   *
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   *     }
   *
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *
   *     {
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   *     }
   */
  additionalProperties?: Any;
  /**
   * @gotag: ch:"amount"
   * @format double
   */
  amount?: number;
  /** @gotag: ch:"authorized_date" */
  authorizedDate?: string;
  /** @gotag: ch:"authorized_datetime" */
  authorizedDatetime?: string;
  categories?: Array<string>;
  /** @gotag: ch:"category_id" */
  categoryId?: string;
  /** @gotag: ch:"check_number" */
  checkNumber?: string;
  /** @gotag: ch:"date" */
  currentDate?: string;
  /** @gotag: ch:"datetime" */
  currentDatetime?: string;
  id?: string;
  /** @gotag: ch:"iso_currency_code" */
  isoCurrencyCode?: string;
  /**
   * @gotag: ch:"link_id"
   * @format uint64
   */
  linkId?: string;
  locationAddress?: string;
  locationCity?: string;
  locationCountry?: string;
  /** @format double */
  locationLat?: number;
  /** @format double */
  locationLon?: number;
  locationPostalCode?: string;
  locationRegion?: string;
  locationStoreNumber?: string;
  /** @gotag: ch:"merchant_name" */
  merchantName?: string;
  /** @gotag: ch:"name" */
  name?: string;
  /** @gotag: ch:"payment_channel" */
  paymentChannel?: string;
  paymentMetaByOrderOf?: string;
  paymentMetaPayee?: string;
  paymentMetaPayer?: string;
  paymentMetaPaymentMethod?: string;
  paymentMetaPaymentProcessor?: string;
  paymentMetaPpdId?: string;
  paymentMetaReason?: string;
  paymentMetaReferenceNumber?: string;
  /** @gotag: ch:"pending" */
  pending?: boolean;
  /** @gotag: ch:"pending_transaction_id" */
  pendingTransactionId?: string;
  /** @gotag: ch:"personal_finance_category_detailed" */
  personalFinanceCategoryDetailed?: string;
  /** @gotag: ch:"personal_finance_category_primary" */
  personalFinanceCategoryPrimary?: string;
  /** @gotag: ch:"profile_type" */
  profileType?: FinancialUserProfileType;
  /** @format int32 */
  sign?: number;
  /** @format date-time */
  time?: string;
  /** @gotag: ch:"transaction_code" */
  transactionCode?: string;
  /** @gotag: ch:"transaction_id" */
  transactionId?: string;
  /** @gotag: ch:"unofficial_currency_code" */
  unofficialCurrencyCode?: string;
  /**
   * @gotag: ch:"user_id"
   * @format uint64
   */
  userId?: string;
}

/**
 * TransactionAggregatesByMonth
 * This message is used to represent the transaction aggregates of a user.
 */
export interface TransactionAggregatesByMonth {
  locationCity?: string;
  merchantName?: string;
  /** @format int64 */
  month?: number;
  paymentChannel?: string;
  personalFinanceCategoryPrimary?: string;
  profileType?: FinancialUserProfileType;
  /** @format double */
  totalAmount?: number;
  /** @format uint64 */
  transactionCount?: string;
  /** @format uint64 */
  userId?: string;
}

export type TransactionAggregatesData = any;

/** PlaidAccountTransactionSplit represents a split of a PlaidAccountTransaction. */
export interface TransactionSplit {
  /**
   * The amount of money involved in the transaction.
   * @format double
   */
  amount?: number;
  /**
   * The time at which the transaction was authorized (time field)
   * @format date-time
   */
  authorizedDate?: string;
  /**
   * The date-time when the transaction was authorized.
   * @format date-time
   */
  authorizedDatetime?: string;
  /** The set of categories that the transaction belongs to. */
  categories?: Array<string>;
  /** The description of the transaction. */
  description?: string;
  /**
   * The unique ID for this transaction.
   * @format uint64
   */
  id?: string;
  /**
   * The link ID associated with this transaction.
   * @format uint64
   */
  linkId?: string;
  /** The detailed personal finance category of the transaction. */
  personalFinanceCategoryDetailed?: string;
  /** The primary personal finance category of the transaction. */
  personalFinanceCategoryPrimary?: string;
  /** Tags associated with this transaction. */
  tags?: Array<string>;
  /**
   * The time of split of the transaction
   * @format date-time
   */
  timeOfSplit?: string;
  /**
   * The user ID associated with this transaction.
   * @format uint64
   */
  userId?: string;
}

export interface UnSplitTransactionsResponse {
  /**
   * The transaction id
   * Message representing Plaid account transactions.
   */
  transaction?: PlaidAccountTransaction;
}

export type UnsplitTransactionsData = any;

export type UnsplitTransactionsPayload = object;

export type UpdateBankAccountData = any;

export interface UpdateBankAccountRequest {
  /**
   * The bank account to update
   * Validations:
   * - cannot be nil hence required
   */
  bankAccount: BankAccount;
}

export interface UpdateBankAccountResponse {
  /** The bank account */
  bankAccount?: BankAccount;
  /** The bank account id */
  updated?: boolean;
}

export interface UpdateBudgetRequest {
  /**
   * The budget to update
   * Validations:
   * - cannot be nil hence required
   * The Budgets table stores information about each budget created by the user,
   * including the name of the budget, the start and end dates, and the user ID.
   */
  budget: Budget;
}

export interface UpdateBudgetResponse {
  /**
   * The budget id
   * The Budgets table stores information about each budget created by the user,
   * including the name of the budget, the start and end dates, and the user ID.
   */
  budget?: Budget;
}

export interface UpdateMilestoneRequest {
  /**
   * The milestone to update
   * Validations:
   * - cannot be nil hence required
   */
  milestone: Milestone;
}

export interface UpdateMilestoneResponse {
  /** The milestone id */
  milestone?: Milestone;
}

export type UpdateNoteToRecurringTransactionData = any;

/** UpdateNoteToTransactionRequest updates a note to a transaction */
export interface UpdateNoteToRecurringTransactionRequest {
  /**
   * The note to update
   * Validations:
   * - cannot be nil hence required
   */
  note: SmartNote;
}

/** UpdateNoteToTransactionResponse is the responsed obtained after we update a note to a transaction */
export interface UpdateNoteToRecurringTransactionResponse {
  /**
   * The transaction id
   * Message representing recurring transactions associated with a Plaid account.
   */
  transaction?: PlaidAccountRecurringTransaction;
}

export type UpdateNoteToSmartGoalData = any;

export interface UpdateNoteToSmartGoalRequest {
  /**
   * The note to update
   * Validations:
   * - cannot be nil hence required
   */
  note: SmartNote;
}

export interface UpdateNoteToSmartGoalResponse {
  /** The smart goal id */
  note?: SmartNote;
}

export type UpdateNoteToTransactionData = any;

/** UpdateNoteToTransactionRequest updates a note to a transaction */
export interface UpdateNoteToTransactionRequest {
  /**
   * The note to update
   * Validations:
   * - cannot be nil hence required
   */
  note: SmartNote;
}

/** UpdateNoteToTransactionResponse is the responsed obtained after we update a note to a transaction */
export interface UpdateNoteToTransactionResponse {
  /**
   * The transaction id
   * Message representing Plaid account transactions.
   */
  transaction?: PlaidAccountTransaction;
}

export type UpdatePocketData = any;

export interface UpdatePocketRequest {
  /**
   * The pocket to update
   * Validations:
   * - cannot be nil hence required
   */
  pocket: Pocket;
}

export interface UpdatePocketResponse {
  /** The pocket id */
  pocket?: Pocket;
}

/** UpdateRecurringTransactionRequest is the update transaction request */
export interface UpdateRecurringTransactionRequest {
  /**
   * The transaction to update
   * Validations:
   * - cannot be nil hence required
   * Message representing recurring transactions associated with a Plaid account.
   */
  transaction: PlaidAccountRecurringTransaction;
}

/** UpdateRecurringTransactionResponse is the update transaction response */
export interface UpdateRecurringTransactionResponse {
  /**
   * The transaction that was successfully updated
   * Message representing recurring transactions associated with a Plaid account.
   */
  transaction?: PlaidAccountRecurringTransaction;
}

export type UpdateSmartGoalData = any;

export interface UpdateSmartGoalRequest {
  /**
   * The smart goal to update
   * Validations:
   * - cannot be nil hence required
   * SmartGoal: The Goals table stores information about each financial goal, including the name of the goal,
   * its description, the target amount of money the user wants to save or invest, and the expected date of completion.
   *
   * The Goals table also includes columns for the start date of the goal, the current amount of money saved or
   * invested towards the goal, and a boolean flag indicating whether the goal has been achieved.
   * These additional columns allow the user to track their progress towards the goal and see how much
   * more they need to save or invest to reach their target amount.
   */
  smartGoal: SmartGoal;
}

export interface UpdateSmartGoalResponse {
  /**
   * The smart goal id
   * @format uint64
   */
  smartGoalId?: string;
}

export type UpdateTransaction2Data = any;

export type UpdateTransactionData = any;

/** UpdateTransactionRequest is the update transaction request */
export interface UpdateTransactionRequest {
  /**
   * The transaction to update
   * Validations:
   * - cannot be nil hence required
   * Message representing Plaid account transactions.
   */
  transaction: PlaidAccountTransaction;
}

/** UpdateTransactionResponse is the update transaction response */
export interface UpdateTransactionResponse {
  /**
   * The transaction that was successfully updated
   * Message representing Plaid account transactions.
   */
  transaction?: PlaidAccountTransaction;
}

export type UpdateUserProfileData = any;

/**
 * UpdateUserProfileRequest: Represents the request object invoked against the user
 * service to update a user profile
 */
export interface UpdateUserProfileRequest {
  /**
   * User profile to update
   * Validation:
   * - cannot nil hence required
   */
  profile: FinancialUserProfile;
}

/**
 * UpdateUserProfileResponse: Represents the response object returned as a response to
 * the `update user profile` request
 */
export interface UpdateUserProfileResponse {
  profile?: FinancialUserProfile;
  profileUpdated?: boolean;
}

export type UpdatesBudgetData = any;

export type UpdatesMilestoneData = any;
