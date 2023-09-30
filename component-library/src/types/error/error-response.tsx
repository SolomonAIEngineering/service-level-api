import { ErrorMessage } from './error-message';

/**
 * Represents a full error response, which may be returned to a client or user.
 */
class ErrorResponse {
  /**
   * Contains the error message details including HTTP specifics.
   */
  error_message: ErrorMessage = new ErrorMessage();

  /**
   * Creates a new instance of ErrorResponse.
   *
   * @param data - A partial structure representing ErrorResponse. Used for initialization.
   */
  constructor(data?: Partial<ErrorResponse>) {
    if (data) {
      Object.assign(this, {
        ...data,
        error_message: new ErrorMessage(data?.error_message),
      });
    }
  }
}

export { ErrorResponse };
