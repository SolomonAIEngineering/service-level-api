import { useState } from 'react';
import { Card } from 'src/components/ui/card';
import {
  CategoryFormDescriptionField,
  CategoryFormFieldName,
  SubCategoriesFormField,
} from './category-form-field';

import { MultiFormItem } from '../FormItem/form-item';
import { CategoryZodSchema } from '../zod-schema';
import { Form } from 'src/components/ui/form';
import { BaseFormProps } from '../base';
import { cn } from 'src/lib-utils/utils';
import { PrimaryCategory, SecondaryCategory, categoryMap } from './types';

export const CategoryForm: React.FC<BaseFormProps<CategoryZodSchema>> = ({
  setStep,
  form,
  className,
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
}) => {
  const [enabledSecondaryCategories, setEnabledSecondaryCategories] = useState<
    SecondaryCategory[]
  >(categoryMap.get('ENTERTAINMENT') ?? []);

  const setSelectedItems = (value: PrimaryCategory) => {
    setEnabledSecondaryCategories(categoryMap.get(value) ?? []);
    form.resetField('subcategories');
  };

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
          header="Lets Categorize This Goal!"
          description="Categorize Your Goal for Laser-Focused Progress"
          isValid={form.formState.isValid}
        >
          <div className="space-y-8">
            <CategoryFormFieldName
              form={form}
              callback={setSelectedItems}
              userAccount={userAccount}
              globalContext={globalContext}
              specificContext={specificContext}
              apiToken={apiToken}
              model={model}
              temperature={temperature}
              top_p={top_p}
              frequency_penalty={frequency_penalty}
              presence_penalty={presence_penalty}
              max_tokens={max_tokens}
              userId={userAccount.id ?? ''}
              userName={userAccount.username ?? ''}
              financialContext={globalContext}
            />
            <CategoryFormDescriptionField
              form={form}
              subCategories={enabledSecondaryCategories}
              userAccount={userAccount}
              globalContext={globalContext}
              specificContext={specificContext}
              apiToken={apiToken}
              model={model}
              temperature={temperature}
              top_p={top_p}
              frequency_penalty={frequency_penalty}
              presence_penalty={presence_penalty}
              max_tokens={max_tokens}
              userId={userAccount.id ?? ''}
              userName={userAccount.username ?? ''}
              financialContext={globalContext}
            />
            <SubCategoriesFormField
              form={form}
              subCategories={enabledSecondaryCategories}
              userAccount={userAccount}
              globalContext={globalContext}
              specificContext={specificContext}
              apiToken={apiToken}
              model={model}
              temperature={temperature}
              top_p={top_p}
              frequency_penalty={frequency_penalty}
              presence_penalty={presence_penalty}
              max_tokens={max_tokens}
              userId={userAccount.id ?? ''}
              userName={userAccount.username ?? ''}
              financialContext={globalContext}
            />
          </div>
        </MultiFormItem>
      </Form>
    </Card>
  );
};
