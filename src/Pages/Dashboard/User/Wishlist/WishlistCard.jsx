/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hook/useAxiosSecure";



const WishListCard = ({ data, refetch }) => {
    const { _id, image, title, maxPrice, minPrice, location, name, photo } = data;
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
                axiosSecure.delete(`/addProperty/${data._id}`)
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

        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-[400px] h-full" src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="md:text-lg text-sm  text-gray-500">Property-Name: <span className="md:text-lg text-sm  text-black">{title}</span></h2>
                <h2 className="md:text-lg text-sm  text-gray-500">Location: <span className="md:text-lg text-sm  text-black">{location}</span></h2>
                <p className="md:text-lg text-sm  text-gray-500">Max-Price: <span className="md:text-lg text-sm  text-black">{maxPrice}</span></p>
                <p className="md:text-lg text-sm  text-gray-500">Min-Price: <span className="md:text-lg text-sm  text-black">{minPrice}</span></p>
                <div className="flex gap-4">
                    <div className="avatar ">
                        <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={photo} />
                        </div>
                    </div>
                    <div>
                        <h1 className="md:text-base text-xs md:mt-2 ">{name}</h1>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/offer/${_id}`}>
                        <button className="btn btn-outline border-0 border-b-4  bg-slate-100 text-blue-500 text-center mx-auto ">Make an Offer</button>
                    </Link>
                    <button onClick={() => handleDelete(data)} className="btn btn-outline border-0 border-b-4  bg-slate-100 text-blue-500 text-center mx-auto">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default WishListCard;