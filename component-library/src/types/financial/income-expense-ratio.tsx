/**
 * Represents the income-expense ratio of a user for a particular month.
 *
 * @remarks
 * This class provides insight into a user's financial health by comparing the total income to total expenses. A ratio greater than 1 indicates that income exceeds expenses, which is a positive financial indicator. Conversely, a ratio less than 1 indicates expenses exceeding income, suggesting potential financial challenges.
 *
 * @example Constructing an `IncomeExpenseRatio` instance:
 *
 * ```ts
 * const data = {
 *   month: 6,
 *   ratio: 1.5,
 *   userId: 123
 * };
 *
 * const incomeExpenseRatio = new IncomeExpenseRatio(data);
 * ```
 *
 * @property month - The month for which the income-expense ratio is detailed.
 * @property ratio - The calculated ratio between total income and total expenses for the user for that month.
 * @property userId - The user ID associated with this income-expense ratio.
 */
class IncomeExpenseRatio {
  month: number;
  ratio: number;
  userId: number;

  /**
   * Constructs a new IncomeExpenseRatio instance.
   *
   * @param data - Initialization data for the income-expense ratio.
   */
  constructor(data: Partial<IncomeExpenseRatio> = {}) {
    this.month = data.month ?? 0;
    this.ratio = data.ratio ?? 0;
    this.userId = data.userId ?? 0;
  }
}

export { IncomeExpenseRatio };
