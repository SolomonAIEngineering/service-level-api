import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
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
import { BudgetZodSchema } from '../zod-schema';
import { SmartTextarea } from 'src/components/SmartTextArea/smart-textarea';
import { BaseFieldProps } from '../base';
import { cn } from 'src/lib-utils/utils';

export const BudgetFormNameField: React.FC<BaseFieldProps<BudgetZodSchema>> = ({
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
          <FormLabel>Budget Name</FormLabel>
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
                'Please generate a budget name specific to this goal and milestone',
                'Generate a budget name and provide some details specific to this goal and milestone',
              ]}
              globalFinancialContext={globalContext}
              userAccount={userAccount}
              placeholder="Budget Name"
              {...field}
            />
          </FormControl>
          <FormDescription>
            This is the name that will be displayed on your profile and in
            emails.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const BudgetFormDescriptionField: React.FC<
  BaseFieldProps<BudgetZodSchema>
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
          <FormLabel>Budget Description</FormLabel>
          <FormControl>
            <SmartTextarea
              userId={userAccount.id ?? ''}
              userName={userAccount.username ?? ''}
              context={specificContext}
              sampleQuestions={[
                'Generate a budget description that is unique to me and the milestone of interest',
                'Generate a budget that is achievable based on the provided milestone and my financial context',
              ]}
              globalFinancialContext={globalContext}
              userAccount={userAccount}
              placeholder="Budget Description"
              financialContext={globalContext}
              apiToken={apiToken}
              model={model}
              temperature={temperature}
              top_p={top_p}
              frequency_penalty={frequency_penalty}
              presence_penalty={presence_penalty}
              max_tokens={max_tokens}
              {...field}
              rows={6}
            />
          </FormControl>
          <FormDescription>
            This is the name that will be displayed on your profile and in
            emails.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const BudgetFormStartDateField: React.FC<
  BaseFieldProps<BudgetZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="startDate"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Budget Start Date</FormLabel>
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
                    <span className="pr-2">Pick The Budgets Start Date</span>
                  )}
                  <CalendarIcon className="w-4 h-4 ml-2 opacity-50" />
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
            The anticipated start date of the budget of interest
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const BudgetFormEndDateField: React.FC<
  BaseFieldProps<BudgetZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="endDate"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Budget End Date</FormLabel>
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
                    <span className="pr-2">Pick The Budgets End Date</span>
                  )}
                  <CalendarIcon className="w-4 h-4 ml-2 opacity-50" />
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
            The anticipated end date of the budget of interest
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
