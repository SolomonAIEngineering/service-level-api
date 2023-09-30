import {
  getRandomNumber,
  getRandomString,
  getRandomBoolean,
  getRandomArrayItem,
  getRandomDate,
} from 'src/lib-utils/utils';
import { Forecast } from './forecast';
import { GoalType } from './goal-type';
import { Milestone } from './milestone';

export interface ISmartGoal {
  /** id */
  id: number;
  /** the user id to which this goal is tied to */
  userId: number;
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
}

/*
 * SmartGoal: The Goals table stores information about each financial goal, including the name of the goal,
 * its description, the target amount of money the user wants to save or invest, and the expected date of completion.
 *
 * The Goals table also includes columns for the start date of the goal, the current amount of money saved or
 * invested towards the goal, and a boolean flag indicating whether the goal has been achieved.
 * These additional columns allow the user to track their progress towards the goal and see how much
 * more they need to save or invest to reach their target amount.
 *
 * @export
 * @class SmartGoal
 * @implements {ISmartGoal}
 * */
export class SmartGoal implements ISmartGoal {
  /** id */
  id = 0;
  /** the user id to which this goal is tied to */
  userId = 0;
  /**
   * The name of the goal
   * Validations:
   * - must be at least 3 characters long
   */
  name = '';
  /**
   * The description of the goal
   * Validations:
   * - must be at least 3 characters long
   */
  description = '';
  /** wether the goal has been achieved or not */
  isCompleted = false;
  /** The type of the goal */
  goalType: GoalType = GoalType.GOAL_TYPE_UNSPECIFIED;
  /** The duration of the goal */
  duration = '';
  /** the start date of the goal */
  startDate = '';
  /** the end date of the goal */
  endDate = '';
  /**
   * the target amount of the goal
   * amount of money the user wants to save or invest
   */
  targetAmount = '';
  /**
   * the current amount of the goal
   * current amount of money saved or invested towards the goal
   */
  currentAmount = '';
  /** Milestones associated with the goal */
  milestones: Milestone[] = [];
  /** Forecasts associated with the goal */
  forecasts: Forecast | undefined;

  constructor(data: Partial<SmartGoal>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Creates a random instance of the SmartGoal class with all fields populated.
   * @returns {SmartGoal} A random SmartGoal.
   */
  static randomInstance(): SmartGoal {
    const numberOfMilestones = getRandomNumber(0, 5); // Assuming a random number of milestones between 0 to 5 for each goal
    const milestones = Array.from({ length: numberOfMilestones }, () =>
      Milestone.randomInstance(),
    );

    return new SmartGoal({
      id: getRandomNumber(1, 10000),
      userId: getRandomNumber(1, 10000),
      name: getRandomString(5),
      description: getRandomString(10),
      isCompleted: getRandomBoolean(),
      goalType: getRandomArrayItem(Object.values(GoalType).slice()) as GoalType,
      duration: `${getRandomNumber(1, 5)} weeks`,
      startDate: getRandomDate(new Date(2020, 0, 1), new Date(2025, 0, 1)),
      endDate: getRandomDate(new Date(2022, 0, 1), new Date(2030, 0, 1)),
      targetAmount: `$${getRandomNumber(500, 10000)}`,
      currentAmount: `$${getRandomNumber(0, 5000)}`,
      milestones: milestones,
      forecasts: Math.random() > 0.5 ? Forecast.randomInstance() : undefined,
    });
  }
}
