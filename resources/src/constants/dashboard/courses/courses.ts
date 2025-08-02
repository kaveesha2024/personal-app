import {
    ICreateNewCourseFormInputsType,
    ICreateNewLessonFormInputsType,
} from '@/types/courses/courses';

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
export const createNewLessonFormInputs: ICreateNewLessonFormInputsType[] = [
    {
        name: 'lesson_name',
        label: 'Lesson Name',
        type: 'text',
        placeholder: 'Enter Lesson Name',
    },
    {
        name: 'content',
        label: 'Content',
        type: 'text',
        placeholder: 'Enter Lesson Description',
    },
];
