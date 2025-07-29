'use client';
import React, { useState } from 'react';
import DashboardSideNavBar from '@/layouts/dashboard/DashboardSideNavBar';
import Image from 'next/image';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import CoursesNavigationBar from '@/layouts/dashboard/courses/CoursesNavigationBar';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import CreateNewCourseSection from '@/layouts/dashboard/courses/createNewCourse/CreateNewCourseSection';

interface ICourseType {
    name: string;
    description: string;
    image: string;
    link: string;
}
const courses: ICourseType[] = [
    {
        name: 'React',
        description: 'React is a JavaScript library for building user interfaces.',
        image: '/react.svg',
        link: 'react',
    },
    {
        name: 'Laravel',
        description: 'Laravel is a PHP Framework for building user interfaces and backend APIs.',
        image: '/next.svg',
        link: 'laravel',
    },
];
const Page: React.FC = () => {
    const [isCreateNewCourseFormOpen, setIsCreateNewCourseFormOpen] = useState<boolean>(false);
    const route: AppRouterInstance = useRouter();
    return (
        <div className={'w-full h-screen bg-gray-50 flex'}>
            {isCreateNewCourseFormOpen && (
                <CreateNewCourseSection
                    setIsCreateNewCourseFormOpen={setIsCreateNewCourseFormOpen}
                />
            )}
            <DashboardSideNavBar />
            <section
                className={
                    'h-full w-[80%] max-h-full overflow-y-auto p-5 scrollbar scrollbar-thumb-accent1'
                }
            >
                {/*Hero section*/}
                <div className={'w-full mb-10'}>
                    <CoursesNavigationBar />
                    <div className={'flex flex-col justify-center items-center'}>
                        <h1 className={'font-bold text-3xl tracking-widest'}>
                            Welcome to courses section
                        </h1>
                        <p className={'text-center mt-3'}>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                                aliquid aut blanditiis consequuntur dolor earum error est expedita
                                ipsa maiores modi, nihil quam quidem repellat sequi suscipit,
                                voluptatibus! Animi, quis.{' '}
                            </span>
                            <button
                                onClick={() => setIsCreateNewCourseFormOpen(true)}
                                className={'cursor-pointer hover:underline text-accent1'}
                            >
                                Create Course ?
                            </button>
                        </p>
                        <Image
                            priority={true}
                            src={'/courses_hero_section.svg'}
                            alt={'landing picture'}
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                {/*courses*/}
                <div className={'w-full flex flex-col gap-5'}>
                    {courses.map((course: ICourseType, index: number) => (
                        <div
                            key={index}
                            className={`bg-white shadow rounded-lg p-4 flex justify-between items-center hover:shadow-lg transition duration-200  ${index === courses.length - 1 ? 'mb-40' : ''}`}
                        >
                            <div
                                className={'flex gap-5 items-center cursor-pointer'}
                                onClick={() => route.push('/dashboard/courses/' + course.link)}
                            >
                                <Image
                                    priority={true}
                                    src={course.image}
                                    alt={course.name}
                                    width={100}
                                    height={100}
                                />
                                <div>
                                    <h1 className={'text-accent1 font-semibold text-2xl'}>
                                        {course.name}
                                    </h1>
                                    <p className={'text-black/70'}>{course.description}</p>
                                </div>
                            </div>
                            <div
                                className={
                                    'h-full flex gap-3 items-center justify-center w-[100px] text-xl'
                                }
                            >
                                <button
                                    className={
                                        'text-accent1 cursor-pointer hover:text-accent2 hover:scale-125 transition duration-200'
                                    }
                                >
                                    <AiFillEdit />
                                </button>
                                <button
                                    className={
                                        'text-red-500 cursor-pointer hover:text-accent2 hover:scale-125 transition duration-200'
                                    }
                                >
                                    <MdDelete />
                                </button>
                                <button></button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Page;
