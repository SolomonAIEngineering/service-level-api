// GoalSummaryCard.tsx
import React from 'react';
import { SmartGoal } from 'src/data-contracts/financial-service/data-contracts';
import DonutStatistic from '../DonutStatisticCard/DonutStatisticCard';

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
const GoalSummaryCard: React.FC<GoalSummaryCardProps> = ({
  goal,
  currentAmount,
  targetAmount,
}) => {
  return (
    <div className="border bg-white p-8 rounded-md shadow-md max-w-sm w-full">
      <div className="flex flex-row">
        <h2 className="font-bold text-xl mb-2">{goal.name}</h2>
        <span className="ml-auto rounded-md p-1 font-bold text-xs">
          {goal.isCompleted ? 'Completed' : 'Active'}
        </span>
      </div>
      <p className="text-gray-600">{goal.description}</p>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <div className="mt-4">
            <span className="block text-black font-bold">Current Amount</span>
            <span className="text-gray">${goal.currentAmount}</span>
          </div>
          <div className="mt-2">
            <span className="block text-black font-bold">Target Amount</span>
            <span className="text-gray">${goal.targetAmount}</span>
          </div>
          <div className="mt-2">
            <span className="block text-black font-bold">End Date</span>
            <span className="text-gray">{goal.endDate}</span>
          </div>
        </div>
        <div className="p-5">
          <DonutStatistic
            percentage={(currentAmount / targetAmount) * 100}
            label="Progress"
          />
        </div>
      </div>

      {goal.isCompleted && (
        <span className="block mt-3 text-green-500 font-bold">
          Goal Achieved! 🎉
        </span>
      )}
    </div>
  );
};

export default GoalSummaryCard;
