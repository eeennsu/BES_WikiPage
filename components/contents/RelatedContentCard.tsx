import type { FC } from 'react';
import { PiChalkboardTeacher } from 'react-icons/pi';
// import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

type Props = {
    title: string;
    teacher: string;
}

const RelatedContentCard: FC<Props> = ({ title, teacher }) => {

    return (
        <div className='relative flex flex-col rounded-lg shadow-md tborder hover:shadow-xl'>
            <div className='p-4'>
                <h3 className='w-full text-sm font-bold line-clamp-2 underline-offset-4 hover:underline'>
                    {title}              
                </h3>
            </div>

            <figure className='relative w-full h-[120px]'>
                <Image
                    src='https://picsum.photos/seed/picsum/164/120'
                    fill
                    alt='Placeholder'                                    
                />               
            </figure>
            
            <p className='flex items-center justify-center gap-3 p-3.5 text-sm font-semibold'>
                <PiChalkboardTeacher className='text-2xl' />
                {teacher}
            </p>

            {/* <div className='absolute hidden text-2xl group-hover:block animate-ping bottom-4 right-4'>
                <FaExternalLinkAlt />
            </div> */}
        </div>
    );
}

export default RelatedContentCard;