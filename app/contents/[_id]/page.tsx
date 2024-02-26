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

const DetailContentPage: NextPage<Props> = async ({ params: { _id } }) => {
    
    const content = (await getDetailContent(_id)) as Content;

    if (!content) throw new Error('Not founded this content');
    
    const contentId = content._id?.toString();

    return (
        <article className='w-full pb-10 mt-6 sm:mt-10'>
      
            <section className='flex items-center justify-between gap-4'>              
                <h2 className='text-2xl font-semibold sm:text-xl'>
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

            <section className='flex items-center justify-between mt-3.5 text-sm'>
                <div className='flex'>
                    <h3 className='font-bold'>                 
                        {content.teacher}
                    </h3>

                    <span className='mx-4 font-bold'>
                        |
                    </span>
                    
                    {
                        content?.price ? (
                            <p className='italic text-blue-500'>
                                &#8361;&nbsp;{priceFormat(content.price)}
                            </p>
                        ) : (
                            <p className='text-orange-400'>
                                무료
                            </p>
                        )
                    } 
                </div>

                <p className='italic'>
                    {dateFormat(content.createdAt)} 작성됨
                </p>
            </section>          

            <hr className='mt-2 border-t rounded-sm border-t-black' />

            <figure className='flex justify-center mt-8'>
                <video 
                    className='object-cover w-full h-full max-w-[780px] max-h-[450px] rounded-md drop-shadow-md'
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
                    현재 브라우저는 video를 지원하지 않습니다.
                </video>
            </figure>

            <section className='flex-1 w-full p-4 pb-0 mt-4 rounded-sm'>
                <p className='text-sm leading-6'>
                    {content.text} 
                </p>
            </section>

            <hr className='mt-10 border-t rounded-sm border-t-black' />
            
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

export default DetailContentPage;