'use client';

import type { FC } from 'react';
import { useEffect } from 'react';
import ErrorPage from '@/components/commons/ErrorPage';

type Props = {
    error: Error;
    reset: () => void;
}

const DetailContentError: FC<Props> = ({ error, reset }) => {

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className='flex items-center justify-center w-full'>
            <ErrorPage 
                reset={reset}
            />
        </div>
    );
}

export default DetailContentError;