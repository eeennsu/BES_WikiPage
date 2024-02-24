import type { FC } from 'react';
import { getRelatedContents  } from '@/lib/actions/content.action';
import RelatedContentCard from './RelatedContentCard';
import Link from 'next/link';

type Props = {
    contentId: string;
    subject: string;
}

const RelatedContents: FC<Props> = async ({ contentId, subject }) => {

    const relatedContens = await getRelatedContents({ contentId, subject });
   
    return (
        <section className='mt-2'>
            <h3 className='text-lg font-semibold'> 
                {subject} 관련 강의 <span className='ml-2 font-light text-blue-400'>{relatedContens?.length}개</span>
            </h3>
            <div className='grid justify-start grid-cols-2 gap-4 mt-6 sm:grid-cols-3 md:grid-cols-4'>
                {
                    relatedContens?.map((content) => (
                        <Link 
                            key={content._id}
                            href={`/contents/${content._id}`}
                        >
                            <RelatedContentCard                                
                                title={content.title}
                                teacher={content.teacher}
                            />
                        </Link>
                    ))
                }
            </div>
        </section>
    );
}

export default RelatedContents;