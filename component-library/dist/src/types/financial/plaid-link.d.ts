import { PlaidLink as PlaidLink } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Represents linking information related to Plaid.
 */
declare class PlaidLinkClass implements PlaidLink {
    /**
     * The unique identifier for the Plaid link.
     * @type {string}
     */
    id: string;
    /**
     * An array of products associated with the Plaid link.
     * @type {string[]}
     */
    products: string[];
    /**
     * The webhook URL associated with the Plaid link.
     * @type {string}
     */
    webhookUrl: string;
    /**
     * The ID of the institution associated with the Plaid link.
     * @type {string}
     */
    institutionId: string;
    /**
     * The name of the institution associated with the Plaid link.
     * @type {string}
     */
    institutionName: string;
    /**
     * Indicates whether Plaid sync is used with the link.
     * @type {boolean}
     */
    usePlaidSync: boolean;
    /**
     * The ID of the item associated with the Plaid link.
     * @type {string}
     */
    itemId: string;
    /**
     * Constructs a new PlaidLink object.
     * @constructor
     * @param {Partial<PlaidLink>} data - Optional data for initializing the PlaidLink.
     */
    constructor(data?: Partial<PlaidLink>);
}
/**
 * Export the PlaidLink class.
 */
export { PlaidLinkClass };
