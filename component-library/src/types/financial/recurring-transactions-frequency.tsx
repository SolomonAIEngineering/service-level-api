/**
 * Represents the frequency of a recurring transaction.
 *
 * @remarks
 * This enumeration provides a range of possible frequencies for recurring financial transactions.
 * It helps to classify the regularity at which a user might be billed or receive payments.
 * From weekly to annually, this enum ensures clear representation of time intervals for
 * financial activities in applications or services.
 *
 * @example Using `ReOccuringTransactionsFrequency` in a function:
 *
 * ```ts
 * function getNextBillingDate(startDate: Date, frequency: ReOccuringTransactionsFrequency): Date {
 *   let resultDate = new Date(startDate);
 *   switch (frequency) {
 *     case ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_WEEKLY:
 *       resultDate.setDate(resultDate.getDate() + 7);
 *       break;
 *     // Handle other frequencies...
 *     default:
 *       break;
 *   }
 *   return resultDate;
 * }
 * ```
 *
 * @enum
 * @property RE_OCCURING_TRANSACTIONS_FREQUENCY_UNSPECIFIED - Default value when the frequency is not specified or recognized.
 * @property RE_OCCURING_TRANSACTIONS_FREQUENCY_WEEKLY - Represents a transaction that occurs every week.
 * @property RE_OCCURING_TRANSACTIONS_FREQUENCY_BIWEEKLY - Represents a transaction that occurs every two weeks.
 * @property RE_OCCURING_TRANSACTIONS_FREQUENCY_SEMI_MONTHLY - Represents a transaction that occurs twice a month.
 * @property RE_OCCURING_TRANSACTIONS_FREQUENCY_MONTHLY - Represents a transaction that occurs once a month.
 * @property RE_OCCURING_TRANSACTIONS_FREQUENCY_ANNUALLY - Represents a transaction that occurs once a year.
 * @property UNRECOGNIZED - Represents an unrecognized or unsupported frequency value.
 */
enum ReOccuringTransactionsFrequency {
  RE_OCCURING_TRANSACTIONS_FREQUENCY_UNSPECIFIED = 0,
  RE_OCCURING_TRANSACTIONS_FREQUENCY_WEEKLY = 1,
  RE_OCCURING_TRANSACTIONS_FREQUENCY_BIWEEKLY = 2,
  RE_OCCURING_TRANSACTIONS_FREQUENCY_SEMI_MONTHLY = 3,
  RE_OCCURING_TRANSACTIONS_FREQUENCY_MONTHLY = 4,
  RE_OCCURING_TRANSACTIONS_FREQUENCY_ANNUALLY = 5,
  UNRECOGNIZED = -1,
}

export { ReOccuringTransactionsFrequency };
