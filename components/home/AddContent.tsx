'use client';

import type { FC } from 'react';
import { BiSolidBookAdd } from "react-icons/bi";
import ContentForm from '../commons/ContentForm';
import useModal from '@/lib/hooks/useModal';
import useUserStore from '@/zustand/user/useUserStore';
import ButtonLight from '../commons/ui/ButtonLight';

const AddContent: FC = () => {

    const { openModal } = useModal();
    const isLogin = useUserStore(state => state.isLogin);
    
    const handleModalOpen = () => {
        openModal(<ContentForm type='CREATE' />);
    }

    return isLogin && (
        <section className='relative'>
            {/* PC */}
            <div className='absolute z-10 hidden sm:block -right-10 -top-10'>
                <button onClick={handleModalOpen} className='flex flex-col items-center justify-center w-32 h-32 p-4 text-xl font-semibold text-white transition-colors border-white rounded-full shadow-xl outline-none bg-sky-400 hover:bg-sky-300'>
                    강의 추가
                    <BiSolidBookAdd className='text-2xl'/>        
                </button>
            </div>

            {/* mobile */}
            <div className='flex justify-center sm:hidden'>
                <ButtonLight>
                    강의 추가
                    <BiSolidBookAdd className='text-2xl'/>
                </ButtonLight>
            </div>
        </section>
    );
}

export default AddContent;