import { FcHome, FcPhone, FcPrint } from 'react-icons/fc';

export type SNSMenu = {
    name: string;
    url: string;
    iconSrc: string;
}

export const snsLinks: SNSMenu[] = [
    {
        name: 'Instagram',
        url: '/',
        iconSrc: '/assets/icons/instagram.svg'
    },
    {
        name: 'Youtube',
        url: '/',
        iconSrc: '/assets/icons/youtube.svg'
    },
    {
        name: 'Facebook',
        url: '/',
        iconSrc: '/assets/icons/facebook.svg'
    }
];

export type FooterLink = {
    name: string;
    url: string;
}

export const footerLinks: FooterLink[] = [
    {
        name: '이용약관',
        url: '/'
    },
    {
        name: '개인정보 처리방침',
        url: '/'
    },
    {
        name: '문의하기',
        url: '/'
    }
];

export type FooterInfo = {
    name: string;
    value: string;
    icon: JSX.Element;
}

export const footerInfos: FooterInfo[] = [
    {
        name: 'Address',
        value: '서울 금천구 가산디지털1로 168 (가산동, 우림라이온스밸리) B동 1206호 코딩허브',
        icon: <FcHome />
    },
    {
        name: 'Phone',
        value: '(02) 1111-1111',
        icon: <FcPhone />
    },
    {
        name: 'Fax',
        value: '(02) 2222-2222',
        icon: <FcPrint />
    }
];

export const selectSubjects = ['HTML & CSS', 'JavaScript', 'Python', 'React.js', 'Next.js', 'Vue.js', 'Java', 'C', 'C++', 'C#', 'Spring boot'];

export const headerNav = [ 'About', 'Community', 'FAQ'];