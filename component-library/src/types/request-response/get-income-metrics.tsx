import { IncomeMetrics } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';

/**
 * Represents the request for getting income metrics.
 */
export class GetIncomeMetricsRequestClass {
  /**
   * The user ID associated with the request.
   */
  userId: number;

  /**
   * The month for which income metrics are requested (optional).
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
   * Creates a new instance of GetIncomeMetricsRequest.
   * @param partialRequest Partial request object to initialize the GetIncomeMetricsRequest.
   * @remarks You can use this constructor to create a partial instance of GetIncomeMetricsRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(partialRequest: Partial<GetIncomeMetricsRequestClass>) {
    this.userId = partialRequest.userId || 0;
    this.month = partialRequest.month || undefined;
    this.personalFinanceCategoryPrimary =
      partialRequest.personalFinanceCategoryPrimary || '';
    this.pageNumber = partialRequest.pageNumber || 1;
    this.pageSize = partialRequest.pageSize || 10;
  }
}

/**
 * Represents the response for getting income metrics.
 */
export class GetIncomeMetricsResponseClass extends ErrorResponse {
  /**
   * List of income metrics.
   */
  incomeMetrics: IncomeMetrics[] = [];

  /**
   * The page number of the next set of data.
   */
  nextPageNumber: number = 0;

  /**
   * Creates a new instance of GetIncomeMetricsResponse.
   * @param incomeMetrics List of income metrics.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(data?: Partial<GetIncomeMetricsResponseClass>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
