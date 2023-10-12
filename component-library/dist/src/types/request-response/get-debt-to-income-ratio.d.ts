import { DebtToIncomeRatio } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
/**
 * Represents the request for getting debt to income ratio.
 */
export declare class GetDebtToIncomeRatioRequest {
    /**
     * The user ID associated with the request.
     */
    userId: number;
    /**
     * The month for which debt to income ratio is requested (optional).
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
     * Creates a new instance of GetDebtToIncomeRatioRequest.
     * @param partialRequest Partial request object to initialize the GetDebtToIncomeRatioRequest.
     * @remarks You can use this constructor to create a partial instance of GetDebtToIncomeRatioRequest.
     *          You can later populate the additional properties manually if needed.
     */
    constructor(partialRequest: Partial<GetDebtToIncomeRatioRequest>);
}
/**
 * Represents the response for getting debt to income ratio.
 */
export declare class GetDebtToIncomeRatioResponse extends ErrorResponse {
    /**
     * List of debt to income ratios.
     */
    debtToIncomeRatios: DebtToIncomeRatio[];
    /**
     * The page number of the next set of data.
     */
    nextPageNumber: number;
    /**
     * Creates a new instance of GetDebtToIncomeRatioResponse.
     * @param debtToIncomeRatios List of debt to income ratios.
     * @param nextPageNumber The page number of the next set of data.
     */
    constructor(data?: Partial<GetDebtToIncomeRatioResponse>);
}
