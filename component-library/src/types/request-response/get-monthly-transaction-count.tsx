import { ErrorResponse } from '../error';
import { MonthlyTransactionCount } from '../financial';

/**
 * Represents the request for getting monthly transaction count.
 */
export class GetMonthlyTransactionCountRequest {
  /**
   * The user ID associated with the request.
   */
  userId: number;

  /**
   * The month for which monthly transaction count is requested.
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
   * Creates a new instance of GetMonthlyTransactionCountRequest.
   * @param partialRequest Partial request object to initialize the GetMonthlyTransactionCountRequest.
   * @remarks You can use this constructor to create a partial instance of GetMonthlyTransactionCountRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(partialRequest: Partial<GetMonthlyTransactionCountRequest>) {
    this.userId = partialRequest.userId || 0;
    this.month = partialRequest.month || 0;
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}

/**
 * Represents the response for getting monthly transaction count.
 */
export class GetMonthlyTransactionCountResponse extends ErrorResponse {
  /**
   * List of monthly transaction counts.
   */
  monthlyTransactionCounts: MonthlyTransactionCount[] = [];

  /**
   * The page number of the next set of data.
   */
  nextPageNumber: number = 0;

  /**
   * Creates a new instance of GetMonthlyTransactionCountResponse.
   * @param monthlyTransactionCounts List of monthly transaction counts.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(data?: Partial<GetMonthlyTransactionCountResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
