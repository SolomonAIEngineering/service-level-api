import { ReOccuringTransaction } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';

export class GetReCurringTransactionsRequestClass {
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number = 0;

  constructor(data?: Partial<GetReCurringTransactionsRequestClass>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}

export class GetReCurringTransactionsResponseClass extends ErrorResponse {
  reCcuringTransactions: ReOccuringTransaction[] = [];

  constructor(data: Partial<GetReCurringTransactionsResponseClass>) {
    super(data);
    if (data?.reCcuringTransactions) {
      this.reCcuringTransactions = data.reCcuringTransactions;
    }
  }
}
