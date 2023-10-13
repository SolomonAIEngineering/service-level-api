import { ErrorResponse } from '../error';

export class PlaidInitiateTokenUpdateRequestClass {
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number = 0;
  /**
   * The link id we want to update for
   * Validations:
   * - cannot be nil hence required
   */
  linkId: number = 0;

  constructor(data?: Partial<PlaidInitiateTokenUpdateRequestClass>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

export class PlaidInitiateTokenUpdateResponseClass extends ErrorResponse {
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
