'use client';

import type { FC } from 'react';
import { BiSolidBookAdd } from "react-icons/bi";
import ContentTemplate from '../commons/ContentTemplate';
import useModal from '@/lib/hooks/useModal';

const AddContent: FC = () => {

    const { isModalOpen, openModal, closeModal } = useModal();
    
    const handleModalOpen = () => {
        openModal(<ContentTemplate type='CREATE' />);
    }

    return (
        <div className='absolute right-2'>
            <button onClick={handleModalOpen}>
                <BiSolidBookAdd />        
            </button>
        </div>
    );
}

export default AddContent;