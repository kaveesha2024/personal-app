'use client';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FaBookmark } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import SubmitButton from '@/layouts/button/submitButton';

interface ICreateNewCourseSectionPropType {
    setIsCreateNewCourseFormOpen: (value: boolean) => void;
}
interface ICreateNewCourseFormInputsType {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}
const createCourseFormInputs: ICreateNewCourseFormInputsType[] = [
    {
        name: 'course_name',
        label: 'Course Name',
        type: 'text',
        placeholder: 'Enter course name',
    },
    {
        name: 'description',
        label: 'Course Description',
        type: 'text',
        placeholder: 'Enter course description',
    },
    {
        name: 'course_image',
        label: 'Course Image',
        type: 'file',
        placeholder: 'Enter course image',
    },
];
const CreateNewCourseSection: React.FC<ICreateNewCourseSectionPropType> = ({
    setIsCreateNewCourseFormOpen,
}) => {
    return (
        <div
            onClick={(): void => setIsCreateNewCourseFormOpen(false)}
            className={
                'backdrop-blur-xs w-[100vw] h-[100vh] fixed bg-black/50 flex justify-center items-center'
            }
        >
            <div
                className={'bg-white w-[500] relative rounded-2xl p-5'}
                onClick={e => e.stopPropagation()}
            >
                <button
                    className={
                        'absolute top-0 -right-15 rounded-full bg-white w-10 h-10 flex justify-center items-center hover:bg-accent2 transition duration-200 hover:text-white text-xl text-accent1 cursor-pointer'
                    }
                    onClick={() => setIsCreateNewCourseFormOpen(false)}
                >
                    <IoClose />
                </button>

                <section className={'flex flex-col gap-10'}>
                    <div className={'flex flex-col gap-3'}>
                        <h1 className={'text-center text-2xl text-accent1 font-bold'}>
                            Create New Course
                        </h1>
                        <p className={'text-center text-black/70'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                            consequatur eveniet iure magnam maxime nam neque perferendis quidem vel
                            veniam. Ab eaque inventore magni nisi ut vel velit veritatis? Laborum.
                        </p>
                    </div>
                    <form className={'flex flex-col gap-4 w-full '}>
                        {createCourseFormInputs.map(
                            (field: ICreateNewCourseFormInputsType, index: number) => (
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
                                        {field.name === 'course_name' ? (
                                            <FaBookmark className={'text-xl'} />
                                        ) : field.name === 'description' ? (
                                            <MdDescription className={'text-xl'} />
                                        ) : (
                                            ''
                                        )}
                                        <input
                                            className={'w-[250px] p-2 outline-none'}
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            id={field.name}
                                            required={true}
                                            // onChange={handleRegisterInputField}
                                        />
                                    </div>
                                </div>
                            ),
                        )}
                        <SubmitButton type={'submit'} buttonName={'Create Course'} />
                    </form>
                </section>
            </div>
        </div>
    );
};

export default CreateNewCourseSection;
