// UTC 날짜를 **년 **월 **일로 변환시켜주는 포맷함수
export const dateFormat = (dateString: string) => {
    const date = new Date(dateString);

    const format = new Intl.DateTimeFormat(
        'ko-KR',
        {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }
    ).format(date);

    return format;
}

// UTC 날짜를 *분 전, *주 전 등의 형태로 변환시켜주는 포맷함수
export const beforTimeFormat = (dateString: string): string => {
    const startDate = new Date(dateString);
    const now = new Date();

    const diff = now.getTime() - startDate.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 30);
    const years = Math.floor(months / 365);

    if (seconds < 60) {
        return '방금 전';

    } else if (minutes < 60) {
        return `${minutes}분 전`;

    } else if (hours < 24) {
        return `${hours}시간 전`;

    } else if (days < 7) {
        return `${days}일 전`;

    } else if (weeks < 4) {
        return `${weeks} 주 전`;

    } else if (months < 12) {
        return `${months}달 전`;
        
    } else {        
        return `${years}년 전`;        
    }
}

// 가격 세자릿수 콤마 포맷 함수
export const priceFormat = (price: number | string) => {
    
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}