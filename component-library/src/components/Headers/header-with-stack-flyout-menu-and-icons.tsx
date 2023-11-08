import { Fragment, useState } from 'react';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface NavigationItem {
  name: string;
  description?: string;
  href: string;
  icon: React.FC<React.ComponentProps<'svg'>>;
}

interface HeaderProps {
  products: NavigationItem[];
  callsToAction: NavigationItem[];
  company: NavigationItem[];
}

const DesktopNav = ({ products, callsToAction, company }: HeaderProps) => (
  <Popover.Group className="hidden lg:flex lg:gap-x-12">
    {/* Popover for Product */}
    <Popover className="relative">
      {/* Button */}
      <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1">
        Product
        <ChevronDownIcon
          className="flex-none w-5 h-5 text-gray-400"
          aria-hidden="true"
        />
      </Popover.Button>
      {/* Panel */}
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
            {products.map((item) => (
              <div
                key={item.name}
                className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
              >
                <div className="flex items-center justify-center flex-none mt-1 rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                  <item.icon
                    className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <a
                  href={item.href}
                  className="block font-semibold text-gray-900"
                >
                  {item.name}
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 text-center divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    {/* Links for Features, Marketplace, and Company */}
    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
      Features
    </a>
    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
      Marketplace
    </a>
    {/* ... Add the rest of the links and popover for Company similar to Product */}
    <Popover className="relative">
      <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1">
        Company
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
        <Popover.Panel className="absolute z-10 p-4 mt-3 bg-white shadow-lg -left-8 top-full w-96 rounded-3xl ring-1 ring-gray-900/5">
          {company.map((item) => (
            <div
              key={item.name}
              className="relative p-4 rounded-lg hover:bg-gray-50"
            >
              <a
                href={item.href}
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
                <span className="absolute inset-0" />
              </a>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </Popover.Panel>
      </Transition>
    </Popover>
  </Popover.Group>
);

const MobileNav = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  products,
  callsToAction,
  company,
}: HeaderProps & {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (state: boolean) => void;
}) => (
  <Dialog
    as="div"
    className="lg:hidden"
    open={mobileMenuOpen}
    onClose={() => setMobileMenuOpen(false)}
  >
    <div className="fixed inset-0 z-10" />
    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex flex-col justify-between w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="w-auto h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
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
              {products.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center p-3 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg group gap-x-6 hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                    <item.icon
                      className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6 space-y-2">
              <a
                href="#"
                className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
              >
                Features
              </a>
              <a
                href="#"
                className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
              >
                Marketplace
              </a>

              {company.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            {/* ... Add the rest of the links and sections for Features, Marketplace, and Company */}
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 grid grid-cols-2 text-center divide-x divide-gray-900/5 bg-gray-50">
        {callsToAction.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
          >
            {item.name}
          </a>
        ))}
      </div>
    </Dialog.Panel>
  </Dialog>
);

export default function Header(props: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        {/* ... Logo and mobile button code */}
        <DesktopNav {...props} />
        <MobileNav
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          {...props}
        />
      </nav>
    </header>
  );
}
