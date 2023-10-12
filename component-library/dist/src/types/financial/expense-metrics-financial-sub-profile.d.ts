import { ExpenseMetricsFinancialSubProfileMetrics as ExpenseMetricsFinancialSubProfileMetrics } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Represents the financial sub-profile metrics related to a user's expenses.
 *
 * @remarks
 * This class captures a detailed overview of a user's spending habits, tracking expenses on various timelines and categorizing them into discretionary and recurring spending.
 * Discretionary spending refers to non-essential expenses, while recurring spending covers fixed, consistent expenses like rent or mortgage.
 *
 * @example Constructing an `ExpenseMetricsFinancialSubProfileMetrics` instance
 *
 * ```ts
 * const data = {
 *   month: 6,
 *   spentLastWeek: 100,
 *   spentLastMonth: 400,
 *   spentLastSixMonths: 2400,
 *   averageMonthlyDiscretionarySpending: 200,
 *   averageMonthlyRecurringSpending: 800,
 *   userId: 123
 * };
 *
 * const expenseMetrics = new ExpenseMetricsFinancialSubProfileMetrics(data);
 * ```
 *
 * @property month - The month for which the financial metrics are recorded.
 * @property spentLastWeek - The total amount spent by the user in the last week.
 * @property spentLastMonth - The total amount spent by the user in the last month.
 * @property spentLastSixMonths - The total amount spent by the user in the last six months.
 * @property averageMonthlyDiscretionarySpending - The average amount spent by the user on non-essential items every month.
 * @property averageMonthlyRecurringSpending - The average monthly fixed expenses of the user.
 * @property userId - The user ID for whom the metrics are calculated.
 */
declare class ExpenseMetricsFinancialSubProfileMetricsClass implements ExpenseMetricsFinancialSubProfileMetrics {
    month: number;
    spentLastWeek: number;
    spentLastMonth: number;
    spentLastSixMonths: number;
    averageMonthlyDiscretionarySpending: number;
    averageMonthlyRecurringSpending: number;
    userId: string;
    /**
     * Constructs a new ExpenseMetricsFinancialSubProfileMetrics instance.
     *
     * @param data - Initialization data for the financial sub profile metrics.
     */
    constructor(data?: Partial<ExpenseMetricsFinancialSubProfileMetrics>);
}
export { ExpenseMetricsFinancialSubProfileMetricsClass };
