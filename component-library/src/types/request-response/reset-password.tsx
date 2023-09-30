/**
 * Represents a request to reset a password.
 */
export interface ResetPasswordRequest {
  /**
   * The new password that the user wants to set.
   */
  password: string;

  /**
   * A token that verifies the legitimacy of the reset password request.
   */
  token: string;
}

/**
 * Represents a response containing a token.
 */
export class ResetPasswordResponse {
  /**
   * The token returned by the server, typically used for authentication purposes.
   */
  token: string;

  /**
   * A code indicating the status or result of the operation.
   */
  code: number;

  /**
   * An error message, if any occurred during the operation.
   */
  err: string;

  /**
   * Creates a new instance of `TokenResponse`.
   *
   * @param data - An object containing any subset of the `TokenResponse` properties.
   */
  constructor(data: Partial<ResetPasswordResponse>) {
    this.token = data.token || "";
    this.code = data.code || 0;
    this.err = data.err || "";
  }
}
