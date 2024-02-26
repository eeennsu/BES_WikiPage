'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { deleteOneContent } from '@/lib/actions/content.action';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import ButtonContent from '../commons/ui/ButtonContent';
import useModal from '@/lib/hooks/useModal';

type Props = {
    contentId: string;
}

const ConfirmDelete: FC<Props> = ({ contentId }) => {

    const rotuer = useRouter();
    const { closeModal } = useModal();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const deleteContent = async () => {
        try {
            setIsLoading(true);
            
            await deleteOneContent(contentId);
            toast.success('삭제에 성공하였습니다');
            
        } catch (error) {
            toast.error('알 수 없는 이유로 삭제에 실패하였습니다');
            console.log(error);
        } finally {
            setIsLoading(false);
            closeModal();
            rotuer.push('/');
        }
    }

    return (
        <div className='w-full px-5 py-3'>
            <h3 className='text-2xl text-center'>
                정말 삭제하시겠습니까?
            </h3>

            <div className='flex gap-4 mt-7'>
                <ButtonContent 
                    type='submit'
                    color='RED'
                    onClick={deleteContent}
                    className='flex-1'
                    disabled={isLoading}
                >
                    {
                        isLoading ? (
                            <AiOutlineLoading3Quarters className='text-xl text-white animate-spin' />     
                        ) : (
                            '삭제하기'
                        )
                    }
                </ButtonContent>
        
                <ButtonContent 
                    type='button'
                    onClick={closeModal} 
                    color='GRAY'
                    disabled={isLoading}
                >
                    뒤로가기
                </ButtonContent>   
            </div>
        </div>
    );
}

export default ConfirmDelete;