import type { FC } from 'react';

type Props = {
    content: Content;
}

const ContentItem: FC<Props> = ({ content }) => {



    return (
        <div className='flex justify-between w-full p-2 bg-red-200'>
            <div>
                {content.title}
            </div>
        </div>
    );
}

export default ContentItem;