import { Fragment, useState } from 'react';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import {
  BriefcaseIcon,
  ExclamationTriangleIcon,
  FolderIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline';

import { Badge } from '../ui/badge';
import { cn } from 'src/lib-utils/utils';
import { Transaction } from 'src/data-contracts/financial-service/data-contracts';

export type AccountMetadata = {
  name: string;
  accountPlaidId: string;
};

export const CommandPalleteWithFooter: React.FC<{
  transactions: Transaction[];
  accounts: AccountMetadata[];
}> = ({ transactions, accounts }) => {
  const [open, setOpen] = useState(true);
  const [rawQuery, setRawQuery] = useState('');
  const query = rawQuery.toLowerCase().replace(/^[#>]/, '');

  const filteredTransactions =
    rawQuery === '#'
      ? transactions
      : query === '' || rawQuery.startsWith('>')
      ? []
      : transactions.filter(
          (txn) =>
            txn.merchantName && txn.merchantName.toLowerCase().includes(query),
        );

  const filteredAccounts =
    rawQuery === '>'
      ? accounts
      : query === '' || rawQuery.startsWith('#')
      ? []
      : accounts.filter((acct) => acct.name.toLowerCase().includes(query));

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setRawQuery('')}
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
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-80" />
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
            <Dialog.Panel className="max-w-3xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
              <Combobox>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="w-full h-12 pr-4 text-gray-900 bg-transparent border-0 pl-11 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setRawQuery(event.target.value)}
                  />
                </div>

                {(filteredTransactions.length > 0 ||
                  filteredAccounts.length > 0) && (
                  <Combobox.Options
                    static
                    className="p-4 pb-2 space-y-4 overflow-y-auto max-h-80 transform-gpu scroll-py-10 scroll-pb-2"
                  >
                    {filteredTransactions.length > 0 && (
                      <li>
                        <h2 className="text-xs font-semibold text-gray-900">
                          Transactions
                        </h2>
                        <ul className="mt-2 -mx-4 text-sm text-gray-700">
                          {filteredTransactions.map((txn) => (
                            <Combobox.Option
                              key={txn.id}
                              value={txn}
                              className={({ active }) =>
                                cn(
                                  'flex cursor-default select-none items-center px-4 py-2',
                                  active && 'bg-black text-white',
                                )
                              }
                            >
                              {({ active }) => (
                                <div className="flex flex-1 gap-2">
                                  <FolderIcon
                                    className={cn(
                                      'h-6 w-6 flex-none',
                                      active ? 'text-white' : 'text-black',
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
                                          <Badge
                                            className="text-black bg-white"
                                            key={category}
                                          >
                                            {category.toLowerCase()}
                                          </Badge>
                                        ))}
                                  </div>
                                  <span>${txn.amount}</span>
                                  <span>{txn.authorizedDate}</span>
                                </div>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                    {filteredAccounts.length > 0 && (
                      <li>
                        <h2 className="text-xs font-semibold text-gray-900">
                          Accounts
                        </h2>
                        <ul className="mt-2 -mx-4 text-sm text-gray-700">
                          {filteredAccounts.map((acct) => (
                            <Combobox.Option
                              key={acct.accountPlaidId}
                              value={acct}
                              className={({ active }) =>
                                cn(
                                  'flex cursor-default select-none items-center px-4 py-2',
                                  active && 'bg-black text-white',
                                )
                              }
                            >
                              <BriefcaseIcon className="w-6 h-6 rounded-md" />
                              <span className="flex-auto ml-3 truncate">
                                {acct.name}
                              </span>
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                  </Combobox.Options>
                )}

                {rawQuery === '?' && (
                  <div className="px-6 text-sm text-center py-14 sm:px-14">
                    <LifebuoyIcon
                      className="w-6 h-6 mx-auto text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 font-semibold text-gray-900">
                      Help with searching
                    </p>
                    <p className="mt-2 text-gray-500">
                      Use this tool to quickly search for accounts and
                      transactions across our entire platform. You can also use
                      the search modifiers found in the footer below to limit
                      the results to just accounts or transactions.
                    </p>
                  </div>
                )}

                {query !== '' &&
                  rawQuery !== '?' &&
                  filteredTransactions.length === 0 &&
                  filteredAccounts.length === 0 && (
                    <div className="px-6 text-sm text-center py-14 sm:px-14">
                      <ExclamationTriangleIcon
                        className="w-6 h-6 mx-auto text-gray-400"
                        aria-hidden="true"
                      />
                      <p className="mt-4 font-semibold text-gray-900">
                        No results found
                      </p>
                      <p className="mt-2 text-gray-500">
                        We couldn’t find anything with that term. Please try
                        again.
                      </p>
                    </div>
                  )}

                <div className="flex flex-wrap items-center bg-gray-50 px-4 py-2.5 text-xs text-gray-700">
                  Type{' '}
                  <kbd
                    className={cn(
                      'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
                      rawQuery.startsWith('#')
                        ? 'border-black text-black'
                        : 'border-gray-400 text-gray-900',
                    )}
                  >
                    #
                  </kbd>{' '}
                  <span className="sm:hidden">for transactions,</span>
                  <span className="hidden sm:inline">
                    to access transactions,
                  </span>
                  <kbd
                    className={cn(
                      'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
                      rawQuery.startsWith('>')
                        ? 'border-black text-black'
                        : 'border-gray-400 text-gray-900',
                    )}
                  >
                    &gt;
                  </kbd>{' '}
                  for accounts, and{' '}
                  <kbd
                    className={cn(
                      'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
                      rawQuery === '?'
                        ? 'border-black text-black'
                        : 'border-gray-400 text-gray-900',
                    )}
                  >
                    ?
                  </kbd>{' '}
                  for help.
                </div>
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
