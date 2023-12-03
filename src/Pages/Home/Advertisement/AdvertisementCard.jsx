/* eslint-disable react/prop-types */
import { ImLocation2 } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AdvertisementCard = ({ data }) => {
    const { _id, image, title, location, maxPrice, minPrice } = data;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-full h-[200px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    <p className="text-base font-medium"><span className="text-lg font-medium">Max-Price:</span> {maxPrice}</p>
                    <p className="text-base font-medium"><span className="text-lg font-medium">Min-Price:</span> {minPrice}</p>
                    <div className="text-base font-medium flex items-center"><div>
                        <ImLocation2 className="text-blue-500 text-lg"></ImLocation2>
                    </div><div>{location}</div></div>
                    <Link to={`details/${_id}`}>
                        <div className="card-actions justify-end flex ">
                            <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 text-blue-500 text-center mx-auto  uppercase">Details<FaArrowRight></FaArrowRight></button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdvertisementCard;