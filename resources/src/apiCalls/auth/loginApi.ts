import axiosInstance from '@/utility/axiosInstance';
import { ILoginDetailsType } from '@/types/auth/auth';

const loginApi = async (payload: ILoginDetailsType) => {
    await axiosInstance.get('/sanctum/csrf-cookie');
    return await axiosInstance.post('/api/login', payload);
};
export default loginApi;
