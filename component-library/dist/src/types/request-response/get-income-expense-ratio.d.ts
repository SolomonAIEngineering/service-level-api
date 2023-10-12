import { IncomeExpenseRatio } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
/**
 * Represents the request for getting income expense ratio.
 */
export declare class GetIncomeExpenseRatioRequest {
    /**
     * The user ID associated with the request.
     */
    userId: number;
    /**
     * The month for which income expense ratio is requested (optional).
     */
    month?: number;
    /**
     * The page number of the requested data.
     */
    pageNumber: number;
    /**
     * Number of items to return per page.
     */
    pageSize: number;
    /**
     * Creates a new instance of GetIncomeExpenseRatioRequest.
     * @param partialRequest Partial request object to initialize the GetIncomeExpenseRatioRequest.
     * @remarks You can use this constructor to create a partial instance of GetIncomeExpenseRatioRequest.
     *          You can later populate the additional properties manually if needed.
     */
    constructor(partialRequest: Partial<GetIncomeExpenseRatioRequest>);
}
/**
 * Represents the response for getting income expense ratio.
 */
export declare class GetIncomeExpenseRatioResponse extends ErrorResponse {
    /**
     * List of income expense ratios.
     */
    incomeExpenseRatios: IncomeExpenseRatio[];
    /**
     * The page number of the next set of data.
     */
    nextPageNumber: number;
    /**
     * Creates a new instance of GetIncomeExpenseRatioResponse.
     * @param incomeExpenseRatios List of income expense ratios.
     * @param nextPageNumber The page number of the next set of data.
     */
    constructor(data?: Partial<GetIncomeExpenseRatioResponse>);
}
