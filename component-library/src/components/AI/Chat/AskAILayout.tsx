import { useState } from 'react';
import { ChatGPTMessage, ChatLine, LoadingChatLine } from './ChatLine';
import { InputMessage, initialAnalyticMessage } from './AIChat';
import { cn } from 'src/lib-utils/utils';
import { UserAccount } from 'src/data-contracts/user-service/data-contracts';
import { MelodyFinancialContext } from 'src/main';
import { PromptContext } from 'src/lib-utils/PromptGenerator';
import { handler } from 'src/lib-utils/Stream';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from 'src/components/ui/sheet';
import { Button } from 'src/components/ui/button';
import { BrainCircuit, BrainCog } from 'lucide-react';
import { ScrollArea } from 'src/components/ui/scroll-area';
import { Switch } from 'src/components/ui/switch';
import { Card, CardTitle } from 'src/components/ui/card';
import { OpenAIModel } from 'src/components/AskSolomonAi/ChatHandler';
import { Dialog, DialogContent, DialogTrigger } from 'src/components/ui/dialog';

type SolomonProps = {
  children: React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: any | undefined;
  sampleQuestions: string[];
  enableGlobalContext?: boolean;
  userId: string;
  userName: string;
  userAccount: UserAccount;
  financialContext: MelodyFinancialContext;
  instrumentationCallback?: () => void;
  apiToken: string;
  model: OpenAIModel;
  componentType: ComponentType;
};

export type ComponentType = 'SHEET' | 'DIALOG';

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
export const AskSolomonAILayout: React.FC<SolomonProps> = ({
  children,
  className,
  context,
  sampleQuestions,
  enableGlobalContext = false,
  userId,
  userName,
  userAccount,
  financialContext,
  instrumentationCallback,
  apiToken,
  model,
}) => {
  return (
    <div
      className={cn(
        'bg-white shadow-lg border-4 border-gray-50 rounded-2xl md:p-[3%]',
        className,
      )}
    >
      <div className="flex justify-end pb-1">
        <AskSolomon
          context={context}
          sampleQuestions={sampleQuestions}
          userId={userId}
          userName={userName}
          userAccount={userAccount}
          financialContext={financialContext}
          apiToken={apiToken}
          model={model}
          componentType={'SHEET'}
          children={undefined}
          instrumentationCallback={instrumentationCallback}
          enableGlobalContext={enableGlobalContext}
        />
      </div>
      {children}
    </div>
  );
};

export const AskSolomon: React.FC<SolomonProps> = ({
  className,
  context,
  sampleQuestions,
  userName,
  userAccount,
  financialContext,
  instrumentationCallback,
  apiToken,
  model,
  componentType,
}) => {
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
   * State variable for the user's key.
   */
  const [userKey] = useState(userName);
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
    // increment the question asked metrics in mixpanel
    instrumentationCallback && instrumentationCallback();

    setLoading(true);
    const questionContext: string = JSON.stringify(context).trim();
    const globalContext = JSON.stringify(financialContext).trim();
    const promptGenerator = new PromptContext(financialContext, userAccount);
    let contextDrivenQuestion: string = '';

    if (enableGlobalFinancialContext) {
      // use financial context
      contextDrivenQuestion = promptGenerator.getFinancialContextBasedPrompt(
        message,
        globalContext,
      );
    } else {
      contextDrivenQuestion = promptGenerator.getFinancialContextBasedPrompt(
        message,
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
    const data = await handler({
      last10messages: last10messages,
      user: userKey,
      financialContext: context,
      apiToken: apiToken,
      model: model,
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

  if (componentType === 'SHEET') {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="border-2 border-gray-200">
            <BrainCircuit className="w-6 h-6 p-1 font-bold text-black bg-white rounded-md" />
            <p className="font-semibold"> Ask</p>
          </Button>
        </SheetTrigger>
        <SheetContent className="p-5 border-4 border-gray-200 rounded-2xl flex flex-col justify-between md:min-w-[40%] md:p-20 overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Ask Solomon AI</SheetTitle>
            <SheetDescription>
              Your personal financial copilot with the power of a financial
              planning team
            </SheetDescription>
            <div className="grid gap-4 py-4">
              <ScrollArea className="flex flex-col w-full ">
                {messages.map(({ content, role }, index) => (
                  <ChatLine key={index} role={role} content={content} />
                ))}
                {loading && <LoadingChatLine />}{' '}
                <div>
                  {' '}
                  {initialAnalyticMessage.length < 2 && (
                    <>
                      <span className="flex flex-grow clear-both mx-auto text-gray-600 dark:text-gray-300">
                        Type a message to start the conversation
                      </span>
                      <div className="flex items-center py-3 space-x-2">
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
                </div>
              </ScrollArea>
            </div>
          </SheetHeader>

          <SheetFooter className="z-10 flex items-center justify-center w-fit">
            <div className="flex flex-col w-full">
              <div className="grid grid-cols-2 gap-2">
                {sampleQuestions.map((question, index) => (
                  <Card
                    className="flex flex-row gap-1 p-2 bg-white rounded-lg shadow-md"
                    key={index}
                  >
                    <div className="p-2 rounded-lg">
                      <BrainCog className="w-6 h-6 text-black" />
                    </div>
                    <CardTitle
                      className="py-1 text-xs"
                      onClick={() => setInput(question)}
                    >
                      {question}
                    </CardTitle>
                  </Card>
                ))}
              </div>
              <InputMessage
                input={input}
                setInput={setInput}
                sendMessage={sendMessage}
              />
              <p className="p-2 text-xs font-bold">
                Solomon AI may produce inaccurate information about people,
                places, or facts.{' '}
              </p>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  } else {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">
            <BrainCircuit className="w-6 h-6 p-1 font-bold text-black bg-white rounded-md" />
          </Button>
        </DialogTrigger>
        <DialogContent
          className={cn(
            'p-5 h-[32rem] max-w-3xl border-4 border-gray-200 rounded-2xl flex flex-col justify-between md:p-20 overflow-y-auto',
            className,
          )}
        >
          <div className="grid gap-4 py-4 h-fit ">
            <ScrollArea className="flex flex-col w-full">
              {messages.map(({ content, role }, index) => (
                <ChatLine key={index} role={role} content={content} />
              ))}
              {loading && <LoadingChatLine />}{' '}
              <div>
                {' '}
                {initialAnalyticMessage.length < 2 && (
                  <>
                    <span className="flex flex-grow clear-both mx-auto text-gray-600 dark:text-gray-300">
                      Type a message to start the conversation
                    </span>
                    <div className="flex items-center py-3 space-x-2">
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
              </div>
            </ScrollArea>
          </div>

          <div className="z-10 flex items-center justify-center w-fit">
            <div className="flex flex-col w-full">
              <div className="grid grid-cols-2 gap-2">
                {sampleQuestions.map((question, index) => (
                  <Card
                    className="flex flex-row gap-1 p-2 bg-white rounded-lg shadow-md"
                    key={index}
                  >
                    <div className="p-2 rounded-lg">
                      <BrainCog className="w-6 h-6 text-black" />
                    </div>
                    <CardTitle
                      className="py-1 text-xs"
                      onClick={() => setInput(question)}
                    >
                      {question}
                    </CardTitle>
                  </Card>
                ))}
              </div>
              <InputMessage
                input={input}
                setInput={setInput}
                sendMessage={sendMessage}
              />
              <p className="p-2 text-xs font-bold">
                Solomon AI may produce inaccurate information about people,
                places, or facts.{' '}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
};
