import { BusinessOnboardingBaseFormProps } from '../base';
import { BusinessAccountZodSchema } from '../zod-schema';
import { isEmptyObject } from 'src/lib-utils/utils';
import { BusinessAccountOnboardingMultiFormItem } from '../BusinessAccountOnboardingFormItem';
import { Textarea } from 'src/components/ui/textarea';

export const BusinessAccountOnBoardingStep3Form: React.FC<
  BusinessOnboardingBaseFormProps<BusinessAccountZodSchema>
> = ({ setStep, className, variant, register, errors, getValue }) => {
  const isValid = () => {
    if (
      (isEmptyObject(errors) &&
        (getValue('address.address') === '' ||
          getValue('address.city') === '' ||
          getValue('address.state') === '' ||
          getValue('address.unit') === '' ||
          getValue('address.zipcode') === '')) ||
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
      header="Keep Your Business On Track"
      description="Tell Us Where Your Business Operates"
      isValid={isValid()}
      className={className}
    >
      <div className="flex flex-col m-auto space-y-5">
        <Textarea placeholder="Address" {...register('address.address')} />
        {errors.address?.address && (
          <span>{errors.address?.address.message}</span>
        )}
        <Textarea placeholder="City" {...register('address.city')} />
        {errors.address?.city && <span>{errors.address?.city.message}</span>}
        <Textarea placeholder="State" {...register('address.state')} />
        {errors.address?.state && <span>{errors.address?.state.message}</span>}
        <Textarea placeholder="Unit" {...register('address.unit')} />
        {errors.address?.unit && <span>{errors.address?.unit.message}</span>}
        <Textarea placeholder="Zip Code" {...register('address.zipcode')} />
        {errors.address?.zipcode && (
          <span>{errors.address?.zipcode.message}</span>
        )}
      </div>
    </BusinessAccountOnboardingMultiFormItem>
  );
};
