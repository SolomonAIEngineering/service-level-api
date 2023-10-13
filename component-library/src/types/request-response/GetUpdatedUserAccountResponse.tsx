import { UserAccount } from 'src/data-contracts/user-service/data-contracts';
import { ErrorResponse } from '../error';

export class GetUpdatedUserAccountResponseClass extends ErrorResponse {
  account: UserAccount | undefined;
  constructor(data: Partial<GetUpdatedUserAccountResponseClass>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
