import type { FC } from 'react';
import type { FooterInfo } from '@/constants';

type Props = {
    info: FooterInfo;
}

const FooterInfoItem: FC<Props> = ({ info }) => {

    return (
        <li className='flex items-center sm:grid sm:grid-cols-4 md:grid-cols-5 max-lg:gap-4'>                                
            <p className='flex gap-2.5 sm:col-span-1'>    
                {info.icon}                                    
                <span className='max-sm:hidden'>
                    {info.name} 
                </span>
            </p>
            <p className='text-xs font-semibold dark:font-normal sm:col-span-3 md:col-span-4 max-lg:max-w-[270px] xl:whitespace-nowrap'>
                {info.value}
            </p>
        </li>
    );
}

export default FooterInfoItem;