'use client';
import { IRegisterDetailsType } from '@/types/auth/auth';
import axiosInstance from '@/utility/axiosInstance';

const registerApi = async (payload: IRegisterDetailsType) => {
    await axiosInstance.get('/sanctum/csrf-cookie');
    return await axiosInstance.post('/register', payload);
};
export default registerApi;
