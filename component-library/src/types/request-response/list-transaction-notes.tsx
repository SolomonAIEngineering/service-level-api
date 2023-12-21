import {
  ListTransactionNotesResponse,
  ErrorResponse,
  SmartNote,
} from 'src/main';
import { IRequest } from './IRequest';

class ListTransactionNotesRequestClass implements IRequest {
  /**
   * The transaction id to list notes for
   * Validations:
   * - transaction_id must be greater than 0
   * @format uint64
   */
  transactionId: string = '';

  /**
   * Creates an instance of ListTransactionNotesRequestClass.
   * @param data - Optional data to initialize the request.
   */
  constructor(data?: Partial<ListTransactionNotesRequestClass>) {
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

class ListTransactionNotesResponseClass
  extends ErrorResponse
  implements ListTransactionNotesResponse
{
  code = 0;
  err = '';
  token = '';
  notes: Array<SmartNote> = [];

  /**
   * Creates an instance of ListTransactionNotesResponseClass.
   * @param data - Optional data to initialize the response.
   */
  constructor(data?: Partial<ListTransactionNotesResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Checks if the response is valid.
   * @returns True if there are notes in the response, otherwise false.
   */
  isValid(): boolean {
    return this.notes.length > 0;
  }
}

export { ListTransactionNotesRequestClass, ListTransactionNotesResponseClass };
