import { useContext } from 'react';
import { CardFooter } from '../ui/card';
import { AccountBalanceHistoryContext } from '.';
import React from 'react';
import { HistoricalAccountBalanceChart } from '../HistoricalAccountBalanceChart';

interface IBankAccountCardFooter {
  className?: string;
}

/**
 * The `BankAccountCardFooter` component is designed to display the footer section of a bank account card in a user interface.
 *
 * This component primarily showcases:
 * - A button containing the bank account's name.
 * - An associated check icon adjacent to the account's name.
 *
 * The appearance and behavior of the footer can be customized using properties that conform to the `IBankAccountCardFooter` interface.
 *
 * @remarks
 * This component fetches bank account data from the `BankAccountContext` and displays the account's name within a button.
 * The button serves as a visual confirmation or status indicator, further emphasized by the `CheckIcon`.
 *
 * @example
 * ```tsx
 * import { BankAccountCardFooter } from './path-to-component';
 *
 * function BankAccountFooterView() {
 *   return (
 *     <BankAccountContext.Provider value={someBankAccount}>
 *       <BankAccountCardFooter className="custom-class" />
 *     </BankAccountContext.Provider>
 *   );
 * }
 * ```
 *
 * @example Applying custom styles using `className` prop:
 * ```tsx
 * <BankAccountCardFooter className="bg-blue-500 text-white" />
 * ```
 *
 * @param props - Component properties conforming to `IBankAccountCardFooter`.
 * @returns {React.FC<IBankAccountCardFooter>} Returns a React Functional Component.
 */
const BankAccountCardFooter: React.FC<IBankAccountCardFooter> = (props) => {
  const { className } = props;
  const historicalAccountBalance = useContext(AccountBalanceHistoryContext);

  return (
    <CardFooter className={className}>
      <div className="w-full">
        <HistoricalAccountBalanceChart
          historicalAccountBalance={historicalAccountBalance}
        />
      </div>
    </CardFooter>
  );
};

export { BankAccountCardFooter };
