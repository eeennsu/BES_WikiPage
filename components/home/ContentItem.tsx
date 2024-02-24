import type { FC } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from 'next/image';

type Props = {
    content: Content;
}

const ContentItem: FC<Props> = ({ content }) => {

    return (
        <div className='relative flex items-center w-full h-full gap-5 p-4 bg-white rounded-md shadow-md cursor-pointer group hover:bg-orange-50'>
            <figure className='relative flex max-w-[340px] max-h-[160px] overflow-hidden'>
                <Image 
                    src={content.image}
                    alt={'thumbnail'}
                    className='object-cover transition duration-500 rounded-md shadow-md hover:scale-[1.15]'
                    width={340}
                    height={160}
                />                
            </figure>
            <div className='mt-2'>
                <h4 className='text-2xl font-semibold'>
                    {content.title}
                </h4>
                <p className='mt-6 text-sm text-gray-700'>
                    강사 - {content.lector}
                </p>
                <p className='mt-2 text-sm text-gray-700'>
                    가격 - <span className='italic text-blue-600'>140,000 &#8361;</span>
                </p>
            </div>
            <div className='absolute hidden text-2xl group-hover:block animate-ping bottom-6 right-6'>
                <FaExternalLinkAlt />
            </div>
        </div>
    );
}

export default ContentItem;