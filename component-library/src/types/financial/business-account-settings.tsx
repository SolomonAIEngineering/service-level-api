import {
  AccountInformation,
  AIPoweredInsights,
  BusinessAccountSettings,
  FinancialPreferences,
  IntegrationSettings,
  NotificationSettings,
} from 'src/data-contracts/user-service/data-contracts';
import { AccountInformationClass } from './account-information';
import { FinancialPreferencesClass } from './financial-preferences';
import { IntegrationSettingsClass } from './integration-settings';
import { NotificationSettingsClass } from './notification-settings';
import { AIPoweredInsightsClass } from './ai-powered-insights';

export class BusinessAccountSettingsClass implements BusinessAccountSettings {
  accountInformation?: AccountInformation;
  aiPoweredInsights?: AIPoweredInsights;
  financialPreferences?: FinancialPreferences;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  integrationSettings?: IntegrationSettings;
  notificationSettings?: NotificationSettings;

  constructor(data: Partial<BusinessAccountSettings>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): BusinessAccountSettings {
    // Placeholder implementation for generating a random BusinessAccountSettings
    // You will need to create an actual instance with random data here
    return new BusinessAccountSettingsClass({
      accountInformation: AccountInformationClass.randomInstance(),
      aiPoweredInsights: AIPoweredInsightsClass.randomInstance(),
      financialPreferences: FinancialPreferencesClass.randomInstance(),
      id: '1234567890',
      integrationSettings: IntegrationSettingsClass.randomInstance(),
      notificationSettings: NotificationSettingsClass.randomInstance(),
    });
  }
}
