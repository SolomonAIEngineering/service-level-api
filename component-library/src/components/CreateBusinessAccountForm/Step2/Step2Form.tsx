import { BusinessOnboardingBaseFormProps } from '../base';
import { BusinessAccountZodSchema } from '../zod-schema';
import { isEmptyObject } from 'src/lib-utils/utils';
import { BusinessAccountOnboardingMultiFormItem } from '../BusinessAccountOnboardingFormItem';
import { Textarea } from 'src/components/ui/textarea';

export const BusinessAccountOnBoardingStep2Form: React.FC<
  BusinessOnboardingBaseFormProps<BusinessAccountZodSchema>
> = ({ setStep, className, variant, register, getValue, errors }) => {
  const isValid = () => {
    if (
      (isEmptyObject(errors) &&
        (getValue('phoneNumber') === '' ||
          getValue('companyName') === '' ||
          getValue('companyDescription') === '' ||
          getValue('companyWebsite') === '' ||
          getValue('companyEstablished') === '')) ||
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
      header="Your Business Matters"
      description="Give Us Some More Information About Your Business"
      isValid={isValid()}
      className={className}
    >
      <div className="flex flex-col m-auto space-y-5">
        <Textarea placeholder="Phone Number" {...register('phoneNumber')} />
        {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
        <Textarea placeholder="Company Name" {...register('companyName')} />
        {errors.companyName && <span>{errors.companyName.message}</span>}

        <Textarea
          placeholder="Company Description"
          {...register('companyDescription')}
        />
        {errors.companyDescription && (
          <span>{errors.companyDescription.message}</span>
        )}

        <Textarea
          placeholder="Company Website"
          {...register('companyWebsite')}
        />
        {errors.companyWebsite && <span>{errors.companyWebsite.message}</span>}

        <Textarea placeholder="Industry" {...register('industry')} />
        {errors.industry && <span>{errors.industry.message}</span>}

        <Textarea
          placeholder="Company Established Date"
          {...register('companyEstablished')}
        />
        {errors.companyEstablished && (
          <span>{errors.companyEstablished.message}</span>
        )}
      </div>
    </BusinessAccountOnboardingMultiFormItem>
  );
};