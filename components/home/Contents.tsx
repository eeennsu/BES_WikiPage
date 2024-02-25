import type { FC } from 'react';
import { getContents } from '@/lib/actions/content.action';
import ContentItem from './ContentItem';
import Pagination from './Pagination';

type Props = {
    page: string | undefined;
}

const Contents: FC<Props> = async ({ page }) => {

    const curPage = page ? +page : 1;
    const { contents, hasNext, totalPages } = await getContents(curPage);

    return (
        <>
            <section
                id='courses' 
                className='flex flex-col gap-6 p-8 pt-2'
            >           
                {        
                    contents.map((content) => (                  
                        <ContentItem
                            key={content._id} 
                            content={content}
                        />                 
                    ))            
                }          
            </section> 
            <section className='relative flex justify-center w-full'>
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