import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { Button } from 'src/components/ui/button';
import {
  BudgetZodSchema,
  CategoryZodSchema,
  ForecastZodSchema,
  MilestoneZodSchema,
  SmartGoalZodSchema,
} from '../zod-schema';
import { UseFormReturn } from 'react-hook-form';
import { HeaderSectionSimple } from 'src/components/HeaderSections/header-section-simple';

type formProps =
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  | UseFormReturn<SmartGoalZodSchema, any, undefined>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  | UseFormReturn<ForecastZodSchema, any, undefined>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  | UseFormReturn<MilestoneZodSchema, any, undefined>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  | UseFormReturn<BudgetZodSchema, any, undefined>
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  | UseFormReturn<CategoryZodSchema, any, undefined>;

export type MultiStepVariant = 'first' | 'middle' | 'last';

type Props = {
  variant: MultiStepVariant;
  buttonText?: string;
  children?: ReactNode;
  setStep: Dispatch<SetStateAction<number>>;
  form: formProps;
  header?: string;
  description?: string;
  onSubmit?: () => void;
  isValid?: boolean;
};

export const MultiFormItem = ({
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
