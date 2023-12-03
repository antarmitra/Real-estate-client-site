import { useState } from "react";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../../hook/useAxiosPublic";
import MyAddPropertyCard from "./MyAddPropertyCard";




const MyAddProperty = () => {
    const axiosPublic = useAxiosPublic()
    const [addData, setAddData] = useState([])


    axiosPublic.get('/add/property')
        .then(res => {
            setAddData(res.data)
        })


    return (
        <div>
            <SectionTitle heading='My Add Properties'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    addData.map(data => <MyAddPropertyCard key={data._id} data={data}></MyAddPropertyCard>)
                }
            </div>
        </div>
    );
};

export default MyAddProperty;