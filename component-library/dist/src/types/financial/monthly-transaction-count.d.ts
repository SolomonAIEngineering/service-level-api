import { MonthlyTransactionCount as MonthlyTransactionCount } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Represents the monthly transaction count of a user.
 *
 * @remarks
 * This class offers insights into the number of transactions a user has made for a specific month. It aids in monitoring user activity and spending behavior.
 *
 * @example Constructing a `MonthlyTransactionCount` instance:
 *
 * ```ts
 * const userTransactionData = {
 *   month: 7,
 *   transactionCount: 20,
 *   userId: 12345,
 * };
 *
 * const userTransaction = new MonthlyTransactionCount(userTransactionData);
 * ```
 *
 * @property month - The month for which the transaction count is reported.
 * @property transactionCount - The total number of transactions made by the user for the month.
 * @property userId - The user ID associated with this record.
 */
declare class MonthlyTransactionCountClass implements MonthlyTransactionCount {
    month: number;
    transactionCount: string;
    userId: string;
    /**
     * Constructs a new MonthlyTransactionCount instance.
     *
     * @param data - Initialization data for the monthly transaction count.
     */
    constructor(data?: Partial<MonthlyTransactionCount>);
}
export { MonthlyTransactionCountClass };
