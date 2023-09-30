import * as React from 'react';
import { createContext, ReactNode, RefObject, Component } from 'react';
import { AccountBalanceHistory, InvesmentHolding } from 'src/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { formatNumber } from 'src/lib-utils/utils';
import { HistoricalAccountBalanceChart } from '../HistoricalAccountBalanceChart';
import { ScatterChart, Card as TremorCard } from '@tremor/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/** @type {React.Context<string>} */
const InvestmentHoldingCardContext = createContext<InvesmentHolding[]>([]);

export type InvestmentHoldingCardProps = {
  holdings: InvesmentHolding[];
  accountName: string;
  className?: string;
  historicalAccountBalance?: AccountBalanceHistory[];
};

export type InvestmentHoldingCardState = {
  holdings: InvesmentHolding[];
};

/**
 * @class InvestmentHoldingCard
 * @extends {Component<InvestmentHoldingCardProps, InvestmentHoldingCardState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript
 * with TSDoc annotations. It has various features like context usage,
 * dynamic styles, generic props, and more.
 */
export class InvestmentHoldingCard extends Component<
  InvestmentHoldingCardProps,
  InvestmentHoldingCardState
> {
  private myRef: RefObject<HTMLDivElement>;

  static defaultProps = {
    // holdings: Array.from({ length: 20 }, () => new InvesmentHolding({})),
    accountName: 'Account Name',
  };

  constructor(props: InvestmentHoldingCardProps) {
    super(props);
    this.state = {
      holdings: props.holdings,
    };

    this.myRef = React.createRef();
    this.computeTotalCostBasis = this.computeTotalCostBasis.bind(this);
    this.computeAverageCostBasis = this.computeAverageCostBasis.bind(this);
    this.computeAverageCostBasis = this.computeAverageCostBasis.bind(this);
    this.computeTotalInstitutionValue =
      this.computeTotalInstitutionValue.bind(this);
    this.computeTotalProfitLoss = this.computeTotalProfitLoss.bind(this);
    this.findLargestHolding = this.findLargestHolding.bind(this);
    this.findSmallestHolding = this.findSmallestHolding.bind(this);
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

  private computeTotalCostBasis(holdings: InvesmentHolding[]): number {
    return holdings.reduce((total, holding) => total + holding.costBasis, 0);
  }

  private computeAverageCostBasis(holdings: InvesmentHolding[]): number {
    const totalCostBasis = this.computeTotalCostBasis(holdings);
    return totalCostBasis / holdings.length;
  }

  private computeTotalInstitutionValue(holdings: InvesmentHolding[]): number {
    return holdings.reduce(
      (total, holding) => total + holding.institutionValue,
      0,
    );
  }

  private computeTotalProfitLoss(holdings: InvesmentHolding[]): number {
    const totalInstitutionValue = this.computeTotalInstitutionValue(holdings);
    const totalCostBasis = this.computeTotalCostBasis(holdings);
    return totalInstitutionValue - totalCostBasis;
  }

  private findLargestHolding(
    holdings: InvesmentHolding[],
  ): InvesmentHolding | null {
    if (holdings.length === 0) return null;
    return holdings.reduce((prev, current) =>
      prev.institutionValue > current.institutionValue ? prev : current,
    );
  }

  private findSmallestHolding(
    holdings: InvesmentHolding[],
  ): InvesmentHolding | null {
    if (holdings.length === 0) return null;
    return holdings.reduce((prev, current) =>
      prev.institutionValue < current.institutionValue ? prev : current,
    );
  }
  /**
   * Renders the component.
   * @returns {ReactNode}
   */
  render(): ReactNode {
    const { className, accountName, historicalAccountBalance } = this.props;
    const { holdings } = this.state;

    const totalValue = this.computeTotalCostBasis(holdings);
    const totalInstitutionValue = this.computeTotalInstitutionValue(holdings);
    const totalProfitLoss = this.computeTotalProfitLoss(holdings);
    const averageCostBasis = this.computeAverageCostBasis(holdings);
    const largestHolding = this.findLargestHolding(holdings);
    const smallestHolding = this.findSmallestHolding(holdings);

    return (
      <InvestmentHoldingCardContext.Provider value={holdings}>
        <Card className={className}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-xl font-bold">{accountName}</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-bold">
              ${formatNumber(totalValue, 2)}{' '}
              <span className="text-xs"> value across all holdings</span>
            </p>
            <p className="text-lg font-bold">
              ${formatNumber(totalInstitutionValue, 2)}{' '}
              <span className="text-xs"> institutional value</span>
            </p>
            <p className="text-lg font-bold">
              ${formatNumber(totalProfitLoss, 2)}{' '}
              <span className="text-xs"> Total P/L</span>
            </p>
          </CardContent>

          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold">
              Holding Statistics
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="flex flex-1 flex-wrap gap-3">
              <div className="flex flex-col">
                <p className="text-md">$ {formatNumber(averageCostBasis, 2)}</p>
                <p className="font-bold text-xs"> average cost basis </p>
              </div>
              <div>
                <p className="text-md">${largestHolding?.institutionValue}</p>
                <p className="font-bold text-xs"> largest holding </p>
              </div>
              <div>
                <p className="text-md">${smallestHolding?.institutionValue}</p>
                <p className="font-bold text-xs"> smallest holding </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Tabs defaultValue="accountBalance" className="min-w-[400px]">
              <TabsList className="font-bold">
                <TabsTrigger value="accountBalance">
                  Account Balance
                </TabsTrigger>
                <TabsTrigger value="costBasis">Security Cost Basis</TabsTrigger>
              </TabsList>
              <TabsContent value="accountBalance">
                <HistoricalAccountBalanceChart
                  historicalAccountBalance={historicalAccountBalance}
                  disableLabel={true}
                  className="contain"
                />
              </TabsContent>
              <TabsContent value="costBasis">
                <TremorCard className="shadow-sm bg-white border rounded-2xl">
                  <p className="text-xl">Cost Basis vs. Quantity</p>
                  <ScatterChart
                    className="w-full h-80 mt-6 -ml-2"
                    yAxisWidth={50}
                    data={holdings}
                    category="name"
                    x="institutionPrice"
                    y="quantity"
                    size="costBasis"
                    showOpacity={true}
                    minYValue={60}
                    valueFormatter={{
                      x: (amount) => `$${amount}`,
                      y: (quantity) => `${quantity}`,
                      size: (costBasis) => `$${costBasis}`,
                    }}
                    showLegend={false}
                    showGridLines={false}
                  />
                </TremorCard>
              </TabsContent>
            </Tabs>
          </CardFooter>
        </Card>
      </InvestmentHoldingCardContext.Provider>
    );
  }
}
