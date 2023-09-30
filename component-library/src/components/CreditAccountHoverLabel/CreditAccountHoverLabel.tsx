import * as React from 'react';
import { createContext, ReactNode, RefObject, Component } from 'react';
import { Button } from '../ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { AccountBalanceHistory, CreditAccount } from 'src/types';
import { CreditAccountCard } from '..';
import { HoverCardArrow } from '@radix-ui/react-hover-card';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/** @type {React.Context<CreditAccount>} */
const CreditAccountHoverLabelContext = createContext<CreditAccount>(
  new CreditAccount({}),
);

export type CreditAccountHoverLabelProps<T extends CreditAccount> = {
  creditAccount: T;
  institutionName: string;
  className?: string;
  enableDemoMode?: boolean;
  children?: ReactNode;
  historicalAccountBalance?: AccountBalanceHistory[];
};

export type CreditAccountHoverLabelState<T extends CreditAccount> = {
  creditAccount: T;
};

/**
 * The `CreditAccountHoverLabel` is a specialized React class component
 * designed to provide detailed hover information about a credit account.
 * It is built with TypeScript and extends the React `Component` class,
 * with types specified for both props and state.
 *
 * @template T - Specifies the type of bank account this component works with,
 * extending a base CreditAccount.
 *
 * @example
 * ```tsx
 * import { CreditAccountHoverLabel } from './CreditAccountHoverLabel';
 *
 * <CreditAccountHoverLabel
 *    creditAccount={new CreditAccount({
 *      name: 'Savings Account',
 *      currentFunds: 5000,
 *      goals: [{name: 'Vacation', amount: 1000}]
 *    })}
 *    enableDemoMode={false}
 * />
 * ```
 *
 * @class
 * @extends {Component<CreditAccountHoverLabelProps<T>, CreditAccountHoverLabelState<T>>}
 */
export class CreditAccountHoverLabel<T extends CreditAccount> extends Component<
  CreditAccountHoverLabelProps<T>,
  CreditAccountHoverLabelState<T>
> {
  /**
   * A reference to the DOM element of the component.
   * Useful for direct DOM manipulations.
   */
  private myRef: RefObject<HTMLDivElement>;

  /**
   * Default properties for the CreditAccountHoverLabel component.
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
    institutionName: 'Chase',
  };

  /**
   * Constructs a new `CreditAccountHoverLabel` component.
   *
   * @param props - The properties passed to the component.
   */
  constructor(props: CreditAccountHoverLabelProps<T>) {
    super(props);
    this.state = {
      creditAccount: props.creditAccount,
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
   * Renders the `CreditAccountHoverLabel` component.
   *
   * @returns {ReactNode} The React Node representing the component's UI.
   */
  render(): ReactNode {
    const {
      className,
      historicalAccountBalance,
      enableDemoMode,
      institutionName,
    } = this.props;
    const creditAccount = enableDemoMode
      ? CreditAccount.randomInstance()
      : this.state.creditAccount;
    return (
      <CreditAccountHoverLabelContext.Provider value={creditAccount}>
        <HoverCard>
          <HoverCardTrigger asChild className={className}>
            <Button variant="link" className="underline">
              {creditAccount.name}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-fit rounded-2xl">
            <HoverCardArrow />
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarFallback className="bg-black text-white font-bold">
                  {creditAccount.name.toUpperCase().slice(0, 2)}{' '}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <CreditAccountCard
                  institutionName={institutionName}
                  creditAccount={creditAccount}
                  historicalAccountBalance={historicalAccountBalance}
                  className="border-none shadow-none"
                />
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </CreditAccountHoverLabelContext.Provider>
    );
  }
}
