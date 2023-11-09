import { BusinessOnboardingBaseFormProps } from '../base';
import { Step3ZodSchema } from '../zod-schema';
import { cn } from 'src/lib-utils/utils';
import { Card } from 'src/components/ui/card';
import { Form } from 'src/components/ui/form';
import { BusinessAccountOnboardingMultiFormItem } from '../BusinessAccountOnboardingFormItem';
import {
  Step3AddressField,
  Step3CityField,
  Step3StateField,
  Step3UnitField,
  Step3ZipCodeField,
} from './Step3Field';

export const BusinessAccountOnBoardingStep3Form: React.FC<
  BusinessOnboardingBaseFormProps<Step3ZodSchema>
> = ({ form, setStep, className, variant }) => (
  <Card className={cn('w-fit p-[3%]', className)}>
    <Form {...form}>
      <BusinessAccountOnboardingMultiFormItem
        form={form}
        variant={variant}
        setStep={setStep}
        header="Keep Your Business On Track"
        description="Tell Us Where Your Business Operates"
        isValid={form.formState.isValid}
      >
        <div className="flex flex-col m-auto space-y-5">
          <Step3AddressField form={form} />
          <Step3CityField form={form} />
          <Step3StateField form={form} />
          <Step3ZipCodeField form={form} />
          <Step3UnitField form={form} />{' '}
        </div>
      </BusinessAccountOnboardingMultiFormItem>
    </Form>
  </Card>
);
