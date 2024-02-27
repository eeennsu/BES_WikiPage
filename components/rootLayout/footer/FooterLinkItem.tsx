import type { FC } from 'react';
import type { FooterLink } from '@/constants';
import Link from 'next/link';

type Props = {
    link: FooterLink;
}

const FooterLinkItem: FC<Props> = ({ link }) => {

    return (
        <li>
            <Link 
                href={link.url} 
                className='text-xs font-semibold text-gray-700 dark:text-slate-200 dark:font-normal whitespace-nowrap hover:underline underline-offset-4'
            >
                {link.name} 
            </Link>
        </li>
    );
}

export default FooterLinkItem;