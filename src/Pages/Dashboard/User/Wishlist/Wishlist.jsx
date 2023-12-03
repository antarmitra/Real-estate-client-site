// import { useEffect, useState } from "react";
import WishListCard from "./WishlistCard";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import useAuth from "../../../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hook/useAxiosSecure";



const WishList = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: wishlist, isPending, isError, error } = useQuery({
        queryKey: ["wishlist", user?.email],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/addProperty/user?email=${user?.email}`);
                return res.data;
            } catch (error) {
                throw new Error("Failed to fetch wishlist data");
            }
        },
    });

    console.log(wishlist);
    if (isError) {
        return <>Error: {error.message}</>;
    }

    if (isPending) {
        return <>Loading.........</>
    }



    return (
        <div>
            <SectionTitle heading='WishList'></SectionTitle>
            <div className="grid grid-cols-1 md:grid lg:grid-cols-2 gap-8  max-w-screen-xl mx-auto">
                {
                    wishlist?.map(data => <WishListCard key={data._id} data={data}></WishListCard>)
                }
            </div>
        </div>


    );
};

export default WishList;