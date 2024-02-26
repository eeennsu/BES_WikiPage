import type { FC } from 'react';
import { footerInfos, footerLinks, snsLinks } from '@/constants';
import FooterInfoItem from './FooterInfoItem';
import FooterLinkItem from './FooterLinkItem';
import SNSMenuItem from '../header/SNSMenuItem';

const Footer: FC = () => {

    return (
        <footer className='flex justify-center py-4 bg-white sm:py-4'>
            <div className='flex flex-col w-full px-4 md:max-w-4xl xl:max-w-5xl sm:justify-center lg:gap-24 xl:gap-40 max-sm:px-6 sm:flex-row'>       
                <div className='items-center hidden sm:flex'>
                    <div className='flex flex-col gap-2 text-sm'>
                        {
                            footerInfos.map((info) => (
                                <FooterInfoItem
                                    key={info.name}
                                    info={info}
                                />
                            ))
                        }
                    </div>
                </div>               
                
                <div className='flex flex-col items-center justify-center gap-4'>
                    <ul className='flex text-xl gap-7 sm:gap-5'>
                        {
                            snsLinks.map((sns) => (
                                <SNSMenuItem 
                                    key={sns.name}
                                    sns={sns}
                                />
                            ))
                        }
                    </ul> 
                    
                    <ul className='flex justify-center gap-6 sm:flex-row'>
                        {
                            footerLinks.map((link) => (
                                <FooterLinkItem 
                                    key={link.name}
                                    link={link}
                                />
                            ))
                        }
                    </ul>            
                </div>           
            </div>           
        </footer>
    );
}

export default Footer;