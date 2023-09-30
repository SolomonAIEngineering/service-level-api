export class PlaidInitiateTokenExchangeRequest {
  /**
   * A unique ID representing the end user. Typically this will be a user ID number from your application.
   * Personally identifiable information, such as an email address or phone number,
   * should not be used in the `client_user_id`. It is currently used as a means of searching logs
   * for the given user in the Plaid Dashboard.
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number = 0;
  /**
   * The user's full legal name. This is an optional field used in
   * the [returning user experience](https://plaid.com/docs/link/returning-user) to associate Items to the user.
   */
  fullName: string = "";
  /**
   * The user's email address. This field is optional, but required to enable the
   * [pre-authenticated returning user flow](https://plaid.com/docs/link/returning-user/#enabling-the-returning-user-experience).
   */
  email: string = "";
  /**
   * The user's phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
   * This field is optional, but required to enable the [returning user experience](https://plaid.com/docs/link/returning-user).
   */
  phoneNumber: string = "";

  constructor(data: Partial<PlaidInitiateTokenExchangeRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

export class PlaidInitiateTokenExchangeResponse {
  linkToken: string = "";
  expiration: string = "";
  plaidRequestId: string = "";

  constructor(data: Partial<PlaidInitiateTokenExchangeRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
