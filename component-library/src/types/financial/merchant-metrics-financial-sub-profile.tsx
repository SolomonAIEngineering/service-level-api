import { MerchantMetricsFinancialSubProfile as MerchantMetricsFinancialSubProfile } from 'src/data-contracts/financial-service/data-contracts';

/**
 * Represents the financial sub profile of a merchant.
 *
 * @remarks
 * This class encapsulates the financial metrics related to a specific merchant's transactions. It gives insights into user spending patterns and behaviors over various time frames with a particular merchant.
 *
 * @example Constructing a `MerchantMetricsFinancialSubProfile` instance:
 *
 * ```ts
 * const data = {
 *   merchantName: 'Amazon',
 *   spentLastWeek: 150,
 *   spentLastMonth: 700,
 *   // ... other properties
 * };
 *
 * const merchantProfile = new MerchantMetricsFinancialSubProfile(data);
 * ```
 *
 * @property merchantName - The name of the merchant.
 * @property spentLastWeek - The total amount spent with the merchant during the last week.
 * @property spentLastTwoWeeks - The total amount spent with the merchant during the last two weeks.
 * @property spentLastMonth - The total amount spent with the merchant during the last month.
 * @property spentLastSixMonths - The total amount spent with the merchant over the past six months.
 * @property spentLastYear - The total amount spent with the merchant over the past year.
 * @property spentLastTwoYears - The total amount spent with the merchant over the past two years.
 * @property userId - The user ID associated with this financial profile.
 * @property month - The month for which this financial profile is reported.
 */
class MerchantMetricsFinancialSubProfileClass
  implements MerchantMetricsFinancialSubProfile
{
  merchantName: string;
  spentLastWeek: number;
  spentLastTwoWeeks: number;
  spentLastMonth: number;
  spentLastSixMonths: number;
  spentLastYear: number;
  spentLastTwoYears: number;
  userId: string;
  month: number;

  /**
   * Constructs a new MerchantMetricsFinancialSubProfile instance.
   *
   * @param data - Initialization data for the merchant financial sub profile.
   */
  constructor(data: Partial<MerchantMetricsFinancialSubProfile> = {}) {
    this.merchantName = data.merchantName ?? '';
    this.spentLastWeek = data.spentLastWeek ?? 0;
    this.spentLastTwoWeeks = data.spentLastTwoWeeks ?? 0;
    this.spentLastMonth = data.spentLastMonth ?? 0;
    this.spentLastSixMonths = data.spentLastSixMonths ?? 0;
    this.spentLastYear = data.spentLastYear ?? 0;
    this.spentLastTwoYears = data.spentLastTwoYears ?? 0;
    this.userId = data.userId ?? '0';
    this.month = data.month ?? 0;
  }
}

export { MerchantMetricsFinancialSubProfileClass };
