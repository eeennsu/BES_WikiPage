import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

type Props = {
    onClick?: () => void;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    color?: 'BLUE' | 'ORANGE';
}

const Button: FC<PropsWithChildren<Props>> = ({ onClick, children, type = 'button', color = 'BLUE' }) => {

    const _color = color === 'BLUE'
        ? 'bg-blue-500 hover:bg-blue-500/80 active:bg-blue-600'
        : 'bg-orange-400 hover:bg-white hover:border-2 hover:border-orange-500 hover:text-orange-500 border-2 border-orange-400';

    return (
        <button 
            className={`inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white transition-colors rounded-md whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${_color}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
}

export default Button;