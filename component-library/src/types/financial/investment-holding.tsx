import {
  getRandomBalance,
  getRandomNumber,
  getRandomString,
} from 'src/lib-utils/utils';

export interface IInvesmentHolding {
  /** id */
  id: number;
  /** The name of the investment holding */
  name: string;
  /** plaid account id */
  plaidAccountId: string;
  costBasis: number;
  institutionPrice: number;
  institutionPriceAsOf: string;
  institutionPriceDatetime: string;
  institutionValue: number;
  isoCurrencyCode: string;
  quantity: number;
  securityId: string;
  unofficialCurrencyCode: string;
}

/*
 * InvesmentHolding represents the InvesmentHolding entity.
 *
 * @export
 * @class InvesmentHolding
 * @implements {IInvesmentHolding}
 * */
export class InvesmentHolding implements IInvesmentHolding {
  /** id */
  id = 0;
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
    return new InvesmentHolding({
      id: getRandomNumber(1, 100),
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
