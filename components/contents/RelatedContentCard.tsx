import type { FC } from 'react';
import { PiChalkboardTeacher } from 'react-icons/pi';
import Image from 'next/image';

type Props = {
    contentId: string;
    title: string;
    teacher: string;
}

const RelatedContentCard: FC<Props> = ({ contentId, title, teacher }) => {

    return (
        <div className='flex flex-col border rounded-lg shadow-md hover:shadow-xl'>
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
        </div>
    );
}

export default RelatedContentCard;