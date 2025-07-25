import { ILoginInputFieldType } from '@/types/auth/auth';

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
        placeholder: 'Enter your password',
    },
];
