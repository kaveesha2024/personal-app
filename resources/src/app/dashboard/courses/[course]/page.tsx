'use client';
import React, { use } from 'react';
import DashboardSideNavBar from '@/layouts/dashboard/DashboardSideNavBar';
import CoursesNavigationBar from '@/layouts/dashboard/courses/CoursesNavigationBar';
import Image from 'next/image';

const Page = (promiseParams: { params: Promise<{ course: string }> }) => {
    const course: { course: string } = use(promiseParams.params);
    return (
        <div className={'bg-gray-50 w-full h-screen flex'}>
            <DashboardSideNavBar />
            <section className={'overflow-x-hidden overflow-y-auto min-h-screen w-full p-5'}>
                <div>
                    <CoursesNavigationBar />
                    <div className={'flex w-full justify-center items-center gap-5 flex-col'}>
                        <h1 className={'font-bold text-3xl tracking-widest'}>
                            Welcome to {course.course}
                        </h1>
                        <p className={'text-center mt-3'}>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                                aliquid aut blanditiis consequuntur dolor earum error est expedita
                                ipsa maiores modi, nihil quam quidem repellat sequi suscipit,
                                voluptatibus! Animi, quis.
                            </span>
                            <button className={'cursor-pointer hover:underline text-accent1'}>
                                Create Lesson ?
                            </button>
                        </p>
                        <Image src={'/react.svg'} alt={'landing'} width={300} height={300} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;
