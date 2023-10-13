import { CategoryMonthlyIncome } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';

/**
 * Represents the request for getting user category monthly income.
 */
class GetUserCategoryMonthlyIncomeRequestClass {
  /**
   * The user ID associated with the request.
   */
  userId: number;

  /**
   * The primary personal finance category for filtering the records.
   */
  personalFinanceCategoryPrimary: string;

  /**
   * The month for which category monthly income is requested (in the format YYYYMM).
   */
  month: number;

  /**
   * The page number of the requested data.
   */
  pageNumber: number;

  /**
   * Number of items to return per page.
   */
  pageSize: number;

  /**
   * Creates a new instance of GetUserCategoryMonthlyIncomeRequest.
   * @param partialRequest Partial request object to initialize the GetUserCategoryMonthlyIncomeRequest.
   * @remarks You can use this constructor to create a partial instance of GetUserCategoryMonthlyIncomeRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(
    partialRequest: Partial<GetUserCategoryMonthlyIncomeRequestClass>,
  ) {
    this.userId = partialRequest.userId || 0;
    this.personalFinanceCategoryPrimary =
      partialRequest.personalFinanceCategoryPrimary || '';
    this.month = partialRequest.month || 0;
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}

class GetUserCategoryMonthlyIncomeResponseClass extends ErrorResponse {
  categoryMonthlyIncome: CategoryMonthlyIncome[] = [];
  nextPageNumber: number = 0;

  constructor(data?: Partial<GetUserCategoryMonthlyIncomeResponseClass>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

export {
  GetUserCategoryMonthlyIncomeResponseClass,
  GetUserCategoryMonthlyIncomeRequestClass,
};
