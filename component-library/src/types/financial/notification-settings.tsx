import {
  NotificationSettings,
  NotificationType,
} from 'src/data-contracts/user-service/data-contracts';

export class NotificationSettingsClass implements NotificationSettings {
  /** True if user wants to be alerted for anomalies */
  alerts?: boolean;
  /**
   * address id
   * @format uint64
   */
  id?: string;
  /**
   * - TYPE_EMAIL: email based notification
   *  - TYPE_SMS: sms based notification
   *  - TYPE_IN_APP: app based notification
   */
  notificationType?: NotificationType;

  constructor(data: Partial<NotificationSettings>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): NotificationSettings {
    // Placeholder implementation for generating a random NotificationSettings
    // You will need to create an actual instance with random data here
    return new NotificationSettingsClass({
      alerts: true,
      id: '1234567890',
      notificationType: 'NOTIFICATION_TYPE_EMAIL',
    });
  }
}
