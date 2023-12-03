/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const WishListCard = ({ data }) => {
    const { _id, image, title, maxPrice, minPrice, location, name, photo } = data;


    return (

        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className="w-[400px] h-[250px]" src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="text-lg  text-gray-500">Property-Name: <span className="text-lg  text-black">{title}</span></h2>
                <h2 className="text-lg  text-gray-500">Location: <span className="text-lg  text-black">{location}</span></h2>
                <p className="text-lg  text-gray-500">Max-Price: <span className="text-lg  text-black">{maxPrice}</span></p>
                <p className="text-lg  text-gray-500">Min-Price: <span className="text-lg  text-black">{minPrice}</span></p>
                <div className="flex gap-4">
                    <div className="avatar ">
                        <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={photo} />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-base mt-2 ">{name}</h1>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/offer/${_id}`}>
                        <button className="btn btn-outline border-0 border-b-4  bg-slate-100 text-blue-500 text-center mx-auto ">Make an Offer</button>
                    </Link>
                    <button className="btn btn-outline border-0 border-b-4  bg-slate-100 text-blue-500 text-center mx-auto">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default WishListCard;