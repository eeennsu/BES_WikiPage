import type { FC } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    content: Content;
}

const ContentItem: FC<Props> = ({ content }) => {

    return (
        <div className='relative flex items-center w-full h-full gap-5 p-4 bg-white rounded-md shadow-md group'>
            <figure className='relative flex flex-[0.4] max-w-[340px] max-h-[160px] overflow-hidden'>
                <Image 
                    src={'https://picsum.photos/seed/picsum/340/220'}
                    alt={'thumbnail'}
                    className='transition duration-500 rounded-md shadow-md hover:scale-[1.15]'
                    width={340}
                    height={220}
                />                
            </figure>
            <div className='mt-2 flex-[0.6]'>
                <h4>
                    <Link
                        href={`/contents/${content._id}`}                                           
                        className='font-semibold text-md sm:text-2xl line-clamp-2 hover:underline underline-offset-4'
                    > 
                        {content.title}      
                    </Link>
                </h4>
                <p className='mt-6 text-xs text-gray-700 sm:text-sm'>
                    강사 - {content.teacher}
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