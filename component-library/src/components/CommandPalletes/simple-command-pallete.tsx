import React, { Fragment, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Combobox, Dialog, Transition } from '@headlessui/react';
import { cn } from 'src/lib-utils/utils';
import { Transaction } from 'src/data-contracts/financial-service/data-contracts';

export const SimpleTransactionCommandPallete: React.FC<{
  transactions: Transaction[];
}> = ({ transactions }) => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(true);

  const filteredTransactions =
    query === ''
      ? transactions.length > 5
        ? transactions.slice(0, 5)
        : transactions
      : transactions.filter((txn) => {
          return txn.name!.toLowerCase().includes(query.toLowerCase());
        });

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
            <Dialog.Panel className="max-w-xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-100 shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5">
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

                {filteredTransactions.length > 0 && (
                  <Combobox.Options
                    static
                    className="py-2 -mb-2 overflow-y-auto text-sm text-gray-800 max-h-72 scroll-py-2"
                  >
                    {filteredTransactions.map((txn) => (
                      <Combobox.Option
                        key={txn.id}
                        value={txn}
                        className={({ active }) =>
                          cn(
                            'cursor-default select-none px-4 py-2',
                            active && 'bg-indigo-600 text-white',
                          )
                        }
                      >
                        {txn.name}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}

                {query !== '' && filteredTransactions.length === 0 && (
                  <p className="p-4 text-sm text-gray-500">
                    No transactions found.
                  </p>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
