'use client';

import type { FC, PropsWithChildren } from 'react';
import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import useModalStore from '@/zustand/modal/useModalStore';

type Props = {
    modalTitle: string;
    submitText: string;
}

const Modal: FC<PropsWithChildren<Props>> = ({ modalTitle, children, submitText }) => {

    const isModalOpen = useModalStore(state => state.isModalOpen);
    const setIsModalOpen = useModalStore(state => state.setIsModalOpen);

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    return (
        <Transition
            show={isModalOpen}
            as={Fragment}
            appear
        >
            <Dialog as='div' className='relative z-10' onClose={handleModalClose}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black/35' onClick={handleModalClose} />
                </Transition.Child>
                
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex items-center justify-center min-h-full p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-90'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-100'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-3xl p-6 text-left align-middle transition-all transform bg-white rounded-lg shadow-md'>
                                <Dialog.Title
                                    as='h3'
                                    className='p-3 text-2xl font-semibold leading-6 text-center text-gray-900'
                                >
                                    {modalTitle}
                                </Dialog.Title>
                                
                                <div className='mt-2'>
                                    {children}
                                </div>

                                <div className='flex justify-center gap-5 mt-4'>
                                    <button
                                        type='submit'
                                        className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md shadow-sm hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:shadow-lg active:bg-blue-300'
                                    >
                                        {submitText}
                                    </button>

                                    <button 
                                        className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-red-100 border border-transparent rounded-md shadow-sm hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:shadow-lg active:bg-red-300' 
                                        onClick={handleModalClose}
                                    >
                                        돌아가기
                                    </button>
                                </div>                   
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default Modal;