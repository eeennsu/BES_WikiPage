'use client';

import type { FC } from 'react';
import useContentStore from '@/zustand/content/useContentStore';

const ContentTemplate: FC = () => {

    const {
        title, setTitle,
        text, setText
    } = useContentStore(state => ({
        title: state.title, setTitle: state.setTitle,
        text: state.text, setText: state.setText
    }));

    return (
        <form className='grid gap-4 py-6'>
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
        </form>
    );
}

export default ContentTemplate;