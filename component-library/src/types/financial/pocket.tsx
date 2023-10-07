import { getRandomNumber } from 'src/lib-utils/utils';

import { Pocket as Pocket } from 'src/data-contracts/financial-service/data-contracts';
import { PocketType as PocketType } from 'src/data-contracts/financial-service/data-contracts';
import { SmartGoal as SmartGoal } from 'src/data-contracts/financial-service/data-contracts';
import { SmartGoalClass } from './smart-goal';
/**
 * Pocket represents the Pocket entity.
 *
 * @export
 * @class Pocket
 * @implements {IPocket}
 * */
export class PocketClass implements Pocket {
  /** id */
  id = '0';
  /** the set of smart goals this user witholds */
  goals: SmartGoal[] = [];
  /** The type of the pocket */
  type: PocketType = 'POCKET_TYPE_UNSPECIFIED';

  constructor(data: Partial<Pocket>) {
    Object.assign(this, data);
  }

  /**
   * Creates a random instance of the Pocket class with all fields populated.
   * @returns {Pocket} A random pocket.
   */
  static randomInstance(): Pocket {
    const numberOfGoals = getRandomNumber(0, 5); // Assuming a random number of goals between 0 to 5 for each pocket
    const goals = Array.from({ length: numberOfGoals }, () =>
      SmartGoalClass.randomInstance(),
    );

    return new PocketClass({
      id: getRandomNumber(1, 10000).toString(),
      goals: goals,
      type: 'POCKET_TYPE_LONG_TERM_SAVINGS',
    });
  }
}
