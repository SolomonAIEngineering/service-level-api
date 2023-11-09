import { BusinessOnboardingBaseFormProps } from '../base';
import { Step2ZodSchema } from '../zod-schema';
import { cn } from 'src/lib-utils/utils';
import { Card } from 'src/components/ui/card';
import { Form } from 'src/components/ui/form';
import { BusinessAccountOnboardingMultiFormItem } from '../BusinessAccountOnboardingFormItem';
import {
  Step2PhoneNumberField,
  Step2CompanyNameField,
  Step2CompanyDescriptionField,
  Step2CompanyWebsiteField,
  Step2IndustryField,
  Step2EstablishedField,
} from './Step2Field';

export const BusinessAccountOnBoardingStep2Form: React.FC<
  BusinessOnboardingBaseFormProps<Step2ZodSchema>
> = ({ form, setStep, className, variant }) => (
  <Card className={cn('w-fit p-[3%]', className)}>
    <Form {...form}>
      <BusinessAccountOnboardingMultiFormItem
        form={form}
        variant={variant}
        setStep={setStep}
        header="Your Business Matters"
        description="Give Us Some More Information About Your Business"
        isValid={form.formState.isValid}
      >
        <div className="flex flex-col m-auto space-y-5">
          <Step2PhoneNumberField form={form} />
          <Step2CompanyNameField form={form} />
          <Step2CompanyDescriptionField form={form} />{' '}
          <Step2CompanyWebsiteField form={form} />{' '}
          <Step2IndustryField form={form} />{' '}
          <Step2EstablishedField form={form} />{' '}
        </div>
      </BusinessAccountOnboardingMultiFormItem>
    </Form>
  </Card>
);
