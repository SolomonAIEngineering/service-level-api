import { Token as Token } from 'src/data-contracts/financial-service/data-contracts';

/**
 * Token object holding an access token used to make API requests related to a specific Item.
 */
class TokenClass implements Token {
  /**
   * The unique identifier for the token.
   * @type {string}
   */
  id: string;

  /**
   * The ID of the item the token is tied to.
   * @type {string}
   */
  itemId: string;

  /**
   * The key ID associated with the token.
   * @type {string}
   */
  keyId: string;

  /**
   * The access token.
   * @type {string}
   */
  accessToken: string;

  /**
   * The version of the token.
   * @type {string}
   */
  version: string;

  /**
   * Constructs a new Token object.
   * @constructor
   * @param {Partial<Token>} data - Optional data for initializing the token.
   */
  constructor(data: Partial<TokenClass> = {}) {
    /**
     * The unique identifier for the token.
     * @type {number}
     */
    this.id = data.id ?? '0';

    /**
     * The ID of the item the token is tied to.
     * @type {string}
     */
    this.itemId = data.itemId ?? '';

    /**
     * The key ID associated with the token.
     * @type {string}
     */
    this.keyId = data.keyId ?? '';

    /**
     * The access token.
     * @type {string}
     */
    this.accessToken = data.accessToken ?? '';

    /**
     * The version of the token.
     * @type {string}
     */
    this.version = data.version ?? '';
  }
}

/**
 * Export the Token class.
 */
export { TokenClass };
