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

export const priceFormat = (price: number | string) => {
    
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}