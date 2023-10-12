import { CategoryMonthlyIncome as CategoryMonthlyIncome } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Represents the monthly income of a category.
 *
 * @remarks
 * This class provides insights into the monthly income habits of a user for a specific category.
 * It can be valuable for tracking income patterns and understanding financial behaviors over time.
 *
 * @example Constructing a `CategoryMonthlyIncome` instance
 *
 * ```ts
 * const data = {
 *   month: 6,
 *   personalFinanceCategoryPrimary: 'Salary',
 *   totalIncome: 3000,
 *   userId: 123
 * };
 *
 * const monthlyIncome = new CategoryMonthlyIncome(data);
 * ```
 *
 * @property month - The month for which the income is recorded.
 * @property personalFinanceCategoryPrimary - The primary category of personal finance for this income.
 * @property totalIncome - Total income received in the specified month for this category.
 * @property userId - The user ID associated with this income.
 */
declare class CategoryMonthlyIncomeClass implements CategoryMonthlyIncome {
    month: number;
    personalFinanceCategoryPrimary: string;
    totalIncome: number;
    userId: string;
    /**
     * Constructs a new CategoryMonthlyIncome instance.
     *
     * @param data - Initialization data for the monthly income.
     */
    constructor(data: Partial<CategoryMonthlyIncome>);
}
export { CategoryMonthlyIncomeClass };