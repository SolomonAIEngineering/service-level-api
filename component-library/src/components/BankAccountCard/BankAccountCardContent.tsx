import { useContext } from 'react';
import { BankAccountContext } from '.';
import { Card, CardContent } from '../ui/card';
import { cn, formatPocketName } from '../../lib-utils/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';
import { CaretSortIcon, FaceIcon } from '@radix-ui/react-icons';
import { CalendarIcon, Goal, GoalIcon, RocketIcon } from 'lucide-react';
import { Label } from '../ui/label';
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  Command,
} from '../ui/command';
import { Badge } from '../ui/badge';
import {
  SmartGoal as ISmartGoal,
  Milestone,
} from 'src/data-contracts/financial-service/data-contracts';
import React from 'react';;
import { Button } from '../ui/button';
import { BankAccountClass } from 'src/types/financial/bank-account';

interface IBankAccountCardContent {
  className?: string;
}

/**
 * The `BankAccountCardContent` component is responsible for displaying the content section of a bank account card within a user interface.
 *
 * Features:
 * - Showcases the number of pockets and goals associated with the bank account.
 * - Presents each count within its respective badge for clarity and aesthetics.
 * - Can be styled further through its `className` prop.
 *
 * @remarks
 * The component fetches its bank account data from the `BankAccountContext`. If there are pockets associated with the account,
 * the component will display badges indicating the number of pockets and goals.
 *
 * It's worth noting that the bank account context should ideally provide methods `getNumberOfPockets` and `getNumberOfGoals` to
 * fetch the desired counts.
 *
 * @example Basic Usage:
 * ```tsx
 * import { BankAccountCardContent } from './path-to-component';
import { BankAccount as BankAccountInstance } from 'src/types/financial/bank-account';
 *
 * function BankAccountContentView() {
 *   return (
 *     <BankAccountContext.Provider value={someBankAccount}>
 *       <BankAccountCardContent />
 *     </BankAccountContext.Provider>
 *   );
 * }
 * ```
 *
 * @example Applying custom styles using `className` prop:
 * ```tsx
 * <BankAccountCardContent className="bg-gray-100 rounded-md" />
 * ```
 *
 * @param props - Component properties conforming to `IBankAccountCardContent`.
 * @returns {React.FC<IBankAccountCardContent>} - Returns a React Functional Component.
 */
const BankAccountCardContent: React.FC<IBankAccountCardContent> = (props) => {
  const { className } = props;

  return (
    <CardContent className={cn('', className)}>
      <Tabs defaultValue="pockets" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pockets">Pockets</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>
        <TabsContent value="pockets">
          <AccountPockets />
        </TabsContent>
        <TabsContent value="goals">
          <Card>
            <AccountGoalsCommandSearch />
          </Card>
        </TabsContent>
      </Tabs>
      {/* if the historical account balance is not empty, we display a graph of the balance history */}
    </CardContent>
  );
};

const AccountGoalsCommandSearch: React.FC = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inputValue, setInputValue] = React.useState('');

  const [pages, setPages] = React.useState<string[]>(['home']);

  const popPage = React.useCallback(() => {
    setPages((pages) => {
      const x = [...pages];
      x.splice(-1, 1);
      return x;
    });
  }, []);

  const bankAccount = useContext(BankAccountContext);
  if (bankAccount === undefined) {
    return null;
  }

  const bankAccountClassInstance = new BankAccountClass(bankAccount);

  const activePage = pages[pages.length - 1];
  const isHome = activePage === 'home';

  function bounce() {
    if (ref.current) {
      ref.current.style.transform = 'scale(0.96)';
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = '';
        }
      }, 100);

      setInputValue('');
    }
  }

  return (
    <Command
      className="rounded-lg border shadow-md"
      ref={ref}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
          bounce();
        }

        if (isHome || inputValue.length) {
          return;
        }

        if (e.key === 'Backspace') {
          e.preventDefault();
          popPage();
          bounce();
        }
      }}
    >
      <div className="p-2">
        {pages.map((p) => (
          <Badge key={p} cmdk-vercel-badge="" variant={'outline'}>
            {p}
          </Badge>
        ))}
      </div>
      <CommandInput
        placeholder="Search across your goals ..."
        onValueChange={(value) => {
          setInputValue(value);
        }}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {activePage === 'home' && (
          <CommandGroup heading="Suggestions">
            <CommandItem
              onSelect={() => {
                setPages([...pages, 'smart-goals']);
              }}
            >
              <Goal className="mr-2 h-4 w-4" />
              <span>Goals</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setPages([...pages, 'milestones']);
              }}
            >
              <FaceIcon className="mr-2 h-4 w-4" />
              <span>Milestones</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setPages([...pages, 'target']);
              }}
            >
              <RocketIcon className="mr-2 h-4 w-4" />
              <span>Target</span>
            </CommandItem>
          </CommandGroup>
        )}
        <CommandSeparator />
        {activePage === 'smart-goals' && (
          <>
            <GoalsCommandItems goals={bankAccountClassInstance.getGoals()} />
          </>
        )}
        {activePage === 'milestones' && (
          <div className="py-4">
            <GoalMilestones
              milestones={bankAccountClassInstance.getMilestones()}
            />
          </div>
        )}
      </CommandList>
    </Command>
  );
};

const GoalMilestones: React.FC<{
  milestones: Milestone[];
}> = ({ milestones }) => {
  return (
    <>
      {milestones.map((milestone) => (
        <CommandItem key={milestone.id}>
          <div className="px-2 flex justify-between gap-4">
            <Label className="font-bold">{milestone.name}</Label>
            <Label className="font-bold text-xs border rounded-2xl px-3">
              {' '}
              {milestone.isCompleted ? 'Completed' : 'Active'}
            </Label>
            <Label>{milestone.targetAmount} Target</Label>
          </div>
        </CommandItem>
      ))}
    </>
  );
};

const GoalsCommandItems: React.FC<{
  goals: ISmartGoal[];
}> = ({ goals }) => {
  return (
    <>
      {goals.map((goal) => (
        <CommandItem key={goal.id}>
          <div className="px-2 flex justify-between gap-5">
            <GoalIcon className="mr-2 h-4 w-4" />
            <Label className="font-bold">{goal.name}</Label>
            <Label className="font-bold">
              {' '}
              {goal.isCompleted ? 'Completed' : 'Active'}
            </Label>
            <p>{goal.targetAmount} Target</p>
            <div className="flex flex-row items-center">
              <CalendarIcon className="h-4 w-4 mr-2" />
              <span className="text-xs">{goal.endDate}</span>
            </div>
          </div>
        </CommandItem>
      ))}
    </>
  );
};

const AccountPockets: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const bankAccount = useContext(BankAccountContext);
  if (bankAccount === undefined) {
    return null;
  }

  // Check if there are pockets associated with the bank account.
  if (bankAccount.pockets == undefined || bankAccount.pockets?.length === 0) {
    return null;
  }

  // get the first pocket name
  const pocketName =
    bankAccount.pockets[0].type !== undefined
      ? bankAccount.pockets[0].type!.toString()
      : '';

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] p-4 space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          {bankAccount.name} has {bankAccount.pockets?.length} pockets
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretSortIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        {formatPocketName(pocketName.toString())}
      </div>
      {bankAccount.pockets && bankAccount.pockets.length > 1 && (
        <CollapsibleContent className="space-y-2">
          {bankAccount.pockets.slice(1).map((pocket) => {
            return (
              <div
                key={pocket.id}
                className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm"
              >
                {pocket.type && formatPocketName(pocket.type.toString())}
              </div>
            );
          })}
        </CollapsibleContent>
      )}
    </Collapsible>
  );
};

export { BankAccountCardContent };
