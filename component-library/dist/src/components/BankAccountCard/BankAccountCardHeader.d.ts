/// <reference types="react" />
/**
 * The `BankAccountCardHeader` component is responsible for rendering the header section of a bank account card in a user interface.
 *
 * This component showcases critical information about a bank account, such as:
 * - The account's current balance.
 * - Account name.
 * - Account subtype (e.g., Savings, Checking).
 * - Account number.
 * - A dropdown menu to view associated pockets of the bank account.
 *
 * This component relies on utility functions for formatting numbers and pocket names.
 *
 * @remarks
 * The component fetches bank account information from the `BankAccountContext` and presents it in a structured format.
 * It utilizes various UI components such as `Badge`, `Button`, `Label`, and `DropdownMenu` to display information effectively.
 *
 * @example
 * ```tsx
 * import { BankAccountCardHeader } from './path-to-component';
 *
 * function BankAccountView() {
 *   return (
 *     <BankAccountContext.Provider value={someBankAccount}>
 *       <BankAccountCardHeader />
 *     </BankAccountContext.Provider>
 *   );
 * }
 * ```
 *
 * @example Using within a card view:
 * ```tsx
 * <Card>
 *   <BankAccountCardHeader />
 *   // ... other card content
 * </Card>
 * ```
 *
 * @returns {React.FC} Returns a React Functional Component.
 */
declare const BankAccountCardHeader: React.FC;
export { BankAccountCardHeader };
