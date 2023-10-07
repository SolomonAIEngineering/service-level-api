import {
  getRandomNumber,
  getRandomString,
  getRandomArrayItem,
} from 'src/lib-utils/utils';

import { BankAccount as BankAccount } from 'src/data-contracts/financial-service/data-contracts';
import { BankAccountStatus as BankAccountStatus } from 'src/data-contracts/financial-service/data-contracts';
import { BankAccountType as BankAccountType } from 'src/data-contracts/financial-service/data-contracts';
import { Pocket as Pocket } from 'src/data-contracts/financial-service/data-contracts';
import { Milestone as Milestone } from 'src/data-contracts/financial-service/data-contracts';
import { SmartGoal as SmartGoal } from 'src/data-contracts/financial-service/data-contracts';
import { PocketClass } from './pocket';

/**
 * Represents a bank account tied to a user.
 */
class BankAccountClass implements BankAccount {
  /**
   * The unique identifier for the bank account.
   * @type {number}
   */
  id = '0';

  /**
   * The user ID to which this bank account is tied.
   * @type {number}
   */
  userId = '0';

  /**
   * The name of the bank account.
   * @type {string}
   */
  name = '';

  /**
   * The bank account number.
   * @type {string}
   */
  number = '';

  /**
   * The type of bank account.
   * @type {BankAccountType}
   */
  type: BankAccountType = 'BANK_ACCOUNT_TYPE_UNSPECIFIED';

  /**
   * The balance of the bank account.
   * @type {number}
   */
  balance = 0;

  /**
   * The currency of the bank account.
   * @type {string}
   */
  currency = '';

  /**
   * The current funds available in the bank account.
   * @type {number}
   */
  currentFunds = 0;

  /**
   * The balance limit of the bank account.
   * @type {number}
   */
  balanceLimit = '0';

  /**
   * The set of virtualized pockets associated with this bank account.
   * @type {Pocket[]}
   */
  pockets: Pocket[] = [];

  /**
   * The Plaid account ID mapped to this bank account.
   * @type {string}
   */
  plaidAccountId = '';

  /**
   * The subtype of the bank account.
   * @type {string}
   */
  subtype = '';

  /**
   * The status of the bank account.
   * @type {BankAccountStatus}
   */
  status: BankAccountStatus = 'BANK_ACCOUNT_STATUS_UNSPECIFIED';

  /**
   * Constructs a new BankAccount object.
   * @constructor
   * @param {Partial<BankAccount>} data - Optional data for initializing the bank account.
   */
  constructor(data: Partial<BankAccount>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Gets the number of pockets tied to this bank account.
   */
  getNumberOfPockets(): number {
    return this.pockets.length;
  }

  /**
   * Gets the number of goals tied to this bank account.
   */
  getNumberOfGoals(): number {
    const numberOfGoals = this.pockets.reduce((acc, pocket) => {
      return acc + (pocket.goals ? pocket.goals.length : 0);
    }, 0);
    return numberOfGoals;
  }

  // Returns all goals tied to the given bank account
  getGoals(): SmartGoal[] {
    const populatedPockets = this.pockets
      .filter((pocket) => pocket.goals && pocket.goals.length > 0)
      .flat();

    const goals = populatedPockets
      .map((pocket) => pocket.goals)
      .flat()
      .filter((goal) => goal !== undefined) as SmartGoal[];

    return goals;
  }

  // Returns all milestones tied to a particular bank account
  getMilestones(): Milestone[] {
    const goals = this.getGoals();
    const populatedGoals = goals.filter(
      (goal) => goal.milestones && goal.milestones.length > 0,
    );
    const milestones = populatedGoals
      .map((goal) => goal.milestones)
      .flat()
      .filter((milestone) => milestone !== undefined) as Milestone[];
    return milestones;
  }

  /**
   * Creates a random instance of the BankAccount class with all fields populated.
   * @returns {BankAccount} A random bank account.
   */
  static randomInstance(): BankAccount {
    const numberOfPocketsToGenerate = getRandomNumber(0, 5); // Assuming a random number of goals between 0 to 5 for each pocket
    const pockets = Array.from({ length: numberOfPocketsToGenerate }, () =>
      PocketClass.randomInstance(),
    );

    return new BankAccountClass({
      id: getRandomNumber(1, 10000).toString(),
      userId: getRandomNumber(1, 10000).toString(),
      name: `Account ${getRandomString(5)}`,
      number: `xxxx-xxxx-xxxx-${getRandomString(4)}`, // A sample account number format
      type: 'BANK_ACCOUNT_TYPE_PLAID',
      balance: getRandomNumber(1000, 10000),
      currency: getRandomArrayItem(['USD', 'EUR', 'GBP', 'JPY']),
      currentFunds: getRandomNumber(500, 5000),
      balanceLimit: getRandomNumber(0, 1000).toString(),
      pockets: pockets,
      plaidAccountId: getRandomString(10),
      subtype: `Subtype ${getRandomString(3)}`,
      status: 'BANK_ACCOUNT_STATUS_ACTIVE',
    });
  }
}

/**
 * Export the BankAccount class.
 */
export { BankAccountClass };
