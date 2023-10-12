import { ActionableInsight } from 'src/data-contracts/financial-service/data-contracts';
declare class ActionableInsightClass implements ActionableInsight {
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
    constructor(data?: Partial<ActionableInsight>);
}
/**
 * Export the ActionableInsight class.
 */
export { ActionableInsightClass };
