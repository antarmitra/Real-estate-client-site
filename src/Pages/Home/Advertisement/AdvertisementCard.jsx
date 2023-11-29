/* eslint-disable react/prop-types */
import { ImLocation2 } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";

const AdvertisementCard = ({ data }) => {
    const { property_image, property_name, property_location, max_price, min_price } = data;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-full h-[200px]" src={property_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{property_name}</h2>
                    <p className="text-base font-medium"><span className="text-lg font-medium">Max-Price:</span> {max_price}</p>
                    <p className="text-base font-medium"><span className="text-lg font-medium">Min-Price:</span> {min_price}</p>
                    <div className="text-base font-medium flex items-center"><div>
                        <ImLocation2 className="text-blue-500 text-lg"></ImLocation2>
                    </div><div>{property_location}</div></div>
                    <div className="card-actions justify-end flex ">
                        <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 text-blue-500 text-center mx-auto  uppercase">Details<FaArrowRight></FaArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisementCard;