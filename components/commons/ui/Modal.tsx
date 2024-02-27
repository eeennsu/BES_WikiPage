'use client';

import type { FC } from 'react';
import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import useModal from '@/lib/hooks/useModal';

const Modal: FC = () => {

    const { closeModal, isModalOpen, modalContent, modalMaxWidth } = useModal();

    return (
        <Transition
            show={isModalOpen}
            as={Fragment}
            appear
        >
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black/55' onClick={closeModal} />
                </Transition.Child>
                
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex items-center justify-center min-h-full p-4'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-90'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-100'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className={`w-full p-6 transition-all transform bg-white  rounded-lg shadow-md ${modalMaxWidth}`}>
                                {modalContent}                                    
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default Modal;