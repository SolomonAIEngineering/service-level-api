import {
  getRandomNumber,
  getRandomString,
  getRandomDate,
  getRandomBoolean,
} from 'src/lib-utils/utils';
import {
  Milestone as Milestone,
  Budget as Budget,
} from 'src/data-contracts/financial-service/data-contracts';
import { BudgetClass } from './budget';

/*
 * Milestone: represents a milestone in the context of simfinni. A financial milestone that is both smart
 * and achievable. A milestone is a sub goal of a goal and is tied to a goal by the goal id
 *
 * @export
 * @class Milestone
 * @implements {IMilestone}
 * */
export class MilestoneClass implements Milestone {
  /** id */
  id = '0';
  /**
   * The name of the milestone
   * Validations:
   * - must be at least 3 characters long
   */
  name = '';
  /**
   * The description of the miletone
   * Validations:
   * - must be at least 3 characters long
   */
  description = '';
  /**
   * the target date of the milestone
   * Validations:
   * - must be at least 3 characters long
   */
  targetDate = '';
  /** the target amount of the milestone */
  targetAmount = '';
  /** wethe milestone is completed or not */
  isCompleted = false;
  /** the budget associated with the milestone */
  budget: Budget | undefined = undefined;

  constructor(data: Partial<Milestone>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Creates a random instance of the Milestone class with all fields populated.
   * @returns {Milestone} A random Milestone.
   */
  static randomInstance(): Milestone {
    return new MilestoneClass({
      id: getRandomNumber(1, 10000).toString(),
      name: getRandomString(5),
      description: getRandomString(10),
      targetDate: getRandomDate(new Date(2020, 0, 1), new Date(2025, 0, 1)),
      targetAmount: `$${getRandomNumber(100, 1000)}`,
      isCompleted: getRandomBoolean(),
      budget: Math.random() > 0.5 ? BudgetClass.randomInstance() : undefined,
    });
  }
}
