import {
  getRandomNumber,
  getRandomString,
  getRandomArrayItem,
} from 'src/lib-utils/utils';
import { BankAccountStatus } from './bank-account-status';
import { BankAccountType } from './bank-account-type';
import { Pocket } from './pocket';
import { Milestone, SmartGoal } from '.';

export interface IBankAccount {
  /** id */
  id: number;
  /** the user id to which this bank account is tied to */
  userId: number;
  /** the bank account name */
  name: string;
  /** the bank account number */
  number: string;
  /** the bank account type */
  type: BankAccountType;
  /** the bank account balance */
  balance: number;
  /** the bank account currency */
  currency: string;
  currentFunds: number;
  balanceLimit: number;
  /**
   * the set of "virtualized accounts this user witholds"
   * NOTE: these pockets are automatically created by the system
   * when a user connects a bank account
   */
  pockets: Pocket[];
  /** plaid account id mapped to this bank account */
  plaidAccountId: string;
  /** account subtype */
  subtype: string;
  /** the bank account status */
  status: BankAccountStatus;
}

/**
 * Represents a bank account tied to a user.
 */
class BankAccount implements IBankAccount {
  /**
   * The unique identifier for the bank account.
   * @type {number}
   */
  id = 0;

  /**
   * The user ID to which this bank account is tied.
   * @type {number}
   */
  userId = 0;

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
  type: BankAccountType = BankAccountType.BANK_ACCOUNT_TYPE_UNSPECIFIED;

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
  balanceLimit = 0;

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
  status: BankAccountStatus = BankAccountStatus.BANK_ACCOUNT_STATUS_UNSPECIFIED;

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
      return acc + pocket.goals.length;
    }, 0);
    return numberOfGoals;
  }

  // Returns all goals tied to the given bank account
  getGoals(): SmartGoal[] {
    const populatedPockets = this.pockets
      .filter((pocket) => pocket.goals.length > 0)
      .flat();
    const goals = populatedPockets.map((pocket) => pocket.goals).flat();
    return goals;
  }

  // Returns all milestones tied to a particular bank account
  getMilestones(): Milestone[] {
    const goals = this.getGoals();
    const populatedGoals = goals.filter((goal) => goal.milestones.length > 0);
    const milestones = populatedGoals.map((goal) => goal.milestones).flat();
    return milestones;
  }

  /**
   * Creates a random instance of the BankAccount class with all fields populated.
   * @returns {BankAccount} A random bank account.
   */
  static randomInstance(): BankAccount {
    const numberOfPocketsToGenerate = getRandomNumber(0, 5); // Assuming a random number of goals between 0 to 5 for each pocket
    const pockets = Array.from({ length: numberOfPocketsToGenerate }, () =>
      Pocket.randomInstance(),
    );

    return new BankAccount({
      id: getRandomNumber(1, 10000),
      userId: getRandomNumber(1, 10000),
      name: `Account ${getRandomString(5)}`,
      number: `xxxx-xxxx-xxxx-${getRandomString(4)}`, // A sample account number format
      type: getRandomArrayItem(
        Object.values(BankAccountType).slice(),
      ) as BankAccountType,
      balance: getRandomNumber(1000, 10000),
      currency: getRandomArrayItem(['USD', 'EUR', 'GBP', 'JPY']),
      currentFunds: getRandomNumber(500, 5000),
      balanceLimit: getRandomNumber(0, 1000),
      pockets: pockets,
      plaidAccountId: getRandomString(10),
      subtype: `Subtype ${getRandomString(3)}`,
      status: getRandomArrayItem(
        Object.values(BankAccountStatus).slice(),
      ) as BankAccountStatus,
    });
  }
}

/**
 * Export the BankAccount class.
 */
export { BankAccount };
