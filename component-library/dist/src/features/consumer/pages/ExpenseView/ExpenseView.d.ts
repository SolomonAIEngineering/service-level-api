import { ReactNode, Component } from 'react';
import { AccountBalanceHistory, Transaction } from 'src/data-contracts/financial-service/data-contracts';
import { IncomeMetricsClass } from 'src/index';
import { ExpenseMetricsClass } from 'src/types/financial/expense-metrics';
type CompoundMetricType = ExpenseMetricsClass[] | IncomeMetricsClass[] | undefined;
type SelectedDateRangeOfEvaluation = '30 Days' | '2 Weeks' | '1 Week';
export type ExpenseIncomeViewProps<T extends CompoundMetricType> = {
    /** Primary data to be displayed or processed by the component. */
    data: T;
    /** Optional CSS classes for styling the component. */
    className?: string;
    enableDebugMode?: boolean;
    historicalAccountBalance: AccountBalanceHistory[];
    transactions: Transaction[];
};
export type ExpenseIncomeViewState<T extends CompoundMetricType> = {
    /** Counter to keep track of the number of button clicks. */
    data: T;
    historicalAccountBalance: AccountBalanceHistory[];
    selectedDateRangeOfEvaluation: SelectedDateRangeOfEvaluation;
};
/**
 * @class ExpenseIncomeView
 * @extends {Component<ExpenseIncomeViewProps, ExpenseIncomeViewState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript.
 * It demonstrates context usage, dynamic styles, generic props, and more.
 */
export declare class ExpenseIncomeView<T extends CompoundMetricType> extends Component<ExpenseIncomeViewProps<T>, ExpenseIncomeViewState<T>> {
    /** Reference to the main div element of the component. */
    private myRef;
    static defaultProps: {};
    constructor(props: ExpenseIncomeViewProps<T>);
    /**
     * Lifecycle method that runs after the component has been mounted.
     */
    componentDidMount(): void;
    convertToChartData(data: AccountBalanceHistory): {
        name: string;
        total: number;
    };
    getNumberOfTransactionsPerCategory(): {
        name: string;
        value: number;
    }[];
    aggregateTransactionsByMonthAndConvertToChartData(): {
        name: string;
        total: number;
    }[];
    setSelectedDateRangeOfEvaluation(selectedDateRangeOfEvaluation: SelectedDateRangeOfEvaluation): void;
    monthNumberToString(monthNumber: number): string;
    getMetricsForMonth(month: number): (ExpenseMetricsClass | IncomeMetricsClass)[];
    getTopCategories(): {
        name: string;
        transactionCount: number;
    }[];
    getHistoricalAccountBalance(): AccountBalanceHistory[];
    /**
     * Renders the component.
     * @returns {ReactNode}
     */
    render(): ReactNode;
}
export {};
