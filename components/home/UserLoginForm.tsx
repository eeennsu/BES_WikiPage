'use client';

import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import { userLogin } from '@/lib/actions/user.action';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { toast } from 'react-toastify';
import useModal from '@/lib/hooks/useModal';
import Button from '../commons/ui/Button';
import useUserStore from '@/zustand/user/useUserStore';
import UserSignUpForm from './UserSignUpForm';

const UserLoginForm: FC = () => {

    const { closeModal, openModal } = useModal();
    const setIsLogin = useUserStore(state => state.setIsLogin);
    const setUserInfo = useUserStore(state => state.setUserInfo);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password.length < 9) {
            toast.info('비밀번호를 9자 이상 입력해주세요');
            return;
        }
        
        setIsSubmiting(true);

        try {           
            const response = await userLogin({
                email,
                password
            });
       
            if (response) {
                toast.success('로그인에 성공하였습니다!');      
                closeModal();
                setIsLogin(true);
                setUserInfo(response);  

            } else {
                toast.error('로그인에 실패하였습니다.');
            }

        } catch(err) {
            console.log(err);
            toast.error('알 수 없는 이유로 로그인에 실패하였습니다');
            
        } finally {
            setIsSubmiting(false);
        }
    }

    const formChange = () => {
        openModal(<UserSignUpForm />);
    }

    return (
        <>
            <h3 className='p-3 text-xl font-semibold leading-6 text-center text-gray-900'> 
                Login
            </h3>
            <form 
                className='mx-auto border rounded-lg shadow-sm min-w-[360px] mt-4' 
                onSubmit={handleLogin}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />                        
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
                                required      
                                value={password}    
                                onChange={(e) => setPassword(e.target.value)}
                                min={9}
                                max={20}           
                            />                   
                        </div>                      

                        <div className='flex w-full gap-4'>
                            <div className='flex-[0.7]'>
                                <Button 
                                    type='submit' 
                                    disabled={isSubmiting}
                                >
                                    {
                                        isSubmiting ? (
                                            <AiOutlineLoading3Quarters className='text-xl animate-spin' />                                        
                                        ) : (
                                            '로그인'
                                        )
                                    }
                                </Button>
                            </div>     
                            <div className='flex-[0.3]'>
                                <Button 
                                    onClick={closeModal} 
                                    color='ORANGE'
                                    disabled={isSubmiting}
                                >
                                    뒤로가기
                                </Button>
                            </div>
                        </div>  
                        <p className='text-xs text-center cursor-pointer' onClick={formChange}>
                            신규 유저이신가요? &nbsp; <span className='underline underline-offset-2'>회원가입</span>
                        </p>            
                    </div>             
                </div>
            </form>
        </>
    );
}

export default UserLoginForm;