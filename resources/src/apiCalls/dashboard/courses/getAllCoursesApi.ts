import axiosInstance from '@/utility/axiosInstance';

const GetAllCoursesApi = async () => {
    return await axiosInstance.get('/api/courses');
};
export default GetAllCoursesApi;
