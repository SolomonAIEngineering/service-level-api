import {
  UpdateNoteToTransactionRequest,
  UpdateNoteToTransactionResponse,
  ErrorResponse,
  PlaidAccountTransaction,
  PlaidAccountTransactionClass,
  SmartNote,
  SmartNoteClass,
} from 'src/main';
import { IRequest } from './IRequest';

class UpdateNoteToTransactionRequestClass
  implements IRequest, UpdateNoteToTransactionRequest
{
  /**
   * The updated note
   * Validations:
   * - cannot be nil hence required
   */
  note: SmartNote = new SmartNoteClass({});

  /**
   * Creates an instance of UpdateNoteToTransactionRequestClass.
   * @param data - Optional data to initialize the request.
   */
  constructor(data?: Partial<UpdateNoteToTransactionRequestClass>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  isValid(): boolean {
    return this.note !== null;
  }
}

class UpdateNoteToTransactionResponseClass
  extends ErrorResponse
  implements UpdateNoteToTransactionResponse
{
  code = 0;
  err = '';
  token = '';
  transaction: PlaidAccountTransaction = new PlaidAccountTransactionClass({});

  /**
   * Creates an instance of UpdateNoteToTransactionResponseClass.
   * @param data - Optional data to initialize the response.
   */
  constructor(data?: Partial<UpdateNoteToTransactionResponse>) {
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

export {
  UpdateNoteToTransactionRequestClass,
  UpdateNoteToTransactionResponseClass,
};
