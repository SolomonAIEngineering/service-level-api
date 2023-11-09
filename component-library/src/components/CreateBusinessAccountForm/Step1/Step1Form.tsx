import { BusinessOnboardingBaseFormProps } from '../base';
import { Step1ZodSchema } from '../zod-schema';
import { Step1BioField, Step1HeadlineField } from './Step1Field';
import { cn } from 'src/lib-utils/utils';
import { Card } from 'src/components/ui/card';
import { Form } from 'src/components/ui/form';
import { BusinessAccountOnboardingMultiFormItem } from '../BusinessAccountOnboardingFormItem';

export const BusinessAccountOnBoardingStep1Form: React.FC<
  BusinessOnboardingBaseFormProps<Step1ZodSchema>
> = ({ form, setStep, className, variant }) => (
  <Card className={cn('w-fit p-[3%]', className)}>
    <Form {...form}>
      <BusinessAccountOnboardingMultiFormItem
        form={form}
        variant={variant}
        setStep={setStep}
        header="Welcome To Solomon AI"
        description="Give A Brief Description Of Your Business"
        isValid={form.formState.isValid}
      >
        <div className="flex flex-col m-auto space-y-5">
          <Step1BioField form={form} />
          <Step1HeadlineField form={form} />
        </div>
      </BusinessAccountOnboardingMultiFormItem>
    </Form>
  </Card>
);
