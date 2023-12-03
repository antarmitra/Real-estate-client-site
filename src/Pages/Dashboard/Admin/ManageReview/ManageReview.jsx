import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import useAuth from "../../../../hook/useAuth";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import ManageReviewCard from "./ManageReviewCard";


const ManageReview = () => {

    const { user } = useAuth();
        const axiosSecure = useAxiosSecure();
    
        const { data: manage, isPending, isError, error, refetch } = useQuery({
            queryKey: ["manage", user?.email],
            queryFn: async () => {
                try {
                    // const res = await axiosSecure.get(`/review/user?email=${user?.email}`);
                    const res = await axiosSecure.get('/review');
                    return res.data;
                } catch (error) {
                    throw new Error("Failed to fetch wishlist data");
                }
            },
        });
    
        console.log(manage);
        if (isError) {
            return <>Error: {error.message}</>;
        }
    
        if (isPending) {
            return <>Loading.........</>
        }


    return (
        <div>
            <SectionTitle heading='Manage Review'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    manage.map(data => <ManageReviewCard key={data._id} data={data} refetch={refetch}></ManageReviewCard>)
                }
            </div>
        </div>
    );
};

export default ManageReview;


