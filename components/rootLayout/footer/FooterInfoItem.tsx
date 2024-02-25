import type { FC } from 'react';
import type { FooterInfo } from '@/constants';

type Props = {
    info: FooterInfo;
}

const FooterInfoItem: FC<Props> = ({ info }) => {

    return (
        <div className='flex items-center sm:grid sm:grid-cols-5 max-sm:gap-2'>                                
            <p className='flex gap-2.5 sm:col-span-1'>    
                {info.icon}                                    
                <span className='max-sm:hidden'>
                    {info.name} 
                </span>
            </p>
            <p className='text-xs font-semibold sm:col-span-4'>
                {info.value}
            </p>
        </div>
    );
}

export default FooterInfoItem;