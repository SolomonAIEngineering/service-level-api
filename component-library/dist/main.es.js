var K = Object.defineProperty;
var Q = (n, t, s) => t in n ? K(n, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[t] = s;
var e = (n, t, s) => (Q(n, typeof t != "symbol" ? t + "" : t, s), s);
class J {
  /**
   * Initializes a new instance of the `Address` class.
   * @param [data] - The data used to populate the properties of the class.
   */
  constructor(t) {
    e(this, "address", "");
    e(this, "city", "");
    e(this, "state", "");
    e(this, "unit", "");
    e(this, "zipcode", "");
    e(this, "lattitude", "");
    e(this, "longitude", "");
    e(this, "id", "");
    t && Object.assign(this, {
      ...t
    });
  }
  /**
   * Returns a formatted string of the full address.
   *
   * @example
   * ```ts
   * const location = new Address({address: "123 Main St", city: "Anytown", state: "CA", zipcode: "12345"});
   * console.log(location.getFullAddress()); // Outputs: "123 Main St, Anytown, CA 12345"
   * ```
   *
   * @returns The formatted address string.
   */
  getFullAddress() {
    return `${this.address}, ${this.city}, ${this.state} ${this.zipcode}`;
  }
}
class X {
  /**
   * Initializes a new instance of the `Tag` class.
   * @param {Partial<Tag>} [data] - Data used to populate the properties of the class.
   */
  constructor(t) {
    e(this, "id");
    e(this, "tagName");
    e(this, "tagDescription");
    e(this, "metadata", []);
    t && Object.assign(this, {
      ...t,
      metadata: (t == null ? void 0 : t.metadata) || []
    });
  }
  /**
   * Fetches the tag's description or provides a default empty string if not set.
   * @returns The tag's description or an empty string.
   */
  getDescription() {
    return this.tagDescription || "";
  }
  /**
   * Fetches the tag's name or provides a default empty string if not set.
   * @returns The tag's name or an empty string.
   */
  getName() {
    return this.tagName || "";
  }
  /**
   * Fetches the tag's metadata or provides a default empty array if not set.
   * @returns The tag's metadata array or an empty array.
   */
  getMetadata() {
    return this.metadata || [];
  }
}
class Z {
  /**
   * Creates a new instance of ErrorMetadata.
   *
   * @param data - A partial structure representing ErrorMetadata. Used for initialization.
   */
  constructor(t) {
    /**
     * An optional numeric code indicating the specific error.
     */
    e(this, "code");
    /**
     * An optional status string providing more context about the error's nature.
     */
    e(this, "status");
    /**
     * A more descriptive message explaining the error.
     */
    e(this, "message");
    /**
     * Detailed breakdown or additional information about the error.
     * This can be useful for debugging or for more granular client-side handling.
     */
    e(this, "details");
    t && Object.assign(this, {
      ...t
    });
  }
}
class N {
  /**
   * Creates a new instance of BackendError.
   *
   * @param data - A partial structure representing BackendError. Used for initialization.
   */
  constructor(t) {
    /**
     * Contains an array of error metadata detailing the specifics of the error(s).
     */
    e(this, "response", { errors: [] });
    var s, o;
    t && Object.assign(this, {
      ...t,
      response: {
        errors: (o = (s = t == null ? void 0 : t.response) == null ? void 0 : s.errors) == null ? void 0 : o.map((c) => new Z(c))
      }
    });
  }
}
class T {
  /**
   * Creates a new instance of ErrorMessage.
   *
   * @param data - A partial structure representing ErrorMessage. Used for initialization.
   */
  constructor(t) {
    /**
     * Contains the backend error details.
     */
    e(this, "http_body", new N());
    /**
     * Represents the HTTP status code associated with this error.
     */
    e(this, "http_status_code", 0);
    t && Object.assign(this, {
      ...t,
      http_body: new N(t == null ? void 0 : t.http_body),
      http_status_code: t == null ? void 0 : t.http_status_code
    });
  }
}
class a {
  /**
   * Creates a new instance of ErrorResponse.
   *
   * @param data - A partial structure representing ErrorResponse. Used for initialization.
   */
  constructor(t) {
    /**
     * Contains the error message details including HTTP specifics.
     */
    e(this, "error_message", new T());
    t && Object.assign(this, {
      ...t,
      error_message: new T(t == null ? void 0 : t.error_message)
    });
  }
}
class y {
  constructor(t) {
    /** id */
    e(this, "id", "0");
    e(this, "closePrice", 0);
    e(this, "closePriceAsOf", "");
    e(this, "cusip", "");
    e(this, "institutionId", "");
    e(this, "institutionSecurityId", "");
    e(this, "isCashEquivalent", !1);
    e(this, "isin", "");
    e(this, "isoCurrencyCode", "");
    e(this, "name", "");
    e(this, "proxySecurityId", "");
    e(this, "securityId", "");
    e(this, "sedol", "");
    e(this, "tickerSymbol", "");
    e(this, "type", "");
    e(this, "unofficialCurrencyCode", "");
    e(this, "updateDatetime", "");
    t && Object.assign(this, {
      ...t
    });
  }
  static randomInstance() {
    return new y({
      id: Math.floor(Math.random() * 1e3).toString(),
      closePrice: +(Math.random() * 1e3).toFixed(2),
      closePriceAsOf: (/* @__PURE__ */ new Date()).toISOString(),
      cusip: Math.random().toString(36).substring(2),
      institutionId: Math.random().toString(36).substring(2),
      institutionSecurityId: Math.random().toString(36).substring(2),
      isCashEquivalent: Math.random() < 0.5,
      isin: Math.random().toString(36).substring(2),
      isoCurrencyCode: ["USD", "EUR", "GBP"][Math.floor(Math.random() * 3)],
      name: "Security " + Math.random().toString(36).substring(2),
      proxySecurityId: Math.random().toString(36).substring(2),
      securityId: Math.random().toString(36).substring(2),
      sedol: Math.random().toString(36).substring(2),
      tickerSymbol: Math.random().toString(36).substring(2).toUpperCase(),
      type: ["Stock", "Bond", "Mutual Fund"][Math.floor(Math.random() * 3)],
      unofficialCurrencyCode: Math.random().toString(36).substring(2),
      updateDatetime: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
}
function r(n, t) {
  return Math.floor(Math.random() * (t - n + 1) + n);
}
function i(n) {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let s = "";
  for (let o = 0; o < n; o++)
    s += t.charAt(Math.floor(Math.random() * t.length));
  return s;
}
function d(n) {
  return n[Math.floor(Math.random() * n.length)];
}
function u(n, t) {
  return new Date(n.getTime() + Math.random() * (t.getTime() - n.getTime())).toISOString().split("T")[0];
}
function E() {
  return Math.random() > 0.5;
}
function q() {
  const n = r(1, 5), t = [];
  for (let s = 0; s < n; s++)
    t.push(i(5));
  return t;
}
function x() {
  return (Math.random() * 1e4).toFixed(2);
}
function m() {
  return +(Math.random() * 1e4).toFixed(2);
}
function D(n, t = "") {
  const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let o = "";
  for (let c = 0; c < n; c++)
    o += s.charAt(Math.floor(Math.random() * s.length));
  return t + o;
}
function ee(n, t) {
  const s = r(n, t), o = r(0, 11), c = r(1, 28);
  return new Date(s, o, c);
}
class I {
  constructor(t) {
    /** id */
    e(this, "id", "0");
    /** The name of the category */
    e(this, "name", "");
    /** The description of the category */
    e(this, "description", "");
    /** the sub categories of the category */
    e(this, "subcategories", []);
    t && Object.assign(this, {
      ...t
    });
  }
  /**
   * Creates a random instance of the Category class with all fields populated.
   * @returns {Category} A random Category.
   */
  static randomInstance() {
    return new I({
      id: r(1, 1e4).toString(),
      name: i(5),
      description: i(10),
      subcategories: q()
    });
  }
}
class f {
  constructor(t) {
    /** id */
    e(this, "id", "0");
    /** The name of the budget */
    e(this, "name", "");
    e(this, "description", "");
    /** the time the goal was created */
    e(this, "startDate", "");
    /** the time the goal was updated */
    e(this, "endDate", "");
    /** category associated with the goal */
    e(this, "category");
    t && Object.assign(this, {
      ...t
    });
  }
  /**
   * Creates a random instance of the Budget class with all fields populated.
   * @returns {Budget} A random Budget.
   */
  static randomInstance() {
    return new f({
      id: r(1, 1e4).toString(),
      name: i(5),
      description: i(10),
      startDate: u(new Date(2020, 0, 1), new Date(2025, 0, 1)),
      endDate: u(new Date(2020, 0, 1), new Date(2025, 0, 1)),
      category: Math.random() > 0.5 ? I.randomInstance() : void 0
    });
  }
}
class b {
  constructor(t) {
    /** id */
    e(this, "id", "0");
    /**
     * The name of the milestone
     * Validations:
     * - must be at least 3 characters long
     */
    e(this, "name", "");
    /**
     * The description of the miletone
     * Validations:
     * - must be at least 3 characters long
     */
    e(this, "description", "");
    /**
     * the target date of the milestone
     * Validations:
     * - must be at least 3 characters long
     */
    e(this, "targetDate", "");
    /** the target amount of the milestone */
    e(this, "targetAmount", "");
    /** wethe milestone is completed or not */
    e(this, "isCompleted", !1);
    /** the budget associated with the milestone */
    e(this, "budget");
    t && Object.assign(this, {
      ...t
    });
  }
  /**
   * Creates a random instance of the Milestone class with all fields populated.
   * @returns {Milestone} A random Milestone.
   */
  static randomInstance() {
    return new b({
      id: r(1, 1e4).toString(),
      name: i(5),
      description: i(10),
      targetDate: u(new Date(2020, 0, 1), new Date(2025, 0, 1)),
      targetAmount: `$${r(100, 1e3)}`,
      isCompleted: E(),
      budget: Math.random() > 0.5 ? f.randomInstance() : void 0
    });
  }
}
class ae {
  constructor(t) {
    e(this, "id", "0");
    e(this, "plaidAccountId", "");
    e(this, "accountNumber", "");
    e(this, "currentLateFee", 0);
    e(this, "escrowBalance", 0);
    e(this, "hasPmi", !1);
    e(this, "hasPrepaymentPenalty", !1);
    e(this, "lastPaymentAmount", 0);
    e(this, "lastPaymentDate", "");
    e(this, "loanTerm", "");
    e(this, "loanTypeDescription", "");
    e(this, "maturityDate", "");
    e(this, "nextMonthlyPayment", 0);
    e(this, "nextPaymentDueDate", "");
    e(this, "originalPrincipalBalance", 0);
    e(this, "originalPropertyValue", 0);
    e(this, "outstandingPrincipalBalance", 0);
    e(this, "paymentAmount", 0);
    e(this, "paymentDate", "");
    e(this, "originationDate", "");
    e(this, "originationPrincipalAmount", 0);
    e(this, "pastDueAmount", 0);
    e(this, "ytdInterestPaid", 0);
    e(this, "ytdPrincipalPaid", 0);
    e(this, "propertyAddressCity", "");
    e(this, "propertyAddressState", "");
    e(this, "propertyAddressStreet", "");
    e(this, "propertyAddressPostalCode", "");
    e(this, "propertyRegion", "");
    e(this, "propertyCountry", "");
    e(this, "interestRatePercentage", 0);
    e(this, "interestRateType", "");
    t && Object.assign(this, {
      ...t
    });
  }
}
class S {
  constructor(t) {
    /** id */
    e(this, "id", "0");
    /** the forecasted amount of the goal */
    e(this, "forecastedAmount", "");
    /** the forecasted completion date of the goal */
    e(this, "forecastedCompletionDate", "");
    /** the forecasted variance of the goal between the forecasted and target amounts */
    e(this, "varianceAmount", "");
    t && Object.assign(this, {
      ...t
    });
  }
  /**
   * Creates a random instance of the Forecast class with all fields populated.
   * @returns {Forecast} A random Forecast.
   */
  static randomInstance() {
    return new S({
      id: r(1, 1e4).toString(),
      forecastedAmount: x(),
      forecastedCompletionDate: u(new Date(2020, 0, 1), new Date(2025, 0, 1)),
      varianceAmount: x()
    });
  }
}
class C {
  constructor(t) {
    /** id */
    e(this, "id", "0");
    /** the user id to which this goal is tied to */
    e(this, "userId", "0");
    /**
     * The name of the goal
     * Validations:
     * - must be at least 3 characters long
     */
    e(this, "name", "");
    /**
     * The description of the goal
     * Validations:
     * - must be at least 3 characters long
     */
    e(this, "description", "");
    /** wether the goal has been achieved or not */
    e(this, "isCompleted", !1);
    /** The type of the goal */
    e(this, "goalType", "GOAL_TYPE_UNSPECIFIED");
    /** The duration of the goal */
    e(this, "duration", "");
    /** the start date of the goal */
    e(this, "startDate", "");
    /** the end date of the goal */
    e(this, "endDate", "");
    /**
     * the target amount of the goal
     * amount of money the user wants to save or invest
     */
    e(this, "targetAmount", "");
    /**
     * the current amount of the goal
     * current amount of money saved or invested towards the goal
     */
    e(this, "currentAmount", "");
    /** Milestones associated with the goal */
    e(this, "milestones", []);
    /** Forecasts associated with the goal */
    e(this, "forecasts");
    t && Object.assign(this, {
      ...t
    });
  }
  /**
   * Creates a random instance of the SmartGoal class with all fields populated.
   * @returns {SmartGoal} A random SmartGoal.
   */
  static randomInstance() {
    const t = r(5, 10), s = Array.from({ length: t }, () => b.randomInstance());
    return new C({
      id: r(1, 1e4).toString(),
      userId: r(1, 1e4).toString(),
      name: i(5),
      description: i(10),
      isCompleted: E(),
      goalType: "GOAL_TYPE_INVESTMENT",
      duration: `${r(1, 5)} weeks`,
      startDate: u(new Date(2020, 0, 1), new Date(2025, 0, 1)),
      endDate: u(new Date(2022, 0, 1), new Date(2030, 0, 1)),
      targetAmount: `$${r(500, 1e4)}`,
      currentAmount: `$${r(0, 5e3)}`,
      milestones: s,
      forecasts: Math.random() > 0.1 ? S.randomInstance() : void 0
    });
  }
}
class P {
  constructor(t) {
    /** id */
    e(this, "id", "0");
    /** the set of smart goals this user witholds */
    e(this, "goals", []);
    /** The type of the pocket */
    e(this, "type", "POCKET_TYPE_UNSPECIFIED");
    Object.assign(this, t);
  }
  /**
   * Creates a random instance of the Pocket class with all fields populated.
   * @returns {Pocket} A random pocket.
   */
  static randomInstance() {
    const t = r(0, 5), s = Array.from({ length: t }, () => C.randomInstance());
    return new P({
      id: r(1, 1e4).toString(),
      goals: s,
      type: "POCKET_TYPE_LONG_TERM_SAVINGS"
    });
  }
}
class A {
  constructor(t) {
    /** id */
    e(this, "id", "0");
    /** The name of the investment holding */
    e(this, "name", "");
    /** plaid account id */
    e(this, "plaidAccountId", "");
    e(this, "costBasis", 0);
    e(this, "institutionPrice", 0);
    e(this, "institutionPriceAsOf", "");
    e(this, "institutionPriceDatetime", "");
    e(this, "institutionValue", 0);
    e(this, "isoCurrencyCode", "");
    e(this, "quantity", 0);
    e(this, "securityId", "");
    e(this, "unofficialCurrencyCode", "");
    t && Object.assign(this, {
      ...t
    });
  }
  static randomInstance() {
    return new A({
      id: r(1, 100).toString(),
      name: i(10),
      plaidAccountId: i(10),
      costBasis: m(),
      institutionPrice: m(),
      institutionPriceAsOf: i(10),
      institutionPriceDatetime: i(10),
      institutionValue: m(),
      isoCurrencyCode: i(10),
      quantity: r(1, 100),
      securityId: i(10),
      unofficialCurrencyCode: i(10)
    });
  }
}
class k {
  constructor(t) {
    /** id */
    e(this, "id", "0");
    /** the user id to which this bank account is tied to */
    e(this, "userId", "0");
    /** the account name */
    e(this, "name", "");
    /** the bank account number */
    e(this, "number", "");
    /** the bank account type */
    e(this, "type", "");
    /** the bank account balance */
    e(this, "balance", 0);
    e(this, "currentFunds", 0);
    e(this, "balanceLimit", "0");
    /** plaid account id mapped to this bank account */
    e(this, "plaidAccountId", "");
    /** accoint subtype */
    e(this, "subtype", "");
    /** invesment holding is the set of securities this account witholds */
    e(this, "holdings", []);
    /** the set of securities this account witholds */
    e(this, "securities", []);
    t && Object.assign(this, {
      ...t
    });
  }
  static randomInstance() {
    return new k({
      id: r(1, 100).toString(),
      userId: r(1, 100).toString(),
      name: i(10),
      number: i(10),
      type: i(10),
      balance: m(),
      currentFunds: m(),
      balanceLimit: m().toString(),
      plaidAccountId: i(10),
      subtype: i(10),
      holdings: Array.from({ length: 20 }, () => A.randomInstance()),
      securities: Array.from({ length: 20 }, () => y.randomInstance())
    });
  }
}
class M {
  constructor(t) {
    e(this, "id", "0");
    e(this, "percentage", 0);
    e(this, "type", "");
    e(this, "balanceSubjectToApr", 0);
    e(this, "interestChargeAmount", 0);
    t && Object.assign(this, {
      ...t
    });
  }
  static randomInstance() {
    return new M({
      id: Math.floor(Math.random() * 100).toString(),
      percentage: Math.floor(Math.random() * 100),
      type: "random type",
      balanceSubjectToApr: Math.floor(Math.random() * 100),
      interestChargeAmount: Math.floor(Math.random() * 100)
    });
  }
}
class U {
  constructor(t) {
    /** id */
    e(this, "id", "0");
    /** the user id to which this bank account is tied to */
    e(this, "userId", "0");
    /** the account name */
    e(this, "name", "");
    /** the bank account number */
    e(this, "number", "");
    /** the bank account type */
    e(this, "type", "");
    /** the bank account balance */
    e(this, "balance", 0);
    /** current funds on the account */
    e(this, "currentFunds", 0);
    /** balance limit */
    e(this, "balanceLimit", "0");
    /** plaid account id mapped to this bank account */
    e(this, "plaidAccountId", "");
    /** accoint subtype */
    e(this, "subtype", "");
    /** wether the account is overdue */
    e(this, "isOverdue", !1);
    /** the last payment amount */
    e(this, "lastPaymentAmount", 0);
    /** the last payment date */
    e(this, "lastPaymentDate", "");
    /** the last statement issue date */
    e(this, "lastStatementIssueDate", "");
    /** the minimum amount due date */
    e(this, "minimumAmountDueDate", 0);
    /** the next payment date */
    e(this, "nextPaymentDate", "");
    /** the aprs */
    e(this, "aprs", []);
    /** the last statement balance */
    e(this, "lastStatementBalance", 0);
    /** the minimum payment amount */
    e(this, "minimumPaymentAmount", 0);
    /** the next payment due date */
    e(this, "nextPaymentDueDate", "");
    t && Object.assign(this, {
      ...t
    });
  }
  static randomInstance() {
    return new U({
      userId: r(1, 1e4).toString(),
      name: `Account ${i(5)}`,
      number: `xxxx-xxxx-xxxx-${i(4)}`,
      type: "Credit Card",
      balance: r(1e3, 1e4),
      currentFunds: r(500, 5e3),
      balanceLimit: r(0, 1e3).toString(),
      plaidAccountId: i(10),
      subtype: `Subtype ${i(3)}`,
      isOverdue: Math.random() < 0.5,
      lastPaymentAmount: r(0, 1e3),
      lastPaymentDate: i(10),
      lastStatementIssueDate: i(10),
      minimumAmountDueDate: r(0, 1e3),
      nextPaymentDate: i(10),
      aprs: Array.from({ length: r(0, 5) }, () => M.randomInstance()),
      lastStatementBalance: r(0, 1e3),
      minimumPaymentAmount: r(0, 1e3),
      nextPaymentDueDate: i(10)
    });
  }
}
class te {
  /**
   * Constructs a new ActionableInsight object.
   * @constructor
   * @param {Partial<ActionableInsight>} data - Optional data for initializing the actionable insight.
   */
  constructor(t = {}) {
    /**
     * The unique identifier for the actionable insight.
     * @type {number}
     */
    e(this, "id");
    /**
     * A detailed actionable insight generated for the user to act upon.
     * @type {string}
     */
    e(this, "detailedAction");
    /**
     * A summarized insight targeting optimization of a certain condition.
     * @type {string}
     */
    e(this, "summarizedAction");
    /**
     * The time at which the insight was generated.
     * @type {string | undefined}
     */
    e(this, "generatedTime");
    /**
     * An array of associated tags with the generated insights.
     * @type {string[]}
     */
    e(this, "tags");
    this.id = t.id ?? "0", this.detailedAction = t.detailedAction ?? "", this.summarizedAction = t.summarizedAction ?? "", this.generatedTime = t.generatedTime, this.tags = t.tags ?? [];
  }
}
class F {
  /**
   * Constructs a new BankAccount object.
   * @constructor
   * @param {Partial<BankAccount>} data - Optional data for initializing the bank account.
   */
  constructor(t) {
    /**
     * The unique identifier for the bank account.
     * @type {number}
     */
    e(this, "id", "0");
    /**
     * The user ID to which this bank account is tied.
     * @type {number}
     */
    e(this, "userId", "0");
    /**
     * The name of the bank account.
     * @type {string}
     */
    e(this, "name", "");
    /**
     * The bank account number.
     * @type {string}
     */
    e(this, "number", "");
    /**
     * The type of bank account.
     * @type {BankAccountType}
     */
    e(this, "type", "BANK_ACCOUNT_TYPE_UNSPECIFIED");
    /**
     * The balance of the bank account.
     * @type {number}
     */
    e(this, "balance", 0);
    /**
     * The currency of the bank account.
     * @type {string}
     */
    e(this, "currency", "");
    /**
     * The current funds available in the bank account.
     * @type {number}
     */
    e(this, "currentFunds", 0);
    /**
     * The balance limit of the bank account.
     * @type {number}
     */
    e(this, "balanceLimit", "0");
    /**
     * The set of virtualized pockets associated with this bank account.
     * @type {Pocket[]}
     */
    e(this, "pockets", []);
    /**
     * The Plaid account ID mapped to this bank account.
     * @type {string}
     */
    e(this, "plaidAccountId", "");
    /**
     * The subtype of the bank account.
     * @type {string}
     */
    e(this, "subtype", "");
    /**
     * The status of the bank account.
     * @type {BankAccountStatus}
     */
    e(this, "status", "BANK_ACCOUNT_STATUS_UNSPECIFIED");
    t && Object.assign(this, {
      ...t
    });
  }
  /**
   * Gets the number of pockets tied to this bank account.
   */
  getNumberOfPockets() {
    return this.pockets.length;
  }
  /**
   * Gets the number of goals tied to this bank account.
   */
  getNumberOfGoals() {
    return this.pockets.reduce((s, o) => s + (o.goals ? o.goals.length : 0), 0);
  }
  // Returns all goals tied to the given bank account
  getGoals() {
    return this.pockets.filter((o) => o.goals && o.goals.length > 0).flat().map((o) => o.goals).flat().filter((o) => o !== void 0);
  }
  // Returns all milestones tied to a particular bank account
  getMilestones() {
    return this.getGoals().filter((c) => c.milestones && c.milestones.length > 0).map((c) => c.milestones).flat().filter((c) => c !== void 0);
  }
  /**
   * Creates a random instance of the BankAccount class with all fields populated.
   * @returns {BankAccount} A random bank account.
   */
  static randomInstance() {
    const t = r(0, 5), s = Array.from({ length: t }, () => P.randomInstance());
    return new F({
      id: r(1, 1e4).toString(),
      userId: r(1, 1e4).toString(),
      name: `Account ${i(5)}`,
      number: `xxxx-xxxx-xxxx-${i(4)}`,
      type: "BANK_ACCOUNT_TYPE_PLAID",
      balance: r(1e3, 1e4),
      currency: d(["USD", "EUR", "GBP", "JPY"]),
      currentFunds: r(500, 5e3),
      balanceLimit: r(0, 1e3).toString(),
      pockets: s,
      plaidAccountId: i(10),
      subtype: `Subtype ${i(3)}`,
      status: "BANK_ACCOUNT_STATUS_ACTIVE"
    });
  }
}
class se {
  /**
   * Constructs a new StripeSubscription object.
   * @constructor
   * @param {Partial<StripeSubscription>} [data] - Optional data for initializing the subscription.
   */
  constructor(t = {}) {
    /**
     * The unique identifier for the subscription.
     * @type {string}
     */
    e(this, "id");
    /**
     * The ID of the subscription in the Stripe system tied to the customer.
     * @type {string}
     */
    e(this, "stripeSubscriptionId");
    /**
     * The status of the Stripe subscription.
     * @type {StripeSubscriptionStatus}
     */
    e(this, "stripeSubscriptionStatus");
    /**
     * The date until which the Stripe subscription is active.
     * @type {string}
     */
    e(this, "stripeSubscriptionActiveUntil");
    /**
     * The latest timestamp from the Stripe webhook related to the subscription.
     * @type {string}
     */
    e(this, "stripeWebhookLatestTimestamp");
    /**
     * Indicates whether the subscription is currently in a trial period.
     * @type {boolean}
     */
    e(this, "isTrialing");
    this.id = t.id ?? "0", this.stripeSubscriptionId = t.stripeSubscriptionId ?? "", this.stripeSubscriptionStatus = t.stripeSubscriptionStatus, this.stripeSubscriptionActiveUntil = t.stripeSubscriptionActiveUntil ?? "", this.stripeWebhookLatestTimestamp = t.stripeWebhookLatestTimestamp ?? "", this.isTrialing = t.isTrialing ?? !1;
  }
}
class ne {
  /**
   * Constructs a new Link object.
   * @constructor
   * @param {Partial<Link>} data - Optional data for initializing the link.
   */
  constructor(t) {
    /**
     * The unique identifier for the link.
     * @type {number}
     */
    e(this, "id", "0");
    /**
     * Information about Plaid synchronization.
     * @type {PlaidSync | undefined}
     */
    e(this, "plaidSync");
    /**
     * The status of the link.
     * @type {LinkStatus}
     */
    e(this, "linkStatus", "LINK_STATUS_UNSPECIFIED");
    /**
     * Information about Plaid linking.
     * @type {PlaidLink | undefined}
     */
    e(this, "plaidLink");
    /**
     * Indicates if new accounts are available through Plaid.
     * @type {boolean}
     */
    e(this, "plaidNewAccountsAvailable", !1);
    /**
     * The expiration date of the link.
     * @type {string}
     */
    e(this, "expirationDate", "");
    /**
     * The name of the financial institution.
     * @type {string}
     */
    e(this, "institutionName", "");
    /**
     * Custom name for the institution.
     * @type {string}
     */
    e(this, "customInstitutionName", "");
    /**
     * Description of the link.
     * @type {string}
     */
    e(this, "description", "");
    /**
     * The timestamp of the last manual sync.
     * @type {string}
     */
    e(this, "lastManualSync", "");
    /**
     * The timestamp of the last successful update.
     * @type {string}
     */
    e(this, "lastSuccessfulUpdate", "");
    /**
     * @type {Token | undefined}
     */
    e(this, "token");
    /**
     * @type {BankAccount[]}
     */
    e(this, "bankAccounts", []);
    /**
     * @type {InvestmentAccount[]}
     */
    e(this, "investmentAccounts", []);
    /**
     * Credit accounts tied to the link.
     * @type {CreditAccount[]}
     */
    e(this, "creditAccounts", []);
    /**
     * Mortgage accounts tied to the link.
     * @type {MortgageAccount[]}
     */
    e(this, "mortgageAccounts", []);
    /**
     * Student loan accounts tied to the link.
     * @type {StudentLoanAccount[]}
     */
    e(this, "studentLoanAccounts", []);
    /**
     * The ID of the institution this link is tied to.
     * @type {string}
     */
    e(this, "plaidInstitutionId", "");
    /**
     * The type of link.
     * @type {LinkType}
     */
    e(this, "linkType", "LINK_TYPE_UNSPECIFIED");
    /**
     * Error code associated with the link.
     * @type {string}
     */
    e(this, "errorCode", "");
    /**
     * The timestamp of the last update.
     * @type {string}
     */
    e(this, "updatedAt", "");
    /**
     * Indicates if new accounts are available.
     * @type {boolean}
     */
    e(this, "newAccountsAvailable", !1);
    /**
     * Indicates if the link should be updated.
     * @type {boolean}
     */
    e(this, "shouldBeUpdated", !1);
    t && Object.assign(this, {
      ...t
    });
  }
}
class w {
  constructor(t) {
    /** id */
    e(this, "userFinancialProfileID", 0);
    /** the user id tied to the profile */
    e(this, "userId", "0");
    e(this, "stripeCustomerId", "");
    /** the stripe subscriptions the user profile actively maintains */
    e(this, "stripeSubscriptions");
    /** a user profile can have many links (connected institutions) of which finanical accounts are tied to (checking, savings, etc) */
    e(this, "link", []);
    e(this, "actionableInsights", []);
    var s, o;
    t && Object.assign(this, {
      ...t,
      stripeSubscriptions: new se(t == null ? void 0 : t.stripeSubscriptions),
      link: (s = t == null ? void 0 : t.link) == null ? void 0 : s.map((c) => new ne(c)),
      actionableInsights: (o = t == null ? void 0 : t.actionableInsights) == null ? void 0 : o.map((c) => new te(c))
    });
  }
}
class ce {
  /**
   * Constructs a new PlaidLink object.
   * @constructor
   * @param {Partial<PlaidLink>} data - Optional data for initializing the PlaidLink.
   */
  constructor(t = {}) {
    /**
     * The unique identifier for the Plaid link.
     * @type {string}
     */
    e(this, "id");
    /**
     * An array of products associated with the Plaid link.
     * @type {string[]}
     */
    e(this, "products");
    /**
     * The webhook URL associated with the Plaid link.
     * @type {string}
     */
    e(this, "webhookUrl");
    /**
     * The ID of the institution associated with the Plaid link.
     * @type {string}
     */
    e(this, "institutionId");
    /**
     * The name of the institution associated with the Plaid link.
     * @type {string}
     */
    e(this, "institutionName");
    /**
     * Indicates whether Plaid sync is used with the link.
     * @type {boolean}
     */
    e(this, "usePlaidSync");
    /**
     * The ID of the item associated with the Plaid link.
     * @type {string}
     */
    e(this, "itemId");
    this.id = t.id ?? "0", this.products = t.products ?? [], this.webhookUrl = t.webhookUrl ?? "", this.institutionId = t.institutionId ?? "", this.institutionName = t.institutionName ?? "", this.usePlaidSync = t.usePlaidSync ?? !1, this.itemId = t.itemId ?? "";
  }
}
class ue {
  /**
   * Constructs a new PlaidSync object.
   * @constructor
   * @param {Partial<PlaidSync>} data - Optional data for initializing the PlaidSync.
   */
  constructor(t = {}) {
    /**
     * The unique identifier for the Plaid synchronization.
     * @type {number}
     */
    e(this, "id");
    /**
     * The timestamp of the synchronization.
     * @type {string}
     */
    e(this, "timeStamp");
    /**
     * The trigger that initiated the synchronization.
     * @type {string}
     */
    e(this, "trigger");
    /**
     * The cursor for the next synchronization.
     * @type {string}
     */
    e(this, "nextCursor");
    /**
     * The number of added items in the synchronization.
     * @type {number}
     */
    e(this, "added");
    /**
     * The string of removed items in the synchronization.
     * @type {string}
     */
    e(this, "removed");
    /**
     * The string of modified items in the synchronization.
     * @type {string}
     */
    e(this, "modified");
    this.id = t.id ?? "0", this.timeStamp = t.timeStamp ?? "", this.trigger = t.trigger ?? "", this.nextCursor = t.nextCursor ?? "", this.added = t.added ?? "0", this.removed = t.removed ?? "0", this.modified = t.modified ?? "0";
  }
}
class j {
  constructor(t) {
    /** id */
    e(this, "id", "0");
    e(this, "plaidAccountId", "");
    e(this, "disbursementDates", []);
    e(this, "expectedPayoffDate", "");
    e(this, "guarantor", "");
    e(this, "interestRatePercentage", 0);
    e(this, "isOverdue", !1);
    e(this, "lastPaymentAmount", 0);
    e(this, "lastPaymentDate", "");
    e(this, "lastStatementIssueDate", "");
    e(this, "loanName", "");
    e(this, "loanEndDate", "");
    e(this, "minimumPaymentAmount", 0);
    e(this, "nextPaymentDueDate", "");
    e(this, "originationDate", "");
    e(this, "originationPrincipalAmount", 0);
    e(this, "outstandingInterestAmount", 0);
    e(this, "paymentReferenceNumber", "");
    e(this, "sequenceNumber", "");
    e(this, "ytdInterestPaid", 0);
    e(this, "ytdPrincipalPaid", 0);
    e(this, "loanType", "");
    e(this, "pslfStatusEstimatedEligibilityDate", "");
    e(this, "pslfStatusPaymentsMade", 0);
    e(this, "pslfStatusPaymentsRemaining", 0);
    e(this, "repaymentPlanType", "");
    e(this, "repaymentPlanDescription", "");
    e(this, "servicerAddressCity", "");
    e(this, "servicerAddressPostalCode", "");
    e(this, "servicerAddressState", "");
    e(this, "servicerAddressStreet", "");
    e(this, "servicerAddressRegion", "");
    e(this, "servicerAddressCountry", "");
    /** the user id to which this bank account is tied to */
    e(this, "userId", "0");
    /** the account name */
    e(this, "name", "");
    t && Object.assign(this, {
      ...t
    });
  }
  static randomInstance() {
    return new j({
      id: r(1, 1e4).toString(),
      plaidAccountId: r(1, 1e4).toString(),
      disbursementDates: ["2028-01-01", "2028-02-01"],
      expectedPayoffDate: "2028-01-01",
      guarantor: "US Department of Education",
      interestRatePercentage: r(0, 1) * 1 / r(1, 100),
      isOverdue: !1,
      lastPaymentAmount: r(1, 100),
      lastPaymentDate: "2028-01-01",
      lastStatementIssueDate: "2028-01-01",
      loanName: "Loan Name",
      loanEndDate: "2028-01-01",
      minimumPaymentAmount: r(1, 100),
      nextPaymentDueDate: "2028-01-01",
      originationDate: "2028-01-01",
      originationPrincipalAmount: 1e5,
      outstandingInterestAmount: 100,
      paymentReferenceNumber: "123456789",
      sequenceNumber: "123456789",
      ytdInterestPaid: 5e3,
      ytdPrincipalPaid: 5e4,
      loanType: "Loan Type",
      pslfStatusEstimatedEligibilityDate: "2028-01-01",
      pslfStatusPaymentsMade: r(1, 100),
      pslfStatusPaymentsRemaining: r(1, 100),
      repaymentPlanType: "Repayment Plan Type",
      repaymentPlanDescription: "Repayment Plan Description",
      servicerAddressCity: "Servicer Address City",
      servicerAddressPostalCode: "Servicer Address Postal Code",
      servicerAddressState: "Servicer Address State",
      servicerAddressStreet: "Servicer Address Street",
      servicerAddressRegion: "Servicer Address Region",
      servicerAddressCountry: "Servicer Address Country",
      userId: r(1, 1e4).toString(),
      name: `Account ${r(1, 1e4)}`
    });
  }
}
class me {
  /**
   * Constructs a new Token object.
   * @constructor
   * @param {Partial<Token>} data - Optional data for initializing the token.
   */
  constructor(t = {}) {
    /**
     * The unique identifier for the token.
     * @type {string}
     */
    e(this, "id");
    /**
     * The ID of the item the token is tied to.
     * @type {string}
     */
    e(this, "itemId");
    /**
     * The key ID associated with the token.
     * @type {string}
     */
    e(this, "keyId");
    /**
     * The access token.
     * @type {string}
     */
    e(this, "accessToken");
    /**
     * The version of the token.
     * @type {string}
     */
    e(this, "version");
    this.id = t.id ?? "0", this.itemId = t.itemId ?? "", this.keyId = t.keyId ?? "", this.accessToken = t.accessToken ?? "", this.version = t.version ?? "";
  }
}
class z {
  /**
   * Constructs a new AccountBalanceHistory instance.
   *
   * @param data - Initialization data for the balance history.
   */
  constructor(t) {
    e(this, "time", "");
    e(this, "accountId", "");
    e(this, "isoCurrencyCode", "");
    e(this, "balance", 0);
    e(this, "userId", "0");
    e(this, "sign", 0);
    e(this, "id", "");
    t && Object.assign(this, {
      ...t,
      time: t.time ? new Date(t.time).toISOString() : ""
    });
  }
  /**
   * Creates a random instance of the AccountBalanceHistory class with all fields populated.
   * @returns {AccountBalanceHistory} A random AccountBalanceHistory.
   */
  static randomInstance() {
    return new z({
      id: D(5, "BAL-"),
      time: ee(2021, 2023).toISOString(),
      accountId: D(5, "ACC-"),
      isoCurrencyCode: ["USD", "EUR", "GBP", "JPY", "AUD"][r(0, 4)],
      balance: m(),
      userId: i(10),
      sign: [1, -1][r(0, 1)]
    });
  }
}
class p {
  constructor(t, s) {
    /**
     * A URL/resource name that uniquely identifies the type of the serialized
     * protocol buffer message. This string must contain at least
     * one "/" character. The last segment of the URL's path must represent
     * the fully qualified name of the type (as in
     * `path/google.protobuf.Duration`). The name should be in a canonical form
     * (e.g., leading "." is not accepted).
     *
     * In practice, teams usually precompile into the binary all types that they
     * expect it to use in the context of Any. However, for URLs which use the
     * scheme `http`, `https`, or no scheme, one can optionally set up a type
     * server that maps type URLs to message definitions as follows:
     *
     * * If no scheme is provided, `https` is assumed.
     * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
     *   value in binary format, or produce an error.
     * * Applications are allowed to cache lookup results based on the
     *   URL, or have them precompiled into a binary to avoid any
     *   lookup. Therefore, binary compatibility needs to be preserved
     *   on changes to types. (Use versioned type names to manage
     *   breaking changes.)
     *
     * Note: this functionality is not currently available in the official
     * protobuf release, and it is not used for type URLs beginning with
     * type.googleapis.com.
     *
     * Schemes other than `http`, `https` (or the empty scheme) might be
     * used with implementation specific semantics.
     */
    e(this, "typeUrl");
    /** Must be a valid serialized protocol buffer of the above specified type. */
    e(this, "value");
    this.typeUrl = t, this.value = s;
  }
  static fromJSON(t) {
    return new p(O(t.typeUrl) ? String(t.typeUrl) : "", O(t.value) ? ie(t.value) : new Uint8Array(0));
  }
  toJSON() {
    const t = {};
    return this.typeUrl !== "" && (t.typeUrl = this.typeUrl), this.value.length !== 0 && (t.value = re(this.value)), t;
  }
  static create(t) {
    return p.fromPartial(t ?? {});
  }
  static fromPartial(t) {
    const s = new p("", new Uint8Array(0));
    return s.typeUrl = t.typeUrl ?? "", s.value = t.value ?? new Uint8Array(0), s;
  }
}
const l = (() => {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw "Unable to locate global object";
})();
function ie(n) {
  if (l.Buffer)
    return Uint8Array.from(l.Buffer.from(n, "base64"));
  {
    const t = l.atob(n), s = new Uint8Array(t.length);
    for (let o = 0; o < t.length; ++o)
      s[o] = t.charCodeAt(o);
    return s;
  }
}
function re(n) {
  if (l.Buffer)
    return l.Buffer.from(n).toString("base64");
  {
    const t = [];
    return n.forEach((s) => {
      t.push(String.fromCharCode(s));
    }), l.btoa(t.join(""));
  }
}
function O(n) {
  return n != null;
}
class le {
  /**
   * Constructs a new CategoryMetricsFinancialSubProfile instance.
   *
   * @param data - Initialization data for the financial sub-profile.
   */
  constructor(t = {}) {
    e(this, "month", 0);
    e(this, "personalFinanceCategoryPrimary", "");
    e(this, "transactionCount", "0");
    e(this, "spentLastWeek", 0);
    e(this, "spentLastTwoWeeks", 0);
    e(this, "spentLastMonth", 0);
    e(this, "spentLastSixMonths", 0);
    e(this, "spentLastYear", 0);
    e(this, "spentLastTwoYears", 0);
    e(this, "userId", "0");
    t && Object.assign(this, {
      ...t
    });
  }
}
class he {
  /**
   * Constructs a new CategoryMonthlyExpenditure instance.
   *
   * @param data - Initialization data for the monthly expenditure.
   */
  constructor(t = {}) {
    e(this, "month", 0);
    e(this, "personalFinanceCategoryPrimary", "");
    e(this, "totalSpending", 0);
    e(this, "userId", "0");
    t && Object.assign(this, {
      ...t
    });
  }
}
class ge {
  /**
   * Constructs a new CategoryMonthlyIncome instance.
   *
   * @param data - Initialization data for the monthly income.
   */
  constructor(t) {
    e(this, "month", 0);
    e(this, "personalFinanceCategoryPrimary", "");
    e(this, "totalIncome", 0);
    e(this, "userId", "0");
    t && Object.assign(this, {
      ...t
    });
  }
}
class pe {
  /**
   * Constructs a new CategoryMonthlyTransactionCount instance.
   *
   * @param data - Initialization data for the monthly transaction count.
   */
  constructor(t = {}) {
    e(this, "month", 0);
    e(this, "personalFinanceCategoryPrimary", "");
    e(this, "transactionCount", 0);
    e(this, "userId", "0");
    t && Object.assign(this, {
      ...t
    });
  }
}
class de {
  /**
   * Constructs a new DebtToIncomeRatio instance.
   *
   * @param data - Initialization data for the debt to income ratio.
   */
  constructor(t = {}) {
    e(this, "month");
    e(this, "ratio");
    e(this, "userId");
    this.month = t.month ?? 0, this.ratio = t.ratio ?? 0, this.userId = t.userId ?? "0";
  }
}
class ye {
  /**
   * Constructs a new ExpenseMetricsFinancialSubProfileMetrics instance.
   *
   * @param data - Initialization data for the financial sub profile metrics.
   */
  constructor(t = {}) {
    e(this, "month");
    e(this, "spentLastWeek");
    e(this, "spentLastMonth");
    e(this, "spentLastSixMonths");
    e(this, "averageMonthlyDiscretionarySpending");
    e(this, "averageMonthlyRecurringSpending");
    e(this, "userId");
    this.month = t.month ?? 0, this.spentLastWeek = t.spentLastWeek ?? 0, this.spentLastMonth = t.spentLastMonth ?? 0, this.spentLastSixMonths = t.spentLastSixMonths ?? 0, this.averageMonthlyDiscretionarySpending = t.averageMonthlyDiscretionarySpending ?? 0, this.averageMonthlyRecurringSpending = t.averageMonthlyRecurringSpending ?? 0, this.userId = t.userId ?? "0";
  }
}
class R {
  /**
   * Constructs a new ExpenseMetrics instance.
   *
   * @param data - Initialization data for the expense metrics.
   */
  constructor(t = {}) {
    e(this, "month");
    e(this, "personalFinanceCategoryPrimary");
    e(this, "transactionCount");
    e(this, "totalExpenses");
    e(this, "userId");
    this.month = t.month ?? 0, this.personalFinanceCategoryPrimary = t.personalFinanceCategoryPrimary ?? "", this.transactionCount = t.transactionCount ?? "0", this.totalExpenses = t.totalExpenses ?? 0, this.userId = t.userId ?? "0";
  }
  /**
   * Creates a random instance of the expense metrics class with all fields populated.
   * @returns {ExpenseMetrics} A random ExpenseMetrics.
   */
  static randomInstance() {
    const t = [
      "Dining",
      "Travel",
      "Groceries",
      "Entertainment",
      "Utilities",
      "Rent",
      "Shopping",
      "Transportation",
      "Healthcare",
      "Education"
      // ... add any other categories here
    ], s = t[Math.floor(Math.random() * t.length)];
    return new R({
      month: r(1, 12),
      // randomize the category
      personalFinanceCategoryPrimary: s,
      transactionCount: Math.floor(Math.random() * 100).toString(),
      totalExpenses: Math.floor(Math.random() * 1e4),
      userId: "123"
    });
  }
}
class G {
  /**
   * Constructs a new FinancialProfileMetrics instance.
   *
   * @param data - Initialization data for the financial profile.
   */
  constructor(t = {}) {
    t && Object.assign(this, {
      ...t
    });
  }
  static randomInstance() {
    const t = () => Math.floor(Math.random() * 12) + 1, s = [
      "Dining",
      "Entertainment",
      "Groceries",
      "Travel",
      "Utilities",
      "Rent"
    ], o = () => s[Math.floor(Math.random() * s.length)], c = () => parseFloat((Math.random() * 1e4).toFixed(2)), H = () => Math.floor(Math.random() * 1e3).toString();
    return new G({
      month: t(),
      mostExpensiveCategory: o(),
      numberOfTransactions: H(),
      totalExpenses: c(),
      totalIncome: c(),
      userId: Math.floor(Math.random() * 1e5).toString()
    });
  }
}
class Ie {
  /**
   * Constructs a new IncomeExpenseRatio instance.
   *
   * @param data - Initialization data for the income-expense ratio.
   */
  constructor(t = {}) {
    e(this, "month");
    e(this, "ratio");
    e(this, "userId");
    this.month = t.month ?? 0, this.ratio = t.ratio ?? 0, this.userId = t.userId ?? "0";
  }
}
class fe {
  /**
   * Constructs a new IncomeMetricsFinancialSubProfile instance.
   *
   * @param data - Initialization data for the income metrics.
   */
  constructor(t = {}) {
    e(this, "month");
    e(this, "incomeLastTwoWeeks");
    e(this, "incomeLastMonth");
    e(this, "incomeLastTwoMonths");
    e(this, "incomeLastSixMonths");
    e(this, "incomeLastYear");
    e(this, "userId");
    this.month = t.month ?? 0, this.incomeLastTwoWeeks = t.incomeLastTwoWeeks ?? 0, this.incomeLastMonth = t.incomeLastMonth ?? 0, this.incomeLastTwoMonths = t.incomeLastTwoMonths ?? 0, this.incomeLastSixMonths = t.incomeLastSixMonths ?? 0, this.incomeLastYear = t.incomeLastYear ?? 0, this.userId = t.userId ?? "0";
  }
}
class _ {
  /**
   * Constructs a new IncomeMetrics instance.
   *
   * @param data - Initialization data for the income metrics.
   */
  constructor(t = {}) {
    e(this, "month");
    e(this, "personalFinanceCategoryPrimary");
    e(this, "transactionCount");
    e(this, "totalIncome");
    e(this, "userId");
    this.month = t.month ?? 0, this.personalFinanceCategoryPrimary = t.personalFinanceCategoryPrimary ?? "", this.transactionCount = t.transactionCount ?? "0", this.totalIncome = t.totalIncome ?? 0, this.userId = t.userId ?? "0";
  }
  /**
   * Creates a random instance of the income metrics class with all fields populated.
   * @returns {IncomeMetrics} A random IncomeMetrics.
   */
  static randomInstance() {
    const t = [
      "Dining",
      "Travel",
      "Groceries",
      "Entertainment",
      "Utilities",
      "Rent",
      "Shopping",
      "Transportation",
      "Healthcare",
      "Education"
      // ... add any other categories here
    ], s = t[Math.floor(Math.random() * t.length)];
    return new _({
      month: r(1, 12),
      // randomize the category
      personalFinanceCategoryPrimary: s,
      transactionCount: Math.floor(Math.random() * 100).toString(),
      totalIncome: Math.floor(Math.random() * 1e4),
      userId: "123"
    });
  }
}
class be {
  /**
   * Constructs a new InvestmentTransaction instance.
   *
   * @param data - Initialization data for the investment transaction.
   */
  constructor(t = {}) {
    e(this, "accountId");
    e(this, "ammount");
    e(this, "investmentTransactionId");
    e(this, "securityId");
    e(this, "currentDate");
    e(this, "name");
    e(this, "quantity");
    e(this, "amount");
    e(this, "price");
    e(this, "fees");
    e(this, "type");
    e(this, "subtype");
    e(this, "isoCurrencyCode");
    e(this, "unofficialCurrencyCode");
    e(this, "linkId");
    e(this, "id");
    e(this, "userId");
    e(this, "createdAt");
    e(this, "sign");
    e(this, "time");
    e(this, "additionalProperties");
    this.accountId = t.accountId ?? "", this.ammount = t.ammount ?? "", this.investmentTransactionId = t.investmentTransactionId ?? "", this.securityId = t.securityId ?? "", this.currentDate = t.currentDate ?? "", this.name = t.name ?? "", this.quantity = t.quantity ?? 0, this.amount = t.amount ?? 0, this.price = t.price ?? 0, this.fees = t.fees ?? 0, this.type = t.type ?? "", this.subtype = t.subtype ?? "", this.isoCurrencyCode = t.isoCurrencyCode ?? "", this.unofficialCurrencyCode = t.unofficialCurrencyCode ?? "", this.linkId = t.linkId ?? 0, this.id = t.id ?? "", this.userId = t.userId ?? 0, this.createdAt = t.createdAt ?? "", this.sign = t.sign ?? 0, this.time = t.time instanceof Date ? t.time : void 0, this.additionalProperties = t.additionalProperties;
  }
}
class Se {
  /**
   * Constructs a new LocationFinancialSubProfile instance.
   *
   * @param data - Initialization data for the location financial sub profile.
   */
  constructor(t = {}) {
    e(this, "locationCity");
    e(this, "transactionCount");
    e(this, "spentLastWeek");
    e(this, "spentLastTwoWeeks");
    e(this, "spentLastMonth");
    e(this, "spentLastSixMonths");
    e(this, "spentLastYear");
    e(this, "spentLastTwoYears");
    e(this, "userId");
    e(this, "month");
    this.locationCity = t.locationCity ?? "", this.transactionCount = t.transactionCount ?? "0", this.spentLastWeek = t.spentLastWeek ?? 0, this.spentLastTwoWeeks = t.spentLastTwoWeeks ?? 0, this.spentLastMonth = t.spentLastMonth ?? 0, this.spentLastSixMonths = t.spentLastSixMonths ?? 0, this.spentLastYear = t.spentLastYear ?? 0, this.spentLastTwoYears = t.spentLastTwoYears ?? 0, this.userId = t.userId ?? "0", this.month = t.month ?? 0;
  }
}
class v {
  /**
   * Creates an instance of MelodyFinancialContext.
   * @param data - Object containing properties for MelodyFinancialContext.
   */
  constructor(t) {
    e(this, "categories", []);
    e(this, "expenses", []);
    e(this, "income", []);
    e(this, "locations", []);
    e(this, "merchants", []);
    e(this, "paymentChannels", []);
    e(this, "bankAccounts", []);
    e(this, "investmentAccounts", []);
    e(this, "creditAccounts", []);
    e(this, "mortgageLoanAccounts", []);
    e(this, "studentLoanAccounts", []);
    Object.assign(this, t);
  }
}
class Ce {
  /**
   * Constructs a new MerchantMetricsFinancialSubProfile instance.
   *
   * @param data - Initialization data for the merchant financial sub profile.
   */
  constructor(t = {}) {
    e(this, "merchantName");
    e(this, "spentLastWeek");
    e(this, "spentLastTwoWeeks");
    e(this, "spentLastMonth");
    e(this, "spentLastSixMonths");
    e(this, "spentLastYear");
    e(this, "spentLastTwoYears");
    e(this, "userId");
    e(this, "month");
    this.merchantName = t.merchantName ?? "", this.spentLastWeek = t.spentLastWeek ?? 0, this.spentLastTwoWeeks = t.spentLastTwoWeeks ?? 0, this.spentLastMonth = t.spentLastMonth ?? 0, this.spentLastSixMonths = t.spentLastSixMonths ?? 0, this.spentLastYear = t.spentLastYear ?? 0, this.spentLastTwoYears = t.spentLastTwoYears ?? 0, this.userId = t.userId ?? "0", this.month = t.month ?? 0;
  }
}
class Pe {
  /**
   * Constructs a new MerchantMonthlyExpenditure instance.
   *
   * @param data - Initialization data for the merchant monthly expenditure.
   */
  constructor(t = {}) {
    e(this, "month");
    e(this, "merchantName");
    e(this, "totalSpending");
    e(this, "userId");
    this.month = t.month ?? 0, this.merchantName = t.merchantName ?? "", this.totalSpending = t.totalSpending ?? 0, this.userId = t.userId ?? "0";
  }
}
class Ae {
  /**
   * Constructs a new MonthlyBalance instance.
   *
   * @param data - Initialization data for the monthly balance.
   */
  constructor(t = {}) {
    e(this, "month");
    e(this, "netBalance");
    e(this, "userId");
    this.month = t.month ?? 0, this.netBalance = t.netBalance ?? 0, this.userId = t.userId ?? "0";
  }
}
class Me {
  /**
   * Constructs a new MonthlyExpenditure instance.
   *
   * @param data - Initialization data for the monthly expenditure.
   */
  constructor(t = {}) {
    e(this, "month");
    e(this, "totalSpending");
    e(this, "userId");
    this.month = t.month ?? 0, this.totalSpending = t.totalSpending ?? 0, this.userId = t.userId ?? "0";
  }
}
class Ne {
  /**
   * Constructs a new MonthlyIncome instance.
   *
   * @param data - Initialization data for the monthly income.
   */
  constructor(t = {}) {
    e(this, "month");
    e(this, "totalIncome");
    e(this, "userId");
    this.month = t.month ?? 0, this.totalIncome = t.totalIncome ?? 0, this.userId = t.userId ?? "0";
  }
}
class Te {
  /**
   * Constructs a new MonthlySavings instance.
   *
   * @param data - Initialization data for the monthly savings.
   */
  constructor(t = {}) {
    e(this, "month");
    e(this, "netSavings");
    e(this, "userId");
    this.month = t.month ?? 0, this.netSavings = t.netSavings ?? 0, this.userId = t.userId ?? "0";
  }
}
class xe {
  /**
   * Constructs a new MonthlyTotalQuantityBySecurityAndUser instance.
   *
   * @param data - Initialization data for the monthly total quantity by security and user.
   */
  constructor(t = {}) {
    e(this, "month");
    e(this, "securityId");
    e(this, "totalQuantity");
    e(this, "userId");
    this.month = t.month ?? 0, this.securityId = t.securityId || "", this.totalQuantity = t.totalQuantity ?? 0, this.userId = t.userId ?? "0";
  }
}
class De {
  /**
   * Constructs a new MonthlyTransactionCount instance.
   *
   * @param data - Initialization data for the monthly transaction count.
   */
  constructor(t = {}) {
    e(this, "month");
    e(this, "transactionCount");
    e(this, "userId");
    this.month = t.month ?? 0, this.transactionCount = t.transactionCount ?? "0", this.userId = t.userId ?? "0";
  }
}
class we {
  /**
   * Constructs a new PaymentChannelMetricsFinancialSubProfile instance.
   *
   * @param data - Initialization data for the financial sub profile of the payment channel.
   */
  constructor(t = {}) {
    e(this, "paymentChannel");
    e(this, "spentLastWeek");
    e(this, "spentLastTwoWeeks");
    e(this, "spentLastMonth");
    e(this, "spentLastSixMonths");
    e(this, "spentLastYear");
    e(this, "spentLastTwoYears");
    e(this, "userId");
    e(this, "month");
    e(this, "transactionCount");
    this.paymentChannel = t.paymentChannel ?? "", this.spentLastWeek = t.spentLastWeek ?? 0, this.spentLastTwoWeeks = t.spentLastTwoWeeks ?? 0, this.spentLastMonth = t.spentLastMonth ?? 0, this.spentLastSixMonths = t.spentLastSixMonths ?? 0, this.spentLastYear = t.spentLastYear ?? 0, this.spentLastTwoYears = t.spentLastTwoYears ?? 0, this.userId = t.userId ?? "0", this.month = t.month ?? 0, this.transactionCount = t.transactionCount ?? "0";
  }
}
class Oe {
  /**
   * Constructs a new PaymentChannelMonthlyExpenditure instance.
   *
   * @param data - Initialization data for the monthly expenditure of the payment channel.
   */
  constructor(t = {}) {
    e(this, "month");
    e(this, "paymentChannel");
    e(this, "totalSpending");
    e(this, "userId");
    this.month = t.month ?? 0, this.paymentChannel = t.paymentChannel ?? "", this.totalSpending = t.totalSpending ?? 0, this.userId = t.userId ?? "0";
  }
}
class B {
  /**
   * Creates an instance of ReOccuringTransaction.
   * @param data - Object containing properties for ReOccuringTransaction.
   * @example
   * const transactionData = {
   *   accountId: 'account123',
   *   description: 'Monthly subscription',
   *   // Add other properties here
   * };
   * const recurringTransaction = new ReOccuringTransaction(transactionData);
   */
  constructor(t) {
    /** The unique identifier of the account associated with the transaction. */
    e(this, "accountId", "");
    /** The unique identifier of the transaction stream. */
    e(this, "streamId", "");
    /** The unique identifier of the category associated with the transaction. */
    e(this, "categoryId", "");
    /** A description of the transaction. */
    e(this, "description", "");
    /** The name of the merchant. */
    e(this, "merchantName", "");
    /** The primary personal finance category of the transaction. */
    e(this, "personalFinanceCategoryPrimary", "");
    /** The detailed personal finance category of the transaction. */
    e(this, "personalFinanceCategoryDetailed", "");
    /** The date of the first occurrence of the transaction. */
    e(this, "firstDate", "");
    /** The date of the last occurrence of the transaction. */
    e(this, "lastDate", "");
    /** The frequency of the recurring transaction. */
    e(this, "frequency", "RE_OCCURING_TRANSACTIONS_FREQUENCY_UNSPECIFIED");
    /** A comma-separated list of transaction IDs. */
    e(this, "transactionIds", "");
    /** The average amount of the transaction. */
    e(this, "averageAmount", "");
    /** The ISO currency code of the average amount. */
    e(this, "averageAmountIsoCurrencyCode", "");
    /** The amount of the last occurrence of the transaction. */
    e(this, "lastAmount", "");
    /** The ISO currency code of the last amount. */
    e(this, "lastAmountIsoCurrencyCode", "");
    /** Indicates whether the transaction is active. */
    e(this, "isActive", !1);
    /** The status of the recurring transaction. */
    e(this, "status", "RE_OCCURING_TRANSACTIONS_STATUS_UNSPECIFIED");
    /** The last time the transaction was updated. */
    e(this, "updatedTime", "");
    /** The unique identifier of the user associated with the transaction. */
    e(this, "userId", "0");
    /** The unique identifier of the linked transaction. */
    e(this, "linkId", "0");
    /** The unique identifier of the transaction. */
    e(this, "id", "");
    /** The flow of the recurring transaction. */
    e(this, "flow", "RE_CURRING_FLOW_UNSPECIFIED");
    /** A numerical sign associated with the transaction. */
    e(this, "sign", 0);
    /** The date and time of the transaction. */
    e(this, "time");
    /** Additional properties associated with the transaction. */
    e(this, "additionalProperties");
    t && Object.assign(this, {
      ...t,
      time: t.time ? new Date(t.time) : void 0
    });
  }
  static randomInstance() {
    return new B({
      accountId: "account123",
      streamId: "stream123",
      categoryId: "category123",
      description: "Monthly subscription",
      merchantName: "StreamFlix",
      personalFinanceCategoryPrimary: "Entertainment",
      personalFinanceCategoryDetailed: "Streaming Services",
      firstDate: "2020-01-01",
      lastDate: "2020-12-31",
      frequency: "RE_OCCURING_TRANSACTIONS_FREQUENCY_WEEKLY",
      transactionIds: "transaction123",
      averageAmount: "14.99",
      averageAmountIsoCurrencyCode: "USD",
      lastAmount: "14.99",
      lastAmountIsoCurrencyCode: "USD",
      isActive: !0,
      status: "RE_OCCURING_TRANSACTIONS_STATUS_MATURE",
      updatedTime: "2020-01-01",
      userId: "123",
      linkId: "123",
      id: "transaction123",
      flow: "RE_CURRING_FLOW_INFLOW",
      sign: 0,
      time: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
}
class ve {
  /**
   * Creates an instance of TotalInvestmentBySecurity.
   *
   * @param data - Object containing properties for TotalInvestmentBySecurity.
   */
  constructor(t) {
    e(this, "securityId", "");
    e(this, "totalInvestment", 0);
    e(this, "userId", "");
    t && Object.assign(this, {
      ...t
    });
  }
}
class Le {
  /**
   * Creates an instance of TransactionAggregatesByMonth.
   * @param data - Object containing properties for TransactionAggregatesByMonth.
   */
  constructor(t) {
    e(this, "month", 0);
    e(this, "personalFinanceCategoryPrimary", "");
    e(this, "locationCity", "");
    e(this, "paymentChannel", "");
    e(this, "merchantName", "");
    e(this, "transactionCount", "");
    e(this, "totalAmount", 0);
    e(this, "userId", "");
    Object.assign(this, t);
  }
}
class Y {
  // Replaced 'any' with 'string[]' as TypeScript uses 'any'
  /**
   * Creates an instance of Transaction.
   *
   * @param data - Object with details for Transaction.
   */
  constructor(t) {
    e(this, "accountId", "");
    e(this, "amount", 0);
    e(this, "isoCurrencyCode", "");
    e(this, "unofficialCurrencyCode", "");
    e(this, "categoryId", "");
    e(this, "checkNumber", "");
    e(this, "currentDate", "");
    e(this, "currentDatetime", "");
    e(this, "authorizedDate", "");
    e(this, "authorizedDatetime", "");
    e(this, "name", "");
    e(this, "merchantName", "");
    e(this, "paymentChannel", "");
    e(this, "pending", !1);
    e(this, "pendingTransactionId", "");
    e(this, "accountOwner", "");
    e(this, "transactionId", "");
    e(this, "transactionCode", "");
    e(this, "id", "");
    e(this, "userId", "0");
    e(this, "linkId", "0");
    e(this, "sign", 0);
    e(this, "personalFinanceCategoryPrimary", "");
    e(this, "personalFinanceCategoryDetailed", "");
    e(this, "locationAddress", "");
    e(this, "locationCity", "");
    e(this, "locationRegion", "");
    e(this, "locationPostalCode", "");
    e(this, "locationCountry", "");
    e(this, "locationLat", 0);
    e(this, "locationLon", 0);
    e(this, "locationStoreNumber", "");
    e(this, "paymentMetaByOrderOf", "");
    e(this, "paymentMetaPayee", "");
    e(this, "paymentMetaPayer", "");
    e(this, "paymentMetaPaymentMethod", "");
    e(this, "paymentMetaPaymentProcessor", "");
    e(this, "paymentMetaPpdId", "");
    e(this, "paymentMetaReason", "");
    e(this, "paymentMetaReferenceNumber", "");
    e(this, "time");
    e(this, "additionalProperties");
    // Replaced 'Any' with 'any' as TypeScript uses 'any'
    e(this, "categories", []);
    Object.assign(this, t), this.time = t.time ? new Date(t.time).toISOString() : "";
  }
  static randomInstance() {
    return new Y({
      accountId: i(10),
      amount: r(1, 1e4),
      isoCurrencyCode: "USD",
      unofficialCurrencyCode: i(3),
      categoryId: i(5),
      checkNumber: i(8),
      currentDate: u(new Date(2022, 0, 1), /* @__PURE__ */ new Date()).slice(0, 10),
      currentDatetime: u(new Date(2022, 0, 1), /* @__PURE__ */ new Date()),
      authorizedDate: u(new Date(2022, 0, 1), /* @__PURE__ */ new Date()).slice(0, 10),
      authorizedDatetime: u(new Date(2022, 0, 1), /* @__PURE__ */ new Date()),
      name: i(20),
      merchantName: d([
        "Amazon",
        "Pizza Hut",
        "Duane Reades",
        "Fresh Grocer",
        "Walmart",
        "Subway",
        "Amtrak",
        "Best Buy",
        "Starbucks",
        "McDonald's",
        "Apple Store",
        "Nike",
        "Adidas",
        "Home Depot",
        "Target"
      ]),
      paymentChannel: r(0, 2) === 0 ? "online" : "in-store",
      pending: !!r(0, 2),
      pendingTransactionId: i(10),
      accountOwner: i(15),
      transactionId: i(10),
      transactionCode: i(5),
      id: i(10),
      userId: r(1, 1e4).toString(),
      linkId: r(1, 1e4).toString(),
      sign: r(0, 2) === 0 ? -1 : 1,
      personalFinanceCategoryPrimary: d([
        "Food",
        "Rent",
        "Transportation",
        "Entertainment",
        "Miscellaneous"
      ]),
      personalFinanceCategoryDetailed: i(15),
      locationAddress: i(30),
      locationCity: i(15),
      locationRegion: i(10),
      locationPostalCode: i(5),
      locationCountry: "US",
      locationLat: Math.random() * 180 - 90,
      locationLon: Math.random() * 360 - 180,
      locationStoreNumber: i(5),
      paymentMetaByOrderOf: i(10),
      paymentMetaPayee: i(10),
      paymentMetaPayer: i(10),
      paymentMetaPaymentMethod: "Card",
      paymentMetaPaymentProcessor: i(10),
      paymentMetaPpdId: i(10),
      paymentMetaReason: i(20),
      paymentMetaReferenceNumber: i(8),
      time: new Date(2022, 0, 1).toISOString(),
      categories: [i(10), i(10)]
    });
  }
}
class Ee {
  /**
   * Creates an instance of UserFinancialHealthMetricsTable.
   * @param data - Object containing properties for UserFinancialHealthMetricsTable.
   */
  constructor(t) {
    e(this, "time");
    e(this, "userId", 0);
    e(this, "monthlyIncome", 0);
    e(this, "monthlyExpenses", 0);
    e(this, "transactionDiversity", 0);
    e(this, "debtToIncomeRatio", 0);
    e(this, "overdraftFrequency", 0);
    Object.assign(this, {
      ...t,
      time: t.time ? new Date(t.time) : void 0
    });
  }
}
class g {
  /**
   * A constructor function that takes in a data object and assigns the data to the UserAccount class.
   * @param [data] - The data that you want to assign to the object.
   */
  constructor(t) {
    e(this, "address", new J());
    e(this, "bio", "");
    e(this, "email", "");
    e(this, "firstname");
    e(this, "lastname");
    e(this, "username", "");
    e(this, "headline");
    e(this, "phoneNumber");
    e(this, "userAccountID");
    e(this, "userAuthnAccountID");
    e(this, "id", "");
    e(this, "tags", []);
    e(this, "created_at");
    e(this, "isEmailVerified");
    e(this, "isPrivate");
    e(this, "verifiedAt");
    e(this, "isActive");
    e(this, "authnAccountId");
    e(this, "createdAt");
    var s;
    t && Object.assign(this, {
      ...t,
      // address: new Address(data?.address),
      tags: (s = t == null ? void 0 : t.tags) == null ? void 0 : s.map((o) => new X(o)),
      id: (t == null ? void 0 : t.userAccountID) !== void 0 ? t == null ? void 0 : t.userAccountID : t == null ? void 0 : t.id,
      authnAccountId: ((t == null ? void 0 : t.authnAccountId) !== void 0, t == null ? void 0 : t.authnAccountId)
    });
  }
  /**
   * Returns the username of the account
   *
   * @return {*}  {string}
   * @memberof UserAccount
   */
  getUserName() {
    return this.username;
  }
  /**
   * Returns the tags associated with a given account
   *
   * @return {*}  {Tag[]}
   * @memberof UserAccount
   */
  getTags() {
    return this.tags;
  }
  /**
   * Returns the number of tags associated with a given account
   *
   * @return {*}  {number}
   * @memberof UserAccount
   */
  getTagCount() {
    return this.tags.length;
  }
  /**
   * Deciphers wether the account has a verified email or not
   *
   * @return {*}  {boolean}
   * @memberof UserAccount
   */
  isAccountVerified() {
    return this.isEmailVerified && this.isActive;
  }
  /**
   * Deciphers wether the account's content should be shown or not
   *
   * @return {*}  {boolean}
   * @memberof UserAccount
   */
  shouldShowContent() {
    return this.isActive && !this.isPrivate;
  }
  /**
   * Obtains the bio of the account
   *
   * @return {*}  {string}
   * @memberof UserAccount
   */
  getBio() {
    return this.bio;
  }
  /**
   * Obtains the headline of the account
   *
   * @return {*}  {string}
   * @memberof UserAccount
   */
  getHeadline() {
    return this.headline;
  }
  /**
   * @description Returns the ID of the account
   * @author Yoan Yomba
   * @returns {*}  {string}
   * @memberof UserAccount
   */
  getID() {
    return this.id;
  }
}
class W {
  constructor(t) {
    /** the id of the blocked record */
    e(this, "id", "0");
    e(this, "postIds", []);
    e(this, "publications", []);
    t && Object.assign(this, {
      ...t
    });
  }
}
const ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BookmarkClass: W
}, Symbol.toStringTag, { value: "Module" }));
class h {
  constructor(t) {
    /** User profile ID */
    e(this, "id", "0");
    /** Tags are interests */
    e(this, "tags", []);
    /**
     * Profile name is the name tied to the user profile
     * user name must be at least 5 characters long
     */
    e(this, "name", "");
    /**
     * Private defines wether only approved followers can see what this profile
     * posts
     */
    e(this, "private", !1);
    /** Followers outlines the number of followers this user profile has */
    e(this, "followers", "0");
    /** Number of people account is following */
    e(this, "following", "0");
    /**
     * Notification timeline Id. Notification for anything a user/group is
     * following
     */
    e(this, "notificationFeedTimelineId", "");
    /** Personal timeline ID Has activities for a user that can be followed */
    e(this, "personalFeedTimelineId", "");
    /**
     * Newsfeed timeline ID Displays all followed and group activities the user
     * follows
     */
    e(this, "newsFeedTimelineId", "");
    /** ProfileImageUrl witholds the url of a given profile image */
    e(this, "profileImageUrl", "");
    /** all the bookmarked pieces of content on the platform */
    e(this, "bookmarks", new W({}));
    /** The id of the algolia record referencing this user */
    e(this, "algoliaId", "");
    t && Object.assign(this, {
      ...t
    });
  }
}
class Ue {
  constructor(t) {
    e(this, "id", "0");
    e(this, "postIds", []);
    e(this, "admin");
    e(this, "adminSimfinyPlatformUserId", "");
    e(this, "tags", []);
    e(this, "editors", []);
    e(this, "subjects", []);
    e(this, "description", "");
    e(this, "createdAt", "");
    e(this, "type", "PUBLICATION_TYPE_UNSPECIFIED");
    e(this, "publicationName", "");
    var s;
    t && Object.assign(this, {
      ...t,
      admin: (t == null ? void 0 : t.admin) !== void 0 ? new h(t.admin) : null,
      editors: (s = t == null ? void 0 : t.editors) == null ? void 0 : s.map((o) => new h(o))
    });
  }
}
class Fe {
  /**
   * Creates an instance of Profile.
   *
   * @constructor
   * @param {?Partial<Profile>} [data]
   */
  constructor(t) {
    /**
     * The number of followers this profile has.
     *
     * @type {string}
     */
    e(this, "followers", "");
    /**
     * The number of users this profile is following.
     *
     * @type {string}
     */
    e(this, "following", "");
    /**
     * the id of the profile
     *
     * @type {string}
     */
    e(this, "id", "");
    /**
     * this is the username of the profile
     *
     * @type {string}
     */
    e(this, "name", "");
    /**
     * The set of tags associated to this profile
     *
     * @type {Tag[]}
     */
    e(this, "tags", []);
    /**
     * Deliniates wether the profile is a private or public one
     *
     * @type {boolean}
     */
    e(this, "private", !1);
    /**
     * The profile image url.
     *
     * @type {string}
     */
    e(this, "profileImageUrl", "");
    /**
     * User profile id.
     * This is the id of the user that owns the profile.
     * NOTE: this is the same as the id field referenced above.
     * However we are keeping this field for backwards compatibility.
     *
     * @type {string}
     */
    e(this, "userProfileid", "");
    e(this, "bookmarks");
    t && Object.assign(this, {
      ...t,
      tags: (t == null ? void 0 : t.tags) || []
    });
  }
  /**
   * Checks if the profile is private.
   * @returns {boolean} True if the profile is private, false otherwise.
   */
  isPrivate() {
    return this.private;
  }
  /**
   * Deciphers wether or not to show the profile's content
   * @returns {boolean} True if the profile is not private, false otherwise.
   */
  shouldShowContent() {
    return !this.isPrivate();
  }
  /**
   * Gets the profile image url.
   *
   * @returns {string} The profile image url.
   */
  getProfileImageUrl() {
    return this.profileImageUrl;
  }
  /**
   * Gets the tags of the profile.
   *
   * @returns {(Tag[] | string[])} The tags of the profile.
   */
  getTags() {
    return this.tags;
  }
  /**
   * Gets the number of tags the profile has.
   *
   * @returns {number} The number of tags the profile has.
   */
  getTagCount() {
    return this.tags.length;
  }
  /**
   * Gets the tag names of the profile.
   * @returns {string[]} The tag names of the profile.
   */
  getTagNames() {
    return this.tags.map((t) => t.getName());
  }
  /**
   * Gets the number of followers this profile has.
   *
   * @returns {string} The number of followers this profile has.
   */
  getFollowerCount() {
    return Number(this.followers);
  }
  /**
   * Get the number of users following this profile.
   * @returns {string} The number of users following this profile.
   */
  getfollowingCount() {
    return Number(this.following);
  }
}
class je {
  constructor(t) {
    e(this, "Username", "");
    e(this, "Password", "");
    t && Object.assign(this, {
      ...t
    });
  }
  /*
   * Validates the authenticate request object.
   * Ensures the username and password fields are not empty
   *
   * @returns {boolean}
   *
   * @memberOf AuthenticateRequest
   * */
  isValid() {
    return this.Username !== "" && this.Password !== "";
  }
}
class ze extends a {
  constructor(s) {
    var o, c;
    super();
    e(this, "code", 0);
    e(this, "err", "");
    e(this, "token", "");
    e(this, "user_account", new g());
    e(this, "user_profile", new h({}));
    e(this, "user_financial_profile", {
      profile: new w(),
      financialContext: new v({})
    });
    s && Object.assign(this, {
      ...s,
      user_account: new g(s == null ? void 0 : s.user_account),
      user_profile: s.user_profile !== void 0 ? new h(s.user_profile) : new h({}),
      user_financial_profile: {
        profile: new w((o = s == null ? void 0 : s.user_financial_profile) == null ? void 0 : o.profile),
        financialContext: new v(((c = s == null ? void 0 : s.user_financial_profile) == null ? void 0 : c.financialContext) ?? {})
      }
    });
  }
}
class Re {
  constructor(t) {
    /** The email of the user of interest */
    e(this, "email", "");
    t && Object.assign(this, {
      ...t
    });
  }
}
class $ extends a {
  constructor(s) {
    super();
    e(this, "exists", !1);
    s && this.create(s);
  }
  create(s) {
    return this.fromPartial(s ?? {});
  }
  fromPartial(s) {
    const o = new $();
    return o.exists = s.exists ?? !1, o;
  }
}
class Ge {
  constructor(t) {
    /** The username of the user of interest */
    e(this, "username", "");
    t && Object.assign(this, {
      ...t
    });
  }
  /*
   * Validates the username of the user of interest in not
   * empty or invalid
   *
   * @returns {boolean}
   *
   * @memberOf CheckUsernameExistsRequest
   * */
  isValid() {
    return this.username !== "";
  }
}
class V extends a {
  constructor(s) {
    super();
    e(this, "exists", !1);
    s && this.create(s);
  }
  create(s) {
    return this.fromPartial(s ?? {});
  }
  fromPartial(s) {
    const o = new V();
    return o.exists = s.exists ?? !1, o;
  }
}
class L {
  constructor(t) {
    /** account id */
    e(this, "id", 0);
    /**
     * account email
     * Validations:
     * - must be an email and required
     */
    e(this, "email", "");
    /**
     * simple description specific to account should be less than 200 characters
     * Validations:
     * - can be empty
     */
    e(this, "bio", "");
    /**
     * profile headline
     * Validations:
     * - can be empty
     */
    e(this, "headline", "");
    /**
     * account phone number
     * Validations:
     * - mcan be empty
     */
    e(this, "phoneNumber", "");
    /**
     * sample tags easily associable to account
     * account first name
     * Validations:
     * - must be at provide between 1 and 10 tags
     */
    e(this, "tags", []);
    /** authentication service account id */
    e(this, "authnAccountId", 0);
    /** infers wether the account is active */
    e(this, "isActive", !1);
    /**
     * account first name
     * Validations:
     * - can be empty
     */
    e(this, "firstname", "");
    /**
     * account last name
     * Validations:
     * - can be empty
     */
    e(this, "lastname", "");
    /**
     * account user name
     * Validations:
     * - must be at least 10 character
     */
    e(this, "username", "");
    /** account is private */
    e(this, "isPrivate", !1);
    /**
     * isEmailVerified is a field denoting wether or not the user account has
     * indeed verified their email address
     */
    e(this, "isEmailVerified", !1);
    e(this, "createdAt");
    e(this, "verifiedAt");
    t && Object.assign(this, {
      ...t
    });
  }
  toJSON() {
    return {
      id: this.id,
      email: this.email,
      bio: this.bio,
      headline: this.headline,
      phoneNumber: this.phoneNumber,
      tags: this.tags,
      authnAccountId: this.authnAccountId,
      isActive: this.isActive,
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      isPrivate: this.isPrivate,
      isEmailVerified: this.isEmailVerified,
      createdAt: this.createdAt ? this.createdAt.toISOString() : void 0,
      verifiedAt: this.verifiedAt ? this.verifiedAt.toISOString() : void 0
    };
  }
}
class _e {
  constructor(t) {
    e(this, "account", new L());
    e(this, "communityIdsToFollow", []);
    e(this, "profileImage", "");
    e(this, "password", "");
    t && Object.assign(this, {
      ...t,
      account: new L(t == null ? void 0 : t.account)
    });
  }
  toJSON() {
    return {
      account: this.account.toJSON(),
      communityIdsToFollow: this.communityIdsToFollow,
      profileImage: this.profileImage,
      password: this.password
      // Note: Be cautious about serializing sensitive data like passwords
    };
  }
  /*
   * Validate the create account request object
   *
   * @returns {boolean}
   *
   * @memberOf CreateAccountRequest
   * */
  isValid() {
    return this.account.email.length > 0 && this.account.username.length > 0 && this.password.length > 10 && this.profileImage.length > 0;
  }
}
class Be extends a {
  constructor(s) {
    super();
    e(this, "accountBalanceHistory", []);
    s && Object.assign(this, {
      ...s
    });
  }
}
class Ye {
  /**
   * Creates a new instance of GetAccountBalanceHistoryRequest.
   * @param partialRequest Partial request object to initialize the GetAccountBalanceHistoryRequest.
   * @remarks You can use this constructor to create a partial instance of GetAccountBalanceHistoryRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The account ID associated with the request.
     */
    e(this, "plaidAccountId");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.plaidAccountId = t.plaidAccountId || "", this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class We {
  /**
   * Creates a new instance of GetCategoryMonthlyTransactionCountRequest.
   * @param partialRequest Partial request object to initialize the GetCategoryMonthlyTransactionCountRequest.
   * @remarks You can use this constructor to create a partial instance of GetCategoryMonthlyTransactionCountRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request (has to be present and defined).
     */
    e(this, "userId");
    /**
     * The month for which category monthly transaction count is requested (optional).
     */
    e(this, "month");
    /**
     * The primary personal finance category for filtering the records (optional).
     */
    e(this, "personalFinanceCategoryPrimary");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.month = t.month || 0, this.personalFinanceCategoryPrimary = t.personalFinanceCategoryPrimary || "", this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class $e extends a {
  constructor(s) {
    super();
    e(this, "categoryMonthlyTransactionCount", []);
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class Ve {
  /**
   * Creates a new instance of GetDebtToIncomeRatioRequest.
   * @param partialRequest Partial request object to initialize the GetDebtToIncomeRatioRequest.
   * @remarks You can use this constructor to create a partial instance of GetDebtToIncomeRatioRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The month for which debt to income ratio is requested (optional).
     */
    e(this, "month");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.month = t.month || void 0, this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class He extends a {
  /**
   * Creates a new instance of GetDebtToIncomeRatioResponse.
   * @param debtToIncomeRatios List of debt to income ratios.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(s) {
    super();
    /**
     * List of debt to income ratios.
     */
    e(this, "debtToIncomeRatios", []);
    /**
     * The page number of the next set of data.
     */
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class Ke {
  /**
   * Creates a new instance of GetExpenseMetricsRequest.
   * @param partialRequest Partial request object to initialize the GetExpenseMetricsRequest.
   * @remarks You can use this constructor to create a partial instance of GetExpenseMetricsRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The month for which expense metrics are requested (optional).
     */
    e(this, "month");
    /**
     * The primary personal finance category for filtering the records (optional).
     */
    e(this, "personalFinanceCategoryPrimary");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.month = t.month || void 0, this.personalFinanceCategoryPrimary = t.personalFinanceCategoryPrimary || "", this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class Qe extends a {
  /**
   * Creates a new instance of GetExpenseMetricsResponse.
   * @param expenseMetrics List of expense metrics.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(s) {
    super();
    /**
     * List of expense metrics.
     */
    e(this, "expenseMetrics", []);
    /**
     * The page number of the next set of data.
     */
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class Je extends a {
  /**
   * Creates a new instance of GetMelodyFinancialContextResponse.
   * @param melodyFinancialContext Melody financial context information.
   */
  constructor(s) {
    super();
    /**
     * Melody financial context information.
     */
    e(this, "melodyFinancialContext");
    s && Object.assign(this, {
      ...s
    });
  }
}
class Xe {
  /**
   * Creates a new instance of GetMelodyFinancialContextRequest.
   * @param userId The user ID associated with the request.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    this.userId = t;
  }
}
class Ze {
  /**
   * Creates a new instance of GetFinancialProfileRequest.
   * @param partialRequest Partial request object to initialize the GetFinancialProfileRequest.
   * @remarks You can use this constructor to create a partial instance of GetFinancialProfileRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The month for which financial profile is requested (optional).
     */
    e(this, "month");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.month = t.month || void 0, this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class qe extends a {
  /**
   * Creates a new instance of GetFinancialProfileResponse.
   * @param financialProfiles List of financial profiles.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(s) {
    super();
    /**
     * List of financial profiles.
     */
    e(this, "financialProfiles", []);
    /**
     * The page number of the next set of data.
     */
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class et {
  /**
   * Creates a new instance of GetIncomeExpenseRatioRequest.
   * @param partialRequest Partial request object to initialize the GetIncomeExpenseRatioRequest.
   * @remarks You can use this constructor to create a partial instance of GetIncomeExpenseRatioRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The month for which income expense ratio is requested (optional).
     */
    e(this, "month");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.month = t.month || void 0, this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class tt extends a {
  /**
   * Creates a new instance of GetIncomeExpenseRatioResponse.
   * @param incomeExpenseRatios List of income expense ratios.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(s) {
    super();
    /**
     * List of income expense ratios.
     */
    e(this, "incomeExpenseRatios", []);
    /**
     * The page number of the next set of data.
     */
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class st {
  /**
   * Creates a new instance of GetIncomeMetricsRequest.
   * @param partialRequest Partial request object to initialize the GetIncomeMetricsRequest.
   * @remarks You can use this constructor to create a partial instance of GetIncomeMetricsRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The month for which income metrics are requested (optional).
     */
    e(this, "month");
    /**
     * The primary personal finance category for filtering the records (optional).
     */
    e(this, "personalFinanceCategoryPrimary");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.month = t.month || void 0, this.personalFinanceCategoryPrimary = t.personalFinanceCategoryPrimary || "", this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class nt extends a {
  /**
   * Creates a new instance of GetIncomeMetricsResponse.
   * @param incomeMetrics List of income metrics.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(s) {
    super();
    /**
     * List of income metrics.
     */
    e(this, "incomeMetrics", []);
    /**
     * The page number of the next set of data.
     */
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class it {
  /**
   * Creates a new instance of GetMerchantMonthlyExpenditureRequest.
   * @param partialRequest Partial request object to initialize the GetMerchantMonthlyExpenditureRequest.
   * @remarks You can use this constructor to create a partial instance of GetMerchantMonthlyExpenditureRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The month for which merchant monthly expenditure is requested (optional).
     */
    e(this, "month");
    /**
     * The merchant name for filtering the records (optional).
     */
    e(this, "merchantName");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.month = t.month || void 0, this.merchantName = t.merchantName || "", this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class rt extends a {
  /**
   * Creates a new instance of GetMerchantMonthlyExpenditureResponse.
   * @param merchantMonthlyExpenditures List of merchant monthly expenditures.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(s) {
    super();
    /**
     * List of merchant monthly expenditures.
     */
    e(this, "merchantMonthlyExpenditures", []);
    /**
     * The page number of the next set of data.
     */
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class ot {
  /**
   * Creates a new instance of GetMonthlyBalanceRequest.
   * @param partialRequest Partial request object to initialize the GetMonthlyBalanceRequest.
   * @remarks You can use this constructor to create a partial instance of GetMonthlyBalanceRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The month for which monthly balance is requested (optional).
     */
    e(this, "month");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.month = t.month || void 0, this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class at extends a {
  /**
   * Creates a new instance of GetMonthlyBalanceResponse.
   * @param monthlyBalances List of monthly balances.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(s) {
    super();
    /**
     * List of monthly balances.
     */
    e(this, "monthlyBalances", []);
    /**
     * The page number of the next set of data.
     */
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class ct {
  /**
   * Creates a new instance of GetMonthlyExpenditureRequest.
   * @param partialRequest Partial request object to initialize the GetMonthlyExpenditureRequest.
   * @remarks You can use this constructor to create a partial instance of GetMonthlyExpenditureRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The month for which monthly expenditure is requested.
     */
    e(this, "month");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.month = t.month || 0, this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class ut extends a {
  /**
   * Creates a new instance of GetMonthlyExpenditureResponse.
   * @param monthlyExpenditures List of monthly expenditures.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(s) {
    super();
    /**
     * List of monthly expenditures.
     */
    e(this, "monthlyExpenditures", []);
    /**
     * The page number of the next set of data.
     */
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class mt {
  /**
   * Creates a new instance of GetMonthlyIncomeRequest.
   * @param partialRequest Partial request object to initialize the GetMonthlyIncomeRequest.
   * @remarks You can use this constructor to create a partial instance of GetMonthlyIncomeRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The month for which monthly income is requested.
     */
    e(this, "month");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.month = t.month || 0, this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class lt extends a {
  /**
   * Creates a new instance of GetMonthlyIncomeResponse.
   * @param monthlyIncomes List of monthly incomes.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(s) {
    super();
    /**
     * List of monthly incomes.
     */
    e(this, "monthlyIncomes", []);
    /**
     * The page number of the next set of data.
     */
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class ht {
  /**
   * Creates a new instance of GetMonthlySavingsRequest.
   * @param partialRequest Partial request object to initialize the GetMonthlySavingsRequest.
   * @remarks You can use this constructor to create a partial instance of GetMonthlySavingsRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The month for which monthly savings is requested.
     */
    e(this, "month");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.month = t.month || 0, this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class gt extends a {
  /**
   * Creates a new instance of GetMonthlySavingsResponse.
   * @param monthlySavings List of monthly savings.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(s) {
    super();
    /**
     * List of monthly savings.
     */
    e(this, "monthlySavings", []);
    /**
     * The page number of the next set of data.
     */
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class pt {
  /**
   * Creates a new instance of GetMonthlyTotalQuantityBySecurityAndUserRequest.
   * @param partialRequest Partial request object to initialize the GetMonthlyTotalQuantityBySecurityAndUserRequest.
   * @remarks You can use this constructor to create a partial instance of GetMonthlyTotalQuantityBySecurityAndUserRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The month for which monthly total quantity is requested.
     */
    e(this, "month");
    /**
     * The security ID for filtering the records.
     */
    e(this, "securityId");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.month = t.month || 0, this.securityId = t.securityId || "", this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class dt extends a {
  /**
   * Creates a new instance of GetMonthlyTotalQuantityBySecurityAndUserResponse.
   * @param monthlyTotalQuantityBySecurityAndUser List of monthly total quantity by security and user.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(s) {
    super();
    /**
     * List of monthly total quantity by security and user.
     */
    e(this, "monthlyTotalQuantityBySecurityAndUser", []);
    /**
     * The page number of the next set of data.
     */
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class yt {
  /**
   * Creates a new instance of GetMonthlyTransactionCountRequest.
   * @param partialRequest Partial request object to initialize the GetMonthlyTransactionCountRequest.
   * @remarks You can use this constructor to create a partial instance of GetMonthlyTransactionCountRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The month for which monthly transaction count is requested.
     */
    e(this, "month");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.month = t.month || 0, this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class It extends a {
  /**
   * Creates a new instance of GetMonthlyTransactionCountResponse.
   * @param monthlyTransactionCounts List of monthly transaction counts.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(s) {
    super();
    /**
     * List of monthly transaction counts.
     */
    e(this, "monthlyTransactionCounts", []);
    /**
     * The page number of the next set of data.
     */
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class ft {
  /**
   * Creates a new instance of GetPaymentChannelMonthlyExpenditureRequest.
   * @param partialRequest Partial request object to initialize the GetPaymentChannelMonthlyExpenditureRequest.
   * @remarks You can use this constructor to create a partial instance of GetPaymentChannelMonthlyExpenditureRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The month for which payment channel monthly expenditure is requested.
     */
    e(this, "month");
    /**
     * The payment channel for filtering the records.
     */
    e(this, "paymentChannel");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.month = t.month || 0, this.paymentChannel = t.paymentChannel || "", this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class bt extends a {
  /**
   * Creates a new instance of GetPaymentChannelMonthlyExpenditureResponse.
   * @param paymentChannelMonthlyExpenditure List of payment channel monthly expenditures.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(s) {
    super();
    /**
     * List of payment channel monthly expenditures.
     */
    e(this, "paymentChannelMonthlyExpenditure", []);
    /**
     * The page number of the next set of data.
     */
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class St {
  constructor(t) {
    /**
     * The user id
     * Validations:
     * - user_id must be greater than 0
     */
    e(this, "userId", 0);
    t && Object.assign(this, t);
  }
}
class Ct extends a {
  constructor(s) {
    super(s);
    e(this, "reCcuringTransactions", []);
    s != null && s.reCcuringTransactions && (this.reCcuringTransactions = s.reCcuringTransactions);
  }
}
class Pt {
  /**
   * Creates a new instance of GetTotalInvestmentBySecurityRequest.
   * @param partialRequest Partial request object to initialize the GetTotalInvestmentBySecurityRequest.
   * @remarks You can use this constructor to create a partial instance of GetTotalInvestmentBySecurityRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The security ID for filtering the records.
     */
    e(this, "securityId");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.securityId = t.securityId || "", this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class At extends a {
  /**
   * Creates a new instance of GetTotalInvestmentBySecurityResponse.
   * @param totalInvestmentBySecurity List of total investment by security.
   * @param nextPageNumber The page number of the next set of data.
   */
  constructor(s) {
    super();
    /**
     * List of total investment by security.
     */
    e(this, "totalInvestmentBySecurity", []);
    /**
     * The page number of the next set of data.
     */
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class Mt extends a {
  constructor(s) {
    super();
    e(this, "transactionAggregates", []);
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class Nt {
  /**
   * Creates a new instance of GetTransactionAggregatesRequest.
   * @param partialRequest Partial request object to initialize the GetTransactionAggregatesRequest.
   * @remarks You can use this constructor to create a partial instance of GetTransactionAggregatesRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The month for which transaction aggregates are requested (in the format YYYYMM).
     */
    e(this, "month");
    /**
     * The primary personal finance category for filtering the transactions.
     */
    e(this, "personalFinanceCategoryPrimary");
    /**
     * The city location for filtering the transactions.
     */
    e(this, "locationCity");
    /**
     * The payment channel for filtering the transactions.
     */
    e(this, "paymentChannel");
    /**
     * The merchant name for filtering the transactions.
     */
    e(this, "merchantName");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.month = t.month || 0, this.personalFinanceCategoryPrimary = t.personalFinanceCategoryPrimary || "", this.locationCity = t.locationCity || "", this.paymentChannel = t.paymentChannel || "", this.merchantName = t.merchantName || "", this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class Tt extends a {
  /**
   * Creates a new instance of GetTransactionsForBankAccountResponse.
   * @param transactions An array of transactions for the bank account.
   * @param nextPageNumber The page number of the next set of transactions.
   */
  constructor(s) {
    super();
    /**
     * An array of transactions for the bank account.
     */
    e(this, "transactions", []);
    /**
     * The page number of the next set of transactions.
     */
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class xt {
  /**
   * Create a request to get transactions for a bank account.
   * @param {Partial<GetTransactionsForBankAccountRequest>} data - Object containing any properties of a request.
   */
  constructor(t) {
    /** The user id */
    e(this, "userId", 0);
    /** Plaid account id */
    e(this, "plaidAccountId", "");
    /** Page number for paginated results */
    e(this, "pageNumber", 0);
    /** Page size for paginated results */
    e(this, "pageSize", 0);
    t && Object.assign(this, {
      ...t
    });
  }
}
class Dt {
  /**
   * Creates an instance of GetTransactionsRequest.
   *
   * @param data - The data to initialize the request.
   */
  constructor(t) {
    /**
     * The user ID.
     * Validations:
     * - Must be greater than 0.
     */
    e(this, "userId", 0);
    /**
     * The page number.
     */
    e(this, "pageNumber", 0);
    /**
     * The number of transactions per page.
     */
    e(this, "pageSize", 0);
    t && Object.assign(this, {
      ...t
    });
  }
}
class wt extends a {
  constructor(s) {
    super();
    e(this, "nextPageNumber");
    e(this, "transactions");
    s && Object.assign(this, {
      ...s
    });
  }
}
class Ot extends a {
  constructor(s) {
    super();
    e(this, "account");
    s && Object.assign(this, {
      ...s
    });
  }
}
class vt extends a {
  constructor(s) {
    super();
    /**
     * List of account balance history records.
     */
    e(this, "accountBalanceHistory", []);
    s && Object.assign(this, {
      ...s
    });
  }
}
class Lt {
  /**
   * Creates a new instance of GetUserAccountBalanceHistoryRequest.
   * @param partialRequest Partial request object to initialize the GetUserAccountBalanceHistoryRequest.
   * @remarks You can use this constructor to create a partial instance of GetUserAccountBalanceHistoryRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class Et {
  /**
   * Creates a new instance of GetUserCategoryMonthlyExpenditureRequest.
   * @param partialRequest Partial request object to initialize the GetUserCategoryMonthlyExpenditureRequest.
   * @remarks You can use this constructor to create a partial instance of GetUserCategoryMonthlyExpenditureRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The primary personal finance category for filtering the records.
     */
    e(this, "personalFinanceCategoryPrimary");
    /**
     * The month for which category monthly expenditure is requested (in the format YYYYMM).
     */
    e(this, "month");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.personalFinanceCategoryPrimary = t.personalFinanceCategoryPrimary || "", this.month = t.month || 0, this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class kt extends a {
  constructor(s) {
    super();
    e(this, "categoryMonthlyExpenditure", []);
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class Ut {
  /**
   * Creates a new instance of GetUserCategoryMonthlyIncomeRequest.
   * @param partialRequest Partial request object to initialize the GetUserCategoryMonthlyIncomeRequest.
   * @remarks You can use this constructor to create a partial instance of GetUserCategoryMonthlyIncomeRequest.
   *          You can later populate the additional properties manually if needed.
   */
  constructor(t) {
    /**
     * The user ID associated with the request.
     */
    e(this, "userId");
    /**
     * The primary personal finance category for filtering the records.
     */
    e(this, "personalFinanceCategoryPrimary");
    /**
     * The month for which category monthly income is requested (in the format YYYYMM).
     */
    e(this, "month");
    /**
     * The page number of the requested data.
     */
    e(this, "pageNumber");
    /**
     * Number of items to return per page.
     */
    e(this, "pageSize");
    this.userId = t.userId || 0, this.personalFinanceCategoryPrimary = t.personalFinanceCategoryPrimary || "", this.month = t.month || 0, this.pageNumber = t.pageNumber || 1, this.pageSize = t.pageSize || 10;
  }
}
class Ft extends a {
  constructor(s) {
    super();
    e(this, "categoryMonthlyIncome", []);
    e(this, "nextPageNumber", 0);
    s && Object.assign(this, {
      ...s
    });
  }
}
class jt extends a {
  constructor(s) {
    super(s);
    e(this, "success", !1);
    s && Object.assign(this, s);
  }
}
class zt {
  constructor(t) {
    /**
     * The user id
     * Validations:
     * - user_id must be greater than 0
     */
    e(this, "userId", 0);
    /**
     * The public token
     * Validations:
     * - cannot be nil hence required
     */
    e(this, "publicToken", "");
    /** The institution id */
    e(this, "institutionId", "");
    /** The institution name */
    e(this, "institutionName", "");
    t && Object.assign(this, {
      ...t
    });
  }
}
class Rt extends a {
  constructor(s) {
    super();
    /** wether the operation was successful */
    e(this, "success", !1);
    s && Object.assign(this, {
      ...s
    });
  }
}
class Gt {
  constructor(t) {
    /**
     * A unique ID representing the end user. Typically this will be a user ID number from your application.
     * Personally identifiable information, such as an email address or phone number,
     * should not be used in the `client_user_id`. It is currently used as a means of searching logs
     * for the given user in the Plaid Dashboard.
     * Validations:
     * - user_id must be greater than 0
     */
    e(this, "userId", 0);
    /**
     * The user's full legal name. This is an optional field used in
     * the [returning user experience](https://plaid.com/docs/link/returning-user) to associate Items to the user.
     */
    e(this, "fullName", "");
    /**
     * The user's email address. This field is optional, but required to enable the
     * [pre-authenticated returning user flow](https://plaid.com/docs/link/returning-user/#enabling-the-returning-user-experience).
     */
    e(this, "email", "");
    /**
     * The user's phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     * This field is optional, but required to enable the [returning user experience](https://plaid.com/docs/link/returning-user).
     */
    e(this, "phoneNumber", "");
    t && Object.assign(this, {
      ...t
    });
  }
}
class _t {
  constructor(t) {
    e(this, "linkToken", "");
    e(this, "expiration", "");
    e(this, "plaidRequestId", "");
    t && Object.assign(this, {
      ...t
    });
  }
}
class Bt {
  constructor(t) {
    /**
     * A unique ID representing the end user. Typically this will be a user ID number from your application.
     * Personally identifiable information, such as an email address or phone number,
     * should not be used in the `client_user_id`. It is currently used as a means of searching logs
     * for the given user in the Plaid Dashboard.
     * Validations:
     * - user_id must be greater than 0
     */
    e(this, "userId", 0);
    /**
     * The user's full legal name. This is an optional field used in
     * the [returning user experience](https://plaid.com/docs/link/returning-user) to associate Items to the user.
     */
    e(this, "fullName", "");
    /**
     * The user's email address. This field is optional, but required to enable the
     * [pre-authenticated returning user flow](https://plaid.com/docs/link/returning-user/#enabling-the-returning-user-experience).
     */
    e(this, "email", "");
    /**
     * The user's phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     * This field is optional, but required to enable the [returning user experience](https://plaid.com/docs/link/returning-user).
     */
    e(this, "phoneNumber", "");
    t && Object.assign(this, {
      ...t
    });
  }
}
class Yt extends a {
  constructor(s) {
    super();
    e(this, "linkToken", "");
    e(this, "expiration", "");
    e(this, "plaidRequestId", "");
    s && Object.assign(this, {
      ...s
    });
  }
}
class Wt {
  constructor(t) {
    /**
     * The user id
     * Validations:
     * - user_id must be greater than 0
     */
    e(this, "userId", 0);
    /**
     * The link id we want to update for
     * Validations:
     * - cannot be nil hence required
     */
    e(this, "linkId", 0);
    t && Object.assign(this, {
      ...t
    });
  }
}
class $t extends a {
  constructor(s) {
    super(s);
    e(this, "linkToken", "");
    e(this, "expiration", "");
    s && Object.assign(this, {
      ...s
    });
  }
}
class Vt {
  /**
   * Creates a new instance of `TokenResponse`.
   *
   * @param data - An object containing any subset of the `TokenResponse` properties.
   */
  constructor(t) {
    /**
     * The token returned by the server, typically used for authentication purposes.
     */
    e(this, "token");
    /**
     * A code indicating the status or result of the operation.
     */
    e(this, "code");
    /**
     * An error message, if any occurred during the operation.
     */
    e(this, "err");
    this.token = t.token || "", this.code = t.code || 0, this.err = t.err || "";
  }
}
class Ht {
  constructor(t) {
    /**
     * UserAccount to update
     * Validation:
     * - cannot nil hence required
     */
    e(this, "account", new g());
    t && Object.assign(this, {
      ...t,
      account: new g(t == null ? void 0 : t.account)
    });
  }
  isValid() {
    return this.account !== void 0;
  }
}
class Kt extends a {
  constructor(s) {
    super();
    e(this, "accountUpdated", !1);
    e(this, "account");
    s && Object.assign(this, {
      ...s,
      account: new g(s == null ? void 0 : s.account)
    });
  }
}
const Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  z as AccountBalanceHistoryClass,
  te as ActionableInsightClass,
  J as AddressClass,
  p as AnyClass,
  M as AprClass,
  je as AuthenticateRequest,
  ze as AuthenticationResponse,
  N as BackendError,
  F as BankAccountClass,
  f as BudgetClass,
  I as CategoryClass,
  le as CategoryMetricsFinancialSubProfileClass,
  he as CategoryMonthlyExpenditureClass,
  ge as CategoryMonthlyIncomeClass,
  pe as CategoryMonthlyTransactionCountClass,
  Re as CheckEmailExistsRequest,
  $ as CheckEmailExistsResponse,
  Ge as CheckUsernameExistsRequest,
  V as CheckUsernameExistsResponse,
  _e as CreateAccountRequest,
  U as CreditAccountClass,
  de as DebtToIncomeRatioClass,
  T as ErrorMessage,
  Z as ErrorMetadata,
  a as ErrorResponse,
  R as ExpenseMetricsClass,
  ye as ExpenseMetricsFinancialSubProfileMetricsClass,
  w as FinancialProfileClass,
  G as FinancialProfileMetricsClass,
  Qt as FinancialServiceDataContract,
  S as ForecastClass,
  Ye as GetAccountBalanceHistoryRequest,
  Be as GetAccountBalanceHistoryResponse,
  We as GetCategoryMonthlyTransactionCountRequest,
  $e as GetCategoryMonthlyTransactionCountResponse,
  Ve as GetDebtToIncomeRatioRequest,
  He as GetDebtToIncomeRatioResponse,
  Ke as GetExpenseMetricsRequest,
  Qe as GetExpenseMetricsResponse,
  Ze as GetFinancialProfileRequest,
  qe as GetFinancialProfileResponse,
  et as GetIncomeExpenseRatioRequest,
  tt as GetIncomeExpenseRatioResponse,
  st as GetIncomeMetricsRequest,
  nt as GetIncomeMetricsResponse,
  Xe as GetMelodyFinancialContextRequest,
  Je as GetMelodyFinancialContextResponse,
  it as GetMerchantMonthlyExpenditureRequest,
  rt as GetMerchantMonthlyExpenditureResponse,
  ot as GetMonthlyBalanceRequest,
  at as GetMonthlyBalanceResponse,
  ct as GetMonthlyExpenditureRequest,
  ut as GetMonthlyExpenditureResponse,
  mt as GetMonthlyIncomeRequest,
  lt as GetMonthlyIncomeResponse,
  ht as GetMonthlySavingsRequest,
  gt as GetMonthlySavingsResponse,
  pt as GetMonthlyTotalQuantityBySecurityAndUserRequest,
  dt as GetMonthlyTotalQuantityBySecurityAndUserResponse,
  yt as GetMonthlyTransactionCountRequest,
  It as GetMonthlyTransactionCountResponse,
  ft as GetPaymentChannelMonthlyExpenditureRequest,
  bt as GetPaymentChannelMonthlyExpenditureResponse,
  St as GetReCurringTransactionsRequest,
  Ct as GetReCurringTransactionsResponse,
  Pt as GetTotalInvestmentBySecurityRequest,
  At as GetTotalInvestmentBySecurityResponse,
  Nt as GetTransactionAggregatesRequest,
  Mt as GetTransactionAggregatesResponse,
  xt as GetTransactionsForBankAccountRequest,
  Tt as GetTransactionsForBankAccountResponse,
  Dt as GetTransactionsRequest,
  wt as GetTransactionsResponse,
  Ot as GetUpdatedUserAccountResponse,
  Lt as GetUserAccountBalanceHistoryRequest,
  vt as GetUserAccountBalanceHistoryResponse,
  Et as GetUserCategoryMonthlyExpenditureRequest,
  kt as GetUserCategoryMonthlyExpenditureResponse,
  Ut as GetUserCategoryMonthlyIncomeRequest,
  Ft as GetUserCategoryMonthlyIncomeResponse,
  Ie as IncomeExpenseRatioClass,
  _ as IncomeMetricsClass,
  fe as IncomeMetricsFinancialSubProfileClass,
  A as InvesmentHoldingClass,
  k as InvestmentAccountClass,
  y as InvestmentSecurityClass,
  be as InvestmentTransactionClass,
  ne as LinkClass,
  Se as LocationFinancialSubProfileClass,
  v as MelodyFinancialContextClass,
  Ce as MerchantMetricsFinancialSubProfileClass,
  Pe as MerchantMonthlyExpenditureClass,
  b as MilestoneClass,
  Ae as MonthlyBalanceClass,
  Me as MonthlyExpenditureClass,
  Ne as MonthlyIncomeClass,
  Te as MonthlySavingsClass,
  xe as MonthlyTotalQuantityBySecurityAndUserClass,
  De as MonthlyTransactionCountClass,
  ae as MortgageAccountClass,
  we as PaymentChannelMetricsFinancialSubProfileClass,
  Oe as PaymentChannelMonthlyExpenditureClass,
  zt as PlaidExchangeTokenRequest,
  Rt as PlaidExchangeTokenResponse,
  Gt as PlaidInitiateTokenExchangeRequest,
  _t as PlaidInitiateTokenExchangeResponse,
  Wt as PlaidInitiateTokenUpdateRequest,
  $t as PlaidInitiateTokenUpdateResponse,
  ce as PlaidLinkClass,
  Bt as PlaidLinkRequest,
  Yt as PlaidLinkResponse,
  ue as PlaidSyncClass,
  P as PocketClass,
  Ue as PublicationClass,
  B as ReOccuringTransactionClass,
  jt as RequestPasswordResetResponse,
  Vt as ResetPasswordResponse,
  C as SmartGoalClass,
  Fe as SocialAccount,
  ke as SocialBookmark,
  Jt as SocialServiceDataContract,
  h as SocialUserProfileClass,
  se as StripeSubscriptionClass,
  j as StudentLoanAccountClass,
  X as TagClass,
  me as TokenClass,
  ve as TotalInvestmentBySecurityClass,
  Le as TransactionAggregatesByMonthClass,
  Y as TransactionClass,
  Ht as UpdateUserAccountRequest,
  Kt as UpdateUserAccountResponse,
  g as UserAccount,
  Ee as UserFinancialHealthMetricsTableClass,
  L as UserRegistrationAccountDetails,
  Xt as UserServiceDataContract
};
//# sourceMappingURL=main.es.js.map
