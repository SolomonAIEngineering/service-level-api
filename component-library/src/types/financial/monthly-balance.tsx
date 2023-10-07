import { MonthlyBalance as MonthlyBalance } from 'src/data-contracts/financial-service/data-contracts';

/**
 * Represents the monthly balance of a user.
 *
 * @remarks
 * This class provides insights into the net balance of a user for a specific month, helping in understanding their financial health and status for that period.
 *
 * @example Constructing a `MonthlyBalance` instance:
 *
 * ```ts
 * const balanceData = {
 *   month: 7,
 *   netBalance: 1000,
 *   userId: 12345,
 * };
 *
 * const userMonthlyBalance = new MonthlyBalance(balanceData);
 * ```
 *
 * @property month - The month for which the balance is reported.
 * @property netBalance - The net balance of the user for the month.
 * @property userId - The user ID associated with this balance.
 */
class MonthlyBalanceClass implements MonthlyBalance {
  month: number;
  netBalance: number;
  userId: string;

  /**
   * Constructs a new MonthlyBalance instance.
   *
   * @param data - Initialization data for the monthly balance.
   */
  constructor(data: Partial<MonthlyBalance> = {}) {
    this.month = data.month ?? 0;
    this.netBalance = data.netBalance ?? 0;
    this.userId = data.userId ?? '0';
  }
}

export { MonthlyBalanceClass };
