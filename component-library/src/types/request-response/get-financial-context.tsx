import { ErrorResponse } from '../error';
import { MelodyFinancialContext } from '../financial';

/**
 * Represents the response for getting melody financial context.
 */
export class GetMelodyFinancialContextResponse extends ErrorResponse {
  /**
   * Melody financial context information.
   */
  melodyFinancialContext: MelodyFinancialContext | undefined;

  /**
   * Creates a new instance of GetMelodyFinancialContextResponse.
   * @param melodyFinancialContext Melody financial context information.
   */
  constructor(data?: Partial<GetMelodyFinancialContextResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

/**
 * Represents the request for getting Melody financial context.
 */
export class GetMelodyFinancialContextRequest {
  /**
   * The user ID associated with the request.
   */
  userId: number;

  /**
   * Creates a new instance of GetMelodyFinancialContextRequest.
   * @param userId The user ID associated with the request.
   */
  constructor(userId: number) {
    this.userId = userId;
  }
}
