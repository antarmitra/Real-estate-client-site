// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";


// const axiosSecure = axios.create({
//     baseURL: 'https://real-estate-server-site.vercel.app'
// })

// const useAxiosSecure = () => {
//     const navigate = useNavigate();
//     const {logout} = useAuth();



//     axiosSecure.interceptors.request.use(function (config) {
//         const token = localStorage.getItem('access-token')
//         console.log('request stopped by interceptors', token);
//         config.token.authorization = `Bearer ${token}`
//         return config;
//     }, function (error) {
//         return Promise.reject(error);
//     })


//     // interceptors 401 and 403
//     axiosSecure.interceptors.response.use(function(response) {
//         return response;
//     }, async (error) => {
//         const status = error.response.status;
//         console.log('status error in the interceptors', status);
//         if(status === 401 || status === 403){
//             await logout();
//             navigate('/')
//         }
//         return Promise.reject(error);
//     })



//     return axiosSecure;
// };

// export default useAxiosSecure;



import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


export const axiosSecure = axios.create({
    baseURL: 'https://real-estate-server-site.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    // interceptors call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stoped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },
        function (error) {
            // Do somethings request error
            return Promise.reject(error);
        })

    // interceptors 401 and 403
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('status error in the interceptors', status);
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error) 
    })
    return axiosSecure;
};

export default useAxiosSecure;