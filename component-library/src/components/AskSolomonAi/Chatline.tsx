import clsx from 'clsx';
import Balancer from 'react-wrap-balancer';
import { ChatGPTMessage } from 'src/lib-utils/Stream';
import { Mic, MicOff } from 'lucide-react';
import { useEffect, useState } from 'react';

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
  const [speechState, setSpeechState] = useState<
    'speaking' | 'paused' | 'stopped'
  >('stopped');
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceIndex, setSelectedVoiceIndex] = useState<number | null>(
    null,
  ); // Index of the selected voice

  useEffect(() => {
    if ('speechSynthesis' in window) {
      const availableVoices = window.speechSynthesis.getVoices();
      for (let i = 0; i < availableVoices.length; i++) {
        console.log(availableVoices[i].name, i);
      }

      setVoices(availableVoices);

      // Optionally, set a default voice. Here, we're setting the first voice as default.
      if (availableVoices.length > 0 && availableVoices[8]) {
        setSelectedVoiceIndex(8);
      }
    }
  }, []);

  const formatteMessage = convertNewLines(content);
  const msg = new SpeechSynthesisUtterance();
  msg.lang = 'en-US';
  if (selectedVoiceIndex !== null && voices[selectedVoiceIndex]) {
    msg.voice = voices[selectedVoiceIndex];
    msg.pitch = 1.4;
    msg.rate = 0.6;
    msg.volume = 0.8;
  }

  const speechHandler = (data: string) => {
    switch (speechState) {
      case 'stopped':
        msg.text = data;
        window.speechSynthesis.speak(msg);
        setSpeechState('speaking');
        break;
      case 'speaking':
        window.speechSynthesis.pause();
        setSpeechState('paused');
        break;
      case 'paused':
        window.speechSynthesis.resume();
        setSpeechState('speaking');
        break;
    }
  };

  if (!content) {
    return null;
  }

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
              {role == 'assistant' && (
                <div>
                  {speechState === 'speaking' ? (
                    <MicOff
                      className="pt-1 w-4 h-4"
                      onClick={() => speechHandler(content)}
                    />
                  ) : speechState === 'paused' ? (
                    <Mic
                      className="pt-1 w-4 h-4"
                      onClick={() => speechHandler(content)}
                    />
                  ) : (
                    <Mic
                      className="pt-1 w-4 h-4"
                      onClick={() => speechHandler(content)}
                    />
                  )}
                </div>
              )}
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
