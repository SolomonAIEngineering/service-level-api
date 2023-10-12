import { StripeSubscriptionStatus } from 'src/data-contracts/financial-service/data-contracts';
import { StripeSubscription as StripeSubscription } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Represents a subscription managed through the Stripe payment platform.
 */
declare class StripeSubscriptionClass implements StripeSubscription {
    /**
     * The unique identifier for the subscription.
     * @type {string}
     */
    id: string;
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
    constructor(data?: Partial<StripeSubscription>);
}
export { StripeSubscriptionClass };
