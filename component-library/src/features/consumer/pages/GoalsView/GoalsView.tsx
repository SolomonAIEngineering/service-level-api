import React from 'react';;
import { createContext, ReactNode, RefObject, Component } from 'react';
import BudgetCard from 'src/components/BudgetCard/BudgetCard';
import {SimpleStatsCard} from 'src/components/SimpleStatisticCard/SimpleStatisticCard';
import { TransactionDataTable } from 'src/components/TransactionDataTable';
import { Label } from 'src/components/ui/label';
import {
  SmartGoal,
  Transaction,
} from 'src/data-contracts/financial-service/data-contracts';
import { cn } from 'src/lib-utils/utils';
import { SmartGoalClass } from 'src/types';
import GoalTimeline, { TimelineEvent } from './GoalTimeline';
import { Card } from 'src/components/ui/card';
import { Button } from 'src/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { Calendar } from 'src/components/ui/calendar';
import GoalSummaryCard from 'src/components/GoalSummaryCard/GoalSummaryCard';

/** Context to provide a default value for the component. */
const GoalsViewContext = createContext<SmartGoal | undefined>(undefined);

export type GoalsViewProps<T extends SmartGoal> = {
  /** Primary data to be displayed or processed by the component. */
  goal: T;

  /** Optional CSS classes for styling the component. */
  className?: string;

  // enable demo mode in order to use spoofed data instead of real data
  enableDemoMode?: boolean;

  // recent transactions tied to the goal of interest
  transactions?: Transaction[];

  timeline?: TimelineEvent[];
  addBudgetCallback: () => void;
  addMilestoneCallback: () => void;
};

export type GoalsViewState<T extends SmartGoal> = {
  /** Counter to keep track of the number of button clicks. */
  goal: T;
};

/**
 * @class GoalsView
 * @extends {Component<GoalsViewProps, GoalsViewState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript.
 * It demonstrates context usage, dynamic styles, generic props, and more.
 */
export class GoalsView<T extends SmartGoal> extends Component<
  GoalsViewProps<T>,
  GoalsViewState<T>
> {
  /** Reference to the main div element of the component. */
  private myRef: RefObject<HTMLDivElement>;

  static defaultProps = {};

  constructor(props: GoalsViewProps<T>) {
    super(props);
    this.state = {
      goal: props.goal,
    };

    this.myRef = React.createRef();
    this.getMilestones = this.getMilestones.bind(this);
    this.getBudgets = this.getBudgets.bind(this);
    this.computePercentage = this.computePercentage.bind(this);
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

  // function used to get all milestones tied to the current goal
  getMilestones() {
    const { goal } = this.state;

    return goal.milestones;
  }

  // function used to get all budgets across all milestones tied to the current goal
  getBudgets() {
    const { goal } = this.state;

    if (!goal.milestones) {
      return [];
    }

    return goal.milestones.map((milestone) => milestone.budget);
  }

  /**
   * Computes the percentage of two numbers represented as strings, potentially prefixed with `$`.
   *
   * @param numeratorStr - The numerator as a string.
   * @param denominatorStr - The denominator as a string.
   * @returns The percentage (numerator/denominator * 100) or NaN if inputs are not valid numbers.
   */
  computePercentage(numeratorStr: string, denominatorStr: string): number {
    // Remove potential `$` prefix and parse strings to numbers
    const numerator = parseFloat(numeratorStr.replace('$', ''));
    const denominator = parseFloat(denominatorStr.replace('$', ''));

    // Check if both values are valid numbers
    if (isNaN(numerator) || isNaN(denominator) || denominator === 0) {
      return NaN;
    }

    // Compute and return the percentage
    return Number(((numerator / denominator) * 100).toFixed(2));
  }

  /**
   * Renders the component.
   * @returns {ReactNode}
   */
  render(): ReactNode {
    const {
      className,
      enableDemoMode,
      transactions,
      timeline,
      addMilestoneCallback,
      addBudgetCallback,
    } = this.props;
    const { goal } = this.state;
    const budgets = this.getBudgets();
    const milestones = this.getMilestones();

    return (
      <GoalsViewContext.Provider
        value={enableDemoMode ? SmartGoalClass.randomInstance() : goal}
      >
        <div className={cn('w-fit', className)} ref={this.myRef}>
          {/** left column which will display most of goal level data */}
          <div className="md:col-span-2">
            <div className="flex flex-row justify-between">
              <Label>
                <div className="font-semibold">
                  {' '}
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    {goal.name || 'Goal Name'}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {goal.description || 'Goal Description'}
                  </p>
                </div>
              </Label>
              <div className="flex flex-row gap-2">
                <Card className="rounded-2xl">
                  <Calendar
                    mode="multiple"
                    selected={[
                      new Date(goal.startDate ?? ''),
                      new Date(goal.endDate ?? ''),
                    ]}
                  />
                </Card>
                <div className="px-3 rounded-2xl">
                  <GoalSummaryCard
                    goal={goal}
                    currentAmount={Number(goal.currentAmount ?? 0)}
                    targetAmount={Number(goal.targetAmount ?? 0)}
                  />
                </div>
              </div>
            </div>

            {milestones && milestones.length > 0 && (
              <div className="flex flex-col py-5">
                <div className="flex flex-row gap-3 py-2">
                  <Label className="text-2xl font-bold">Milestones</Label>
                  <Button onClick={() => addMilestoneCallback()}>
                    <PlusIcon className="w-4 h-4" />
                    <div className="text-sm font-semibold">Add Milestone</div>
                  </Button>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-wrap gap-3">
                    {milestones?.map((milestone) => (
                      <SimpleStatsCard
                        title={milestone.name ?? 'milestone name'}
                        metric={milestone.targetAmount ?? 0}
                        subtext="milestone target amount"
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              {budgets && budgets.length > 0 && (
                <div>
                  <div className="py-[5%]">
                    <div className="flex flex-row gap-3 py-2">
                      <Label className="text-2xl font-bold">Budgets</Label>
                      <Button onClick={() => addBudgetCallback()}>
                        <PlusIcon className="w-4 h-4" />
                        <div className="text-sm font-semibold">Add Budget</div>
                      </Button>
                    </div>
                    <div className="flex flex-row">
                      <div className="grid grid-cols-2 gap-3">
                        {budgets.map((budget) => {
                          if (budget === undefined) return null;

                          return <BudgetCard budget={budget} />;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {timeline && timeline.length > 0 && (
                <div>
                  <GoalTimeline timeline={timeline ?? []} />
                </div>
              )}
            </div>

            <div className="py-[5%]">
              <Label>
                <div className="text-2xl font-semibold">
                  Transactions That May Impact Your Goal
                </div>
              </Label>
              <TransactionDataTable
                transactions={transactions || []}
                className="w-full"
              />
            </div>
          </div>
          {/** right column which will display goal progress */}
        </div>
      </GoalsViewContext.Provider>
    );
  }
}
