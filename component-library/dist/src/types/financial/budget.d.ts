import { Budget as Budget } from 'src/data-contracts/financial-service/data-contracts';
import { Category as Category } from 'src/data-contracts/financial-service/data-contracts';
export declare class BudgetClass implements Budget {
    /** id */
    id: string;
    /** The name of the budget */
    name: string;
    description: string;
    /** the time the goal was created */
    startDate: string;
    /** the time the goal was updated */
    endDate: string;
    /** category associated with the goal */
    category: Category | undefined;
    constructor(data: Partial<Budget>);
    /**
     * Creates a random instance of the Budget class with all fields populated.
     * @returns {Budget} A random Budget.
     */
    static randomInstance(): Budget;
}
