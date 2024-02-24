import type { FC } from 'react';
import { snsLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import UserRegister from '../home/UserRegister';

const Header: FC = () => {

    return (
        <header className='sticky top-0 z-10 flex justify-center w-full h-20 shadow-sm bg-glassmorphism backdrop-blur-lg'>
            <div className='flex items-center justify-between w-full max-w-4xl px-10 sm:px-6'>
                <Link href='/'>
                    <Image 
                        src='/assets/images/codinghub.png'
                        alt='main logo'
                        className='object-contain bg-transparent'
                        width={90}
                        height={32}
                    />
                </Link>             
                <div className='flex items-center gap-12'>
                    <UserRegister />
                    <ul className='flex gap-4 text-xl'>
                        {
                            snsLinks.map((sns) => (
                                <li 
                                    key={sns.name} 
                                    className='transition hover:scale-[1.2] cursor-pointer rounded-full bg-blue-50 duration-300 p-1.5'
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
            </div>
   
        </header>
    );
}

export default Header;