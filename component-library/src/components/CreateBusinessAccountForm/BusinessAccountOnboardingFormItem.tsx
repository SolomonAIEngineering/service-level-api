import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { HeaderSectionSimple } from '../HeaderSections';
import { Button } from '../ui/button';
import { cn } from 'src/lib-utils/utils';

export type BusinessOnboardingMultiStepVariant = 'first' | 'middle' | 'last';

type Props = {
  variant: BusinessOnboardingMultiStepVariant;
  buttonText?: string;
  children?: ReactNode;
  setStep: Dispatch<SetStateAction<number>>;
  header?: string;
  description?: string;
  isValid?: boolean;
  className?: string;
};

export const BusinessAccountOnboardingMultiFormItem = ({
  variant,
  setStep,
  children,
  header,
  description,
  isValid = true,
  className,
}: Props) => {
  const [isLoading] = useState(false);

  return (
    <div className={cn('flex flex-col gap-y-5', className)}>
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

        {variant === 'last' && <Button type="submit"> Submit </Button>}
      </div>
    </div>
  );
};
