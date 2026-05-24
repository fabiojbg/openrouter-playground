import React from "react";
import { MdClose, MdMenu } from "react-icons/md";
import ChatSidebar from "@/components/chat/sidebar/ChatSidebar";
import { Transition, Dialog } from "@headlessui/react";
import AddTokenModal from "./../auth/AddTokenModal";

type Props = {};

export default function ChatHeader({}: Props) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="dark top-0 flex h-[50px] shrink-0 items-center justify-between bg-primary px-4 text-2xl text-primary md:hidden">
        <button className="p-2" onClick={() => setIsOpen(true)}>
          <MdMenu />
        </button>

        <AddTokenModal className="text-sm p-1 m-2 px-2" />
      </div>
      
      <Transition show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-50 md:hidden" onClose={setIsOpen}>
          <Transition.Child
            as={React.Fragment}
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
              as={React.Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-4/5 max-w-sm flex-1 flex-col bg-gray-900 shadow-xl">
                <div className="absolute right-0 top-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <MdClose className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <ChatSidebar />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
