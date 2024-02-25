import type { FC } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    content: Content;
}

const ContentCard: FC<Props> = ({ content }) => {

    return (
        <div className='relative flex flex-col items-center w-full h-full bg-white rounded-md drop-shadow-md group'>
            <figure className='relative flex w-full h-[120px] overflow-hidden'>
                <Image 
                    src={'https://picsum.photos/seed/picsum/230/120'}
                    alt={'thumbnail'}
                    className='transition duration-500  shadow-md hover:scale-[1.15]'
                    fill
                />                
            </figure>

            <div className='p-[18px] w-44'>
                <h4 className='h-8'>
                    <Link
                        href={`/contents/${content._id}`}                                           
                        className='text-xs font-semibold sm:text-sm line-clamp-2 hover:underline underline-offset-4'
                    > 
                        {content.title}      
                    </Link>
                </h4>

                <p className='mt-4 text-xs text-gray-500 sm:text-sm'>
                    {content.teacher}
                </p>

                <p className='mt-1 text-xs italic font-bold text-blue-600 sm:text-sm'>
                    {content.subject}
                </p>

                <p className='mt-0.5 text-xs text-gray-700 sm:text-sm'>
                
                </p>
            </div>
            
            <div className='absolute hidden text-2xl group-hover:block animate-ping bottom-6 right-6'>
                <FaExternalLinkAlt />
            </div>
        </div>
    );
}

export default ContentCard;