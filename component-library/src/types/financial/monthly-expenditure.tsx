import { MonthlyExpenditure as MonthlyExpenditure } from 'src/data-contracts/financial-service/data-contracts';

/**
 * Represents the monthly expenditure of a user.
 *
 * @remarks
 * This class offers insights into the total expenditure of a user for a particular month, assisting in understanding their spending habits and financial decisions during that period.
 *
 * @example Constructing a `MonthlyExpenditure` instance:
 *
 * ```ts
 * const expenditureData = {
 *   month: 7,
 *   totalSpending: 500,
 *   userId: 12345,
 * };
 *
 * const userMonthlyExpenditure = new MonthlyExpenditure(expenditureData);
 * ```
 *
 * @property month - The month for which the expenditure is reported.
 * @property totalSpending - The total expenditure of the user for the month.
 * @property userId - The user ID associated with this expenditure record.
 */
class MonthlyExpenditureClass implements MonthlyExpenditure {
  month: number;
  totalSpending: number;
  userId: string;

  /**
   * Constructs a new MonthlyExpenditure instance.
   *
   * @param data - Initialization data for the monthly expenditure.
   */
  constructor(data: Partial<MonthlyExpenditure> = {}) {
    this.month = data.month ?? 0;
    this.totalSpending = data.totalSpending ?? 0;
    this.userId = data.userId ?? '0';
  }
}

export { MonthlyExpenditureClass };
