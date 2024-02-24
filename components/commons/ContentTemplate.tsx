'use client';

import type { FC, FormEvent } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { selectSubjects } from '@/constants';
import { MdCheckCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import { createNewContent, updateContent } from '@/lib/actions/content.action';
import { usePathname } from 'next/navigation';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { shallow } from 'zustand/shallow';
import useModal from '@/lib/hooks/useModal';
import useUserStore from '@/zustand/user/useUserStore';
import useContentStore from '@/zustand/content/useContentStore';
import ButtonContent from './ui/ButtonContent';

type Props = {
    type: 'CREATE' | 'UPDATE'
    contentId?: string;
}

const ContentTemplate: FC<Props> = ({ type, contentId }) => {

    const pathname = usePathname();

    const userId = useUserStore(state => state.userInfo?._id);
    
    const { closeModal } = useModal();

    const {
        title, setTitle,
        text, setText,
        selectedSubject, setSelectedSubject,
        teacher, setTeacher,
    } = useContentStore(state => ({
        title: state.title, setTitle: state.setTitle,
        text: state.text, setText: state.setText,
        selectedSubject: state.selectedSubject, setSelectedSubject: state.setSelectedSubject,
        teacher: state.teacher, setTeacher: state.setTeacher,
    }), shallow);

    const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (title === '' || text === '' || selectedSubject === '' || teacher === '') {
            toast.warning('강의 정보를 모두 입력해주세요');
            return;
        }

        if (!userId) {
            toast.error('다시 로그인을 진행해주세요');
            return;
        }

        try {
            setIsSubmiting(true);

            if (type === 'CREATE') {
                await createNewContent({
                    title,
                    text,
                    subject: selectedSubject,
                    teacher,
                    pathname,
                    userId
                });
    
                toast.success('새 콘텐츠가 추가되었습니다');  
                              
            } else {
                await updateContent({
                    contentId: contentId as string,
                    title,
                    text,
                    subject: selectedSubject,
                    teacher,
                    pathname
                });

                toast.success('수정되었습니다');
            }
            
        } catch (error) {
            console.log(error);
            toast.error('새 콘텐츠 추가에 실패하였습니다');
        } finally {
            setIsSubmiting(false);
            closeModal();        
        }
    }

    return (
        <form className='grid min-w-[768px] gap-4 py-6' onSubmit={handleSubmit}>
            <div className='flex flex-col space-y-1'>
                <label htmlFor='title'>
                    제목
                </label>
                <input 
                    id='title' 
                    className='px-2.5 py-1.5 border-2 text-sm bg-slate-100 focus:border-gray-400 rounded-md outline-none ' 
                    placeholder='제목을 입력해주세요' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='flex flex-col mt-4 space-y-1'>
                <label htmlFor='text'>
                    내용
                </label>
                <textarea 
                    id='text'
                    className='px-2.5 py-1.5 text-sm border-2 bg-slate-100 focus:border-gray-400 rounded-md outline-none resize-none custom-scroll' 
                    rows={6} 
                    placeholder='글을 입력해주세요' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='flex items-center gap-6 mt-4'>
                <div className='relative flex flex-col items-start flex-1 space-y-1'>
                    <Listbox 
                        value={selectedSubject} 
                        onChange={setSelectedSubject}                    
                    >
                        <Listbox.Label htmlFor='subject'>
                            주제
                        </Listbox.Label>
                        <Listbox.Button className='px-2.5 py-1.5 text-sm border-2 bg-slate-100 focus:border-gray-400 rounded-md outline-none w-full flex justify-start'>
                            {selectedSubject}                    
                        </Listbox.Button>
                        <Transition
                            enter='transition duration-100 ease-out'
                            enterFrom='transform scale-95 opacity-0'
                            enterTo='transform scale-100 opacity-100'
                            leave='transition duration-75 ease-out'
                            leaveFrom='transform scale-100 opacity-100'
                            leaveTo='transform scale-95 opacity-0'
                            className='absolute w-full top-16'
                        >
                            <Listbox.Options 
                                id='subject' 
                                className='w-full overflow-y-auto rounded-md shadow-sm min-w-36 max-h-[200px] custom-scroll'
                            >
                                {
                                    selectSubjects.map((subject) => (
                                        <Listbox.Option                                    
                                            key={subject}
                                            value={subject}     
                                            as={Fragment}     
                                        >
                                            {
                                                ({ active, selected }) => (
                                                    <li className={`flex items-center gap-1 p-2 pl-4 cursor-pointer shadow-md ${
                                                        active ? 'bg-blue-400 text-white' : 'bg-slate-200 text-black'
                                                    }`}>
                                                        {selected && <MdCheckCircleOutline />}
                                                        {subject}
                                                    </li>
                                                )
                                            }
                                        </Listbox.Option>
                                    ))
                                }
                            </Listbox.Options>
                        </Transition>
                    </Listbox>                
                </div>           
                <div className='flex flex-col space-y-1'>
                    <label htmlFor='teacher'>
                        강사
                    </label>
                    <input 
                        id='teacher' 
                        className='px-2.5 py-1.5 border-2 text-sm bg-slate-100 focus:border-gray-400 rounded-md outline-none ' 
                        placeholder='강사를 입력해주세요' 
                        value={teacher} 
                        onChange={(e) => setTeacher(e.target.value)}
                    />
                </div>
            </div>
            <div className='flex justify-center gap-5 mt-4'>
                <ButtonContent 
                    className='w-[88px]'
                    type='submit'
                    disabled={isSubmiting}
                >
                    {
                        isSubmiting ? (
                            <AiOutlineLoading3Quarters className='text-xl text-white animate-spin' />     
                        ) : (
                            type === 'CREATE' 
                            ? '추가하기'
                            : '수정하기'
                        )
                    }
                </ButtonContent>
         
                <ButtonContent 
                    type='button'
                    onClick={closeModal} 
                    color='RED'
                    disabled={isSubmiting}
                >
                    뒤로가기
                </ButtonContent>         
            </div>   
        </form>
    );
}

export default ContentTemplate;