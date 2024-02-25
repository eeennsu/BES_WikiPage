import type { FC } from 'react';
import { PiChalkboardTeacher } from 'react-icons/pi';
import Image from 'next/image';

type Props = {
    title: string;
    teacher: string;
}

const RelatedContentCard: FC<Props> = ({ title, teacher }) => {

    return (
        <div className='flex flex-col border rounded-lg shadow-md hover:shadow-xl'>
            <div className='p-4'>
                <h3 className='w-full text-xs font-medium line-clamp-2 max-w-32'>
                    {title}
                </h3>
            </div>
            <figure>
                <Image
                    src='https://picsum.photos/seed/picsum/164/124'
                    width={164}
                    height={120}
                    alt='Placeholder'
                    className=''                    
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