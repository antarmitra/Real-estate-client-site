import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import useAuth from "../../../../hook/useAuth";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import UserReviewCard from "./UserReviewCard";


const UserReview = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: review, isPending, isError, error, refetch } = useQuery({
        queryKey: ["review", user?.email],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/review/user?email=${user?.email}`);
                return res.data;
            } catch (error) {
                throw new Error("Failed to fetch wishlist data");
            }
        },
    });

    console.log(review);
    if (isError) {
        return <>Error: {error.message}</>;
    }

    if (isPending) {
        return <>Loading.........</>
    }
    return (
        <div>
            <SectionTitle heading='User Reviews'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    review.map(data => <UserReviewCard key={data._id} data={data} refetch={refetch}></UserReviewCard>)
                }
            </div>
        </div>
    );
};

export default UserReview;