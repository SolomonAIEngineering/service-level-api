import { BusinessOnboardingBaseFormProps } from '../base';
import { BusinessAccountZodSchema } from '../zod-schema';
import { BusinessAccountOnboardingMultiFormItem } from '../BusinessAccountOnboardingFormItem';
import { Textarea } from 'src/components/ui/textarea';
import { isEmptyObject } from '../../../lib-utils/utils';

export const BusinessAccountOnBoardingStep1Form: React.FC<
  BusinessOnboardingBaseFormProps<BusinessAccountZodSchema>
> = ({ setStep, className, variant, register, errors, getValue }) => {
  const isValid = () => {
    if (
      (isEmptyObject(errors) && getValue('bio') === '') ||
      getValue('headline') === '' ||
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
      header="Welcome To Solomon AI"
      description="Give A Brief Description Of Your Business"
      isValid={isValid()}
      className={className}
    >
      <div className="flex flex-col m-auto space-y-5">
        <Textarea placeholder="Bio" {...register('bio')} />{' '}
        {errors.bio && <span>{errors.bio.message}</span>}
        <Textarea placeholder="headline" {...register('headline')} />{' '}
        {errors.headline && <span>{errors.headline.message}</span>}
      </div>
    </BusinessAccountOnboardingMultiFormItem>
  );
};
