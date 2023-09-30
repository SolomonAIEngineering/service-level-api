/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { createContext, ReactNode, RefObject, Component } from 'react';
import { AccountBalanceHistory } from 'src/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { cn } from 'src/lib-utils/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { StatisticalTests } from 'src/lib-utils/StatisticalTests';
import { AreaChart } from '@tremor/react';
import { BarChart } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/** @type {React.Context<string>} */
/**
 * Context to provide account balance history for child components.
 * Primarily created to establish a shared context if required by any child components.
 * Defaulted to an empty array.
 */
const HistoricalAccountBalanceChartContext = createContext<
  AccountBalanceHistory[]
>([]);

/**
 * Props for the `HistoricalAccountBalanceChart` component.
 *
 * @template T A type that extends `AccountBalanceHistory`, allowing for potential extensions to the base type in the future.
 *
 * @property {T[]} historicalAccountBalance - Array of account balance history to be charted.
 * @property {string} [className] - Optional CSS class to style the component.
 */
export type HistoricalAccountBalanceChartProps<
  T extends AccountBalanceHistory,
> = {
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
export class HistoricalAccountBalanceChart<
  T extends AccountBalanceHistory,
> extends Component<
  HistoricalAccountBalanceChartProps<T>,
  HistoricalAccountBalanceChartState
> {
  private myRef: RefObject<HTMLDivElement>;

  static defaultProps = {
    className: '',
    historicalAccountBalance: [],
    disableLabel: false,
  };

  constructor(props: HistoricalAccountBalanceChartProps<T>) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.myRef = React.createRef();
    this.averageBalance = this.averageBalance.bind(this);
    this.totalAccumulation = this.totalAccumulation.bind(this);
    this.maxBalance = this.maxBalance.bind(this);
    this.minBalance = this.minBalance.bind(this);
    this.movingAverage = this.movingAverage.bind(this);
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

  private averageBalance(data: AccountBalanceHistory[]): number {
    if (data.length === 0) return 0;
    return this.totalAccumulation(data) / data.length;
  }

  private totalAccumulation(data: AccountBalanceHistory[]): number {
    return data.reduce((accum, record) => accum + record.balance, 0);
  }

  private maxBalance(data: AccountBalanceHistory[]): number {
    return Math.max(...data.map((record) => record.balance));
  }

  private minBalance(data: AccountBalanceHistory[]): number {
    return Math.min(...data.map((record) => record.balance));
  }

  /**
   * Computes the moving average of account balances.
   * @param data The data containing the account balance histories.
   * @param windowSize The window size for the moving average.
   * @returns An array of moving averages for the given window size.
   */
  private movingAverage(
    data: AccountBalanceHistory[],
    windowSize: number,
  ): number[] {
    const result = [];

    for (let i = 0; i <= data.length - windowSize; i++) {
      let sum = 0;
      for (let j = 0; j < windowSize; j++) {
        sum += data[i + j].balance;
      }
      result.push(sum / windowSize);
    }

    return result;
  }

  /**
   * Renders the component.
   * @returns {ReactNode}
   */
  render(): ReactNode {
    const { historicalAccountBalance, className, disableLabel } = this.props;

    if (
      historicalAccountBalance === null ||
      historicalAccountBalance.length === 0
    ) {
      return null;
    }

    return (
      <HistoricalAccountBalanceChartContext.Provider
        value={historicalAccountBalance}
      >
        <Tabs defaultValue="overview" className={cn('w-full', className)}>
          <TabsList className="grid w-full grid-cols-2 font-bold">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="statistics">Trends</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="flex flex-row justify-between gap-2 px-2"></div>
            <AccountBalanceChart
              data={historicalAccountBalance}
              title="Account Balance Through Time"
              description="This chart shows the account balance over time."
              disableLabels={disableLabel}
            />
          </TabsContent>
          <TabsContent value="statistics">
            <div className="grid grid-cols-2 justify-between gap-2 px-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-bold">Metrics</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {this.averageBalance(historicalAccountBalance).toFixed(2)}
                    <span className="text-xs"> average </span>
                  </div>
                  <div className="grid grid-cols-2">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {this.maxBalance(historicalAccountBalance).toFixed(0)}{' '}
                        <span className="text-xs"> max </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {this.minBalance(historicalAccountBalance).toFixed(0)}{' '}
                        <span className="text-xs"> min </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-bold">
                    Statistics
                  </CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {StatisticalTests.kurtosis(
                      historicalAccountBalance,
                    ).toFixed(2)}
                    <span className="text-xs"> kurtosis </span>
                  </div>
                  <div className="grid grid-cols-2">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {StatisticalTests.standardDeviation(
                          historicalAccountBalance,
                        ).toFixed(0)}{' '}
                        <span className="text-xs"> std </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {StatisticalTests.skewness(
                          historicalAccountBalance,
                        ).toFixed(0)}{' '}
                        <span className="text-xs"> skew </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </HistoricalAccountBalanceChartContext.Provider>
    );
  }
}

const AccountBalanceChart: React.FC<{
  data: AccountBalanceHistory[];
  className?: string;
  title: string;
  description: string;
  disableLabels?: boolean;
}> = ({ data, className, title, description }) => {
  type ConvertedAccountHistory = {
    date: string;
    'Account Balance': number;
  };

  function convertAccountHistoryArray(
    data: AccountBalanceHistory[],
  ): ConvertedAccountHistory[] {
    return data.map((item) => {
      return {
        date: item.time ? item.time.toISOString() : '',
        'Account Balance': item.balance,
      };
    });
  }

  const convertedData = convertAccountHistoryArray(data);

  return (
    <Card className={cn('m-2', className)}>
      <CardHeader>
        <CardTitle className="text-lg font bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-3">
        <Card className="text-black">
          <AreaChart
            className="mt-6 w-full h-[400px]"
            data={convertedData}
            index="balance"
            valueFormatter={(number: number) =>
              `$${Intl.NumberFormat('us').format(number).toString()}`
            }
            categories={['Account Balance']}
            colors={['slate']}
            showXAxis={true}
            showGridLines={false}
            startEndOnly={true}
            showYAxis={false}
            showLegend={true}
          />
        </Card>
      </CardContent>
    </Card>
  );
};

/*
(Things we should support as part of our historical account balance)
Trend Analysis: Understand the underlying direction in which the data is moving. Is it increasing, decreasing, or remaining stable over time?

Seasonality: Determine if there are recurring patterns or cycles in the data. For instance, retailers often see higher sales around holidays, or energy consumption might be higher in the winter.

Anomaly Detection: Identify unexpected or unusual patterns in the data. These can be due to genuine fluctuations or might indicate errors or fraud.

Forecasting: Predict future values based on historical data. Various models, including ARIMA, Exponential Smoothing, and Prophet, can be used for this purpose.

Moving Averages: Smooth out short-term fluctuations to see the longer-term trend. This can be done using simple moving averages, weighted moving averages, or exponential moving averages.

Volatility: Measure the variation in the data over time. High volatility indicates that the value can potentially be spread out over a larger range of values.

Frequency Domain Analysis: Understand the periodic components of the time series using techniques like Fast Fourier Transform (FFT).

Autocorrelation and Partial Autocorrelation: Measure the relationship between a time series and a lagged version of itself. This is often used in ARIMA modeling to determine the parameters.

Decomposition: Break down a time series into its constituent components of trend, seasonality, and residuals.

Growth Rate: Measure how much a series has grown over a specified period, often expressed as a percentage.

Cumulative Sum: Calculate the cumulative total of the data points over time.

Momentum: Calculate the rate of acceleration of a time series, often used in financial contexts.

Bollinger Bands: A technique used in finance to understand the volatility and identify 'overbought' or 'oversold' conditions.

Statistical Tests: Tests like the Augmented Dickey-Fuller or KPSS test to check for stationarity in the data.

Rolling Metrics: Metrics like rolling standard deviation or rolling variance, which are computed over a specific window that 'rolls' over the time series.

Lag Analysis: Analyze the relationship between lagged variables to understand delayed effects.
*/
