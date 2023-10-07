import { getRandomNumber, getRandomString } from 'src/lib-utils/utils';
import { AprClass } from './apr';
import {
  Apr,
  CreditAccount as CreditAccount,
} from 'src/data-contracts/financial-service/data-contracts';

/*
 * CreditAccount represents the CreditAccount entity.
 *
 * @export
 * @class CreditAccount
 * @implements {ICreditAccount}
 * */
export class CreditAccountClass implements CreditAccount {
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
  /** current funds on the account */
  currentFunds = 0;
  /** balance limit */
  balanceLimit = '0';
  /** plaid account id mapped to this bank account */
  plaidAccountId = '';
  /** accoint subtype */
  subtype = '';
  /** wether the account is overdue */
  isOverdue = false;
  /** the last payment amount */
  lastPaymentAmount = 0;
  /** the last payment date */
  lastPaymentDate = '';
  /** the last statement issue date */
  lastStatementIssueDate = '';
  /** the minimum amount due date */
  minimumAmountDueDate = 0;
  /** the next payment date */
  nextPaymentDate = '';
  /** the aprs */
  aprs: Apr[] = [];
  /** the last statement balance */
  lastStatementBalance = 0;
  /** the minimum payment amount */
  minimumPaymentAmount = 0;
  /** the next payment due date */
  nextPaymentDueDate = '';

  constructor(data: Partial<CreditAccount>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): CreditAccount {
    return new CreditAccountClass({
      userId: getRandomNumber(1, 10000).toString(),
      name: `Account ${getRandomString(5)}`,
      number: `xxxx-xxxx-xxxx-${getRandomString(4)}`, // A sample account number format
      type: 'Credit Card',
      balance: getRandomNumber(1000, 10000),
      currentFunds: getRandomNumber(500, 5000),
      balanceLimit: getRandomNumber(0, 1000).toString(),
      plaidAccountId: getRandomString(10),
      subtype: `Subtype ${getRandomString(3)}`,
      isOverdue: Math.random() < 0.5,
      lastPaymentAmount: getRandomNumber(0, 1000),
      lastPaymentDate: getRandomString(10),
      lastStatementIssueDate: getRandomString(10),
      minimumAmountDueDate: getRandomNumber(0, 1000),
      nextPaymentDate: getRandomString(10),
      aprs: Array.from({ length: getRandomNumber(0, 5) }, () =>
        AprClass.randomInstance(),
      ),
      lastStatementBalance: getRandomNumber(0, 1000),
      minimumPaymentAmount: getRandomNumber(0, 1000),
      nextPaymentDueDate: getRandomString(10),
    });
  }
}
