import {
  AddNoteToTransactionRequest,
  AddNoteToTransactionResponse,
  ErrorResponse,
  PlaidAccountTransaction,
  PlaidAccountTransactionClass,
  SmartNote,
  SmartNoteClass,
} from 'src/main';
import { IRequest } from './IRequest';

class AddNoteToTransactionRequestClass
  implements IRequest, AddNoteToTransactionRequest
{
  /**
   * The note to add
   * Validations:
   * - cannot be nil hence required
   */
  note: SmartNote = new SmartNoteClass({});
  /**
   * The transaction id
   * Validations:
   * - transaction_id must be greater than 0
   * @format uint64
   */
  transactionId: string = '';

  /**
   * Creates an instance of AddNoteToTransactionRequestClass.
   * @param data - Optional data to initialize the request.
   */
  constructor(data?: Partial<AddNoteToTransactionRequestClass>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  isValid(): boolean {
    return this.note !== null && this.transactionId !== '';
  }
}

class AddNoteToTransactionResponseClass
  extends ErrorResponse
  implements AddNoteToTransactionResponse
{
  code = 0;
  err = '';
  token = '';
  transaction: PlaidAccountTransaction = new PlaidAccountTransactionClass({});

  /**
   * Creates an instance of AddNoteToTransactionResponseClass.
   * @param data - Optional data to initialize the response.
   */
  constructor(data?: Partial<AddNoteToTransactionResponse>) {
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

export { AddNoteToTransactionRequestClass, AddNoteToTransactionResponseClass };
