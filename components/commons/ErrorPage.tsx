import type { FC } from 'react';
import ButtonLight from './ui/ButtonLight';
import Link from 'next/link';
import Button from './ui/Button';

type Props = {
    errMsg?: string;
    reset: () => void;
}

const ErrorPage: FC<Props> = ({ errMsg, reset }) => {
    
    console.error(errMsg);

    return (
        <div className='flex flex-col w-full max-w-2xl gap-5 px-8 py-10 space-y-8 bg-white dark:bg-transparent rounded-xl'>
            <div className='flex flex-col gap-8'>
                <h2 className='text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100'>
                    죄송합니다! 문제가 발생했습니다.
                </h2>
                <p className='p-1 text-xs text-center text-red-500 dark:font-semibold'>
                    죄송합니다! 웹사이트에 문제가 발생했습니다. 브라우저를 새로고침해보시거나 잠시 후에 다시 시도해주세요. <br /> 계속해서 문제가 발생하면 고객 지원팀에 문의해주시면 신속히 도움을 드리겠습니다. 불편을 끼쳐드려 죄송합니다.
                </p>
            </div>
            <div className='flex flex-col items-center gap-4 p-5 dark:bg-slate-700 dark:rounded-2xl'>
                <ButtonLight 
                    className='w-full' 
                    onClick={() => reset()}
                >
                    Retry
                </ButtonLight>
                <Button color='ORANGE'>
                    <Link href='/'>
                        Go Back to Home
                    </Link>
                </Button>
            </div>
        </div>     
    );
}

export default ErrorPage;