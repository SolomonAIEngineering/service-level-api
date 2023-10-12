import { BackendError } from './backend-error';
/**
 * Represents an error message that might include HTTP-specific details.
 */
declare class ErrorMessage {
    /**
     * Contains the backend error details.
     */
    http_body: BackendError;
    /**
     * Represents the HTTP status code associated with this error.
     */
    http_status_code: number;
    /**
     * Creates a new instance of ErrorMessage.
     *
     * @param data - A partial structure representing ErrorMessage. Used for initialization.
     */
    constructor(data?: Partial<ErrorMessage>);
}
export { ErrorMessage };
