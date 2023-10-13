import { AccountBalanceHistory } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';

export class GetAccountBalanceHistoryResponseClass extends ErrorResponse {
  accountBalanceHistory: AccountBalanceHistory[] = [];

  constructor(data: Partial<GetAccountBalanceHistoryResponseClass>) {
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
export class GetAccountBalanceHistoryRequestClass {
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
  constructor(partialRequest: Partial<GetAccountBalanceHistoryRequestClass>) {
    this.plaidAccountId = partialRequest.plaidAccountId || '';
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}
