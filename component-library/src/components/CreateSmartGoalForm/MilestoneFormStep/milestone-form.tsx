import { Form } from 'src/components/ui/form';
import { Card } from 'src/components/ui/card';
import { MilestoneZodSchema } from '../zod-schema';
import { MultiFormItem } from '../FormItem/form-item';
import {
  MilestoneFormDescriptionFormField,
  MilestoneFormNameFormField,
  MilestoneFormTargetAmountFormField,
  MilestoneFormTargetDateFormField,
} from './milestone-fields';
import { BaseFormProps } from '../base';
import { cn } from 'src/lib-utils/utils';

/**
 * A form component for creating milestones.
 * @param callback A callback function to handle the created milestone.
 * @param className Optional CSS class names.
 */
export const MilestoneForm: React.FC<BaseFormProps<MilestoneZodSchema>> = ({
  setStep,
  className,
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
    <Card className={cn('w-fit p-[3%]', className)}>
      {/** We need to beable to register the category name */}
      {/** We need to be able to register the description - ideally this should be abled to be autogened by AI */}
      {/** We should be able to select numerous sub-categories */}
      <Form {...form}>
        <MultiFormItem
          form={form}
          variant={variant}
          setStep={setStep}
          header="Milestones are pretty important. Lets Craft One"
          description="Chart Your Progress: Carve Out Your Pivotal Milestones on the Journey to Success!"
          isValid={form.formState.isValid}
        >
          <div className="flex flex-col gap-4">
            <MilestoneFormNameFormField
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
            <MilestoneFormDescriptionFormField
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
            <MilestoneFormTargetAmountFormField
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
            <MilestoneFormTargetDateFormField
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
