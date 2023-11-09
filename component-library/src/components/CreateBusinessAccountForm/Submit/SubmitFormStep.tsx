import { Dispatch, SetStateAction } from 'react';
import {
  BusinessAccountZodSchema,
  Step1ZodSchema,
  Step2ZodSchema,
  Step3ZodSchema,
  Step4ZodSchema,
} from '../zod-schema';
import { Form, UseFormReturn } from 'react-hook-form';
import { Card } from 'src/components/ui/card';
import { cn } from 'src/lib-utils/utils';
import {
  BusinessAccountOnboardingMultiFormItem,
  BusinessOnboardingMultiStepVariant,
} from '../BusinessAccountOnboardingFormItem';

export interface SubmitFormProps {
  setStep: Dispatch<SetStateAction<number>>;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  step1Form: UseFormReturn<Step1ZodSchema, any, undefined>;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  step2Form: UseFormReturn<Step2ZodSchema, any, undefined>;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  step3Form: UseFormReturn<Step3ZodSchema, any, undefined>;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  step4Form: UseFormReturn<Step4ZodSchema, any, undefined>;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  businessAccountFrom: UseFormReturn<BusinessAccountZodSchema, any, undefined>;

  className?: string;
  variant: BusinessOnboardingMultiStepVariant;
  onSubmit: (data: BusinessAccountZodSchema) => void;
}

export const SubmitBusinessAccountOnboardingForm: React.FC<SubmitFormProps> = ({
  setStep,
  step1Form,
  step2Form,
  step3Form,
  step4Form,
  businessAccountFrom,
  className,
  variant,
  onSubmit,
}) => {
  const form = businessAccountFrom;
  form.setValue('address', step3Form.getValues());
  const details = step1Form.getValues();
  form.setValue('headline', details.headline);
  form.setValue('bio', details.bio);
  form.setValue('tags', details.tags);

  const company = step2Form.getValues();
  form.setValue('phoneNumber', company.phoneNumber);
  form.setValue('companyName', company.companyName);
  form.setValue('companyDescription', company.companyDescription);
  form.setValue('companyWebsiteUrl', company.companyWebsite);
  form.setValue('companyIndustryType', company.industry);
  form.setValue('companyEstablishedDate', company.companyEstablished);

  const credentials = step4Form.getValues();
  form.setValue('username', credentials.userName);
  form.setValue('email', credentials.email);
  form.setValue('password', credentials.password);
  form.setValue('confirmPassword', credentials.confirmPassword);
  form.setValue('profileImage', credentials.profileImage);

  return (
    <Card className={cn('p-[2%] w-fit', className)}>
      <Form {...form}>
        <BusinessAccountOnboardingMultiFormItem
          onSubmit={() => {
            onSubmit(form.getValues());
          }}
          form={form}
          variant={variant}
          setStep={setStep}
          header="Excited to see you are at the final step"
          description="Create your account and get started on a better financial future"
        />
        {/** Give some feedback for ai */}
      </Form>
    </Card>
  );
};
