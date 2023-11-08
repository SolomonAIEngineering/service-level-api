/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { FolderIcon } from '@heroicons/react/24/outline';
import { Badge } from '../ui/badge';
import { Transaction } from 'src/data-contracts/financial-service/data-contracts';
import { cn } from 'src/lib-utils/utils';

export type CommandPalleteQuickAction = {
  name: string;
  shortcut: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  callback: () => void;
};

export const CommandPalleteWithIcons: React.FC<{
  transactions: Transaction[];
  quickActions: CommandPalleteQuickAction[];
}> = ({ transactions, quickActions }) => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(true);

  const filteredTransactions =
    query === ''
      ? transactions.length > 5
        ? transactions.slice(0, 5)
        : transactions
      : transactions.filter((txn) => {
          return (
            txn.merchantName &&
            txn.merchantName.toLowerCase().includes(query.toLowerCase())
          );
        });

  const recent =
    transactions.length > 5 ? transactions.slice(0, 5) : transactions;

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery('')}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen p-4 overflow-y-auto sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="max-w-2xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
              <Combobox>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="w-full h-12 pr-4 text-gray-900 bg-transparent border-0 pl-11 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {(query === '' || filteredTransactions.length > 0) && (
                  <Combobox.Options
                    static
                    className="overflow-y-auto divide-y divide-gray-100 max-h-80 scroll-py-2"
                  >
                    <li className="p-2">
                      {query === '' && (
                        <h2 className="px-3 mt-4 mb-2 text-xs font-semibold text-gray-500">
                          Recent searches
                        </h2>
                      )}
                      <ul className="text-sm text-gray-700">
                        {(query === '' ? recent : filteredTransactions).map(
                          (txn) => (
                            <Combobox.Option
                              key={txn.id}
                              value={txn}
                              className={({ active }) =>
                                cn(
                                  'flex cursor-default select-none items-center rounded-md px-3 py-2',
                                  active && 'bg-indigo-600 text-white',
                                )
                              }
                            >
                              {({ active }) => (
                                <>
                                  <div className="flex flex-1 gap-2">
                                    <FolderIcon
                                      className={cn(
                                        'h-6 w-6 flex-none',
                                        active ? 'text-white' : 'text-gray-400',
                                      )}
                                      aria-hidden="true"
                                    />
                                    <span className="flex-auto ml-3 truncate">
                                      {txn.merchantName!}
                                    </span>
                                    <div>
                                      {txn.categories &&
                                        txn.categories
                                          .slice(0, 1)
                                          .map((category) => (
                                            <Badge className="text-black bg-white">
                                              {category.toLowerCase()}
                                            </Badge>
                                          ))}
                                    </div>
                                    <span>${txn.amount}</span>
                                    <span>{txn.authorizedDate}</span>
                                    {active && (
                                      <span className="flex-none ml-3 text-indigo-100">
                                        Jump to...
                                      </span>
                                    )}
                                  </div>
                                </>
                              )}
                            </Combobox.Option>
                          ),
                        )}
                      </ul>
                    </li>
                    {query === '' && (
                      <li className="p-2">
                        <h2 className="sr-only">Quick actions</h2>
                        <ul className="text-sm text-gray-700">
                          {quickActions.map((action) => (
                            <Combobox.Option
                              key={action.shortcut}
                              value={action}
                              className={({ active }) =>
                                cn(
                                  'flex cursor-default select-none items-center rounded-md px-3 py-2',
                                  active && 'bg-indigo-600 text-white',
                                )
                              }
                              onClick={action.callback}
                            >
                              {({ active }) => (
                                <>
                                  <action.icon
                                    className={cn(
                                      'h-6 w-6 flex-none',
                                      active ? 'text-white' : 'text-gray-400',
                                    )}
                                    aria-hidden="true"
                                  />
                                  <span className="flex-auto ml-3 truncate">
                                    {action.name}
                                  </span>
                                  <span
                                    className={cn(
                                      'ml-3 flex-none text-xs font-semibold',
                                      active
                                        ? 'text-indigo-100'
                                        : 'text-gray-400',
                                    )}
                                  >
                                    <kbd className="font-sans">⌘</kbd>
                                    <kbd className="font-sans">
                                      {action.shortcut}
                                    </kbd>
                                  </span>
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                  </Combobox.Options>
                )}

                {query !== '' && filteredTransactions.length === 0 && (
                  <div className="px-6 text-center py-14 sm:px-14">
                    <FolderIcon
                      className="w-6 h-6 mx-auto text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 text-sm text-gray-900">
                      We couldn't find any txns with that term. Please try
                      again.
                    </p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
