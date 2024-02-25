'use client';

import type { FC } from 'react';
import { BiSolidBookAdd } from "react-icons/bi";
import ContentTemplate from '../commons/ContentTemplate';
import useModal from '@/lib/hooks/useModal';
import useUserStore from '@/zustand/user/useUserStore';

const AddContent: FC = () => {

    const { openModal } = useModal();
    const isLogin = useUserStore(state => state.isLogin);
    
    const handleModalOpen = () => {
        openModal(<ContentTemplate type='CREATE' />);
    }

    return isLogin && (
        <button onClick={handleModalOpen}>
            <BiSolidBookAdd className='text-3xl text-blue-600 transition hover:text-blue-500/70'/>        
        </button>
    );
}

export default AddContent;