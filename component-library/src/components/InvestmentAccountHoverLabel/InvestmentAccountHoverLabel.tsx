import * as React from 'react';
import { createContext, ReactNode, RefObject, Component } from 'react';
import { Button } from '../ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';

import { InvestmentAccountCard } from '..';
import { HoverCardArrow } from '@radix-ui/react-hover-card';
import {
  AccountBalanceHistory,
  InvestmentAccount,
} from 'src/data-contracts/financial-service/data-contracts';
import { BankAccountClass, InvestmentAccountClass } from 'src/index';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/** @type {React.Context<InvestmentAccount>} */
const InvestmentAccountHoverLabelContext = createContext<InvestmentAccount>(
  new InvestmentAccountClass({}),
);

export type InvestmentAccountHoverLabelProps<T extends InvestmentAccount> = {
  investmentAccount: T;
  className?: string;
  enableDemoMode?: boolean;
  children?: ReactNode;
  historicalAccountBalance?: AccountBalanceHistory[];
};

export type InvestmentAccountHoverLabelState<T extends InvestmentAccount> = {
  investmentAccount: T;
};

/**
 * The `InvestmentAccountHoverLabel` is a specialized React class component
 * designed to provide detailed hover information about an investment account.
 * It is built with TypeScript and extends the React `Component` class,
 * with types specified for both props and state.
 *
 * @template T - Specifies the type of bank account this component works with,
 * extending a base Investment Account.
 *
 * @example
 * ```tsx
 * import { InvestmentAccountHoverLabel } from './InvestmentAccountHoverLabel';
import { InvestmentAccount } from '../../types/financial/investment-account';
 *
 * <InvestmentAccountHoverLabel
 *    investmentAccount={new InvestmentAccount({
 *      name: 'Savings Account',
 *      currentFunds: 5000,
 *      goals: [{name: 'Vacation', amount: 1000}]
 *    })}
 *    enableDemoMode={false}
 * />
 * ```
 *
 * @class
 * @extends {Component<InvestmentAccountHoverLabelProps<T>, InvestmentAccountHoverLabelState<T>>}
 */
export class InvestmentAccountHoverLabel<
  T extends InvestmentAccount,
> extends Component<
  InvestmentAccountHoverLabelProps<T>,
  InvestmentAccountHoverLabelState<T>
> {
  /**
   * A reference to the DOM element of the component.
   * Useful for direct DOM manipulations.
   */
  private myRef: RefObject<HTMLDivElement>;

  /**
   * Default properties for the InvestmentAccountHoverLabel component.
   */
  static defaultProps = {
    bankAccount: new BankAccountClass({}),
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
   * Constructs a new `InvestmentAccountHoverLabel` component.
   *
   * @param props - The properties passed to the component.
   */
  constructor(props: InvestmentAccountHoverLabelProps<T>) {
    super(props);
    this.state = {
      investmentAccount: props.investmentAccount,
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
   * Renders the `InvestmentAccountHoverLabel` component.
   *
   * @returns {ReactNode} The React Node representing the component's UI.
   */
  render(): ReactNode {
    const { className, historicalAccountBalance, enableDemoMode } = this.props;
    const investmentAccount = enableDemoMode
      ? InvestmentAccountClass.randomInstance()
      : this.state.investmentAccount;
    return (
      <InvestmentAccountHoverLabelContext.Provider value={investmentAccount}>
        <HoverCard>
          <HoverCardTrigger asChild className={className}>
            <Button variant="link" className="underline">
              {investmentAccount.name}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-fit">
            <HoverCardArrow />
            <InvestmentAccountCard
              investmentAccount={investmentAccount}
              historicalAccountBalance={historicalAccountBalance}
            />
          </HoverCardContent>
        </HoverCard>
      </InvestmentAccountHoverLabelContext.Provider>
    );
  }
}
