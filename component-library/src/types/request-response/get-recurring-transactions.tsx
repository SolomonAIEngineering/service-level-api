import { ReOccuringTransaction } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';

export class GetReCurringTransactionsRequest {
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number = 0;

  constructor(data?: Partial<GetReCurringTransactionsRequest>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}

export class GetReCurringTransactionsResponse extends ErrorResponse {
  reCcuringTransactions: ReOccuringTransaction[] = [];

  constructor(data: Partial<GetReCurringTransactionsResponse>) {
    super(data);
    if (data?.reCcuringTransactions) {
      this.reCcuringTransactions = data.reCcuringTransactions;
    }
  }
}
