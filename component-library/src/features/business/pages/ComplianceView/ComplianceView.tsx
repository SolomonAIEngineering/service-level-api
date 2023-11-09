import { Fragment, useState } from 'react';
import { StackedLayoutNavigationItem } from 'src/components/Layout/stacked-layout';
import { BusinessAccount } from 'src/data-contracts/user-service/data-contracts';
import { Dialog, Transition, Menu } from '@headlessui/react';
import { cn } from 'src/lib-utils/utils';
import { Chat } from 'src/components/AI/Chat';
import { OpenAIModel } from 'src/components/AskSolomonAi/ChatHandler';
import { MelodyFinancialContext } from 'src/main';
import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

export interface ComplianceViewProps {
  navigation: StackedLayoutNavigationItem[];
  subNavigation: StackedLayoutNavigationItem[];
  account: BusinessAccount;
  apiToken: string;
  model: OpenAIModel;
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
  globalContext: MelodyFinancialContext;
  enableHeader: boolean;
}

export const ComplianceView: React.FC<ComplianceViewProps> = ({
  navigation,
  subNavigation,
  account,
  apiToken,
  model,
  temperature,
  top_p,
  frequency_penalty,
  presence_penalty,
  max_tokens,
  globalContext,
  enableHeader,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex flex-1 w-full max-w-xs mr-16">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 flex justify-center w-16 pt-5 left-full">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>

                  <div className="flex flex-col px-6 pb-2 overflow-y-auto bg-black grow gap-y-5 ring-1 ring-white/10">
                    <div className="flex items-center h-16 shrink-0">
                      <img
                        className="w-auto h-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-col flex-1">
                      <ul role="list" className="flex-1 -mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={cn(
                                item.current
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                              )}
                            >
                              {item.icon ? (
                                <item.icon
                                  className="w-6 h-6 shrink-0"
                                  aria-hidden="true"
                                />
                              ) : null}

                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden h-full lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-black lg:pb-4">
          <div className="flex items-center justify-center h-16 shrink-0">
            <img
              className="w-auto h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
              alt="Your Company"
            />
          </div>
          <nav className="mt-8">
            <ul role="list" className="flex flex-col items-center space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={cn(
                      item.current
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                      'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold',
                    )}
                  >
                    {item.icon ? (
                      <item.icon
                        className="w-6 h-6 shrink-0"
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="sr-only">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={cn(enableHeader ? 'lg:pl-20' : '')}>
          {enableHeader && (
            <div className="sticky top-0 z-40 flex items-center h-16 px-4 bg-white border-b border-gray-200 shadow-sm shrink-0 gap-x-4 sm:gap-x-6 sm:px-6 lg:px-8">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="w-6 h-6" aria-hidden="true" />
              </button>

              {/* Separator */}

              <>
                <div
                  className="w-px h-6 bg-black/10 lg:hidden"
                  aria-hidden="true"
                />
                {HeaderHelperComponent(subNavigation, account)}
              </>
            </div>
          )}

          <main className="h-screen xl:pl-96">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6 h-fit">
              {/* Main area */}{' '}
              <Chat
                baseContext={{
                  contextName: 'global',
                  context: globalContext,
                }}
                sampleQuestions={[
                  'Is my company compliant with the law?',
                  'What is the best way to stay compliant?',
                  'What am l required to do to stay compliant?',
                  'What are the compliance requirements for my business?',
                ]}
                apiToken={apiToken}
                model={model}
                userName={account.companyName ?? ''}
                userAccount={account}
                temperature={temperature}
                top_p={top_p}
                frequency_penalty={frequency_penalty}
                presence_penalty={presence_penalty}
                max_tokens={max_tokens}
                agentContext="COMPLIANCE"
                className="h-full"
              />
            </div>
          </main>
        </div>

        <aside className="fixed bottom-0 hidden px-4 py-6 overflow-y-auto border-r border-gray-200 left-20 top-16 w-96 sm:px-6 lg:px-8 xl:block">
          {/* Secondary column (hidden on smaller screens) */}
        </aside>
      </div>
    </>
  );
};

function HeaderHelperComponent(
  userNavigation: StackedLayoutNavigationItem[],
  account: BusinessAccount,
) {
  return (
    <div className="flex self-stretch flex-1 gap-x-4 lg:gap-x-6">
      <form className="relative flex flex-1" action="#" method="GET">
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <MagnifyingGlassIcon
          className="absolute inset-y-0 left-0 w-5 h-full text-gray-400 pointer-events-none"
          aria-hidden="true"
        />
        <input
          id="search-field"
          className="block w-full h-full py-0 pl-8 pr-0 text-black border-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
          placeholder="Search..."
          type="search"
          name="search"
        />
      </form>
      <div className="flex items-center gap-x-4 lg:gap-x-6">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="w-6 h-6" aria-hidden="true" />
        </button>

        {/* Separator */}
        <div
          className="hidden lg:block lg:h-6 lg:w-px lg:bg-black/10"
          aria-hidden="true"
        />

        {/* Profile dropdown */}
        <Menu as="div" className="relative">
          <Menu.Button className="-m-1.5 flex items-center p-1.5">
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="hidden lg:flex lg:items-center">
              <span
                className="ml-4 text-sm font-semibold leading-6 text-black"
                aria-hidden="true"
              >
                {account.companyName ?? ''}
              </span>
              <ChevronDownIcon
                className="w-5 h-5 ml-2 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-black/5 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a
                      href={item.href}
                      className={cn(
                        active ? 'bg-gray-50' : '',
                        'block px-3 py-1 text-sm leading-6 text-black',
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
