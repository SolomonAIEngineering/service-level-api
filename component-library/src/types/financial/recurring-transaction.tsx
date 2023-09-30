import { ReCurringFlow } from './recurring-flow';
import { ReOccuringTransactionsStatus } from './recurring-transactions-status';
import { ReOccuringTransactionsFrequency } from './recurring-transactions-frequency';
import { Any } from '.';

/**
 * Represents a recurring financial transaction for a user.
 *
 * @remarks
 * This class captures and manages the specifics of a recurring financial transaction, such as subscriptions
 * or regular bill payments. It tracks transaction details, merchants, dates, and amounts, making it useful
 * for personal finance management applications or services.
 *
 * @example Constructing a `ReOccuringTransaction`
 *
 * ```ts
 * // Example data
 * const transactionData = {
 *   accountId: 'account123',
 *   description: 'Monthly subscription to streaming service',
 *   merchantName: 'StreamFlix',
 *   averageAmount: '14.99',
 *   averageAmountIsoCurrencyCode: 'USD',
 *   // Add other properties here
 * };
 *
 * const recurringTransaction = new ReOccuringTransaction(transactionData);
 * ```
 *
 * @property accountId - The unique identifier of the account associated with the transaction.
 * @property streamId - The unique identifier of the transaction stream.
 * @property categoryId - The unique identifier of the category associated with the transaction.
 * @property description - A brief overview of the transaction's purpose.
 * @property merchantName - The name of the merchant or business entity related to the transaction.
 * @property personalFinanceCategoryPrimary - The primary financial category of the transaction.
 * @property personalFinanceCategoryDetailed - The more detailed categorization of the transaction.
 * @property firstDate - The date when the transaction first occurred.
 * @property lastDate - The date of the most recent occurrence of the transaction.
 * @property frequency - How often the transaction occurs (e.g., weekly, monthly).
 * @property transactionIds - A list of unique transaction IDs associated with this recurring transaction.
 * @property averageAmount - The typical transaction amount for this recurring item.
 * @property averageAmountIsoCurrencyCode - The currency code of the average transaction amount.
 * @property lastAmount - The amount from the most recent transaction occurrence.
 * @property lastAmountIsoCurrencyCode - The currency code of the most recent transaction amount.
 * @property isActive - Flag indicating if the transaction is still active or not.
 * @property status - The current status of the recurring transaction (e.g., active, paused).
 * @property updatedTime - The last time the transaction details were updated.
 * @property userId - The identifier of the user associated with this transaction.
 * @property linkId - The unique identifier of a linked transaction or reference.
 * @property id - The unique identifier of this recurring transaction.
 * @property flow - The direction or flow of the transaction (e.g., inbound, outbound).
 * @property sign - A numerical indicator that signifies the nature of the transaction (e.g., credit, debit).
 * @property time - The exact timestamp of the transaction.
 * @property additionalProperties - Any extra data or properties associated with the transaction.
 */
class ReOccuringTransaction {
  /** The unique identifier of the account associated with the transaction. */
  public accountId = '';

  /** The unique identifier of the transaction stream. */
  public streamId = '';

  /** The unique identifier of the category associated with the transaction. */
  public categoryId = '';

  /** A description of the transaction. */
  public description = '';

  /** The name of the merchant. */
  public merchantName = '';

  /** The primary personal finance category of the transaction. */
  public personalFinanceCategoryPrimary = '';

  /** The detailed personal finance category of the transaction. */
  public personalFinanceCategoryDetailed = '';

  /** The date of the first occurrence of the transaction. */
  public firstDate = '';

  /** The date of the last occurrence of the transaction. */
  public lastDate = '';

  /** The frequency of the recurring transaction. */
  public frequency: ReOccuringTransactionsFrequency =
    ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_UNSPECIFIED;

  /** A comma-separated list of transaction IDs. */
  public transactionIds = '';

  /** The average amount of the transaction. */
  public averageAmount = '';

  /** The ISO currency code of the average amount. */
  public averageAmountIsoCurrencyCode = '';

  /** The amount of the last occurrence of the transaction. */
  public lastAmount = '';

  /** The ISO currency code of the last amount. */
  public lastAmountIsoCurrencyCode = '';

  /** Indicates whether the transaction is active. */
  public isActive = false;

  /** The status of the recurring transaction. */
  public status: ReOccuringTransactionsStatus =
    ReOccuringTransactionsStatus.RE_OCCURING_TRANSACTIONS_STATUS_UNSPECIFIED;

  /** The last time the transaction was updated. */
  public updatedTime = '';

  /** The unique identifier of the user associated with the transaction. */
  public userId = 0;

  /** The unique identifier of the linked transaction. */
  public linkId = 0;

  /** The unique identifier of the transaction. */
  public id = '';

  /** The flow of the recurring transaction. */
  public flow: ReCurringFlow = ReCurringFlow.UNRECOGNIZED;

  /** A numerical sign associated with the transaction. */
  public sign = 0;

  /** The date and time of the transaction. */
  public time: Date | undefined;

  /** Additional properties associated with the transaction. */
  public additionalProperties: Any | undefined;

  /**
   * Creates an instance of ReOccuringTransaction.
   * @param data - Object containing properties for ReOccuringTransaction.
   * @example
   * const transactionData = {
   *   accountId: 'account123',
   *   description: 'Monthly subscription',
   *   // Add other properties here
   * };
   * const recurringTransaction = new ReOccuringTransaction(transactionData);
   */
  constructor(data: Partial<ReOccuringTransaction>) {
    if (data) {
      Object.assign(this, {
        ...data,
        time: data.time ? new Date(data.time) : undefined,
      });
    }
  }

  static randomInstance(): ReOccuringTransaction {
    return new ReOccuringTransaction({
      accountId: 'account123',
      streamId: 'stream123',
      categoryId: 'category123',

      description: 'Monthly subscription',
      merchantName: 'StreamFlix',
      personalFinanceCategoryPrimary: 'Entertainment',
      personalFinanceCategoryDetailed: 'Streaming Services',
      firstDate: '2020-01-01',
      lastDate: '2020-12-31',
      frequency:
        ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_MONTHLY,
      transactionIds: 'transaction123',
      averageAmount: '14.99',
      averageAmountIsoCurrencyCode: 'USD',
      lastAmount: '14.99',
      lastAmountIsoCurrencyCode: 'USD',
      isActive: true,
      status:
        ReOccuringTransactionsStatus.RE_OCCURING_TRANSACTIONS_STATUS_MATURE,
      updatedTime: '2020-01-01',
      userId: 123,
      linkId: 123,
      id: 'transaction123',
      flow: ReCurringFlow.UNRECOGNIZED,
      sign: 0,
      time: new Date(),
    });
  }
}

export { ReOccuringTransaction };
