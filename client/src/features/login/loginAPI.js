import axiosInstance from '../../shared/axiosInstance';

const url = '/login';

export const login = async (data) => {
    try {
        return await axiosInstance.post(url, data);
    } catch (error) {
        console.log(error);
    }
};