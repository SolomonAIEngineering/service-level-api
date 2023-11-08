import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { Card } from 'src/components/ui/card';
import { cn } from 'src/lib-utils/utils';
import { NavigationItem } from '../stacked-layout/stacked-layout-with-page-header';

export interface SidebarSimpleProps {
  navigation: NavigationItem[];
  subNavigation: NavigationItem[];
  userNavigation: NavigationItem[];
  children: React.ReactNode;
}

export const SidebarSimple: React.FC<SidebarSimpleProps> = ({
  navigation,
  subNavigation,
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
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
                  <div className="flex flex-col px-6 pb-2 overflow-y-auto bg-black grow gap-y-5">
                    <div className="flex items-center h-16 shrink-0">
                      {/* <img
                        className="w-auto h-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=white"
                        alt="Your Company"
                      /> */}
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
                                      ? 'bg-black text-white'
                                      : 'text-blue-200 hover:text-white hover:bg-black',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                  )}
                                >
                                  {item.icon ? (
                                    <item.icon
                                      className={cn(
                                        item.current
                                          ? 'text-white'
                                          : 'text-blue-200 group-hover:text-white',
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
                          {subNavigation && subNavigation.length > 0 ? (
                            <>
                              <div className="text-xs font-semibold leading-6 text-blue-200">
                                Your teams
                              </div>
                              <ul role="list" className="mt-2 -mx-2 space-y-1">
                                {subNavigation.map((team) => (
                                  <li key={team.name}>
                                    <a
                                      href={team.href}
                                      className={cn(
                                        team.current
                                          ? 'bg-black text-white'
                                          : 'text-blue-200 hover:text-white hover:bg-black',
                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                      )}
                                    >
                                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-400 bg-blue-500 text-[0.625rem] font-medium text-white">
                                        {team.name.slice(0, 2)}
                                      </span>
                                      <span className="truncate">
                                        {team.name}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : null}
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
        <Card className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col px-6 overflow-y-auto bg-black grow gap-y-5">
            <div className="flex items-center h-16 shrink-0">
              {/* <img
                className="w-auto h-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt="Your Company"
              /> */}
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
                              ? 'bg-black text-white'
                              : 'text-blue-200 hover:text-white hover:bg-black',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                          )}
                        >
                          {item.icon ? (
                            <item.icon
                              className={cn(
                                item.current
                                  ? 'text-white'
                                  : 'text-blue-200 group-hover:text-white',
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
                  {subNavigation && subNavigation.length > 0 ? (
                    <>
                      <div className="text-xs font-semibold leading-6 text-blue-200">
                        Your teams
                      </div>
                      <ul role="list" className="mt-2 -mx-2 space-y-1">
                        {subNavigation.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={cn(
                                team.current
                                  ? 'bg-black text-white'
                                  : 'text-blue-200 hover:text-white hover:bg-black',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                              )}
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-400 bg-blue-500 text-[0.625rem] font-medium text-white">
                                {team.name.slice(0, 2)}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </li>
                {/* <li className="mt-auto -mx-6">
                  <a
                    href="#"
                    className="flex items-center px-6 py-3 text-sm font-semibold leading-6 text-white gap-x-4 hover:bg-black"
                  >
                    <img
                      className="w-8 h-8 bg-black rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
        </Card>

        <div className="sticky top-0 z-40 flex items-center px-4 py-4 bg-blue-600 shadow-sm gap-x-6 sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-blue-200 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            Dashboard
          </div>
          {/* <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="w-8 h-8 bg-black rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a> */}
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
};
