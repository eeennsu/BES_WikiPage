import type { NextPage } from 'next';
import Skeleton from '@/components/commons/ui/Skeleton';

const ContentsPageLoading: NextPage = () => {

    return (
        <div className='flex-1 w-full'>
            <Skeleton className='w-full h-16 mt-12' />
            <div className='flex flex-col items-center'>
                <Skeleton className='w-[600px] h-[300px] mt-14' />
                <Skeleton className='w-[830px] h-20 mt-6' />
            </div>
            <div className='grid justify-start grid-cols-2 gap-4 pb-10 mt-32 md:grid-cols-3 lg:grid-cols-4'>
                {
                    [...new Array(4)].map((_, i) => (
                        <Skeleton 
                            key={i}
                            className='w-[200px] h-[244px]' 
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default ContentsPageLoading;