import React from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

export interface SimpleCallToActionProps {
  title: string;
  description?: string;
  backgroundColor?: 'white' | 'gray-900' | 'indigo-700';
  showGradient?: boolean;
  centered?: boolean;
  button1Title?: string;
  button1Handler?: () => void;
  button2Title?: string;
  button2Handlder?: () => void;
}

const SimpleCallToAction: React.FC<SimpleCallToActionProps> = ({
  title,
  description,
  backgroundColor = 'white',
  showGradient = false,
  centered = false,
  button1Title = 'Get Started',
  button1Handler = () => {},
  button2Title = 'Learn more',
  button2Handlder = () => {},
}: SimpleCallToActionProps) => {
  const bgColorClass = {
    white: 'bg-white',
    'gray-900': 'bg-gray-900',
    'indigo-700': 'bg-indigo-700',
  }[backgroundColor];

  const textColor =
    backgroundColor === 'white' ? 'text-gray-900' : 'text-white';
  const descriptionColor =
    backgroundColor === 'indigo-700'
      ? 'text-indigo-200'
      : backgroundColor === 'gray-900'
      ? 'text-gray-300'
      : 'text-gray-600';
  const buttonBackground =
    backgroundColor !== 'white' ? 'bg-white' : 'bg-indigo-600';
  const buttonText =
    backgroundColor !== 'white' ? 'text-gray-900' : 'text-white font-bold';

  return (
    <Card
      className={`${bgColorClass} ${
        showGradient ? 'relative isolate overflow-hidden' : ''
      }`}
    >
      {showGradient && (
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#gradient)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="gradient">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      )}
      <div
        className={`mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 ${
          centered && 'text-center'
        }`}
      >
        <h2
          className={`text-3xl font-bold tracking-tight ${textColor} sm:text-4xl`}
        >
          {title}
        </h2>
        {description && (
          <p className={`mt-6 text-lg leading-8 ${descriptionColor}`}>
            {description}
          </p>
        )}
        <div className="flex items-center mt-10 gap-x-6">
          <Button
            onClick={button1Handler}
            className={`rounded-md px-3.5 py-2.5 text-sm font-semibold ${buttonText} shadow-sm hover:${
              buttonBackground === 'bg-white'
                ? backgroundColor === 'indigo-700'
                  ? 'bg-indigo-50'
                  : 'bg-gray-100'
                : 'bg-indigo-500'
            }`}
            style={{ backgroundColor: buttonBackground }}
          >
            {button1Title}
          </Button>
          <Button
            onClick={button2Handlder}
            className={`rounded-md gap-1 px-3.5 py-2.5 text-sm font-semibold ${buttonText} shadow-sm hover:${
              buttonBackground === 'bg-white'
                ? backgroundColor === 'indigo-700'
                  ? 'bg-indigo-50'
                  : 'bg-gray-100'
                : 'bg-indigo-500'
            }`}
            style={{ backgroundColor: buttonBackground }}
          >
            {button2Title} <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export { SimpleCallToAction };
