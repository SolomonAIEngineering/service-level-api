import { ActionableInsight } from 'src/data-contracts/financial-service/data-contracts';

/*
 * An actionable insight serves as a basic insight users
 * can leverage and act upon and is typically generated based off of their financial contexts.
 * @class ActionableInsight
 * @implements {IActionableInsight}
 * @export
 *
 * */
class ActionableInsightClass implements ActionableInsight {
  /**
   * The unique identifier for the actionable insight.
   * @type {number}
   */
  id: string | undefined;

  /**
   * A detailed actionable insight generated for the user to act upon.
   * @type {string}
   */
  detailedAction: string | undefined;

  /**
   * A summarized insight targeting optimization of a certain condition.
   * @type {string}
   */
  summarizedAction: string | undefined;

  /**
   * The time at which the insight was generated.
   * @type {string | undefined}
   */
  generatedTime: string | undefined;

  /**
   * An array of associated tags with the generated insights.
   * @type {string[]}
   */
  tags: Array<string>;

  /**
   * Constructs a new ActionableInsight object.
   * @constructor
   * @param {Partial<ActionableInsight>} data - Optional data for initializing the actionable insight.
   */
  constructor(data: Partial<ActionableInsight> = {}) {
    /**
     * The unique identifier for the actionable insight.
     * @type {number}
     */
    this.id = data.id ?? '0';

    /**
     * A detailed actionable insight generated for the user to act upon.
     * @type {string}
     */
    this.detailedAction = data.detailedAction ?? '';

    /**
     * A summarized insight targeting optimization of a certain condition.
     * @type {string}
     */
    this.summarizedAction = data.summarizedAction ?? '';

    /**
     * The time at which the insight was generated.
     * @type {string | undefined}
     */
    this.generatedTime = data.generatedTime;

    /**
     * An array of associated tags with the generated insights.
     * @type {string[]}
     */
    this.tags = data.tags ?? [];
  }
}

/**
 * Export the ActionableInsight class.
 */
export { ActionableInsightClass };
