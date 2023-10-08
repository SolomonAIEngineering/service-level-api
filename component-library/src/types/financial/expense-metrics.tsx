import { ExpenseMetrics as ExpenseMetrics } from 'src/data-contracts/financial-service/data-contracts';
import { getRandomNumber } from 'src/lib-utils/utils';

/**
 * Represents the expense metrics related to a user's personal finance.
 *
 * @remarks
 * This class captures an overview of a user's monthly expenditure based on specific financial categories. It provides a comprehensive snapshot of the user's spending patterns, transaction frequency, and total expenses.
 *
 * @example Constructing an `ExpenseMetrics` instance
 *
 * ```ts
 * const data = {
 *   month: 6,
 *   personalFinanceCategoryPrimary: "Dining",
 *   transactionCount: 15,
 *   totalExpenses: 500,
 *   userId: 123
 * };
 *
 * const expenseMetrics = new ExpenseMetrics(data);
 * ```
 *
 * @property month - The month for which the expense metrics are recorded.
 * @property personalFinanceCategoryPrimary - The primary category under personal finance for which metrics are recorded.
 * @property transactionCount - The number of transactions carried out in that month under the given category.
 * @property totalExpenses - The total amount spent by the user in that month for the given category.
 * @property userId - The user ID for whom the metrics are calculated.
 */
class ExpenseMetricsClass implements ExpenseMetrics {
  month: number;
  personalFinanceCategoryPrimary: string;
  transactionCount: string;
  totalExpenses: number;
  userId: string;

  /**
   * Constructs a new ExpenseMetrics instance.
   *
   * @param data - Initialization data for the expense metrics.
   */
  constructor(data: Partial<ExpenseMetrics> = {}) {
    this.month = data.month ?? 0;
    this.personalFinanceCategoryPrimary =
      data.personalFinanceCategoryPrimary ?? '';
    this.transactionCount = data.transactionCount ?? '0';
    this.totalExpenses = data.totalExpenses ?? 0;
    this.userId = data.userId ?? '0';
  }

  /**
   * Creates a random instance of the expense metrics class with all fields populated.
   * @returns {ExpenseMetrics} A random ExpenseMetrics.
   */
  static randomInstance(): ExpenseMetrics {
    const categories = [
      'Dining',
      'Travel',
      'Groceries',
      'Entertainment',
      'Utilities',
      'Rent',
      'Shopping',
      'Transportation',
      'Healthcare',
      'Education',
      // ... add any other categories here
    ];

    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];

    return new ExpenseMetricsClass({
      month: getRandomNumber(1, 12),
      // randomize the category
      personalFinanceCategoryPrimary: randomCategory,
      transactionCount: Math.floor(Math.random() * 100).toString(),
      totalExpenses: Math.floor(Math.random() * 10000),
      userId: '123',
    });
  }
}

export { ExpenseMetricsClass };
