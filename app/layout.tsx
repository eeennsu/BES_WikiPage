import type { NextPage, Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { Gothic_A1 } from "next/font/google";
import './globals.css';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';

const inter = Gothic_A1({ weight: '500', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Coding Hub',
    description: 'This page is Coding Hub Task Project made by eunsu',
}

const Layout: NextPage<PropsWithChildren> = ({ children }) => {

   return (
        <html>
            <body className={inter.className}>        
                <div className='flex flex-col min-h-dvh'>
                    <Header />
                    <div className='flex justify-center flex-1 bg-gradient-to-br from-white to-gray-200'>
                        <main className='w-full max-w-4xl'>
                            {children}
                        </main>
                    </div>
                    <Footer />                     
                </div>                                 
            </body>
        </html>
   );
};


export default Layout;