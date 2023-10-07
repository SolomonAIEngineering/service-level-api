import { Transaction } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';

/**
 * GetTransactionsRequest class
 *
 * Represents a request for getting transactions.
 */
export class GetTransactionsRequest {
  /**
   * The user ID.
   * Validations:
   * - Must be greater than 0.
   */
  userId: number = 0;

  /**
   * The page number.
   */
  pageNumber: number = 0;

  /**
   * The number of transactions per page.
   */
  pageSize: number = 0;

  /**
   * Creates an instance of GetTransactionsRequest.
   *
   * @param data - The data to initialize the request.
   */
  constructor(data: Partial<GetTransactionsRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

export class GetTransactionsResponse extends ErrorResponse {
  nextPageNumber: number | undefined;
  transactions: Transaction[] | undefined;

  constructor(data: Partial<GetTransactionsResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
