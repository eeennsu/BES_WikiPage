'use client';               // 더미 메뉴, click 반응을 위해 잠시 client 컴포넌트

import type { FC } from 'react';
import { toast } from 'react-toastify';

type Props = {
    nav: string
}

const NavItem: FC<Props> = ({ nav }) => {

    return (
        <li className='cursor-pointer' onClick={() => toast.info('Sorry, This page is not completed yet.')}>
            {nav}
        </li>
    );
}

export default NavItem;