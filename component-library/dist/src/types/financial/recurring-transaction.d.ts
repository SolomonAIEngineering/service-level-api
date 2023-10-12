import { Any, ReCurringFlow, ReOccuringTransaction as ReOccuringTransaction, ReOccuringTransactionsFrequency, ReOccuringTransactionsStatus } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Represents a recurring financial transaction for a user.
 *
 * @remarks
 * This class captures and manages the specifics of a recurring financial transaction, such as subscriptions
 * or regular bill payments. It tracks transaction details, merchants, dates, and amounts, making it useful
 * for personal finance management applications or services.
 *
 * @example Constructing a `ReOccuringTransaction`
 *
 * ```ts
 * // Example data
 * const transactionData = {
 *   accountId: 'account123',
 *   description: 'Monthly subscription to streaming service',
 *   merchantName: 'StreamFlix',
 *   averageAmount: '14.99',
 *   averageAmountIsoCurrencyCode: 'USD',
 *   // Add other properties here
 * };
 *
 * const recurringTransaction = new ReOccuringTransaction(transactionData);
 * ```
 *
 * @property accountId - The unique identifier of the account associated with the transaction.
 * @property streamId - The unique identifier of the transaction stream.
 * @property categoryId - The unique identifier of the category associated with the transaction.
 * @property description - A brief overview of the transaction's purpose.
 * @property merchantName - The name of the merchant or business entity related to the transaction.
 * @property personalFinanceCategoryPrimary - The primary financial category of the transaction.
 * @property personalFinanceCategoryDetailed - The more detailed categorization of the transaction.
 * @property firstDate - The date when the transaction first occurred.
 * @property lastDate - The date of the most recent occurrence of the transaction.
 * @property frequency - How often the transaction occurs (e.g., weekly, monthly).
 * @property transactionIds - A list of unique transaction IDs associated with this recurring transaction.
 * @property averageAmount - The typical transaction amount for this recurring item.
 * @property averageAmountIsoCurrencyCode - The currency code of the average transaction amount.
 * @property lastAmount - The amount from the most recent transaction occurrence.
 * @property lastAmountIsoCurrencyCode - The currency code of the most recent transaction amount.
 * @property isActive - Flag indicating if the transaction is still active or not.
 * @property status - The current status of the recurring transaction (e.g., active, paused).
 * @property updatedTime - The last time the transaction details were updated.
 * @property userId - The identifier of the user associated with this transaction.
 * @property linkId - The unique identifier of a linked transaction or reference.
 * @property id - The unique identifier of this recurring transaction.
 * @property flow - The direction or flow of the transaction (e.g., inbound, outbound).
 * @property sign - A numerical indicator that signifies the nature of the transaction (e.g., credit, debit).
 * @property time - The exact timestamp of the transaction.
 * @property additionalProperties - Any extra data or properties associated with the transaction.
 */
declare class ReOccuringTransactionClass implements ReOccuringTransaction {
    /** The unique identifier of the account associated with the transaction. */
    accountId: string;
    /** The unique identifier of the transaction stream. */
    streamId: string;
    /** The unique identifier of the category associated with the transaction. */
    categoryId: string;
    /** A description of the transaction. */
    description: string;
    /** The name of the merchant. */
    merchantName: string;
    /** The primary personal finance category of the transaction. */
    personalFinanceCategoryPrimary: string;
    /** The detailed personal finance category of the transaction. */
    personalFinanceCategoryDetailed: string;
    /** The date of the first occurrence of the transaction. */
    firstDate: string;
    /** The date of the last occurrence of the transaction. */
    lastDate: string;
    /** The frequency of the recurring transaction. */
    frequency: ReOccuringTransactionsFrequency;
    /** A comma-separated list of transaction IDs. */
    transactionIds: string;
    /** The average amount of the transaction. */
    averageAmount: string;
    /** The ISO currency code of the average amount. */
    averageAmountIsoCurrencyCode: string;
    /** The amount of the last occurrence of the transaction. */
    lastAmount: string;
    /** The ISO currency code of the last amount. */
    lastAmountIsoCurrencyCode: string;
    /** Indicates whether the transaction is active. */
    isActive: boolean;
    /** The status of the recurring transaction. */
    status: ReOccuringTransactionsStatus;
    /** The last time the transaction was updated. */
    updatedTime: string;
    /** The unique identifier of the user associated with the transaction. */
    userId: string;
    /** The unique identifier of the linked transaction. */
    linkId: string;
    /** The unique identifier of the transaction. */
    id: string;
    /** The flow of the recurring transaction. */
    flow: ReCurringFlow;
    /** A numerical sign associated with the transaction. */
    sign: number;
    /** The date and time of the transaction. */
    time: string | undefined;
    /** Additional properties associated with the transaction. */
    additionalProperties: Any | undefined;
    /**
     * Creates an instance of ReOccuringTransaction.
     * @param data - Object containing properties for ReOccuringTransaction.
     * @example
     * const transactionData = {
     *   accountId: 'account123',
     *   description: 'Monthly subscription',
     *   // Add other properties here
     * };
     * const recurringTransaction = new ReOccuringTransaction(transactionData);
     */
    constructor(data: Partial<ReOccuringTransactionClass>);
    static randomInstance(): ReOccuringTransactionClass;
}
export { ReOccuringTransactionClass };
