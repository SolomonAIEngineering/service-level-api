import { BankAccount } from './bank-account';
import { CreditAccount } from './credit-account';
import { InvestmentAccount } from './investment-account';
import { LinkStatus } from './link-status';
import { LinkType } from './link-type';
import { MortgageAccount } from './mortgage-account';
import { PlaidLink } from './plaid-link';
import { PlaidSync } from './plaid-sync';
import { StudentLoanAccount } from './student-loan-account';
import { Token } from './token';

export interface ILink {
  /** id */
  id: number;
  plaidSync: PlaidSync | undefined;
  linkStatus: LinkStatus;
  plaidLink: PlaidLink | undefined;
  plaidNewAccountsAvailable: boolean;
  expirationDate: string;
  institutionName: string;
  customInstitutionName: string;
  description: string;
  lastManualSync: string;
  lastSuccessfulUpdate: string;
  /**
   * token object witholds an access token which is a token used to make API requests related to a specific Item. You will typically obtain an access_token
   * by calling /item/public_token/exchange. For more details, see the Token exchange flow. An access_token does not expire,
   * although it may require updating, such as when a user changes their password, or when working with European institutions
   * that comply with PSD2's 90-day consent window. For more information, see When to use update mode.
   * Access tokens should always be stored securely, and associated with the user whose data they represent.
   * If compromised, an access_token can be rotated via /item/access_token/invalidate. If no longer needed,
   * it can be revoked via /item/remove.(gorm.field).has_one = {disable_association_autocreate: false disable_association_autoupdate: false preload: true}];
   */
  token: Token | undefined;
  /**
   * a link event - or client login event can have many connected bank accounts
   * for example a log in link against one instition like chase can have many account (checking and savings)
   * it is important though to ensure that if a link against an instition already exists, we dont fascilitate duplicated
   */
  bankAccounts: BankAccount[];
  /**
   * a link event - or client login event can have many connected investment accounts
   * for example a log in link against one instition like fidelity can have many accounts (401k and investment account)
   * it is important though to ensure that if a link against an instition already exists, we dont fascilitate duplicated
   */
  investmentAccounts: InvestmentAccount[];
  /** credit accounts tied to a user */
  creditAccounts: CreditAccount[];
  /** mortgage accounts tied to a user */
  mortgageAccounts: MortgageAccount[];
  /** student loan accounts tied to a link */
  studentLoanAccounts: StudentLoanAccount[];
  /** the id of the institution this link is tied to and against */
  plaidInstitutionId: string;
  /** the type of link this is ... can be either a manual or plaid link type */
  linkType: LinkType;
  errorCode: string;
  updatedAt: string;
  newAccountsAvailable: boolean;
  shouldBeUpdated: boolean;
}

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
class Link implements ILink {
  /**
   * The unique identifier for the link.
   * @type {number}
   */
  id: number = 0;

  /**
   * Information about Plaid synchronization.
   * @type {PlaidSync | undefined}
   */
  plaidSync: PlaidSync | undefined;

  /**
   * The status of the link.
   * @type {LinkStatus}
   */
  linkStatus: LinkStatus = LinkStatus.LINK_STATUS_UNSPECIFIED;

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
  linkType: LinkType = LinkType.LINK_TYPE_UNSPECIFIED;

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
export { Link };
