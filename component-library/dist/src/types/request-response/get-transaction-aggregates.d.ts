import { TransactionAggregatesByMonth } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
export declare class GetTransactionAggregatesResponse extends ErrorResponse {
    transactionAggregates: TransactionAggregatesByMonth[];
    nextPageNumber: number;
    constructor(data?: Partial<GetTransactionAggregatesResponse>);
}
export declare class GetTransactionAggregatesRequest {
    /**
     * The user ID associated with the request.
     */
    userId: number;
    /**
     * The month for which transaction aggregates are requested (in the format YYYYMM).
     */
    month: number;
    /**
     * The primary personal finance category for filtering the transactions.
     */
    personalFinanceCategoryPrimary: string;
    /**
     * The city location for filtering the transactions.
     */
    locationCity: string;
    /**
     * The payment channel for filtering the transactions.
     */
    paymentChannel: string;
    /**
     * The merchant name for filtering the transactions.
     */
    merchantName: string;
    /**
     * The page number of the requested data.
     */
    pageNumber: number;
    /**
     * Number of items to return per page.
     */
    pageSize: number;
    /**
     * Creates a new instance of GetTransactionAggregatesRequest.
     * @param partialRequest Partial request object to initialize the GetTransactionAggregatesRequest.
     * @remarks You can use this constructor to create a partial instance of GetTransactionAggregatesRequest.
     *          You can later populate the additional properties manually if needed.
     */
    constructor(partialRequest: Partial<GetTransactionAggregatesRequest>);
}
