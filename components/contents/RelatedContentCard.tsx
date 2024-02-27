import type { FC } from 'react';
import { priceFormat } from '@/lib/utils/util.format';
import Image from 'next/image';

type Props = {
    title: string;
    price?: string;
}

const RelatedContentCard: FC<Props> = ({ title, price }) => {

    return (
        <div className='flex flex-col items-center justify-start bg-white rounded-md dark:bg-gray-200 rounded-t-md drop-shadow-md group'>        
            <figure className='relative w-full h-[120px] overflow-hidden'>
                <Image 
                    src={'https://picsum.photos/seed/picsum/200/120'}
                    alt='thumbnail'
                    className='transition duration-500 rounded-t-md  shadow-md group-hover:scale-[1.15]'
                    fill
                />                
            </figure>         

            <div className='w-full p-4'>
                <h4 className='h-8 text-xs font-semibold sm:h-10 sm:text-sm line-clamp-2 hover:underline underline-offset-4'>
                    {title}  
                </h4>

                <p className='mt-3 text-xs font-semibold text-right'>
                    {
                        price ? (
                            <span className='tracking-wider text-blue-600'>
                                &#8361;&nbsp;{priceFormat(price)}
                            </span>
                        ) : (
                            <span className='text-orange-400'>
                                무료
                            </span>
                        )
                    }
                </p>
            </div>         
        </div>
    );
}

export default RelatedContentCard;