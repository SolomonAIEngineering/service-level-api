import {
  BankAccount,
  CategoryMetricsFinancialSubProfile,
  CreditAccount,
  ExpenseMetricsFinancialSubProfileMetrics,
  IncomeMetricsFinancialSubProfile,
  InvestmentAccount,
  LocationFinancialSubProfile,
  MelodyFinancialContext as MelodyFinancialContext,
  MerchantMetricsFinancialSubProfile,
  MortgageAccount,
  PaymentChannelMetricsFinancialSubProfile,
  StudentLoanAccount,
} from 'src/data-contracts/financial-service/data-contracts';

/**
 * Represents the comprehensive financial context of a user.
 *
 * @remarks
 * This class captures a holistic view of a user's financial life, covering various aspects from categories
 * and expenses to different account types. By holding this extensive information, it becomes the foundation
 * for financial decision-making, insights generation, and personalized recommendations.
 *
 * @example Constructing a `MelodyFinancialContext` instance:
 *
 * ```ts
 * // Sample data
 * const financialContextData = {
 *   categories: [...], // array of CategoryMetricsFinancialSubProfile instances
 *   expenses: [...],   // array of ExpenseMetricsFinancialSubProfileMetrics instances
 *   income: [...],     // array of IncomeMetricsFinancialSubProfile instances
 *   // Add other properties here
 * };
 *
 * const userFinancialContext = new MelodyFinancialContext(financialContextData);
 * ```
 *
 * @property categories - Array of metrics related to financial categories.
 * @property expenses - Array of metrics related to expenses.
 * @property income - Array of metrics related to income sources.
 * @property locations - Array of location-specific financial metrics.
 * @property merchants - Array of metrics concerning merchants.
 * @property paymentChannels - Array of metrics related to different payment channels.
 * @property bankAccounts - Array of user's bank accounts.
 * @property investmentAccounts - Array of user's investment accounts.
 * @property creditAccounts - Array of user's credit accounts.
 * @property mortgageLoanAccounts - Array of user's mortgage accounts.
 * @property studentLoanAccounts - Array of user's student loan accounts.
 */
class MelodyFinancialContextClass implements MelodyFinancialContext {
  categories: CategoryMetricsFinancialSubProfile[] = [];
  expenses: ExpenseMetricsFinancialSubProfileMetrics[] = [];
  income: IncomeMetricsFinancialSubProfile[] = [];
  locations: LocationFinancialSubProfile[] = [];
  merchants: MerchantMetricsFinancialSubProfile[] = [];
  paymentChannels: PaymentChannelMetricsFinancialSubProfile[] = [];
  bankAccounts: BankAccount[] = [];
  investmentAccounts: InvestmentAccount[] = [];
  creditAccounts: CreditAccount[] = [];
  mortgageLoanAccounts: MortgageAccount[] = [];
  studentLoanAccounts: StudentLoanAccount[] = [];

  /**
   * Creates an instance of MelodyFinancialContext.
   * @param data - Object containing properties for MelodyFinancialContext.
   */
  constructor(data: Partial<MelodyFinancialContext>) {
    Object.assign(this, data);
  }
}

export { MelodyFinancialContextClass };
