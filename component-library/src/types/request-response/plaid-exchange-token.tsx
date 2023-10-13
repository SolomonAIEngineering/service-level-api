import { ErrorResponse } from '../error';

export class PlaidExchangeTokenRequestClass {
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number = 0;
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

  constructor(data?: Partial<PlaidExchangeTokenRequestClass>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

export class PlaidExchangeTokenResponseClass extends ErrorResponse {
  /** wether the operation was successful */
  success = false;

  constructor(data?: Partial<PlaidExchangeTokenResponseClass>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
