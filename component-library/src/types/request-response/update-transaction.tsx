import {
  PlaidAccountTransaction,
  UpdateTransactionRequest,
} from '../../data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
import { PlaidAccountTransactionClass } from '../financial';
import { IRequest } from './IRequest';
import { UpdateTransactionResponse } from '../../data-contracts/financial-service/data-contracts';

class UpdateTransactionRequestClass
  implements IRequest, UpdateTransactionRequest
{
  transaction: PlaidAccountTransaction = new PlaidAccountTransactionClass({});

  /**
   * Creates an instance of AskCopilotQuestionRequestClass.
   * @param data - Optional data to initialize the request.
   */
  constructor(data?: Partial<UpdateTransactionRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  isValid(): boolean {
    return this.transaction !== null;
  }
}

class UpdateTransactionResponseClass
  extends ErrorResponse
  implements UpdateTransactionResponse
{
  code = 0;
  err = '';
  token = '';
  transaction: PlaidAccountTransaction = new PlaidAccountTransactionClass({});

  /**
   * Constructor for UpdateTransactionResponseClass
   * @param data - Optional data to initialize the response.
   * @param options - Optional options
   *
   */
  constructor(data?: Partial<UpdateTransactionResponse>) {
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
    return this.transaction !== null;
  }
}

export { UpdateTransactionRequestClass, UpdateTransactionResponseClass };
