import axiosInstance from "../../shared/axiosInstance";

export const fetchUsers = async () => {
    const url = '/'
    try {
        const response = await axiosInstance.get(url);
        return response.data.users;
    } catch (error) {
        console.log(error);
    }
}