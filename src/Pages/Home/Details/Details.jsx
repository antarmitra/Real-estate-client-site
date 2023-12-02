import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import img from '../../../assets/banner/img5.jpg'
import { FaRegHeart } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";




const Details = () => {
    const { id } = useParams();
    const [detailsData, setDetailsData] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        fetch('http://localhost:5000/advertisement')
            .then(res => res.json())
            .then(data => setDetailsData(data))
    }, [])
    console.log(detailsData);


    const findDetails = detailsData.find(data => data._id === id);
    // console.log(findDetails);
    const { property_image, property_name, description, max_price, min_price } = findDetails || {}
    // console.log(property_name);


    const handleAddTowishList = () => {
        if (user && user.email) {
            console.log(user.email);
            const addItem = {
                photo: property_image,
                name: property_name,
                maxPrice: max_price,
                minPrice: min_price,
                description: description,
            }
            axiosSecure.post('/addProperty', addItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${addItem.name} has been successfully added to the wishlist page `,
                            showConfirmButton: false,
                            timer: 2500
                        });
                    }
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
        else {
            Swal.fire({
                title: "Your are not Login",
                text: "Please Login to add to the wishlist !",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes,Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send to the data database
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }


    const handleReviewNow = (e) => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const photo = form.photo.value;
        const name = form.name.value;
        const description = form.description.value;
        const date = new Date();
        const review = { title, photo, name, description, date }
        console.log(review);

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your review has been Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }

  


    return (

        <div className="mb-16">
            <img className='w-full lg:h-[700px] md:h-[500px] h-[300px]' src={img} alt="" />
            <div className="absolute  lg:h-[700px] md:h-[500px] h-[300px] flex items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <h2 className="lg:text-5xl md:text-4xl text-lg font-bold text-white lg:ml-[550px] md:ml-[250px] ml-[140px]">Property Details</h2>
            </div>
            <div className="card lg:card-side lg:w-[1200px] md:w-[500px] w-[400px] mt-16 mx-auto bg-base-100 shadow-xl">
                <figure><img className="w-[800px] h-[450px]" src={property_image} alt="Album" /></figure>
                <div className="card-body lg:mt-14 md:mt-0">
                    <h2 className="card-title lg:text-4xl md:text-2xl text-2xl">{property_name}</h2>
                    <div className="justify-end space-y-5">
                        <p className="lg:text-2xl md:text-xl text-xl font-medium">Max-Price: <span className="text-xl">{max_price}</span></p>
                        <p className="lg:text-2xl md:text-xl text-xl font-medium">Min-Price: <span className="text-xl">{min_price}</span></p>
                        <p className="lg:text-2xl md:text-xl text-xl font-medium">Description: <span className="text-xl">{description}</span></p>

                        <div className="flex justify-center">
                            <div>
                                <button onClick={handleAddTowishList} className="btn btn-outline border-0 border-b-4 mt-10 bg-slate-100 text-blue-500 text-center mx-auto mr-10">Add To WishList  <FaRegHeart className="text-xl"></FaRegHeart></button>
                            </div>

                            {/* open modal */}
                            <div>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn btn-outline border-0 border-b-4 bg-slate-100 text-blue-500 text-center mx-auto mt-10 " onClick={() => document.getElementById('my_modal_5').showModal()}>Review Now <MdRateReview className="text-xl"></MdRateReview></button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg text-center">Please Review Now </h3>
                                        <form onSubmit={handleReviewNow}>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text  text-base font-medium">Property Name</span>
                                                </label>
                                                <input type="name" name="title" defaultValue={property_name} readOnly placeholder="Please Name Here...." className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text  text-base font-medium">Photo URL</span>
                                                </label>
                                                <input type="name" name="photo" placeholder="Photo URL Here...." className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text  text-base font-medium">Name</span>
                                                </label>
                                                <input type="name" name="name" placeholder="Please Name Here...." className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text  text-base font-medium">Description</span>
                                                </label>
                                                <input type="name" name="description" placeholder="Description Here...." className="input input-bordered" />
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
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;