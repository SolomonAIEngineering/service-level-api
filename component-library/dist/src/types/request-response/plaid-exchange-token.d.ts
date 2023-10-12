import { ErrorResponse } from '../error';
export declare class PlaidExchangeTokenRequest {
    /**
     * The user id
     * Validations:
     * - user_id must be greater than 0
     */
    userId: number;
    /**
     * The public token
     * Validations:
     * - cannot be nil hence required
     */
    publicToken: string;
    /** The institution id */
    institutionId: string;
    /** The institution name */
    institutionName: string;
    constructor(data?: Partial<PlaidExchangeTokenRequest>);
}
export declare class PlaidExchangeTokenResponse extends ErrorResponse {
    /** wether the operation was successful */
    success: boolean;
    constructor(data?: Partial<PlaidExchangeTokenResponse>);
}
