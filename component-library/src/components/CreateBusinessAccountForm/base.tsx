import { Dispatch, SetStateAction } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { MultiStepVariant } from '../CreateSmartGoalForm/FormItem/form-item';

export interface BusinessOnboardingBaseFormProps<T extends FieldValues> {
  setStep: Dispatch<SetStateAction<number>>;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  form: UseFormReturn<T, any, undefined>;
  className?: string;
  variant: MultiStepVariant;
}

export interface BusinessOnboardingBaseFieldProps<T extends FieldValues> {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  form: UseFormReturn<T, any, undefined>;
}

export interface BusinessOnboardingContextHashMap<T> {
  [key: string]: T;
}
