// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "./useAxiosPublic";


// const useCart = () => {
//     const axiosPublic = useAxiosPublic();

//     const {data : cart = [], isPending} = useQuery({
//         queryKey: ['advertising'],
//         queryFn: async () => {
//             const res = await axiosPublic.get("/advertisement");
//             return res.data
//         }
//     })
//     return [cart, isPending]
// };

// export default useCart;