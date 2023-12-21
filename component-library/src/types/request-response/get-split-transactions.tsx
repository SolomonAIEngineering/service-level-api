import {
  ErrorResponse,
  GetSplitTransactionResponse,
  TransactionSplit,
} from 'src/main';
import { IRequest } from './IRequest';

class GetSplitTransactionsRequestClass implements IRequest {
  /**
   * The transaction id for which to get split transactions
   * Validations:
   * - transaction_id must be greater than 0
   * @format uint64
   */
  transactionId: string = '';

  /**
   * Creates an instance of GetSplitTransactionsRequestClass.
   * @param data - Optional data to initialize the request.
   */
  constructor(data?: Partial<GetSplitTransactionsRequestClass>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  isValid(): boolean {
    return this.transactionId !== '';
  }
}

class GetSplitTransactionsResponseClass
  extends ErrorResponse
  implements GetSplitTransactionResponse
{
  code = 0;
  err = '';
  token = '';
  splitTransactions: Array<TransactionSplit> = [];

  /**
   * Creates an instance of GetSplitTransactionsResponseClass.
   * @param data - Optional data to initialize the response.
   */
  constructor(data?: Partial<GetSplitTransactionResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Checks if the response is valid.
   * @returns True if there are split transactions in the response, otherwise false.
   */
  isValid(): boolean {
    return this.splitTransactions.length > 0;
  }
}

export { GetSplitTransactionsRequestClass, GetSplitTransactionsResponseClass };
