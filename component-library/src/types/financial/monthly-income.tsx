import { MonthlyIncome as MonthlyIncome } from 'src/data-contracts/financial-service/data-contracts';

/**
 * Represents the monthly income of a user.
 *
 * @remarks
 * This class provides insights into the total income of a user for a particular month, assisting in understanding their income sources and financial gains during that timeframe.
 *
 * @example Constructing a `MonthlyIncome` instance:
 *
 * ```ts
 * const incomeData = {
 *   month: 7,
 *   totalIncome: 1500,
 *   userId: 12345,
 * };
 *
 * const userMonthlyIncome = new MonthlyIncome(incomeData);
 * ```
 *
 * @property month - The month for which the income is reported.
 * @property totalIncome - The total income of the user for the month.
 * @property userId - The user ID associated with this income record.
 */
class MonthlyIncomeClass implements MonthlyIncome {
  month: number;
  totalIncome: number;
  userId: string;

  /**
   * Constructs a new MonthlyIncome instance.
   *
   * @param data - Initialization data for the monthly income.
   */
  constructor(data: Partial<MonthlyIncome> = {}) {
    this.month = data.month ?? 0;
    this.totalIncome = data.totalIncome ?? 0;
    this.userId = data.userId ?? '0';
  }
}

export { MonthlyIncomeClass };
