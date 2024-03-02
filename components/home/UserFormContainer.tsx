import type { FC, FormEvent, PropsWithChildren } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import useModal from '@/lib/hooks/useModal';

type Props = {
    title: string;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const UserFormContainer: FC<PropsWithChildren<Props>> = ({ title, handleSubmit, children, }) => {

    const { closeModal } = useModal();

    return (
        <>
            <div className='relative'>
                <h3 className='p-3 text-xl font-semibold leading-6 text-center text-gray-900'> 
                    {title}
                </h3>
                <div className='sm:hidden absolute -top-2.5 -right-2.5'>      
                    <button onClick={closeModal}>
                        <IoCloseOutline className='text-2xl text-gray-600 hover:text-black' />
                    </button>
                </div>

                <form 
                    className='mx-auto border rounded-lg shadow-sm sm:min-w-[370px] mt-2 sm:mt-4' 
                    onSubmit={handleSubmit}
                >     
                    {children}
                </form>
            </div>
        </>
    );
}

export default UserFormContainer;