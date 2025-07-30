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
