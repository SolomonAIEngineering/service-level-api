import { FC, useState, ReactNode, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export interface NotificationComponentProps {
  imageURL?: string;
  title?: string;
  message: string;
  actions: ReactNode;
  iconType?: 'inbox' | 'check' | 'none';
  initialShow?: boolean;
}

const NotificationComponent: FC<NotificationComponentProps> = ({
  imageURL,
  title,
  message,
  actions,
  initialShow = true,
}) => {
  const [show, setShow] = useState(initialShow);

  return (
    <>
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:items-start sm:p-6"
      >
        <div className="flex flex-col items-center w-full space-y-4 sm:items-end">
          <Transition show={show} as={Fragment} {...transitionProps}>
            <div className="w-full max-w-sm bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  {imageURL && (
                    <img
                      className="w-10 h-10 rounded-full"
                      src={imageURL}
                      alt=""
                    />
                  )}
                  <div className="flex-1 w-0 ml-3">
                    {title && (
                      <p className="text-sm font-medium text-gray-900">
                        {title}
                      </p>
                    )}
                    <p className="mt-1 text-sm text-gray-500">{message}</p>
                    <div className="mt-4">{actions}</div>
                  </div>
                  <div className="flex flex-shrink-0 ml-4">
                    <button
                      type="button"
                      className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};

const transitionProps = {
  enter: 'transform ease-out duration-300 transition',
  enterFrom: 'translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2',
  enterTo: 'translate-y-0 opacity-100 sm:translate-x-0',
  leave: 'transition ease-in duration-100',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0',
};

export default NotificationComponent;
