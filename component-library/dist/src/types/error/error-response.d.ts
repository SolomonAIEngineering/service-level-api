import { ErrorMessage } from './error-message';
/**
 * Represents a full error response, which may be returned to a client or user.
 */
declare class ErrorResponse {
    /**
     * Contains the error message details including HTTP specifics.
     */
    error_message: ErrorMessage;
    /**
     * Creates a new instance of ErrorResponse.
     *
     * @param data - A partial structure representing ErrorResponse. Used for initialization.
     */
    constructor(data?: Partial<ErrorResponse>);
}
export { ErrorResponse };
