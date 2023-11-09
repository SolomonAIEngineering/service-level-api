import { CalendarIcon } from '@heroicons/react/24/outline';
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
import { MilestoneZodSchema } from '../zod-schema';
import { SmartTextarea } from 'src/components/SmartTextArea/smart-textarea';
import { BaseFieldProps } from '../base';
import { cn } from 'src/lib-utils/utils';

// const currMilestoneValue = form.getValues("milestones");

// const milestoneForm = useForm<MilestoneZodSchema>({
//   resolver: zodResolver(milestoneSchema),
//   mode: "onChange",
//   defaultValues: {
//     name: isMilestoneValid(currMilestoneValue)
//       ? currMilestoneValue![0].name
//       : "",
//     description: isMilestoneValid(currMilestoneValue)
//       ? currMilestoneValue![0].description
//       : "",
//     targetAmount: isMilestoneValid(currMilestoneValue)
//       ? currMilestoneValue![0].targetAmount
//       : "",
//     targetDate: isMilestoneValid(currMilestoneValue)
//       ? currMilestoneValue![0].targetDate
//       : "",
//   },
// });

export const MilestoneFormNameFormField: React.FC<
  BaseFieldProps<MilestoneZodSchema>
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
          <FormLabel>Milestone Name</FormLabel>
          <FormControl>
            <SmartTextarea
              userId={''}
              userName={''}
              financialContext={globalContext}
              context={specificContext}
              sampleQuestions={[
                'Generate a milestone name specific to my goal',
                'Generate a milestone name that you think is ideal and achievable',
              ]}
              globalFinancialContext={globalContext}
              userAccount={userAccount}
              apiToken={apiToken}
              model={model}
              temperature={temperature}
              top_p={top_p}
              frequency_penalty={frequency_penalty}
              presence_penalty={presence_penalty}
              max_tokens={max_tokens}
              placeholder="Milestone Name"
              {...field}
            />
          </FormControl>
          <FormDescription>
            This is the name that will be associated with the milestone of
            interest
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const MilestoneFormDescriptionFormField: React.FC<
  BaseFieldProps<MilestoneZodSchema>
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
          <FormLabel>Description</FormLabel>
          <FormControl>
            <SmartTextarea
              userId={''}
              userName={''}
              financialContext={globalContext}
              context={specificContext}
              sampleQuestions={[
                'Generate a milestone description specific to my goal',
                'Describe this milestone in a way that you think is ideal and achievable',
              ]}
              globalFinancialContext={globalContext}
              userAccount={userAccount}
              apiToken={apiToken}
              model={model}
              temperature={temperature}
              top_p={top_p}
              frequency_penalty={frequency_penalty}
              presence_penalty={presence_penalty}
              max_tokens={max_tokens}
              placeholder="Milestone Description"
              {...field}
              rows={6}
            />
          </FormControl>
          <FormDescription>
            This is the description that will be associated with the milestone
            of interest
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const MilestoneFormTargetAmountFormField: React.FC<
  BaseFieldProps<MilestoneZodSchema>
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
      name="targetAmount"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Target Amount</FormLabel>
          <FormControl>
            <SmartTextarea
              userId={''}
              userName={''}
              financialContext={globalContext}
              context={specificContext}
              sampleQuestions={[
                'Provide an ideal target amount for the milestone that is achievable',
                'Provide a realistic target amount given my current financial condition',
              ]}
              globalFinancialContext={globalContext}
              userAccount={userAccount}
              placeholder="Target Amount"
              apiToken={apiToken}
              model={model}
              temperature={temperature}
              top_p={top_p}
              frequency_penalty={frequency_penalty}
              presence_penalty={presence_penalty}
              max_tokens={max_tokens}
              {...field}
            />
          </FormControl>
          <FormDescription>
            This is the target amount that will be associated with the milestone
            of interest
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export const MilestoneFormTargetDateFormField: React.FC<
  BaseFieldProps<MilestoneZodSchema>
> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="targetDate"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Milestone Target Date</FormLabel>
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
                    <span>Pick The Milestone Start Date</span>
                  )}
                  <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={new Date(field.value ?? new Date())}
                onSelect={(selected) => {
                  form.setValue(
                    'targetDate',
                    selected ? selected.toString() : new Date().toString(),
                  );
                }}
                disabled={(date) =>
                  date < new Date() || date < new Date('1900-01-01')
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription>Milestone start date.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
