import { Transaction } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
/**
 * Represents the response for getting transactions for a bank account.
 */
export declare class GetTransactionsForBankAccountResponse extends ErrorResponse {
    /**
     * An array of transactions for the bank account.
     */
    transactions: Transaction[];
    /**
     * The page number of the next set of transactions.
     */
    nextPageNumber: number;
    /**
     * Creates a new instance of GetTransactionsForBankAccountResponse.
     * @param transactions An array of transactions for the bank account.
     * @param nextPageNumber The page number of the next set of transactions.
     */
    constructor(data: GetTransactionsForBankAccountResponse);
}
/**
 * Class representing a request to get transactions for a bank account.
 */
export declare class GetTransactionsForBankAccountRequest {
    /** The user id */
    userId: number;
    /** Plaid account id */
    plaidAccountId: string;
    /** Page number for paginated results */
    pageNumber: number;
    /** Page size for paginated results */
    pageSize: number;
    /**
     * Create a request to get transactions for a bank account.
     * @param {Partial<GetTransactionsForBankAccountRequest>} data - Object containing any properties of a request.
     */
    constructor(data: Partial<GetTransactionsForBankAccountRequest>);
}
