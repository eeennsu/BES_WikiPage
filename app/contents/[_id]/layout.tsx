import type { NextPage, Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { getDetailContent } from '@/lib/actions/content.action';

type Props = {
    params: {
        _id: string;
    };
}

export const generateMetadata = async ({ params: { _id } }: Props): Promise<Metadata> => {

    const content = await getDetailContent(_id);

    return {
        title: `${content?.subject || '프로그래밍'} 강의`,
        description: `This page is ${content?.title || 'programming'} lecture. And created by ${content?.teacher || 'unknown teacher.'}`,
    };
}

const Layout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <div className='flex justify-center w-full bg-gradient-to-b from-sky-100/80 to-white dark:from-transparent dark:to-transparent'>
            <main className='flex flex-1 w-full h-full max-w-4xl px-6'>
                {children}
            </main>           
        </div>
    );
};

export default Layout;