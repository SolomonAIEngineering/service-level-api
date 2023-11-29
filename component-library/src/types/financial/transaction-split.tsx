import { TransactionSplit } from 'src/data-contracts/financial-service/data-contracts';
import { getRandomNumber, getRandomString } from 'src/lib-utils/utils';

class TransactionSplitClass implements TransactionSplit {
  /**
   * The amount of money involved in the transaction.
   * @format double
   */
  amount?: number;
  /**
   * The time at which the transaction was authorized (time field)
   * @format date-time
   */
  authorizedDate?: string;
  /**
   * The date-time when the transaction was authorized.
   * @format date-time
   */
  authorizedDatetime?: string;
  /** The set of categories that the transaction belongs to. */
  categories?: Array<string>;
  /** The description of the transaction. */
  description?: string;
  /**
   * The unique ID for this transaction.
   * @format uint64
   */
  id?: string;
  /**
   * The link ID associated with this transaction.
   * @format uint64
   */
  linkId?: string;
  /** The detailed personal finance category of the transaction. */
  personalFinanceCategoryDetailed?: string;
  /** The primary personal finance category of the transaction. */
  personalFinanceCategoryPrimary?: string;
  /** Tags associated with this transaction. */
  tags?: Array<string>;
  /**
   * The time of split of the transaction
   * @format date-time
   */
  timeOfSplit?: string;
  /**
   * The user ID associated with this transaction.
   * @format uint64
   */
  userId?: string;

  /**
   * Creates an instance of TransactionSplitClass.
   *
   * @param data - Object with details for TransactionSplit.
   */

  constructor(data: Partial<TransactionSplit>) {
    Object.assign(this, data);
  }

  /**
   * Creates an instance of TransactionSplitClass.
   *
   * @param data - Object with details for TransactionSplit.
   */
  public static randomInstance(): TransactionSplit {
    return new TransactionSplitClass({
      amount: getRandomNumber(100, 1000),
      authorizedDate: getRandomString(10),
      authorizedDatetime: getRandomString(10),
      categories: Array.from({ length: 3 }, () => getRandomString(10)),
      description: getRandomString(10),
      id: getRandomString(10),
      linkId: getRandomString(10),
      personalFinanceCategoryDetailed: getRandomString(10),
      personalFinanceCategoryPrimary: getRandomString(10),
      tags: Array.from({ length: 3 }, () => getRandomString(10)),
      timeOfSplit: getRandomString(10),
      userId: getRandomString(10),
    });
  }
}

export { TransactionSplitClass };
