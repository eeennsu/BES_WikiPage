import type { FC } from 'react';
import type { FooterInfo } from '@/constants';

type Props = {
    info: FooterInfo;
}

const FooterInfoItem: FC<Props> = ({ info }) => {

    return (
        <li>                                
            <span className='inline-flex w-20 gap-2 font-semibold'>    
                {info.icon}                                    
                {info.name} 
            </span>
            <span className='ml-4 text-xs'>
                {info.value}
            </span>
        </li>
    );
}

export default FooterInfoItem;