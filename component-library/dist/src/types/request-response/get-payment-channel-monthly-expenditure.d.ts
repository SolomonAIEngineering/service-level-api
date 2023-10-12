import { PaymentChannelMonthlyExpenditure } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
/**
 * Represents the request for getting payment channel monthly expenditure.
 */
export declare class GetPaymentChannelMonthlyExpenditureRequest {
    /**
     * The user ID associated with the request.
     */
    userId: number;
    /**
     * The month for which payment channel monthly expenditure is requested.
     */
    month: number;
    /**
     * The payment channel for filtering the records.
     */
    paymentChannel: string;
    /**
     * The page number of the requested data.
     */
    pageNumber: number;
    /**
     * Number of items to return per page.
     */
    pageSize: number;
    /**
     * Creates a new instance of GetPaymentChannelMonthlyExpenditureRequest.
     * @param partialRequest Partial request object to initialize the GetPaymentChannelMonthlyExpenditureRequest.
     * @remarks You can use this constructor to create a partial instance of GetPaymentChannelMonthlyExpenditureRequest.
     *          You can later populate the additional properties manually if needed.
     */
    constructor(partialRequest: Partial<GetPaymentChannelMonthlyExpenditureRequest>);
}
/**
 * Represents the response for getting payment channel monthly expenditure.
 */
export declare class GetPaymentChannelMonthlyExpenditureResponse extends ErrorResponse {
    /**
     * List of payment channel monthly expenditures.
     */
    paymentChannelMonthlyExpenditure: PaymentChannelMonthlyExpenditure[];
    /**
     * The page number of the next set of data.
     */
    nextPageNumber: number;
    /**
     * Creates a new instance of GetPaymentChannelMonthlyExpenditureResponse.
     * @param paymentChannelMonthlyExpenditure List of payment channel monthly expenditures.
     * @param nextPageNumber The page number of the next set of data.
     */
    constructor(data?: Partial<GetPaymentChannelMonthlyExpenditureResponse>);
}
