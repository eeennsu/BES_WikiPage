'use client';

import type { FC } from 'react';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { FiUser } from 'react-icons/fi';
import useModal from '@/lib/hooks/useModal';
import UserLoginForm from './UserLoginForm';
import useUserStore from '@/zustand/user/useUserStore';

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
            className='flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-colors bg-transparent rounded-md hover:text-blue-300'
            onClick={handleModalOpen}
        >
            {
                !isLogin ? (
                    <>
                        <FiLogIn className='text-xl max-sm:hidden' />
                        <FiUser className='text-2xl sm:hidden' />
                        <span className='mt-0.5 max-sm:hidden'>
                            Login
                        </span>
                    </>
                ) : (
                    <>
                        <FiLogOut className='text-xl' />
                        
                        <span className='mt-0.5 max-sm:hidden'>
                            Logout
                        </span>
                    </>
                ) 
            }
        </button>  
    ); 
}

export default UserRegister;