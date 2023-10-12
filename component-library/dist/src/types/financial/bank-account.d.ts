import { BankAccount as BankAccount } from 'src/data-contracts/financial-service/data-contracts';
import { BankAccountStatus as BankAccountStatus } from 'src/data-contracts/financial-service/data-contracts';
import { BankAccountType as BankAccountType } from 'src/data-contracts/financial-service/data-contracts';
import { Pocket as Pocket } from 'src/data-contracts/financial-service/data-contracts';
import { Milestone as Milestone } from 'src/data-contracts/financial-service/data-contracts';
import { SmartGoal as SmartGoal } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Represents a bank account tied to a user.
 */
declare class BankAccountClass implements BankAccount {
    /**
     * The unique identifier for the bank account.
     * @type {number}
     */
    id: string;
    /**
     * The user ID to which this bank account is tied.
     * @type {number}
     */
    userId: string;
    /**
     * The name of the bank account.
     * @type {string}
     */
    name: string;
    /**
     * The bank account number.
     * @type {string}
     */
    number: string;
    /**
     * The type of bank account.
     * @type {BankAccountType}
     */
    type: BankAccountType;
    /**
     * The balance of the bank account.
     * @type {number}
     */
    balance: number;
    /**
     * The currency of the bank account.
     * @type {string}
     */
    currency: string;
    /**
     * The current funds available in the bank account.
     * @type {number}
     */
    currentFunds: number;
    /**
     * The balance limit of the bank account.
     * @type {number}
     */
    balanceLimit: string;
    /**
     * The set of virtualized pockets associated with this bank account.
     * @type {Pocket[]}
     */
    pockets: Pocket[];
    /**
     * The Plaid account ID mapped to this bank account.
     * @type {string}
     */
    plaidAccountId: string;
    /**
     * The subtype of the bank account.
     * @type {string}
     */
    subtype: string;
    /**
     * The status of the bank account.
     * @type {BankAccountStatus}
     */
    status: BankAccountStatus;
    /**
     * Constructs a new BankAccount object.
     * @constructor
     * @param {Partial<BankAccount>} data - Optional data for initializing the bank account.
     */
    constructor(data: Partial<BankAccount>);
    /**
     * Gets the number of pockets tied to this bank account.
     */
    getNumberOfPockets(): number;
    /**
     * Gets the number of goals tied to this bank account.
     */
    getNumberOfGoals(): number;
    getGoals(): SmartGoal[];
    getMilestones(): Milestone[];
    /**
     * Creates a random instance of the BankAccount class with all fields populated.
     * @returns {BankAccount} A random bank account.
     */
    static randomInstance(): BankAccount;
}
/**
 * Export the BankAccount class.
 */
export { BankAccountClass };
