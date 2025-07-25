'use client';
import React from 'react';
import WelcomeSection from '@/layouts/auth/WelcomeSection';
import { registerInputFields } from '@/constants/auth/login';
import { ILoginInputFieldType } from '@/types/auth/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MdEmail, MdLock } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

const Page: React.FC = () => {
    const route = useRouter();
    return (
        <div className={'w-full flex h-screen items-center'}>
            <WelcomeSection
                sectionName={'Registration'}
                svg={'/Register.svg'}
                alt={'registration picture'}
            />
            <div className={'w-[50%] h-[700px] flex items-center justify-center'}>
                <form className={'w-[500px] h-[600px]  flex flex-col justify-center items-center'}>
                    <h1
                        className={
                            'text-2xl font-bold text-accent1 tracking-wider mb-10 select-none'
                        }
                    >
                        Create Your Account
                    </h1>
                    <div className={'flex flex-col gap-4'}>
                        {registerInputFields.map((field: ILoginInputFieldType, index: number) => (
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
                                    ) : field.name === 'firstName' ? (
                                        <FaUser className={'text-xl'} />
                                    ) : field.name === 'lastName' ? (
                                        <FaUser className={'text-xl'} />
                                    ) : (
                                        <MdLock className={'text-xl'} />
                                    )}
                                    <input
                                        className={'w-[250px] p-2 outline-none'}
                                        type={field.type}
                                        name={field.name}
                                        id={field.name}
                                        placeholder={field.placeholder}
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
                            Register
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={() => route.push('/auth/login')}
                            className={
                                'py-2 px-4 rounded-lg text-accent1 my-3 cursor-pointer transition duration-200 hover:outline-2 outline-accent1'
                            }
                            type={'button'}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
