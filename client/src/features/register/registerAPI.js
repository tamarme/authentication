import axiosInstance from '../../shared/axiosInstance';

const url = '/register';

export const register = async (data) => {
    console.log(data);
    try {
        return await axiosInstance.post(url, data)
    } catch (error) {
        console.log(error);
        if (error.response.status === 409) console.log('Email is already used');
        else console.log(error.response.message);
    }
};