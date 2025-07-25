export interface ILoginInputFieldType {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}
export interface IWelcomeSectionPropType {
    sectionName: string;
    svg: string;
    alt: string;
}
export interface IRegisterInputFieldType extends ILoginInputFieldType {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}
