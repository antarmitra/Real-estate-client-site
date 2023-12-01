/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import useAuth from "../../../../hook/useAuth";
import { MdDelete, MdRateReview } from "react-icons/md";

const MyAddPropertyCard = ({ data }) => {
    const { user } = useAuth();
    console.log(user.photoURL);
    const { image, title, location, name, maxPrice, minPrice } = data;
    return (
        <div>
            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <div className="text-xl font-medium flex items-center ">
                        <dir>
                            <FaLocationDot className="text-sky-500"></FaLocationDot>
                        </dir>
                        <div>
                            {location}
                        </div>
                    </div>
                    <div className="avatar flex gap-4">
                        <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                        <div>
                            <h1 className="text-lg">{name}</h1>
                        </div>
                    </div>
                    <p>{maxPrice}</p>
                    <p>{minPrice}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-4  bg-slate-100 text-blue-500  uppercase mr-5  ">Update <MdRateReview className="text-lg"></MdRateReview> </button>
                        <button className="btn btn-outline border-0 border-b-4  bg-slate-100 text-blue-500  uppercase">Delete<MdDelete className="text-lg"></MdDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAddPropertyCard;