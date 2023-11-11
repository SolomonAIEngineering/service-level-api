import React, { useState } from 'react';
import { ChatGPTMessage, ChatLine, LoadingChatLine } from './ChatLine';
import { BrainCog } from 'lucide-react';
import { Card } from 'src/components/ui/card';

import { ScrollArea } from 'src/components/ui/scroll-area';
import { InputMessage } from './InputMessage';
import { EmbeddedContextPickerComponent } from './EmbeddedContextPicker';
import { cn } from 'src/lib-utils/utils';
import { PromptContext } from 'src/lib-utils/PromptGenerator';
import { handler } from 'src/lib-utils/Stream';
import { OpenAIModel } from 'src/components/AskSolomonAi/ChatHandler';
import {
  BusinessAccount,
  UserAccount,
} from 'src/data-contracts/user-service/data-contracts';

// default first message to display in UI (not necessary to define the prompt)
export const initialMessages: ChatGPTMessage[] = [
  {
    role: 'assistant',
    content: 'Hi! I am Solomon AI. Ask me anything related to your finances!',
  },
];

/*
  Todo: Have a base financial context class that all other contexts can inherit from 

  Maybe
*/

/*
  Context types allows any other 
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ContextTypes = {
  contextName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: any;
};

type AIAgentContext = 'COMPLIANCE' | 'FINANCIAL' | 'RISK';

export type ChatProps = {
  baseContext: ContextTypes;
  sampleQuestions: string[];
  secondaryContext?: ContextTypes[];
  className?: string;
  instrumentationCallback?: () => void;
  apiToken: string;
  model: OpenAIModel;
  userName: string;
  userAccount: UserAccount | BusinessAccount;
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
  agentContext?: AIAgentContext;
  isBusinessAccount?: boolean;
};

export const initialAnalyticMessage: ChatGPTMessage[] = [
  {
    role: 'assistant',
    content: 'Ask me anything about this data?',
  },
];

/*
  Base chat component that accepts financial context and sample questions
  should convert any to a class type that all contexts can inherit from 
*/
const Chat = ({
  baseContext,
  sampleQuestions,
  secondaryContext,
  className,
  instrumentationCallback,
  apiToken,
  model,
  userName,
  userAccount,
  temperature,
  top_p,
  frequency_penalty,
  presence_penalty,
  max_tokens,
  agentContext,
  isBusinessAccount,
}: ChatProps) => {
  const [messages, setMessages] = useState<ChatGPTMessage[]>(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [userKey] = useState(userName);
  const [currentContext, setCurrentContext] =
    useState<ContextTypes>(baseContext);
  const [toast] = useState<React.ReactElement | null>();
  const sendMessage = async (message: string) => {
    setLoading(true);
    const promptGenerator = new PromptContext(
      currentContext.context,
      userAccount,
    );

    if (instrumentationCallback) {
      instrumentationCallback();
    }

    let questionContext = '';
    if (agentContext !== undefined) {
      switch (agentContext) {
        case 'COMPLIANCE':
          questionContext = promptGenerator.getComplianceAdvice(
            message,
            userKey,
            undefined,
            isBusinessAccount,
          );
          break;
        case 'RISK':
          questionContext = promptGenerator.getRiskAssessment(
            message,
            userKey,
            undefined,
            isBusinessAccount,
          );
          break;
        case 'FINANCIAL':
          questionContext = promptGenerator.getFinancialContextBasedPrompt(
            message,
            undefined,
            isBusinessAccount,
          );
          break;
        default:
          questionContext = promptGenerator.getFinancialContextBasedPrompt(
            message,
            undefined,
            isBusinessAccount,
          );
          break;
      }
    } else {
      questionContext = promptGenerator.getFinancialContextBasedPrompt(message);
    }

    const newMessages = [
      ...messages,
      { role: 'user', content: message } as ChatGPTMessage,
    ];

    setMessages(newMessages);
    const last10messages = [
      ...newMessages.slice(-2),
      { role: 'user', content: questionContext } as ChatGPTMessage,
    ]; // remember last 2 messages

    // TODO: wrap around a try catch block
    const data = await handler({
      last10messages: last10messages,
      user: userKey,
      financialContext: baseContext.context,
      apiToken: apiToken,
      model: model,
      temperature: temperature,
      top_p: top_p,
      frequency_penalty: frequency_penalty,
      presence_penalty: presence_penalty,
      max_tokens: max_tokens,
    });
    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    let lastMessage = '';

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      lastMessage = lastMessage + chunkValue;

      setMessages([
        ...newMessages,
        { role: 'assistant', content: lastMessage } as ChatGPTMessage,
      ]);

      setLoading(false);
    }
  };

  return (
    <div className="">
      {toast}
      <div className="top-0 left-0 w-full">
        <EmbeddedContextPickerComponent
          className="flex justify-end "
          messages={initialAnalyticMessage}
          selectedContext={currentContext}
          setContextCallback={setCurrentContext}
          baseContext={baseContext}
          contextFamily={secondaryContext ?? []}
        />
      </div>
      <div className={cn('max-w-screen px-2 flex flex-col', className)}>
        {/** This is the picker that enables the user to switch between embedded context */}

        <ScrollArea className="flex flex-col w-full">
          <div className="flex flex-col">
            {messages.map(({ content, role }, index) => (
              <ChatLine key={index} role={role} content={content} />
            ))}
            {loading && <LoadingChatLine />}{' '}
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {sampleQuestions.map((question, index) => (
              <Card
                className="flex flex-row gap-1 p-2 bg-white rounded-lg shadow-md"
                key={index}
              >
                <div className="p-1">
                  <BrainCog className="w-6 h-6 text-white bg-black rounded-full" />
                </div>
                <p
                  className="text-xs md:text-sm"
                  onClick={() => setInput(question)}
                >
                  {question}
                </p>
              </Card>
            ))}
          </div>
        </ScrollArea>
        <InputMessage
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export { InputMessage, Chat };
