/**
 * Represents the structure of a mortgage account.
 */
export interface IMortgageAccount {
  /** Unique identifier for the mortgage account. */
  id: number;

  /** Associated Plaid account identifier. */
  plaidAccountId: string;

  /** Account number for the mortgage. */
  accountNumber: string;

  /** Current late fee amount. */
  currentLateFee: number;

  /** Current escrow balance. */
  escrowBalance: number;

  /** Indicates if the mortgage has PMI (Private Mortgage Insurance). */
  hasPmi: boolean;

  /** Indicates if the mortgage has a prepayment penalty. */
  hasPrepaymentPenalty: boolean;

  /** Amount of the last payment made. */
  lastPaymentAmount: number;

  /** Date of the last payment made. */
  lastPaymentDate: string;

  /** Duration or term of the loan (e.g., "30 years"). */
  loanTerm: string;

  /** Description of the loan type (e.g., "Fixed", "ARM"). */
  loanTypeDescription: string;

  /** Date when the loan is expected to be fully paid off. */
  maturityDate: string;

  /** Amount due for the next monthly payment. */
  nextMonthlyPayment: number;

  /** Due date for the next payment. */
  nextPaymentDueDate: string;

  /** The original principal amount of the mortgage. */
  originalPrincipalBalance: number;

  /** Original property value when the mortgage was originated. */
  originalPropertyValue: number;

  /** Current outstanding principal balance. */
  outstandingPrincipalBalance: number;

  /** Regular payment amount for the mortgage. */
  paymentAmount: number;

  /** Date when the regular payment is made. */
  paymentDate: string;

  /** Date when the mortgage was originated. */
  originationDate: string;

  /** Principal amount when the mortgage was originated. */
  originationPrincipalAmount: number;

  /** Total amount past due on the mortgage. */
  pastDueAmount: number;

  /** Year-to-date interest paid on the mortgage. */
  ytdInterestPaid: number;

  /** Year-to-date principal paid on the mortgage. */
  ytdPrincipalPaid: number;

  /** City of the mortgaged property's address. */
  propertyAddressCity: string;

  /** State or province of the mortgaged property's address. */
  propertyAddressState: string;

  /** Street of the mortgaged property's address. */
  propertyAddressStreet: string;

  /** Postal code of the mortgaged property's address. */
  propertyAddressPostalCode: string;

  /** Region where the mortgaged property is located. */
  propertyRegion: string;

  /** Country where the mortgaged property is located. */
  propertyCountry: string;

  /** The interest rate as a percentage. */
  interestRatePercentage: number;

  /** Type of interest rate (e.g., "Fixed", "Variable"). */
  interestRateType: string;
}

/*
 * MortgageAccount represents the MortgageAccount entity.
 *
 * @export
 * @class MortgageAccount
 * @implements {IMortgageAccount}
 * */
export class MortgageAccount implements IMortgageAccount {
  id = 0;
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
