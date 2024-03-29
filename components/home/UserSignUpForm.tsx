'use client';

import type { FC, PropsWithChildren } from 'react';
import { useState } from 'react';
import { UserForm, UserFormSchema } from '@/lib/validation/user.validation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSignUp } from '@/lib/actions/user.action';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { toast } from 'react-toastify';
import useModal from '@/lib/hooks/useModal';
import Button from '../commons/ui/Button';
import UserLoginForm from './UserLoginForm';
import UserFormContainer from './UserFormContainer';

const UserSignUpForm: FC = () => {

    const { closeModal, openModal } = useModal();

    const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

    const { handleSubmit, register, formState: { errors }, getValues } = useForm<UserForm>({
        resolver: zodResolver(UserFormSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const handleSignUp = async () => {

        const { email, password } = getValues();

        setIsSubmiting(true);

        try {
            const response = await userSignUp({
                email,
                password
            });

            if (response) {
                toast.success('회원가입에 성공하였습니다');              
                openModal(<UserLoginForm />, 'max-w-max');
            } else {
                toast.error('이미 존재하는 아이디이거나 알 수 없는 이유로 회원가입에 실패하였습니다.');
            }

        } catch(error) {
            console.log(error);
            toast.error('알 수 없는 이유로 회원가입에 실패하였습니다');
        } finally {
            setIsSubmiting(false);
        }
    }

    return (
        <>
            <UserFormContainer
                title='회원가입'
                handleSubmit={handleSubmit(handleSignUp)}
            >
                <div className='p-6 sm:p-8'>                
                    <div className='flex flex-col gap-8'>
                        <div className='space-y-1'>
                            <label
                                className='text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                htmlFor='email'                                
                            >
                                이메일
                            </label>
                            <input
                                className='flex w-full h-10 px-3 py-2 text-sm border rounded-lg border-slate-300 file:bg-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                                id='email'
                                placeholder='name@example.com'               
                                type='email'
                                {...register('email')}
                            />
                            {
                                errors.email && (
                                    <WarningMessage>
                                        {errors.email.message}
                                    </WarningMessage>
                                )
                            }     
                        </div>                                  
           
                        <div className='space-y-1'>
                            <div className='flex items-center'>
                                <label
                                    className='text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                    htmlFor='name'
                                >
                                    비밀번호
                                </label>                     
                            </div>
                            <input
                                className='flex w-full h-10 px-3 py-2 text-sm border rounded-lg border-slate-300 file:bg-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                                id='name'          
                                type='password'
                                {...register('password')}
                            />
                            {
                                errors.password && (
                                    <WarningMessage>
                                        {errors.password.message}
                                    </WarningMessage>
                                )
                            }     
                        </div>

                        <div className='space-y-1'>
                            <div className='flex items-center'>
                                <label
                                    className='text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                    htmlFor='password'
                                >
                                    비밀번호 확인
                                </label>                     
                            </div>
                            <input
                                className='flex w-full h-10 px-3 py-2 text-sm border rounded-lg border-slate-300 file:bg-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                                id='password'          
                                type='password'
                                {...register('confirmPassword')}
                            />
                            {
                                errors.confirmPassword && (
                                    <p role='alert' className='text-xs text-red-400'>
                                        {errors.confirmPassword.message}
                                    </p>
                                )
                            }    
                        </div>

                        <div className='flex w-full gap-4 sm:flex-row flex-col'>
                            <div className='flex-[0.7]'>
                                <Button 
                                    type='submit' 
                                    disabled={isSubmiting}           
                                    className='max-sm:text-xs'
                                >
                                    {
                                        isSubmiting ? (
                                            <AiOutlineLoading3Quarters className='text-xl animate-spin' />                                        
                                        ) : '회원가입'
                                    }
                                </Button>
                            </div>     
                            <div className='flex-[0.3] hidden sm:block'>
                                <Button 
                                    onClick={closeModal} 
                                    color='ORANGE'
                                    disabled={isSubmiting}
                                    className='max-sm:text-xs'
                                >
                                    뒤로가기
                                </Button>
                            </div>
                        </div>                 
                    </div>             
                </div>
            </UserFormContainer>
        </>
    );
}

export default UserSignUpForm;



const WarningMessage: FC<PropsWithChildren> = ({ children }) => (
    <p role='alert' className='text-xs text-red-400'>
        {children}
    </p>
)