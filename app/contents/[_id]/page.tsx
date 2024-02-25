import type { NextPage } from 'next';
import { getDetailContent } from '@/lib/actions/content.action';
import { dateFormat } from '@/lib/utils/util.format';
import ContentActions from '@/components/contents/ContentActions';
import RelatedContents from '@/components/contents/RelatedContents';

type Props = {
    params: {
        _id: string;
    };
}

const DetailContentPage: NextPage<Props> = async ({ params: { _id } }) => {
    
    const content = (await getDetailContent(_id)) as Content;
    
    return (
        <article className='w-full pb-10 mt-10'>
            <section>
                <div className='flex items-center justify-between gap-4'>
                    <h2 className='text-xl font-semibold break-keep'>
                        {content.title}
                    </h2>
                    <ContentActions
                        contentId={content._id.toString()}
                        authorId={content.author.toString()}
                        title={content.title}
                        text={content.text}
                        subject={content.subject}
                        teacher={content.teacher}
                    />
                </div>

                <div className='flex items-center justify-between text-sm mt-7'>
                    <h3>                   
                        강사                      
                        <span className='mx-2'>
                            -
                        </span>
                        {content.teacher}
                    </h3>
                    <p className='italic'>
                        {dateFormat(content.createdAt)} 작성됨
                    </p>
                </div>
            </section>

            <hr className='mt-2 border-t rounded-sm border-t-black' />

            <figure className='flex justify-center mt-8'>
                <video 
                    width='600' 
                    height='240'
                    className='rounded-md drop-shadow-md'
                    controls 
                    preload='none'
                >
                    {/* 더미 비디오 소스 */}
                    <source 
                        src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' 
                        type='video/mp4' 
                    />
                    <track
                        src='/path/to/captions.vtt'
                        kind='subtitles'
                        srcLang='en'
                        label='English'
                    />
                    Your browser does not support the video tag.
                </video>
            </figure>

            <section className='flex-1 w-full p-4 pb-0 mt-4 rounded-sm'>
                <p className='text-sm leading-6'>
                    {content.text} 
                </p>
            </section>

            <hr className='my-10 border-t rounded-sm border-t-black' />
            
            <RelatedContents
                contentId={content._id.toString()}
                subject={content.subject}
            />
        </article>
    );
};

export default DetailContentPage;