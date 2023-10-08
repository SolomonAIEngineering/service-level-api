import { IncomeMetrics as IncomeMetrics } from 'src/data-contracts/financial-service/data-contracts';
import { getRandomNumber } from 'src/lib-utils/utils';

/**
 * Represents the income metrics for a user.
 *
 * @remarks
 * This class provides an overview of a user's income activity, including the category, transaction count, and total income. It helps in tracking and analyzing the income patterns for a specific month.
 *
 * @example Constructing an `IncomeMetrics` instance:
 *
 * ```ts
 * const data = {
 *   month: 6,
 *   personalFinanceCategoryPrimary: 'Salary',
 *   transactionCount: 2,
 *   totalIncome: 5000,
 *   userId: 123
 * };
 *
 * const incomeDetails = new IncomeMetrics(data);
 * ```
 *
 * @property month - The month for which the income metrics are detailed.
 * @property personalFinanceCategoryPrimary - The primary financial category associated with the income.
 * @property transactionCount - The total number of income transactions for the specified month.
 * @property totalIncome - The total income amount for the month.
 * @property userId - The user ID associated with these income metrics.
 */
class IncomeMetricsClass implements IncomeMetrics {
  month: number;
  personalFinanceCategoryPrimary: string;
  transactionCount: string;
  totalIncome: number;
  userId: string;

  /**
   * Constructs a new IncomeMetrics instance.
   *
   * @param data - Initialization data for the income metrics.
   */
  constructor(data: Partial<IncomeMetrics> = {}) {
    this.month = data.month ?? 0;
    this.personalFinanceCategoryPrimary =
      data.personalFinanceCategoryPrimary ?? '';
    this.transactionCount = data.transactionCount ?? '0';
    this.totalIncome = data.totalIncome ?? 0;
    this.userId = data.userId ?? '0';
  }

  /**
   * Creates a random instance of the income metrics class with all fields populated.
   * @returns {IncomeMetrics} A random IncomeMetrics.
   */
  static randomInstance(): IncomeMetrics {
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

    return new IncomeMetricsClass({
      month: getRandomNumber(1, 12),
      // randomize the category
      personalFinanceCategoryPrimary: randomCategory,
      transactionCount: Math.floor(Math.random() * 100).toString(),
      totalIncome: Math.floor(Math.random() * 10000),
      userId: '123',
    });
  }
}

export { IncomeMetricsClass };
