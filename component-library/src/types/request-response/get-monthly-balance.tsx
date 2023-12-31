import { MonthlyBalance } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';

/**
 * Represents the request for getting monthly balance.
 */
export class GetMonthlyBalanceRequestClass {
  /**
   * The user ID associated with the request.
   */
  userId: number;

  /**
   * The month for which monthly balance is requested (optional).
   */
  month?: number;

  /**
   * The page number of the requested data.
   */
  pageNumber: number;

  /**
   * Number of items to return per page.
   */
  pageSize: number;

  /**
   * Creates a new instance of GetMonthlyBalanceRequest.
   * @param partialRequest Partial request object to initialize the GetMonthlyBalanceRequest.
   * @remarks You can use this constructor to create a partial instance of GetMonthlyBalanceRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(partialRequest: Partial<GetMonthlyBalanceRequestClass>) {
    this.userId = partialRequest.userId || 0;
    this.month = partialRequest.month || undefined;
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}

/**
 * Represents the response for getting monthly balance.
 */
export class GetMonthlyBalanceResponseClass extends ErrorResponse {
  /**
   * List of monthly balances.
   */
  monthlyBalances: MonthlyBalance[] = [];

  /**
   * The page number of the next set of data.
   */
  nextPageNumber: number = 0;

  /**
   * Creates a new instance of GetMonthlyBalanceResponse.
   * @param monthlyBalances List of monthly balances.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(data?: Partial<GetMonthlyBalanceResponseClass>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
