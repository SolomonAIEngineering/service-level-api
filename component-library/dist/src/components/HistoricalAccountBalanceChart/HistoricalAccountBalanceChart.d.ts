import { ReactNode, Component } from 'react';
import { AccountBalanceHistory } from 'src/data-contracts/financial-service/data-contracts';
/**
 * Props for the `HistoricalAccountBalanceChart` component.
 *
 * @template T A type that extends `AccountBalanceHistory`, allowing for potential extensions to the base type in the future.
 *
 * @property {T[]} historicalAccountBalance - Array of account balance history to be charted.
 * @property {string} [className] - Optional CSS class to style the component.
 */
export type HistoricalAccountBalanceChartProps<T extends AccountBalanceHistory> = {
    historicalAccountBalance: T[];
    className?: string;
    disableLabel?: boolean;
};
/**
 * State for the `HistoricalAccountBalanceChart` component.
 *
 * @property {number} counter - A sample state property, likely used for internal component operations.
 */
export type HistoricalAccountBalanceChartState = {
    counter: number;
};
/**
 * The `HistoricalAccountBalanceChart` class component visualizes the history of account balances over time.
 * It leverages the `recharts` library to plot the balances and is built with extensibility in mind, using
 * generics for its props to allow potential custom extensions of the `AccountBalanceHistory` type.
 *
 * Features:
 * - Visualizes the account balance history using a line chart.
 * - Allows for potential customization of data types via TypeScript generics.
 * - Provides a context for potential child components to access the account balance history.
 * - Can be styled further through its `className` prop.
 *
 * @remarks
 * The component contains a sample state property named `counter` and methods associated with it.
 * Its actual use-case within the component should be clarified further.
 *
 * @example Basic Usage:
 * ```tsx
 * import { HistoricalAccountBalanceChart } from './path-to-component';
 *
 * const sampleHistory = [ ... ]; // Sample data here
 *
 * function App() {
 *   return (
 *     <HistoricalAccountBalanceChart historicalAccountBalance={sampleHistory} />
 *   );
 * }
 * ```
 *
 * @example Styling the component:
 * ```tsx
 * <HistoricalAccountBalanceChart className="border rounded-md" historicalAccountBalance={sampleHistory} />
 * ```
 */
export declare class HistoricalAccountBalanceChart<T extends AccountBalanceHistory> extends Component<HistoricalAccountBalanceChartProps<T>, HistoricalAccountBalanceChartState> {
    private myRef;
    static defaultProps: {
        className: string;
        disableLabel: boolean;
    };
    constructor(props: HistoricalAccountBalanceChartProps<T>);
    /** Lifecycle method when the component is about to mount. */
    componentWillMount(): void;
    /**
     * Lifecycle method that runs after the component has been mounted.
     */
    componentDidMount(): void;
    private averageBalance;
    private totalAccumulation;
    private maxBalance;
    private minBalance;
    /**
     * Computes the moving average of account balances.
     * @param data The data containing the account balance histories.
     * @param windowSize The window size for the moving average.
     * @returns An array of moving averages for the given window size.
     */
    private movingAverage;
    /**
     * Renders the component.
     * @returns {ReactNode}
     */
    render(): ReactNode;
}
