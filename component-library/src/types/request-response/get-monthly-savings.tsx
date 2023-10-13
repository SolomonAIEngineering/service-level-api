import { MonthlySavings } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';

/**
 * Represents the request for getting monthly savings.
 */
export class GetMonthlySavingsRequestClass {
  /**
   * The user ID associated with the request.
   */
  userId: number;

  /**
   * The month for which monthly savings is requested.
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
   * Creates a new instance of GetMonthlySavingsRequest.
   * @param partialRequest Partial request object to initialize the GetMonthlySavingsRequest.
   * @remarks You can use this constructor to create a partial instance of GetMonthlySavingsRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(partialRequest: Partial<GetMonthlySavingsRequestClass>) {
    this.userId = partialRequest.userId || 0;
    this.month = partialRequest.month || 0;
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}

/**
 * Represents the response for getting monthly savings.
 */
export class GetMonthlySavingsResponseClass extends ErrorResponse {
  /**
   * List of monthly savings.
   */
  monthlySavings: MonthlySavings[] = [];

  /**
   * The page number of the next set of data.
   */
  nextPageNumber: number = 0;

  /**
   * Creates a new instance of GetMonthlySavingsResponse.
   * @param monthlySavings List of monthly savings.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(data?: Partial<GetMonthlySavingsResponseClass>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
