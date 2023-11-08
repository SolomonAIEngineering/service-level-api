import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { Button } from '../ui/button';
import { cn } from 'src/lib-utils/utils';
import { NavigationItem } from './header-with-stacked-flyout-menu';

export interface HeaderWithFullWidthFlyoutMenuProps {
  products: NavigationItem[];
  callsToAction: NavigationItem[];
  logoSrc: string;
  headerTitle?: string;
  dropdownTitle?: string;
  headerOptions?: NavigationItem[];
  headerActionButtonTitle?: string;
  headerActionButtonHandler?: () => void;
}

export const HeaderWithFullWidthFlyoutMenu: React.FC<
  HeaderWithFullWidthFlyoutMenuProps
> = ({
  products,
  callsToAction,
  logoSrc,
  headerTitle,
  dropdownTitle,
  headerOptions,
  headerActionButtonTitle,
  headerActionButtonHandler,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-10 bg-white isolate">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">{headerTitle}</span>
            <img className="w-auto h-8" src={logoSrc} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1">
              {dropdownTitle}
              <ChevronDownIcon
                className="flex-none w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 top-0 bg-white shadow-lg -z-10 pt-14 ring-1 ring-gray-900/5">
                <div className="grid grid-cols-4 px-6 py-10 mx-auto max-w-7xl gap-x-4 lg:px-8 xl:gap-x-8">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="relative p-6 text-sm leading-6 rounded-lg group hover:bg-gray-50"
                    >
                      <div className="flex items-center justify-center rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <a
                        href={item.href}
                        className="block mt-6 font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50">
                  <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon
                            className="flex-none w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {headerOptions &&
            headerOptions.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            onClick={headerActionButtonHandler}
            className="text-sm font-semibold leading-6 text-white"
          >
            {headerActionButtonTitle}
          </Button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">{headerTitle}</span>
              <img className="w-auto h-8" src={logoSrc} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {dropdownTitle}
                        <ChevronDownIcon
                          className={cn(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none',
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {headerOptions &&
                  headerOptions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block py-2 pl-3 pr-4 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
              </div>
              <div className="py-6">
                <Button
                  onClick={headerActionButtonHandler}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  {headerActionButtonTitle}
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
