import type { FC } from 'react';
import { getContents } from '@/lib/actions/content.action';
import ContentCard from './ContentCard';
import Pagination from './Pagination';

type Props = {
    page: string | undefined;
}

const Contents: FC<Props> = async ({ page }) => {

    const curPage = page ? +page : 1;
    const { contents, hasNext, totalPages } = await getContents(curPage);

    return (
        <>
            <section className='grid grid-cols-2 p-5 mt-4 gap-x-4 gap-y-28 lg:gap-y-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>           
                {        
                    contents.map((content) => (                  
                        <ContentCard
                            key={content._id} 
                            content={content}
                        />                 
                    ))            
                }          
            </section> 
            
            <section className='flex justify-center w-full mt-32'>
                <Pagination 
                    curPage={curPage}
                    hasNext={hasNext}
                    totalPages={totalPages}
                />        
            </section>   
        </>       
    );
}

export default Contents;