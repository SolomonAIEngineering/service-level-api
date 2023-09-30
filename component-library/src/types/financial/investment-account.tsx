import {
  getRandomNumber,
  getRandomString,
  getRandomBalance,
} from 'src/lib-utils/utils';
import { InvesmentHolding } from './investment-holding';
import { InvestmentSecurity } from './investment-security';

export interface IInvestmentAccount {
  /** id */
  id: number;
  /** the user id to which this bank account is tied to */
  userId: number;
  /** the account name */
  name: string;
  /** the bank account number */
  number: string;
  /** the bank account type */
  type: string;
  /** the bank account balance */
  balance: number;
  currentFunds: number;
  balanceLimit: number;
  /** plaid account id mapped to this bank account */
  plaidAccountId: string;
  /** accoint subtype */
  subtype: string;
  /** invesment holding is the set of securities this account witholds */
  holdings: InvesmentHolding[];
  /** the set of securities this account witholds */
  securities: InvestmentSecurity[];
}

/*
 * InvestmentAccount represents the InvestmentAccount entity.
 *
 * @export
 * @class InvestmentAccount
 * @implements {IInvestmentAccount}
 * */
export class InvestmentAccount implements IInvestmentAccount {
  /** id */
  id = 0;
  /** the user id to which this bank account is tied to */
  userId = 0;
  /** the account name */
  name = '';
  /** the bank account number */
  number = '';
  /** the bank account type */
  type = '';
  /** the bank account balance */
  balance = 0;
  currentFunds = 0;
  balanceLimit = 0;
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
    return new InvestmentAccount({
      id: getRandomNumber(1, 100),
      userId: getRandomNumber(1, 100),
      name: getRandomString(10),
      number: getRandomString(10),
      type: getRandomString(10),
      balance: getRandomBalance(),
      currentFunds: getRandomBalance(),
      balanceLimit: getRandomBalance(),
      plaidAccountId: getRandomString(10),
      subtype: getRandomString(10),
      holdings: Array.from({ length: 20 }, () =>
        InvesmentHolding.randomInstance(),
      ),
      securities: Array.from({ length: 20 }, () =>
        InvestmentSecurity.randomInstance(),
      ),
    });
  }
}
