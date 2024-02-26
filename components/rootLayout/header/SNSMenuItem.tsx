import type { FC } from 'react';
import type { SNSMenu } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    sns: SNSMenu;
}

const SNSMenuItem: FC<Props> = ({ sns }) => {

    return (
        <li className='transition hover:scale-[1.35] cursor-pointer flex items-center justify-center rounded-full bg-white shadow-md duration-300 p-2 sm:p-1.5'>                                    
            <Link href={sns.url}>
                <Image 
                    src={sns.iconSrc}
                    alt={sns.name}
                    width={26}
                    height={26}
                />
            </Link>
        </li>
    );
}

export default SNSMenuItem;