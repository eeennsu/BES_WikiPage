'use client';

import type { FC } from 'react';
import { BiSolidBookAdd } from "react-icons/bi";
import useModalStore from '@/zustand/modal/useModalStore';
import ContentTemplate from './ContentTemplate';
import Modal from '../commons/Modal';

const AddContent: FC = () => {

    const setIsModalOpen = useModalStore(state => state.setIsModalOpen);

    return (
        <div className='absolute right-2'>
            <button onClick={() => setIsModalOpen(true)}>
                <BiSolidBookAdd />
                <Modal modalTitle='강의 추가하기' submitText='추가하기'>
                    <ContentTemplate />
                </Modal>
            </button>
        </div>
    );
}

export default AddContent;