import { UserAccount } from 'src/data-contracts/user-service/data-contracts';
import { ErrorResponse } from '../error';

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
