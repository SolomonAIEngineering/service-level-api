import { Dispatch, SetStateAction } from 'react';
import {
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormReturn,
  UseFormSetValue,
} from 'react-hook-form';
import { MultiStepVariant } from '../CreateSmartGoalForm/FormItem/form-item';

export interface BusinessOnboardingBaseFormProps<T extends FieldValues> {
  setStep: Dispatch<SetStateAction<number>>;
  setValue: UseFormSetValue<T>;
  getValue: UseFormGetValues<T>;
  className?: string;
  variant: MultiStepVariant;
  register: UseFormRegister<T>;
  errors: UseFormReturn<T>['formState']['errors'];
}

export interface BusinessOnboardingBaseFieldProps<T extends FieldValues> {
  setValue: UseFormSetValue<T>;
  register: UseFormRegister<T>;
}

export interface BusinessOnboardingContextHashMap<T> {
  [key: string]: T;
}
