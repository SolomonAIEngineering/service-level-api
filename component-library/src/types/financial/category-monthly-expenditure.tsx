/**
 * Represents the monthly expenditure of a category.
 *
 * @remarks
 * This class provides insights into the monthly spending habits of a user for a specific category.
 * It can be beneficial for tracking spending patterns and understanding financial behaviors over time.
 *
 * @example Constructing a `CategoryMonthlyExpenditure` instance
 *
 * ```ts
 * const data = {
 *   month: 5,
 *   personalFinanceCategoryPrimary: 'Utilities',
 *   totalSpending: 150.00,
 *   userId: 1
 * };
 *
 * const monthlyExpenditure = new CategoryMonthlyExpenditure(data);
 * ```
 *
 * @property month - The month for which the expenditure is recorded.
 * @property personalFinanceCategoryPrimary - The primary category of personal finance for this expenditure.
 * @property totalSpending - Total amount spent in the specified month for this category.
 * @property userId - The user ID associated with this expenditure.
 */
class CategoryMonthlyExpenditure {
  month: number = 0;
  personalFinanceCategoryPrimary: string = '';
  totalSpending: number = 0;
  userId: number = 0;

  /**
   * Constructs a new CategoryMonthlyExpenditure instance.
   *
   * @param data - Initialization data for the monthly expenditure.
   */
  constructor(data: Partial<CategoryMonthlyExpenditure> = {}) {
    if (data)
      Object.assign(this, {
        ...data,
      });
  }
}

export { CategoryMonthlyExpenditure };
