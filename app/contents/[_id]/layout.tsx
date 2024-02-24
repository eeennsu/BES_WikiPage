import type { NextPage, Metadata } from 'next';
import type { PropsWithChildren } from 'react';

type Props = {
    params: {
        id: string;
    };
}

export const generateMetadata = async ({ params: { id } }: Props): Promise<Metadata> => {

    return {
        title: `Page`,
        description: `This page is 's page.`,
    };
}

const Layout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <div className='flex flex-1 h-full px-8 bg-white'>
            {children}
        </div>
    );
};

export default Layout;