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
            className={`flex items-center justify-center gap-1.5 text-gray-900 border border-gray-300 outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 shadow-sm hover:shadow-md ${className}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default ButtonLight;