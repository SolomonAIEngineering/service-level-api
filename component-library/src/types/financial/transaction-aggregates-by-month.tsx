import { TransactionAggregatesByMonth as TransactionAggregatesByMonth } from 'src/data-contracts/financial-service/data-contracts';

/**
 * Represents the aggregated transactions of a user by month.
 *
 * @remarks
 * This class is essential for generating monthly reports or providing insights into a user's spending habits.
 * By capturing the primary finance category, location, payment channel, and merchant name, it gives
 * a comprehensive view of the user's monthly transactions.
 *
 * @example Constructing a `TransactionAggregatesByMonth` instance:
 *
 * ```ts
 * // Sample transaction aggregate data
 * const aggregateData = {
 *   month: 5, // May
 *   personalFinanceCategoryPrimary: 'Food & Dining',
 *   locationCity: 'New York',
 *   paymentChannel: 'Online',
 *   merchantName: 'Restaurant XYZ',
 *   transactionCount: 15,
 *   totalAmount: 500,
 *   userId: 12345,
 * };
 *
 * const monthlyAggregate = new TransactionAggregatesByMonth(aggregateData);
 * ```
 *
 * @property month - The month (1-12) for which the transactions are aggregated.
 * @property personalFinanceCategoryPrimary - The primary category of the transaction, e.g., 'Food & Dining', 'Entertainment'.
 * @property locationCity - The city in which the transaction took place.
 * @property paymentChannel - The channel through which the payment was made, e.g., 'Online', 'In-store'.
 * @property merchantName - The name of the merchant or store where the transaction was made.
 * @property transactionCount - The total number of transactions made in the specified month.
 * @property totalAmount - The total amount spent in the specified month.
 * @property userId - Identifier of the user associated with these transactions.
 */
class TransactionAggregatesByMonthClass
  implements TransactionAggregatesByMonth
{
  month: number = 0;
  personalFinanceCategoryPrimary: string = '';
  locationCity: string = '';
  paymentChannel: string = '';
  merchantName: string = '';
  transactionCount: string = '';
  totalAmount: number = 0;
  userId: string = '';

  /**
   * Creates an instance of TransactionAggregatesByMonth.
   * @param data - Object containing properties for TransactionAggregatesByMonth.
   */
  constructor(data: Partial<TransactionAggregatesByMonthClass>) {
    Object.assign(this, data);
  }
}

export { TransactionAggregatesByMonthClass };
