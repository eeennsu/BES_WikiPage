'use client';

import type { FC } from 'react';
import { MdOutlineEditNote, MdDeleteOutline } from 'react-icons/md';
import { shallow } from 'zustand/shallow';
import ContentForm from '../commons/ContentForm';
import useContentStore from '@/zustand/content/useContentStore';
import useModal from '@/lib/hooks/useModal';
import useUserStore from '@/zustand/user/useUserStore';
import ConfirmDelete from './ConfirmDelete';

type Props = {
    contentId: string;
    authorId: string;
    title: string;
    text: string;
    subject: string;
    teacher: string;
    price?: number;
}

const ContentActions: FC<Props> = ({ contentId, authorId, title, text, subject, teacher, price }) => {
    
    const { openModal } = useModal();
    const {
        setTitle, setText,
        setSelectedSubject, setTeacher, 
        setPrice, setIsFree
    } = useContentStore(state => ({
        setTitle: state.setTitle, setText: state.setText,
        setSelectedSubject: state.setSelectedSubject, setTeacher: state.setTeacher,
        setPrice: state.setPrice, setIsFree: state.setIsFree
    }), shallow);

    const curUserId = useUserStore(state => state.userInfo?._id);
    const isAuhor = curUserId === authorId;

    const handleUpdate = () => {
        openModal(<ContentForm type='UPDATE' contentId={contentId} />, 'max-w-4xl');
        setTitle(title);
        setText(text);
        setSelectedSubject(subject);
        setTeacher(teacher);
        setPrice(price || 0);
        setIsFree(price === 0);
    }

    const handleDeleteModal = async () => {
        openModal(<ConfirmDelete contentId={contentId} />, 'max-w-max');
    }

    // 현재 로그인한 유저 === 글 작성자가 같을 때만, 수정과 삭제가 보이도록
    return (
        isAuhor && (
            <div className='flex flex-col gap-3 h-fit sm:flex-row'>             
                <button 
                    className='p-1.5 text-white text-xl transition bg-blue-400 border-2 border-blue-400 rounded-full shadow-sm hover:bg-blue-300 hover:border-blue-300'
                    onClick={handleUpdate}
                >
                    <MdOutlineEditNote />
                </button>
                <button 
                    className='p-1.5 text-white text-xl transition bg-red-500 border-2 border-red-500 rounded-full shadow-sm hover:text-red-500 hover:bg-white disabled:brightness-200'
                    onClick={handleDeleteModal}
                >
                    <MdDeleteOutline />
                </button>
            </div>
        )        
    );
}

export default ContentActions;