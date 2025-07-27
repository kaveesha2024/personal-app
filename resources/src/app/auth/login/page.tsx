'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { MdEmail, MdLock } from 'react-icons/md';
import Link from 'next/link';
import { loginInputFields } from '@/constants/auth/login';
import { ILoginDetailsType, ILoginInputFieldType } from '@/types/auth/auth';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import WelcomeSection from '@/layouts/auth/WelcomeSection';
import toast from 'react-hot-toast';
import loginApi from '@/apiCalls/auth/loginApi';
import sweet from 'sweetalert2';

const Page: React.FC = () => {
    const route: AppRouterInstance = useRouter();
    const [loginDetails, setLoginDetails] = useState<ILoginDetailsType>({
        email: '',
        password: '',
    });
    const handleRegisterInputField = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setLoginDetails((prevState: ILoginDetailsType) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const login = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        const { email, password } = loginDetails;
        if (!email || !password) {
            toast.error('Please fill all the fields');
            return;
        }
        sweet.showLoading();
        try {
            const response = await loginApi(loginDetails);
            console.log(response.data);
        } catch (e) {
            console.log(e);
            toast.error('Connection Timeout');
        } finally {
            sweet.close();
        }
    };
    return (
        <div className={'w-full flex h-screen items-center'}>
            <WelcomeSection sectionName={'Login'} svg={'/login.svg'} alt={'login picture'} />
            <div className={'w-[50%] h-[700px] flex items-center justify-center'}>
                <form
                    onSubmit={login}
                    className={'w-[500px] h-[600px] flex flex-col justify-center items-center'}
                >
                    <h1
                        className={
                            'text-2xl font-bold text-accent1 tracking-wider mb-10 select-none'
                        }
                    >
                        User Login
                    </h1>
                    <div className={'flex flex-col gap-4'}>
                        {loginInputFields.map((field: ILoginInputFieldType, index: number) => (
                            <div className={'flex flex-col w-[300px]'} key={index}>
                                <label
                                    className={'font-semibold tracking-wide'}
                                    htmlFor={field.name}
                                >
                                    {field.label}
                                </label>
                                <div
                                    className={
                                        'w-full flex justify-between items-center px-2 rounded-lg border border-black/20'
                                    }
                                >
                                    {field.name === 'email' ? (
                                        <MdEmail className={'text-xl'} />
                                    ) : (
                                        <MdLock className={'text-xl'} />
                                    )}
                                    <input
                                        className={'w-[250px] p-2 outline-none'}
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        id={field.name}
                                        required={true}
                                        onChange={handleRegisterInputField}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={'flex w-[300px] justify-between items-center my-5 text-sm '}>
                        <div>
                            <input className={'bg-red-800'} type="checkbox" /> Remember me
                        </div>
                        <Link className={'hover:underline'} href={'/auth/forget_password'}>
                            Forget Password ?
                        </Link>
                    </div>
                    <div>
                        <button
                            className={
                                'py-2 px-4 rounded-lg text-white shadow-2xl bg-accent1  my-3 cursor-pointer'
                            }
                            type={'submit'}
                        >
                            Sign In
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => route.push('/auth/register')}
                            className={
                                'py-2 px-4 rounded-lg text-accent1 shadow-2xl my-3 cursor-pointer transition duration-200 hover:outline outline-accent1'
                            }
                            type={'button'}
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
