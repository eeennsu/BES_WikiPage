'use client';

import type { FC } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { selectSubjects } from '@/constants';
import { MdCheckCircleOutline } from 'react-icons/md';
import useContentStore from '@/zustand/content/useContentStore';
import useModal from '@/lib/hooks/useModal';
import ButtonContent from './ui/ButtonContent';

type Props = {
    type: 'CREATE' | 'UPDATE'
}

const ContentTemplate: FC<Props> = ({ type }) => {

    const {
        title, setTitle,
        text, setText
    } = useContentStore(state => ({
        title: state.title, setTitle: state.setTitle,
        text: state.text, setText: state.setText
    }));

    const [selectedSubject, setSelectedSubject] = useState<string>(selectSubjects[0]);
    const { closeModal } = useModal();

    return (
        <form className='grid min-w-[768px] gap-4 py-6'>
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
                    게시글
                </label>
                <textarea 
                    id='text'
                    className='px-2.5 py-1.5 text-sm border-2 bg-slate-100 focus:border-gray-400 rounded-md outline-none resize-none' 
                    rows={6} 
                    placeholder='글을 입력해주세요' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='relative flex flex-col items-start mt-4 space-y-1'>
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
                            className='w-full overflow-y-auto rounded-md shadow-sm min-w-36 max-h-44 custom-scroll'
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
            <div className='flex justify-center gap-5 mt-4'>
                <ButtonContent                     
                    onClick={() => {}} 
                    type='submit'                
                >
                    {
                        type === 'CREATE' 
                            ? '추가하기'
                            : '수정하기'
                    }
                </ButtonContent>
         
                <ButtonContent 
                    onClick={closeModal} 
                    color='RED'
                >
                    뒤로가기
                </ButtonContent>         
            </div>   
        </form>
    );
}

export default ContentTemplate;