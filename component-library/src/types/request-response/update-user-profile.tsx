import { ErrorResponse } from '../error';
import { UserAccount } from '../user/user-account';
import { IRequest } from './IRequest';

/**
 * UpdateUserRequest: Represents the request object invoked against the user
 * service to update a given user account
 */
export class UpdateUserAccountRequest implements IRequest {
  /**
   * UserAccount to update
   * Validation:
   * - cannot nil hence required
   */
  account: UserAccount | undefined = new UserAccount();

  constructor(data?: Partial<UpdateUserAccountRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
        account: new UserAccount(data?.account),
      });
    }
  }

  isValid(): boolean {
    return this.account !== undefined;
  }
}

export class UpdateUserAccountResponse extends ErrorResponse {
  accountUpdated = false;
  account: UserAccount | undefined;

  constructor(data?: Partial<UpdateUserAccountResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
        account: new UserAccount(data?.account),
      });
    }
  }
}
