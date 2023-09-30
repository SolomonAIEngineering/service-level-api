/**
 * Represents the different statuses of reoccurring transactions.
 *
 * @remarks
 * This class encapsulates the different statuses of reoccurring transactions like unspecified, mature, early detection, tombstoned, and unrecognized. This is useful for understanding the maturity and consistency of recurring transactions.
 *
 * @example Using `ReOccuringTransactionsStatus`:
 *
 * ```ts
 * const transactionStatus = ReOccuringTransactionsStatus.RE_OCCURING_TRANSACTIONS_STATUS_MATURE;
 * if (transactionStatus === ReOccuringTransactionsStatus.RE_OCCURING_TRANSACTIONS_STATUS_MATURE) {
 *   console.log('The transaction is mature.');
 * }
 * ```
 *
 */
enum ReOccuringTransactionsStatus {
  RE_OCCURING_TRANSACTIONS_STATUS_UNSPECIFIED = 0,
  /**
   * RE_OCCURING_TRANSACTIONS_STATUS_MATURE - A MATURE recurring stream should have at least 3 transactions and happen
   *  on a regular cadence (For Annual recurring stream, we will mark it MATURE after 2 instances).
   */
  RE_OCCURING_TRANSACTIONS_STATUS_MATURE = 1,
  /**
   * RE_OCCURING_TRANSACTIONS_STATUS_EARLY_DETECTION - When a recurring transaction first appears in the transaction history and before it fulfills
   * the requirement of a mature stream, the status will be EARLY_DETECTION.
   */
  RE_OCCURING_TRANSACTIONS_STATUS_EARLY_DETECTION = 2,
  /**
   * RE_OCCURING_TRANSACTIONS_STATUS_TOMBSTONED - A stream that was previously in the EARLY_DETECTION status will move to the TOMBSTONED
   * status when no further transactions were found at the next expected date.
   */
  RE_OCCURING_TRANSACTIONS_STATUS_TOMBSTONED = 3,
  UNRECOGNIZED = -1,
}

export { ReOccuringTransactionsStatus };
