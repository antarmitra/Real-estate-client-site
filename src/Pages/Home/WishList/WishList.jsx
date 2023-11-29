import { useEffect, useState } from "react";
import WishListCard from "../Home/WishListCard/WishListCard";


const WishList = () => {
    const [addData, setAddData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addProperty')
            .then(res => res.json())
            .then(data => setAddData(data))
    }, [])

    console.log(addData);
    return (
        <div className="grid grid-cols-1 md:grid lg:grid-cols-2 gap-8  max-w-screen-xl mx-auto">
            {
                addData.map(data => <WishListCard key={data._id} data={data}></WishListCard>)
            }
        </div>
    );
};

export default WishList;