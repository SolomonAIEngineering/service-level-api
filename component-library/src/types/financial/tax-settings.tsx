import { TaxSettings } from 'src/data-contracts/user-service/data-contracts';

/**
 * Represents a tax setting, including an ID, tax code, and tax percentage.
 * @implements {TaxSettings}
 * @class {TaxSettingsClass}
 * @param {Partial<TaxSettings>} data
 * @property {string} id
 * @property {string} taxCode
 * @property {number} taxPercentage
 * @method {randomInstance} {TaxSettings}
 * @returns {TaxSettingsClass}
 */
export class TaxSettingsClass implements TaxSettings {
  id?: string;
  taxCode?: string;
  taxPercentage?: number;

  constructor(data: Partial<TaxSettings>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): TaxSettings {
    // Placeholder implementation for generating a random TaxSettings
    // You will need to create an actual instance with random data here
    return new TaxSettingsClass({
      id: '1234567890',
      taxCode: 'taxName',
      taxPercentage: 0.1,
    });
  }
}
