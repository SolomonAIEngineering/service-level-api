import { Dispatch, SetStateAction } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { MultiStepVariant } from './FormItem/form-item';
import { UserAccountClass } from 'src/types/user/user-account';
import { MelodyFinancialContext } from 'src/data-contracts/financial-service/data-contracts';
import { OpenAIModel } from '../AskSolomonAi/ChatHandler';

export interface BaseFormProps<T extends FieldValues> {
  setStep: Dispatch<SetStateAction<number>>;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  form: UseFormReturn<T, any, undefined>;
  className?: string;
  variant: MultiStepVariant;
  userAccount: UserAccountClass;
  globalContext: MelodyFinancialContext;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  specificContext: ContextHashMap<string> | any;
  userId: string;
  userName: string;
  instrumentationCallback?: () => void;
  apiToken: string;
  model: OpenAIModel;
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
}

export interface BaseFieldProps<T extends FieldValues> {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  form: UseFormReturn<T, any, undefined>;
  userAccount: UserAccountClass;
  globalContext: MelodyFinancialContext;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  specificContext: ContextHashMap<string> | any;
  enableGlobalContext?: boolean;
  userId: string;
  userName: string;
  financialContext: MelodyFinancialContext;
  instrumentationCallback?: () => void;
  apiToken: string;
  model: OpenAIModel;
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
}

export interface ContextHashMap<T> {
  [key: string]: T;
}
