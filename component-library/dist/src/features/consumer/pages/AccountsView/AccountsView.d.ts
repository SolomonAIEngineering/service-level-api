import { ReactNode, Component } from 'react';
import { AccountBalanceHistory, Transaction } from 'src/data-contracts/financial-service/data-contracts';
import { BankAccountClass, CreditAccountClass, InvestmentAccountClass, StudentLoanAccountClass } from 'src/types';
export type CombinedAccounts = BankAccountClass & CreditAccountClass & StudentLoanAccountClass & InvestmentAccountClass;
export type AccountsViewProps<T extends CombinedAccounts> = {
    /** Primary data to be displayed or processed by the component. */
    account: T;
    /** Optional CSS classes for styling the component. */
    className?: string;
    transactions?: Transaction[];
    enableDemoMode?: boolean;
    historicalAccountBalance: AccountBalanceHistory[];
    children?: ReactNode;
    contextQuestions?: string[];
    userName: string;
    addGoalCallback: () => void;
    addMilestoneCallback: () => void;
};
export type AccountsViewState<T extends CombinedAccounts> = {
    /** account of interest */
    account: T;
};
/**
 * @class AccountsView
 * @extends {Component<AccountsViewProps, AccountsViewState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript.
 * It demonstrates context usage, dynamic styles, generic props, and more.
 */
export declare class AccountsView<T extends CombinedAccounts> extends Component<AccountsViewProps<T>, AccountsViewState<T>> {
    /** Reference to the main div element of the component. */
    private myRef;
    static defaultProps: {
        children: null;
        contextQuestions: string[];
    };
    constructor(props: AccountsViewProps<T>);
    /**
     * Lifecycle method that runs after the component has been mounted.
     */
    componentDidMount(): void;
    /**
     * Renders the component.
     * @returns {ReactNode}
     */
    render(): ReactNode;
}
