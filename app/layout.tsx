import type { NextPage, Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Gothic_A1, Nanum_Gothic_Coding } from "next/font/google";
import Footer from '@/components/rootLayout/footer/Footer';
import Header from '@/components/rootLayout/header/Header';
import Modal from '@/components/commons/ui/Modal';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

export const gothicA1 = Gothic_A1({ weight: '400', subsets: ['latin'] });
export const nanumGothic = Nanum_Gothic_Coding({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Coding Hub',
    description: 'This page is Coding Hub Task Project made by eunsu',
}

const Layout: NextPage<PropsWithChildren> = ({ children }) => {

   return (
        <html>
            <body className={gothicA1.className}>        
                <div className='flex flex-col min-h-dvh'>                 
                    <Header />
                    <div className='relative flex justify-center flex-1'>                                
                        {children}            
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