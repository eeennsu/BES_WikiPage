import type { NextPage } from 'next';
import { dummy } from '@/constants/dummy';
import AddContent from '@/components/home/AddContent';
import ContentItem from '@/components/home/ContentItem';
import Pagination from '@/components/home/Pagination';

const MainPage: NextPage = () => {

    return (
        <div className='flex flex-col justify-center h-full py-4'>          
            <h2 className='text-3xl text-center'>
                Wikies
            </h2>  

            <section className='flex flex-col gap-6 p-3 rounded-md bg-slate-100'>
                {
                    dummy.map((content) => (
                        <ContentItem content={content} />
                    ))
                }
            </section>     
                 
            <section className='relative flex justify-center w-full'>
                <Pagination />
                <AddContent />
            </section>              
        </div>
    );
};

export default MainPage;