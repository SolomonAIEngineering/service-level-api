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
import React, { Fragment, useState } from 'react';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import {
  ChartPieIcon,
  RocketLaunchIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Badge } from '../ui/badge';
import { Transaction } from 'src/data-contracts/financial-service/data-contracts';
import { cn } from 'src/lib-utils/utils';

export const CommandPalletterWithPreview: React.FC<{
  transactions: Transaction[];
}> = ({ transactions }) => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(true);
  const [selectedTransaction, setSelectedTransaction] = useState(
    transactions[0],
  );

  const filteredTransactions =
    query === ''
      ? []
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
            <Dialog.Panel className="max-w-3xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
              <Combobox
                value={selectedTransaction}
                onChange={setSelectedTransaction}
              >
                {({ activeOption }) => (
                  <>
                    <div className="relative">
                      <MagnifyingGlassIcon
                        className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <Combobox.Input
                        className="w-full h-12 pr-4 text-gray-900 bg-transparent border-0 pl-11 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                        placeholder="Search for people..."
                        onChange={(event) => setQuery(event.target.value)}
                      />
                    </div>

                    {(query === '' || filteredTransactions.length > 0) && (
                      <Combobox.Options
                        as="div"
                        static
                        hold
                        className="flex divide-x divide-gray-100 transform-gpu"
                      >
                        <div
                          className={cn(
                            'max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4',
                            activeOption !== undefined && 'sm:h-96',
                          )}
                        >
                          {query === '' && (
                            <h2 className="mt-2 mb-4 text-xs font-semibold text-gray-500">
                              Recent searches
                            </h2>
                          )}
                          <div className="-mx-2 text-sm text-gray-700">
                            {(query === '' ? recent : filteredTransactions).map(
                              (txn) => (
                                <Combobox.Option
                                  as="div"
                                  key={txn.id}
                                  value={txn}
                                  className={({ active }) =>
                                    cn(
                                      'flex cursor-default select-none items-center rounded-md p-2',
                                      active && 'bg-gray-100 text-gray-900',
                                    )
                                  }
                                >
                                  {({ active }) => (
                                    <>
                                      <RocketLaunchIcon className="flex-none w-6 h-6 rounded-full" />
                                      <span className="flex-auto ml-3 truncate">
                                        {txn.merchantName}
                                      </span>
                                      {active && (
                                        <ChevronRightIcon
                                          className="flex-none w-5 h-5 ml-3 text-gray-400"
                                          aria-hidden="true"
                                        />
                                      )}
                                    </>
                                  )}
                                </Combobox.Option>
                              ),
                            )}
                          </div>
                        </div>

                        <ActiveOptionDetails
                          activeOption={activeOption as Transaction}
                        />
                      </Combobox.Options>
                    )}

                    {query !== '' && filteredTransactions.length === 0 && (
                      <div className="px-6 text-sm text-center py-14 sm:px-14">
                        <UsersIcon
                          className="w-6 h-6 mx-auto text-gray-400"
                          aria-hidden="true"
                        />
                        <p className="mt-4 font-semibold text-gray-900">
                          No people found
                        </p>
                        <p className="mt-2 text-gray-500">
                          We couldn’t find anything with that term. Please try
                          again.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const ActiveOptionDetails: React.FC<{
  activeOption: Transaction | null;
}> = ({ activeOption }) => {
  if (activeOption === null) {
    return null;
  }

  return (
    <div className="flex-col flex-none hidden w-1/2 overflow-y-auto divide-y divide-gray-100 h-96 sm:flex">
      <div className="flex-none p-6 text-center">
        <ChartPieIcon className="w-16 h-16 mx-auto rounded-full" />

        <p className="text-sm leading-6 text-gray-500">
          ${activeOption.amount}
        </p>
      </div>
      <div className="flex flex-col justify-between flex-auto p-6">
        <dl className="grid grid-cols-1 text-sm text-gray-700 gap-x-6 gap-y-3">
          <dt className="col-end-1 font-semibold text-gray-900">
            Authorized Date
          </dt>
          <dd>{activeOption.authorizedDate}</dd>
          <dt className="col-end-1 font-semibold text-gray-900">Merchant</dt>
          <dd className="truncate">
            <p className="font-bold leading-6 text-black">
              {activeOption.merchantName}
            </p>
          </dd>
          <dt className="col-end-1 font-semibold text-gray-900">Categories</dt>
          <dd className="flex flex-wrap gap-2 truncate">
            {activeOption.categories &&
              activeOption.categories.map((category) => (
                <Badge className="text-white">{category}</Badge>
              ))}
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default ActiveOptionDetails;
