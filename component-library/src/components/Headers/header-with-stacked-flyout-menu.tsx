import React, { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Button } from '../ui/button';
import { cn } from 'src/lib-utils/utils';

export type NavigationItem = {
  name: string;
  description?: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  current: boolean | undefined;
};

export interface HeaderWithStackedFlyoutMenuProps {
  products: NavigationItem[];
  callsToAction: NavigationItem[];
  logoSrc: string;
  headerTitle?: string;
  dropdownTitle?: string;
  headerOptions?: NavigationItem[];
  headerActionButtonTitle?: string;
  headerActionButtonHandler?: () => void;
}

const HeaderWithStackedFlyoutMenu: React.FC<
  HeaderWithStackedFlyoutMenuProps
> = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img
              className="w-auto h-8"
              src={props.logoSrc}
              alt={props.headerTitle || 'Your Company'}
            />
          </a>
        </div>
        {/* Desktop Navigation */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <DropDown
            items={props.products}
            dropdownTitle={props.dropdownTitle ?? ''}
          />
          {/* Other Header Options */}
          {props.headerOptions &&
            props.headerOptions.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
        </Popover.Group>
        {/* Header Action Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            onClick={props.headerActionButtonHandler}
            className="text-sm font-semibold leading-6 text-white"
          >
            {props.headerActionButtonTitle}
          </Button>
        </div>
        {/* Mobile Navigation */}
        <MobileNavigation
          {...props}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </nav>
    </header>
  );
};

interface DropDownProps {
  items: NavigationItem[];
  dropdownTitle: string;
}

const DropDown: React.FC<DropDownProps> = ({ items, dropdownTitle }) => {
  return (
    <Popover className="relative">
      {/* Your JSX code related to the product dropdown */}
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
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -left-8 top-full rounded-3xl ring-1 ring-gray-900/5">
          <div className="p-4">
            {items.map((item) => (
              <div
                key={item.name}
                className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
              >
                <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                  <item.icon
                    className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-auto">
                  <a
                    href={item.href}
                    className="block font-semibold text-gray-900"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
      {/* Rest of the JSX for dropdown */}
    </Popover>
  );
};

interface MobileNavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  products: NavigationItem[];
  callsToAction: NavigationItem[];
  logoSrc: string;
  headerTitle?: string;
  headerOptions?: NavigationItem[];
  headerActionButtonTitle?: string;
  headerActionButtonHandler?: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = (props) => {
  // Extract props for clarity
  const {
    mobileMenuOpen,
    setMobileMenuOpen,
    products,
    callsToAction,
    logoSrc,
    headerTitle,
    headerOptions,
  } = props;

  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">{headerTitle}</span>
            <img className="w-auto h-8" src={logoSrc} alt={headerTitle} />
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
            {/* Your Products and Other Navigation Links Here */}
            {/* Other JSX for mobile nav */}
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Product
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
                    onClick={props.headerActionButtonHandler}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                  >
                    {props.headerActionButtonTitle}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default HeaderWithStackedFlyoutMenu;
