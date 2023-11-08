import {
  DashboardWidget,
  RiskTolerance,
  Theme,
  UserSettings,
} from 'src/data-contracts/user-service/data-contracts';

export class UserSettingsClass implements UserSettings {
  /** Display and interaction preferences. */
  appTheme?: Theme;
  /** Dashboard customization, e.g., specific widgets or reports. */
  dashboardWidgets?: Array<DashboardWidget>;
  /** Preferred date-time format. */
  datetimeFormat?: string;
  /** Currency preference. */
  defaultCurrency?: string;
  /** Notification preferences. */
  emailNotifications?: boolean;
  /** Option to share transaction history with friends/family. */
  enableGoalJournal?: boolean;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  /** Investment preferences. */
  investmentRiskTolerance?: RiskTolerance;
  /** Language preference. */
  preferredLanguage?: string;
  /**
   * Privacy settings.
   *
   * Whether the user's profile is public.
   */
  publicProfile?: boolean;
  pushNotifications?: boolean;
  smsNotifications?: boolean;
  /** Two-factor authentication status. */
  twoFactorAuthenticationEnabled?: boolean;

  constructor(data: Partial<UserSettings>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): UserSettings {
    // Placeholder implementation for generating a random UserSettings
    // You will need to create an actual instance with random data here
    return new UserSettingsClass({
      appTheme: 'THEME_LIGHT',
      dashboardWidgets: [
        'DASHBOARD_WIDGET_INVESTMENT_SUMMARY',
        'DASHBOARD_WIDGET_MONTHLY_SPENDING_REPORT',
      ],
      datetimeFormat: '2020-01-01',
      defaultCurrency: 'USD',
      emailNotifications: true,
      enableGoalJournal: true,
      id: '1234567890',
      investmentRiskTolerance: 'RISK_TOLERANCE_HIGH',
      preferredLanguage: 'en',
      publicProfile: true,
      pushNotifications: true,
      smsNotifications: true,
      twoFactorAuthenticationEnabled: true,
    });
  }
}
