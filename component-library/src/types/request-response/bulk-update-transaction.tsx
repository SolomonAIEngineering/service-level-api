import {
  BulkUpdateTransactionRequest,
  BulkUpdateTransactionResponse,
  ErrorResponse,
  IRequest,
  PlaidAccountTransaction,
} from 'src/main';

class BulkUpdateTransactionRequestClass
  implements IRequest, BulkUpdateTransactionRequest
{
  transactions: Array<PlaidAccountTransaction> =
    new Array<PlaidAccountTransaction>();
  /**
   * Creates an instance of AskCopilotQuestionRequestClass.
   * @param data - Optional data to initialize the request.
   */
  constructor(data?: Partial<BulkUpdateTransactionRequestClass>) {
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
    return this.transactions !== null && this.transactions.length > 0;
  }
}

class BulkUpdateTransactionResponseClass
  extends ErrorResponse
  implements BulkUpdateTransactionResponse
{
  code = 0;
  err = '';
  token = '';
  transactions: Array<PlaidAccountTransaction> =
    new Array<PlaidAccountTransaction>();

  /**
   * Creates an instance of AskCopilotQuestionResponseClass.
   * @param data - Optional data to initialize the response.
   */
  constructor(data?: Partial<BulkUpdateTransactionResponse>) {
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
    return this.transactions !== null && this.transactions.length > 0;
  }
}

export {
  BulkUpdateTransactionRequestClass,
  BulkUpdateTransactionResponseClass,
};
