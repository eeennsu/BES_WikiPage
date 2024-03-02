import type { FC } from 'react';
import { headerNav } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import UserRegister from '../../home/UserRegister';
import NavItem from './NavItem';
import MobileNav from './MobileNav';

const Header: FC = () => {

    return (
        <header className='sticky top-0 z-10 flex justify-center w-full h-[68px] sm:h-20 shadow-md sm:shadow-sm bg-glassmorphism dark:bg-slate-600 dark:shadow-lg backdrop-blur-lg'>
            <div className='flex items-center justify-between w-full px-10 max-w-7xl xl:max-w-[1260px]'>
                <MobileNav /> 

                <Link
                    href='/'
                    className='p-2 dark:bg-white dark:rounded-md'
                >
                    <Image 
                        src='/assets/images/codinghub.png'
                        alt='main logo'
                        className='object-contain bg-transparent'
                        width={90}
                        height={32}
                    />
                </Link>       

                <div className='flex items-center justify-between gap-9'>
                    <nav className='max-sm:hidden'>
                        <ul className='flex items-center gap-7 custom-nav'>
                            {
                                headerNav.map((nav) => (
                                    <NavItem
                                        key={nav}
                                        nav={nav}
                                    />
                                ))
                            }
                        </ul>                           
                    </nav>     

                    <span className='text-2xl font-normal cursor-default max-sm:hidden dark:text-white'>
                        |
                    </span>  
                 
                    <UserRegister /> 
                </div>  
            </div>   
        </header>
    );
}

export default Header;