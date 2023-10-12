import { ReactNode, Component } from 'react';
import { Transaction } from 'src/data-contracts/financial-service/data-contracts';
export type TransactionAnalyticsByMonthProps = {
    transactions: Transaction[];
    className?: string;
};
export type TransactionAnalyticsByMonthState = {
    transactions: Transaction[];
};
/**
 * @class TransactionAnalyticsByMonth
 * @extends {Component<TransactionAnalyticsByMonthProps, TransactionAnalyticsByMonthState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript
 * with TSDoc annotations. It has various features like context usage,
 * dynamic styles, generic props, and more.
 */
export declare class TransactionAnalyticsByMonth extends Component<TransactionAnalyticsByMonthProps, TransactionAnalyticsByMonthState> {
    private myRef;
    static defaultProps: {
        className: string;
    };
    constructor(props: TransactionAnalyticsByMonthProps);
    /**
     * Lifecycle method that runs after the component has been mounted.
     */
    componentDidMount(): void;
    /**
     * Categorizes the provided transactions.
     * @param transactions List of transactions to categorize.
     * @returns A categorized array.
     */
    private categorizeTransactions;
    /**
     * Groups transactions by month.
     * @param transactions List of transactions to group.
     * @returns An array of month groups with categorized transactions.
     */
    private groupByMonth;
    private extractCategories;
    /**
     * Renders the component.
     * @returns {ReactNode}
     */
    render(): ReactNode;
}
