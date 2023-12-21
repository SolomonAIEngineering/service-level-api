import {
  ErrorResponse,
  PlaidAccountTransaction,
  PlaidAccountTransactionClass,
  SplitTransactionRequest,
  SplitTransactionResponse,
  TransactionSplit,
} from 'src/main';
import { IRequest } from './IRequest';

class SplitTransactionRequestClass
  implements IRequest, SplitTransactionRequest
{
  /**
   * The user ID associated with the request.
   */
  transactionId: string = '';
  splitTransactions: Array<TransactionSplit> = new Array<TransactionSplit>();

  /**
   * Creates an instance of AskCopilotQuestionRequestClass.
   * @param data - Optional data to initialize the request.
   */
  constructor(data?: Partial<SplitTransactionRequestClass>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Checks if the request is valid.
   * @returns True if the user ID is not empty, otherwise false.
   */
  isValid(): boolean {
    return this.transactionId !== '' && this.splitTransactions.length > 0;
  }
}

class SplitTransactionResponseClass
  extends ErrorResponse
  implements SplitTransactionResponse
{
  code = 0;
  err = '';
  token = '';
  transaction: PlaidAccountTransaction = new PlaidAccountTransactionClass({});

  /**
   * Creates an instance of SplitTransactionResponseClass.
   * @param data - Optional data to initialize the response.
   */

  constructor(data?: Partial<SplitTransactionResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Checks if the response is valid.
   * @returns True if the response is valid, otherwise false.
   */
  isValid(): boolean {
    return this.transaction !== null;
  }

  // get the number of transactions
  getNumberOfTransactionSplit(): number {
    return this.transaction.splits ? this.transaction.splits.length : 0;
  }
}

export { SplitTransactionRequestClass, SplitTransactionResponseClass };
