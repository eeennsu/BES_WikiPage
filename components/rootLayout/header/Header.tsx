import type { FC } from 'react';
import { headerNav } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import UserRegister from '../../home/UserRegister';
import NavItem from './NavItem';

const Header: FC = () => {

    return (
        <header className='sticky top-0 z-10 flex justify-center w-full h-20 shadow-sm bg-glassmorphism backdrop-blur-lg'>
            <div className='flex items-center justify-between w-full max-w-4xl px-10 sm:px-12'>
                <Link href='/'>
                    <Image 
                        src='/assets/images/codinghub.png'
                        alt='main logo'
                        className='object-contain bg-transparent'
                        width={90}
                        height={32}
                    />
                </Link>       

                <nav className='flex justify-between gap-9 items-center'>
                    <ul className='flex items-center gap-7 nav-effect'>
                        {
                            headerNav.map((nav) => (
                                <NavItem
                                    key={nav}
                                    nav={nav}
                                />
                            ))
                        }
                    </ul>
                    <span className='text-2xl font-normal cursor-default'>
                        |
                    </span>
                    <UserRegister />   
                </nav>     
            </div>   
        </header>
    );
}

export default Header;