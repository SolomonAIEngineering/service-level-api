import { getRandomNumber } from 'src/lib-utils/utils';

import { StudentLoanAccount as StudentLoanAccount } from 'src/data-contracts/financial-service/data-contracts';

/*
 * Student Loan Account represents the Student Loan Account entity.
 *
 * @export
 * @class StudentLoanAccount
 * @implements {IStudentLoanAccount}
 * */
export class StudentLoanAccountClass implements StudentLoanAccount {
  /** id */
  id = '0';
  plaidAccountId = '';
  disbursementDates: string[] = [];
  expectedPayoffDate = '';
  guarantor = '';
  interestRatePercentage = 0;
  isOverdue = false;
  lastPaymentAmount = 0;
  lastPaymentDate = '';
  lastStatementIssueDate = '';
  loanName = '';
  loanEndDate = '';
  minimumPaymentAmount = 0;
  nextPaymentDueDate = '';
  originationDate = '';
  originationPrincipalAmount = 0;
  outstandingInterestAmount = 0;
  paymentReferenceNumber = '';
  sequenceNumber = '';
  ytdInterestPaid = 0;
  ytdPrincipalPaid = 0;
  loanType = '';
  pslfStatusEstimatedEligibilityDate = '';
  pslfStatusPaymentsMade = 0;
  pslfStatusPaymentsRemaining = 0;
  repaymentPlanType = '';
  repaymentPlanDescription = '';
  servicerAddressCity = '';
  servicerAddressPostalCode = '';
  servicerAddressState = '';
  servicerAddressStreet = '';
  servicerAddressRegion = '';
  servicerAddressCountry = '';
  /** the user id to which this bank account is tied to */
  userId = '0';
  /** the account name */
  name = '';

  constructor(data: Partial<StudentLoanAccount>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  static randomInstance(): StudentLoanAccount {
    return new StudentLoanAccountClass({
      id: getRandomNumber(1, 10000).toString(),
      plaidAccountId: getRandomNumber(1, 10000).toString(),
      disbursementDates: ['2028-01-01', '2028-02-01'],
      expectedPayoffDate: '2028-01-01',
      guarantor: 'US Department of Education',
      interestRatePercentage:
        (getRandomNumber(0, 1) * 1) / getRandomNumber(1, 100),
      isOverdue: false,
      lastPaymentAmount: getRandomNumber(1, 100),
      lastPaymentDate: '2028-01-01',
      lastStatementIssueDate: '2028-01-01',
      loanName: 'Loan Name',
      loanEndDate: '2028-01-01',
      minimumPaymentAmount: getRandomNumber(1, 100),
      nextPaymentDueDate: '2028-01-01',
      originationDate: '2028-01-01',
      originationPrincipalAmount: 100000,
      outstandingInterestAmount: 100,
      paymentReferenceNumber: '123456789',
      sequenceNumber: '123456789',
      ytdInterestPaid: 5000,
      ytdPrincipalPaid: 50000,
      loanType: 'Loan Type',
      pslfStatusEstimatedEligibilityDate: '2028-01-01',
      pslfStatusPaymentsMade: getRandomNumber(1, 100),
      pslfStatusPaymentsRemaining: getRandomNumber(1, 100),
      repaymentPlanType: 'Repayment Plan Type',
      repaymentPlanDescription: 'Repayment Plan Description',
      servicerAddressCity: 'Servicer Address City',
      servicerAddressPostalCode: 'Servicer Address Postal Code',
      servicerAddressState: 'Servicer Address State',
      servicerAddressStreet: 'Servicer Address Street',
      servicerAddressRegion: 'Servicer Address Region',
      servicerAddressCountry: 'Servicer Address Country',
      userId: getRandomNumber(1, 10000).toString(),
      name: `Account ${getRandomNumber(1, 10000)}`,
    });
  }
}
