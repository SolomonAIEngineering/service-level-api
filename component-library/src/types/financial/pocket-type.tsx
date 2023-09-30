/*
 * Pocket type discloses the type of account pocket tied to a respective bank account
 *
 * @export
 * @enum {number}
 * */
export enum PocketType {
  POCKET_TYPE_UNSPECIFIED = 0,
  POCKET_TYPE_DISCRETIONARY_SPENDING = 1,
  POCKET_TYPE_FUN_MONEY = 2,
  POCKET_TYPE_DEBT_REDUCTION = 3,
  POCKET_TYPE_EMERGENCY_FUND = 4,
  POCKET_TYPE_INVESTMENT = 5,
  POCKET_TYPE_SHORT_TERM_SAVINGS = 6,
  POCKET_TYPE_LONG_TERM_SAVINGS = 7,
  UNRECOGNIZED = -1,
}
