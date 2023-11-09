import clsx from 'clsx';
import { BrainCog, PersonStandingIcon } from 'lucide-react';
import Balancer from 'react-wrap-balancer';
import CopyToClipboard from 'src/components/CopyToClipboard/copy-to-clipboard';
import { ChatGPTAgent } from 'src/lib-utils/Stream';

// wrap Balancer to remove type errors :( - @TODO - fix this ugly hack
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BalancerWrapper = (props: any) => (
  <div>
    <Balancer {...props} />
  </div>
);

export interface ChatGPTMessage {
  role: ChatGPTAgent;
  content: string;
}

// loading placeholder animation for the chat line
export const LoadingChatLine = () => (
  <div className="flex min-w-full px-4 py-5 animate-pulse sm:px-6">
    <div className="flex flex-grow space-x-3">
      <div className="flex-1 min-w-0">
        <p className="text-gray-900 font-large text-xxl">
          <a href="#" className="hover:underline">
            Solomon AI
          </a>
        </p>
        <div className="pt-4 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 col-span-2 rounded bg-zinc-500"></div>
            <div className="h-2 col-span-1 rounded bg-zinc-500"></div>
          </div>
          <div className="h-2 rounded bg-zinc-500"></div>
        </div>
      </div>
    </div>
  </div>
);

// util helper to convert new lines to <br /> tags
const convertNewLines = (text: string) =>
  text.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));

export function ChatLine({ role = 'assistant', content }: ChatGPTMessage) {
  if (!content) {
    return null;
  }
  const formatteMessage = convertNewLines(content);

  return (
    <div
      className={
        role != 'assistant'
          ? 'flex justify-end clear-both'
          : 'flex justify-start clear-both'
      }
    >
      <div className="float-right max-w-lg px-4 py-5 mb-5 bg-white rounded-lg shadow-lg ring-1 ring-zinc-100 dark:text-gray-600 sm:px-6">
        <div className="flex space-x-3">
          <div className="flex-1 gap-4">
            <div className="flex flex-row justify-between gap-2 w-[40%]">
              <p className="text-xl text-gray-900 font-large">
                {role == 'assistant' ? (
                  <BrainCog className="inline-block w-6 h-6 m-2" />
                ) : (
                  <PersonStandingIcon className="inline-block w-6 h-6 m-2" />
                )}
                <a
                  href="#"
                  className="text-xs font-bold hover:underline md:text-sm"
                >
                  {role == 'assistant' ? 'Solomon AI' : 'You'}
                </a>
              </p>
              {role == 'assistant' ? <CopyToClipboard text={content} /> : null}
            </div>

            <p
              className={clsx(
                'text ',
                role == 'assistant'
                  ? 'font text-xs md:text-sm'
                  : 'text-xs md:text-sm text-gray-500 dark:text-gray-600 font-bold',
              )}
            >
              <BalancerWrapper>{formatteMessage}</BalancerWrapper>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
