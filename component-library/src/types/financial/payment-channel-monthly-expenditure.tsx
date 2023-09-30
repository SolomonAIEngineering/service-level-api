/**
 * Represents the monthly expenditure of a payment channel.
 *
 * @remarks
 * This class provides insights into the monthly spending behavior of a user across different payment channels. It offers a detailed view of user spending patterns for each month, aiding financial analysis and decision-making.
 *
 * @example Constructing a `PaymentChannelMonthlyExpenditure` instance:
 *
 * ```ts
 * const monthlyExpenditureData = {
 *   month: 7,
 *   paymentChannel: 'Credit Card',
 *   totalSpending: 1200,
 *   userId: 12345
 * };
 *
 * const monthlyExpenditure = new PaymentChannelMonthlyExpenditure(monthlyExpenditureData);
 * ```
 *
 * @property month - The month for which the expenditure data is reported.
 * @property paymentChannel - The type of payment channel.
 * @property totalSpending - Total amount spent by the user through this channel for the specified month.
 * @property userId - The user ID associated with this record.
 */
class PaymentChannelMonthlyExpenditure {
  month: number;
  paymentChannel: string;
  totalSpending: number;
  userId: number;

  /**
   * Constructs a new PaymentChannelMonthlyExpenditure instance.
   *
   * @param data - Initialization data for the monthly expenditure of the payment channel.
   */
  constructor(data: Partial<PaymentChannelMonthlyExpenditure> = {}) {
    this.month = data.month ?? 0;
    this.paymentChannel = data.paymentChannel ?? '';
    this.totalSpending = data.totalSpending ?? 0;
    this.userId = data.userId ?? 0;
  }
}

export { PaymentChannelMonthlyExpenditure };
