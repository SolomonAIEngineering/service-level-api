import { CategoryMetricsFinancialSubProfile as CategoryMetricsFinancialSubProfile } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Represents the financial sub-profile of a category.
 *
 * @remarks
 * This class is used to store and manage the details of the financial metrics associated with a specific category.
 * It offers a detailed view into the financial transactions, spending habits, and more over various time periods.
 *
 * @example Constructing a `CategoryMetricsFinancialSubProfile` instance
 *
 * ```ts
 * const data = {
 *   month: 5,
 *   personalFinanceCategoryPrimary: 'Groceries',
 *   transactionCount: 10,
 *   spentLastWeek: 50.00,
 *   spentLastTwoWeeks: 95.00,
 *   spentLastMonth: 200.00,
 *   spentLastSixMonths: 1200.00,
 *   spentLastYear: 2400.00,
 *   spentLastTwoYears: 4800.00,
 *   userId: 1
 * };
 *
 * const metricsProfile = new CategoryMetricsFinancialSubProfile(data);
 * ```
 *
 * @property month - The month for which the metrics are recorded.
 * @property personalFinanceCategoryPrimary - The primary category of personal finance for these metrics.
 * @property transactionCount - The number of transactions made in the category.
 * @property spentLastWeek - Amount spent in the last week for this category.
 * @property spentLastTwoWeeks - Amount spent in the last two weeks for this category.
 * @property spentLastMonth - Amount spent in the last month for this category.
 * @property spentLastSixMonths - Amount spent in the last six months for this category.
 * @property spentLastYear - Amount spent in the last year for this category.
 * @property spentLastTwoYears - Amount spent in the last two years for this category.
 * @property userId - The user ID associated with these metrics.
 */
declare class CategoryMetricsFinancialSubProfileClass implements CategoryMetricsFinancialSubProfile {
    month: number;
    personalFinanceCategoryPrimary: string;
    transactionCount: string;
    spentLastWeek: number;
    spentLastTwoWeeks: number;
    spentLastMonth: number;
    spentLastSixMonths: number;
    spentLastYear: number;
    spentLastTwoYears: number;
    userId: string;
    /**
     * Constructs a new CategoryMetricsFinancialSubProfile instance.
     *
     * @param data - Initialization data for the financial sub-profile.
     */
    constructor(data?: Partial<CategoryMetricsFinancialSubProfile>);
}
export { CategoryMetricsFinancialSubProfileClass };
