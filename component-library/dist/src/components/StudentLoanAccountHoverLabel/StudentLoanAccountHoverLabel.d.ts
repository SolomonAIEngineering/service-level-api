import { ReactNode, Component } from 'react';
import { AccountBalanceHistory, StudentLoanAccount } from 'src/data-contracts/financial-service/data-contracts';
import { BankAccountClass } from 'src/index';
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
export declare class StudentLoanAccountHoverLabel<T extends StudentLoanAccount> extends Component<StudentLoanAccountHoverLabelProps<T>, StudentLoanAccountHoverLabelState<T>> {
    /**
     * A reference to the DOM element of the component.
     * Useful for direct DOM manipulations.
     */
    private myRef;
    /**
     * Default properties for the StudentLoanAccountHoverLabel component.
     */
    static defaultProps: {
        bankAccount: BankAccountClass;
        contextQuestions: string[];
        enableDemoMode: boolean;
        children: null;
    };
    /**
     * Constructs a new `StudentLoanAccountHoverLabel` component.
     *
     * @param props - The properties passed to the component.
     */
    constructor(props: StudentLoanAccountHoverLabelProps<T>);
    /**
     * Lifecycle method that triggers immediately after the component is added to the DOM.
     * This method focuses the current component if it has a valid reference.
     */
    componentDidMount(): void;
    /**
     * Renders the `StudentLoanAccountHoverLabel` component.
     *
     * @returns {ReactNode} The React Node representing the component's UI.
     */
    render(): ReactNode;
}
