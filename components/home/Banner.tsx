import type { FC } from 'react';
import { nanumGothic } from '@/app/layout';
import Link from 'next/link';

const Banner: FC = () => {

    return (
        <section className='w-full pt-52 pb-24'>
            <div className='container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
            <div className='space-y-6'>
                <h1 className='text-3xl font-bold sm:text-4xl md:text-5xl'>
                    기초와 실전 중심의 <br className='block sm:hidden' /> 온라인 코딩 강의
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed tracking-tight lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                    <span className={nanumGothic.className}>
                        이론뿐만 아니라 실전에서 바로 활용 가능한 코딩 스킬을 배우세요. 프로젝트와 함께 성장하는 즐거움을 느낄 수 있습니다!
                    </span>
                </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row justify-center'>
                <Link
                    className='inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                    href={'#courses'}
                >
                    Browse Courses
                </Link>             
                </div>
            </div>
        </section>
    );
}

export default Banner;