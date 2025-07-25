import { ILoginInputFieldType, IRegisterInputFieldType } from '@/types/auth/auth';

export const loginInputFields: ILoginInputFieldType[] = [
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: '*****',
    },
];

export const registerInputFields: IRegisterInputFieldType[] = [
    {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        placeholder: 'Enter your first name',
    },
    {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        placeholder: 'Enter your last name',
    },
    ...loginInputFields,
    {
        name: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        placeholder: '*****',
    },
];
