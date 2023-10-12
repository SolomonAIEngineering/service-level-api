import { Token as Token } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Token object holding an access token used to make API requests related to a specific Item.
 */
declare class TokenClass implements Token {
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
    constructor(data?: Partial<TokenClass>);
}
/**
 * Export the Token class.
 */
export { TokenClass };
