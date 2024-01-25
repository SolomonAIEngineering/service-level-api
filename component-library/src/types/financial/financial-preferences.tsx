import { FinancialPreferences } from 'src/data-contracts/user-service/data-contracts';

export class FinancialPreferencesClass implements FinancialPreferences {
  currencyPreference?: string;
  financialYearStart?: string;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  taxCode?: string;
  /** @format double */
  taxPercentage?: number;

  constructor(data: Partial<FinancialPreferences>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): FinancialPreferences {
    // Placeholder implementation for generating a random FinancialPreferences
    // You will need to create an actual instance with random data here
    return new FinancialPreferencesClass({
      currencyPreference: 'USD',
      financialYearStart: '2020-01-01',
      id: '1234567890',
      taxCode: '12345',
      taxPercentage: 0.5,
    });
  }
}
