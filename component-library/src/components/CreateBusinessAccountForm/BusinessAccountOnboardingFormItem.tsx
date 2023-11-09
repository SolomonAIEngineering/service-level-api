import { UseFormReturn } from 'react-hook-form';
import {
  BusinessAccountZodSchema,
  Step1ZodSchema,
  Step2ZodSchema,
  Step3ZodSchema,
  Step4ZodSchema,
} from './zod-schema';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { HeaderSectionSimple } from '../HeaderSections';
import { Button } from '../ui/button';

type formProps =
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  | UseFormReturn<Step1ZodSchema, any, undefined>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  | UseFormReturn<Step2ZodSchema, any, undefined>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  | UseFormReturn<Step3ZodSchema, any, undefined>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  | UseFormReturn<Step4ZodSchema, any, undefined>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  | UseFormReturn<BusinessAccountZodSchema, any, undefined>;

export type BusinessOnboardingMultiStepVariant = 'first' | 'middle' | 'last';

type Props = {
  variant: BusinessOnboardingMultiStepVariant;
  buttonText?: string;
  children?: ReactNode;
  setStep: Dispatch<SetStateAction<number>>;
  form: formProps;
  header?: string;
  description?: string;
  onSubmit?: () => void;
  isValid?: boolean;
};

export const BusinessAccountOnboardingMultiFormItem = ({
  variant,
  buttonText = 'Next step',
  setStep,
  children,
  header,
  description,
  onSubmit,
  isValid = true,
}: Props) => {
  const [isLoading] = useState(false);

  return (
    <div className="flex flex-col gap-y-5">
      {header && description && (
        <HeaderSectionSimple
          title={header ?? ''}
          description={description ?? ''}
          theme={'light'}
        />
      )}

      <div>
        {isLoading ? (
          <p className="flex items-center justify-center">Sending</p>
        ) : (
          children
        )}
      </div>
      <div className="flex flex-row gap-2">
        {variant !== 'first' && (
          <Button onClick={() => setStep((prev) => prev - 1)} variant="outline">
            Go Back
          </Button>
        )}

        {(variant === 'middle' || variant === 'first') && (
          <>
            <Button
              onClick={() => setStep((prev) => prev + 1)}
              disabled={!isValid}
            >
              Next
            </Button>
          </>
        )}

        {variant === 'last' &&
          (onSubmit !== undefined ? (
            <Button
              onClick={() => {
                onSubmit();
              }}
            >
              {'Confirm' || buttonText}
            </Button>
          ) : null)}
      </div>
    </div>
  );
};
