import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const { id } = useParams();
    const [detailsData, setDetailsData] = useState([]);


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
        const add = {
            photo: property_image,
            name: property_name,
            maxPrice: max_price,
            minPrice: min_price,
            description: description,
        };

        fetch('http://localhost:5000/addProperty', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your desired property has been successfully added to the wishlist page',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    };



    return (
        <div className="card lg:card-side lg:w-[1200px] md:w-[500px] w-[400px] mx-auto bg-base-100 shadow-xl">
            <figure><img className="w-[800px] h-[450px]" src={property_image} alt="Album" /></figure>
            <div className="card-body lg:mt-14 md:mt-0">
                <h2 className="card-title lg:text-4xl md:text-2xl text-2xl">{property_name}</h2>
                <div className="justify-end space-y-5">
                    <p className="lg:text-2xl md:text-xl text-xl font-medium">Max-Price: <span className="text-xl">{max_price}</span></p>
                    <p className="lg:text-2xl md:text-xl text-xl font-medium">Min-Price: <span className="text-xl">{min_price}</span></p>
                    <p className="lg:text-2xl md:text-xl text-xl font-medium">Description: <span className="text-xl">{description}</span></p>

                    <button onClick={handleAddTowishList} className="btn btn-primary text-white w-full mt-10">Add To WishList</button>

                </div>
            </div>
        </div>
    );
};

export default Details;