import { ErrorMetadata } from './error-metadata';
/**
 * Represents an error response from the backend or service.
 */
declare class BackendError {
    /**
     * Contains an array of error metadata detailing the specifics of the error(s).
     */
    response: {
        errors: ErrorMetadata[];
    };
    /**
     * Creates a new instance of BackendError.
     *
     * @param data - A partial structure representing BackendError. Used for initialization.
     */
    constructor(data?: Partial<BackendError>);
}
export { BackendError };
