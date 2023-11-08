import React from 'react';;
import { createContext, ReactNode, RefObject, Component } from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  cn,
  formatDate,
  formatNumber,
  removeUnderScores,
} from 'src/lib-utils/utils';
import { Badge } from '../ui/badge';
import { Label } from '../ui/label';
import { RocketIcon, Wallet2Icon } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';
import { Button } from '../ui/button';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { HistoricalAccountBalanceChart } from '../HistoricalAccountBalanceChart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  AccountBalanceHistory,
  Apr,
  CreditAccount,
  FinancialProfile,
} from 'src/data-contracts/financial-service/data-contracts';
import { CreditAccountClass, FinancialProfileClass } from 'src/index';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/** @type {React.Context<CreditAccount>} */
const CreditAccountCardContext = createContext<CreditAccount>(
  new CreditAccountClass({}),
);

export type CreditAccountCardProps<CreditAccount> = {
  creditAccount: CreditAccount;
  financialProfile: FinancialProfile;
  institutionName: string;
  className?: string;
  contextQuestions?: string[];
  enableDemoMode?: boolean;
  children?: ReactNode;
  historicalAccountBalance?: AccountBalanceHistory[];
};

export type CreditAccountCardState<T extends CreditAccount> = {
  creditAccount: T;
};

/**
 * @class CreditAccountCard
 * @extends {Component<CreditAccountCardProps, CreditAccountCardState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript
 * with TSDoc annotations. It has various features like context usage,
 * dynamic styles, generic props, and more.
 */
export class CreditAccountCard<T extends CreditAccount> extends Component<
  CreditAccountCardProps<T>,
  CreditAccountCardState<T>
> {
  private myRef: RefObject<HTMLDivElement>;

  static defaultProps = {
    creditAccount: new CreditAccountClass({}),
    financialProfile: new FinancialProfileClass({}),
    contextQuestions: [
      "What is my account's interest rate?",
      'What is my minimum payment, and when is it due?',
      'What is my credit limit?',
      'How is my credit utilization ratio calculated?',
    ],
    enableDemoMode: false,
    children: null,
  };

  constructor(props: CreditAccountCardProps<T>) {
    super(props);
    this.state = {
      creditAccount: props.creditAccount,
    };

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

  /**
   * Renders the component.
   * @returns {ReactNode}
   */
  render(): ReactNode {
    const {
      className,
      enableDemoMode,
      institutionName,
      historicalAccountBalance,
    } = this.props;
    const account = enableDemoMode
      ? CreditAccountClass.randomInstance()
      : this.state.creditAccount;

    return (
      <CreditAccountCardContext.Provider value={account}>
        <Card className={cn('p-2', className)}>
          <CardHeader className="flex items-start gap-x-5 space-y-0">
            <div className="space-y-1">
              <CardTitle className="text-xs text-gray-600 dark:text-gray-200 font-bold">
                ${formatNumber(account.currentFunds ?? 0, 2)}
              </CardTitle>
              <CardTitle
                className="text-xs font-bold"
                style={{
                  fontSize: '11px',
                }}
              >
                <HoverCard>
                  <HoverCardTrigger>
                    {' '}
                    {institutionName} Credit Card
                  </HoverCardTrigger>
                  <HoverCardContent className="rounded-2xl">
                    <CreditAccountMiniCard
                      creditAccount={account}
                      institutionName={institutionName}
                      className="border-0 shadow-none"
                    />
                  </HoverCardContent>
                </HoverCard>
              </CardTitle>
              <div>
                <div className="flex flex-1 gap-2 justify-start">
                  <Badge
                    className="bg-white border border-black text-black font-bold"
                    style={{
                      fontSize: '8px',
                    }}
                  >
                    {account.type}
                  </Badge>
                  <Badge
                    className="bg-white border border-black text-black "
                    style={{
                      fontSize: '8px',
                    }}
                  >
                    Overdue: {account.isOverdue === false ? 'No' : 'Yes'}
                  </Badge>
                </div>
              </div>
              <div>
                <div className="flex gap-1">
                  <span className="text-xs text-gray-600 dark:text-gray-200">
                    Account Number:{' '}
                  </span>
                  <span className="text-xs font-bold">{account.number}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-2xl font-bold">
                  Currently owe: ${formatNumber(account.balance ?? 0, 2)}
                </Label>
                <p
                  style={{
                    fontSize: '10px',
                  }}
                  className="font-bold"
                >
                  Card balance limit ${account.balanceLimit}
                </p>
                <p
                  style={{
                    fontSize: '10px',
                  }}
                  className="font-bold"
                >
                  ${formatNumber(account.minimumPaymentAmount ?? 0, 2)} due on{' '}
                  {formatDate(account.nextPaymentDueDate ?? 0)}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="details" className="min-w-[400px]">
              <TabsList className="py-2 font-bold">
                <TabsTrigger value="details">Details</TabsTrigger>
                {account.aprs && account.aprs.length > 0 && (
                  <TabsTrigger value="apr">Apr</TabsTrigger>
                )}
              </TabsList>
              <TabsContent value="details">
                <CreditCardCollapsibleDetails
                  creditAccount={account}
                  className="py-2"
                />
              </TabsContent>
              {account.aprs && account.aprs.length > 0 && (
                <TabsContent value="apr">
                  <CreditAccountAprs aprs={account.aprs} />
                </TabsContent>
              )}
            </Tabs>
          </CardContent>
          <CardFooter>
            <HistoricalAccountBalanceChart
              historicalAccountBalance={historicalAccountBalance ?? []}
            />
          </CardFooter>
        </Card>
      </CreditAccountCardContext.Provider>
    );
  }
}

const CreditAccountAprs: React.FC<{
  aprs: Apr[];
}> = (props) => {
  const { aprs } = props;

  return (
    <div>
      <Card className="p-3 flex flex-col gap-3 rounded-lg">
        <div>
          <div className="flex flex-row gap-2">
            <RocketIcon className="w-4 h-4" />
            <p className="text-xs font-bold"> Card Aprs </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {aprs.map((apr, idx) => (
            <div className="flex flex-col">
              <div key={idx} className="flex flex-row gap-3">
                <p className="text-xs font-bold">
                  {apr.type && removeUnderScores(apr.type)}
                </p>
                <p className="text-xs font-bold">{apr.percentage}%</p>
              </div>
              <p className="text-xs">
                {apr.balanceSubjectToApr}
                <span className="text-xs"> of balance subject to apr</span>
              </p>
            </div>
          ))}{' '}
        </div>
      </Card>
    </div>
  );
};

const CreditAccountMiniCard: React.FC<{
  creditAccount: CreditAccount;
  institutionName: string;
  className?: string;
}> = (props) => {
  const { creditAccount, institutionName, className } = props;
  return (
    <Card
      className={cn(
        'flex flex-col space-x-1  bg-white text-secondary-foreground rounded-2xl',
        className,
      )}
    >
      <CardHeader>
        <div className="flex flex-1 justify-between">
          <p className="font-bold">{institutionName.toUpperCase()}</p>
          <div>
            <Wallet2Icon className="w-4 h-4" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl font-bold">
            ${creditAccount.balance}{' '}
            <span className="text-xs">current balance</span>
          </p>
          <p className="text-md font-bold">
            ${creditAccount.minimumPaymentAmount}
            <span className="ml-2 text-xs">
              due on {creditAccount.nextPaymentDueDate}{' '}
            </span>
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col justify-end item-end ">
          <p className="text-sm">{creditAccount.number} </p>
          <p className="text-xs">Account Number</p>
        </div>
      </CardFooter>
    </Card>
  );
};

const CreditCardCollapsibleDetails: React.FC<{
  creditAccount: CreditAccount;
  className?: string;
}> = (props) => {
  const { creditAccount, className } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn('w-[350px] space-y-2', className)}
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">{creditAccount.name} details</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretSortIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        <div className="flex flex-row justify-between items-between">
          <p className="text-xs"> Last Payed</p>
          <p className="text-xs">
            {' '}
            {formatDate(creditAccount.lastPaymentDate ?? '')}{' '}
          </p>
        </div>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          <div className="flex flex-row justify-between items-between">
            <p className="text-xs"> Last Issued</p>
            <p className="text-xs">
              {' '}
              {formatDate(creditAccount.lastStatementIssueDate ?? '')}{' '}
            </p>
          </div>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          <div className="flex flex-row justify-between items-between">
            <p className="text-xs"> Last Statement Balance</p>
            <p className="text-xs">
              {' '}
              ${formatNumber(creditAccount.lastStatementBalance ?? 0, 2)}{' '}
            </p>
          </div>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          <div className="flex flex-row justify-between items-between">
            <p className="text-xs"> Last Payment Amount</p>
            <p className="text-xs">
              {' '}
              ${formatNumber(creditAccount.lastPaymentAmount ?? 0, 2)}{' '}
            </p>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export { CreditAccountMiniCard };
