'use client';

import type { FC } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { headerNav } from '@/constants';

const MobileNav: FC = () => {

    return (
        <div className='relative block sm:hidden'>             
            <Menu as='div' className='relative inline-block text-left'>
                <Menu.Button className='mt-1.5'>
                    <HiMenuAlt2 className='flex items-center justify-center text-2xl dark:text-white' />
                </Menu.Button>
                
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black/35 min-h-dvh' />
                </Transition.Child>
                
                <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                >
                    <Menu.Items className='absolute flex flex-col origin-top-right bg-white divide-y rounded-md shadow-lg dark:bg-gray-500 w-44 -left-2 top-8 ring-1 ring-black/5 focus:outline-none'>
                        {
                            headerNav.map((nav) => (
                                <Menu.Item key={nav}>
                                    {({ active }) => (
                                        <button
                                            className={`w-full flex items-center px-[18px] py-[14px] first:rounded-t-md last:rounded-b-md ${
                                                active ? 'bg-blue-400 dark:bg-slate-200 dark:text-slate-900 text-white' : 'text-gray-900 dark:text-white'
                                             }`}
                                        >                                  
                                            {nav}
                                        </button>
                                    )}
                                </Menu.Item> 
                            ))
                        }             
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
 
export default MobileNav;