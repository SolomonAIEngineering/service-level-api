import * as React from 'react';
import { createContext, ReactNode, RefObject, Component } from 'react';
import { Button } from '../ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import {
  AccountBalanceHistory,
  BankAccount,
  StudentLoanAccount,
} from 'src/types';
import { StudentLoanAccountCard } from '..';
import { HoverCardArrow } from '@radix-ui/react-hover-card';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/** @type {React.Context<StudentLoanAccount>} */
const StudentLoanAccountHoverLabelContext = createContext<StudentLoanAccount>(
  new StudentLoanAccount({}),
);

export type StudentLoanAccountHoverLabelProps<T extends StudentLoanAccount> = {
  studentLoanAccount: T;
  className?: string;
  enableDemoMode?: boolean;
  children?: ReactNode;
  historicalAccountBalance?: AccountBalanceHistory[];
};

export type StudentLoanAccountHoverLabelState<T extends StudentLoanAccount> = {
  studentLoanAccount: T;
};

/**
 * The `StudentLoanAccountHoverLabel` is a specialized React class component
 * designed to provide detailed hover information about an studentLoan account.
 * It is built with TypeScript and extends the React `Component` class,
 * with types specified for both props and state.
 *
 * @template T - Specifies the type of bank account this component works with,
 * extending a base StudentLoan Account.
 *
 * @example
 * ```tsx
 * import { StudentLoanAccountHoverLabel } from './StudentLoanAccountHoverLabel';
import { StudentLoanAccount } from '../../types/financial/investment-account';
 *
 * <StudentLoanAccountHoverLabel
 *    studentLoanAccount={new StudentLoanAccount({
 *      name: 'Savings Account',
 *      currentFunds: 5000,
 *      goals: [{name: 'Vacation', amount: 1000}]
 *    })}
 *    enableDemoMode={false}
 * />
 * ```
 *
 * @class
 * @extends {Component<StudentLoanAccountHoverLabelProps<T>, StudentLoanAccountHoverLabelState<T>>}
 */
export class StudentLoanAccountHoverLabel<
  T extends StudentLoanAccount,
> extends Component<
  StudentLoanAccountHoverLabelProps<T>,
  StudentLoanAccountHoverLabelState<T>
> {
  /**
   * A reference to the DOM element of the component.
   * Useful for direct DOM manipulations.
   */
  private myRef: RefObject<HTMLDivElement>;

  /**
   * Default properties for the StudentLoanAccountHoverLabel component.
   */
  static defaultProps = {
    bankAccount: new BankAccount({}),
    contextQuestions: [
      'How much money do I owe?',
      'When is my next payment due?',
      'What is the mininum payment amount on this loan?',
      'If l increase my minimum payment amount by 20% when will l pay the loan by?',
    ],
    enableDemoMode: false,
    children: null,
  };

  /**
   * Constructs a new `StudentLoanAccountHoverLabel` component.
   *
   * @param props - The properties passed to the component.
   */
  constructor(props: StudentLoanAccountHoverLabelProps<T>) {
    super(props);
    this.state = {
      studentLoanAccount: props.studentLoanAccount,
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
   * Renders the `StudentLoanAccountHoverLabel` component.
   *
   * @returns {ReactNode} The React Node representing the component's UI.
   */
  render(): ReactNode {
    const { className, enableDemoMode } = this.props;
    const studentLoanAccount = enableDemoMode
      ? StudentLoanAccount.randomInstance()
      : this.state.studentLoanAccount;
    return (
      <StudentLoanAccountHoverLabelContext.Provider value={studentLoanAccount}>
        <HoverCard>
          <HoverCardTrigger asChild className={className}>
            <Button variant="link" className="underline">
              {studentLoanAccount.name}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-fit">
            <HoverCardArrow />
            <StudentLoanAccountCard studentLoanAccount={studentLoanAccount} />
          </HoverCardContent>
        </HoverCard>
      </StudentLoanAccountHoverLabelContext.Provider>
    );
  }
}
