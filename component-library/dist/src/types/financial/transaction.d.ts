import { Any, Transaction } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Represents a financial transaction.
 *
 * @remarks
 * This class provides a comprehensive view of a financial transaction, capturing essential
 * details like amounts, dates, merchant information, and location data. It's an integral component
 * for financial systems, banking applications, or any platform requiring transaction tracking and
 * analytics.
 *
 * @example Constructing a `Transaction` instance:
 *
 * ```ts
 * // Sample transaction data
 * const transactionDetails = {
 *   accountId: 'acc-123',
 *   amount: 500,
 *   isoCurrencyCode: 'USD',
 *   // ... other properties ...
 * };
 *
 * const transactionInstance = new Transaction(transactionDetails);
 * ```
 *
 * @property accountId - Unique identifier of the account associated with the transaction.
 * @property amount - Monetary amount of the transaction.
 * @property isoCurrencyCode - Official ISO code representing the currency used in the transaction.
 * @property unofficialCurrencyCode - Any non-official currency codes, if applicable.
 * @property categoryId - Identifier for the transaction category.
 * @property checkNumber - Check number if the transaction was a cheque payment.
 * @property currentDate - Date of the transaction.
 * @property currentDatetime - Detailed timestamp of the transaction.
 * @property authorizedDate - Date when the transaction was authorized.
 * @property authorizedDatetime - Timestamp when the transaction was authorized.
 * @property name - Name or title of the transaction.
 * @property merchantName - Name of the merchant or vendor.
 * @property paymentChannel - Channel through which payment was made (e.g., online, in-store).
 * @property pending - Indicates if the transaction is still pending.
 * @property pendingTransactionId - If pending, a unique identifier for the pending transaction.
 * @property accountOwner - Name of the account owner or holder.
 * @property transactionId - Unique identifier for the transaction.
 * @property transactionCode - Code related to the type or nature of the transaction.
 * @property id - Unique identifier for this specific record or object.
 * @property userId - Identifier of the user associated with the transaction.
 * @property linkId - Identifier linking to another related record or object.
 * @property sign - Numerical sign associated with the transaction (e.g., positive for credit, negative for debit).
 * @property personalFinanceCategoryPrimary - Broad category for personal finance classification.
 * @property personalFinanceCategoryDetailed - More detailed or specific financial category.
 * @property locationAddress - Address where the transaction occurred.
 * @property locationCity - City of the transaction location.
 * @property locationRegion - Region or state of the transaction location.
 * @property locationPostalCode - Postal or ZIP code of the transaction location.
 * @property locationCountry - Country of the transaction location.
 * @property locationLat - Latitude coordinates of the transaction location.
 * @property locationLon - Longitude coordinates of the transaction location.
 * @property locationStoreNumber - Store number if the transaction was at a retail chain.
 * @property paymentMetaByOrderOf - Metadata field for payment details.
 * @property paymentMetaPayee - Metadata about the payee or recipient of the funds.
 * @property paymentMetaPayer - Metadata about the payer or sender of the funds.
 * @property paymentMetaPaymentMethod - Method used for the payment.
 * @property paymentMetaPaymentProcessor - Processor or intermediary handling the payment.
 * @property paymentMetaPpdId - Prearranged Payment and Deposit identifier.
 * @property paymentMetaReason - Reason or note for the transaction.
 * @property paymentMetaReferenceNumber - A reference number for the transaction.
 * @property time - Timestamp of the transaction.
 * @property additionalProperties - Any extra or miscellaneous properties related to the transaction.
 * @property categories - List of categories associated with the transaction.
 */
declare class TransactionClass implements Transaction {
    accountId: string;
    amount: number;
    isoCurrencyCode: string;
    unofficialCurrencyCode: string;
    categoryId: string;
    checkNumber: string;
    currentDate: string;
    currentDatetime: string;
    authorizedDate: string;
    authorizedDatetime: string;
    name: string;
    merchantName: string;
    paymentChannel: string;
    pending: boolean;
    pendingTransactionId: string;
    accountOwner: string;
    transactionId: string;
    transactionCode: string;
    id: string;
    userId: string;
    linkId: string;
    sign: number;
    personalFinanceCategoryPrimary: string;
    personalFinanceCategoryDetailed: string;
    locationAddress: string;
    locationCity: string;
    locationRegion: string;
    locationPostalCode: string;
    locationCountry: string;
    locationLat: number;
    locationLon: number;
    locationStoreNumber: string;
    paymentMetaByOrderOf: string;
    paymentMetaPayee: string;
    paymentMetaPayer: string;
    paymentMetaPaymentMethod: string;
    paymentMetaPaymentProcessor: string;
    paymentMetaPpdId: string;
    paymentMetaReason: string;
    paymentMetaReferenceNumber: string;
    time: string;
    additionalProperties: Any | undefined;
    categories: string[];
    /**
     * Creates an instance of Transaction.
     *
     * @param data - Object with details for Transaction.
     */
    constructor(data: Partial<TransactionClass>);
    static randomInstance(): TransactionClass;
}
export { TransactionClass };
