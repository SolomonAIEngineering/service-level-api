import { Milestone as Milestone, Budget as Budget } from 'src/data-contracts/financial-service/data-contracts';
export declare class MilestoneClass implements Milestone {
    /** id */
    id: string;
    /**
     * The name of the milestone
     * Validations:
     * - must be at least 3 characters long
     */
    name: string;
    /**
     * The description of the miletone
     * Validations:
     * - must be at least 3 characters long
     */
    description: string;
    /**
     * the target date of the milestone
     * Validations:
     * - must be at least 3 characters long
     */
    targetDate: string;
    /** the target amount of the milestone */
    targetAmount: string;
    /** wethe milestone is completed or not */
    isCompleted: boolean;
    /** the budget associated with the milestone */
    budget: Budget | undefined;
    constructor(data: Partial<Milestone>);
    /**
     * Creates a random instance of the Milestone class with all fields populated.
     * @returns {Milestone} A random Milestone.
     */
    static randomInstance(): Milestone;
}
