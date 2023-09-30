import { getRandomNumber, getRandomArrayItem } from 'src/lib-utils/utils';
import { PocketType } from './pocket-type';
import { SmartGoal } from './smart-goal';

/**
 * Pocket is an abstraction of a over a bank account. A user can has at most 4 pockets per connected account
 * NOTE: these pockets are automatically created by the system and should not be exposed for mutation
 * by any client. The only operations that can be performed against a pocket are:
 * 1. Get the pocket
 * 2. Get the pocket's smart goals
 * 3. Adding a smart goal to the pocket
 */
export interface IPocket {
  /** id */
  id: number;
  /** the set of smart goals this user witholds */
  goals: SmartGoal[];
  /** The type of the pocket */
  type: PocketType;
}

/**
 * Pocket represents the Pocket entity.
 *
 * @export
 * @class Pocket
 * @implements {IPocket}
 * */
export class Pocket implements IPocket {
  /** id */
  id = 0;
  /** the set of smart goals this user witholds */
  goals: SmartGoal[] = [];
  /** The type of the pocket */
  type: PocketType = PocketType.POCKET_TYPE_UNSPECIFIED;

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
      SmartGoal.randomInstance(),
    );

    return new Pocket({
      id: getRandomNumber(1, 10000),
      goals: goals,
      type: getRandomArrayItem(Object.values(PocketType).slice()) as PocketType,
    });
  }
}
