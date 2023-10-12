import { StudentLoanAccount as StudentLoanAccount } from 'src/data-contracts/financial-service/data-contracts';
export declare class StudentLoanAccountClass implements StudentLoanAccount {
    /** id */
    id: string;
    plaidAccountId: string;
    disbursementDates: string[];
    expectedPayoffDate: string;
    guarantor: string;
    interestRatePercentage: number;
    isOverdue: boolean;
    lastPaymentAmount: number;
    lastPaymentDate: string;
    lastStatementIssueDate: string;
    loanName: string;
    loanEndDate: string;
    minimumPaymentAmount: number;
    nextPaymentDueDate: string;
    originationDate: string;
    originationPrincipalAmount: number;
    outstandingInterestAmount: number;
    paymentReferenceNumber: string;
    sequenceNumber: string;
    ytdInterestPaid: number;
    ytdPrincipalPaid: number;
    loanType: string;
    pslfStatusEstimatedEligibilityDate: string;
    pslfStatusPaymentsMade: number;
    pslfStatusPaymentsRemaining: number;
    repaymentPlanType: string;
    repaymentPlanDescription: string;
    servicerAddressCity: string;
    servicerAddressPostalCode: string;
    servicerAddressState: string;
    servicerAddressStreet: string;
    servicerAddressRegion: string;
    servicerAddressCountry: string;
    /** the user id to which this bank account is tied to */
    userId: string;
    /** the account name */
    name: string;
    constructor(data: Partial<StudentLoanAccount>);
    static randomInstance(): StudentLoanAccount;
}
