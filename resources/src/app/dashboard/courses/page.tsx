'use client';
import React, { useEffect, useState } from 'react';
import DashboardSideNavBar from '@/layouts/dashboard/DashboardSideNavBar';
import Image from 'next/image';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import CoursesNavigationBar from '@/layouts/dashboard/courses/CoursesNavigationBar';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import CreateNewCourseSection from '@/layouts/dashboard/courses/createNewCourse/CreateNewCourseSection';
import GetAllCoursesApi from '@/apiCalls/dashboard/courses/getAllCoursesApi';
import toast from 'react-hot-toast';
import Loading from '@/layouts/components/loader/Loading';
import { ICourseType } from '@/types/courses/courses';
import { useCheckUser } from '@/hooks/useCheckUser';

const Page: React.FC = () => {
    const [isCreateNewCourseFormOpen, setIsCreateNewCourseFormOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [courses, setCourses] = useState([]);
    const route: AppRouterInstance = useRouter();
    useEffect((): void => {
        getAllCourses();
    }, [isLoading]);
    useCheckUser();
    const getAllCourses = async (): Promise<void> => {
        try {
            const response = await GetAllCoursesApi();
            if (response.data.status) {
                setCourses(response.data.message);
                return;
            }
        } catch (e) {
            toast.error('Connection Timeout');
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className={'w-full h-screen bg-gray-50 flex'}>
            {isCreateNewCourseFormOpen && (
                <CreateNewCourseSection
                    setIsCreateNewCourseFormOpen={setIsCreateNewCourseFormOpen}
                    setIsLoading={setIsLoading}
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
                            src={'/courses_hero_section.png'}
                            alt={'landing picture'}
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                {/*courses*/}
                <div className={'w-full flex flex-col gap-5'}>
                    {!isLoading ? (
                        courses.length > 0 ? (
                            courses.map((course: ICourseType, index: number) => (
                                <div
                                    key={index}
                                    className={`bg-white shadow rounded-lg p-4 flex justify-between items-center hover:shadow-lg transition duration-200  ${index === courses.length - 1 ? 'mb-40' : ''}`}
                                >
                                    <div
                                        className={'flex gap-5 items-center cursor-pointer'}
                                        onClick={(): void =>
                                            route.push('/dashboard/courses/' + course.course_name)
                                        }
                                    >
                                        <Image
                                            priority={true}
                                            src={course.logo}
                                            alt={course.course_name}
                                            width={100}
                                            height={100}
                                        />
                                        <div>
                                            <h1 className={'text-accent1 font-semibold text-2xl'}>
                                                {course.course_name}
                                            </h1>
                                            <p className={'text-black/70'}>{course.description}</p>
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            'h-full flex gap-10 items-center justify-between text-xl '
                                        }
                                    >
                                        <div
                                            className={
                                                'w-[250px] h-full text-sm text-center text-black/50'
                                            }
                                        >
                                            Created At:{' '}
                                            {new Date(course.created_at).toLocaleString()}
                                        </div>
                                        <div className={'flex gap-3'}>
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
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>No Courses yet !!</div>
                        )
                    ) : (
                        <Loading />
                    )}
                </div>
            </section>
        </div>
    );
};

export default Page;
