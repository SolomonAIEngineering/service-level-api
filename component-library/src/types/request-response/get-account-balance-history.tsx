import { ErrorResponse } from '../error';
import { AccountBalanceHistory } from '../financial';

export class GetAccountBalanceHistoryResponse extends ErrorResponse {
  accountBalanceHistory: AccountBalanceHistory[] = [];

  constructor(data: Partial<GetAccountBalanceHistoryResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

/**
 * Represents the request for getting account balance history.
 */
export class GetAccountBalanceHistoryRequest {
  /**
   * The account ID associated with the request.
   */
  plaidAccountId: string;

  /**
   * The page number of the requested data.
   */
  pageNumber: number;

  /**
   * Number of items to return per page.
   */
  pageSize: number;

  /**
   * Creates a new instance of GetAccountBalanceHistoryRequest.
   * @param partialRequest Partial request object to initialize the GetAccountBalanceHistoryRequest.
   * @remarks You can use this constructor to create a partial instance of GetAccountBalanceHistoryRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(partialRequest: Partial<GetAccountBalanceHistoryRequest>) {
    this.plaidAccountId = partialRequest.plaidAccountId || '';
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}
