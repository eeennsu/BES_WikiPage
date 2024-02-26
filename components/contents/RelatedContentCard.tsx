import type { FC } from 'react';
import Image from 'next/image';

type Props = {
    title: string;
    teacher: string;
}

const RelatedContentCard: FC<Props> = ({ title, teacher }) => {

    return (
        <div className='flex flex-col items-center justify-start bg-white rounded-md rounded-t-md drop-shadow-md group'>        
            <figure className='relative w-full h-[120px] overflow-hidden'>
                <Image 
                    src={'https://picsum.photos/seed/picsum/200/120'}
                    alt={'thumbnail'}
                    className='transition duration-500 rounded-t-md  shadow-md group-hover:scale-[1.15]'
                    fill
                />                
            </figure>         

            <div className='w-full p-4'>
                <h4 className='h-8 text-xs font-semibold sm:h-10 sm:text-sm line-clamp-2 hover:underline underline-offset-4'>
                    {title}  
                </h4>

                <p className='mt-4 text-xs text-gray-500 sm:text-sm'>
                    {teacher}
                </p>
            </div>         
        </div>
    );
}

export default RelatedContentCard;