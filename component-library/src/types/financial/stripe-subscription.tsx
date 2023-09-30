import { StripeSubscriptionStatus } from './stripe-subscription-status';

/**
 * Represents a subscription managed through the Stripe payment platform.
 */
class StripeSubscription {
  /**
   * The unique identifier for the subscription.
   * @type {number}
   */
  id: number;

  /**
   * The ID of the subscription in the Stripe system tied to the customer.
   * @type {string}
   */
  stripeSubscriptionId: string;

  /**
   * The status of the Stripe subscription.
   * @type {StripeSubscriptionStatus}
   */
  stripeSubscriptionStatus: StripeSubscriptionStatus;

  /**
   * The date until which the Stripe subscription is active.
   * @type {string}
   */
  stripeSubscriptionActiveUntil: string;

  /**
   * The latest timestamp from the Stripe webhook related to the subscription.
   * @type {string}
   */
  stripeWebhookLatestTimestamp: string;

  /**
   * Indicates whether the subscription is currently in a trial period.
   * @type {boolean}
   */
  isTrialing: boolean;

  /**
   * Constructs a new StripeSubscription object.
   * @constructor
   * @param {Partial<StripeSubscription>} [data] - Optional data for initializing the subscription.
   */
  constructor(data: Partial<StripeSubscription> = {}) {
    /**
     * The unique identifier for the subscription.
     * @type {number}
     */
    this.id = data.id ?? 0;

    /**
     * The ID of the subscription in the Stripe system tied to the customer.
     * @type {string}
     */
    this.stripeSubscriptionId = data.stripeSubscriptionId ?? '';

    /**
     * The status of the Stripe subscription.
     * @type {StripeSubscriptionStatus}
     */
    this.stripeSubscriptionStatus =
      data.stripeSubscriptionStatus as StripeSubscriptionStatus; // Assumes a default or validation elsewhere.

    /**
     * The date until which the Stripe subscription is active.
     * @type {string}
     */
    this.stripeSubscriptionActiveUntil =
      data.stripeSubscriptionActiveUntil ?? '';

    /**
     * The latest timestamp from the Stripe webhook related to the subscription.
     * @type {string}
     */
    this.stripeWebhookLatestTimestamp = data.stripeWebhookLatestTimestamp ?? '';

    /**
     * Indicates whether the subscription is currently in a trial period.
     * @type {boolean}
     */
    this.isTrialing = data.isTrialing ?? false;
  }
}

export { StripeSubscription };
