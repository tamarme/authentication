import axiosInstance from "../../shared/axiosInstance";

export const fetchUsers = async () => {
    try {
        const url = '/';
        const response = await axiosInstance.get(url);
        return response.data.users;
    } catch (error) {
        return Promise.reject(error);
    }
}