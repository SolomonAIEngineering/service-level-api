/**
 * Represents an Annual Percentage Rate (APR) information.
 */
export interface IApr {
  /**
   * The unique identifier for the APR.
   */
  id: number;

  /**
   * The percentage value of the APR.
   */
  percentage: number;

  /**
   * The type or category of the APR.
   */
  type: string;

  /**
   * The balance subject to the APR.
   */
  balanceSubjectToApr: number;

  /**
   * The amount of interest charged based on the APR.
   */
  interestChargeAmount: number;
}

/*
 * This class represents the Apr entity.
 *
 * @export
 * @class Apr
 * @implements {IApr}
 * */
export class Apr implements IApr {
  id = 0;
  percentage = 0;
  type = '';
  balanceSubjectToApr = 0;
  interestChargeAmount = 0;

  constructor(data: Partial<Apr>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): Apr {
    return new Apr({
      id: Math.floor(Math.random() * 100),
      percentage: Math.floor(Math.random() * 100),
      type: 'random type',
      balanceSubjectToApr: Math.floor(Math.random() * 100),
      interestChargeAmount: Math.floor(Math.random() * 100),
    });
  }
}
