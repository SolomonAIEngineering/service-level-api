import { IncomeMetricsFinancialSubProfile as IncomeMetricsFinancialSubProfile } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Represents the income metrics for a user's financial sub-profile.
 *
 * @remarks
 * This class offers an insight into a user's historical income patterns, providing data points for various intervals like the last two weeks, last month, and so forth. It's crucial for financial analysis and planning.
 *
 * @example Constructing an `IncomeMetricsFinancialSubProfile` instance:
 *
 * ```ts
 * const data = {
 *   month: 6,
 *   incomeLastTwoWeeks: 2000,
 *   incomeLastMonth: 4000,
 *   incomeLastTwoMonths: 7500,
 *   incomeLastSixMonths: 22000,
 *   incomeLastYear: 50000,
 *   userId: 123
 * };
 *
 * const incomeMetrics = new IncomeMetricsFinancialSubProfile(data);
 * ```
 *
 * @property month - The month for which the income metrics are detailed.
 * @property incomeLastTwoWeeks - The total income for the last two weeks.
 * @property incomeLastMonth - The total income for the last month.
 * @property incomeLastTwoMonths - The total income for the last two months.
 * @property incomeLastSixMonths - The total income for the last six months.
 * @property incomeLastYear - The total income for the last year.
 * @property userId - The user ID associated with these income metrics.
 */
declare class IncomeMetricsFinancialSubProfileClass implements IncomeMetricsFinancialSubProfile {
    month: number;
    incomeLastTwoWeeks: number;
    incomeLastMonth: number;
    incomeLastTwoMonths: number;
    incomeLastSixMonths: number;
    incomeLastYear: number;
    userId: string;
    /**
     * Constructs a new IncomeMetricsFinancialSubProfile instance.
     *
     * @param data - Initialization data for the income metrics.
     */
    constructor(data?: Partial<IncomeMetricsFinancialSubProfile>);
}
export { IncomeMetricsFinancialSubProfileClass };
