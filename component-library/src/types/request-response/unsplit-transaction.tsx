import {
  IRequest,
  PlaidAccountTransaction,
  PlaidAccountTransactionClass,
  UnSplitTransactionsResponse,
} from 'src/main';
import { ErrorResponse } from '../error';
import { UnSplitTransactionsRequest } from '../../data-contracts/financial-service/data-contracts';

class UnSplitTransactionRequestClass
  implements IRequest, UnSplitTransactionsRequest
{
  /**
   * The user ID associated with the request.
   */
  transactionId: string = '';

  /**
   * Creates an instance of AskCopilotQuestionRequestClass.
   * @param data - Optional data to initialize the request.
   */
  constructor(data?: Partial<UnSplitTransactionRequestClass>) {
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
    return this.transactionId !== '';
  }
}

class UnsplitTransactionResponseClass
  extends ErrorResponse
  implements UnSplitTransactionsResponse
{
  code = 0;
  err = '';
  token = '';

  transaction: PlaidAccountTransaction = new PlaidAccountTransactionClass({});

  /**
   * Creates an instance of AskCopilotQuestionResponseClass.
   * @param data - Optional data to initialize the response.
   */
  constructor(data?: Partial<UnSplitTransactionsResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Checks if the response is valid.
   * @returns True if the token is not empty, otherwise false.
   */
  isValid(): boolean {
    return this.token !== '';
  }
}

export { UnSplitTransactionRequestClass, UnsplitTransactionResponseClass };
