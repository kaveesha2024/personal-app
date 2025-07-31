import axiosInstance from '@/utility/axiosInstance';

const GetUserApi = async () => {
    return await axiosInstance.get('/api/get_user');
};
export default GetUserApi;
