'use client';

import type { FC, PropsWithChildren } from 'react';
import { useState } from 'react';
import { UserForm, UserFormSchema } from '@/lib/validation/user.validation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from './ui/Button';
import useModal from '@/lib/hooks/useModal';
import { userLogin, userSignUp } from '@/lib/actions/user.action';

type Props = {
    type: 'SIGN_UP' | 'LOGIN'
}

const UserFormTemplate: FC<Props> = ({ type }) => {

    const { closeModal } = useModal();

    const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

    const { handleSubmit, register, formState: { errors }, getValues } = useForm<UserForm>({
        resolver: zodResolver(UserFormSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const handleRegister = async (isSignUp: boolean) => {
        const { email, password } = getValues();

        setIsSubmiting(true);

        try {
            if (isSignUp) {
                await userSignUp({
                    email,
                    password
                });
            } else {
                await userLogin({
                    email,
                    password
                });
            }

        } catch(err) {
            console.log(err);
        }finally {
            setIsSubmiting(false);
        }
    }
    
    const handleLogin = () => {
        
    }

    return (
        <>
            <h3 className='p-3 text-xl font-semibold leading-6 text-center text-gray-900'> 
                {
                    type === 'SIGN_UP' 
                        ? 'Sign Up'
                        : 'Login'
                }
            </h3>
            <form 
                className='mx-auto border rounded-lg shadow-sm min-w-[360px] mt-4' 
                onSubmit={handleSubmit(() => handleRegister(type === 'SIGN_UP'))}
            >     
                <div className='p-8'>
                
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

                        <div className='flex w-full gap-4'>
                            <div className='flex-[0.7]'>
                                <Button type='submit'>
                                    {
                                        type === 'SIGN_UP' 
                                            ? '회원가입'
                                            : '로그인'
                                    }
                                </Button>
                            </div>     
                            <div className='flex-[0.3]'>
                                <Button 
                                    onClick={closeModal} 
                                    color='ORANGE'
                                >
                                    뒤로가기
                                </Button>
                            </div>
                        </div>                 
                    </div>             
                </div>
            </form>
        </>
    );
}

export default UserFormTemplate;



const WarningMessage: FC<PropsWithChildren> = ({ children }) => (
    <p role='alert' className='text-xs text-red-400'>
        {children}
    </p>
)