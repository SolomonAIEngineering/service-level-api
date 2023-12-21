import {
  FinancialUserProfileType,
  PlaidExchangeTokenRequest,
  PlaidExchangeTokenResponse,
} from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';

export class PlaidExchangeTokenRequestClass implements PlaidExchangeTokenRequest {
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: string = '';
  /**
   * The public token
   * Validations:
   * - cannot be nil hence required
   */
  publicToken: string = '';
  /** The institution id */
  institutionId: string = '';
  /** The institution name */
  institutionName: string = '';
  /** The profile type of the financial user */
  profileType: FinancialUserProfileType = 'FINANCIAL_USER_PROFILE_TYPE_USER';

  constructor(data?: Partial<PlaidExchangeTokenRequestClass>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

export class PlaidExchangeTokenResponseClass extends ErrorResponse implements PlaidExchangeTokenResponse {
  /** wether the operation was successful */
  success = false;
  taskId: string = ''

  constructor(data?: Partial<PlaidExchangeTokenResponseClass>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
