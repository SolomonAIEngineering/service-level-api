import { Apr } from 'src/data-contracts/financial-service/data-contracts';

/*
 * This class represents the Apr entity.
 *
 * @export
 * @class Apr
 * @implements {IApr}
 * */
export class AprClass implements Apr {
  id = '0';
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
    return new AprClass({
      id: Math.floor(Math.random() * 100).toString(),
      percentage: Math.floor(Math.random() * 100),
      type: 'random type',
      balanceSubjectToApr: Math.floor(Math.random() * 100),
      interestChargeAmount: Math.floor(Math.random() * 100),
    });
  }
}
