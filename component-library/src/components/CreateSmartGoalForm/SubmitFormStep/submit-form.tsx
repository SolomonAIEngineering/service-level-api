import { Dispatch, SetStateAction } from 'react';
import { MultiFormItem, MultiStepVariant } from '../FormItem/form-item';
import {
  BudgetZodSchema,
  CategoryZodSchema,
  MilestoneZodSchema,
  SmartGoalZodSchema,
} from '../zod-schema';
import { UseFormReturn } from 'react-hook-form';
import { Card } from 'src/components/ui/card';
import { Form } from 'src/components/ui/form';
import { cn } from 'src/lib-utils/utils';
import { AskSolomonAILayout } from 'src/components/AI/Chat/AskAILayout';
import { UserAccountClass } from 'src/types/user/user-account';
import { MelodyFinancialContext } from 'src/data-contracts/financial-service/data-contracts';
import { ContextHashMap } from '../base';
import { OpenAIModel } from 'src/components/AskSolomonAi/ChatHandler';

export interface SubmitFormProps {
  setStep: Dispatch<SetStateAction<number>>;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  categoryForm: UseFormReturn<CategoryZodSchema, any, undefined>;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  budgetForm: UseFormReturn<BudgetZodSchema, any, undefined>;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  milestoneForm: UseFormReturn<MilestoneZodSchema, any, undefined>;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  smartGoalForm: UseFormReturn<SmartGoalZodSchema, any, undefined>;
  className?: string;
  variant: MultiStepVariant;
  onSubmit: (data: SmartGoalZodSchema) => void;
  userAccount: UserAccountClass;
  globalContext: MelodyFinancialContext;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  specificContext: ContextHashMap<string> | any;
  userId: string;
  userName: string;
  instrumentationCallback?: () => void;
  apiToken: string;
  model: OpenAIModel;
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
}

export const SubmitForm: React.FC<SubmitFormProps> = ({
  setStep,
  categoryForm,
  budgetForm,
  milestoneForm,
  smartGoalForm,
  className,
  variant,
  onSubmit,
  globalContext,
  apiToken,
  model,
  temperature,
  top_p,
  frequency_penalty,
  presence_penalty,
  max_tokens,
  userId,
  userName,
  userAccount,
}) => {
  budgetForm.setValue('category', categoryForm.getValues());
  milestoneForm.setValue('budget', budgetForm.getValues());
  smartGoalForm.setValue('milestones', [milestoneForm.getValues()]);
  const form = smartGoalForm;

  return (
    <Card className={cn('p-[2%] w-fit', className)}>
      <Form {...form}>
        <AskSolomonAILayout
          context={form.getValues()}
          sampleQuestions={[
            'Is this goal too aggressive',
            'What can l tune about this in order to be successful',
            'Should l add more milestones',
            'How can l make this goal more realistic',
          ]}
          userId={userId}
          userName={userName}
          financialContext={globalContext}
          apiToken={apiToken}
          model={model}
          temperature={temperature}
          top_p={top_p}
          frequency_penalty={frequency_penalty}
          presence_penalty={presence_penalty}
          max_tokens={max_tokens}
          userAccount={userAccount}
          componentType={'SHEET'}
        >
          <MultiFormItem
            onSubmit={() => {
              onSubmit(form.getValues());
            }}
            form={form}
            variant={variant}
            setStep={setStep}
            header="Excited to see you are at the final step"
            description="submit the goal and get started on a better financial future"
          />
          {/** Give some feedback for ai */}
        </AskSolomonAILayout>
      </Form>
    </Card>
  );
};
