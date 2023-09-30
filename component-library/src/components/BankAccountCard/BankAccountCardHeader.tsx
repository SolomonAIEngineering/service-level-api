import { useContext } from 'react';
import { BankAccountContext } from './BankAccountCard';
import { CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Label } from '../ui/label';

import { formatNumber } from '../../lib-utils/utils';

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
const BankAccountCardHeader: React.FC = () => {
  const bankAccount = useContext(BankAccountContext);
  const numberOfDecimalPointsToFormatNumbers = 2;
  return (
    <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
      <div className="space-y-1 text-left">
        <CardTitle className="text-xs text-gray-900 dark:text-gray-200 font-bold">
          $
          {formatNumber(
            bankAccount.currentFunds,
            numberOfDecimalPointsToFormatNumbers,
          )}
        </CardTitle>
        <CardTitle
          className="text-xs font-bold"
          style={{
            fontSize: '11px',
          }}
        >
          {bankAccount.name}
        </CardTitle>
        <div>
          <div className="flex flex-1 gap-2 justify-start">
            <Badge
              className="bg-white border border-black text-black font-bold"
              style={{
                fontSize: '10px',
              }}
            >
              {bankAccount.subtype}
            </Badge>
          </div>
        </div>
        <div>
          <div className="flex gap-1">
            <span className="text-xs text-gray-600 dark:text-gray-200">
              bankAccount Number:{' '}
            </span>
            <span className="text-xs font-bold">{bankAccount.number}</span>
          </div>
        </div>
        <div className="flex flex-1 gap-2">
          <Label className="text-2xl font-bold">
            $
            {formatNumber(
              bankAccount.currentFunds,
              numberOfDecimalPointsToFormatNumbers,
            )}
          </Label>
          <Badge
            className="flex justify-center rounded-2xl text-xs"
            variant={'outline'}
          >
            {bankAccount.getNumberOfPockets()} Pockets
          </Badge>
          <Badge
            className="flex justify-center rounded-2xl text-xs"
            variant={'outline'}
          >
            {bankAccount.getNumberOfGoals()} Goals
          </Badge>
        </div>
      </div>
    </CardHeader>
  );
};

export { BankAccountCardHeader };
