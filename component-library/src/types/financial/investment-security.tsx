import { InvestmentSecurity as InvestmentSecurity } from 'src/data-contracts/financial-service/data-contracts';

/*
 * InvestmentSecurity represents the InvestmentSecurity entity.
 *
 * @export
 * @class InvestmentSecurity
 * @implements {IInvestmentSecurity}
 * */
export class InvestmentSecurityClass implements InvestmentSecurity {
  /** id */
  id = '0';
  closePrice = 0;
  closePriceAsOf = '';
  cusip = '';
  institutionId = '';
  institutionSecurityId = '';
  isCashEquivalent = false;
  isin = '';
  isoCurrencyCode = '';
  name = '';
  proxySecurityId = '';
  securityId = '';
  sedol = '';
  tickerSymbol = '';
  type = '';
  unofficialCurrencyCode = '';
  updateDatetime = '';

  constructor(data: Partial<InvestmentSecurity>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): InvestmentSecurity {
    return new InvestmentSecurityClass({
      id: Math.floor(Math.random() * 1000).toString(),
      closePrice: +(Math.random() * 1000).toFixed(2),
      closePriceAsOf: new Date().toISOString(),
      cusip: Math.random().toString(36).substring(2),
      institutionId: Math.random().toString(36).substring(2),
      institutionSecurityId: Math.random().toString(36).substring(2),
      isCashEquivalent: Math.random() < 0.5,
      isin: Math.random().toString(36).substring(2),
      isoCurrencyCode: ['USD', 'EUR', 'GBP'][Math.floor(Math.random() * 3)],
      name: 'Security ' + Math.random().toString(36).substring(2),
      proxySecurityId: Math.random().toString(36).substring(2),
      securityId: Math.random().toString(36).substring(2),
      sedol: Math.random().toString(36).substring(2),
      tickerSymbol: Math.random().toString(36).substring(2).toUpperCase(),
      type: ['Stock', 'Bond', 'Mutual Fund'][Math.floor(Math.random() * 3)],
      unofficialCurrencyCode: Math.random().toString(36).substring(2),
      updateDatetime: new Date().toISOString(),
    });
  }
}
