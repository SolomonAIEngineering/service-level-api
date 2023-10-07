import {
  getRandomNumber,
  getRandomString,
  getRandomBalance,
} from 'src/lib-utils/utils';

import {
  InvesmentHolding,
  InvestmentAccount as InvestmentAccount,
  InvestmentSecurity,
} from 'src/data-contracts/financial-service/data-contracts';
import { InvesmentHoldingClass } from './investment-holding';
import { InvestmentSecurityClass } from './investment-security';

/*
 * InvestmentAccount represents the InvestmentAccount entity.
 *
 * @export
 * @class InvestmentAccount
 * @implements {IInvestmentAccount}
 * */
export class InvestmentAccountClass implements InvestmentAccount {
  /** id */
  id = '0';
  /** the user id to which this bank account is tied to */
  userId = '0';
  /** the account name */
  name = '';
  /** the bank account number */
  number = '';
  /** the bank account type */
  type = '';
  /** the bank account balance */
  balance = 0;
  currentFunds = 0;
  balanceLimit = '0';
  /** plaid account id mapped to this bank account */
  plaidAccountId = '';
  /** accoint subtype */
  subtype = '';
  /** invesment holding is the set of securities this account witholds */
  holdings: InvesmentHolding[] = [];
  /** the set of securities this account witholds */
  securities: InvestmentSecurity[] = [];

  constructor(data: Partial<InvestmentAccount>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): InvestmentAccount {
    return new InvestmentAccountClass({
      id: getRandomNumber(1, 100).toString(),
      userId: getRandomNumber(1, 100).toString(),
      name: getRandomString(10),
      number: getRandomString(10),
      type: getRandomString(10),
      balance: getRandomBalance(),
      currentFunds: getRandomBalance(),
      balanceLimit: getRandomBalance().toString(),
      plaidAccountId: getRandomString(10),
      subtype: getRandomString(10),
      holdings: Array.from({ length: 20 }, () =>
        InvesmentHoldingClass.randomInstance(),
      ),
      securities: Array.from({ length: 20 }, () =>
        InvestmentSecurityClass.randomInstance(),
      ),
    });
  }
}
