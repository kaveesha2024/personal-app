'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
    const router = useRouter();
    return (
        <div className={'w-full flex'}>
            <div className={'w-[50%] h-[600px] flex items-center justify-center'}>
                <div className={'w-[70%] '}>
                    <div className={'mb-10'}>
                        <button
                            className={
                                'px-4 py-2 text-xl tracking-wider bg-accent3 text-white font-bold'
                            }
                        >
                            Design
                        </button>
                    </div>
                    <div>
                        <h1 className={'text-[70px] font-bold text-accent1'}>
                            Welcome to the Home Page
                        </h1>
                        <p>Start by registering or login to the system</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                            delectus et eum, ex expedita in libero nam porro. Adipisci beatae
                            deleniti dolorem doloremque eos illum, maxime optio quaerat sequi
                            voluptatum.
                        </p>
                    </div>
                    <div className={'mt-10'}>
                        <button
                            className={
                                'border-5 text-2xl border-accent3 px-4 py-3 text-accent2 font-bold cursor-pointer'
                            }
                            onClick={() => router.push('/dashboard')}
                        >
                            Dashboard
                        </button>
                    </div>
                </div>
            </div>
            <div className={'w-[50%] h-[600px] flex items-center justify-center relative'}>
                <Image src={'/landing.svg'} alt={'landing picture'} width={600} height={600} />
                <Link
                    className={
                        'absolute top-5 right-20 tracking-wider font-bold text-xl underline underline-offset-8 transition duration-200 hover:text-accent1 text-accent2'
                    }
                    href={'/auth/login'}
                >
                    Login
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;
