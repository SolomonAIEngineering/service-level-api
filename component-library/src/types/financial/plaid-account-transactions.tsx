import {
  Any,
  PlaidAccountTransaction,
  SmartNote,
  TransactionSplit,
} from 'src/data-contracts/financial-service/data-contracts';
import {
  getRandomBoolean,
  getRandomNumber,
  getRandomString,
} from 'src/lib-utils/utils';
import { SmartNoteClass } from './smart-note';
import { TransactionSplitClass } from './transaction-split';

class PlaidAccountTransactionClass implements PlaidAccountTransaction {
  /**
   * The bank account ID associated with the transaction.
   *
   * @gotag: ch:"account_id"
   */
  accountId?: string;
  /**
   * The account owner associated with the transaction.
   *
   * @gotag: ch:"account_owner"
   */
  accountOwner?: string;
  /** Additional properties that can be of any type. */
  additionalProperties?: Any;
  /**
   * The amount of the transaction.
   *
   * @gotag: ch:"amount"
   * @format double
   */
  amount?: number;
  /**
   * The time at which the transaction was authorized.
   *
   * @gotag: ch:"authorized_date"
   * @format date-time
   */
  authorizedDate?: string;
  /**
   * The date-time when the transaction was authorized.
   *
   * @gotag: ch:"authorized_datetime"
   * @format date-time
   */
  authorizedDatetime?: string;
  /** The set of categories that the transaction belongs to. */
  categories?: Array<string>;
  /**
   * The category ID of the transaction.
   *
   * @gotag: ch:"category_id"
   */
  categoryId?: string;
  /**
   * The check number associated with the transaction.
   *
   * @gotag: ch:"check_number"
   */
  checkNumber?: string;
  /**
   * The date of the transaction.
   *
   * @gotag: ch:"date"
   * @format date-time
   */
  currentDate?: string;
  /**
   * The current datetime of the transaction.
   *
   * @gotag: ch:"datetime"
   * @format date-time
   */
  currentDatetime?: string;
  /** Indicates whether this transaction should be hidden. */
  hideTransaction?: boolean;
  /**
   * The unique ID for this transaction.
   * @format uint64
   */
  id?: string;
  /**
   * The currency code of the transaction.
   *
   * @gotag: ch:"iso_currency_code"
   */
  isoCurrencyCode?: string;
  /**
   * The link ID associated with this transaction.
   * @format uint64
   */
  linkId?: string;
  /** The street address of the transaction location (if available). */
  locationAddress?: string;
  /** The city of the transaction location (if available). */
  locationCity?: string;
  /** The country of the transaction location (if available). */
  locationCountry?: string;
  /**
   * The latitude of the transaction location (if available).
   * @format double
   */
  locationLat?: number;
  /**
   * The longitude of the transaction location (if available).
   * @format double
   */
  locationLon?: number;
  /** The postal code of the transaction location (if available). */
  locationPostalCode?: string;
  /** The region or state of the transaction location (if available). */
  locationRegion?: string;
  /** The store number associated with the transaction location (if available). */
  locationStoreNumber?: string;
  /**
   * The merchant name of the transaction.
   *
   * @gotag: ch:"merchant_name"
   */
  merchantName?: string;
  /** Indicates whether this transaction needs review. */
  needsReview?: boolean;
  /** Notes associated with this transaction. */
  notes?: Array<SmartNote>;
  /**
   * The payment channel for the transaction.
   *
   * @gotag: ch:"payment_channel"
   */
  paymentChannel?: string;
  /** Information about the entity to whom the payment is made (if available). */
  paymentMetaByOrderOf?: string;
  /** Information about the payee (if available). */
  paymentMetaPayee?: string;
  /** Information about the payer (if available). */
  paymentMetaPayer?: string;
  /** The payment method used for the transaction (if available). */
  paymentMetaPaymentMethod?: string;
  /** The payment processor involved in the transaction (if available). */
  paymentMetaPaymentProcessor?: string;
  /** The Prearranged Payment and Deposit (PPD) ID (if available). */
  paymentMetaPpdId?: string;
  /** The reason for the payment (if available). */
  paymentMetaReason?: string;
  /** The reference number associated with the payment (if available). */
  paymentMetaReferenceNumber?: string;
  /**
   * Indicates whether the transaction is pending.
   *
   * @gotag: ch:"pending"
   */
  pending?: boolean;
  /**
   * The ID of the pending transaction, if applicable.
   *
   * @gotag: ch:"pending_transaction_id"
   */
  pendingTransactionId?: string;
  /**
   * The detailed personal finance category of the transaction.
   *
   * @gotag: ch:"personal_finance_category_detailed"
   */
  personalFinanceCategoryDetailed?: string;
  /**
   * The primary personal finance category of the transaction.
   *
   * @gotag: ch:"personal_finance_category_primary"
   */
  personalFinanceCategoryPrimary?: string;
  /** The number of splits associated with this transaction. */
  splits?: Array<TransactionSplit>;
  /** Tags associated with this transaction. */
  tags?: Array<string>;
  /**
   * The timestamp associated with the transaction.
   * @format date-time
   */
  time?: string;
  /**
   * The transaction code.
   *
   * @gotag: ch:"transaction_code"
   */
  transactionCode?: string;
  /**
   * The transaction ID of interest.
   *
   * @gotag: ch:"transaction_id"
   */
  transactionId?: string;
  /**
   * The name of the transaction.
   *
   * @gotag: ch:"name"
   */
  transactionName?: string;
  /**
   * The unofficial currency code of the transaction.
   *
   * @gotag: ch:"unofficial_currency_code"
   */
  unofficialCurrencyCode?: string;
  /**
   * The user ID associated with this transaction.
   * @format uint64
   */
  userId?: string;
  /**
   * Creates an instance of Transaction.
   *
   * @param data - Object with details for Transaction.
   */
  constructor(data: Partial<PlaidAccountTransaction>) {
    Object.assign(this, data);
  }

  /**
   * Creates an instance of Transaction.
   *
   * @param data - Object with details for Transaction.
   */
  public static randomInstance(): PlaidAccountTransactionClass {
    return new PlaidAccountTransactionClass({
      accountId: getRandomString(10),
      amount: getRandomNumber(1000, 10000),
      isoCurrencyCode: getRandomString(3),
      unofficialCurrencyCode: getRandomString(3),
      categoryId: getRandomString(10),
      checkNumber: getRandomString(10),
      currentDate: getRandomString(10),
      currentDatetime: getRandomString(10),
      authorizedDate: getRandomString(10),
      authorizedDatetime: getRandomString(10),
      transactionName: getRandomString(10),
      merchantName: getRandomString(10),
      paymentChannel: getRandomString(10),
      pending: getRandomBoolean(),
      pendingTransactionId: getRandomString(10),
      accountOwner: getRandomString(10),
      transactionId: getRandomString(10),
      transactionCode: getRandomString(10),
      id: getRandomString(10),
      userId: getRandomString(10),
      linkId: getRandomString(10),
      personalFinanceCategoryPrimary: getRandomString(10),
      personalFinanceCategoryDetailed: getRandomString(10),
      locationAddress: getRandomString(10),
      locationCity: getRandomString(10),
      locationRegion: getRandomString(10),
      locationPostalCode: getRandomString(10),
      locationCountry: getRandomString(10),
      locationLat: getRandomNumber(1000, 10000),
      locationLon: getRandomNumber(1000, 10000),
      locationStoreNumber: getRandomString(10),
      paymentMetaByOrderOf: getRandomString(10),
      paymentMetaPayee: getRandomString(10),
      paymentMetaPayer: getRandomString(10),
      paymentMetaPaymentMethod: getRandomString(10),
      paymentMetaPaymentProcessor: getRandomString(10),
      paymentMetaPpdId: getRandomString(10),
      paymentMetaReason: getRandomString(10),
      paymentMetaReferenceNumber: getRandomString(10),
      time: getRandomString(10),
      categories: Array.from({ length: 10 }, () => getRandomString(10)),
      notes: Array.from({ length: 5 }, () => SmartNoteClass.randomInstance()),
      splits: Array.from({ length: 5 }, () =>
        TransactionSplitClass.randomInstance(),
      ),
    });
  }
}

export { PlaidAccountTransactionClass };
