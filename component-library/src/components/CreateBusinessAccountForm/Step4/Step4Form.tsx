import { BusinessOnboardingBaseFormProps } from '../base';
import { BusinessAccountZodSchema } from '../zod-schema';
import { isEmptyObject } from 'src/lib-utils/utils';
import { BusinessAccountOnboardingMultiFormItem } from '../BusinessAccountOnboardingFormItem';
import { Step4ProfileImageField } from './Step4Field';
import { Textarea } from 'src/components/ui/textarea';
import { Input } from 'src/components/ui/input';

export const BusinessAccountOnBoardingStep4Form: React.FC<
  BusinessOnboardingBaseFormProps<BusinessAccountZodSchema>
> = ({ setValue, setStep, className, variant, register, errors, getValue }) => {
  const isValid = () => {
    if (
      (isEmptyObject(errors) &&
        (getValue('username') === '' ||
          getValue('email') === '' ||
          getValue('confirmPassword') === '' ||
          getValue('password') === '' ||
          getValue('profileImageUrl') === '')) ||
      !isEmptyObject(errors)
    ) {
      return false;
    }
    return true;
  };

  return (
    <BusinessAccountOnboardingMultiFormItem
      variant={variant}
      setStep={setStep}
      header="Secure Your Account"
      description="Provide Credentials To Secure Your Account"
      isValid={isValid()}
      className={className}
    >
      <div className="flex flex-col m-auto space-y-5">
        <Textarea placeholder="Username" {...register('username')} />
        {errors.username && <span>{errors.username.message}</span>}
        <Textarea placeholder="email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
        <Input
          placeholder="Password"
          {...register('password')}
          type="password"
        />
        {errors.password && <span>{errors.password.message}</span>}
        <Input
          placeholder="Confirm Password"
          {...register('confirmPassword')}
          type="password"
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
        <Step4ProfileImageField setValue={setValue} register={register} />{' '}
        {errors.profileImageUrl && (
          <span>{errors.profileImageUrl.message}</span>
        )}
      </div>
    </BusinessAccountOnboardingMultiFormItem>
  );
};

