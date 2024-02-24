import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

type Props = {
    onClick: () => void;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    color?: 'BLUE' | 'RED';
}

const ButtonContent: FC<PropsWithChildren<Props>> = ({ type, onClick, children, color = 'BLUE' }) => {

    const _color = color === 'BLUE' 
        ? 'bg-red-100 hover:bg-red-200  active:bg-red-300'
        : 'bg-blue-100 hover:bg-blue-200 active:bg-blue-300'; 

    return (
        <button 
            className={`inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 border border-transparent rounded-md shadow-sm focus-visible:ring-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:shadow-lg ${_color}`} 
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ButtonContent;