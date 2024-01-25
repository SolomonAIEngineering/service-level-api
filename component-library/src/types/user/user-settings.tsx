import {
  Settings,
  ApplicationTheme,
  DigitalWorkerSettings,
  FinancialPreferences,
  LikedDashboardPanels,
  NotificationSettings,
  RiskToleranceSettings,
} from 'src/data-contracts/user-service/data-contracts';

export class UserSettingsClass implements Settings {
  /** Display and interaction preferences. */
  appTheme?: ApplicationTheme;
  /** Settings specific to the user's digital worker. */
  digitalWorkerSettings?: DigitalWorkerSettings;
  financialPreferences?: FinancialPreferences;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  /** Dashboard customization, e.g., specific widgets or reports. */
  likedDashboardPanels?: Array<LikedDashboardPanels>;
  /** Notification preferences. */
  notificationSettings?: NotificationSettings;
  /** Language preference. */
  preferredLanguage?: string;
  /** Risk tolerance settings defined for user settings. */
  riskTolerance?: RiskToleranceSettings;
  constructor(data: Partial<Settings>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): Settings {
    // Placeholder implementation for generating a random UserSettings
    // You will need to create an actual instance with random data here
    return new UserSettingsClass({
      likedDashboardPanels: [
        'LIKED_DASHBOARD_PANELS_TRANSACTIONS_OVERVIEW',
        'LIKED_DASHBOARD_PANELS_CREDIT_SCORE_MONITOR',
      ],
      id: '1234567890',
      riskTolerance: 'RISK_TOLERANCE_SETTINGS_LOW',
      preferredLanguage: 'en',
      appTheme: 'APPLICATION_THEME_LIGHT',
    });
  }
}
