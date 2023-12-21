import { DeleteTransactionResponse } from 'src/main';
import { ErrorResponse } from '../error';
import { IRequest } from './IRequest';

class DeleteTransactionRequestClass implements IRequest {
  transactionId: string = '';

  constructor(data?: Partial<DeleteTransactionRequestClass>) {
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

class DeleteTransactionResponseClass
  extends ErrorResponse
  implements DeleteTransactionResponse
{
  code = 0;
  err = '';
  token = '';
  deleted: boolean = false;

  constructor(data?: Partial<DeleteTransactionResponseClass>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  isValid(): boolean {
    return this.token !== '';
  }
}

export { DeleteTransactionResponseClass, DeleteTransactionRequestClass };
