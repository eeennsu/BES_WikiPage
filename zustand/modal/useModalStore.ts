import type { UseModalStoreType } from './types';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';

const useModalStore = createWithEqualityFn<UseModalStoreType>()(
    devtools(
        (set) => ({
            isModalOpen: false,
            setIsModalOpen: (trigger) => set(() => ({ isModalOpen: trigger }), false, 'SET_IS_MODAL_OEPN')
        })
    )
);

export default useModalStore;