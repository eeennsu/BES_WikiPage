import type { FC } from 'react';
import { beforTimeFormat, priceFormat } from '@/lib/utils/util.format';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    content: ContentCardInfo;
}

const ContentCard: FC<Props> = ({ content }) => {
    
    return (    
        <div className='relative flex flex-col items-center bg-white rounded-t-lg rounded-b-sm drop-shadow-md group'>        
            <figure className='relative w-full h-[140px] overflow-hidden'>
                <Image 
                    src='https://picsum.photos/id/20/230/120'
                    alt='thumbnail'
                    className='transition-all duration-300 rounded-t-lg shadow-md group-hover:brightness-50'
                    fill
                />                
            </figure>         

            <Link href={`/contents/${content._id}`}                                           > 
                <div className='absolute left-0 right-0 h-[124px] p-[18px] text-black transition-all ease-in-out bg-white dark:bg-slate-600 top-28 rounded-b-lg rounded-tl-5xl overflow-hidden group-hover:top-[42px] group-hover:h-[194px] duration-500'>
                    <h4 className='h-8 dark:text-gray-200 dark:font-normal text-xs font-semibold line-clamp-2 hover:underline underline-offset-4'>
                        {content.title}      
                    </h4>

                    <div className='mt-6 overflow-hidden text-xs'>
                        <p className='tracking-wider text-gray-500 dark:text-white dark:font-normal'>
                            {content.teacher}
                        </p>

                        <div className='flex items-end justify-between mt-1 font-bold'>
                            {
                                content.price !== 0 ? (
                                    <p className='tracking-wider text-blue-600 dark:text-cyan-300 dark:font-normal'>
                                        &#8361;&nbsp;{priceFormat(content.price)}
                                    </p>
                                ) : (
                                    <p className='text-orange-400'>
                                        무료
                                    </p>
                                )
                            }

                            <p className='hidden pr-1 text-xs italic text-gray-500 group-hover:block dark:text-gray-200 dark:font-normal'>
                                {beforTimeFormat(content.createdAt)}
                            </p>
                        </div>
                    </div>
                    
                    <p className='mt-3 overflow-hidden font-light leading-4 text-gray-600 line-clamp-4 text-xxs dark:text-gray-200'>
                        {content.text}
                    </p>
                </div>    
            </Link>                
        </div>
    );
}

export default ContentCard;