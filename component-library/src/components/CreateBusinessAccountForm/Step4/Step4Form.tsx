import { BusinessOnboardingBaseFormProps } from '../base';
import { Step4ZodSchema } from '../zod-schema';
import { cn } from 'src/lib-utils/utils';
import { Card } from 'src/components/ui/card';
import { Form } from 'src/components/ui/form';
import { BusinessAccountOnboardingMultiFormItem } from '../BusinessAccountOnboardingFormItem';
import {
  Step4UsernameField,
  Step4EmailField,
  Step4PasswordField,
  Step4ConfirmPasswordField,
  Step4ProfileImageField,
} from './Step4Field';

export const BusinessAccountOnBoardingStep4Form: React.FC<
  BusinessOnboardingBaseFormProps<Step4ZodSchema>
> = ({ form, setStep, className, variant }) => (
  <Card className={cn('w-fit p-[3%]', className)}>
    <Form {...form}>
      <BusinessAccountOnboardingMultiFormItem
        form={form}
        variant={variant}
        setStep={setStep}
        header="Secure Your Account"
        description="Provide Credentials To Secure Your Account"
        isValid={form.formState.isValid}
      >
        <div className="flex flex-col m-auto space-y-5">
          <Step4UsernameField form={form} />
          <Step4EmailField form={form} />
          <Step4PasswordField form={form} />
          <Step4ConfirmPasswordField form={form} />{' '}
          <Step4ProfileImageField form={form} />{' '}
        </div>
      </BusinessAccountOnboardingMultiFormItem>
    </Form>
  </Card>
);
