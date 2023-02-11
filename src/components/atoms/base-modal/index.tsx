import { Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";

import { IconClose } from "~/assets/svg";

interface BaseModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

export const BaseModal = (props: BaseModalProps) => {
  const { isOpen, children, onClose } = props;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={() => onClose?.() ?? null}
        className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-60 flex items-center justify-center"
      >
        <Transition.Child
          as={Fragment}
          // transition from top to center
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          // transition from center to top
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <Dialog.Panel className="relative bg-white rounded-lg w-100 px-6 md:px-10 py-6 flex flex-col shadow-lg w-full md:w-[48rem]">
            {onClose ? (
              <button onClick={onClose} className="absolute top-6 right-12">
                <IconClose />
              </button>
            ) : null}

            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};
