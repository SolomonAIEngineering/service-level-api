import React from 'react';
import { Budget } from 'src/data-contracts/financial-service/data-contracts';
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
declare const BudgetCard: React.FC<BudgetProps>;
export default BudgetCard;
