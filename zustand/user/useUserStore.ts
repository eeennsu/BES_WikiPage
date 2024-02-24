import type { MongoUser, UseUserStoreType } from './types';
import { createWithEqualityFn } from 'zustand/traditional';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

const useUserStore = createWithEqualityFn<UseUserStoreType>()(
    devtools(
        persist(
            (set) => ({
                isLogin: false,
                setIsLogin: (trigger) => set(() => ({ isLogin: trigger }), false, 'SET_IS_LOGIN'),
    
                userInfo: null,
                setUserInfo: (value: MongoUser) => set(() => ({ userInfo: value }), false, 'SET_USER_INFO'),
                
                setLogout: () => set(() => ({
                    isLogin: false,
                    userInfo: null
                }), false, 'SET_LOGOUT')
            }),
            {
                name: 'USER_STORAGE',
                storage: createJSONStorage(() => sessionStorage)
            }
        )
    )
);

export default useUserStore;