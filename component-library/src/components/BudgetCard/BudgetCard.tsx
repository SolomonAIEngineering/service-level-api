import React from 'react';;
import { Budget } from 'src/data-contracts/financial-service/data-contracts';
import { Label } from '../ui/label';
import { ClipboardSignature } from 'lucide-react';

/**
 * Props for the BudgetCard.
 */
interface BudgetProps {
  /**
   * Budget details to display.
   * This is an object containing the information for the budget.
   */
  budget: Budget;
}

/**
 * React component to display the details of a budget.
 *
 * This component will render the name, description, start and end dates of the budget,
 * along with the associated category and its subcategories.
 *
 * Usage:
 *
 * ```tsx
 * <BudgetCard budget={someBudgetObject} />
 * ```
 *
 * @param props The props containing the budget details.
 * @returns A React element displaying the budget details.
 */
const BudgetCard: React.FC<BudgetProps> = ({ budget }) => {
  return (
    <div className="p-8 border border-gray-300 rounded-3xl space-y-2">
      <div className="flex flex-row justify-between">
        <h2 className="text-xl font-semibold">{budget.name}</h2>
        <ClipboardSignature className="w-5 h-5" />
      </div>
      <p className="text-gray-700">{budget.description}</p>
      <div className="flex flex-row justify-between gap-3">
        <p className="text-sm text-gray-500">Start Date: {budget.startDate}</p>
        <p className="text-sm text-gray-500">End Date: {budget.endDate}</p>
      </div>

      {budget.category && (
        <div className="mt-2 pt-4 border-gray-300 space-y-1">
          <p className="text-xs font-semibold">Category</p>
          <h3 className="text-lg font-bold">{budget.category.name}</h3>
          <p className="text-gray-700 text-sm">{budget.category.description}</p>
          <ul className="flex flex-wrap gap-2">
            {budget.category.subcategories?.map((sub, index) => (
              <Label
                key={index}
                className="text-gray-700 border p-2 rounded-lg text-xs"
              >
                {sub}
              </Label>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BudgetCard;
