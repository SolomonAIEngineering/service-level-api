/*
 * BankAccountType - BankAccountType type
 * Represents the type of a bank account.
 * @enum {number}
 * */
enum BankAccountType {
  /**
   * The bank account type is unspecified.
   */
  BANK_ACCOUNT_TYPE_UNSPECIFIED = 0,

  /**
   * The bank account type is identified through the Plaid service.
   */
  BANK_ACCOUNT_TYPE_PLAID = 1,

  /**
   * The bank account type is manually specified.
   */
  BANK_ACCOUNT_TYPE_MANUAL = 2,

  /**
   * An unrecognized or unknown bank account type.
   */
  UNRECOGNIZED = -1,
}

export { BankAccountType };
