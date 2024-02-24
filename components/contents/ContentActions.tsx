'use client';

import type { FC } from 'react';
import { MdOutlineEditNote, MdDeleteOutline } from "react-icons/md";
import Modal from '../commons/ui/Modal';
import ContentTemplate from '../commons/ContentTemplate';
import useModalStore from '@/zustand/modal/useModalStore';
import useContentStore from '@/zustand/content/useContentStore';

type Props = {
    content: Content;
}

const ContentActions: FC<Props> = ({ content }) => {
    
    const setIsModalOpen = useModalStore(state => state.setIsModalOpen);
    const setText = useContentStore(state => state.setText);
    const setTitle = useContentStore(state => state.setTitle);

    const handleUpdate = () => {
        setTitle(content.title);
        setText(content.text);
        setIsModalOpen(true);
    }

    const handleDelete = () => {

    }

    return (
        <div className='flex gap-4'>             
            <button 
                className='p-2 transition bg-blue-300 rounded-full shadow-sm hover:bg-blue-400'
                onClick={handleUpdate}
            >
                <MdOutlineEditNote />
            </button>
            <button 
                className='p-2 text-white transition bg-red-500 rounded-full shadow-sm hover:text-red-500 hover:bg-white'
                onClick={handleDelete}
            >
                <MdDeleteOutline />
            </button>
        </div>
    );
}

export default ContentActions;