import type { FC, PropsWithChildren } from 'react';

type Props = {
    className: string;
}

const Skeleton: FC<PropsWithChildren<Props>> = ({ className, children = null }) => {

    return (
        <div className={`bg-slate-300 animate-pulse rounded-md ${className}`}>
            {children}
        </div>
    );
}

export default Skeleton;