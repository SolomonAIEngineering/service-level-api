import { ErrorResponse } from '../error';
import { MonthlyTotalQuantityBySecurityAndUser } from '../financial';

/**
 * Represents the request for getting monthly total quantity by security and user.
 */
export class GetMonthlyTotalQuantityBySecurityAndUserRequest {
  /**
   * The user ID associated with the request.
   */
  userId: number;

  /**
   * The month for which monthly total quantity is requested.
   */
  month: number;

  /**
   * The security ID for filtering the records.
   */
  securityId: string;

  /**
   * The page number of the requested data.
   */
  pageNumber: number;

  /**
   * Number of items to return per page.
   */
  pageSize: number;

  /**
   * Creates a new instance of GetMonthlyTotalQuantityBySecurityAndUserRequest.
   * @param partialRequest Partial request object to initialize the GetMonthlyTotalQuantityBySecurityAndUserRequest.
   * @remarks You can use this constructor to create a partial instance of GetMonthlyTotalQuantityBySecurityAndUserRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(
    partialRequest: Partial<GetMonthlyTotalQuantityBySecurityAndUserRequest>,
  ) {
    this.userId = partialRequest.userId || 0;
    this.month = partialRequest.month || 0;
    this.securityId = partialRequest.securityId || '';
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}

/**
 * Represents the response for getting monthly total quantity by security and user.
 */
export class GetMonthlyTotalQuantityBySecurityAndUserResponse extends ErrorResponse {
  /**
   * List of monthly total quantity by security and user.
   */
  monthlyTotalQuantityBySecurityAndUser: MonthlyTotalQuantityBySecurityAndUser[] =
    [];

  /**
   * The page number of the next set of data.
   */
  nextPageNumber: number = 0;

  /**
   * Creates a new instance of GetMonthlyTotalQuantityBySecurityAndUserResponse.
   * @param monthlyTotalQuantityBySecurityAndUser List of monthly total quantity by security and user.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(
    data?: Partial<GetMonthlyTotalQuantityBySecurityAndUserResponse>,
  ) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
