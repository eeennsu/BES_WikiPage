import type { NextPage, Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Gothic_A1 } from "next/font/google";
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import Modal from '@/components/commons/ui/Modal';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

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
                    <div className='relative flex justify-center flex-1 main-bg-color'>
                        <div className='absolute w-full top-16 -z-10' />
                        <main className='w-full max-w-2xl'>
                            <Suspense fallback={<MainPageLoading />}>
                                {children}
                            </Suspense>
                        </main>
                    </div>
                    <Footer />
                    <Modal />
                    <ToastContainer 
                        position='top-center' 
                        hideProgressBar 
                        style={{ width: 'fit-content', fontSize: 14 }} 
                        autoClose={3000}
                    />
                </div>                                 
            </body>
        </html>
    );
};

export default Layout;



const MainPageLoading: NextPage = () => {

    return (
        <div className='text-6xl text-red-600'>
            MainPageLoading
        </div>
    );
};