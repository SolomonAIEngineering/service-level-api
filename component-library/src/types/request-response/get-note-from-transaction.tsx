import {
  GetNoteFromTransactionResponse,
  ErrorResponse,
  SmartNote,
  SmartNoteClass,
} from 'src/main';
import { IRequest } from './IRequest';

class GetNoteFromTransactionRequestClass implements IRequest {
  /**
   * The transaction id to get the note from
   * Validations:
   * - transaction_id must be greater than 0
   * @format uint64
   */
  transactionId: string = '';

  /**
   * The note id to retrieve
   * Validations:
   * - note_id must be greater than 0
   * @format uint64
   */
  noteId: string = '';

  /**
   * Creates an instance of GetNoteFromTransactionRequestClass.
   * @param data - Optional data to initialize the request.
   */
  constructor(data?: Partial<GetNoteFromTransactionRequestClass>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  isValid(): boolean {
    return this.transactionId !== '' && this.noteId !== '';
  }
}

class GetNoteFromTransactionResponseClass
  extends ErrorResponse
  implements GetNoteFromTransactionResponse
{
  code = 0;
  err = '';
  token = '';
  note: SmartNote = new SmartNoteClass({});

  /**
   * Creates an instance of GetNoteFromTransactionResponseClass.
   * @param data - Optional data to initialize the response.
   */
  constructor(data?: Partial<GetNoteFromTransactionResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Checks if the response is valid.
   * @returns True if the note is not empty, otherwise false.
   */
  isValid(): boolean {
    return this.note !== null;
  }
}

export {
  GetNoteFromTransactionRequestClass,
  GetNoteFromTransactionResponseClass,
};
