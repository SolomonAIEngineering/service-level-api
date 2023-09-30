/**
 * Enum representing the status of a Stripe subscription.
 * @enum {number}
 */
enum StripeSubscriptionStatus {
  /**
   * The subscription status is unspecified or unknown.
   */
  STRIPE_SUBSCRIPTION_STATUS_UNSPECIFIED = 0,

  /**
   * The subscription is currently in a trialing period.
   */
  STRIPE_SUBSCRIPTION_STATUS_TRIALING = 1,

  /**
   * The subscription is currently active.
   */
  STRIPE_SUBSCRIPTION_STATUS_ACTIVE = 2,

  /**
   * The subscription is past due and requires payment.
   */
  STRIPE_SUBSCRIPTION_STATUS_PAST_DUE = 3,

  /**
   * The subscription has been canceled by the customer.
   */
  STRIPE_SUBSCRIPTION_STATUS_CANCELED = 4,

  /**
   * The subscription is unpaid, and payment is required.
   */
  STRIPE_SUBSCRIPTION_STATUS_UNPAID = 5,

  /**
   * The subscription is complete, indicating a successful subscription cycle.
   */
  STRIPE_SUBSCRIPTION_STATUS_COMPLETE = 6,

  /**
   * The subscription is incomplete and requires additional actions.
   */
  STRIPE_SUBSCRIPTION_STATUS_INCOMPLETE = 7,

  /**
   * The subscription is incomplete and has expired.
   */
  STRIPE_SUBSCRIPTION_STATUS_INCOMPLETE_EXPIRED = 8,

  /**
   * The subscription has been created but is not yet active.
   */
  STRIPE_SUBSCRIPTION_STATUS_CREATED = 9,

  /**
   * The subscription is paused and not billing the customer.
   */
  STRIPE_SUBSCRIPTION_STATUS_PAUSED = 10,

  /**
   * The status value is unrecognized or invalid.
   */
  UNRECOGNIZED = -1,
}

/**
 * Export the StripeSubscriptionStatus enum.
 */
export { StripeSubscriptionStatus };
