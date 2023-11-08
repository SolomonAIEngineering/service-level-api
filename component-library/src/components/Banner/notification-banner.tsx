import { XMarkIcon } from '@heroicons/react/20/solid';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

export default function NotificationBanner({
  bgColor = 'bg-black',
  textColor = 'text-white',
  message = '',
  link = '',
  ...props
}) {
  return (
    <Card
      className={`flex items-center justify-between gap-x-6 ${bgColor} px-6 py-2.5`}
      {...props}
    >
      <p className={`text-sm leading-6 ${textColor}`}>
        <a href={link}>
          <strong className="font-semibold">{message}</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          {message}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <Button
        type="button"
        className="-m-3 flex-none p-3 focus-visible:outline-offset-[-4px] bg-black"
      >
        <span className="text-black sr-only">Dismiss</span>
        <XMarkIcon className={`h-5 w-5 ${textColor}`} aria-hidden="true" />
      </Button>
    </Card>
  );
}
