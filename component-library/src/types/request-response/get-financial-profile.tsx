import { FinancialProfile } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';

/**
 * Represents the request for getting financial profile.
 */
export class GetFinancialProfileRequest {
  /**
   * The user ID associated with the request.
   */
  userId: number;

  /**
   * The month for which financial profile is requested (optional).
   */
  month?: number;

  /**
   * The page number of the requested data.
   */
  pageNumber: number;

  /**
   * Number of items to return per page.
   */
  pageSize: number;

  /**
   * Creates a new instance of GetFinancialProfileRequest.
   * @param partialRequest Partial request object to initialize the GetFinancialProfileRequest.
   * @remarks You can use this constructor to create a partial instance of GetFinancialProfileRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(partialRequest: Partial<GetFinancialProfileRequest>) {
    this.userId = partialRequest.userId || 0;
    this.month = partialRequest.month || undefined;
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}

/**
 * Represents the response for getting financial profile.
 */
export class GetFinancialProfileResponse extends ErrorResponse {
  /**
   * List of financial profiles.
   */
  financialProfiles: FinancialProfile[] = [];

  /**
   * The page number of the next set of data.
   */
  nextPageNumber: number = 0;

  /**
   * Creates a new instance of GetFinancialProfileResponse.
   * @param financialProfiles List of financial profiles.
   * @param nextPageNumber The page number of the next set of data.
   */

  constructor(data?: Partial<GetFinancialProfileResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
