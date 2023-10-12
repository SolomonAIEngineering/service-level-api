import React from 'react';
import { SmartGoal } from 'src/data-contracts/financial-service/data-contracts';
interface GoalSummaryCardProps {
    goal: SmartGoal;
    currentAmount: number;
    targetAmount: number;
}
/**
 * @description The GoalSummaryCard component presents a summarized view of a user's goal.
 * @param goal - The data of the goal to be displayed.
 * @returns JSX Element
 */
declare const GoalSummaryCard: React.FC<GoalSummaryCardProps>;
export default GoalSummaryCard;
