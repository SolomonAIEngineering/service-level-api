import { TotalInvestmentBySecurity } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
/**
 * Represents the request for getting total investment by security.
 */
export declare class GetTotalInvestmentBySecurityRequest {
    /**
     * The user ID associated with the request.
     */
    userId: number;
    /**
     * The security ID for filtering the records.
     */
    securityId: string;
    /**
     * The page number of the requested data.
     */
    pageNumber: number;
    /**
     * Number of items to return per page.
     */
    pageSize: number;
    /**
     * Creates a new instance of GetTotalInvestmentBySecurityRequest.
     * @param partialRequest Partial request object to initialize the GetTotalInvestmentBySecurityRequest.
     * @remarks You can use this constructor to create a partial instance of GetTotalInvestmentBySecurityRequest.
     *          You can later populate the additional properties manually if needed.
     */
    constructor(partialRequest: Partial<GetTotalInvestmentBySecurityRequest>);
}
/**
 * Represents the response for getting total investment by security.
 */
export declare class GetTotalInvestmentBySecurityResponse extends ErrorResponse {
    /**
     * List of total investment by security.
     */
    totalInvestmentBySecurity: TotalInvestmentBySecurity[];
    /**
     * The page number of the next set of data.
     */
    nextPageNumber: number;
    /**
     * Creates a new instance of GetTotalInvestmentBySecurityResponse.
     * @param totalInvestmentBySecurity List of total investment by security.
     * @param nextPageNumber The page number of the next set of data.
     */
    constructor(data?: Partial<GetTotalInvestmentBySecurityResponse>);
}
