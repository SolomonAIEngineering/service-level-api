/*
 * GoalType represents the type of the goal
 *
 * @export
 * @enum {number}
 * */
export enum GoalType {
  GOAL_TYPE_UNSPECIFIED = 0,
  GOAL_TYPE_SAVINGS = 1,
  GOAL_TYPE_INVESTMENT = 2,
  GOAL_TYPE_DEBT = 3,
  GOAL_TYPE_EXPENSE = 4,
  UNRECOGNIZED = -1,
}
