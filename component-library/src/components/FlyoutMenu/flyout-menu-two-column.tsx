import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FlyoutMenuOption } from './flyout-menu-simple';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';

export type FlyoutMenuFooterOption = {
  title: string;
  tagline: string;
  subtext: string;
};

export const FlyoutMenuTwoColumn: React.FC<{
  title: string;
  options: FlyoutMenuOption[];
  footerOption?: FlyoutMenuFooterOption;
}> = ({ title, options, footerOption }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="inline-flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1"
        >
          {title}
          <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="absolute z-10 flex w-screen px-4 mt-5 -translate-x-1/2 left-1/2 max-w-min">
        <div className="flex-auto w-screen max-w-md overflow-hidden text-sm leading-6 bg-white shadow-lg rounded-3xl ring-1 ring-gray-900/5 lg:max-w-3xl">
          <div className="grid grid-cols-1 p-4 gap-x-6 gap-y-1 lg:grid-cols-2">
            {options.map((item) => (
              <div
                key={item.name}
                className="relative flex p-4 rounded-lg group gap-x-6 hover:bg-gray-50"
              >
                {item.icon && (
                  <div className="flex items-center justify-center flex-none mt-1 rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                )}

                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          {footerOption && (
            <div className="px-8 py-6 bg-gray-50">
              <div className="flex items-center gap-x-3">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  {footerOption.title}
                </h3>
                <p className="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600">
                  {footerOption.tagline}
                </p>
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {footerOption.subtext}
              </p>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
