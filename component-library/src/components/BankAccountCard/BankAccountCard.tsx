import * as React from 'react';
import { createContext, ReactNode, RefObject, Component } from 'react';
import { AccountBalanceHistory, BankAccount, FinancialProfile } from 'src';
import { Card } from '../ui/card';
import { BankAccountCardHeader } from './BankAccountCardHeader';
import { BankAccountCardContent } from './BankAccountCardContent';
import { BankAccountCardFooter } from './BankAccountCardFooter';
import { cn } from 'src/lib-utils/utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/** @type {React.Context<T extends BankAccount>} */
const BankAccountContext = createContext<BankAccount>(new BankAccount({}));
const FinancialProfileContext = createContext<FinancialProfile>(
  new FinancialProfile({}),
);
const AccountBalanceHistoryContext = createContext<AccountBalanceHistory[]>([]);

export type BankAccountCardProps<T extends BankAccount> = {
  bankAccount: T;
  financialProfile: FinancialProfile;
  className?: string;
  contextQuestions?: string[];
  enableDemoMode?: boolean;
  children?: ReactNode;
  historicalAccountBalance?: AccountBalanceHistory[];
};

export type BankAccountCardState<T extends BankAccount> = {
  bankAccount: T;
};

/**
 * @class BankAccountCard
 * @extends {Component<BankAccountCardProps, BankAccountCardState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript
 * with TSDoc annotations. It has various features like context usage,
 * dynamic styles, generic props, and more.
 */
export class BankAccountCard<T extends BankAccount> extends Component<
  BankAccountCardProps<T>,
  BankAccountCardState<T>
> {
  private myRef: RefObject<HTMLDivElement>;

  static defaultProps = {
    bankAccount: new BankAccount({}),
    financialProfile: new FinancialProfile({}),
    contextQuestions: [
      'How much money do I have in my account?',
      'Am l spending too much in my account?',
      'What fees are associated with my account?',
      'How can l optimize my spending on this account?',
    ],
    enableDemoMode: false,
    children: null,
  };

  constructor(props: BankAccountCardProps<T>) {
    super(props);
    this.state = {
      bankAccount: props.bankAccount,
    };

    this.myRef = React.createRef();
  }

  /** Lifecycle method when the component is about to mount. */
  componentWillMount() {
    // Deprecated lifecycle, use with caution!
  }

  /**
   * Lifecycle method that runs after the component has been mounted.
   */
  componentDidMount() {
    // You can use the ref here, for example:
    if (this.myRef.current) {
      this.myRef.current.focus();
    }
  }

  /**
   * Renders the component.
   * @returns {ReactNode}
   */
  render(): ReactNode {
    const {
      financialProfile,
      className,
      children,
      historicalAccountBalance,
      enableDemoMode,
    } = this.props;

    return (
      <BankAccountContext.Provider
        value={
          enableDemoMode ? BankAccount.randomInstance() : this.state.bankAccount
        }
      >
        <FinancialProfileContext.Provider value={financialProfile}>
          <AccountBalanceHistoryContext.Provider
            value={historicalAccountBalance ? historicalAccountBalance : []}
          >
            <Card
              className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
              ref={this.myRef}
            >
              <BankAccountCardHeader />
              <BankAccountCardContent />
              <BankAccountCardFooter />
              {children}
            </Card>
          </AccountBalanceHistoryContext.Provider>
        </FinancialProfileContext.Provider>
      </BankAccountContext.Provider>
    );
  }
}

export {
  BankAccountContext,
  FinancialProfileContext,
  AccountBalanceHistoryContext,
};
