import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  CalendarIcon,
  ChartPieIcon,
  MinusCircleIcon,
} from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { Button } from 'src/components/ui/button';
import { Calendar } from 'src/components/ui/calendar';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'src/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select';
import { SmartGoalZodSchema } from '../zod-schema';
import { SmartTextarea } from 'src/components/SmartTextArea/smart-textarea';
import { BaseFieldProps } from '../base';
import { cn } from 'src/lib-utils/utils';
import { Textarea } from 'src/components/ui/textarea';

export const SmartGoalFormNameField: React.FC<
  BaseFieldProps<SmartGoalZodSchema>
> = ({
  form,
  userAccount,
  specificContext,
  globalContext,
  apiToken,
  model,
  temperature,
  top_p,
  frequency_penalty,
  presence_penalty,
  max_tokens,
}) => {
  return (
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Goal Name</FormLabel>
          <FormControl>
            <SmartTextarea
              userId={userAccount.id ?? ''}
              userName={userAccount.username ?? ''}
              financialContext={globalContext}
              apiToken={apiToken}
              model={model}
              temperature={temperature}
              top_p={top_p}
              frequency_penalty={frequency_penalty}
              presence_penalty={presence_penalty}
              max_tokens={max_tokens}
              context={specificContext}
              sampleQuestions={[
                'Please generate a goal name specific to me that is actually achievable',
                'Generate a goal name and provide some details',
              ]}
              globalFinancialContext={globalContext}
              userAccount={userAccount}
              placeholder="Save 2000 Dollars This Month"
              {...field}
            />
          </FormControl>
          <FormDescription>Define the goal name.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const SmartGoalFormDescriptionField: React.FC<
  BaseFieldProps<SmartGoalZodSchema>
> = ({
  form,
  userAccount,
  specificContext,
  globalContext,
  apiToken,
  model,
  temperature,
  top_p,
  frequency_penalty,
  presence_penalty,
  max_tokens,
}) => {
  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Goal Description</FormLabel>
          <FormControl>
            <SmartTextarea
              userId={userAccount.id ?? ''}
              userName={userAccount.username ?? ''}
              financialContext={globalContext}
              apiToken={apiToken}
              model={model}
              temperature={temperature}
              top_p={top_p}
              frequency_penalty={frequency_penalty}
              presence_penalty={presence_penalty}
              max_tokens={max_tokens}
              context={specificContext}
              sampleQuestions={[
                'Generate a smart goal for me',
                'Generate a smart goal that is achievable and specific to me',
              ]}
              globalFinancialContext={globalContext}
              userAccount={userAccount}
              placeholder="This goal is to save 2000 dollars this month. I will do this by..."
              {...field}
              rows={6}
            />
          </FormControl>
          <FormDescription>Goal Description</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const SmartGoalFormTargetAmountField: React.FC<
  BaseFieldProps<SmartGoalZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="targetAmount"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Target Amount</FormLabel>
          <FormControl>
            <Textarea placeholder="2000" {...field} />
          </FormControl>
          <FormDescription>Target budget amount</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const SmartGoalFormTypeField: React.FC<
  BaseFieldProps<SmartGoalZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="goalType"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Goal Type</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="pl-3 font-normal text-left bg-white border-4 shadow-md w-fit border-gray-50 rounded-2xl">
                <SelectValue placeholder="Associate a type to your goal" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="p-2 w-fit">
              <SelectItem value="GOAL_TYPE_SAVINGS">
                <div className="flex flex-row gap-1">
                  <ArrowUpCircleIcon className="w-6 h-6" />
                  <p> Increase Savings</p>
                </div>
              </SelectItem>
              <SelectItem value="GOAL_TYPE_DEBT">
                <div className="flex flex-row gap-1">
                  <ArrowDownCircleIcon className="w-6 h-6" />
                  <p> Decrease Debt</p>
                </div>
              </SelectItem>
              <SelectItem value="GOAL_TYPE_EXPENSE">
                <div className="flex flex-row gap-1">
                  <MinusCircleIcon className="w-6 h-6" />
                  <p> Limit Expenses</p>
                </div>
              </SelectItem>
              <SelectItem value="GOAL_TYPE_INVESTMENT">
                <div className="flex flex-row gap-1">
                  <ChartPieIcon className="w-6 h-6" />
                  <p>Better Invest</p>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <FormDescription>Define the type of goal this is </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const SmartGoalFormEndDateField: React.FC<
  BaseFieldProps<SmartGoalZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="endDate"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Goal End Date</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-fit pl-3 text-left font-normal bg-white shadow-md border-4 border-gray-50 rounded-2xl',
                    !field.value && 'text-muted-foreground',
                  )}
                >
                  {field.value ? (
                    format(new Date(field.value), 'PPP')
                  ) : (
                    <span className="pr-2">Pick The Goal End Date</span>
                  )}
                  <CalendarIcon className="w-4 h-4 ml-1 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={new Date(field.value ?? '')}
                onSelect={(selected) => {
                  form.setValue(
                    'endDate',
                    selected ? selected.toString() : new Date().toString(),
                  );
                }}
                disabled={(date) => {
                  const startDate = form.getValues().startDate;
                  return (
                    date <= new Date(startDate ?? '') ||
                    date < new Date('1900-01-01')
                  );
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription className="text-xs w-[70%]">
            The anticipated end date of the goal of interest
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const SmartGoalFormStartDateField: React.FC<
  BaseFieldProps<SmartGoalZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="startDate"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Goal Start Date</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-fit pl-3 text-left font-normal bg-white shadow-md border-4 border-gray-50 rounded-2xl',
                    !field.value && 'text-muted-foreground',
                  )}
                >
                  {field.value ? (
                    format(new Date(field.value), 'PPP')
                  ) : (
                    <span className="pr-2">Pick The Goal Start Date</span>
                  )}
                  <CalendarIcon className="w-4 h-4 ml-1 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={new Date(field.value ?? '')}
                onSelect={(selected) => {
                  form.setValue(
                    'startDate',
                    selected ? selected.toString() : new Date().toString(),
                  );
                }}
                disabled={(date) => {
                  const endDate = form.getValues().endDate;
                  return date > new Date(endDate ?? '') || date <= new Date();
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription className="text-xs w-[70%]">
            The anticipated start date of the goal of interest
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
