import { InvesmentHolding, InvestmentAccount as InvestmentAccount, InvestmentSecurity } from 'src/data-contracts/financial-service/data-contracts';
export declare class InvestmentAccountClass implements InvestmentAccount {
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
    currentFunds: number;
    balanceLimit: string;
    /** plaid account id mapped to this bank account */
    plaidAccountId: string;
    /** accoint subtype */
    subtype: string;
    /** invesment holding is the set of securities this account witholds */
    holdings: InvesmentHolding[];
    /** the set of securities this account witholds */
    securities: InvestmentSecurity[];
    constructor(data: Partial<InvestmentAccount>);
    static randomInstance(): InvestmentAccount;
}
