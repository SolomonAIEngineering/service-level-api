import { MortgageAccount as MortgageAccount } from 'src/data-contracts/financial-service/data-contracts';

/*
 * MortgageAccount represents the MortgageAccount entity.
 *
 * @export
 * @class MortgageAccount
 * @implements {IMortgageAccount}
 * */
export class MortgageAccountClass implements MortgageAccount {
  id = '0';
  plaidAccountId = '';
  accountNumber = '';
  currentLateFee = 0;
  escrowBalance = 0;
  hasPmi = false;
  hasPrepaymentPenalty = false;
  lastPaymentAmount = 0;
  lastPaymentDate = '';
  loanTerm = '';
  loanTypeDescription = '';
  maturityDate = '';
  nextMonthlyPayment = 0;
  nextPaymentDueDate = '';
  originalPrincipalBalance = 0;
  originalPropertyValue = 0;
  outstandingPrincipalBalance = 0;
  paymentAmount = 0;
  paymentDate = '';
  originationDate = '';
  originationPrincipalAmount = 0;
  pastDueAmount = 0;
  ytdInterestPaid = 0;
  ytdPrincipalPaid = 0;
  propertyAddressCity = '';
  propertyAddressState = '';
  propertyAddressStreet = '';
  propertyAddressPostalCode = '';
  propertyRegion = '';
  propertyCountry = '';
  interestRatePercentage = 0;
  interestRateType = '';

  constructor(data: Partial<MortgageAccount>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
