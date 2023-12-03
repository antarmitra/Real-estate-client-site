import { useState } from 'react';
import cover from '../../assets/banner/img5.jpg'
import useAxiosPublic from '../../hook/useAxiosPublic';
import AllPropertiesCard from './AllPropertiesCard';


const AllProperties = () => {
    const axiosPublic = useAxiosPublic();
    const [addData, setAddData] = useState([]);

    

    axiosPublic.get('/add')
        .then(res => {
            setAddData(res.data)
        })
    // console.log(addData);

    const desiredStatus = 'verify';
    const filteredData = addData.filter(data => data.status === desiredStatus);



    return (
        <div>
            <img className='w-full lg:h-[700px] md:h-[500px] h-[300px]' src={cover} alt="" />
            <div className="absolute  lg:h-[700px] md:h-[500px] h-[300px] flex items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <h2 className="lg:text-5xl md:text-4xl text-lg font-bold text-white lg:ml-[600px] md:ml-[250px] ml-[140px]">All Properties</h2>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-screen-xl mx-auto'>
                {
                  filteredData.map(data => <AllPropertiesCard key={data._id} data={data}></AllPropertiesCard>)
                }
            </div>
        </div>

    );
};

export default AllProperties;