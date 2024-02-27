'use client';

import type { FC, FormEvent } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { selectSubjects } from '@/constants';
import { MdCheckCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import { createNewContent, updateContent } from '@/lib/actions/content.action';
import { usePathname, useRouter } from 'next/navigation';
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

const ContentForm: FC<Props> = ({ type, contentId }) => {

    const pathname = usePathname();
    const router = useRouter();

    const userId = useUserStore(state => state.userInfo?._id);
    
    const { closeModal } = useModal();

    const {
        title, setTitle,
        text, setText,
        selectedSubject, setSelectedSubject,
        teacher, setTeacher,
        price, setPrice,
        isFree, setIsFree
    } = useContentStore(state => ({
        title: state.title, setTitle: state.setTitle,
        text: state.text, setText: state.setText,
        selectedSubject: state.selectedSubject, setSelectedSubject: state.setSelectedSubject,
        teacher: state.teacher, setTeacher: state.setTeacher,
        price: state.price, setPrice: state.setPrice,
        isFree: state.isFree, setIsFree: state.setIsFree
    }), shallow);

    const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (title === '' || text === '' || selectedSubject === '' || teacher === '' || price.toString().length === 0) {
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
                    price,
                    pathname,
                    userId
                });
    
                toast.success('새 콘텐츠가 추가되었습니다');           
                router.push('/?page=1');                    // 성공시 첫 페이지로 이동

            } else {
                await updateContent({
                    contentId: contentId as string,
                    title,
                    text,
                    subject: selectedSubject,
                    teacher,
                    price,
                    pathname
                });

                toast.success('수정되었습니다');
            }
            
        } catch (error) {
            console.log(error);

            if (type === 'CREATE') {
                toast.error('새 콘텐츠 추가에 실패하였습니다');
            } else {
                toast.error('콘텐츠 수정에 실패하였습니다');
            }

        } finally {
            setIsSubmiting(false);
            closeModal();        
        }
    }

    return (
       <>
            <h3 className='hidden p-3 text-2xl font-semibold leading-6 tracking-wider text-center text-gray-900 sm:block'> 
                {
                    type === 'CREATE' ? (
                        '강의 추가하기'
                    ) : (
                        '강의 수정하기'
                    )
                }
            </h3>
            <form 
                className='grid w-full gap-1 py-1 sm:gap-4 sm:py-3' 
                onSubmit={handleSubmit}
            >
                <div className='flex flex-col w-full space-y-1'>
                    <label 
                        htmlFor='title'
                        className='font-semibold'
                    >
                        제목
                    </label>
                    <input 
                        id='title' 
                        className='px-2.5 py-1.5 border-2 text-sm bg-slate-100 focus:border-gray-400 rounded-md outline-none dark:bg-slate-200 dark:border-gray-400 dark:focus:border-black' 
                        placeholder='제목을 입력해주세요' 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className='flex flex-col mt-4 space-y-1'>
                    <label 
                        htmlFor='text'
                        className='font-semibold'
                    >
                        내용
                    </label>
                    <textarea 
                        id='text'
                        className='px-2.5 py-1.5 text-sm border-2 bg-slate-100 focus:border-gray-400 rounded-md outline-none resize-none custom-scroll dark:bg-slate-200 dark:border-gray-400 dark:focus:border-black' 
                        rows={6} 
                        placeholder='글을 입력해주세요' 
                        value={text} 
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                
                <div className='flex flex-col items-center gap-6 mt-4 sm:flex-row'>
                    <div className='relative flex flex-col items-start w-full space-y-1'>
                        <Listbox 
                            value={selectedSubject} 
                            onChange={setSelectedSubject}                    
                        >
                            <Listbox.Label 
                                htmlFor='subject' 
                                className='font-semibold'
                            >
                                주제
                            </Listbox.Label>
                            
                            <Listbox.Button className='px-2.5 py-1.5 text-sm border-2 focus:border-gray-400 rounded-md outline-none w-full flex justify-start dark:bg-slate-200 dark:border-gray-400 dark:focus:border-black'>
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
                                    className='w-full overflow-y-auto rounded-md shadow-sm min-w-20 max-h-[200px] custom-scroll'
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
                                                        <li className={`flex items-center gap-1 p-2 cursor-pointer shadow-md ${
                                                            active ? 'bg-blue-400 text-white pl-3' : 'pl-3 bg-slate-100 text-black'
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

                    <div className='flex flex-col w-full space-y-1'>
                        <label 
                            htmlFor='teacher'
                            className='font-semibold'
                        >
                            강사
                        </label>
                        <input 
                            id='teacher' 
                            className='px-2.5 py-1.5 border-2 text-sm  bg-slate-100 focus:border-gray-400 rounded-md outline-none dark:bg-slate-20 dark:bg-slate-200 dark:border-gray-400 dark:focus:border-black' 
                            placeholder='강사를 입력해주세요' 
                            value={teacher} 
                            onChange={(e) => setTeacher(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col w-full space-y-1'>
                        <div className='flex items-center justify-between'>
                            <label 
                                htmlFor='price' 
                                className='font-semibold'
                            >
                                가격                           
                            </label>
                            <div className='flex items-center gap-1'>
                                <label 
                                    htmlFor='free'
                                    className='ml-3 text-xs'
                                >
                                    무료
                                </label>
                                <input 
                                    id='free'
                                    type='checkbox'
                                    checked={isFree}
                                    defaultChecked={price === 0}
                                    onChange={(e) => {
                                        setIsFree(!isFree);
                                        e.target.checked && setPrice(0);
                                    }}
                                />
                            </div>
                        </div>
                        <input 
                            id='price' 
                            className='px-2.5 py-1.5 border-2 text-sm bg-slate-100 focus:border-gray-400 rounded-md outline-none disabled:opacity-45 dark:bg-slate-200 dark:border-gray-400 dark:focus:border-black' 
                            type='number'
                            placeholder='가격을 입력해주세요' 
                            value={price} 
                            defaultValue=''
                            disabled={isFree}
                            onChange={(e) => setPrice(e.target.valueAsNumber)}
                        />
                    </div>
                </div>

                <div className='flex justify-center gap-5 mt-4 sm:justify-end'>
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
                        color='GRAY'
                        disabled={isSubmiting}
                    >
                        뒤로가기
                    </ButtonContent>         
                </div>   
            </form>
       </>
    );
}

export default ContentForm;