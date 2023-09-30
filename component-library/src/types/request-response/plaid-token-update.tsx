import { ErrorResponse } from '../error';

export class PlaidInitiateTokenUpdateRequest {
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

  constructor(data?: Partial<PlaidInitiateTokenUpdateRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

export class PlaidInitiateTokenUpdateResponse extends ErrorResponse {
  linkToken: string = '';
  expiration: string = '';

  constructor(data: Partial<PlaidInitiateTokenUpdateResponse>) {
    super(data);
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
