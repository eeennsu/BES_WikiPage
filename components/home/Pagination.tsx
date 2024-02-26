'use client';

import type { FC } from 'react';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

type Props = {
    curPage: number,
    totalPages: number,
    hasNext: boolean;
}

const Pagination: FC<Props> = ({ curPage, totalPages }) => {

    const pathname = usePathname();
    const router = useRouter();

    const maxVisiblePage = 5;                                               // 보여줄 페이지 버튼 개수 (5개)
    const diff = Math.floor((maxVisiblePage - 1) / 2);                      // 현재 페이지를 중심으로 양옆에 보여줄 버튼 2개

    let startPage = Math.max(1, curPage - diff);                            // 현재 페이지가 2 이하일땐 좌측 페이지 2개를 보여줄 수 없으므로
    const endPage = Math.min(totalPages, startPage + maxVisiblePage - 1);   // 마찬가지로 현재페이지가 마지막 페이지 -1 이상을 경우 우측 페이지 2개를 보여줄 수 없으므로
    
    // 현재 페이지를 중심으로 좌우 2개를 보여주는 숫자 배열
    const pagesToShow: number[] = useMemo(() => {

        // 페이지 수가 maxVisiblePage (=5개) 이하인 경우 있는 모든 버튼을 보여줌
        if (totalPages <= maxVisiblePage) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
    
        if (endPage === totalPages) {
            startPage = Math.max(1, totalPages - maxVisiblePage + 1);
        }
  
        return Array.from({ length: maxVisiblePage }, (_, i) => startPage + i);
    }, [curPage, totalPages]);

    const handleNavigation = (type: 'PREV' | 'NEXT') => {
        let nextPage = curPage;

        if (type === 'PREV') {
            nextPage = Math.max(0, curPage - 1);
        } else if (type === 'NEXT') {
            nextPage = curPage + 1;
        }

        pushRouter(nextPage);
    }

    const handlePage = (page: number) => {
        pushRouter(page);
    }

    const pushRouter = (nextPage: number) => {
        if (nextPage > 1) {
            router.push(`${pathname}?page=${nextPage}`, { scroll: false });
        } else {
            router.push(`${pathname}`, { scroll: false });
        }
    }

    return (
        <>
            <button 
                onClick={() => handleNavigation('PREV')} 
                disabled={curPage === 1}
                className='disabled:opacity-35'
            >
                <RiArrowLeftSLine className='text-2xl' />
            </button>  

            <div className='flex gap-2 mx-4'>
                {
                    pagesToShow.map((page) => (
                        <button 
                            key={page}
                            onClick={() => handlePage(page)}
                            className={`flex items-center justify-center rounded-md px-3 py-1.5 ${
                                page === curPage 
                                ? 'bg-blue-500 text-white dark:bg-white dark:text-black'
                                : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white active:bg-gray-200 dark:active:bg-gray-600'
                            }`}
                        >
                            {page}
                        </button>
                    ))
                }
            </div>

            <button
                onClick={() => handleNavigation('NEXT')}
                disabled={curPage === totalPages}
                className='disabled:opacity-35'
            >
                <RiArrowRightSLine className='text-2xl' />
            </button>
        </>
    );
}

export default Pagination;