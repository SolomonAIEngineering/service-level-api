import { PlusIcon } from 'lucide-react';
import React from 'react';;
import { createContext, ReactNode, RefObject, Component } from 'react';
import {
  HistoricalAccountBalanceChart,
  TransactionDataTable,
} from 'src/components';
import CreditCard from 'src/components/CreditCard/CreditCard';
import { SimpleStatsCard } from 'src/components/SimpleStatisticCard/SimpleStatisticCard';
import { Button } from 'src/components/ui/button';
import { Calendar } from 'src/components/ui/calendar';
import { Label } from 'src/components/ui/label';
import {
  AccountBalanceHistory,
  Milestone,
  Pocket,
  SmartGoal,
  Transaction,
} from 'src/data-contracts/financial-service/data-contracts';
import { cn, formatPocketType } from 'src/lib-utils/utils';
import {
  BankAccountClass,
  CreditAccountClass,
  InvestmentAccountClass,
  StudentLoanAccountClass,
} from 'src/types';

export type CombinedAccounts = BankAccountClass &
  CreditAccountClass &
  StudentLoanAccountClass &
  InvestmentAccountClass;

/** Context to provide a default value for the component. */
const AccountsViewContext = createContext<CombinedAccounts | undefined>(
  undefined,
);

export type AccountsViewProps<T extends CombinedAccounts> = {
  /** Primary data to be displayed or processed by the component. */
  account: T;

  /** Optional CSS classes for styling the component. */
  className?: string;

  // recent transactions tied to the account of interest
  transactions?: Transaction[];

  // enable demo mode in order to use spoofed data instead of real data
  enableDemoMode?: boolean;

  // historical account balance tied to the account of interest
  historicalAccountBalance: AccountBalanceHistory[];

  // children of the component
  children?: ReactNode;

  contextQuestions?: string[];

  // user key
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
export class AccountsView<T extends CombinedAccounts> extends Component<
  AccountsViewProps<T>,
  AccountsViewState<T>
> {
  /** Reference to the main div element of the component. */
  private myRef: RefObject<HTMLDivElement>;

  static defaultProps = {
    children: null,
    contextQuestions: [
      'How much money do I have in my account?',
      'Am l spending too much in my account?',
      'What fees are associated with my account?',
      'How can l optimize my spending on this account?',
    ],
  };

  constructor(props: AccountsViewProps<T>) {
    super(props);
    this.state = {
      account: props.account,
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
    const {
      account,
      children,
      historicalAccountBalance,
      enableDemoMode,
      className,
      userName,
    } = this.props;

    const instanceOfBankAccount = account instanceof BankAccountClass;
    const instanceOfCreditAccount = account instanceof CreditAccountClass;

    return (
      <AccountsViewContext.Provider
        value={
          enableDemoMode
            ? (BankAccountClass.randomInstance() as CombinedAccounts)
            : this.state.account
        }
      >
        <div
          className={cn('w-fit md:grid md:grid-cols-5 md:gap-4', className)}
          ref={this.myRef}
        >
          {/** left column which will display most of account level data */}
          <div className="md:col-span-3 gap-3">
            {/** we display the account statitic row first */}
            <AccountStatisticRow account={account} />

            {/** we display the historical balance of the account */}
            {historicalAccountBalance && (
              <HistoricalAccountBalanceChart
                historicalAccountBalance={historicalAccountBalance}
                className="pt-[5%]"
              />
            )}

            {/** we display the goals section */}
            <div className="p-[5%]">
              <GoalsAndMilestoneSection
                goals={
                  account instanceof BankAccountClass
                    ? (account as BankAccountClass).getGoals()
                    : []
                }
                addGoalCallback={this.props.addGoalCallback}
                addMilestoneCallback={this.props.addMilestoneCallback}
              />
            </div>

            {/** we display the context questions */}
          </div>

          {/** right column which will display card details */}
          <div className="md:col-span-2">
            {/** we display the account details as a card here */}
            {(instanceOfBankAccount || instanceOfCreditAccount) && (
              <CreditCard
                cardholderName={userName}
                cardNumber={account.number}
                expiryDate={''}
                cvv={''}
              />
            )}

            {/** we display the set of pockets tied to the account */}
            <div className="pt-[10%]">
              {/** here we display the set of pockets tied to this account */}
              <div>
                <AccountPocketsStatisticRow pockets={account.pockets} />
              </div>
              {/** here we display the recent transactions */}
              <div>
                <Label>
                  <div className="text-2xl font-semibold">
                    Recent Transactions
                  </div>
                </Label>
                <TransactionDataTable
                  transactions={this.props.transactions || []}
                  account={account}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          {children}
        </div>
      </AccountsViewContext.Provider>
    );
  }
}

const GoalsAndMilestoneSection: React.FC<{
  goals: SmartGoal[];
  addGoalCallback: () => void;
  addMilestoneCallback: () => void;
}> = ({ goals, addGoalCallback, addMilestoneCallback }) => {
  {
    /** we split the goals section into 2 subsection, the left pane details the goal summary, left pane details milestones */
  }

  if (goals.length === 0) {
    return (
      <Label>
        <div className="text-2xl font-base">
          You have no goals defined for this account
        </div>
      </Label>
    );
  }

  // filter out only the active goals
  const activeGoals = goals.filter((goal) => goal.isCompleted === false);

  // get all the milestones from the active goals
  const milestones =
    activeGoals.length > 0
      ? activeGoals.flatMap((goal) => goal.milestones ?? [])
      : [];

  // sort the active goals by the end date and get the first 4
  const sortedGoals = activeGoals
    .sort(
      (a, b) => new Date(a.endDate!).getTime() - new Date(b.endDate!).getTime(),
    )
    .slice(0, 4);

  return (
    <div className="">
      <div className="flex flex-col gap-4">
        {/** this is the header of the section with the goals and the new goals button */}
        <div className="grid grid-cols-2 gap-2">
          <Label>
            <div className="text-2xl font-semibold">Your Goals</div>
          </Label>
          <Button onClick={() => addGoalCallback()}>
            <PlusIcon className="w-4 h-4" />
            <div className="text-sm font-semibold">Add Goal</div>
          </Button>
        </div>

        <div className="flex flex-row flex-wrap">
          {/** TODO: compute the percentage of active goals and their completion */}
          {/** this is the list of goals */}
          <div className="flex flex-row md:grid md:grid-cols-4 gap-2">
            {sortedGoals.map((goal, index) => {
              // If the goal name is undefined, return null to skip rendering
              if (!goal.name) return null;

              return (
                <SimpleStatsCard
                  key={index} // Adding a key when mapping in React
                  title={goal.name ?? 'Goal Name'}
                  metric={goal.targetAmount ?? 0}
                  subtext="Target Amount"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="pt-[5%]">
        {/** this is the milestones section */}
        <MilestoneSubSection
          milestones={milestones}
          addMilestoneCallback={addMilestoneCallback}
        />
      </div>
    </div>
  );
};

const MilestoneSubSection: React.FC<{
  milestones: Milestone[];
  addMilestoneCallback: () => void;
}> = ({ milestones, addMilestoneCallback }) => {
  if (milestones.length === 0) {
    return (
      <Label>
        <div className="text-2xl font-base">
          You have no milestones defined yet{' '}
        </div>
      </Label>
    );
  }

  // sort the milestones by the end date and get the first 4
  const sortedMilestones = milestones
    .sort(
      (a, b) =>
        new Date(a.targetDate!).getTime() - new Date(b.targetDate!).getTime(),
    )
    .slice(0, 4);

  // from the sorted milestones, get all their dates
  const milestoneDates = sortedMilestones.map(
    (m) => new Date(m.targetDate ?? ''),
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-2">
        <Label>
          <div className="text-2xl font-semibold">Your Milestones</div>
        </Label>
        <Button onClick={() => addMilestoneCallback()}>
          <PlusIcon className="w-4 h-4" />
          <div className="text-sm font-semibold">Add Milestone</div>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 border rounded-xl">
        <div className="p-[10%]">
          <Label className="pt-[5%] font-bold text-lg">
            {' '}
            Upcoming Milestones Dates{' '}
          </Label>
          <Calendar mode="multiple" selected={milestoneDates} />
        </div>
        <div>
          {/** Get all the milestones and display a summary card */}
          <div className="p-[5%] grid md:grid-cols-2 gap-2">
            {sortedMilestones.map((m) => {
              if (m === undefined) {
                return null;
              }

              return (
                <SimpleStatsCard
                  title={m.name ?? 'milestone name'}
                  metric={m.targetAmount ?? 0}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const AccountPocketsStatisticRow: React.FC<{
  pockets: Pocket[];
}> = ({ pockets }) => {
  if (pockets == undefined || pockets.length === 0) {
    return (
      <Label>
        <div className="text-2xl font-base pb-4">
          You have no pockets defined for this account
        </div>
      </Label>
    );
  }

  return (
    <div className="pb-[10%]">
      <Label>
        <div className="text-2xl font-semibold">Your Pockets</div>
      </Label>
      <div className="md:grid md:grid-cols-2 gap-2">
        {pockets.map((pocket) => (
          <SimpleStatsCard
            title={formatPocketType(pocket.type ?? 'POCKET_TYPE_FUN_MONEY')}
            metric={pocket.goals !== undefined ? pocket.goals.length : 0}
            subtext="Smart Goals"
          />
        ))}
      </div>
    </div>
  );
};

const AccountStatisticRow: React.FC<{
  account: CombinedAccounts;
}> = ({ account }) => {
  const instanceOfBankAccount = account instanceof BankAccountClass;
  const instanceOfCreditAccount = account instanceof CreditAccountClass;
  const instanceOfStudentLoanAccount =
    account instanceof StudentLoanAccountClass;
  const instanceOfInvestmentAccount = account instanceof InvestmentAccountClass;

  // if the account is a bank account, we need to cast it to a bank account
  // and then display the bank account specific stats
  if (instanceOfBankAccount) {
    const bankAccount = account as BankAccountClass;
    return (
      <div className="md:grid md:grid-cols-2 md:items-center gap-3">
        <SimpleStatsCard
          title={'Available Balance'}
          metric={bankAccount.balance}
        />
        <SimpleStatsCard
          title={'Current Funds'}
          metric={bankAccount.currentFunds}
        />
      </div>
    );
  }

  // if the account is a credit account, we need to cast it to a credit account
  // and then display the credit account specific stats
  if (instanceOfCreditAccount) {
    const creditAccount = account as CreditAccountClass;
    return (
      <div className="md:grid md:grid-cols-2 items-center gap-3">
        <SimpleStatsCard
          title={'Last Payment Amount'}
          metric={creditAccount.lastPaymentAmount}
        />
        <SimpleStatsCard
          title={'Current Balance'}
          metric={creditAccount.balance}
        />
      </div>
    );
  }

  // if the account is a student loan account, we need to cast it to a student loan account
  // and then display the student loan account specific stats
  if (instanceOfStudentLoanAccount) {
    const studentLoanAccount = account as StudentLoanAccountClass;
    return (
      <div className="md:grid md:grid-cols-2 items-center gap-3">
        <SimpleStatsCard
          title={'Last Payment Amount'}
          metric={studentLoanAccount.lastPaymentAmount}
        />
        <SimpleStatsCard
          title={'Outstanding Interest Amount'}
          metric={studentLoanAccount.outstandingInterestAmount}
        />
      </div>
    );
  }

  // if the account is an investment account, we need to cast it to an investment account
  // and then display the investment account specific stats
  if (instanceOfInvestmentAccount) {
    const investmentAccount = account as InvestmentAccountClass;
    return (
      <div className="md:grid md:grid-cols-2 items-center gap-3">
        <SimpleStatsCard title={'Balance'} metric={investmentAccount.balance} />
        <SimpleStatsCard
          title={'Current Funds'}
          metric={investmentAccount.currentFunds}
        />
      </div>
    );
  }
};
