import { LocationFinancialSubProfile as LocationFinancialSubProfile } from 'src/data-contracts/financial-service/data-contracts';

/**
 * Represents the financial sub profile of a location.
 *
 * @remarks
 * This class provides a detailed representation of the financial transactions and spending patterns associated with a specific city or location. It can be used to understand user behavior and spending in different regions.
 *
 * @example Constructing a `LocationFinancialSubProfile` instance:
 *
 * ```ts
 * const data = {
 *   locationCity: 'New York',
 *   transactionCount: 120,
 *   spentLastWeek: 250,
 *   // ... other properties
 * };
 *
 * const locationProfile = new LocationFinancialSubProfile(data);
 * ```
 *
 * @property locationCity - The name of the city or location.
 * @property transactionCount - The total number of transactions made in the specified location.
 * @property spentLastWeek - The total amount spent in the location during the last week.
 * @property spentLastTwoWeeks - The total amount spent in the location during the last two weeks.
 * @property spentLastMonth - The total amount spent in the location during the last month.
 * @property spentLastSixMonths - The total amount spent in the location over the past six months.
 * @property spentLastYear - The total amount spent in the location over the past year.
 * @property spentLastTwoYears - The total amount spent in the location over the past two years.
 * @property userId - The user ID associated with this financial profile.
 * @property month - The month for which this financial profile is reported.
 */
class LocationFinancialSubProfileClass implements LocationFinancialSubProfile {
  locationCity: string;
  transactionCount: string;
  spentLastWeek: number;
  spentLastTwoWeeks: number;
  spentLastMonth: number;
  spentLastSixMonths: number;
  spentLastYear: number;
  spentLastTwoYears: number;
  userId: string;
  month: number;

  /**
   * Constructs a new LocationFinancialSubProfile instance.
   *
   * @param data - Initialization data for the location financial sub profile.
   */
  constructor(data: Partial<LocationFinancialSubProfile> = {}) {
    this.locationCity = data.locationCity ?? '';
    this.transactionCount = data.transactionCount ?? '0';
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

export { LocationFinancialSubProfileClass };
