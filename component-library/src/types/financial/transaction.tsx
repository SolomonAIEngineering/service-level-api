import {
  getRandomArrayItem,
  getRandomDate,
  getRandomNumber,
  getRandomString,
} from 'src/lib-utils/utils';
import { Any } from '.';

/**
 * Represents a financial transaction.
 *
 * @remarks
 * This class provides a comprehensive view of a financial transaction, capturing essential
 * details like amounts, dates, merchant information, and location data. It's an integral component
 * for financial systems, banking applications, or any platform requiring transaction tracking and
 * analytics.
 *
 * @example Constructing a `Transaction` instance:
 *
 * ```ts
 * // Sample transaction data
 * const transactionDetails = {
 *   accountId: 'acc-123',
 *   amount: 500,
 *   isoCurrencyCode: 'USD',
 *   // ... other properties ...
 * };
 *
 * const transactionInstance = new Transaction(transactionDetails);
 * ```
 *
 * @property accountId - Unique identifier of the account associated with the transaction.
 * @property amount - Monetary amount of the transaction.
 * @property isoCurrencyCode - Official ISO code representing the currency used in the transaction.
 * @property unofficialCurrencyCode - Any non-official currency codes, if applicable.
 * @property categoryId - Identifier for the transaction category.
 * @property checkNumber - Check number if the transaction was a cheque payment.
 * @property currentDate - Date of the transaction.
 * @property currentDatetime - Detailed timestamp of the transaction.
 * @property authorizedDate - Date when the transaction was authorized.
 * @property authorizedDatetime - Timestamp when the transaction was authorized.
 * @property name - Name or title of the transaction.
 * @property merchantName - Name of the merchant or vendor.
 * @property paymentChannel - Channel through which payment was made (e.g., online, in-store).
 * @property pending - Indicates if the transaction is still pending.
 * @property pendingTransactionId - If pending, a unique identifier for the pending transaction.
 * @property accountOwner - Name of the account owner or holder.
 * @property transactionId - Unique identifier for the transaction.
 * @property transactionCode - Code related to the type or nature of the transaction.
 * @property id - Unique identifier for this specific record or object.
 * @property userId - Identifier of the user associated with the transaction.
 * @property linkId - Identifier linking to another related record or object.
 * @property sign - Numerical sign associated with the transaction (e.g., positive for credit, negative for debit).
 * @property personalFinanceCategoryPrimary - Broad category for personal finance classification.
 * @property personalFinanceCategoryDetailed - More detailed or specific financial category.
 * @property locationAddress - Address where the transaction occurred.
 * @property locationCity - City of the transaction location.
 * @property locationRegion - Region or state of the transaction location.
 * @property locationPostalCode - Postal or ZIP code of the transaction location.
 * @property locationCountry - Country of the transaction location.
 * @property locationLat - Latitude coordinates of the transaction location.
 * @property locationLon - Longitude coordinates of the transaction location.
 * @property locationStoreNumber - Store number if the transaction was at a retail chain.
 * @property paymentMetaByOrderOf - Metadata field for payment details.
 * @property paymentMetaPayee - Metadata about the payee or recipient of the funds.
 * @property paymentMetaPayer - Metadata about the payer or sender of the funds.
 * @property paymentMetaPaymentMethod - Method used for the payment.
 * @property paymentMetaPaymentProcessor - Processor or intermediary handling the payment.
 * @property paymentMetaPpdId - Prearranged Payment and Deposit identifier.
 * @property paymentMetaReason - Reason or note for the transaction.
 * @property paymentMetaReferenceNumber - A reference number for the transaction.
 * @property time - Timestamp of the transaction.
 * @property additionalProperties - Any extra or miscellaneous properties related to the transaction.
 * @property categories - List of categories associated with the transaction.
 */
class Transaction {
  public accountId = '';
  public amount = 0;
  public isoCurrencyCode = '';
  public unofficialCurrencyCode = '';
  public categoryId = '';
  public checkNumber = '';
  public currentDate = '';
  public currentDatetime = '';
  public authorizedDate = '';
  public authorizedDatetime = '';
  public name = '';
  public merchantName = '';
  public paymentChannel = '';
  public pending = false;
  public pendingTransactionId = '';
  public accountOwner = '';
  public transactionId = '';
  public transactionCode = '';
  public id = '';
  public userId = 0;
  public linkId = 0;
  public sign = 0;
  public personalFinanceCategoryPrimary = '';
  public personalFinanceCategoryDetailed = '';
  public locationAddress = '';
  public locationCity = '';
  public locationRegion = '';
  public locationPostalCode = '';
  public locationCountry = '';
  public locationLat = 0;
  public locationLon = 0;
  public locationStoreNumber = '';
  public paymentMetaByOrderOf = '';
  public paymentMetaPayee = '';
  public paymentMetaPayer = '';
  public paymentMetaPaymentMethod = '';
  public paymentMetaPaymentProcessor = '';
  public paymentMetaPpdId = '';
  public paymentMetaReason = '';
  public paymentMetaReferenceNumber = '';
  public time: Date | undefined;
  public additionalProperties: Any | undefined; // Replaced 'Any' with 'any' as TypeScript uses 'any'
  public categories: string[] = []; // Replaced 'any' with 'string[]' as TypeScript uses 'any'

  /**
   * Creates an instance of Transaction.
   *
   * @param data - Object with details for Transaction.
   */
  constructor(data: Partial<Transaction>) {
    Object.assign(this, data);
    this.time = data.time ? new Date(data.time) : undefined;
  }

  static randomInstance(): Transaction {
    return new Transaction({
      accountId: getRandomString(10),
      amount: getRandomNumber(1, 10000),
      isoCurrencyCode: 'USD', // For simplicity, using a fixed value; can be randomized as needed
      unofficialCurrencyCode: getRandomString(3),
      categoryId: getRandomString(5),
      checkNumber: getRandomString(8),
      currentDate: getRandomDate(new Date(2022, 0, 1), new Date()).slice(0, 10),
      currentDatetime: getRandomDate(new Date(2022, 0, 1), new Date()),
      authorizedDate: getRandomDate(new Date(2022, 0, 1), new Date()).slice(
        0,
        10,
      ),
      authorizedDatetime: getRandomDate(new Date(2022, 0, 1), new Date()),
      name: getRandomString(20),
      merchantName: getRandomArrayItem([
        'Amazon',
        'Pizza Hut',
        'Duane Reades',
        'Fresh Grocer',
        'Walmart',
        'Subway',
        'Amtrak',
        'Best Buy',
        'Starbucks',
        "McDonald's",
        'Apple Store',
        'Nike',
        'Adidas',
        'Home Depot',
        'Target',
      ]),
      paymentChannel: getRandomNumber(0, 2) === 0 ? 'online' : 'in-store',
      pending: Boolean(getRandomNumber(0, 2)),
      pendingTransactionId: getRandomString(10),
      accountOwner: getRandomString(15),
      transactionId: getRandomString(10),
      transactionCode: getRandomString(5),
      id: getRandomString(10),
      userId: getRandomNumber(1, 10000),
      linkId: getRandomNumber(1, 10000),
      sign: getRandomNumber(0, 2) === 0 ? -1 : 1,
      personalFinanceCategoryPrimary: getRandomArrayItem([
        'Food',
        'Rent',
        'Transportation',
        'Entertainment',
        'Miscellaneous',
      ]),
      personalFinanceCategoryDetailed: getRandomString(15),
      locationAddress: getRandomString(30),
      locationCity: getRandomString(15),
      locationRegion: getRandomString(10),
      locationPostalCode: getRandomString(5),
      locationCountry: 'US', // For simplicity, using a fixed value; can be randomized as needed
      locationLat: Math.random() * 180 - 90,
      locationLon: Math.random() * 360 - 180,
      locationStoreNumber: getRandomString(5),
      paymentMetaByOrderOf: getRandomString(10),
      paymentMetaPayee: getRandomString(10),
      paymentMetaPayer: getRandomString(10),
      paymentMetaPaymentMethod: 'Card', // For simplicity, using a fixed value; can be randomized as needed
      paymentMetaPaymentProcessor: getRandomString(10),
      paymentMetaPpdId: getRandomString(10),
      paymentMetaReason: getRandomString(20),
      paymentMetaReferenceNumber: getRandomString(8),
      time: new Date(2022, 0, 1),
      categories: [getRandomString(10), getRandomString(10)],
    });
  }
}

export { Transaction };
