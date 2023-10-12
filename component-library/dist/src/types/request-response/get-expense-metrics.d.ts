import { ExpenseMetrics } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
/**
 * Represents the request for getting expense metrics.
 */
export declare class GetExpenseMetricsRequest {
    /**
     * The user ID associated with the request.
     */
    userId: number;
    /**
     * The month for which expense metrics are requested (optional).
     */
    month?: number;
    /**
     * The primary personal finance category for filtering the records (optional).
     */
    personalFinanceCategoryPrimary?: string;
    /**
     * The page number of the requested data.
     */
    pageNumber: number;
    /**
     * Number of items to return per page.
     */
    pageSize: number;
    /**
     * Creates a new instance of GetExpenseMetricsRequest.
     * @param partialRequest Partial request object to initialize the GetExpenseMetricsRequest.
     * @remarks You can use this constructor to create a partial instance of GetExpenseMetricsRequest.
     *          You can later populate the additional properties manually if needed.
     */
    constructor(partialRequest: Partial<GetExpenseMetricsRequest>);
}
/**
 * Represents the response for getting expense metrics.
 */
export declare class GetExpenseMetricsResponse extends ErrorResponse {
    /**
     * List of expense metrics.
     */
    expenseMetrics: ExpenseMetrics[];
    /**
     * The page number of the next set of data.
     */
    nextPageNumber: number;
    /**
     * Creates a new instance of GetExpenseMetricsResponse.
     * @param expenseMetrics List of expense metrics.
     * @param nextPageNumber The page number of the next set of data.
     */
    constructor(data?: Partial<GetExpenseMetricsResponse>);
}
