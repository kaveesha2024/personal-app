export interface ICreateNewCourseFormInputType {
    course_name: string;
    description: string;
    course_image: FileList | null;
}
export interface ICreateNewCourseFormInputsType {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}
export interface ICourseType {
    course_name: string;
    description: string;
    logo: string;
    id: string;
    created_at: string;
}
export interface ICreateNewLessonSectionPropType {
    setIsCreateLessonFormOpen: (value: boolean) => void;
}
export interface ICreateNewLessonFormInputsType {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}
export interface ICreateNewLessonInputDetails {
    content: string;
    lesson_name: string;
}
