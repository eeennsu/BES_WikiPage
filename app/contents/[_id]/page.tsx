import type { NextPage } from 'next';
import { getDetailContent } from '@/lib/actions/content.action';
import { dateFormat, priceFormat } from '@/lib/utils/util.format';
import ContentActions from '@/components/contents/ContentActions';
import RelatedContents from '@/components/contents/RelatedContents';

type Props = {
    params: {
        _id: string;
    };
}

const WikiPage: NextPage<Props> = async ({ params: { _id } }) => {
    
    const content = (await getDetailContent(_id)) as Content;
    if (!content) throw new Error('Not founded this content');

    const contentId = content._id?.toString();

    return (
        <article className='w-full pb-16 sm:pb-24 pt-8 sm:pt-12'>
      
            <section className='flex items-center justify-between gap-4'>              
                <h2 className='text-2xl font-semibold sm:text-xl dark:text-slate-100 dark:font-normal'>
                    {content.title}
                </h2>   
         
                 <ContentActions
                    contentId={contentId}
                    authorId={content.author.toString()}
                    title={content.title}
                    text={content.text}
                    subject={content.subject}
                    teacher={content.teacher}
                    price={content.price}
                />
            </section>

            <section className='flex items-center justify-between mt-3.5 text-sm dark:text-slate-100'>
                <div className='flex'>
                    <h3 className='font-bold dark:font-normal'>                 
                        {content.teacher}
                    </h3>

                    <span className='mx-4 font-bold'>
                        |
                    </span>
                    
                    {
                        content?.price ? (
                            <p className='italic text-blue-500 dark:text-sky-400'>
                                &#8361;&nbsp;{priceFormat(content.price)}
                            </p>
                        ) : (
                            <p className='text-orange-400 dark:text-orange-300'>
                                무료
                            </p>
                        )
                    } 
                </div>

                <p className='italic'>
                    {dateFormat(content.createdAt)} 작성됨
                </p>
            </section>          

            <hr className='mt-2 border-t rounded-sm border-t-black dark:border-t-gray-400' />

            <figure className='flex justify-center mt-8'>
                <video 
                    className='object-cover w-full h-full rounded-md aspect-video drop-shadow-md'
                    controls 
                    preload='none'
                >
                    {/* 더미 비디오 소스 */}
                    <source 
                        src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' 
                        type='video/mp4' 
                    />
                    <track
                        src='/path/to/captions.vtt'
                        kind='subtitles'
                        srcLang='en'
                        label='English'
                    />
                    <span className='text-black dark:text-white'>
                        현재 브라우저는 video를 지원하지 않습니다.
                    </span>
                </video>
            </figure>

            <section className='flex-1 w-full p-4 pb-0 mt-4 rounded-sm'>
                <p className='text-sm leading-6 dark:text-gray-100'>
                    {content.text} 
                </p>
            </section>

            <hr className='mt-10 border-t rounded-sm border-t-black dark:border-t-gray-400' />
            
            <RelatedContents
                contentId={contentId}
                subject={content.subject}
            />

            <RelatedContents
                contentId={contentId}
                teacher={content.teacher}
            />
        </article>
    );
};

export default WikiPage;