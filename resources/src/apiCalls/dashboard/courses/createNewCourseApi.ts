import axiosInstance from '@/utility/axiosInstance';

const CreateNewCourseApi = async (payload: FormData) => {
    return axiosInstance.post('/api/course/create_new', payload);
};
export default CreateNewCourseApi;
