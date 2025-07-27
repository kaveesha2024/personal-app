'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import WelcomeSection from '@/layouts/auth/WelcomeSection';
import { registerInputFields } from '@/constants/auth/login';
import { ILoginInputFieldType, IRegisterDetailsType } from '@/types/auth/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MdEmail, MdLock } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import toast from 'react-hot-toast';
import registerApi from '@/apiCalls/auth/registerApi';

const Page: React.FC = () => {
    const route = useRouter();
    const [registerDetails, setRegisterDetails] = useState<IRegisterDetailsType>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const handleRegisterInputField = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setRegisterDetails({
            ...registerDetails,
            [name]: value,
        });
    };
    const register = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const { firstName, lastName, email, password, confirmPassword } = registerDetails;
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            toast.error('Please fill all the fields');
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        try {
            const response = await registerApi(registerDetails);
            console.log(response);
        } catch (e) {
            console.log(e);
            toast.error('Connection Timeout');
        }
    };
    return (
        <div className={'w-full flex h-screen items-center'}>
            <WelcomeSection
                sectionName={'Registration'}
                svg={'/Register.svg'}
                alt={'registration picture'}
            />
            <div className={'w-[50%] h-[700px] flex items-center justify-center'}>
                <form
                    onSubmit={register}
                    className={'w-[500px] h-[600px]  flex flex-col justify-center items-center'}
                >
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
                                        onChange={handleRegisterInputField}
                                        required={true}
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
