import React from 'react';
interface IBankAccountCardContent {
    className?: string;
}
/**
 * The `BankAccountCardContent` component is responsible for displaying the content section of a bank account card within a user interface.
 *
 * Features:
 * - Showcases the number of pockets and goals associated with the bank account.
 * - Presents each count within its respective badge for clarity and aesthetics.
 * - Can be styled further through its `className` prop.
 *
 * @remarks
 * The component fetches its bank account data from the `BankAccountContext`. If there are pockets associated with the account,
 * the component will display badges indicating the number of pockets and goals.
 *
 * It's worth noting that the bank account context should ideally provide methods `getNumberOfPockets` and `getNumberOfGoals` to
 * fetch the desired counts.
 *
 * @example Basic Usage:
 * ```tsx
 * import { BankAccountCardContent } from './path-to-component';
import { BankAccount as BankAccountInstance } from 'src/types/financial/bank-account';
 *
 * function BankAccountContentView() {
 *   return (
 *     <BankAccountContext.Provider value={someBankAccount}>
 *       <BankAccountCardContent />
 *     </BankAccountContext.Provider>
 *   );
 * }
 * ```
 *
 * @example Applying custom styles using `className` prop:
 * ```tsx
 * <BankAccountCardContent className="bg-gray-100 rounded-md" />
 * ```
 *
 * @param props - Component properties conforming to `IBankAccountCardContent`.
 * @returns {React.FC<IBankAccountCardContent>} - Returns a React Functional Component.
 */
declare const BankAccountCardContent: React.FC<IBankAccountCardContent>;
export { BankAccountCardContent };
