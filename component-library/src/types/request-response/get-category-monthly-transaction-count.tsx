import {
  CategoryMonthlyTransactionCount,
} from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';

/**
 * Represents the request for getting category monthly transaction count.
 */
class GetCategoryMonthlyTransactionCountRequestClass  {
  /**
   * The user ID associated with the request (has to be present and defined).
   */
  userId: number;

  /**
   * The month for which category monthly transaction count is requested (optional).
   */
  month: number;

  /**
   * The primary personal finance category for filtering the records (optional).
   */
  personalFinanceCategoryPrimary: string;

  /**
   * The page number of the requested data.
   */
  pageNumber: number;

  /**
   * Number of items to return per page.
   */
  pageSize: number;

  /**
   * Creates a new instance of GetCategoryMonthlyTransactionCountRequest.
   * @param partialRequest Partial request object to initialize the GetCategoryMonthlyTransactionCountRequest.
   * @remarks You can use this constructor to create a partial instance of GetCategoryMonthlyTransactionCountRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(
    partialRequest: Partial<GetCategoryMonthlyTransactionCountRequestClass>,
  ) {
    this.userId = partialRequest.userId || 0;
    this.month = partialRequest.month || 0;
    this.personalFinanceCategoryPrimary =
      partialRequest.personalFinanceCategoryPrimary || '';
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}

class GetCategoryMonthlyTransactionCountResponseClass extends ErrorResponse {
  categoryMonthlyTransactionCount: CategoryMonthlyTransactionCount[] = [];
  nextPageNumber: number = 0;

  constructor(data?: Partial<GetCategoryMonthlyTransactionCountResponseClass>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

export {
  GetCategoryMonthlyTransactionCountRequestClass,
  GetCategoryMonthlyTransactionCountResponseClass,
};
