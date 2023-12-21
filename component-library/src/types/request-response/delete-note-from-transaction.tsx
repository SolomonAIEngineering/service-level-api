import { DeleteNoteFromTransactionResponse, ErrorResponse } from 'src/main';
import { IRequest } from './IRequest';

class DeleteNoteFromTransactionRequestClass implements IRequest {
  /**
   * The transaction id to delete the note from
   * Validations:
   * - transaction_id must be greater than 0
   * @format uint64
   */
  transactionId: string = '';

  /**
   * The note id to delete
   * Validations:
   * - note_id must be greater than 0
   * @format uint64
   */
  noteId: string = '';

  /**
   * Creates an instance of DeleteNoteFromTransactionRequestClass.
   * @param data - Optional data to initialize the request.
   */
  constructor(data?: Partial<DeleteNoteFromTransactionRequestClass>) {
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

class DeleteNoteFromTransactionResponseClass
  extends ErrorResponse
  implements DeleteNoteFromTransactionResponse
{
  code = 0;
  err = '';
  token = '';
  deleted: boolean = false;

  /**
   * Creates an instance of DeleteNoteFromTransactionResponseClass.
   * @param data - Optional data to initialize the response.
   */
  constructor(data?: Partial<DeleteNoteFromTransactionResponse>) {
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
    return this.deleted;
  }
}

export {
  DeleteNoteFromTransactionRequestClass,
  DeleteNoteFromTransactionResponseClass,
};
