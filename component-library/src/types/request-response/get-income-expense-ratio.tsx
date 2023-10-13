import { IncomeExpenseRatio } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';

/**
 * Represents the request for getting income expense ratio.
 */
export class GetIncomeExpenseRatioRequestClass {
  /**
   * The user ID associated with the request.
   */
  userId: number;

  /**
   * The month for which income expense ratio is requested (optional).
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
   * Creates a new instance of GetIncomeExpenseRatioRequest.
   * @param partialRequest Partial request object to initialize the GetIncomeExpenseRatioRequest.
   * @remarks You can use this constructor to create a partial instance of GetIncomeExpenseRatioRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(partialRequest: Partial<GetIncomeExpenseRatioRequestClass>) {
    this.userId = partialRequest.userId || 0;
    this.month = partialRequest.month || undefined;
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}

/**
 * Represents the response for getting income expense ratio.
 */
export class GetIncomeExpenseRatioResponseClass extends ErrorResponse {
  /**
   * List of income expense ratios.
   */
  incomeExpenseRatios: IncomeExpenseRatio[] = [];

  /**
   * The page number of the next set of data.
   */
  nextPageNumber: number = 0;

  /**
   * Creates a new instance of GetIncomeExpenseRatioResponse.
   * @param incomeExpenseRatios List of income expense ratios.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(data?: Partial<GetIncomeExpenseRatioResponseClass>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
