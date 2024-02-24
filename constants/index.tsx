import { FaXTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";
import { FcHome, FcPhone, FcPrint  } from "react-icons/fc";

export const snsLinks = [
    {
        name: 'X',
        color: 'text-black',
        icon: <FaXTwitter />,
        url: '/'
    },
    {
        name: 'Instagram',
        color: 'text-red-400',
        icon: <FaInstagram />,
        url: '/'
    },
    {
        name: 'Youtube',
        color: 'text-red-600',
        icon: <FaYoutube />,
        url: '/'
    },
    {
        name: 'Facebook',
        color: 'text-blue-700',
        icon: <FaFacebook />,
        url: '/'
    }
];

export const footerLinks = [
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

export const footerInfos = [
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