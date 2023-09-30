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
class IncomeMetricsFinancialSubProfile {
  month: number;
  incomeLastTwoWeeks: number;
  incomeLastMonth: number;
  incomeLastTwoMonths: number;
  incomeLastSixMonths: number;
  incomeLastYear: number;
  userId: number;

  /**
   * Constructs a new IncomeMetricsFinancialSubProfile instance.
   *
   * @param data - Initialization data for the income metrics.
   */
  constructor(data: Partial<IncomeMetricsFinancialSubProfile> = {}) {
    this.month = data.month ?? 0;
    this.incomeLastTwoWeeks = data.incomeLastTwoWeeks ?? 0;
    this.incomeLastMonth = data.incomeLastMonth ?? 0;
    this.incomeLastTwoMonths = data.incomeLastTwoMonths ?? 0;
    this.incomeLastSixMonths = data.incomeLastSixMonths ?? 0;
    this.incomeLastYear = data.incomeLastYear ?? 0;
    this.userId = data.userId ?? 0;
  }
}

export { IncomeMetricsFinancialSubProfile };
