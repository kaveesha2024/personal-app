import React from 'react';
import { FaDashcube } from 'react-icons/fa';
import { lower, upper } from '@/constants/dashboard/dashboard';
import Link from 'next/link';
import { ILinksType } from '@/types/dashboard/dashboard';

const DashboardSideNavBar: React.FC = () => {
    return (
        <div className={'w-[20%] h-screen bg-white shadow-lg rounded-r-4xl'}>
            <div className={'h-[10%] flex justify-center items-center'}>
                <h1 className={'text-accent1 text-3xl font-bold flex justify-center gap-2'}>
                    <FaDashcube className={'text-accent2'} /> Dashboard
                </h1>
            </div>
            <div className={'flex flex-col h-[90%] py-5 justify-between'}>
                <div className={'flex flex-col gap-5 p-5 justify-center items-center'}>
                    {upper.map((link: ILinksType, index: number) => (
                        <Link
                            className={
                                'flex justify-start w-[150px] px-2 py-1 items-center gap-2 hover:bg-accent1/30 rounded-full'
                            }
                            key={index}
                            href={link.link}
                        >
                            <span className={'text-accent1'}>{link.icon}</span>
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </div>
                <div>
                    <div className={'flex flex-col gap-5 p-5 justify-center items-center'}>
                        {lower.map((link: ILinksType, index: number) => (
                            <Link
                                className={
                                    'to-gray-200 flex justify-start w-[130px] px-2 py-1 items-center gap-2 rounded-full hover:bg-accent1/30'
                                }
                                key={index}
                                href={link.link}
                            >
                                <span className={'text-accent1'}>{link.icon}</span>
                                <span>{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSideNavBar;
