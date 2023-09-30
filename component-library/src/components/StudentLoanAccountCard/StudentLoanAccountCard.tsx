/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { createContext, ReactNode, RefObject, Component } from 'react';
import { StudentLoanAccount } from 'src/types';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { cn, formatDate, formatNumber } from 'src/lib-utils/utils';
import {
  Accordion,
  AccordionHeader,
  Flex,
  ProgressBar,
  AccordionBody,
  Callout,
  Text,
} from '@tremor/react';
import { ArrowRight } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/** @type {React.Context<StudentLoanAccount>} */
const StudentLoanAccountCardContext = createContext<StudentLoanAccount>(
  new StudentLoanAccount({}),
);

export type StudentLoanAccountCardProps = {
  studentLoanAccount: StudentLoanAccount;
  className?: string;
  children?: ReactNode;
};

export type StudentLoanAccountCardState = {
  studentLoanAccount: StudentLoanAccount;
};

/**
 * @class StudentLoanAccountCard
 * @extends {Component<StudentLoanAccountCardProps, StudentLoanAccountCardState>}
 *
 * @description
 * This is a templated advanced React class component written in TypeScript
 * with TSDoc annotations. It has various features like context usage,
 * dynamic styles, generic props, and more.
 */
export class StudentLoanAccountCard extends Component<
  StudentLoanAccountCardProps,
  StudentLoanAccountCardState
> {
  private myRef: RefObject<HTMLDivElement>;

  static defaultProps = {
    studentLoanAccount: new StudentLoanAccount({}),
    children: null,
    className: '',
  };

  constructor(props: StudentLoanAccountCardProps) {
    super(props);
    this.state = {
      studentLoanAccount: props.studentLoanAccount,
    };

    this.myRef = React.createRef();
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

  /**
   * Renders the component.
   * @returns {ReactNode}
   */
  render(): ReactNode {
    const { className, children } = this.props;
    const { studentLoanAccount } = this.state;

    return (
      <StudentLoanAccountCardContext.Provider value={studentLoanAccount}>
        <Card
          className={cn(
            // 'leading-7 [&:not(:first-child)]:mt-6 h-48 md:h-64 lg:h-96 xl:h-[500px] 2xl:h-[600px] overflow-y-scroll',
            'leading-7 [&:not(:first-child)]:mt-6 w-fit',
            className,
          )}
          ref={this.myRef}
        >
          <CardHeader className="flex flex-col ">
            <CardTitle>
              <p className="text-xl">
                {studentLoanAccount.name}
                <span className="text-xs ml-2">
                  {studentLoanAccount.loanType}
                </span>
              </p>
            </CardTitle>
            <div className="flex flex-col gap-2 items-start justify-start">
              <p className="text-4xl text-black font-bold">
                $
                {formatNumber(
                  studentLoanAccount.originationPrincipalAmount -
                    studentLoanAccount.ytdPrincipalPaid,
                  2,
                )}
                <span className="ml-2 text-xs text-gray-500 font-bold">
                  Current Balance
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start">
              <p className="text-xl text-black">
                {formatDate(studentLoanAccount.nextPaymentDueDate)}
                <span className="ml-2 text-xs text-gray-500  font-bold">
                  Next Payment Due Date
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start">
              <p className="text-md text-black">
                {formatDate(studentLoanAccount.expectedPayoffDate)}
                <span className="ml-2 text-xs text-gray-500 font-bold">
                  Expected Payoff Date
                </span>
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <Card>
              <CardHeader className="grid grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-xl text-black">
                    {formatNumber(studentLoanAccount.interestRatePercentage, 2)}
                    %
                  </p>
                  <p className="text-xs text-gray-500">Interest Rate</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black">
                    $
                    {formatNumber(
                      studentLoanAccount.outstandingInterestAmount,
                      2,
                    )}
                  </p>
                  <p className="text-xs text-gray-500">Unpaid Interest</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black">
                    ${Math.abs(studentLoanAccount.ytdPrincipalPaid)}
                  </p>
                  <p className="text-xs text-gray-500">Paid Balance</p>
                </div>
              </CardHeader>
            </Card>
            <div className="py-2">
              <StudentLoanStatisticOverview
                studentLoanAccount={studentLoanAccount}
              />
            </div>

            <StudentLoanDetails className=" m-3" />
            {children}
          </CardContent>
        </Card>
      </StudentLoanAccountCardContext.Provider>
    );
  }
}

type StudentLoanPieChartValue = {
  name: string;
  metric: string;
  status: string;
  info: string;
  value: number;
  icon: React.ElementType<any>;
};

type StudentLoanStandingDetails = {
  status: string;
  info: string;
};

const StudentLoanStatisticOverview: React.FC<{
  studentLoanAccount: StudentLoanAccount;
}> = (props) => {
  const { studentLoanAccount } = props;

  const principalPaidPercentage =
    ((studentLoanAccount.originationPrincipalAmount -
      studentLoanAccount.ytdPrincipalPaid) /
      studentLoanAccount.originationPrincipalAmount) *
    100;

  const studentloanPaymentStanding = (
    value: number,
  ): StudentLoanStandingDetails => {
    if (value > 50 && value < 80) {
      return {
        status: 'Performing Above Average',
        info: ` Think of it as acing a test, but instead of algebra, it's your finances. This means you're not just paying back what you owe,
                but you're doing it with style, speed, and smart strategies. Crushing your debt faster than the usual? That’s some serious adulting
                right there. Keep it up, and you're on track to be debt-free with plenty of time to enjoy those post-college vibes! 🚀🎓💸`,
      };
    } else if (value <= 50) {
      return {
        status: 'Performing Below Average',
        info: `Right now, you might be taking a bit longer to navigate the twists and turns of managing student debt. But guess what? College is all about growth,
               learning, and gaining XP. So, take a breath, level up your financial strategies, seek advice, and soon you'll be powering through those payments like
                a pro. It's all about setting the pace that works best for you. You've tackled midterms; you can definitely tackle this! 🎮📚💡`,
      };
    } else if (value > 80) {
      return {
        status: 'Performing Way Above Average',
        info: `"Performing Way Above Average" is like being that friend who somehow manages to ace every exam without breaking a sweat. While juggling lectures,
               labs, and late-night study sessions, you've mastered the art of managing your student loans with finesse. Keep embracing that money-savvy mindset and
                remember to share your wisdom! You're not just setting yourself up for success; you're inspiring your fellow students along the way. Rock on, finance guru! 🌟📚🎸`,
      };
    } else {
      return {
        status: 'Performing Way Below Average',
        info: `Right now, you might be taking a bit longer to navigate the twists and turns of managing student debt. But guess what? College is all about growth,
               learning, and gaining XP. So, take a breath, level up your financial strategies, seek advice, and soon you'll be powering through those payments like
                a pro. It's all about setting the pace that works best for you. You've tackled midterms; you can definitely tackle this! 🎮📚💡`,
      };
    }
  };

  const paymentStanding = studentloanPaymentStanding(principalPaidPercentage);

  const data: StudentLoanPieChartValue[] = [
    {
      name: 'Principal Paid Off',
      metric: `${studentLoanAccount.ytdPrincipalPaid.toString()}`,
      status: paymentStanding.status,
      info: paymentStanding.info,
      value: principalPaidPercentage,
      icon: ArrowRight,
    },
  ];

  return (
    <Card className="max-w-md mx-auto rounded-2xl">
      {data.map((item, idx) => (
        <Accordion
          key={item.name}
          defaultOpen={idx === 0 && true}
          className="border-none"
        >
          <AccordionHeader>
            <div className="space-y-2">
              <Flex>
                <Text className="px-2">{item.name}</Text>
                <Text className="truncate">{`${item.metric} (${item.value}%)`}</Text>
              </Flex>
              <ProgressBar value={item.value} color="slate" className="mt-3" />
            </div>
          </AccordionHeader>
          <AccordionBody>
            <Callout
              title={item.status}
              icon={item.icon}
              color="gray"
              className="mt-2"
            >
              {item.info}
            </Callout>
          </AccordionBody>
        </Accordion>
      ))}
    </Card>
  );
};

const StudentLoanDetails: React.FC<{
  className?: string;
}> = ({ className }) => {
  const studentLoanAccount = React.useContext(StudentLoanAccountCardContext);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn('w-[350px] space-y-2', className)}
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          {studentLoanAccount.name} details
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretSortIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        <div className="flex flex-row justify-between items-between">
          <p className="text-xs"> Guarantor</p>
          <p className="text-xs"> {studentLoanAccount.guarantor} </p>
        </div>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          <div className="flex flex-row justify-between items-between">
            <p className="text-xs"> Last Payment Amount</p>
            <p className="text-xs">
              {' '}
              ${formatNumber(studentLoanAccount.lastPaymentAmount, 2)}{' '}
            </p>
          </div>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          <div className="flex flex-row justify-between items-between">
            <p className="text-xs"> Last Payment Date</p>
            <p className="text-xs"> {studentLoanAccount.lastPaymentDate} </p>
          </div>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          <div className="flex flex-row justify-between items-between">
            <p className="text-xs"> Minimum Payment Amount</p>
            <p className="text-xs">
              {' '}
              ${formatNumber(studentLoanAccount.minimumPaymentAmount, 2)}
            </p>
          </div>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          <div className="flex flex-row justify-between items-between">
            <p className="text-xs"> Next Payment Due Data</p>
            <p className="text-xs"> {studentLoanAccount.nextPaymentDueDate}</p>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
