import type { FC } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from 'next/image';

type Props = {
    content: Content;
}

const ContentItem: FC<Props> = ({ content }) => {

    return (
        <div className='relative flex items-center w-full h-full gap-5 p-4 bg-white rounded-md shadow-md cursor-pointer group hover:bg-orange-50'>
            <figure className='relative flex flex-[0.4] max-w-[340px] max-h-[160px] overflow-hidden'>
                <Image 
                    src={content?.image || 'https://picsum.photos/seed/picsum/340/160'}
                    alt={'thumbnail'}
                    className='transition duration-500 rounded-md shadow-md hover:scale-[1.15]'
                    width={340}
                    height={160}
                />                
            </figure>
            <div className='mt-2 flex-[0.6]'>
                <h4 className='font-semibold text-md sm:text-2xl line-clamp-2'>
                    {content.title}
                </h4>
                <p className='mt-6 text-xs text-gray-700 sm:text-sm'>
                    강사 - {content.lector}
                </p>
                <p className='mt-2 text-xs text-gray-700 sm:text-sm'>
                    주제 - <span className='italic text-blue-600'>
                        {content.subject}
                    </span>
                </p>
            </div>
            <div className='absolute hidden text-2xl group-hover:block animate-ping bottom-6 right-6'>
                <FaExternalLinkAlt />
            </div>
        </div>
    );
}

export default ContentItem;