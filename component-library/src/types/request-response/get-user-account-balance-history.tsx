import { ErrorResponse } from '../error';
import { AccountBalanceHistory } from '../financial';

/**
 * Represents the response for getting user account balance history.
 */
export class GetUserAccountBalanceHistoryResponse extends ErrorResponse {
  /**
   * List of account balance history records.
   */
  accountBalanceHistory: AccountBalanceHistory[] = [];

  constructor(data: Partial<GetUserAccountBalanceHistoryResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

/**
 * Represents the request for getting user account balance history.
 */
export class GetUserAccountBalanceHistoryRequest {
  /**
   * The user ID associated with the request.
   */
  userId: number;

  /**
   * The page number of the requested data.
   */
  pageNumber: number;

  /**
   * Number of items to return per page.
   */
  pageSize: number;

  /**
   * Creates a new instance of GetUserAccountBalanceHistoryRequest.
   * @param partialRequest Partial request object to initialize the GetUserAccountBalanceHistoryRequest.
   * @remarks You can use this constructor to create a partial instance of GetUserAccountBalanceHistoryRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(partialRequest: Partial<GetUserAccountBalanceHistoryRequest>) {
    this.userId = partialRequest.userId || 0;
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}
