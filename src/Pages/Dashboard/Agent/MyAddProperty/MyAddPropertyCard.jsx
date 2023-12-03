/* eslint-disable react/prop-types */
import useAuth from "../../../../hook/useAuth";
import { MdDelete, MdRateReview } from "react-icons/md";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import Swal from "sweetalert2";


const MyAddPropertyCard = ({ data }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { _id, image, title, location, name, maxPrice, minPrice } = data;

    const modalId = `my_modal_${_id}`;
    // console.log(modalId);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const name = form.name.value;
        const email = form.email.value;
        const maxPrice = form.maxPrice.value;
        const minPrice = form.minPrice.value;
        const update = { image, title, name, email, maxPrice, minPrice };
        console.log(update);

        const updateProperty = axiosSecure.patch(`/add/${_id}`, update)
            .then(res => console.log(res.data))
        if (updateProperty.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    const handleDeleteProperty = (data) => {
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
                axiosSecure.delete(`/add/${data._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            //    console.log(data);
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
            <div className="card mx-auto bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl">{title}</h2>
                    <h3 className="text-base font-medium text-gray-500">{location}</h3>
                    <div className="flex">
                        <p className="text-lg text-gray-500"><span className="font-medium">Max-Price: </span>{maxPrice}</p>
                        <p className="text-lg text-gray-500"><span className="font-medium">Min-Price:</span> {minPrice}</p>
                    </div>

                  <div className="flex gap-4">
                  <div className="avatar ">
                        <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-base mt-2 font-medium">{name}</h1>
                    </div>
                  </div>

                    <div className="card-actions justify-center gap-5">
                        {/* modal open */}

                        {data.status === 'verify' ?
                            (<div>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn btn-outline border-0 border-b-4 bg-slate-100 text-blue-500 text-center mx-auto " onClick={() => document.getElementById(modalId).showModal()}>Update <MdRateReview className="text-xl"></MdRateReview></button>
                                <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg text-center">Please Update Now </h3>
                                        <form onSubmit={handleUpdate} >
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text  text-base font-medium">Property Image</span>
                                                </label>
                                                <input type="name" name="image" placeholder="Photo URL Here...." className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text  text-base font-medium">Property Title</span>
                                                </label>
                                                <input type="text" name="title" defaultValue={title} placeholder="Title Here...." className="input input-bordered" />
                                            </div>

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text  text-base font-medium">Agent Name</span>
                                                </label>
                                                <input type="name" name="name" defaultValue={user?.displayName} readOnly placeholder="Please Name Here...." className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text  text-base font-medium">Agent Email</span>
                                                </label>
                                                <input type="name" name="email" defaultValue={user?.email} readOnly placeholder="Description Here...." className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text  text-base font-medium">Maximum Price</span>
                                                </label>
                                                <input type="name" name="maxPrice" placeholder="Max Price Here...." className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text  text-base font-medium">Minimum Price</span>
                                                </label>
                                                <input type="name" name="minPrice" placeholder="Min Price Here...." className="input input-bordered" />
                                            </div>
                                            <div className="form-control mt-6">
                                                <input className="btn text-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500" type="submit" value="Submit" />
                                            </div>
                                        </form>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>)

                            : ' '}
                        <button onClick={() => handleDeleteProperty(data)} className="btn btn-outline border-0 border-b-4 bg-slate-100 text-blue-500 uppercase">Delete<MdDelete className="text-lg text-red-600"></MdDelete></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyAddPropertyCard;
