import {
  FinancialUserProfileType,
  PlaidInitiateTokenUpdateRequest,
  PlaidInitiateTokenUpdateResponse,
} from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';

export class PlaidInitiateTokenUpdateRequestClass
  implements PlaidInitiateTokenUpdateRequest
{
  /**
   * The link id we want to update for
   * Validations:
   * - cannot be nil hence required
   * @format uint64
   */
  linkId: string = '';
  profileType: FinancialUserProfileType = 'FINANCIAL_USER_PROFILE_TYPE_USER';
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   * @format uint64
   */
  userId: string = '';

  constructor(data?: Partial<PlaidInitiateTokenUpdateRequestClass>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

export class PlaidInitiateTokenUpdateResponseClass
  extends ErrorResponse
  implements PlaidInitiateTokenUpdateResponse
{
  linkToken: string = '';
  expiration: string = '';

  constructor(data: Partial<PlaidInitiateTokenUpdateResponseClass>) {
    super(data);
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
