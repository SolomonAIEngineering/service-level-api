/**
 * Represents the monthly savings of a user.
 *
 * @remarks
 * This class provides insights into the net savings of a user for a particular month. It assists in understanding their financial health, disciplined spending, and savings habits during that timeframe.
 *
 * @example Constructing a `MonthlySavings` instance:
 *
 * ```ts
 * const savingsData = {
 *   month: 7,
 *   netSavings: 800,
 *   userId: 12345,
 * };
 *
 * const userMonthlySavings = new MonthlySavings(savingsData);
 * ```
 *
 * @property month - The month for which the savings are reported.
 * @property netSavings - The net savings amount of the user for the month.
 * @property userId - The user ID associated with this savings record.
 */
class MonthlySavings {
  month: number;
  netSavings: number;
  userId: number;

  /**
   * Constructs a new MonthlySavings instance.
   *
   * @param data - Initialization data for the monthly savings.
   */
  constructor(data: Partial<MonthlySavings> = {}) {
    this.month = data.month ?? 0;
    this.netSavings = data.netSavings ?? 0;
    this.userId = data.userId ?? 0;
  }
}

export { MonthlySavings };
