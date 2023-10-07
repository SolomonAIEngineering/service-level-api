import {
  getRandomBalance,
  getRandomDateInRange,
  getRandomNumber,
  getRandomString,
  getRandomStringWithPrefix,
} from 'src/lib-utils/utils';

import { AccountBalanceHistory } from 'src/data-contracts/financial-service/data-contracts';

/**
 * Represents the balance history of an account.
 *
 * @remarks
 * This class is used to store and manage the details of the balance history associated with a specific account.
 * It provides an organized structure to manage the time, currency, balance, and other related information.
 *
 * @example Constructing an `AccountBalanceHistory` instance
 *
 * ```ts
 * const data = {
 *   time: new Date(),
 *   accountId: 'ACC-12345',
 *   isoCurrencyCode: 'USD',
 *   balance: 100.50,
 *   userId: 1,
 *   sign: 1,
 *   id: 'BAL-67890'
 * };
 *
 * const accountHistory = new AccountBalanceHistory(data);
 * ```
 *
 * @property time - The timestamp when the balance history was recorded.
 * @property accountId - The account ID associated with the balance history.
 * @property isoCurrencyCode - The ISO currency code of the balance.
 * @property balance - The balance value.
 * @property userId - The user ID associated with the balance history.
 * @property sign - The sign indicating the balance change direction (e.g., +1 or -1).
 * @property id - The unique identifier for the balance history.
 */
class AccountBalanceHistoryClass implements AccountBalanceHistory {
  time: string = '';
  accountId = '';
  isoCurrencyCode = '';
  balance = 0;
  userId = '0';
  sign = 0;
  id = '';

  /**
   * Constructs a new AccountBalanceHistory instance.
   *
   * @param data - Initialization data for the balance history.
   */
  constructor(data: Partial<AccountBalanceHistory>) {
    if (data)
      Object.assign(this, {
        ...data,
        time: data.time ? new Date(data.time).toISOString() : '',
      });
  }

  /**
   * Creates a random instance of the AccountBalanceHistory class with all fields populated.
   * @returns {AccountBalanceHistory} A random AccountBalanceHistory.
   */
  static randomInstance(): AccountBalanceHistory {
    return new AccountBalanceHistoryClass({
      id: getRandomStringWithPrefix(5, 'BAL-'),
      time: getRandomDateInRange(2000, 2025).toISOString(),
      accountId: getRandomStringWithPrefix(5, 'ACC-'),
      isoCurrencyCode: ['USD', 'EUR', 'GBP', 'JPY', 'AUD'][
        getRandomNumber(0, 4)
      ],
      balance: getRandomBalance(),
      userId: getRandomString(10),
      sign: [1, -1][getRandomNumber(0, 1)],
    });
  }
}

export { AccountBalanceHistoryClass };
