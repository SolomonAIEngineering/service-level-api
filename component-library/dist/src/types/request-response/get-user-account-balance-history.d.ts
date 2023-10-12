import { AccountBalanceHistory } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
/**
 * Represents the response for getting user account balance history.
 */
export declare class GetUserAccountBalanceHistoryResponse extends ErrorResponse {
    /**
     * List of account balance history records.
     */
    accountBalanceHistory: AccountBalanceHistory[];
    constructor(data: Partial<GetUserAccountBalanceHistoryResponse>);
}
/**
 * Represents the request for getting user account balance history.
 */
export declare class GetUserAccountBalanceHistoryRequest {
    /**
     * The user ID associated with the request.
     */
    userId: number;
    /**
     * The page number of the requested data.
     */
    pageNumber: number;
    /**
     * Number of items to return per page.
     */
    pageSize: number;
    /**
     * Creates a new instance of GetUserAccountBalanceHistoryRequest.
     * @param partialRequest Partial request object to initialize the GetUserAccountBalanceHistoryRequest.
     * @remarks You can use this constructor to create a partial instance of GetUserAccountBalanceHistoryRequest.
     *          You can later populate the additional properties manually if needed.
     */
    constructor(partialRequest: Partial<GetUserAccountBalanceHistoryRequest>);
}
