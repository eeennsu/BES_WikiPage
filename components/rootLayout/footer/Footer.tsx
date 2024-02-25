import type { FC } from 'react';
import { footerInfos, footerLinks, snsLinks } from '@/constants';
import FooterInfoItem from './FooterInfoItem';
import FooterLinkItem from './FooterLinkItem';
import SNSMenuItem from '../header/SNSMenuItem';

const Footer: FC = () => {

    return (
        <footer className='flex justify-center py-4 sm:py-6 bg-white'>
            <div className='flex flex-col justify-center w-full max-w-5xl gap-4 px-6 sm:gap-24 sm:flex-row sm:px-6'>
                <div className='flex items-center'>
                    <ul className='flex flex-col gap-1 text-sm'>
                        {
                            footerInfos.map((info) => (
                                <FooterInfoItem
                                    key={info.name}
                                    info={info}
                                />
                            ))
                        }
                    </ul>
                </div>
                
                <div className='flex flex-col items-center justify-center gap-4'>
                    <ul className='flex gap-4 text-xl'>
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