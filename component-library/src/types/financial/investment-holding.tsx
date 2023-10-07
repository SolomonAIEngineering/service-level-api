import {
  getRandomBalance,
  getRandomNumber,
  getRandomString,
} from 'src/lib-utils/utils';

import { InvesmentHolding as InvesmentHolding } from 'src/data-contracts/financial-service/data-contracts';

/*
 * InvesmentHolding represents the InvesmentHolding entity.
 *
 * @export
 * @class InvesmentHolding
 * @implements {IInvesmentHolding}
 * */
export class InvesmentHoldingClass implements InvesmentHolding {
  /** id */
  id = '0';
  /** The name of the investment holding */
  name = '';
  /** plaid account id */
  plaidAccountId = '';
  costBasis = 0;
  institutionPrice = 0;
  institutionPriceAsOf = '';
  institutionPriceDatetime = '';
  institutionValue = 0;
  isoCurrencyCode = '';
  quantity = 0;
  securityId = '';
  unofficialCurrencyCode = '';

  constructor(data: Partial<InvesmentHolding>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): InvesmentHolding {
    return new InvesmentHoldingClass({
      id: getRandomNumber(1, 100).toString(),
      name: getRandomString(10),
      plaidAccountId: getRandomString(10),
      costBasis: getRandomBalance(),
      institutionPrice: getRandomBalance(),
      institutionPriceAsOf: getRandomString(10),
      institutionPriceDatetime: getRandomString(10),
      institutionValue: getRandomBalance(),
      isoCurrencyCode: getRandomString(10),
      quantity: getRandomNumber(1, 100),
      securityId: getRandomString(10),
      unofficialCurrencyCode: getRandomString(10),
    });
  }
}
