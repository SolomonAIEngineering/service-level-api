import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FlyoutMenuOption } from './flyout-menu-simple';

const FlyoutMenuFullWidth: React.FC<{
  title: string;
  options: FlyoutMenuOption[];
  footerOptions: FlyoutMenuOption[];
}> = ({ title, options, footerOptions }) => {
  return (
    <Popover className="relative z-50 shadow isolate">
      <div className="py-5 bg-white">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <Popover.Button className="inline-flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1">
            {title}
            <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
          </Popover.Button>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
      >
        <Popover.Panel className="absolute inset-x-0 top-0 pt-16 bg-white shadow-lg -z-10 ring-1 ring-gray-900/5">
          <div className="grid grid-cols-1 gap-2 px-6 py-6 mx-auto max-w-7xl sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:py-10 lg:grid-cols-4 lg:gap-4 lg:px-8 xl:gap-8">
            {options.map((item) => (
              <div
                key={item.name}
                className="relative flex gap-6 p-3 -mx-3 text-sm leading-6 rounded-lg group hover:bg-gray-50 sm:flex-col sm:p-6"
              >
                <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                  {item.icon && (
                    <item.icon
                      className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  )}
                </div>
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
          <div className="p-3 bg-gray-50">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 divide-y divide-gray-900/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-x sm:border-gray-900/5">
                {footerOptions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 sm:justify-center sm:px-0"
                  >
                    {item.icon && (
                      <item.icon
                        className="flex-none w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    )}
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export { FlyoutMenuFullWidth };
