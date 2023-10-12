import { MerchantMonthlyExpenditure as MerchantMonthlyExpenditure } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Represents the monthly expenditure of a merchant.
 *
 * @remarks
 * This class encapsulates the monthly financial metrics related to a specific merchant's transactions. It provides insights into how much a user spends with a particular merchant on a monthly basis.
 *
 * @example Constructing a `MerchantMonthlyExpenditure` instance:
 *
 * ```ts
 * const expenditureData = {
 *   month: 7,
 *   merchantName: 'Amazon',
 *   totalSpending: 500,
 *   userId: 12345,
 * };
 *
 * const monthlyExpenditure = new MerchantMonthlyExpenditure(expenditureData);
 * ```
 *
 * @property month - The month for which this expenditure is reported.
 * @property merchantName - The name of the merchant.
 * @property totalSpending - The total amount spent with the merchant during the month.
 * @property userId - The user ID associated with this expenditure.
 */
declare class MerchantMonthlyExpenditureClass implements MerchantMonthlyExpenditure {
    month: number;
    merchantName: string;
    totalSpending: number;
    userId: string;
    /**
     * Constructs a new MerchantMonthlyExpenditure instance.
     *
     * @param data - Initialization data for the merchant monthly expenditure.
     */
    constructor(data?: Partial<MerchantMonthlyExpenditure>);
}
export { MerchantMonthlyExpenditureClass };
