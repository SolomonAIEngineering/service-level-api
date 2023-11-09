import { Card } from 'src/components/ui/card';

import { Form } from 'src/components/ui/form';
import { BudgetZodSchema } from '../zod-schema';
import {
  BudgetFormDescriptionField,
  BudgetFormEndDateField,
  BudgetFormNameField,
  BudgetFormStartDateField,
} from './budget-form-field';
import { MultiFormItem } from '../FormItem/form-item';
import { BaseFormProps } from '../base';
import { cn } from 'src/lib-utils/utils';

export const BudgetForm: React.FC<BaseFormProps<BudgetZodSchema>> = ({
  form,
  className,
  setStep,
  variant,
  userAccount,
  globalContext,
  specificContext,
  userId,
  userName,
  apiToken,
  model,
  temperature,
  top_p,
  frequency_penalty,
  presence_penalty,
  max_tokens,
}) => (
  <Card className={cn('w-fit p-[3%]', className)}>
    {/** We need to beable to register the category name */}
    {/** We need to be able to register the description - ideally this should be abled to be autogened by AI */}
    {/** We should be able to select numerous sub-categories */}
    <Form {...form}>
      <MultiFormItem
        form={form}
        variant={variant}
        setStep={setStep}
        header="Cant achieve a financial milestone without a budget"
        description="Craft Your Financial Blueprint: Shape the Perfect Budget for a Prosperous Tomorrow"
        isValid={form.formState.isValid}
      >
        <div className="flex flex-col gap-2 m-auto">
          <BudgetFormNameField
            form={form}
            userAccount={userAccount}
            globalContext={globalContext}
            specificContext={specificContext}
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
          />
          <BudgetFormDescriptionField
            form={form}
            userAccount={userAccount}
            globalContext={globalContext}
            specificContext={specificContext}
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
          />
          <div className="flex flex-row gap-2 py-5">
            <BudgetFormStartDateField
              form={form}
              userAccount={userAccount}
              globalContext={globalContext}
              specificContext={specificContext}
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
            />
            <BudgetFormEndDateField
              form={form}
              userAccount={userAccount}
              globalContext={globalContext}
              specificContext={specificContext}
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
            />
          </div>
        </div>
      </MultiFormItem>
    </Form>
  </Card>
);
