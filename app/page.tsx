import type { NextPage } from 'next';
import AddContent from '@/components/home/AddContent';
import ContentItem from '@/components/home/ContentItem';
import Pagination from '@/components/home/Pagination';
import Link from 'next/link';

const MainPage: NextPage = async () => {

    const data = (await fetch('http://localhost:3500/data').then(res => res.json())) as Content[]; 
 
    return (
        <div className='flex flex-col justify-center h-full py-4'>          
            <section className='flex flex-col gap-6 p-8 mt-6'>
                {
                    data.map((content) => (
                        <Link key={content.id} href={`/contents/${content.id}`}>
                            <ContentItem content={content} />
                        </Link>
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