import type { FC } from 'react';
import { footerInfos, footerLinks } from '@/constants';
import Link from 'next/link';

const Footer: FC = () => {

    return (
        <footer className='flex justify-center py-6 bg-slate-100'>
            <div className='flex justify-center w-full max-w-5xl gap-24 px-10 sm:px-6'>
                <div className='flex items-center'>
                    <ul className='flex flex-col gap-1 text-sm'>
                        {
                            footerInfos.map((info) => (
                                <li key={info.name}>                                
                                    <span className='inline-flex w-20 gap-2'>    
                                        {info.icon}                                    
                                        {info.name} 
                                    </span>
                                    <span className='ml-4 text-xs'>
                                        {info.value}
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    <ul className='flex justify-center gap-6'>
                        {
                            footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.url} className='text-xs font-semibold text-gray-700 hover:underline underline-offset-4'>
                                        {link.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>            
                </div>           
            </div>           
        </footer>
    );
}

export default Footer;