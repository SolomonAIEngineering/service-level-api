import * as React from 'react';
import { createContext, ReactNode, RefObject, Component } from 'react';
import {
  FinancialProfile,
  PersonalActionableInsight,
} from 'src/data-contracts/financial-service/data-contracts';
import { cn, convertToReadablePersonalInsightName } from 'src/lib-utils/utils';
import { Label } from 'src/components/ui/label';
import { Badge } from 'src/components/ui/badge';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'src/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select';
import { BarGraph } from 'src/components';

/** Context to provide a default value for the component. */
const ActionableInsightsViewContext = createContext<
  PersonalActionableInsight[] | undefined
>(undefined);

export type ActionableInsightsViewProps<T extends PersonalActionableInsight> = {
  /** Primary data to be displayed or processed by the component. */
  insights: T[];

  /** Optional CSS classes for styling the component. */
  className?: string;

  // financial profile over time
  historicalFinancialProfile: FinancialProfile[];
};

export type ActionableInsightsViewState<T extends PersonalActionableInsight> = {
  /** Counter to keep track of the number of button clicks. */
  insights: T[];
  historicalFinancialProfile: FinancialProfile[];
};

/**
 * @class ActionableInsightsView
 * @extends {Component<ActionableInsightsViewProps, ActionableInsightsViewState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript.
 * It demonstrates context usage, dynamic styles, generic props, and more.
 */
export class ActionableInsightsView<
  T extends PersonalActionableInsight,
> extends Component<
  ActionableInsightsViewProps<T>,
  ActionableInsightsViewState<T>
> {
  /** Reference to the main div element of the component. */
  private myRef: RefObject<HTMLDivElement>;

  static defaultProps = {
    greeting: 'Hello',
  };

  constructor(props: ActionableInsightsViewProps<T>) {
    super(props);
    this.state = {
      historicalFinancialProfile: props.historicalFinancialProfile,
      insights: props.insights,
    };

    this.myRef = React.createRef();
    // this.incrementCounter = this.incrementCounter.bind(this);
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
   * Renders the component.
   * @returns {ReactNode}
   */
  render(): ReactNode {
    const { className } = this.props;
    const { insights, historicalFinancialProfile } = this.state;

    return (
      <ActionableInsightsViewContext.Provider value={insights}>
        {' '}
        <div className={cn('w-fit', className)} ref={this.myRef}>
          {/** Place the tabs selector here - Expense | Emergency Fund | Debt Prioritzation | ... */}
          <Tabs defaultValue={insights[0].insightName}>
            <TabsList className={`grid w-full grid-cols-3`}>
              {insights.map((insight) => {
                if (insight.insightName === undefined) {
                  return null;
                }

                return (
                  <TabsTrigger value={insight.insightName} key={insight.id}>
                    {convertToReadablePersonalInsightName(insight.insightName)}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/** place the historical financial profile chart here */}
            <div className="p-[3%]">
              <FinancialProfileThroughTimeChart
                data={historicalFinancialProfile}
              />
            </div>

            {insights.map((insight) => {
              if (insight.insightName === undefined) {
                return null;
              }

              return (
                <TabsContent value={insight.insightName} key={insight.id}>
                  <PersonalActionableInsightComponent insight={insight} />
                </TabsContent>
              );
            })}
          </Tabs>
          {/** place the insight component here */}
        </div>
      </ActionableInsightsViewContext.Provider>
    );
  }
}

const PersonalActionableInsightComponent: React.FC<{
  insight: PersonalActionableInsight;
}> = ({ insight }) => {
  if (insight.insightName === undefined) {
    return null;
  }

  return (
    <div className="p-[5%]">
      <div className="grid grid-cols-2 gap-2">
        <div>
          {insight.tags && insight.tags.length > 0 && (
            <div className="flex flex-row flex-wrap gap-3">
              {insight.tags.map((tag) => {
                return (
                  <Badge className="p-2 text-lg" key={tag}>
                    {tag}
                  </Badge>
                );
              })}
            </div>
          )}
        </div>
        <div>
          {insight.metricsToOptimizeFor &&
            insight.metricsToOptimizeFor.length > 0 && (
              <div className="flex flex-row flex-wrap gap-2">
                {insight.metricsToOptimizeFor.map((metric) => {
                  return (
                    <Badge className="p-2 text-lg" key={metric}>
                      {metric}
                    </Badge>
                  );
                })}
              </div>
            )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/** left side is comprised of the actual insight details */}
        <div>
          <div className="flex flex-col gap-3 py-3">
            <Label className="text-xl font-bold">
              {' '}
              {convertToReadablePersonalInsightName(insight.insightName)}
            </Label>
            <Label className="text-lg">
              Description: {insight.description}
            </Label>
            <Label className="text-lg">Takeaway: {insight.takeaway}</Label>
          </div>
        </div>
        {/** right side is comprised of the actionable steps that can be taken */}
        <div className="flex flex-col gap-3 p-10">
          <div className="flex flex-col gap-3">
            <Label className="text-lg">
              <span className="font-bold">Actions:</span> {insight.action}
            </Label>
          </div>
          <div>
            <Label className="text-lg">
              <span className="font-bold">Expected Benefit:</span>
              {insight.expectedBenefit}
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FinancialProfileThroughTimeChart: React.FC<{
  data: FinancialProfile[];
}> = ({ data }) => {
  const [selectedMetric, setSelectedMetric] =
    React.useState<string>('totalExpenses');

  const handleMetricChange = (metric: string) => {
    setSelectedMetric(metric);
  };

  const filteredData = data.map((item) => {
    const metricValue =
      selectedMetric === 'numberOfTransactions'
        ? parseFloat(item[selectedMetric as keyof FinancialProfile] as string)
        : item[selectedMetric as keyof FinancialProfile];

    const value =
      metricValue && typeof metricValue === 'number'
        ? metricValue
        : Number(metricValue);

    return {
      name: `Month ${item.month}`,
      total: value,
    };
  });

  return (
    <div className="flex flex-col gap-4 pt-[5%]">
      <Select onValueChange={handleMetricChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue
            placeholder={
              selectedMetric === '' ? 'Select a metric' : selectedMetric
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Metrics</SelectLabel>
            <SelectItem value="totalExpenses">Total Expenses</SelectItem>
            <SelectItem value="totalIncome">Total Income</SelectItem>
            <SelectItem value="numberOfTransactions">
              Number of Transactions
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {selectedMetric && <BarGraph data={filteredData} label={''} />}
    </div>
  );
};
