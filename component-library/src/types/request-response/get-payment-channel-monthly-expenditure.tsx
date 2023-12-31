import { PaymentChannelMonthlyExpenditure } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';

/**
 * Represents the request for getting payment channel monthly expenditure.
 */
export class GetPaymentChannelMonthlyExpenditureRequestClass {
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
  constructor(
    partialRequest: Partial<GetPaymentChannelMonthlyExpenditureRequestClass>,
  ) {
    this.userId = partialRequest.userId || 0;
    this.month = partialRequest.month || 0;
    this.paymentChannel = partialRequest.paymentChannel || '';
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}

/**
 * Represents the response for getting payment channel monthly expenditure.
 */
export class GetPaymentChannelMonthlyExpenditureResponseClass extends ErrorResponse {
  /**
   * List of payment channel monthly expenditures.
   */
  paymentChannelMonthlyExpenditure: PaymentChannelMonthlyExpenditure[] = [];

  /**
   * The page number of the next set of data.
   */
  nextPageNumber: number = 0;

  /**
   * Creates a new instance of GetPaymentChannelMonthlyExpenditureResponse.
   * @param paymentChannelMonthlyExpenditure List of payment channel monthly expenditures.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(
    data?: Partial<GetPaymentChannelMonthlyExpenditureResponseClass>,
  ) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
