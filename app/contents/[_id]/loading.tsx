import type { NextPage } from 'next';
import Skeleton from '@/components/commons/ui/Skeleton';

const ContentsPageLoading: NextPage = () => {

    return (
        <div className='flex-1 w-full'>
            <Skeleton className='w-full h-16 mt-12' />
            <div className='flex flex-col items-center'>
                <Skeleton className='max-w-[780px] w-full h-[450px] mt-8' />
                <Skeleton className='max-w-[816px] w-full h-20 mt-6' />
            </div>
            <div className='grid grid-cols-2 gap-4 pb-10 mt-32 md:grid-cols-3 lg:grid-cols-4'>
                {
                    [...new Array(4)].map((_, i) => (
                        <Skeleton 
                            key={i}
                            className='max-w-[200px] w-full h-[244px]' 
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default ContentsPageLoading;