import { MelodyFinancialContext } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';

/**
 * Represents the response for getting melody financial context.
 */
export class GetMelodyFinancialContextResponseClass extends ErrorResponse {
  /**
   * Melody financial context information.
   */
  melodyFinancialContext: MelodyFinancialContext | undefined;

  /**
   * Creates a new instance of GetMelodyFinancialContextResponse.
   * @param melodyFinancialContext Melody financial context information.
   */
  constructor(data?: Partial<GetMelodyFinancialContextResponseClass>) {
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
export class GetMelodyFinancialContextRequestClass {
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
