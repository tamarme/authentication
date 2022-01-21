import axiosInstance from '../../shared/axiosInstance';

const url = '/register';

export const register = async (data) => {
    try {
        return await axiosInstance.post(url, data)
    } catch (error) {
        console.log(error);
    }
};