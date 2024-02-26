import type { FC } from 'react';
import { beforTimeFormat, priceFormat } from '@/lib/utils/util.format';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    content: ContentCardInfo;
}

const ContentCard: FC<Props> = ({ content }) => {
   
    return (    
        <div className='relative flex flex-col items-center bg-white rounded-md rounded-t-lg drop-shadow-md group'>        
            <figure className='relative w-full h-[140px] overflow-hidden'>
                <Image 
                    src={'https://picsum.photos/seed/picsum/230/120'}
                    alt={'thumbnail'}
                    className='transition-all duration-300 shadow-md rounded-t-xl group-hover:brightness-50'
                    fill
                />                
            </figure>         

            <Link
                href={`/contents/${content._id}`}                                           
                className='text-xs font-semibold line-clamp-2 hover:underline underline-offset-4'
            > 
                <div className='absolute left-0 right-0 h-[124px] p-[18px] text-black transition-all bg-white top-28 rounded-b-lg rounded-tl-4xl overflow-hidden group-hover:top-[42px] group-hover:h-[194px]'>
                    <h4 className='h-8 line-clamp-2'>
                        {content.title}      
                    </h4>

                    <div className='mt-6 overflow-hidden text-xs'>
                        <p className='text-gray-500'>
                            {content.teacher}
                        </p>

                        <div className='flex items-end justify-between mt-1 font-bold'>
                            {
                                content?.price ? (
                                    <p className='tracking-wider text-blue-600'>
                                        &#8361;&nbsp;{priceFormat(content.price)}
                                    </p>
                                ) : (
                                    <p className='text-orange-400'>
                                        무료
                                    </p>
                                )
                            }

                            <p className='hidden pr-1 text-xs italic text-gray-500 group-hover:block'>
                                {beforTimeFormat(content.createdAt)}
                            </p>
                        </div>
                    </div>
                    
                    <p className='mt-3 overflow-hidden font-light leading-4 text-gray-600 line-clamp-4 text-xxs'>
                        {content.text}
                    </p>
                </div>    
            </Link>                
        </div>
    );
}

export default ContentCard;