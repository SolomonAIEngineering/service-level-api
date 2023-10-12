import { MonthlyIncome } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
/**
 * Represents the request for getting monthly income.
 */
export declare class GetMonthlyIncomeRequest {
    /**
     * The user ID associated with the request.
     */
    userId: number;
    /**
     * The month for which monthly income is requested.
     */
    month: number;
    /**
     * The page number of the requested data.
     */
    pageNumber: number;
    /**
     * Number of items to return per page.
     */
    pageSize: number;
    /**
     * Creates a new instance of GetMonthlyIncomeRequest.
     * @param partialRequest Partial request object to initialize the GetMonthlyIncomeRequest.
     * @remarks You can use this constructor to create a partial instance of GetMonthlyIncomeRequest.
     *          You can later populate the additional properties manually if needed.
     */
    constructor(partialRequest: Partial<GetMonthlyIncomeRequest>);
}
/**
 * Represents the response for getting monthly income.
 */
export declare class GetMonthlyIncomeResponse extends ErrorResponse {
    /**
     * List of monthly incomes.
     */
    monthlyIncomes: MonthlyIncome[];
    /**
     * The page number of the next set of data.
     */
    nextPageNumber: number;
    /**
     * Creates a new instance of GetMonthlyIncomeResponse.
     * @param monthlyIncomes List of monthly incomes.
     * @param nextPageNumber The page number of the next set of data.
     */
    constructor(data?: Partial<GetMonthlyIncomeResponse>);
}
