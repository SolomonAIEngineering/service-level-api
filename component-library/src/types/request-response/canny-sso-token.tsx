import { GetCannyUserSSOTokenResponse } from 'src/data-contracts/user-service/data-contracts';
import { ErrorResponse } from '../error';
import { IRequest } from './IRequest';

export class GetCannyUserSSOTokenRequestClass implements IRequest {
  /** The email of the user of interest */
  userId: number = 0;

  constructor(data?: Partial<GetCannyUserSSOTokenRequestClass>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  isValid(): boolean {
    return this.userId > 0;
  }
}

export class GetCannyUserSSOTokenResponseClass
  extends ErrorResponse
  implements GetCannyUserSSOTokenResponse
{
  token: string = '';

  constructor(data?: Partial<GetCannyUserSSOTokenResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
