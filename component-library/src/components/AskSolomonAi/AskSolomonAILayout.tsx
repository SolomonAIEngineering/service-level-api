import { BrainCircuit, BrainCog } from 'lucide-react';
import { ChangeEvent, useState, KeyboardEvent } from 'react';

import { Button } from 'src/components/ui/button';
import { Card, CardTitle } from 'src/components/ui/card';
import { ScrollArea } from 'src/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select';
import { Switch } from 'src/components/ui/switch';
import { MelodyFinancialContext } from 'src/data-contracts/financial-service/data-contracts';
import { UserAccount } from 'src/data-contracts/user-service/data-contracts';
import { ChatGPTMessage } from 'src/lib-utils/Stream';
import { cn } from 'src/lib-utils/utils';
import { ChatProcessor } from './ChatHandler';
import { ChatLine, LoadingChatLine } from './Chatline';
import { PromptContext } from 'src/lib-utils/PromptGenerator';

/**
 * The initial message that the assistant will say.
 * TODO: CONSOLIDATE THIS AND THE OTHER SOLOMON CHAT COMPONENT.
 * USE THE SOLOMON CHAT COMPONENT HERE. WE HAVE REPLICATED CODE RN
 */
const initialAnalyticMessage: ChatGPTMessage[] = [
  {
    role: 'assistant',
    content: `Hey I am Solomon AI. Ask me anything!`,
  },
];

/**
 * Props definition for the `InputMessage` component.
 */
interface InputMessageProps {
  /**
   * Current value of the input field.
   */
  input: string;

  /**
   * Function to set the value of the input field.
   *
   * @param value - The new value for the input field.
   */
  setInput: (value: string) => void;

  /**
   * Function to send a message.
   *
   * @param message - The content of the message to be sent.
   */
  sendMessage: (message: string) => void;

  /**
   * Additional CSS classes to apply to the component.
   */
  className?: string;
}

/**
 * A component that renders an input field and a submit button to send messages.
 *
 * @remarks
 * The component is designed with chat functionality in mind, allowing users
 * to type messages and send them either by pressing the "Enter" key or
 * by clicking the "Ask" button.
 *
 * @example
 * ```tsx
 * <InputMessage
 *   input={currentInputValue}
 *   setInput={setInputValueFunc}
 *   sendMessage={sendMessageFunc}
 * />
 * ```
 */
const InputMessage: React.FC<InputMessageProps> = ({
  input,
  setInput,
  sendMessage,
  className,
}) => {
  /**
   * Handles the 'Enter' key press in the input field.
   * Sends the message and clears the input when the 'Enter' key is pressed.
   *
   * @param e - Keyboard event.
   */
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      sendMessage(input);
      setInput('');
    }
  };

  /**
   * Handles changes to the input field value.
   *
   * @param e - Change event from the input field.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  /**
   * Handles the click event of the send ("Ask") button.
   * Sends the message and clears the input when the button is clicked.
   */
  const handleClick = () => {
    if (input.trim() !== '') {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className={cn('mt-6 flex clear-both', className)}>
      <input
        type="text"
        aria-label="chat input"
        required
        className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:text-gray-600 sm:text-sm"
        value={input}
        placeholder="Ask Solomon AI ..."
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <Button type="submit" className="ml-4 flex-none" onClick={handleClick}>
        Ask
      </Button>
    </div>
  );
};

/**
 * This is the main layout for the Analytic AI card.
 *
 * @param children - The child components to render within this component.
 * @param className - The CSS classes to apply to the component.
 * @param context - The context for the AI to operate in.
 *
 * @example
 * ```
 * <AskSolomonAILayout context={context}>
 *   <ChildComponent />
 * </AskSolomonAILayout>
 * ```
 */
const AskSolomonAILayout: React.FC<{
  children: React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: any;
  sampleQuestions: string[];
  userKey: string;
  financialContext: MelodyFinancialContext;
  userAccount: UserAccount;
}> = ({
  children,
  className,
  context,
  sampleQuestions,
  userKey,
  financialContext,
}) => {
  const processor = new ChatProcessor();
  const promptCtx = new PromptContext(financialContext);

  /**
   * State variable for the messages in the chat.
   */
  const [messages, setMessages] = useState<ChatGPTMessage[]>(
    initialAnalyticMessage,
  );

  /**
   * State variable for the input in the chat.
   */
  const [input, setInput] = useState('');
  /**
   * State variable to handle loading states.
   */
  const [loading, setLoading] = useState(false);

  /**
   * State variable for the global financial context setting.
   */
  const [enableGlobalFinancialContext, setEnableGlobalFinancialContext] =
    useState<boolean>(false);

  /**
   * Function to send a message to the AI.
   *
   * @param message - The message to send.
   */
  const sendMessage = async (message: string) => {
    setLoading(true);
    const questionContext: string = JSON.stringify(context).trim();
    const globalContext = JSON.stringify(financialContext).trim();
    let contextDrivenQuestion: string = '';

    if (enableGlobalFinancialContext) {
      // use financial context
      contextDrivenQuestion = promptCtx.getPrompt(
        message,
        userKey,
        globalContext,
      );
    } else {
      contextDrivenQuestion = promptCtx.getPrompt(
        message,
        userKey,
        questionContext,
      );
    }

    const newMessages = [
      ...messages,
      { role: 'user', content: message } as ChatGPTMessage,
    ];

    setMessages(newMessages);
    const last10messages = [
      ...newMessages.slice(-5),
      { role: 'user', content: contextDrivenQuestion } as ChatGPTMessage,
    ]; // remember last 2 messages

    // TODO: wrap around a try catch block
    const data = await processor.process({
      last10messages: last10messages,
      user: userKey,
      financialContext: context,
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
    <div className={cn('bg-white rounded-2xl p-3', className)}>
      <div className="flex justify-end pb-1">
        <Select>
          <SelectTrigger
            className={cn(
              'w-fit rounded-lg font-bold bg-white flex flex-row gap-2',
              className,
            )}
          >
            <BrainCircuit className="h-6 w-6 bg-white text-black font-bold rounded-md p-1" />
            <SelectValue placeholder="Ask Solomon AI" />
          </SelectTrigger>
          <SelectContent className="relative p-1 h-[400px] min-w-[300px] max-w-[350px] md:min-w-[500px] md:max-w-md lg:h-[400px] rounded-2xl bg-white border-4 border-gray-300 shadow-md overflow-auto">
            <SelectGroup className="p-2">
              <ScrollArea>
                {messages.map(({ content, role }, index) => (
                  <ChatLine key={index} role={role} content={content} />
                ))}
                {loading && <LoadingChatLine />}{' '}
                <SelectLabel>
                  {' '}
                  {initialAnalyticMessage.length < 2 && (
                    <>
                      <span className="mx-auto flex flex-grow text-gray-600 dark:text-gray-300 clear-both">
                        Type a message to start the conversation
                      </span>
                      <div className="flex items-center space-x-2 py-3">
                        <Switch
                          id="terms"
                          className="rounded-full"
                          onClick={() => {
                            setEnableGlobalFinancialContext(
                              !enableGlobalFinancialContext,
                            );
                          }}
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Enable Financial Global Context
                        </label>
                      </div>
                    </>
                  )}
                </SelectLabel>
                <div className="grid grid-cols-2 gap-2">
                  {sampleQuestions.map((question, index) => (
                    <Card
                      className="p-2 rounded-lg shadow-md bg-white flex flex-row gap-1"
                      key={index}
                    >
                      <div className="p-1 rounded-l">
                        <BrainCog className="h-6 w-6 bg-white text-black" />
                      </div>
                      <CardTitle
                        className="text-xs"
                        onClick={() => setInput(question)}
                      >
                        {question}
                      </CardTitle>
                    </Card>
                  ))}
                </div>
              </ScrollArea>

              <InputMessage
                input={input}
                setInput={setInput}
                sendMessage={sendMessage}
              />
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {children}
    </div>
  );
};

export { AskSolomonAILayout };
