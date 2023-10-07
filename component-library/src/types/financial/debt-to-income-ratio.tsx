import { DebtToIncomeRatio as DebtToIncomeRatio } from 'src/data-contracts/financial-service/data-contracts';

/**
 * Represents the debt to income ratio of a user.
 *
 * @remarks
 * This class provides a snapshot of a user's financial health by comparing their total debt to their total income for a specific month.
 * A lower ratio indicates that a user has a good balance between debt and income, whereas a higher ratio can signal potential financial distress.
 *
 * @example Constructing a `DebtToIncomeRatio` instance
 *
 * ```ts
 * const data = {
 *   month: 6,
 *   ratio: 0.5,
 *   userId: 123
 * };
 *
 * const dtiRatio = new DebtToIncomeRatio(data);
 * ```
 *
 * @property month - The month for which the debt to income ratio is recorded.
 * @property ratio - Represents the proportion of debt to income for the user. It's typically a value between 0 and 1, with higher values indicating more debt relative to income.
 * @property userId - The user ID for whom the ratio is calculated.
 */
class DebtToIncomeRatioClass implements DebtToIncomeRatio {
  month: number;
  ratio: number;
  userId: string;

  /**
   * Constructs a new DebtToIncomeRatio instance.
   *
   * @param data - Initialization data for the debt to income ratio.
   */
  constructor(data: Partial<DebtToIncomeRatio> = {}) {
    this.month = data.month ?? 0;
    this.ratio = data.ratio ?? 0;
    this.userId = data.userId ?? '0';
  }
}

export { DebtToIncomeRatioClass };
