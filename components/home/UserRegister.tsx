'use client';

import type { FC } from 'react';
import { FiLogIn } from "react-icons/fi";
import useModal from '@/lib/hooks/useModal';
import UserLoginForm from './UserLoginForm';
import useUserStore from '@/zustand/user/useUserStore';
import { toast } from 'react-toastify';

const UserRegister: FC = () => {

    const { openModal } = useModal();
    const isLogin = useUserStore(state => state.isLogin);
    const setLogout = useUserStore(state => state.setLogout);

    const handleModalOpen = () => {
        if (isLogin) {
            setLogout();
            toast.info('로그아웃하였습니다.');
        } else {
            openModal(<UserLoginForm />);
        }
    }

    return (
        <button 
            className='flex items-center gap-2 text-xs transition-colors rounded-md hover:text-blue-300'
            onClick={handleModalOpen}
        >
            {
                !isLogin ? (
                    <>
                        <FiLogIn className='text-xl' />
                        <span className='mt-0.5'>
                            로그인
                        </span>
                    </>
                ) : (
                    <>
                        <FiLogIn className='text-xl' />
                        <span className='mt-0.5'>
                            로그아웃
                        </span>
                    </>
                )
            }
        </button>  
    ); 
}

export default UserRegister;