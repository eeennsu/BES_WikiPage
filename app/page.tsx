import type { NextPage } from 'next';
import AddContent from '@/components/home/AddContent';
import Contents from '@/components/home/Contents';
import Banner from '@/components/home/Banner';

type Props = {
    searchParams: {
        [key: string]: string | undefined;
    }
}

const MainPage: NextPage<Props> = async ({ searchParams }) => {

    return (
        <main className='w-full max-w-5xl'>
            <div className='flex flex-col h-full pb-10 justify-center-d'>     
                <div className='absolute inset-0 banner h-dvh -z-10' />
                <Banner />

                <AddContent />    
            
                <Contents page={searchParams?.page} />       
                {/* <div className='absolute inset-0 top-[100vh] bg-gradient-to-b from-white to-sky-200/85 -z-10 w-dvw' />         */}
            </div>
        </main>        
    );
};

export default MainPage;