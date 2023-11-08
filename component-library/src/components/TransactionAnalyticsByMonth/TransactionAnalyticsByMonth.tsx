import {
  Bold,
  Flex,
  Grid,
  Icon,
  List,
  ListItem,
  Title,
  Text,
  Select,
  SelectItem,
  DonutChart,
  Col,
  ProgressBar,
  BarChart,
  ScatterChart,
} from '@tremor/react';
import React from 'react';;
import { createContext, ReactNode, RefObject, Component } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Card as TremorCard } from '@tremor/react';
import { cn, formatNumber } from 'src/lib-utils/utils';
import { RocketIcon } from 'lucide-react';
import { TabsContent, TabsList } from '@radix-ui/react-tabs';
import { Tabs, TabsTrigger } from '../ui/tabs';
import { MonthlyExpenditureCard } from './MonthlyExpenditureCard';
import { Transaction } from 'src/data-contracts/financial-service/data-contracts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/** @type {React.Context<Transaction[]>} */
const TransactionAnalyticsByMonthContext = createContext<Transaction[]>([]);

export type TransactionAnalyticsByMonthProps = {
  transactions: Transaction[];
  className?: string;
};

export type TransactionAnalyticsByMonthState = {
  transactions: Transaction[];
};

type TransactionCategory = {
  name: string;
  numTransactions: number;
  amount: number; // Formatted as a string for presentation
  transactions: Transaction[];
};

type MonthTransactions = {
  name: string;
  data: TransactionCategory[];
};

type CategorizedPickerSet = {
  key: string;
  name: string;
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
export class TransactionAnalyticsByMonth extends Component<
  TransactionAnalyticsByMonthProps,
  TransactionAnalyticsByMonthState
> {
  private myRef: RefObject<HTMLDivElement>;

  static defaultProps = {
    className: '',
  };

  constructor(props: TransactionAnalyticsByMonthProps) {
    super(props);
    this.state = {
      transactions: props.transactions,
    };

    this.myRef = React.createRef();
    this.categorizeTransactions = this.categorizeTransactions.bind(this);
    this.groupByMonth = this.groupByMonth.bind(this);
    this.extractCategories = this.extractCategories.bind(this);
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
   * Categorizes the provided transactions.
   * @param transactions List of transactions to categorize.
   * @returns A categorized array.
   */
  private categorizeTransactions(
    transactions: Transaction[],
  ): TransactionCategory[] {
    const categoriesMap = new Map<string, TransactionCategory>();

    for (const transaction of transactions) {
      const categoryName = transaction.personalFinanceCategoryPrimary || '';
      const currentCategory = categoriesMap.get(categoryName) || {
        name: categoryName,
        numTransactions: 0,
        amount: 0,
        transactions: [] as Transaction[],
      };

      currentCategory.numTransactions++;
      const currentAmount = currentCategory.amount;
      const transactionAmount = transaction.amount || 0;
      currentCategory.amount = parseFloat(
        (currentAmount + transactionAmount).toFixed(2),
      );
      currentCategory.transactions.push(transaction);
      categoriesMap.set(categoryName, currentCategory);
    }

    return Array.from(categoriesMap.values());
  }

  /**
   * Groups transactions by month.
   * @param transactions List of transactions to group.
   * @returns An array of month groups with categorized transactions.
   */
  private groupByMonth(transactions: Transaction[]): MonthTransactions[] {
    const monthlyTransactions = new Map<string, Transaction[]>();

    for (const transaction of transactions) {
      const currentDate = transaction.currentDate;
      if (!currentDate) continue;
      const monthYear = `${currentDate.split('-')[1]}-${
        currentDate.split('-')[0]
      }`;
      const monthData = monthlyTransactions.get(monthYear) || [];
      monthData.push(transaction);
      monthlyTransactions.set(monthYear, monthData);
    }

    const months: MonthTransactions[] = [];

    for (const [monthYear, monthTrans] of monthlyTransactions.entries()) {
      months.push({
        name: monthYear,
        data: this.categorizeTransactions(monthTrans),
      });
    }

    // Sorting for a consistent ordering of months
    return months.sort((a, b) => a.name.localeCompare(b.name));
  }

  private extractCategories(): CategorizedPickerSet[] {
    // Create a set to store unique category names
    const categorySet = new Set<string>();

    this.state.transactions.forEach((transaction) => {
      return categorySet.add(transaction.personalFinanceCategoryPrimary || '');
    });

    // Convert category names to the desired format
    const result = Array.from(categorySet).map((category) => ({
      key: category.toLowerCase().replace(/[^a-z0-9]/g, ''), // simple mechanism to convert name to key
      name: category,
    }));

    // Optionally, add the 'All Categories' entry
    result.unshift({ key: 'all', name: 'All Categories' });

    return result;
  }

  /**
   * Renders the component.
   * @returns {ReactNode}
   */
  render(): ReactNode {
    const { className } = this.props;
    const { transactions } = this.state;
    const monthsData = this.groupByMonth(transactions);

    return (
      <TransactionAnalyticsByMonthContext.Provider value={transactions}>
        <Card className={cn('w-full', className)}>
          <div className="p-4 flex flex-col gap-2">
            <Tabs defaultValue={'txnbymonth'} className="min-w-[400px]">
              <TabsList className="grid w-full grid-cols-2 font-bold rounded-2xl">
                <TabsTrigger value="txnbycategories">Categories</TabsTrigger>
                <TabsTrigger value="txnbymonth">Monthly Breakdown</TabsTrigger>
              </TabsList>
              <TabsContent value="txnbycategories" className="mt-2">
                <TransactionsCategorizePieChart
                  categorySet={this.extractCategories()}
                  transactions={this.state.transactions}
                />
              </TabsContent>
              <TabsContent value="txnbymonth" className="mt-2">
                <TransactionCategories monthlyTransactions={monthsData} />
              </TabsContent>
            </Tabs>
          </div>
        </Card>
      </TransactionAnalyticsByMonthContext.Provider>
    );
  }
}

/**
 * A React component that visualizes transaction data in the form of pie charts.
 *
 * @example
 * ```tsx
 * const transactions: Transaction[] = [
 *   { personalFinanceCategoryPrimary: 'Groceries', amount: 50, merchantName: 'SuperMart' },
 *   // ... more transactions
 * ];
 * const categorySet: CategorizedPickerSet[] = [
 *   { key: 'groceries', name: 'Groceries' },
 *   // ... more categories
 * ];
 * <TransactionsCategorizePieChart categorySet={categorySet} transactions={transactions} />
 * ```
 *
 * @param props The properties of the component.
 * @param props.categorySet The set of categories to choose from.
 * @param props.transactions The list of transactions to visualize.
 */
const TransactionsCategorizePieChart: React.FC<{
  categorySet: CategorizedPickerSet[];
  transactions: Transaction[];
}> = ({ categorySet, transactions }) => {
  const valueFormatter = (number: number) =>
    `$${Intl.NumberFormat('us').format(number).toString()}`;

  const filterByCategory = (category: string, data: Transaction[]) =>
    category === 'all'
      ? data
      : data.filter((txn) => txn.personalFinanceCategoryPrimary === category);
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [filteredData, setFilteredData] = React.useState(transactions);

  React.useEffect(() => {
    setFilteredData(filterByCategory(selectedCategory, transactions));
  }, [selectedCategory, transactions]);

  const countTransactionsByCategory = (
    transactions: Transaction[],
  ): { categoryName: string; count: number }[] => {
    const counts: { [category: string]: number } = {};

    transactions.forEach((transaction) => {
      const category = transaction.personalFinanceCategoryPrimary;
      if (category && !counts[category]) {
        counts[category] = 0;
      }
      if (category && transaction.amount) {
        counts[category] += transaction.amount;
      }
    });

    const result = Object.entries(counts).map(([categoryName, count]) => {
      return {
        categoryName,
        count,
      };
    });

    return result;
  };

  function countTransactionsByMerchant(
    transactions: Transaction[],
  ): { merchantName: string; count: number }[] {
    const merchantCounts: { [merchant: string]: number } = {};

    transactions.forEach((transaction) => {
      const merchant = transaction.merchantName;
      if (merchant && !merchantCounts[merchant]) {
        merchantCounts[merchant] = 0;
      }
      if (merchant) {
        merchantCounts[merchant]++;
      }
    });

    const result: { merchantName: string; count: number }[] = [];

    for (const merchant in merchantCounts) {
      if (Object.prototype.hasOwnProperty.call(merchantCounts, merchant)) {
        result.push({
          merchantName: merchant,
          count: merchantCounts[merchant],
        });
      }
    }

    return result;
  }

  const merchantToTransactionMap = countTransactionsByMerchant(transactions);

  return (
    <TremorCard className="mt-2 max-w-4xl mx-auto">
      <div className="hidden sm:block">
        <Flex className="space-x-4" justifyContent="start" alignItems="center">
          <Title className="truncate">Transactions</Title>
          <Select
            placeholder="Category Selection"
            className="max-w-sm mx-auto space-y-6"
          >
            {categorySet.map((category) => (
              <SelectItem
                key={category.key}
                value={category.key}
                onClick={() => setSelectedCategory(category.name)}
                icon={RocketIcon}
              >
                {category.name}
              </SelectItem>
            ))}
          </Select>
        </Flex>
      </div>
      {/* --- Same code snippet as above but with no flex to optmize mobile view --- */}
      <div className="sm:hidden">
        <Title className="truncate">Transactions</Title>
        <Select
          onValueChange={setSelectedCategory}
          placeholder="Category Selection"
          className="max-w-full mt-2"
        >
          {categorySet.map((category) => (
            <SelectItem key={category.key} value={category.key}>
              {category.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      <Grid numItemsLg={1} className="mt-8 gap-y-10 gap-x-14">
        <TremorCard>
          <Title>Spending Across Time</Title>
          <Text>Comparison between Spending and Time</Text>
          <BarChart
            className="mt-4 h-80"
            data={filteredData}
            index="authorizedDate"
            categories={['amount']}
            colors={['blue', 'stone']}
            stack={false}
            yAxisWidth={60}
            valueFormatter={(number: number) =>
              `$${Intl.NumberFormat('us').format(number).toString()}`
            }
          />
        </TremorCard>
      </Grid>
      <Grid numItemsLg={3} className="mt-8 gap-y-10 gap-x-14">
        <Flex>
          <DonutChart
            data={countTransactionsByCategory(filteredData)}
            category="count"
            index="categoryName"
            variant="donut"
            valueFormatter={valueFormatter}
            className={
              'h-32 w-32 ' + // Default size for very small screens
              'sm:h-48 sm:w-48 ' + // Size for small screens and up
              'md:h-56 md:w-56 ' + // Size for medium screens and up
              'lg:h-60 lg:w-60 ' + // Size for large screens and up
              'xl:h-64 xl:w-64 ' // Size for extra-large screens and up
            }
          />
        </Flex>
        <Col numColSpan={1} numColSpanLg={2}>
          <Flex>
            <Text className="truncate">
              <Bold>Merchant</Bold>
            </Text>
            <Text>
              <Bold>% spent at merchant </Bold>
            </Text>
          </Flex>
          <div className="hidden sm:block">
            <List className="mt-2">
              {filteredData.map((txn) => (
                <ProgressBarHelperComponent
                  txn={txn}
                  merchantToTransactionMap={merchantToTransactionMap}
                  transactions={filteredData}
                />
              ))}
            </List>
          </div>
          {/* --- Same code snippet as above but with less width for data bars to optimize mobile --- */}
          <div className="sm:hidden">
            <List className="mt-2">
              {filteredData.map((txn) => (
                <ProgressBarHelperComponent
                  txn={txn}
                  merchantToTransactionMap={merchantToTransactionMap}
                  transactions={filteredData}
                />
              ))}
            </List>
          </div>
        </Col>
      </Grid>
    </TremorCard>
  );
};

const MONTHS = [
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

/**
 * A React component that visualizes transactions grouped by months in the form of tabs.
 *
 * @example
 * ```tsx
 * const monthlyTransactions: MonthTransactions[] = [
 *   { name: '01-2023', data: [ { name: 'Food', numTransactions: 5, amount: 50 } ] },
 *   // ... more month transactions
 * ];
 * <TransactionCategories monthlyTransactions={monthlyTransactions} />
 * ```
 *
 * @param props The properties of the component.
 * @param props.monthlyTransactions The list of transactions categorized by months.
 */
const TransactionCategories: React.FC<{
  monthlyTransactions: MonthTransactions[];
}> = ({ monthlyTransactions }) => {
  const convertDateFormat = (dateString: string): string => {
    const [monthNumber, year] = dateString.split('-');
    const monthName = MONTHS[parseInt(monthNumber) - 1];
    return `${monthName} 1, ${year}`;
  };

  const TransactionContent: React.FC<{ item: MonthTransactions }> = ({
    item,
  }) => {
    // we get all the transactions for the month
    // then we group them by category
    // then we sort them by amount

    const getAlltransactionForTheMonthAcrossAllCategories = () => {
      const allTransactions: Transaction[] = [];
      item.data.forEach((category) => {
        allTransactions.push(...category.transactions);
      });
      return allTransactions;
    };

    const categoricalComponent = () => {
      return (
        <List className="mt-4 ">
          {item.data.map((monthlyTransactionData) => (
            <ListItem key={monthlyTransactionData.name}>
              <Flex justifyContent="start" className="truncate space-x-4">
                <Icon
                  variant="light"
                  icon={RocketIcon}
                  size="md"
                  className="border bg-black text-white"
                />
                <div className="truncate">
                  <Text className="truncate">
                    <Bold>{monthlyTransactionData.name}</Bold>
                  </Text>
                  <Text className="truncate">{`${monthlyTransactionData.numTransactions} transactions`}</Text>
                </div>
              </Flex>
              <Text>{monthlyTransactionData.amount}</Text>
            </ListItem>
          ))}
        </List>
      );
    };

    return (
      <div className="mt-2 w-fit">
        <p className="text-md">
          Transaction volume for the month of
          <span className="font-bold"> {convertDateFormat(item.name)}</span>
        </p>
        <Tabs
          defaultValue="categories"
          className="w-[400px] p-2 flex flex-col gap-2"
        >
          <TabsList className="grid w-full grid-cols-2 font-bold rounded-2xl">
            <TabsTrigger value="categories">
              Spending Across Categories
            </TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
          </TabsList>
          <TabsContent value="categories">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Metrics</CardTitle>
                <CardDescription>
                  Your monthly breakdown of transactions for the month of{' '}
                  {convertDateFormat(item.name)}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <MonthlyExpenditureCard
                  transactions={getAlltransactionForTheMonthAcrossAllCategories()}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="metrics">
            <Card>
              <CardHeader>
                <CardTitle>Spending Across Categories</CardTitle>
                <CardDescription>
                  Below is a summary of your spending for the month of{' '}
                  {convertDateFormat(item.name)} across various categories
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {categoricalComponent()}
              </CardContent>
              <CardFooter>
                <TremorCard>
                  <Title>Transactions Across Categories</Title>
                  <Text>
                    As of {convertDateFormat(item.name)}.{' '}
                    <span className="text-xs font-bold">
                      Source: your spening{' '}
                    </span>
                  </Text>

                  <ScatterChart
                    className="h-80 mt-6 -ml-2"
                    data={item.data}
                    category="name"
                    x="numTransactions"
                    y="amount"
                    size="numTransactions"
                    colors={['slate', 'stone']}
                    showOpacity={true}
                    valueFormatter={{
                      x: (numberOfTransactions) =>
                        `${numberOfTransactions} txn`,
                      y: (transactionSize) => `$${transactionSize}`,
                      size: (numberOfTransactions) => `${numberOfTransactions}`,
                    }}
                    showLegend={true}
                  />
                </TremorCard>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  };

  return (
    <Tabs
      className="flex flex-row gap-5"
      defaultValue={monthlyTransactions.at(0)?.name}
    >
      <Grid numItemsSm={1} numItemsLg={3} className="gap-6">
        <Col numColSpan={1} numColSpanLg={1}>
          <TabsList className="flex flex-col gap-2 border rounded-2xl p-3">
            {monthlyTransactions.map((item) => (
              <TabsTrigger key={item.name} value={item.name}>
                {convertDateFormat(item.name)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Col>{' '}
        <Col numColSpan={1} numColSpanLg={2}>
          {monthlyTransactions.map((item) => (
            <TabsContent key={item.name} value={item.name}>
              <TransactionContent item={item} />
            </TabsContent>
          ))}
        </Col>
      </Grid>
    </Tabs>
  );
};

/**
 * A helper component that renders a progress bar for transactions based on merchant data.
 * The progress bar indicates the percentage of transactions for a given merchant relative to the total number of transactions.
 *
 * @example
 * ```tsx
 * const txn: Transaction = { merchantName: 'Amazon', ... };
 * const merchantToTransactionMap: { merchantName: string; count: number }[] = [
 *   { merchantName: 'Amazon', count: 5 },
 *   // ... more merchants
 * ];
 * const transactions: Transaction[] = [ txn, ... ];
 *
 * <ProgressBarHelperComponent txn={txn} merchantToTransactionMap={merchantToTransactionMap} transactions={transactions} />
 * ```
 *
 * @param txn The current transaction to visualize.
 * @param merchantToTransactionMap The map containing transaction counts for each merchant.
 * @param transactions The full list of transactions.
 *
 * @returns A React component rendering the merchant's name, the number of transactions, and a progress bar with the percentage.
 */
const ProgressBarHelperComponent: React.FC<{
  txn: Transaction;
  merchantToTransactionMap: MerchantTransactionMetadata[];
  transactions: Transaction[];
}> = ({ txn, merchantToTransactionMap, transactions }) => {
  const { merchantName } = txn;
  const { count } = merchantName
    ? getMerchantMetadata(merchantName, merchantToTransactionMap)
    : { count: 0 };
  const percentage = computePercentage(transactions.length, count);

  return (
    <ListItem key={txn.name}>
      <Text className="truncate">{merchantName}</Text>
      <div>
        <Flex justifyContent="end" className="space-x-4">
          <Text className="truncate">{count} transactions</Text>
          <div className="w-44">
            <Flex className="space-x-3 mt-3">
              <ProgressBar
                value={percentage}
                tooltip=""
                showAnimation={true}
                color="slate"
              />
              <Title>{formatNumber(percentage, 0)}%</Title>
            </Flex>
          </div>
        </Flex>
      </div>
    </ListItem>
  );
};

interface MerchantTransactionMetadata {
  merchantName: string;
  count: number;
}

const getMerchantMetadata = (
  merchantName: string,
  metadataList: MerchantTransactionMetadata[],
) => {
  const data = metadataList.find((m) => m.merchantName === merchantName);
  return data || { merchantName: '', count: 0 };
};

const computePercentage = (
  totalTransactions: number,
  merchantTransactionCount: number,
) => {
  return (
    (Math.abs(totalTransactions - merchantTransactionCount) /
      totalTransactions) *
    100
  );
};
