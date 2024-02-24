'use client';

import type { FC } from 'react';
import { FiLogIn } from "react-icons/fi";
import UserFormTemplate from '@/components/commons/UserFormTemplate';
import useModal from '@/lib/hooks/useModal';

const UserRegister: FC = () => {

    const { openModal } = useModal();

    const handleModalOpen = () => {
        openModal({ 
            modalTitle: '회원가입',
            modalContent: <UserFormTemplate type='SIGN_UP' />
        });
    }

    return (
        <>
            <button 
                className='flex items-center gap-2.5 text-xs transition-colors rounded-md hover:text-blue-300'
                onClick={handleModalOpen}
            >
                <FiLogIn className='text-xl' />
                <span className='mt-0.5'>
                    회원 가입 
                </span>
            </button>  
        </>
    );
}

export default UserRegister;