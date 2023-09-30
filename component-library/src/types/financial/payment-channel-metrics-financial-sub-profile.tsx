/**
 * Represents the financial sub profile of a payment channel.
 *
 * @remarks
 * This class provides insights into a user's spending behavior and patterns across different payment channels. It helps in understanding user preferences and can be instrumental in tailoring offerings to user habits.
 *
 * @example Constructing a `PaymentChannelMetricsFinancialSubProfile` instance:
 *
 * ```ts
 * const paymentChannelData = {
 *   paymentChannel: 'Credit Card',
 *   spentLastWeek: 200,
 *   spentLastTwoWeeks: 500,
 *   spentLastMonth: 1200,
 *   spentLastSixMonths: 7500,
 *   spentLastYear: 15000,
 *   spentLastTwoYears: 30000,
 *   userId: 12345,
 *   month: 7,
 *   transactionCount: 25
 * };
 *
 * const paymentChannelProfile = new PaymentChannelMetricsFinancialSubProfile(paymentChannelData);
 * ```
 *
 * @property paymentChannel - The type of payment channel.
 * @property spentLastWeek - Amount spent by the user through this channel in the last week.
 * @property spentLastTwoWeeks - Amount spent in the last two weeks.
 * @property spentLastMonth - Amount spent in the last month.
 * @property spentLastSixMonths - Amount spent in the last six months.
 * @property spentLastYear - Amount spent in the last year.
 * @property spentLastTwoYears - Amount spent in the last two years.
 * @property userId - The user ID associated with this record.
 * @property month - The month for which the data is reported.
 * @property transactionCount - Number of transactions made through this channel in the specified month.
 */
class PaymentChannelMetricsFinancialSubProfile {
  paymentChannel: string;
  spentLastWeek: number;
  spentLastTwoWeeks: number;
  spentLastMonth: number;
  spentLastSixMonths: number;
  spentLastYear: number;
  spentLastTwoYears: number;
  userId: number;
  month: number;
  transactionCount: number;

  /**
   * Constructs a new PaymentChannelMetricsFinancialSubProfile instance.
   *
   * @param data - Initialization data for the financial sub profile of the payment channel.
   */
  constructor(data: Partial<PaymentChannelMetricsFinancialSubProfile> = {}) {
    this.paymentChannel = data.paymentChannel ?? '';
    this.spentLastWeek = data.spentLastWeek ?? 0;
    this.spentLastTwoWeeks = data.spentLastTwoWeeks ?? 0;
    this.spentLastMonth = data.spentLastMonth ?? 0;
    this.spentLastSixMonths = data.spentLastSixMonths ?? 0;
    this.spentLastYear = data.spentLastYear ?? 0;
    this.spentLastTwoYears = data.spentLastTwoYears ?? 0;
    this.userId = data.userId ?? 0;
    this.month = data.month ?? 0;
    this.transactionCount = data.transactionCount ?? 0;
  }
}

export { PaymentChannelMetricsFinancialSubProfile };
