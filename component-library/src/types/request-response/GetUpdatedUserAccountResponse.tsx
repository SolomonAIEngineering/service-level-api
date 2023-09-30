import { ErrorResponse } from '../error';
import { UserAccount } from '../user/user-account';

export class GetUpdatedUserAccountResponse extends ErrorResponse {
  account: UserAccount | undefined;
  constructor(data: Partial<GetUpdatedUserAccountResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
