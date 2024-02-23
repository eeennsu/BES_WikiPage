import type { FC } from 'react';
import { snsLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Header: FC = () => {

    return (
        <header className='flex justify-center w-full h-20 bg-white shadow-md'>
            <div className='flex items-center justify-between w-full max-w-3xl px-10 sm:px-6'>
                <Link href='/'>
                    <Image 
                        src='/assets/images/codinghub.png'
                        alt='main logo'
                        className='bg-transparent'
                        width={90}
                        height={90}
                    />
                </Link>             
                <ul className='flex gap-5 text-xl'>
                    {
                        snsLinks.map((sns) => (
                            <li 
                                key={sns.name} 
                                className='transition hover:scale-[1.2] rounded-full bg-gray-100 p-1.5'
                            >                                    
                                <Link 
                                    className={sns.color} 
                                    href={sns.url}
                                >
                                    {sns.icon}
                                </Link>
                            </li>
                        ))
                    }
                </ul>            
            </div>
        </header>
    );
}

export default Header;