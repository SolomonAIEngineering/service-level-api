import clsx from 'clsx';
import Balancer from 'react-wrap-balancer';
import { ChatGPTMessage } from 'src/lib-utils/Stream';

// wrap Balancer to remove type errors :( - @TODO - fix this ugly hack
/* eslint-disable  @typescript-eslint/no-explicit-any */
const BalancerWrapper = (props: any) => <Balancer {...props} />;

// loading placeholder animation for the chat line
export const LoadingChatLine = () => (
  <div className="flex min-w-full animate-pulse px-4 py-5 sm:px-6">
    <div className="flex flex-grow space-x-3">
      <div className="min-w-0 flex-1">
        <p className="font-bold text-xxl text-gray-900">
          <a href="#" className="hover:underline">
            Solomon AI
          </a>
        </p>
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-zinc-500"></div>
            <div className="col-span-1 h-2 rounded bg-zinc-500"></div>
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
        role != 'assistant' ? 'float-right clear-both' : 'float-left clear-both'
      }
    >
      <div className="float-right mb-5 border rounded-lg bg-white px-4 py-5 shadow-sm ring-1 ring-zinc-100 dark:text-gray-600 sm:px-6">
        <div className="flex space-x-3">
          <div className="flex-1 gap-4">
            <div className="flex flex-row gap-2">
              {role === 'assistant' ? <p className="text-md">🤖</p> : ''}
              <p className="font-semibold text-md text-gray-900">
                <a href="#" className="hover:underline">
                  {role == 'assistant' ? 'Solomon AI' : 'You'}
                </a>
              </p>
            </div>

            <p
              className={clsx(
                'text-sm',
                role == 'assistant'
                  ? 'font-base'
                  : 'text-gray-400 dark:text-gray-600',
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
