'use client';

import type { FC } from 'react';
import { MdOutlineEditNote, MdDeleteOutline } from 'react-icons/md';
import { shallow } from 'zustand/shallow';
import { deleteOneContent } from '@/lib/actions/content.action';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import ContentForm from '../commons/ContentForm';
import useContentStore from '@/zustand/content/useContentStore';
import useModal from '@/lib/hooks/useModal';
import useUserStore from '@/zustand/user/useUserStore';

type Props = {
    contentId: string;
    authorId: string;
    title: string;
    text: string;
    subject: string;
    teacher: string;
}

const ContentActions: FC<Props> = ({ contentId, authorId, title, text, subject, teacher }) => {
    
    const rotuer = useRouter();

    const { openModal } = useModal();
    const {
        setTitle, setText,
        setSelectedSubject, setTeacher
    } = useContentStore(state => ({
        setTitle: state.setTitle, setText: state.setText,
        setSelectedSubject: state.setSelectedSubject, setTeacher: state.setTeacher
    }), shallow);

    const curUserId = useUserStore(state => state.userInfo?._id);
    const isAuhor = curUserId === authorId;

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleUpdate = () => {
        openModal(<ContentForm type='UPDATE' contentId={contentId} />);
        setTitle(title);
        setText(text);
        setSelectedSubject(subject);
        setTeacher(teacher);
    }

    const handleDelete = async () => {
        try {
            setIsLoading(true);
            
            await deleteOneContent(contentId);
            toast.success('삭제에 성공하였습니다');
            
        } catch (error) {
            toast.error('알 수 없는 이유로 삭제에 실패하였습니다');
            console.log(error);
        } finally {
            setIsLoading(false);
            rotuer.push('/');
        }
    }

    // 현재 로그인한 유저 === 글 작성자가 같을 때만, 수정과 삭제가 보이도록
    return (
        isAuhor && (
            <div className='flex gap-3 h-fit'>             
                <button 
                    className='p-1.5 text-white text-xl transition bg-blue-400 border-2 border-blue-400 rounded-full shadow-sm hover:bg-blue-300 hover:border-blue-300'
                    onClick={handleUpdate}
                >
                    <MdOutlineEditNote />
                </button>
                <button 
                    className='p-1.5 text-white text-xl transition bg-red-500 border-2 border-red-500 rounded-full shadow-sm hover:text-red-500 hover:bg-white disabled:brightness-200'
                    onClick={handleDelete}
                    disabled={isLoading}
                >
                    {
                        isLoading ? (
                            <AiOutlineLoading3Quarters className='text-white text-md animate-spin' />   
                        ) : (
                            <MdDeleteOutline />
                        )
                    }
                </button>
            </div>
        )        
    );
}

export default ContentActions;