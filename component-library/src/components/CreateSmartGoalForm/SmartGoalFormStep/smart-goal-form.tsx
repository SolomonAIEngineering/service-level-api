import { Card } from 'src/components/ui/card';
import { Form } from 'src/components/ui/form';

import { SmartGoalZodSchema } from '../zod-schema';
import {
  SmartGoalFormDescriptionField,
  SmartGoalFormEndDateField,
  SmartGoalFormNameField,
  SmartGoalFormStartDateField,
  SmartGoalFormTargetAmountField,
  SmartGoalFormTypeField,
} from './smart-goal-form-fields';
import { MultiFormItem } from '../FormItem/form-item';
import { BaseFormProps } from '../base';
import { cn } from 'src/lib-utils/utils';

export const SmartGoalForm: React.FC<BaseFormProps<SmartGoalZodSchema>> = ({
  className,
  setStep,
  form,
  variant,
  userAccount,
  globalContext,
  specificContext,
  apiToken,
  model,
  temperature,
  top_p,
  frequency_penalty,
  presence_penalty,
  max_tokens,
  userId,
  userName,
}) => {
  return (
    <Card className={cn('p-[2%] w-fit', className)}>
      <Form {...form}>
        <MultiFormItem
          form={form}
          variant={variant}
          setStep={setStep}
          header="Craft Your Ultimate Smart Goal"
          description="Unleash Your Vision: Strategically Craft Your Ultimate Smart Goal!"
          isValid={form.formState.isValid}
        >
          <div className="space-y-8">
            <SmartGoalFormNameField
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
            <SmartGoalFormDescriptionField
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
            <SmartGoalFormTargetAmountField
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

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
              <SmartGoalFormStartDateField
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
              <SmartGoalFormEndDateField
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
            <SmartGoalFormTypeField
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
        </MultiFormItem>
      </Form>
    </Card>
  );
};
