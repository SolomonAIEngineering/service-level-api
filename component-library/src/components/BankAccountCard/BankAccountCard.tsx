import * as React from 'react';
import { createContext, ReactNode, RefObject, Component } from 'react';
import {
  AccountBalanceHistory,
  FinancialProfile,
  BankAccount,
} from 'src/data-contracts/financial-service/data-contracts';
import { Card } from '../ui/card';
import { BankAccountCardHeader } from './BankAccountCardHeader';
import { BankAccountCardContent } from './BankAccountCardContent';
import { BankAccountCardFooter } from './BankAccountCardFooter';
import { cn } from 'src/lib-utils/utils';
import { FinancialProfileClass } from 'src/types/financial/financial-profile';
import { BankAccountClass } from 'src/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/** @type {React.Context<T extends BankAccount>} */
const BankAccountContext = createContext<BankAccount | undefined>(undefined);
const FinancialProfileContext = createContext<FinancialProfile>(
  new FinancialProfileClass({}),
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
    bankAccount: new BankAccountClass({}),
    financialProfile: new FinancialProfileClass({}),
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
          enableDemoMode
            ? BankAccountClass.randomInstance()
            : this.state.bankAccount
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
