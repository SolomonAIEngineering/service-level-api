/**
 * Represents the comprehensive financial profile of a user.
 *
 * @remarks
 * This class provides a holistic view of a user's financial activities in a given month. It encapsulates the user's total income, total expenses, number of transactions, and the category where the most was spent.
 *
 * @example Constructing a `FinancialProfileMetrics` instance:
 *
 * ```ts
 * const data = {
 *   month: 6,
 *   totalIncome: 5000,
 *   totalExpenses: 3000,
 *   numberOfTransactions: 40,
 *   mostExpensiveCategory: "Travel",
 *   userId: 123
 * };
 *
 * const financialProfileMetrics = new FinancialProfileMetrics(data);
 * ```
 *
 * @property month - The month for which the financial profile is detailed.
 * @property totalIncome - The total income of the user for that month.
 * @property totalExpenses - The total expenditure of the user for that month.
 * @property numberOfTransactions - The number of transactions the user made during that month.
 * @property mostExpensiveCategory - The category in which the user spent the most during that month.
 * @property userId - The user ID associated with this financial profile.
 */
class FinancialProfileMetricsClass {
  month: number;
  totalIncome: number;
  totalExpenses: number;
  numberOfTransactions: number;
  mostExpensiveCategory: string;
  userId: number;

  /**
   * Constructs a new FinancialProfileMetrics instance.
   *
   * @param data - Initialization data for the financial profile.
   */
  constructor(data: Partial<FinancialProfileMetricsClass> = {}) {
    this.month = data.month ?? 0;
    this.totalIncome = data.totalIncome ?? 0;
    this.totalExpenses = data.totalExpenses ?? 0;
    this.numberOfTransactions = data.numberOfTransactions ?? 0;
    this.mostExpensiveCategory = data.mostExpensiveCategory ?? '';
    this.userId = data.userId ?? 0;
  }
}

export { FinancialProfileMetricsClass };
