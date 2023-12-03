/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hook/useAxiosSecure";


const ManageReviewCard = ({ data, refetch }) => {
    const { name, email, photo, description } = data;

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
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={photo} alt="Shoes" className="rounded-full h-40 w-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{email}</h2>
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button onClick={() =>handleDelete(data)} className="btn btn-outline border-0 border-b-4  bg-slate-100 text-blue-500 text-center mx-auto">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageReviewCard;
// className="px-5 pt-5"