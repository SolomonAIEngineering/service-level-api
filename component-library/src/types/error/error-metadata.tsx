/**
 * Represents metadata associated with an error.
 * This might be directly from a service or part of an error response.
 */
class ErrorMetadata {
  /**
   * An optional numeric code indicating the specific error.
   */
  code?: number;

  /**
   * An optional status string providing more context about the error's nature.
   */
  status?: string;

  /**
   * A more descriptive message explaining the error.
   */
  message?: string;

  /**
   * Detailed breakdown or additional information about the error.
   * This can be useful for debugging or for more granular client-side handling.
   */
  details?: string[];

  /**
   * Creates a new instance of ErrorMetadata.
   *
   * @param data - A partial structure representing ErrorMetadata. Used for initialization.
   */
  constructor(data?: Partial<ErrorMetadata>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

export { ErrorMetadata };
