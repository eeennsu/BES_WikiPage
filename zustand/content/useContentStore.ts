import type { UseContentStoreType } from './types';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';

const useContentStore = createWithEqualityFn<UseContentStoreType>()(
    devtools(
        (set) => ({
            title: '',
            setTitle: (value: string) => set(() => ({ title: value }), false, 'SET_TITLE'),
            
            text: '',
            setText: (value: string) => set(() => ({ text: value }), false, 'SET_TEXT'),
        })
    )
);

export default useContentStore;