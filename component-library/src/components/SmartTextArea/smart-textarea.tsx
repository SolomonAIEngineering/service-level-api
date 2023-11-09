import React from 'react';
import { MelodyFinancialContext } from 'src/data-contracts/financial-service/data-contracts';

import { cn } from 'src/lib-utils/utils';
import { AskSolomon } from '../AI/Chat/AskAILayout';
import { UserAccount } from 'src/data-contracts/user-service/data-contracts';
import { OpenAIModel } from '../AskSolomonAi/ChatHandler';

export interface SmartTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  context: any;
  globalFinancialContext: MelodyFinancialContext;
  sampleQuestions: string[];
  enableGlobalContext?: boolean;
  userId: string;
  userName: string;
  userAccount: UserAccount;
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

const SmartTextarea = React.forwardRef<HTMLTextAreaElement, SmartTextareaProps>(
  (
    {
      context,
      sampleQuestions,
      globalFinancialContext,
      userAccount,
      className,
      userId,
      apiToken,
      model,
      temperature,
      top_p,
      frequency_penalty,
      presence_penalty,
      max_tokens,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          'bg-white shadow-md border-4 border-gray-50 rounded-2xl flex flex-row',
          className,
        )}
      >
        <textarea
          className={cn(
            'p-[1%] flex border-0 min-h-[60px] w-full rounded-md bg-transparent text-sm shadow-none',
            className,
          )}
          ref={ref}
          {...props}
        />
        <div className="flex justify-end p-1">
          <AskSolomon
            context={context}
            sampleQuestions={sampleQuestions}
            userName={userAccount.username ?? ''}
            financialContext={globalFinancialContext}
            userAccount={userAccount}
            userId={userId}
            apiToken={apiToken}
            model={model}
            componentType={'SHEET'}
            temperature={temperature}
            top_p={top_p}
            frequency_penalty={frequency_penalty}
            presence_penalty={presence_penalty}
            max_tokens={max_tokens}
          >
            <div />
          </AskSolomon>
        </div>
      </div>
    );
  },
);
SmartTextarea.displayName = 'SmartTextarea';

export { SmartTextarea };
