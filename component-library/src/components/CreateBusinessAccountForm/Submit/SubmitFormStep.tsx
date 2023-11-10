import { Dispatch, SetStateAction } from 'react';
import {
  BusinessAccountOnboardingMultiFormItem,
  BusinessOnboardingMultiStepVariant,
} from '../BusinessAccountOnboardingFormItem';

export interface SubmitFormProps {
  setStep: Dispatch<SetStateAction<number>>;
  className?: string;
  variant: BusinessOnboardingMultiStepVariant;
}

export const SubmitBusinessAccountOnboardingForm: React.FC<SubmitFormProps> = ({
  setStep,
  className,
  variant,
}) => {
  return (
    <BusinessAccountOnboardingMultiFormItem
      variant={variant}
      setStep={setStep}
      header="Excited to see you are at the final step"
      description="Create your account and get started on a better financial future"
      className={className}
    />
  );
};
