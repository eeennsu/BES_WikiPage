import type { NextPage } from 'next';
import ContentActions from '@/components/contents/ContentActions';
import RelatedContents from '@/components/contents/RelatedContents';
import Image from 'next/image';

type Props = {
    params: {
        id: string;
    };
}

const New: NextPage<Props> = async ({ params: { id } }) => {
    
    const content = (await fetch(`http://localhost:3500/data/${id}`).then(res => res.json())) as Content;

    return (
        <article className='flex flex-col w-full gap-4 mt-10 '>
            <section className='flex justify-between'>
                <h2 className='text-xl font-semibold'>
                    {content.title}
                </h2>
                <ContentActions content={content} />
            </section>
            <hr className='border-t rounded-sm border-t-black' />
            <figure className='flex justify-center'>
                <Image 
                    src={content.image}
                    alt='thumbnail'
                    width={476}
                    height={224}
                    className='object-contain'                 
                />
            </figure>
            <section className='flex-1 w-full p-4 rounded-sm'>
                <p className=''>
                    {content.text} 
                </p>
            </section>
            <RelatedContents />
        </article>
    );
};

export default New;