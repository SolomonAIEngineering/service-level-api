import { BackendError } from './backend-error';

/**
 * Represents an error message that might include HTTP-specific details.
 */
class ErrorMessage {
  /**
   * Contains the backend error details.
   */
  http_body: BackendError = new BackendError();

  /**
   * Represents the HTTP status code associated with this error.
   */
  http_status_code = 0;

  /**
   * Creates a new instance of ErrorMessage.
   *
   * @param data - A partial structure representing ErrorMessage. Used for initialization.
   */
  constructor(data?: Partial<ErrorMessage>) {
    if (data) {
      Object.assign(this, {
        ...data,
        http_body: new BackendError(data?.http_body),
        http_status_code: data?.http_status_code,
      });
    }
  }
}

export { ErrorMessage };
