import { ErrorResponse } from '../error';
import { Transaction } from '../financial';

/**
 * Represents the response for getting transactions for a bank account.
 */
export class GetTransactionsForBankAccountResponse extends ErrorResponse {
  /**
   * An array of transactions for the bank account.
   */
  transactions: Transaction[] = [];

  /**
   * The page number of the next set of transactions.
   */
  nextPageNumber: number = 0;

  /**
   * Creates a new instance of GetTransactionsForBankAccountResponse.
   * @param transactions An array of transactions for the bank account.
   * @param nextPageNumber The page number of the next set of transactions.
   */
  constructor(data: GetTransactionsForBankAccountResponse) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

/**
 * Class representing a request to get transactions for a bank account.
 */
export class GetTransactionsForBankAccountRequest {
  /** The user id */
  userId: number = 0;

  /** Plaid account id */
  plaidAccountId: string = '';

  /** Page number for paginated results */
  pageNumber: number = 0;

  /** Page size for paginated results */
  pageSize: number = 0;

  /**
   * Create a request to get transactions for a bank account.
   * @param {Partial<GetTransactionsForBankAccountRequest>} data - Object containing any properties of a request.
   */
  constructor(data: Partial<GetTransactionsForBankAccountRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
