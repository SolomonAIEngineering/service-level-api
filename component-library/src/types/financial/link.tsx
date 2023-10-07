import {
  BankAccount,
  CreditAccount,
  InvestmentAccount,
  Link as Link,
  LinkStatus,
  LinkType,
  MortgageAccount,
  PlaidLink,
  PlaidSync,
  StudentLoanAccount,
  Token,
} from 'src/data-contracts/financial-service/data-contracts';

/*
 * A Link represents a login at a financial institution. A single end-user of your application might have accounts at different financial
 * institutions, which means they would have multiple different Items. An Item is not the same as a financial institution account,
 * although every account will be associated with an Item. For example, if a user has one login at their bank that allows them to access
 * both their checking account and their savings account, a single Item would be associated with both of those accounts. Each Item
 * linked within your application will have a corresponding access_token, which is a token that you can use to make API requests related
 * to that specific Item.
 * Two Items created for the same set of credentials at the same institution will be considered different and not share the same item_id.
 * @class Link
 * @implements {ILink}
 * */
class LinkClass implements Link {
  /**
   * The unique identifier for the link.
   * @type {number}
   */
  id: string = '0';

  /**
   * Information about Plaid synchronization.
   * @type {PlaidSync | undefined}
   */
  plaidSync: PlaidSync | undefined;

  /**
   * The status of the link.
   * @type {LinkStatus}
   */
  linkStatus: LinkStatus = 'LINK_STATUS_UNSPECIFIED';

  /**
   * Information about Plaid linking.
   * @type {PlaidLink | undefined}
   */
  plaidLink: PlaidLink | undefined;

  /**
   * Indicates if new accounts are available through Plaid.
   * @type {boolean}
   */
  plaidNewAccountsAvailable: boolean = false;

  /**
   * The expiration date of the link.
   * @type {string}
   */
  expirationDate: string = '';

  /**
   * The name of the financial institution.
   * @type {string}
   */
  institutionName: string = '';

  /**
   * Custom name for the institution.
   * @type {string}
   */
  customInstitutionName: string = '';

  /**
   * Description of the link.
   * @type {string}
   */
  description: string = '';

  /**
   * The timestamp of the last manual sync.
   * @type {string}
   */
  lastManualSync: string = '';

  /**
   * The timestamp of the last successful update.
   * @type {string}
   */
  lastSuccessfulUpdate: string = '';

  /**
   * @type {Token | undefined}
   */
  token: Token | undefined;

  /**
   * @type {BankAccount[]}
   */
  bankAccounts: BankAccount[] = [];

  /**
   * @type {InvestmentAccount[]}
   */
  investmentAccounts: InvestmentAccount[] = [];

  /**
   * Credit accounts tied to the link.
   * @type {CreditAccount[]}
   */
  creditAccounts: CreditAccount[] = [];

  /**
   * Mortgage accounts tied to the link.
   * @type {MortgageAccount[]}
   */
  mortgageAccounts: MortgageAccount[] = [];

  /**
   * Student loan accounts tied to the link.
   * @type {StudentLoanAccount[]}
   */
  studentLoanAccounts: StudentLoanAccount[] = [];

  /**
   * The ID of the institution this link is tied to.
   * @type {string}
   */
  plaidInstitutionId: string = '';

  /**
   * The type of link.
   * @type {LinkType}
   */
  linkType: LinkType = 'LINK_TYPE_UNSPECIFIED';

  /**
   * Error code associated with the link.
   * @type {string}
   */
  errorCode: string = '';

  /**
   * The timestamp of the last update.
   * @type {string}
   */
  updatedAt: string = '';

  /**
   * Indicates if new accounts are available.
   * @type {boolean}
   */
  newAccountsAvailable: boolean = false;

  /**
   * Indicates if the link should be updated.
   * @type {boolean}
   */
  shouldBeUpdated: boolean = false;

  /**
   * Constructs a new Link object.
   * @constructor
   * @param {Partial<Link>} data - Optional data for initializing the link.
   */
  constructor(data: Partial<Link>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

/**
 * Export the Link class.
 */
export { LinkClass };
