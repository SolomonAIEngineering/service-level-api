/**
 * Represents the monthly total quantity of a security by user.
 *
 * @remarks
 * This class provides insights into the total quantity of a particular security held by a user for a specific month. It aids in tracking investments and holdings in different securities.
 *
 * @example Constructing a `MonthlyTotalQuantityBySecurityAndUser` instance:
 *
 * ```ts
 * const securityData = {
 *   month: 7,
 *   securityId: "XYZ123",
 *   totalQuantity: 100,
 *   userId: 12345,
 * };
 *
 * const userSecurity = new MonthlyTotalQuantityBySecurityAndUser(securityData);
 * ```
 *
 * @property month - The month for which the total quantity is reported.
 * @property securityId - The unique identifier for the security.
 * @property totalQuantity - The total quantity of the security held by the user for the month.
 * @property userId - The user ID associated with this record.
 */
class MonthlyTotalQuantityBySecurityAndUser {
  month: number;
  securityId: string;
  totalQuantity: number;
  userId: number;

  /**
   * Constructs a new MonthlyTotalQuantityBySecurityAndUser instance.
   *
   * @param data - Initialization data for the monthly total quantity by security and user.
   */
  constructor(data: Partial<MonthlyTotalQuantityBySecurityAndUser> = {}) {
    this.month = data.month ?? 0;
    this.securityId = data.securityId || '';
    this.totalQuantity = data.totalQuantity ?? 0;
    this.userId = data.userId ?? 0;
  }
}

export { MonthlyTotalQuantityBySecurityAndUser };
