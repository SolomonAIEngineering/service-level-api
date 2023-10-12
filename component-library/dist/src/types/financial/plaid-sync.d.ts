import { PlaidSync as PlaidSync } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Represents synchronization information related to Plaid.
 */
declare class PlaidSyncClass implements PlaidSync {
    /**
     * The unique identifier for the Plaid synchronization.
     * @type {number}
     */
    id: string;
    /**
     * The timestamp of the synchronization.
     * @type {string}
     */
    timeStamp: string;
    /**
     * The trigger that initiated the synchronization.
     * @type {string}
     */
    trigger: string;
    /**
     * The cursor for the next synchronization.
     * @type {string}
     */
    nextCursor: string;
    /**
     * The number of added items in the synchronization.
     * @type {number}
     */
    added: string;
    /**
     * The string of removed items in the synchronization.
     * @type {string}
     */
    removed: string;
    /**
     * The string of modified items in the synchronization.
     * @type {string}
     */
    modified: string;
    /**
     * Constructs a new PlaidSync object.
     * @constructor
     * @param {Partial<PlaidSync>} data - Optional data for initializing the PlaidSync.
     */
    constructor(data?: Partial<PlaidSync>);
}
/**
 * Export the PlaidSync class.
 */
export { PlaidSyncClass };
