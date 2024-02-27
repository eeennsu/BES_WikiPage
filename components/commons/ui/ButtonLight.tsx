import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

type Props = {
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const ButtonLight: FC<PropsWithChildren<Props>> = ({ className, onClick, disabled, children, type = 'button' }) => {

    return (
        <button 
            className={`flex items-center justify-center gap-1.5 text-white border bg-black hover:bg-slate-800 transition-colors border-gray-300 outline-none font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-800 dark:hover:bg-slate-100 dark:hover:text-slate-900 dark:hover:font-semibold dark:hover:border-gray-600 dark:focus:ring-gray-700 shadow-lg hover:shadow-md ${className}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default ButtonLight;