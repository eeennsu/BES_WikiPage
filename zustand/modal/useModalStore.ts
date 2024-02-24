import type { UseModalStoreType } from './types';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';

const useModalStore = createWithEqualityFn<UseModalStoreType>()(
    devtools(
        (set) => ({
            isModalOpen: false,
            setIsModalOpen: (trigger) => set(() => ({ isModalOpen: trigger }), false, 'SET_IS_MODAL_OEPN'),

            modalTitle: '',
            setModalTitle: (title: string) => set(() => ({ modalTitle: title }), false, 'SET_MODAL_TITLE'),

            modalContent: null,
            setModalContent: (content: React.ReactNode) => set(() => ({ modalContent: content }), false, 'SET_MODAL_CONTENT'),
        })
    )
);

export default useModalStore;