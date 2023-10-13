import { UserAccount } from 'src/data-contracts/user-service/data-contracts';
import { ErrorResponse } from '../error';
import { IRequest } from './IRequest';

/**
 * UpdateUserRequest: Represents the request object invoked against the user
 * service to update a given user account
 */
export class UpdateUserAccountRequestClass implements IRequest {
  /**
   * UserAccount to update
   * Validation:
   * - cannot nil hence required
   */
  account: UserAccount | undefined = undefined;

  constructor(data?: Partial<UpdateUserAccountRequestClass>) {
    if (data) {
      Object.assign(this, {
        ...data,
        account: data?.account ? data.account : undefined,
      });
    }
  }

  isValid(): boolean {
    return this.account !== undefined;
  }
}

export class UpdateUserAccountResponseClass extends ErrorResponse {
  accountUpdated = false;
  account: UserAccount | undefined;

  constructor(data?: Partial<UpdateUserAccountResponseClass>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
        account: data?.account ? data.account : undefined,
      });
    }
  }
}
