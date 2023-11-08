import { IntegrationSettings } from 'src/data-contracts/user-service/data-contracts';

export class IntegrationSettingsClass implements IntegrationSettings {
  /** wether to enable linking bank account for account */
  bankAccountLinking?: boolean;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  /**
   * list of supported third party apps of interest
   * List of connected third-party apps
   */
  thirdPartyApps?: Array<string>;

  constructor(data: Partial<IntegrationSettings>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): IntegrationSettings {
    // Placeholder implementation for generating a random IntegrationSettings
    // You will need to create an actual instance with random data here
    return new IntegrationSettingsClass({
      bankAccountLinking: true,
      id: '1234567890',
      thirdPartyApps: ['app1', 'app2'],
    });
  }
}
