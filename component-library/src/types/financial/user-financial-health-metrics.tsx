/**
 * Represents the financial health metrics of a user.
 *
 * @remarks
 * This class provides insights into a user's financial health by capturing vital metrics
 * such as income, expenses, and transaction diversity. It's an essential tool for financial
 * advisors, banking systems, or any platform aiming to provide financial advice or insights to users.
 *
 * @example Constructing a `UserFinancialHealthMetricsTable` instance:
 *
 * ```ts
 * // Sample financial health metrics data
 * const userMetrics = {
 *   userId: 12345,
 *   monthlyIncome: 5000,
 *   monthlyExpenses: 4000,
 *   transactionDiversity: 0.7,
 *   // ... other properties ...
 * };
 *
 * const userFinancialHealth = new UserFinancialHealthMetricsTable(userMetrics);
 * ```
 *
 * @property time - Timestamp when the metrics were recorded or updated.
 * @property userId - Identifier of the user associated with these metrics.
 * @property monthlyIncome - The user's total income on a monthly basis.
 * @property monthlyExpenses - The user's total expenses on a monthly basis.
 * @property transactionDiversity - A metric representing the diversity or variety of transactions.
 *                                 For instance, a value closer to 1 might indicate a diverse set
 *                                 of transactions across different categories.
 * @property debtToIncomeRatio - Ratio of a user's total debt to their income. A lower value is generally seen as favorable.
 * @property overdraftFrequency - Number of times the user has had an overdraft in a specific period,
 *                                e.g., the past month or year.
 */
class UserFinancialHealthMetricsTableClass {
  time: Date | undefined;
  userId: number = 0;
  monthlyIncome: number = 0;
  monthlyExpenses: number = 0;
  transactionDiversity: number = 0;
  debtToIncomeRatio: number = 0;
  overdraftFrequency: number = 0;

  /**
   * Creates an instance of UserFinancialHealthMetricsTable.
   * @param data - Object containing properties for UserFinancialHealthMetricsTable.
   */
  constructor(data: Partial<UserFinancialHealthMetricsTableClass>) {
    Object.assign(this, {
      ...data,
      time: data.time ? new Date(data.time) : undefined,
    });
  }
}

export { UserFinancialHealthMetricsTableClass };
