'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaBookmark } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import SubmitButton from '@/layouts/components/button/submitButton';
import {
    ICreateNewCourseFormInputsType,
    ICreateNewCourseFormInputType,
} from '@/types/courses/courses';
import CreateNewCourseApi from '@/apiCalls/dashboard/courses/createNewCourseApi';
import toast from 'react-hot-toast';
import {
    createCourseFormInputs,
    ICreateNewCourseSectionPropType,
} from '@/constants/dashboard/courses/courses';
import FormHeroSection from '@/layouts/components/formHeroSection/FormHeroSection';

const CreateNewCourseSection: React.FC<ICreateNewCourseSectionPropType> = ({
    setIsCreateNewCourseFormOpen,
    setIsLoading,
}) => {
    const [createNewCourseInputDetails, setCreateNewCourseInputDetails] =
        useState<ICreateNewCourseFormInputType>({
            course_name: '',
            description: '',
            course_image: null,
        });
    const [loading, setLoading] = useState<boolean>(false);
    const handleCreateNewCourseInputDetails = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setCreateNewCourseInputDetails({
            ...createNewCourseInputDetails,
            [name]: value,
        });
    };
    const handleCreateNewCourseInputDetailsImage = (event: ChangeEvent<HTMLInputElement>): void => {
        setCreateNewCourseInputDetails({
            ...createNewCourseInputDetails,
            course_image: event.target.files,
        });
    };
    const handleCreateNewCourseSubmit = async (
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> => {
        event.preventDefault();
        if (!createNewCourseInputDetails.course_image || !createNewCourseInputDetails.course_name) {
            toast.error('Please fill all the fields');
            return;
        }
        setLoading(true);
        const formData = new FormData();
        formData.append('logo', createNewCourseInputDetails.course_image[0]);
        formData.append('course_name', createNewCourseInputDetails.course_name);
        formData.append('description', createNewCourseInputDetails.description);
        try {
            const response = await CreateNewCourseApi(formData);
            if (response.data.status) {
                toast.success('Course Created Successfully');
                setIsCreateNewCourseFormOpen(false);
                setIsLoading(true);
                return;
            }
            const err = response.data.errors;
            for (const key in err) {
                toast.custom(t => (
                    <div
                        className={`${
                            t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex`}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        {key === 'course_name' ? 'Course Name' : 'Description'}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">{err[key][0]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-l border-gray-200">
                            <button
                                onClick={() => toast.dismiss(t.id)}
                                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                ));
            }
        } catch (e) {
            console.log(e);
            toast.error('Connection Timeout');
        } finally {
            setLoading(false);
        }
    };
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
                    <FormHeroSection
                        title={'Create New Course'}
                        description={
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolorum odit quo reiciendis rem. Ad, alias amet, assumenda dignissimos exercitationem illum minus odit quod, reiciendis rem sed sint soluta tempora?'
                        }
                    />
                    <form
                        onSubmit={handleCreateNewCourseSubmit}
                        className={'flex flex-col gap-4 w-full '}
                    >
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
                                            onChange={
                                                field.name === 'course_image'
                                                    ? handleCreateNewCourseInputDetailsImage
                                                    : handleCreateNewCourseInputDetails
                                            }
                                        />
                                    </div>
                                </div>
                            ),
                        )}
                        <SubmitButton
                            type={'submit'}
                            buttonName={'Create Course'}
                            loading={loading}
                        />
                    </form>
                </section>
            </div>
        </div>
    );
};

export default CreateNewCourseSection;
