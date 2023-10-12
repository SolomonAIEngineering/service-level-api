import { CategoryMonthlyTransactionCount as CategoryMonthlyTransactionCount } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Represents the monthly transaction count of a category.
 *
 * @remarks
 * This class provides insights into the monthly transaction frequency of a user for a specific category.
 * It helps in understanding the user's transactional habits and identifying financial behaviors over specific months.
 *
 * @example Constructing a `CategoryMonthlyTransactionCount` instance
 *
 * ```ts
 * const data = {
 *   month: 6,
 *   personalFinanceCategoryPrimary: 'Groceries',
 *   transactionCount: 15,
 *   userId: 123
 * };
 *
 * const monthlyTransactionCount = new CategoryMonthlyTransactionCount(data);
 * ```
 *
 * @property month - The month for which the transaction count is recorded.
 * @property personalFinanceCategoryPrimary - The primary category of personal finance for these transactions.
 * @property transactionCount - Total number of transactions in the specified month for this category.
 * @property userId - The user ID associated with these transactions.
 */
declare class CategoryMonthlyTransactionCountClass implements CategoryMonthlyTransactionCount {
    month: number;
    personalFinanceCategoryPrimary: string;
    transactionCount: number;
    userId: string;
    /**
     * Constructs a new CategoryMonthlyTransactionCount instance.
     *
     * @param data - Initialization data for the monthly transaction count.
     */
    constructor(data?: Partial<CategoryMonthlyTransactionCount>);
}
export { CategoryMonthlyTransactionCountClass };
