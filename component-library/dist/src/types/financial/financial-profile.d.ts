import { ActionableInsight, UserProfile as UserProfile, Link, StripeSubscription } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Represents a user's financial profile.
 *
 * @remarks
 * This class is designed to store and manage the details related to a user's financial standing and interactions.
 * It integrates with services like Stripe and can manage multiple links to different financial institutions.
 *
 * @example Constructing a `FinancialProfile`
 *
 * ```ts
 * // Example data
 * const data = {
 *   userFinancialProfileID: 123,
 *   userId: 456,
 *   stripeCustomerId: 'stripe-customer-1',
 *   stripeSubscriptions: new StripeSubscription({ ...stripeSubscriptionData... }),
 *   link: [new Link({ ...linkData... })],
 *   actionableInsights: [new ActionableInsight({ ...insightData... })],
 * };
 *
 * const financialProfile = new FinancialProfile(data);
 * ```
 *
 * @property userFinancialProfileID - Unique identifier for the financial profile.
 * @property userId - Identifier for the user associated with this profile.
 * @property stripeCustomerId - Identifier for the Stripe customer associated with this user.
 * @property stripeSubscriptions - The Stripe subscriptions that the user profile actively maintains.
 * @property link - Array of linked financial institutions associated with the user's profile.
 * @property actionableInsights - Array of insights derived from the user's financial data.
 */
declare class FinancialProfileClass implements UserProfile {
    /** id */
    userFinancialProfileID: number;
    /** the user id tied to the profile */
    userId: string;
    stripeCustomerId: string;
    /** the stripe subscriptions the user profile actively maintains */
    stripeSubscriptions: StripeSubscription | undefined;
    /** a user profile can have many links (connected institutions) of which finanical accounts are tied to (checking, savings, etc) */
    link: Link[];
    actionableInsights: ActionableInsight[];
    constructor(data?: Partial<UserProfile>);
}
export { FinancialProfileClass };
