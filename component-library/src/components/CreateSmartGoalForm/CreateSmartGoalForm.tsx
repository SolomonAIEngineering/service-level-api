import { z } from 'zod';
import {
  BudgetZodSchema,
  CategoryZodSchema,
  MilestoneZodSchema,
  budgetSchema,
  categorySchema,
  milestoneSchema,
  smartGoalSchema,
} from './zod-schema';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form, UseFormReturn, useForm } from 'react-hook-form';
import { toast } from 'src/components/ui/use-toast';
import { Card } from 'src/components/ui/card';
import { BudgetForm } from './BudgetFormStep/budget-form';
import { CategoryForm } from './CategoryFormStep/category-form';
import { MilestoneForm } from './MilestoneFormStep/milestone-form';
import { SmartGoalForm } from './SmartGoalFormStep/smart-goal-form';
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { SubmitForm } from './SubmitFormStep/submit-form';
import {
  BankAccount,
  MelodyFinancialContext,
  SmartGoal,
} from 'src/data-contracts/financial-service/data-contracts';
import { UserAccountClass } from 'src/types/user/user-account';
import { CategoryClass } from 'src/types/financial/category';
import { BudgetClass } from 'src/types/financial/budget';
import { MilestoneClass } from 'src/types/financial/milestone';
import { SmartGoalClass } from 'src/types/financial/smart-goal';
import { cn } from 'src/lib-utils/utils';
import { NavigationItem } from '../Headers/header-with-stacked-flyout-menu';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { SidebarBasic } from '../Layout/sidebar-layout/sidebar-basic';
import { OpenAIModel } from '../AskSolomonAi/ChatHandler';

export type SmartGoalZodSchema = z.infer<typeof smartGoalSchema>;
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type FormReturnProps = UseFormReturn<SmartGoalZodSchema, any, undefined>;

const defaultValues: Partial<SmartGoalZodSchema> = {
  name: '',
  description: '',
  goalType: 'GOAL_TYPE_SAVINGS',
  startDate: '',
  endDate: '',
  targetAmount: '',
  milestones: [],
  forecasts: undefined,
  currentAmount: '',
  duration: '',
  id: '',
  isCompleted: false,
  userId: '',
};

export const BankAccountSelector: React.FC<{
  accounts: BankAccount[];
  selectedAccount?: BankAccount;
  setSelectedAccount: (account: BankAccount) => void;
}> = ({ accounts, selectedAccount, setSelectedAccount }) => {
  if (accounts.length === 0 || selectedAccount === undefined) {
    return <p>No bank accounts found.</p>;
  }

  return (
    <>
      <div className="flex flex-col gap-2 p-[5%]">
        <div className="flex flex-row gap-2">
          <Label className="md:text-xl md:font-bold">
            Bank Account Goal Is Tied To{' '}
          </Label>
          <Badge
            className="px-2 text-xs text-white bg-black w-fit rounded-2xl"
            style={{
              fontSize: '0.6rem',
            }}
          >
            {' '}
            {selectedAccount.name}
          </Badge>
          <Badge className="px-2 text-xs text-white bg-gray-500 w-fit rounded-2xl">
            {selectedAccount.pockets && selectedAccount.pockets.length > 1
              ? ` (${selectedAccount.pockets.length})`
              : ' No Pockets Tied To Account'}
          </Badge>
        </div>
        <div className="flex flex-row gap-2">
          {accounts.map((account) => (
            <div className="flex flex-col gap-2" key={account.id}>
              <Badge
                className={cn(
                  'bg-black text-white p-2 flex flex-col shadow-md  border-gray-50 rounded-2xl',
                  account.name === selectedAccount.name
                    ? 'border-black bg-white text-black'
                    : 'bg-white text-black',
                )}
                onClick={() => setSelectedAccount(account)}
              >
                <p>{account.name}</p>
              </Badge>
              {account.name === selectedAccount.name && (
                <p
                  className="p-1 text-xs text-white bg-black w-fit rounded-2xl"
                  style={{
                    fontSize: '0.6rem',
                  }}
                >
                  {' '}
                  {account.name === selectedAccount.name && 'selected'}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const MultiStepSmartGoalForm: React.FC<{
  className?: string;
  callback: (smartGoal: SmartGoal) => void;
  bankAccounts: BankAccount[];
  userName: string;
  userProfileImage: string;
  globalFinancialContext: MelodyFinancialContext;
  userAccount: UserAccountClass;
  instrumentationCallback?: () => void;
  userId: string;
  apiToken: string;
  model: OpenAIModel;
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
}> = ({
  className,
  callback,
  bankAccounts,
  userName,
  userProfileImage,
  globalFinancialContext,
  userAccount,
  instrumentationCallback,
  userId,
  apiToken,
  model,
  temperature,
  top_p,
  frequency_penalty,
  presence_penalty,
  max_tokens,
}) => {
  const [step, setStep] = useState(1);
  const [selectedBankAccount, setSelectedBankAccount] = useState<BankAccount>(
    bankAccounts[0],
  );

  // The form gets al the state updates and preserves the state
  const form = useForm<SmartGoalZodSchema>({
    resolver: zodResolver(smartGoalSchema),
    defaultValues,
    mode: 'onChange',
  });

  const currMilestone =
    form.getValues('milestones') !== undefined
      ? form.getValues('milestones')![0]
      : undefined;

  const currBudget = currMilestone?.budget;

  const milestoneForm = useForm<MilestoneZodSchema>({
    resolver: zodResolver(milestoneSchema),
    mode: 'onChange',
    defaultValues: currMilestone,
  });

  const budgetForm = useForm<BudgetZodSchema>({
    resolver: zodResolver(budgetSchema),
    mode: 'onChange',
    defaultValues: currBudget,
  });

  const categoryForm = useForm<CategoryZodSchema>({
    resolver: zodResolver(categorySchema),
    mode: 'onChange',
    defaultValues: currBudget?.category,
  });

  const onSubmit = (data: SmartGoalZodSchema) => {
    // validate
    if (data.milestones === undefined || data.milestones.length === 0) {
      toast({
        title: 'Failed To Create A Goal',
        description: (
          <p className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            Please Provide A Milestone
          </p>
        ),
      });
      return;
    }

    // extract the milestone from the data
    const milestone = data.milestones![0];
    const budget = milestone.budget;

    if (budget === undefined) {
      toast({
        title: 'Failed To Create A Goal',
        description: (
          <p className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            Please Provide A Budget
          </p>
        ),
      });
      return;
    }

    const category = budget.category;
    if (category === undefined) {
      toast({
        title: 'Failed To Create A Goal',
        description: (
          <p className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            Please Provide A Category
          </p>
        ),
      });
      return;
    }

    // transform to class object
    const transformedCategory = new CategoryClass({
      name: category.name,
      description: category.description,
      subcategories: category.subcategories,
    });

    const transformedBudget = new BudgetClass({
      category: transformedCategory,
      description: budget.description,
      endDate: budget.endDate,
      name: budget.name,
      startDate: budget.startDate,
    });

    const transformedMilestone = new MilestoneClass({
      budget: transformedBudget,
      description: milestone.description,
      name: milestone.name,
      targetAmount: milestone.targetAmount,
      targetDate: milestone.targetDate,
    });

    const transformedGoal = new SmartGoalClass({
      name: data.name,
      description: data.description,
      targetAmount: data.targetAmount,
      endDate: data.endDate,
      startDate: data.startDate,
      goalType: data.goalType,
      milestones: [transformedMilestone],
      forecasts: data.forecasts,
      currentAmount: data.currentAmount,
      duration: data.duration,
      isCompleted: data.isCompleted,
      userId: userAccount.id,
    } as SmartGoal);

    callback(transformedGoal);

    // emit a metrics noting the creation of the smart goal
    instrumentationCallback !== undefined && instrumentationCallback();

    toast({
      title: 'Successfully Created A Goal',
      description: (
        <p className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          Dare To Be Great
        </p>
      ),
    });
  };

  // return if no bank accounts are present since we cannot
  // assign a goal unless a bank account is specified
  if (bankAccounts.length === 0) {
    return <p>No bank accounts found.</p>;
  }

  const SmartGoalNavigationItem: NavigationItem[] = [
    {
      name: 'Step 1. Create A Smart Goal',
      href: '/smart-goal',
      icon: ChartPieIcon,
      current: step === 1,
    },
    {
      name: 'Step 2. Add A Milestone To The Goal',
      href: '/smart-goal',
      icon: DocumentDuplicateIcon,
      current: step === 2,
    },
    {
      name: 'Step 3. Add A Budget To The Milestone',
      href: '/smart-goal',
      icon: FolderIcon,
      current: step === 3,
    },
    {
      name: 'Step 4. Add A Category To The Goal',
      href: '/smart-goal',
      icon: CalendarIcon,
      current: step === 4,
    },
    {
      name: 'Step 5. Submit Goal',
      href: '/smart-goal',
      icon: RocketLaunchIcon,
      current: step === 5,
    },
  ];

  return (
    <Card className={cn('p-[2%] w-full', className)}>
      <div className="flex flex-row gap-2">
        <div className="w-[20%]">
          <SidebarBasic
            navigationItems={SmartGoalNavigationItem}
            userName={userName}
            userProfileImage={userProfileImage}
            className="h-full "
          />
        </div>
        <div className="w-[80%]">
          <Form {...form}>
            <form>
              {step === 1 && (
                <>
                  <BankAccountSelector
                    accounts={bankAccounts}
                    selectedAccount={selectedBankAccount}
                    setSelectedAccount={setSelectedBankAccount}
                  />
                  <SmartGoalForm
                    form={form}
                    setStep={setStep}
                    variant={'first'}
                    className="w-full border-none"
                    userAccount={userAccount}
                    globalContext={globalFinancialContext}
                    specificContext={form.getValues()}
                    userId={userId}
                    userName={userName}
                    apiToken={apiToken}
                    model={model}
                    temperature={temperature}
                    top_p={top_p}
                    frequency_penalty={frequency_penalty}
                    presence_penalty={presence_penalty}
                    max_tokens={max_tokens}
                  />
                </>
              )}{' '}
              {step === 2 && (
                <MilestoneForm
                  form={milestoneForm}
                  setStep={setStep}
                  variant={'middle'}
                  className="w-full border-none"
                  userAccount={userAccount}
                  globalContext={globalFinancialContext}
                  specificContext={form.getValues()}
                  userId={userId}
                  userName={userName}
                  apiToken={apiToken}
                  model={model}
                  temperature={temperature}
                  top_p={top_p}
                  frequency_penalty={frequency_penalty}
                  presence_penalty={presence_penalty}
                  max_tokens={max_tokens}
                />
              )}{' '}
              {step === 3 && (
                <BudgetForm
                  form={budgetForm}
                  setStep={setStep}
                  variant={'middle'}
                  className="w-full border-none"
                  userAccount={userAccount}
                  globalContext={globalFinancialContext}
                  specificContext={form.getValues()}
                  userId={userId}
                  userName={userName}
                  apiToken={apiToken}
                  model={model}
                  temperature={temperature}
                  top_p={top_p}
                  frequency_penalty={frequency_penalty}
                  presence_penalty={presence_penalty}
                  max_tokens={max_tokens}
                />
              )}
              {step === 4 && (
                <CategoryForm
                  form={categoryForm}
                  setStep={setStep}
                  variant={'middle'}
                  className="w-full border-none"
                  userAccount={userAccount}
                  globalContext={globalFinancialContext}
                  specificContext={form.getValues()}
                  userId={userId}
                  userName={userName}
                  apiToken={apiToken}
                  model={model}
                  temperature={temperature}
                  top_p={top_p}
                  frequency_penalty={frequency_penalty}
                  presence_penalty={presence_penalty}
                  max_tokens={max_tokens}
                />
              )}{' '}
              {step === 5 && (
                <SubmitForm
                  onSubmit={onSubmit}
                  categoryForm={categoryForm}
                  budgetForm={budgetForm}
                  milestoneForm={milestoneForm}
                  smartGoalForm={form}
                  setStep={setStep}
                  variant={'last'}
                  className="w-full border-none"
                  userAccount={userAccount}
                  globalContext={globalFinancialContext}
                  specificContext={form.getValues()}
                  userId={userId}
                  userName={userName}
                  apiToken={apiToken}
                  model={model}
                  temperature={temperature}
                  top_p={top_p}
                  frequency_penalty={frequency_penalty}
                  presence_penalty={presence_penalty}
                  max_tokens={max_tokens}
                />
              )}
            </form>
          </Form>
        </div>
      </div>
    </Card>
  );
};

export { MultiStepSmartGoalForm };
