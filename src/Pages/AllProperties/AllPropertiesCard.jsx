/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const AllPropertiesCard = ({ data }) => {
    const { _id, image, title, location, maxPrice, name, status, photo, } = data;
    // const { user } = useAuth();

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{location}</p>
                    <div className="flex">
                        <p className="text-lg text-gray-500"><span className="font-medium">Max-Price: </span>{maxPrice}</p>
                        {/* <p className="text-lg text-gray-500"><span className="font-medium">Min-Price:</span> {minPrice}</p> */}
                    </div>
                    <p className="text-lg text-gray-500"><span className="font-medium">Verification:</span> {status}</p>
                    <div className="flex gap-4">
                        <div className="avatar ">
                            <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={photo} />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-base mt-2 font-medium">{name}</h1>
                        </div>
                    </div>
                    <Link to={`/details/${_id}`}>
                        <div className="card-actions justify-end flex ">
                            <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 text-blue-500 text-center mx-auto  uppercase">Details<FaArrowRight></FaArrowRight></button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllPropertiesCard;




