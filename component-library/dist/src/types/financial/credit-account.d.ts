import { Apr, CreditAccount as CreditAccount } from 'src/data-contracts/financial-service/data-contracts';
export declare class CreditAccountClass implements CreditAccount {
    /** id */
    id: string;
    /** the user id to which this bank account is tied to */
    userId: string;
    /** the account name */
    name: string;
    /** the bank account number */
    number: string;
    /** the bank account type */
    type: string;
    /** the bank account balance */
    balance: number;
    /** current funds on the account */
    currentFunds: number;
    /** balance limit */
    balanceLimit: string;
    /** plaid account id mapped to this bank account */
    plaidAccountId: string;
    /** accoint subtype */
    subtype: string;
    /** wether the account is overdue */
    isOverdue: boolean;
    /** the last payment amount */
    lastPaymentAmount: number;
    /** the last payment date */
    lastPaymentDate: string;
    /** the last statement issue date */
    lastStatementIssueDate: string;
    /** the minimum amount due date */
    minimumAmountDueDate: number;
    /** the next payment date */
    nextPaymentDate: string;
    /** the aprs */
    aprs: Apr[];
    /** the last statement balance */
    lastStatementBalance: number;
    /** the minimum payment amount */
    minimumPaymentAmount: number;
    /** the next payment due date */
    nextPaymentDueDate: string;
    constructor(data: Partial<CreditAccount>);
    static randomInstance(): CreditAccount;
}
