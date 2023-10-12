import { Any } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Represents an investment transaction.
 *
 * @remarks
 * This class provides detailed information regarding a specific investment transaction, including quantities, prices, fees, and other metadata. The associated gotags help in mapping these properties for database integration or other systems.
 *
 * @example Constructing an `InvestmentTransaction` instance:
 *
 * ```ts
 * const data = {
 *   accountId: '12345',
 *   ammount: '150',
 *   investmentTransactionId: 'trans001',
 *   // ... other properties
 * };
 *
 * const investmentTrans = new InvestmentTransaction(data);
 * ```
 *
 * @property accountId - The ID of the account.
 * @property ammount - The amount of the investment transaction. (There's a typo here, it should probably be 'amount'.)
 * @property investmentTransactionId - The unique ID of the investment transaction.
 * @property securityId - The ID of the security involved in the transaction.
 * @property currentDate - The current date of the transaction.
 * @property name - The name of the transaction.
 * @property quantity - The quantity involved in the transaction.
 * @property amount - The exact amount of the transaction.
 * @property price - The price per security for the transaction.
 * @property fees - Any associated fees with the transaction.
 * @property type - The type of transaction.
 * @property subtype - The subtype of transaction.
 * @property isoCurrencyCode - The official ISO code for the currency.
 * @property unofficialCurrencyCode - Any unofficial currency code that might be associated.
 * @property linkId - The ID of the link associated with the transaction.
 * @property id - The unique identifier for the transaction.
 * @property userId - The user ID associated with the transaction.
 * @property createdAt - The timestamp when the transaction was created.
 * @property sign - A sign indicating the direction of the transaction.
 * @property time - The exact time of the transaction.
 * @property additionalProperties - Any additional properties that might be associated with the transaction.
 */
declare class InvestmentTransactionClass {
    accountId: string;
    ammount: string;
    investmentTransactionId: string;
    securityId: string;
    currentDate: string;
    name: string;
    quantity: number;
    amount: number;
    price: number;
    fees: number;
    type: string;
    subtype: string;
    isoCurrencyCode: string;
    unofficialCurrencyCode: string;
    linkId: number;
    id: string;
    userId: number;
    createdAt: string;
    sign: number;
    time: Date | undefined;
    additionalProperties: Any | undefined;
    /**
     * Constructs a new InvestmentTransaction instance.
     *
     * @param data - Initialization data for the investment transaction.
     */
    constructor(data?: Partial<InvestmentTransactionClass>);
}
export { InvestmentTransactionClass };
