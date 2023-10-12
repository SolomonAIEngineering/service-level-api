import { CategoryMonthlyExpenditure } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
/**
 * Represents the request for getting user category monthly expenditure.
 */
export declare class GetUserCategoryMonthlyExpenditureRequest {
    /**
     * The user ID associated with the request.
     */
    userId: number;
    /**
     * The primary personal finance category for filtering the records.
     */
    personalFinanceCategoryPrimary: string;
    /**
     * The month for which category monthly expenditure is requested (in the format YYYYMM).
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
     * Creates a new instance of GetUserCategoryMonthlyExpenditureRequest.
     * @param partialRequest Partial request object to initialize the GetUserCategoryMonthlyExpenditureRequest.
     * @remarks You can use this constructor to create a partial instance of GetUserCategoryMonthlyExpenditureRequest.
     *          You can later populate the additional properties manually if needed.
     */
    constructor(partialRequest: Partial<GetUserCategoryMonthlyExpenditureRequest>);
}
export declare class GetUserCategoryMonthlyExpenditureResponse extends ErrorResponse {
    categoryMonthlyExpenditure: CategoryMonthlyExpenditure[];
    nextPageNumber: number;
    constructor(data?: Partial<GetUserCategoryMonthlyExpenditureResponse>);
}
