import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://assetpro-server-side.vercel.app'
})
axiosPublic.patch = axios.patch; 

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;