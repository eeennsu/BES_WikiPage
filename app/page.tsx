import type { NextPage } from 'next';
import AddContent from '@/components/home/AddContent';
import Pagination from '@/components/home/Pagination';
import Contents from '@/components/home/Contents';

type Props = {
    searchParams: {
        [key: string]: string | undefined;
    }
}

const MainPage: NextPage<Props> = async ({ searchParams }) => {

    return (
        <div className='flex flex-col justify-center h-full py-4'>         
            <section className='flex justify-end mt-6 px-7'>
                <AddContent />
            </section> 
            
            <section className='flex flex-col gap-6 p-8 pt-2'>
                <Contents page={searchParams?.page} />                
            </section>                     
        </div>
    );
};

export default MainPage;