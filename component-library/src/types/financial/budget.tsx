import {
  getRandomDate,
  getRandomNumber,
  getRandomString,
} from 'src/lib-utils/utils';
import { Budget as Budget } from 'src/data-contracts/financial-service/data-contracts';
import { Category as Category } from 'src/data-contracts/financial-service/data-contracts';
import { CategoryClass } from './category';

/*
 * The Budgets table stores information about each budget created by the user,
 * including the name of the budget, the start and end dates, and the user ID.
 *
 * @export
 * @class Budget
 * @implements {IBudget}
 * */
export class BudgetClass implements Budget {
  /** id */
  id = '0';
  /** The name of the budget */
  name = '';
  description = '';
  /** the time the goal was created */
  startDate = '';
  /** the time the goal was updated */
  endDate = '';
  /** category associated with the goal */
  category: Category | undefined;

  constructor(data: Partial<Budget>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Creates a random instance of the Budget class with all fields populated.
   * @returns {Budget} A random Budget.
   */
  static randomInstance(): Budget {
    return new BudgetClass({
      id: getRandomNumber(1, 10000).toString(),
      name: getRandomString(5),
      description: getRandomString(10),
      startDate: getRandomDate(new Date(2020, 0, 1), new Date(2025, 0, 1)),
      endDate: getRandomDate(new Date(2020, 0, 1), new Date(2025, 0, 1)),
      category:
        Math.random() > 0.5 ? CategoryClass.randomInstance() : undefined,
    });
  }
}
