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
        title: `${content?.subject} 강의`,
        description: `This page is ${content?.text} lecture. And created by ${content?.teacher}`,
    };
}

const Layout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <div className='flex flex-1 w-full h-full max-w-4xl px-6 bg-white'>
            {children}
        </div>
    );
};

export default Layout;