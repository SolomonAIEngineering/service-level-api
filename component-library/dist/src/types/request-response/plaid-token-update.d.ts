import { ErrorResponse } from '../error';
export declare class PlaidInitiateTokenUpdateRequest {
    /**
     * The user id
     * Validations:
     * - user_id must be greater than 0
     */
    userId: number;
    /**
     * The link id we want to update for
     * Validations:
     * - cannot be nil hence required
     */
    linkId: number;
    constructor(data?: Partial<PlaidInitiateTokenUpdateRequest>);
}
export declare class PlaidInitiateTokenUpdateResponse extends ErrorResponse {
    linkToken: string;
    expiration: string;
    constructor(data: Partial<PlaidInitiateTokenUpdateResponse>);
}
