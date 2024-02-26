import type { FC } from 'react';
import { getRelatedContents  } from '@/lib/actions/content.action';
import RelatedContentCard from './RelatedContentCard';
import Link from 'next/link';

type Props = {
    contentId: string;
    subject?: string;
    teacher?: string;
}

const RelatedContents: FC<Props> = async ({ contentId, subject, teacher }) => {

    const response = await getRelatedContents({ contentId, subject, teacher });
 
    if (response?.relatedContents.length === 0) {
        return null;
    }

    return (
        <section className='mt-16'>
            <div className='flex items-center gap-3 text-lg'>
                <h3 className='font-semibold'> 
                    {subject || teacher} &nbsp;&nbsp; 관련 강의 
                </h3>

                <p className='flex items-center gap-2 font-light text-blue-400'>
                    <span>
                        {response?.relatedContents.length}개
                    </span>
                    {
                        response?.otherCount && (
                            <span className='text-sm italic font-light text-black'>
                                ...  그외 {response?.otherCount}개
                            </span> 
                        )
                    }       
                </p>                     
            </div>
            
            <div className='grid justify-start grid-cols-2 gap-4 mt-6 sm:grid-cols-3 md:grid-cols-4'>
                {
                    response?.relatedContents?.map((content) => (
                        <Link 
                            key={content._id}
                            href={`/contents/${content._id}`}
                        >
                            <RelatedContentCard     
                                key={content._id}                         
                                title={content.title}
                                price={content?.price}
                            />
                        </Link>
                    ))
                }
            </div>
        </section>
    );
}

export default RelatedContents;