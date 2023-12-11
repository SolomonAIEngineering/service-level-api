import React from 'react';
import { createContext, ReactNode, RefObject, Component } from 'react';
import { Button } from '../ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { HistoricalAccountBalanceChart } from '../HistoricalAccountBalanceChart';
import { HoverCardArrow } from '@radix-ui/react-hover-card';
import {
  AccountBalanceHistory,
  BankAccount,
} from 'src/data-contracts/financial-service/data-contracts';
import { BankAccountClass } from 'src/types/financial/bank-account';

/** @type {React.Context<BankAccount>} */
const BankAccountHoverLabelContext = createContext<BankAccount>(
  BankAccountClass.randomInstance(),
);

export type BankAccountHoverLabelProps<T extends BankAccount> = {
  bankAccount: T;
  className?: string;
  enableDemoMode?: boolean;
  children?: ReactNode;
  historicalAccountBalance?: AccountBalanceHistory[];
};

export type BankAccountHoverLabelState<T extends BankAccount> = {
  bankAccount: T;
};

/**
 * The `BankAccountHoverLabel` is a specialized React class component
 * designed to provide detailed hover information about a bank account.
 * It is built with TypeScript and extends the React `Component` class,
 * with types specified for both props and state.
 *
 * @template T - Specifies the type of bank account this component works with,
 * extending a base BankAccount.
 *
 * @example
 * ```tsx
 * import { BankAccountHoverLabel } from './BankAccountHoverLabel';
 *
 * <BankAccountHoverLabel
 *    bankAccount={new BankAccount({
 *      name: 'Savings Account',
 *      currentFunds: 5000,
 *      goals: [{name: 'Vacation', amount: 1000}]
 *    })}
 *    enableDemoMode={false}
 * />
 * ```
 *
 * @class
 * @extends {Component<BankAccountHoverLabelProps<T>, BankAccountHoverLabelState<T>>}
 */
export class BankAccountHoverLabel<T extends BankAccount> extends Component<
  BankAccountHoverLabelProps<T>,
  BankAccountHoverLabelState<T>
> {
  /**
   * A reference to the DOM element of the component.
   * Useful for direct DOM manipulations.
   */
  private myRef: RefObject<HTMLDivElement>;

  /**
   * Default properties for the BankAccountHoverLabel component.
   */
  static defaultProps = {
    contextQuestions: [
      'How much money do I have in my account?',
      'Am l spending too much in my account?',
      'What fees are associated with my account?',
      'How can l optimize my spending on this account?',
    ],
    enableDemoMode: false,
    children: null,
  };

  /**
   * Constructs a new `BankAccountHoverLabel` component.
   *
   * @param props - The properties passed to the component.
   */
  constructor(props: BankAccountHoverLabelProps<T>) {
    super(props);
    this.state = {
      bankAccount: props.bankAccount,
    };

    this.myRef = React.createRef();
  }

  /**
   * Lifecycle method that triggers immediately after the component is added to the DOM.
   * This method focuses the current component if it has a valid reference.
   */
  componentDidMount() {
    // You can use the ref here, for example:
    if (this.myRef.current) {
      this.myRef.current.focus();
    }
  }

  /**
   * Renders the `BankAccountHoverLabel` component.
   *
   * @returns {ReactNode} The React Node representing the component's UI.
   */
  render(): ReactNode {
    const { className, historicalAccountBalance, enableDemoMode } = this.props;
    const bankAccount: BankAccountClass = enableDemoMode
      ? (BankAccountClass.randomInstance() as BankAccountClass)
      : new BankAccountClass(this.state.bankAccount);

    return (
      <BankAccountHoverLabelContext.Provider value={bankAccount}>
        <HoverCard>
          <HoverCardTrigger asChild className={className}>
            <Button variant="link" className="underline">
              {bankAccount.name}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-fit">
            <HoverCardArrow />
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarFallback className="bg-black text-white font-bold">
                  {bankAccount.name.toUpperCase().slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">{bankAccount.name}</h4>
                <p className="text-sm">
                  Bank account {bankAccount.name} with current balance of $
                  {bankAccount.currentFunds} and{' '}
                  {bankAccount.getNumberOfGoals()} goals.
                </p>

                <p className="text-sm py-3">
                  <span className="font-semibold">
                    {bankAccount.getMilestones().length} Milestones
                  </span>{' '}
                  Achieved against defined goals for this account
                </p>
                <div className="w-fit">
                  <HistoricalAccountBalanceChart
                    historicalAccountBalance={historicalAccountBalance ?? []}
                  />
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </BankAccountHoverLabelContext.Provider>
    );
  }
}
