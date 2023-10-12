import { ReOccuringTransaction } from 'src/data-contracts/financial-service/data-contracts';
import { ErrorResponse } from '../error';
export declare class GetReCurringTransactionsRequest {
    /**
     * The user id
     * Validations:
     * - user_id must be greater than 0
     */
    userId: number;
    constructor(data?: Partial<GetReCurringTransactionsRequest>);
}
export declare class GetReCurringTransactionsResponse extends ErrorResponse {
    reCcuringTransactions: ReOccuringTransaction[];
    constructor(data: Partial<GetReCurringTransactionsResponse>);
}
