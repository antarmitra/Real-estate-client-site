/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hook/useAxiosSecure";


const UserReviewCard = ({ data, refetch }) => {
    const { description, title, date, agentName } = data;
    console.log(description);

    const axiosSecure = useAxiosSecure();

    const handleDelete = (data) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/review/${data._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className="card md:w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{agentName}</p>
                    <p>{date}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() =>  handleDelete(data)} className="btn btn-outline border-0 border-b-4  bg-slate-100 text-blue-500 text-center mx-auto">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReviewCard;