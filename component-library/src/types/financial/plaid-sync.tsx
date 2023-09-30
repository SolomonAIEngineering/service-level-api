export interface IPlaidSync {
  /** id */
  id: number;
  timeStamp: string;
  trigger: string;
  nextCursor: string;
  added: number;
  removed: number;
  modified: number;
}

/**
 * Represents synchronization information related to Plaid.
 */
class PlaidSync implements IPlaidSync {
  /**
   * The unique identifier for the Plaid synchronization.
   * @type {number}
   */
  id: number;

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
  added: number;

  /**
   * The number of removed items in the synchronization.
   * @type {number}
   */
  removed: number;

  /**
   * The number of modified items in the synchronization.
   * @type {number}
   */
  modified: number;

  /**
   * Constructs a new PlaidSync object.
   * @constructor
   * @param {Partial<PlaidSync>} data - Optional data for initializing the PlaidSync.
   */
  constructor(data: Partial<PlaidSync> = {}) {
    /**
     * The unique identifier for the Plaid synchronization.
     * @type {number}
     */
    this.id = data.id ?? 0;

    /**
     * The timestamp of the synchronization.
     * @type {string}
     */
    this.timeStamp = data.timeStamp ?? '';

    /**
     * The trigger that initiated the synchronization.
     * @type {string}
     */
    this.trigger = data.trigger ?? '';

    /**
     * The cursor for the next synchronization.
     * @type {string}
     */
    this.nextCursor = data.nextCursor ?? '';

    /**
     * The number of added items in the synchronization.
     * @type {number}
     */
    this.added = data.added ?? 0;

    /**
     * The number of removed items in the synchronization.
     * @type {number}
     */
    this.removed = data.removed ?? 0;

    /**
     * The number of modified items in the synchronization.
     * @type {number}
     */
    this.modified = data.modified ?? 0;
  }
}

/**
 * Export the PlaidSync class.
 */
export { PlaidSync };
