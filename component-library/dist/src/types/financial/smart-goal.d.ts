import { Milestone as Milestone } from 'src/data-contracts/financial-service/data-contracts';
import { SmartGoal as SmartGoal } from 'src/data-contracts/financial-service/data-contracts';
import { Forecast as Forecast } from 'src/data-contracts/financial-service/data-contracts';
import { GoalType as GoalType } from 'src/data-contracts/financial-service/data-contracts';
export declare class SmartGoalClass implements SmartGoal {
    /** id */
    id: string;
    /** the user id to which this goal is tied to */
    userId: string;
    /**
     * The name of the goal
     * Validations:
     * - must be at least 3 characters long
     */
    name: string;
    /**
     * The description of the goal
     * Validations:
     * - must be at least 3 characters long
     */
    description: string;
    /** wether the goal has been achieved or not */
    isCompleted: boolean;
    /** The type of the goal */
    goalType: GoalType;
    /** The duration of the goal */
    duration: string;
    /** the start date of the goal */
    startDate: string;
    /** the end date of the goal */
    endDate: string;
    /**
     * the target amount of the goal
     * amount of money the user wants to save or invest
     */
    targetAmount: string;
    /**
     * the current amount of the goal
     * current amount of money saved or invested towards the goal
     */
    currentAmount: string;
    /** Milestones associated with the goal */
    milestones: Milestone[];
    /** Forecasts associated with the goal */
    forecasts: Forecast | undefined;
    constructor(data: Partial<SmartGoal>);
    /**
     * Creates a random instance of the SmartGoal class with all fields populated.
     * @returns {SmartGoal} A random SmartGoal.
     */
    static randomInstance(): SmartGoal;
}
