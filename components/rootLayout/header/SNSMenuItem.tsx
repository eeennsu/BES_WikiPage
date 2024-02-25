import type { FC } from 'react';
import type { SNSMenu } from '@/constants';
import Link from 'next/link';

type Props = {
    sns: SNSMenu;
}

const SNSMenuItem: FC<Props> = ({ sns }) => {

    return (
        <li className='transition hover:scale-[1.35] cursor-pointer rounded-full bg-sky-200/50 duration-300 p-1.5'>                                    
            <Link 
                className={sns.color} 
                href={sns.url}
            >
                {sns.icon}
            </Link>
        </li>
    );
}

export default SNSMenuItem;