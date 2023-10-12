import { BankAccount, CreditAccount, InvestmentAccount, Link as Link, LinkStatus, LinkType, MortgageAccount, PlaidLink, PlaidSync, StudentLoanAccount, Token } from 'src/data-contracts/financial-service/data-contracts';
declare class LinkClass implements Link {
    /**
     * The unique identifier for the link.
     * @type {number}
     */
    id: string;
    /**
     * Information about Plaid synchronization.
     * @type {PlaidSync | undefined}
     */
    plaidSync: PlaidSync | undefined;
    /**
     * The status of the link.
     * @type {LinkStatus}
     */
    linkStatus: LinkStatus;
    /**
     * Information about Plaid linking.
     * @type {PlaidLink | undefined}
     */
    plaidLink: PlaidLink | undefined;
    /**
     * Indicates if new accounts are available through Plaid.
     * @type {boolean}
     */
    plaidNewAccountsAvailable: boolean;
    /**
     * The expiration date of the link.
     * @type {string}
     */
    expirationDate: string;
    /**
     * The name of the financial institution.
     * @type {string}
     */
    institutionName: string;
    /**
     * Custom name for the institution.
     * @type {string}
     */
    customInstitutionName: string;
    /**
     * Description of the link.
     * @type {string}
     */
    description: string;
    /**
     * The timestamp of the last manual sync.
     * @type {string}
     */
    lastManualSync: string;
    /**
     * The timestamp of the last successful update.
     * @type {string}
     */
    lastSuccessfulUpdate: string;
    /**
     * @type {Token | undefined}
     */
    token: Token | undefined;
    /**
     * @type {BankAccount[]}
     */
    bankAccounts: BankAccount[];
    /**
     * @type {InvestmentAccount[]}
     */
    investmentAccounts: InvestmentAccount[];
    /**
     * Credit accounts tied to the link.
     * @type {CreditAccount[]}
     */
    creditAccounts: CreditAccount[];
    /**
     * Mortgage accounts tied to the link.
     * @type {MortgageAccount[]}
     */
    mortgageAccounts: MortgageAccount[];
    /**
     * Student loan accounts tied to the link.
     * @type {StudentLoanAccount[]}
     */
    studentLoanAccounts: StudentLoanAccount[];
    /**
     * The ID of the institution this link is tied to.
     * @type {string}
     */
    plaidInstitutionId: string;
    /**
     * The type of link.
     * @type {LinkType}
     */
    linkType: LinkType;
    /**
     * Error code associated with the link.
     * @type {string}
     */
    errorCode: string;
    /**
     * The timestamp of the last update.
     * @type {string}
     */
    updatedAt: string;
    /**
     * Indicates if new accounts are available.
     * @type {boolean}
     */
    newAccountsAvailable: boolean;
    /**
     * Indicates if the link should be updated.
     * @type {boolean}
     */
    shouldBeUpdated: boolean;
    /**
     * Constructs a new Link object.
     * @constructor
     * @param {Partial<Link>} data - Optional data for initializing the link.
     */
    constructor(data: Partial<Link>);
}
/**
 * Export the Link class.
 */
export { LinkClass };
