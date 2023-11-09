import React from 'react';
import { createContext, ReactNode, RefObject, Component } from 'react';
import {
  BarGraph,
  HistoricalAccountBalanceChart,
  TransactionDataTable,
} from 'src/components';
import { SimpleStatsCard } from 'src/components/SimpleStatisticCard/SimpleStatisticCard';
import { Card } from 'src/components/ui/card';
import { Label } from 'src/components/ui/label';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'src/components/ui/tabs';
import {
  AccountBalanceHistory,
  ExpenseMetrics,
  IncomeMetrics,
  Transaction,
} from 'src/data-contracts/financial-service/data-contracts';
import { IncomeMetricsClass } from 'src/index';
import { cn } from 'src/lib-utils/utils';
import { ExpenseMetricsClass } from 'src/types/financial/expense-metrics';

type CompoundMetricType =
  | ExpenseMetricsClass[]
  | IncomeMetricsClass[]
  | undefined;

type SelectedDateRangeOfEvaluation = '30 Days' | '2 Weeks' | '1 Week';

// type SelectedDateRange = {
//   value: SelectedDateRangeOfEvaluation;
//   label: string;
// };

/** Context to provide a default value for the component. */
const ExpenseIncomeViewContext = createContext<CompoundMetricType>(undefined);

export type ExpenseIncomeViewProps<T extends CompoundMetricType> = {
  /** Primary data to be displayed or processed by the component. */
  data: T;

  /** Optional CSS classes for styling the component. */
  className?: string;

  enableDebugMode?: boolean;

  // historical account balance tied to the account of interest
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
export class ExpenseIncomeView<T extends CompoundMetricType> extends Component<
  ExpenseIncomeViewProps<T>,
  ExpenseIncomeViewState<T>
> {
  /** Reference to the main div element of the component. */
  private myRef: RefObject<HTMLDivElement>;

  static defaultProps = {};

  constructor(props: ExpenseIncomeViewProps<T>) {
    super(props);
    this.state = {
      data: props.data,
      historicalAccountBalance: props.historicalAccountBalance.sort(
        (a, b) => new Date(a.time!).getTime() - new Date(b.time!).getTime(),
      ),
      selectedDateRangeOfEvaluation: '30 Days',
    };

    this.convertToChartData = this.convertToChartData.bind(this);
    this.getNumberOfTransactionsPerCategory =
      this.getNumberOfTransactionsPerCategory.bind(this);
    this.aggregateTransactionsByMonthAndConvertToChartData =
      this.aggregateTransactionsByMonthAndConvertToChartData.bind(this);
    this.setSelectedDateRangeOfEvaluation =
      this.setSelectedDateRangeOfEvaluation.bind(this);
    this.monthNumberToString = this.monthNumberToString.bind(this);
    this.getMetricsForMonth = this.getMetricsForMonth.bind(this);
    this.getTopCategories = this.getTopCategories.bind(this);
    this.getHistoricalAccountBalance =
      this.getHistoricalAccountBalance.bind(this);

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

  convertToChartData(data: AccountBalanceHistory) {
    return {
      // Assuming the 'time' property represents the X-axis unit.
      // Using the date as the name for simplicity. You might want to format it more appropriately.
      name: data.time ?? 'Unknown Date',
      // Mapping 'balance' to the 'uv' metric.
      total: data.balance ?? 0,
      // Not sure which property from AccountBalanceHistory should map to 'pv', so leaving it out for now.
      // You can map another property if needed.
    };
  }

  // get the number of transaction per category
  // this function is used to get the data for the bar chart
  getNumberOfTransactionsPerCategory() {
    const { data } = this.state;

    if (data === undefined) {
      return [];
    }

    return data
      .map((expense) => {
        if (expense.personalFinanceCategoryPrimary === undefined) {
          return {
            name: 'Unknown Category',
            value: Number(expense.transactionCount),
          };
        }

        return {
          name: expense.personalFinanceCategoryPrimary,
          value: Number(expense.transactionCount),
        };
      })
      .sort((a, b) => b.value - a.value);
  }

  // aggregate the transactions by month and convert them to a chart data format
  // this function is used to get the data for the line chart
  aggregateTransactionsByMonthAndConvertToChartData() {
    const { data } = this.state;

    if (data === undefined) {
      return [];
    }
    const aggregatedData: { [key: number]: number } = {};
    data.forEach((expense) => {
      if (expense.month !== undefined) {
        aggregatedData[expense.month] =
          (aggregatedData[expense.month] || 0) +
          Number(expense.transactionCount || 0);
      }
    });

    // Convert aggregated data to array
    const aggregatedMonthlyTxnCount = Object.entries(aggregatedData)
      .map(([month, total]) => ({
        month: Number(month),
        total,
      }))
      .sort((a, b) => a.month - b.month);

    // Convert the aggregatedMonthlyTxnCount to a chart data format
    return aggregatedMonthlyTxnCount.map((data) => {
      return {
        name: this.monthNumberToString(data.month) || 'Unknown Month',
        total: data.total,
      };
    });
  }

  setSelectedDateRangeOfEvaluation(
    selectedDateRangeOfEvaluation: SelectedDateRangeOfEvaluation,
  ) {
    this.setState({
      selectedDateRangeOfEvaluation:
        selectedDateRangeOfEvaluation as SelectedDateRangeOfEvaluation,
    });
  }

  monthNumberToString(monthNumber: number): string {
    if (monthNumber < 1 || monthNumber > 12) {
      monthNumber = 1;
    }

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return months[monthNumber - 1];
  }

  // get all the expenses or income metrics for a given month
  // this function is used to get the data for the line chart
  getMetricsForMonth(month: number) {
    const { data } = this.state;

    if (data === undefined) {
      return [];
    }

    return data.filter((metric) => {
      return metric.month === month;
    });
  }

  getTopCategories() {
    const { data } = this.state;
    const { enableDebugMode } = this.props;

    if (enableDebugMode) {
      return [
        {
          name: 'Food',
          transactionCount: 100,
        },
        {
          name: 'Entertainment',
          transactionCount: 200,
        },
        {
          name: 'Transportation',
          transactionCount: 300,
        },
        {
          name: 'Education',
          transactionCount: 400,
        },
        {
          name: 'Health',
          transactionCount: 500,
        },
      ];
    } else {
      if (data === undefined) {
        return [];
      }

      return data
        .map((expense) => {
          return {
            name: expense.personalFinanceCategoryPrimary,
            transactionCount: Number(expense.transactionCount),
          };
        })
        .sort((a, b) => b.transactionCount - a.transactionCount);
    }
  }

  getHistoricalAccountBalance() {
    // we get the range based on the selectedDateRangeOfEvaluation
    // we then filter the historicalAccountBalance based on the range
    // we then return the filtered historicalAccountBalance

    const { historicalAccountBalance } = this.state;
    const { selectedDateRangeOfEvaluation } = this.state;

    if (selectedDateRangeOfEvaluation === '30 Days') {
      // get only the last 30 days of historicalAccountBalance
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return historicalAccountBalance.filter((accountBalance) => {
        return (
          new Date(accountBalance.time!).getTime() >= thirtyDaysAgo.getTime()
        );
      });
    } else if (selectedDateRangeOfEvaluation === '2 Weeks') {
      // get only 14 days of histroical account balance
      const fourteenDaysAgo = new Date();
      fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
      return historicalAccountBalance.filter((accountBalance) => {
        return (
          new Date(accountBalance.time!).getTime() >= fourteenDaysAgo.getTime()
        );
      });
    } else {
      // get only 7 days of historical account balance
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      return historicalAccountBalance.filter((accountBalance) => {
        return (
          new Date(accountBalance.time!).getTime() >= sevenDaysAgo.getTime()
        );
      });
    }
  }

  /**
   * Renders the component.
   * @returns {ReactNode}
   */
  render(): ReactNode {
    const { className, transactions } = this.props;
    const { data } = this.state;

    if (data === undefined) {
      return <></>;
    }

    const topCategories = this.getTopCategories().splice(0, 10);
    const instanceOfExpenseMetrics = data[0] instanceof ExpenseMetricsClass;

    {
      /** TODO: need to account for debug mode */
    }

    return (
      <ExpenseIncomeViewContext.Provider value={data}>
        <div
          className={cn('flex flex-col gap-2 w-full', className)}
          ref={this.myRef}
        >
          <div className="flex flex-col gap-2">
            {/** list our the top 5 categories */}
            <div className="flex flex-row justify-between">
              <h2 className="text-xl font-semibold">Top 10 Categories</h2>
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              {topCategories.map((category) => {
                return (
                  <Card className="flex flex-col justify-between p-5">
                    <p className="text-gray-700 font-bold">{category.name}</p>
                    <p className="text-gray-700">
                      {category.transactionCount} transactions
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            {instanceOfExpenseMetrics ? (
              <ExpenseAnalytics data={data as ExpenseMetrics[]} />
            ) : (
              <IncomeAnalytics data={data as IncomeMetrics[]} />
            )}
          </div>

          <div>
            <HistoricalAccountBalanceChart
              historicalAccountBalance={this.getHistoricalAccountBalance()}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex flex-col gap-2">
              <BarGraph
                data={this.aggregateTransactionsByMonthAndConvertToChartData()}
                label="Transactions"
                className="w-full"
              />
            </div>
          </div>
          <div>
            <TransactionDataTable transactions={transactions} />
          </div>
          <div></div>
        </div>
      </ExpenseIncomeViewContext.Provider>
    );
  }
}

const ExpenseAnalytics: React.FC<{ data: ExpenseMetrics[] }> = ({ data }) => {
  const [totalYearlyExpense, setTotalYearlyExpense] = React.useState<number>(0);
  const [averageMonthlyExpense, setAverageMonthlyExpense] =
    React.useState<number>(0);
  const [highestExpenseCategory, setHighestExpenseCategory] =
    React.useState<string>('');
  const [monthWithHighestTransactions, setMonthWithHighestTransactions] =
    React.useState<number>(0);

  const [top3Categories, setTop3Categories] = React.useState<string[]>([]);
  const [averageTransactionAmount, setAverageTransactionAmount] =
    React.useState<number>(0);
  const [monthWithLowestExpenditure, setMonthWithLowestExpenditure] =
    React.useState<number>(0);
  const [expenditureVolatility, setExpenditureVolatility] =
    React.useState<number>(0);
  const [growthRateChartData, setGrowthRateChartData] = React.useState<
    {
      name: string;
      total: number;
    }[]
  >([]);

  React.useEffect(() => {
    // Compute metrics when data changes

    // 1. Total Yearly Expense
    const yearlyExpense = data.reduce(
      (sum, expense) => sum + (expense.totalExpenses || 0),
      0,
    );
    setTotalYearlyExpense(yearlyExpense);

    // 2. Average Monthly Expense
    setAverageMonthlyExpense(yearlyExpense / 12);

    // 3. Category with Highest Expenditure
    const categoryExpenses: { [key: string]: number } = {};
    data.forEach((expense) => {
      if (expense.personalFinanceCategoryPrimary) {
        categoryExpenses[expense.personalFinanceCategoryPrimary] =
          (categoryExpenses[expense.personalFinanceCategoryPrimary] || 0) +
          (expense.totalExpenses || 0);
      }
    });
    const highestCategory = Object.keys(categoryExpenses).reduce(
      (a, b) => (categoryExpenses[a] > categoryExpenses[b] ? a : b),
      '',
    );
    setHighestExpenseCategory(highestCategory);

    // 4. Month with Highest Number of Transactions
    const transactionCounts: { [key: number]: number } = {};
    data.forEach((expense) => {
      if (expense.month !== undefined) {
        transactionCounts[expense.month] =
          (transactionCounts[expense.month] || 0) +
          Number(expense.transactionCount || '0');
      }
    });
    const highestTransactionsMonth = Object.keys(transactionCounts).reduce(
      (a, b) =>
        transactionCounts[Number(a)] > transactionCounts[Number(b)]
          ? Number(a)
          : Number(b),
      0,
    );
    setMonthWithHighestTransactions(highestTransactionsMonth);

    // 1. Monthly Growth Rate
    const monthlyExpenses: { [key: number]: number } = {};
    data.forEach((expense) => {
      if (expense.month !== undefined) {
        monthlyExpenses[expense.month] =
          (monthlyExpenses[expense.month] || 0) + (expense.totalExpenses || 0);
      }
    });
    const growthRates: { [key: number]: number } = {};
    for (let month = 2; month <= 12; month++) {
      if (
        monthlyExpenses[month] !== undefined &&
        monthlyExpenses[month - 1] !== undefined
      ) {
        growthRates[month] =
          ((monthlyExpenses[month] - monthlyExpenses[month - 1]) /
            monthlyExpenses[month - 1]) *
          100;
      }
    }

    const chartData: {
      name: string;
      total: number;
    }[] = Object.entries(growthRates).map(([month, rate]) => {
      return {
        name: `Month ${month}`,
        total: rate,
      };
    });

    setGrowthRateChartData(chartData);

    // 2. Top 3 Categories
    const categoryOfExpenses: { [key: string]: number } = {};
    data.forEach((expense) => {
      if (expense.personalFinanceCategoryPrimary) {
        categoryOfExpenses[expense.personalFinanceCategoryPrimary] =
          (categoryOfExpenses[expense.personalFinanceCategoryPrimary] || 0) +
          (expense.totalExpenses || 0);
      }
    });
    const sortedCategories = Object.keys(categoryOfExpenses).sort(
      (a, b) => categoryOfExpenses[b] - categoryOfExpenses[a],
    );
    setTop3Categories(sortedCategories.slice(0, 3));

    // 3. Average Transaction Amount
    const totalExpenses = data.reduce(
      (sum, expense) => sum + (expense.totalExpenses || 0),
      0,
    );
    const totalTransactions = data.reduce(
      (sum, expense) => sum + Number(expense.transactionCount || '0'),
      0,
    );
    setAverageTransactionAmount(
      totalTransactions ? totalExpenses / totalTransactions : 0,
    );

    // 4. Month with Lowest Expenditure
    const lowestExpenseMonth = Object.keys(monthlyExpenses).reduce(
      (a, b) =>
        monthlyExpenses[Number(a)] < monthlyExpenses[Number(b)]
          ? Number(a)
          : Number(b),
      0,
    );
    setMonthWithLowestExpenditure(lowestExpenseMonth);

    // 5. Expenditure Volatility (Standard Deviation)
    const monthlyExpenseValues = Object.values(monthlyExpenses);
    const avgExpense =
      monthlyExpenseValues.reduce((a, b) => a + b, 0) /
      monthlyExpenseValues.length;
    const sqDifferences = monthlyExpenseValues.map((value) =>
      Math.pow(value - avgExpense, 2),
    );
    const avgSqDifference =
      sqDifferences.reduce((a, b) => a + b, 0) / sqDifferences.length;
    setExpenditureVolatility(Math.sqrt(avgSqDifference));
  }, [data]);

  return (
    <>
      <Tabs defaultValue="statistics" className="w-full">
        <TabsList>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="statistics">
          <div className="flex flex-col gap-2 p-[5%]">
            <Label className="text-xl font-bold">Statistics</Label>
            <div className="grid grid-cols-4 gap-2">
              <SimpleStatsCard
                title={'Total Yearly Expense'}
                metric={totalYearlyExpense.toFixed(2)}
                subtext="Total amount spent by the user in a year"
              />
              <SimpleStatsCard
                title={'Average Monthly Expense'}
                metric={averageMonthlyExpense.toFixed(2)}
                subtext="Average Monthly Expenses for the given user"
              />
              <SimpleStatsCard
                title={'Highest Expense Category'}
                metric={highestExpenseCategory}
                subtext="The category with the highest expenditure"
              />
              <SimpleStatsCard
                title={'Month with Highest Transactions'}
                metric={monthWithHighestTransactions}
                subtext="The month with the highest number of transactions"
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="insights">
          <div className="flex flex-col gap-2 p-[5%]">
            <Label className="text-xl font-bold">Statistics</Label>
            <BarGraph
              data={growthRateChartData}
              label="Monthly Transaction Growth Rate"
              className="w-full"
            />
            <div className="grid grid-cols-4 gap-2">
              <SimpleStatsCard
                title={'Top 3 Expense Categories'}
                metric={top3Categories.join(', ')}
                subtext="Average Monthly Expenses for the given user"
              />
              <SimpleStatsCard
                title={'Average Transaction Amount'}
                metric={averageTransactionAmount.toFixed(2)}
                subtext="The category with the highest expenditure"
              />
              <SimpleStatsCard
                title={'Month with Lowest Expenditure'}
                metric={monthWithLowestExpenditure}
                subtext="The month with the highest number of transactions"
              />
              <SimpleStatsCard
                title={'Expenditure Volatility'}
                metric={expenditureVolatility.toFixed(2)}
                subtext="The month with the highest number of transactions"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

const IncomeAnalytics: React.FC<{ data: IncomeMetrics[] }> = ({ data }) => {
  const [totalYearlyExpense, setTotalYearlyExpense] = React.useState<number>(0);
  const [averageMonthlyExpense, setAverageMonthlyExpense] =
    React.useState<number>(0);
  const [highestExpenseCategory, setHighestExpenseCategory] =
    React.useState<string>('');
  const [monthWithHighestTransactions, setMonthWithHighestTransactions] =
    React.useState<number>(0);

  const [top3Categories, setTop3Categories] = React.useState<string[]>([]);
  const [averageTransactionAmount, setAverageTransactionAmount] =
    React.useState<number>(0);
  const [monthWithLowestExpenditure, setMonthWithLowestExpenditure] =
    React.useState<number>(0);
  const [expenditureVolatility, setExpenditureVolatility] =
    React.useState<number>(0);
  const [growthRateChartData, setGrowthRateChartData] = React.useState<
    {
      name: string;
      total: number;
    }[]
  >([]);

  React.useEffect(() => {
    // Compute metrics when data changes

    // 1. Total Yearly Expense
    const yearlyExpense = data.reduce(
      (sum, expense) => sum + (expense.totalIncome || 0),
      0,
    );
    setTotalYearlyExpense(yearlyExpense);

    // 2. Average Monthly Expense
    setAverageMonthlyExpense(yearlyExpense / 12);

    // 3. Category with Highest Expenditure
    const categoryExpenses: { [key: string]: number } = {};
    data.forEach((expense) => {
      if (expense.personalFinanceCategoryPrimary) {
        categoryExpenses[expense.personalFinanceCategoryPrimary] =
          (categoryExpenses[expense.personalFinanceCategoryPrimary] || 0) +
          (expense.totalIncome || 0);
      }
    });
    const highestCategory = Object.keys(categoryExpenses).reduce(
      (a, b) => (categoryExpenses[a] > categoryExpenses[b] ? a : b),
      '',
    );
    setHighestExpenseCategory(highestCategory);

    // 4. Month with Highest Number of Transactions
    const transactionCounts: { [key: number]: number } = {};
    data.forEach((expense) => {
      if (expense.month !== undefined) {
        transactionCounts[expense.month] =
          (transactionCounts[expense.month] || 0) +
          Number(expense.transactionCount || '0');
      }
    });
    const highestTransactionsMonth = Object.keys(transactionCounts).reduce(
      (a, b) =>
        transactionCounts[Number(a)] > transactionCounts[Number(b)]
          ? Number(a)
          : Number(b),
      0,
    );
    setMonthWithHighestTransactions(highestTransactionsMonth);

    // 1. Monthly Growth Rate
    const monthlyExpenses: { [key: number]: number } = {};
    data.forEach((expense) => {
      if (expense.month !== undefined) {
        monthlyExpenses[expense.month] =
          (monthlyExpenses[expense.month] || 0) + (expense.totalIncome || 0);
      }
    });
    const growthRates: { [key: number]: number } = {};
    for (let month = 2; month <= 12; month++) {
      if (
        monthlyExpenses[month] !== undefined &&
        monthlyExpenses[month - 1] !== undefined
      ) {
        growthRates[month] =
          ((monthlyExpenses[month] - monthlyExpenses[month - 1]) /
            monthlyExpenses[month - 1]) *
          100;
      }
    }

    const chartData: {
      name: string;
      total: number;
    }[] = Object.entries(growthRates).map(([month, rate]) => {
      return {
        name: `Month ${month}`,
        total: rate,
      };
    });

    setGrowthRateChartData(chartData);

    // 2. Top 3 Categories
    const categoryOfExpenses: { [key: string]: number } = {};
    data.forEach((expense) => {
      if (expense.personalFinanceCategoryPrimary) {
        categoryOfExpenses[expense.personalFinanceCategoryPrimary] =
          (categoryOfExpenses[expense.personalFinanceCategoryPrimary] || 0) +
          (expense.totalIncome || 0);
      }
    });
    const sortedCategories = Object.keys(categoryOfExpenses).sort(
      (a, b) => categoryOfExpenses[b] - categoryOfExpenses[a],
    );
    setTop3Categories(sortedCategories.slice(0, 3));

    // 3. Average Transaction Amount
    const totalExpenses = data.reduce(
      (sum, expense) => sum + (expense.totalIncome || 0),
      0,
    );
    const totalTransactions = data.reduce(
      (sum, expense) => sum + Number(expense.transactionCount || '0'),
      0,
    );
    setAverageTransactionAmount(
      totalTransactions ? totalExpenses / totalTransactions : 0,
    );

    // 4. Month with Lowest Expenditure
    const lowestExpenseMonth = Object.keys(monthlyExpenses).reduce(
      (a, b) =>
        monthlyExpenses[Number(a)] < monthlyExpenses[Number(b)]
          ? Number(a)
          : Number(b),
      0,
    );
    setMonthWithLowestExpenditure(lowestExpenseMonth);

    // 5. Expenditure Volatility (Standard Deviation)
    const monthlyExpenseValues = Object.values(monthlyExpenses);
    const avgExpense =
      monthlyExpenseValues.reduce((a, b) => a + b, 0) /
      monthlyExpenseValues.length;
    const sqDifferences = monthlyExpenseValues.map((value) =>
      Math.pow(value - avgExpense, 2),
    );
    const avgSqDifference =
      sqDifferences.reduce((a, b) => a + b, 0) / sqDifferences.length;
    setExpenditureVolatility(Math.sqrt(avgSqDifference));
  }, [data]);

  return (
    <>
      <Tabs defaultValue="statistics" className="w-full">
        <TabsList>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="statistics">
          <div className="flex flex-col gap-2 p-[5%]">
            <Label className="text-xl font-bold">Statistics</Label>
            <div className="grid grid-cols-4 gap-2">
              <SimpleStatsCard
                title={'Total Yearly Income'}
                metric={totalYearlyExpense.toFixed(2)}
                subtext="Total amount earned by the user in a year"
              />
              <SimpleStatsCard
                title={'Average Monthly Income'}
                metric={averageMonthlyExpense.toFixed(2)}
                subtext="Average Monthly Income for the given user"
              />
              <SimpleStatsCard
                title={'Highest Income Category'}
                metric={highestExpenseCategory}
                subtext="The category with the highest earning"
              />
              <SimpleStatsCard
                title={'Month with Highest Transactions'}
                metric={monthWithHighestTransactions}
                subtext="The month with the highest number of transactions"
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="insights">
          <div className="flex flex-col gap-2 p-[5%]">
            <Label className="text-xl font-bold">Statistics</Label>
            <BarGraph
              data={growthRateChartData}
              label="Monthly Income Growth Rate"
              className="w-full"
            />
            <div className="grid grid-cols-4 gap-2">
              <SimpleStatsCard
                title={'Top 3 Income Categories'}
                metric={top3Categories.join(', ')}
                subtext="Average Monthly Income for the given user"
              />
              <SimpleStatsCard
                title={'Average Transaction Amount'}
                metric={averageTransactionAmount.toFixed(2)}
                subtext="The category with the highest income"
              />
              <SimpleStatsCard
                title={'Month with Lowest Income'}
                metric={monthWithLowestExpenditure}
                subtext="The month with the lowert income"
              />
              <SimpleStatsCard
                title={'Income Volatility'}
                metric={expenditureVolatility.toFixed(2)}
                subtext="rate of change of income"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};
