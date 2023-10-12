import { Transaction } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
/**
 * GetTransactionsRequest class
 *
 * Represents a request for getting transactions.
 */
export declare class GetTransactionsRequest {
    /**
     * The user ID.
     * Validations:
     * - Must be greater than 0.
     */
    userId: number;
    /**
     * The page number.
     */
    pageNumber: number;
    /**
     * The number of transactions per page.
     */
    pageSize: number;
    /**
     * Creates an instance of GetTransactionsRequest.
     *
     * @param data - The data to initialize the request.
     */
    constructor(data: Partial<GetTransactionsRequest>);
}
export declare class GetTransactionsResponse extends ErrorResponse {
    nextPageNumber: number | undefined;
    transactions: Transaction[] | undefined;
    constructor(data: Partial<GetTransactionsResponse>);
}
