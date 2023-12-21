import {
  SearchTransactionsResponse,
  ErrorResponse,
  PlaidAccountTransaction,
  SearchTransactionsRequest,
  FinancialAccountType,
  FinancialUserProfileType
} from 'src/main';
import { IRequest } from './IRequest';

class SearchTransactionsRequestClass
  implements IRequest, SearchTransactionsRequest
{
  /**
   * The search query for transactions
   * Validations:
   * - query must not be empty
   */
  query: string = '';

  /**
   * Creates an instance of SearchTransactionsRequestClass.
   * @param data - Optional data to initialize the request.
   */
  constructor(data?: Partial<SearchTransactionsRequestClass>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
  category?: string | undefined;
  endDate?: string | undefined;
  financialAccountType?: FinancialAccountType | undefined;
  maxAmount?: number | undefined;
  minAmount?: number | undefined;
  pageNumber: string = '';
  pageSize: string = '';
  profileType: FinancialUserProfileType =
    'FINANCIAL_USER_PROFILE_TYPE_UNSPECIFIED';
  startDate?: string | undefined;
  userId: string = '';

  isValid(): boolean {
    return this.query !== '';
  }
}

class SearchTransactionsResponseClass
  extends ErrorResponse
  implements SearchTransactionsResponse
{
  code = 0;
  err = '';
  token = '';
  transactions: PlaidAccountTransaction[] = [];

  /**
   * Creates an instance of SearchTransactionsResponseClass.
   * @param data - Optional data to initialize the response.
   */
  constructor(data?: Partial<SearchTransactionsResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Checks if the response is valid.
   * @returns True if there are transactions in the response, otherwise false.
   */
  isValid(): boolean {
    return this.transactions.length > 0;
  }
}

export { SearchTransactionsRequestClass, SearchTransactionsResponseClass };
