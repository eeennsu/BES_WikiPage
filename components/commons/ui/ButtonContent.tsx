import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

type Props = {
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    color?: 'BLUE' | 'RED' | 'GRAY';
}

const ButtonContent: FC<PropsWithChildren<Props>> = ({ className, onClick, children, disabled, color = 'BLUE', type = 'button' }) => {

    const _color = color === 'BLUE' 
        ? 'bg-blue-500 hover:bg-blue-400 active:bg-blue-500/65 text-white'
        : color === 'RED' 
        ? 'bg-red-400 hover:bg-red-500 active:bg-red-600 text-white'
        : 'bg-slate-600 hover:bg-slate-500 active:bg-slate-700 text-white'

    return (
        <button 
            className={`inline-flex items-center justify-center px-4 py-2 whitespace-nowrap text-sm font-medium border border-transparent rounded-md shadow-sm focus-visible:ring-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:shadow-lg ${_color} ${className}`} 
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ButtonContent;