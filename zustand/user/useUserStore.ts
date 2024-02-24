import type { UseUserStoreType } from './types';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';

const useUserStore = createWithEqualityFn<UseUserStoreType>()(
    devtools(
        (set) => ({
            isLogin: false,
            setIsLogin: (trigger) => set(() => ({ isLogin: trigger }), false, 'SET_IS_LOGIN'),
        })
    )
);

export default useUserStore;