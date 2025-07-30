import { ICreateNewCourseFormInputsType } from '@/types/courses/courses';

export const createCourseFormInputs: ICreateNewCourseFormInputsType[] = [
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
export interface ICreateNewCourseSectionPropType {
    setIsCreateNewCourseFormOpen: (value: boolean) => void;
    setIsLoading: (value: boolean) => void;
}
