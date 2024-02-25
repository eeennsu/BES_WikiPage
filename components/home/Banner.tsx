import type { FC } from 'react';
import { nanumGothic } from '@/app/layout';

const Banner: FC = () => {

    return (
        <section className='w-full pb-10 sm:pb-24 pt-36'>
            <div className='container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
                <div className='space-y-8'>
                    <h1 className='text-3xl font-bold sm:text-4xl md:text-5xl'>
                        기초와 실전 중심의 <br className='block sm:hidden' /> 온라인 코딩 강의
                    </h1>
                    <p className='mx-auto max-w-[700px] text-slate-900 md:text-xl/relaxed tracking-tight lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                        <span className={nanumGothic.className}>
                            이론뿐만 아니라 실전에서 바로 활용 가능한 코딩 스킬을 배우세요. <br /> 프로젝트와 함께 성장하는 즐거움을 느낄 수 있습니다!
                        </span>
                    </p>
                </div>
                {/* <div className='flex flex-col gap-2 min-[400px]:flex-row justify-center'>
                    <ButtonContent>
                        <Link href='#courses'>
                            Browse Courses
                        </Link>     
                    </ButtonContent>            
                </div> */}
            </div>
        </section>
    );
}

export default Banner;