import { MerchantMonthlyExpenditure } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
/**
 * Represents the request for getting merchant monthly expenditure.
 */
export declare class GetMerchantMonthlyExpenditureRequest {
    /**
     * The user ID associated with the request.
     */
    userId: number;
    /**
     * The month for which merchant monthly expenditure is requested (optional).
     */
    month?: number;
    /**
     * The merchant name for filtering the records (optional).
     */
    merchantName?: string;
    /**
     * The page number of the requested data.
     */
    pageNumber: number;
    /**
     * Number of items to return per page.
     */
    pageSize: number;
    /**
     * Creates a new instance of GetMerchantMonthlyExpenditureRequest.
     * @param partialRequest Partial request object to initialize the GetMerchantMonthlyExpenditureRequest.
     * @remarks You can use this constructor to create a partial instance of GetMerchantMonthlyExpenditureRequest.
     *          You can later populate the additional properties manually if needed.
     */
    constructor(partialRequest: Partial<GetMerchantMonthlyExpenditureRequest>);
}
/**
 * Represents the response for getting merchant monthly expenditure.
 */
export declare class GetMerchantMonthlyExpenditureResponse extends ErrorResponse {
    /**
     * List of merchant monthly expenditures.
     */
    merchantMonthlyExpenditures: MerchantMonthlyExpenditure[];
    /**
     * The page number of the next set of data.
     */
    nextPageNumber: number;
    /**
     * Creates a new instance of GetMerchantMonthlyExpenditureResponse.
     * @param merchantMonthlyExpenditures List of merchant monthly expenditures.
     * @param nextPageNumber The page number of the next set of data.
     */
    constructor(data?: Partial<GetMerchantMonthlyExpenditureResponse>);
}
