import { ErrorResponse } from '../error';
import { MonthlyExpenditure } from '../financial';

/**
 * Represents the request for getting monthly expenditure.
 */
export class GetMonthlyExpenditureRequest {
  /**
   * The user ID associated with the request.
   */
  userId: number;

  /**
   * The month for which monthly expenditure is requested.
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
   * Creates a new instance of GetMonthlyExpenditureRequest.
   * @param partialRequest Partial request object to initialize the GetMonthlyExpenditureRequest.
   * @remarks You can use this constructor to create a partial instance of GetMonthlyExpenditureRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(partialRequest: Partial<GetMonthlyExpenditureRequest>) {
    this.userId = partialRequest.userId || 0;
    this.month = partialRequest.month || 0;
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}

/**
 * Represents the response for getting monthly expenditure.
 */
export class GetMonthlyExpenditureResponse extends ErrorResponse {
  /**
   * List of monthly expenditures.
   */
  monthlyExpenditures: MonthlyExpenditure[] = [];

  /**
   * The page number of the next set of data.
   */
  nextPageNumber: number = 0;

  /**
   * Creates a new instance of GetMonthlyExpenditureResponse.
   * @param monthlyExpenditures List of monthly expenditures.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(data?: Partial<GetMonthlyExpenditureResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
