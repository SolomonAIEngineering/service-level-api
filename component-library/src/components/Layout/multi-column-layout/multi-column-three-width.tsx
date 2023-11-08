import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from 'src/lib-utils/utils';
import { NavigationItem } from '../stacked-layout/stacked-layout-with-page-header';

export interface MultiColumnThreeWidthProps {
  navigation: NavigationItem[];
  subNavigation: NavigationItem[];
}

export const MultiColumnThreeWidth: React.FC<MultiColumnThreeWidthProps> = ({
  navigation,
  subNavigation,
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
              <div className="fixed inset-0 bg-gray-900/80" />
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
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex flex-col px-6 pb-2 overflow-y-auto bg-white grow gap-y-5">
                    <div className="flex items-center h-16 shrink-0">
                      <img
                        className="w-auto h-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-col flex-1">
                      <ul role="list" className="flex flex-col flex-1 gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={cn(
                                    item.current
                                      ? 'bg-gray-50 text-blue-600'
                                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                  )}
                                >
                                  {item.icon ? (
                                    <item.icon
                                      className={cn(
                                        item.current
                                          ? 'text-blue-600'
                                          : 'text-gray-400 group-hover:text-blue-600',
                                        'h-6 w-6 shrink-0',
                                      )}
                                      aria-hidden="true"
                                    />
                                  ) : null}

                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">
                            Your teams
                          </div>
                          <ul role="list" className="mt-2 -mx-2 space-y-1">
                            {subNavigation.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={cn(
                                    team.current
                                      ? 'bg-gray-50 text-blue-600'
                                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                  )}
                                >
                                  <span
                                    className={cn(
                                      team.current
                                        ? 'text-blue-600 border-blue-600'
                                        : 'text-gray-400 border-gray-200 group-hover:border-blue-600 group-hover:text-blue-600',
                                      'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white',
                                    )}
                                  >
                                    {team.name.slice(0, 1)}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col px-6 overflow-y-auto bg-white border-r border-gray-200 grow gap-y-5">
            <div className="flex items-center h-16 shrink-0">
              <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-col flex-1">
              <ul role="list" className="flex flex-col flex-1 gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={cn(
                            item.current
                              ? 'bg-gray-50 text-blue-600'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                          )}
                        >
                          {item.icon ? (
                            <item.icon
                              className={cn(
                                item.current
                                  ? 'text-blue-600'
                                  : 'text-gray-400 group-hover:text-blue-600',
                                'h-6 w-6 shrink-0',
                              )}
                              aria-hidden="true"
                            />
                          ) : null}

                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400">
                    Your teams
                  </div>
                  <ul role="list" className="mt-2 -mx-2 space-y-1">
                    {subNavigation.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={cn(
                            team.current
                              ? 'bg-gray-50 text-blue-600'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                          )}
                        >
                          <span
                            className={cn(
                              team.current
                                ? 'text-blue-600 border-blue-600'
                                : 'text-gray-400 border-gray-200 group-hover:border-blue-600 group-hover:text-blue-600',
                              'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white',
                            )}
                          >
                            {team.name.slice(0, 1)}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto -mx-6">
                  <a
                    href="#"
                    className="flex items-center px-6 py-3 text-sm font-semibold leading-6 text-gray-900 gap-x-4 hover:bg-gray-50"
                  >
                    <img
                      className="w-8 h-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center px-4 py-4 bg-white shadow-sm gap-x-6 sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="w-8 h-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        <main className="lg:pl-72">
          <div className="xl:pl-96">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
              {/* Main area */}
            </div>
          </div>
        </main>

        <aside className="fixed inset-y-0 hidden px-4 py-6 overflow-y-auto border-r border-gray-200 left-72 w-96 sm:px-6 lg:px-8 xl:block">
          {/* Secondary column (hidden on smaller screens) */}
        </aside>
      </div>
    </>
  );
};
