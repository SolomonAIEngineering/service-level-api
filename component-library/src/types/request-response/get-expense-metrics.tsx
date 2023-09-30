import { ErrorResponse } from '../error';
import { ExpenseMetrics } from '../financial';

/**
 * Represents the request for getting expense metrics.
 */
export class GetExpenseMetricsRequest {
  /**
   * The user ID associated with the request.
   */
  userId: number;

  /**
   * The month for which expense metrics are requested (optional).
   */
  month?: number;

  /**
   * The primary personal finance category for filtering the records (optional).
   */
  personalFinanceCategoryPrimary?: string;

  /**
   * The page number of the requested data.
   */
  pageNumber: number;

  /**
   * Number of items to return per page.
   */
  pageSize: number;

  /**
   * Creates a new instance of GetExpenseMetricsRequest.
   * @param partialRequest Partial request object to initialize the GetExpenseMetricsRequest.
   * @remarks You can use this constructor to create a partial instance of GetExpenseMetricsRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(partialRequest: Partial<GetExpenseMetricsRequest>) {
    this.userId = partialRequest.userId || 0;
    this.month = partialRequest.month || undefined;
    this.personalFinanceCategoryPrimary =
      partialRequest.personalFinanceCategoryPrimary || '';
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}

/**
 * Represents the response for getting expense metrics.
 */
export class GetExpenseMetricsResponse extends ErrorResponse {
  /**
   * List of expense metrics.
   */
  expenseMetrics: ExpenseMetrics[] = [];

  /**
   * The page number of the next set of data.
   */
  nextPageNumber: number = 0;

  /**
   * Creates a new instance of GetExpenseMetricsResponse.
   * @param expenseMetrics List of expense metrics.
   * @param nextPageNumber The page number of the next set of data.
   */

  constructor(data?: Partial<GetExpenseMetricsResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
