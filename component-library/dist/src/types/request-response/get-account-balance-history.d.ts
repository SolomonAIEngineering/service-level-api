import { AccountBalanceHistory } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
export declare class GetAccountBalanceHistoryResponse extends ErrorResponse {
    accountBalanceHistory: AccountBalanceHistory[];
    constructor(data: Partial<GetAccountBalanceHistoryResponse>);
}
/**
 * Represents the request for getting account balance history.
 */
export declare class GetAccountBalanceHistoryRequest {
    /**
     * The account ID associated with the request.
     */
    plaidAccountId: string;
    /**
     * The page number of the requested data.
     */
    pageNumber: number;
    /**
     * Number of items to return per page.
     */
    pageSize: number;
    /**
     * Creates a new instance of GetAccountBalanceHistoryRequest.
     * @param partialRequest Partial request object to initialize the GetAccountBalanceHistoryRequest.
     * @remarks You can use this constructor to create a partial instance of GetAccountBalanceHistoryRequest.
     *          You can later populate the additional properties manually if needed.
     */
    constructor(partialRequest: Partial<GetAccountBalanceHistoryRequest>);
}
