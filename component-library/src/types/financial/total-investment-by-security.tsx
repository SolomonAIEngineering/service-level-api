import { TotalInvestmentBySecurity as TotalInvestmentBySecurity } from 'src/data-contracts/financial-service/data-contracts';

/**
 * Represents the total investment in a particular security.
 *
 * @remarks
 * This class encapsulates details about the total investment made by a user in a specific security.
 * It provides a structured way to track and manage the investment amounts across different securities
 * for portfolio management, financial reporting, and analysis purposes.
 *
 * @example Constructing a `TotalInvestmentBySecurity` instance:
 *
 * ```ts
 * // Example data
 * const investmentData = {
 *   securityId: 'AAPL123',
 *   totalInvestment: 5000,
 *   userId: 456
 * };
 *
 * const investment = new TotalInvestmentBySecurity(investmentData);
 * ```
 *
 * @property securityId - The unique identifier of the security (e.g., stock ticker, bond ID).
 * @property totalInvestment - The total monetary amount invested in the security.
 * @property userId - The identifier of the user who made the investment.
 */
export class TotalInvestmentBySecurityClass
  implements TotalInvestmentBySecurity
{
  public securityId: string = '';
  public totalInvestment: number = 0;
  public userId: string = '';

  /**
   * Creates an instance of TotalInvestmentBySecurity.
   *
   * @param data - Object containing properties for TotalInvestmentBySecurity.
   */
  constructor(data: Partial<TotalInvestmentBySecurityClass>) {
    if (data)
      Object.assign(this, {
        ...data,
      });
  }
}
