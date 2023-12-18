import { IRequest } from './IRequest';
import {
  CreateAccountingProfileRequest,
  CreateAccountingProfileResponse,
} from '../../data-contracts/accounting-service/data-contracts';
import { ErrorResponse } from '../error';
import { getRandomString } from 'src/lib-utils/utils';

export class CreateAccountingProfileRequestClass
  implements IRequest, CreateAccountingProfileRequest
{
  userId: string = '';

  constructor(request: Partial<CreateAccountingProfileRequest>) {
    if (request) {
      Object.assign(this, {
        ...request,
      });
    }
  }

  isValid(): boolean {
    return this.userId.length > 0;
  }
}

export class CreateAccountingProfileResponseClass
  extends ErrorResponse
  implements CreateAccountingProfileResponse
{
  /** @format uint64 */
  profileId: string = '';

  constructor(data?: Partial<CreateAccountingProfileResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): CreateAccountingProfileResponse {
    return new CreateAccountingProfileResponseClass({
      profileId: getRandomString(10),
    });
  }
}
