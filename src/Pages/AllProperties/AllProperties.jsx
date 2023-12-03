import { useEffect, useState } from 'react';
// import cover from '../../assets/banner/img5.jpg'
import useAxiosPublic from '../../hook/useAxiosPublic';
import AllPropertiesCard from './AllPropertiesCard';
import './AllProperties.css'


const AllProperties = () => {
    const axiosPublic = useAxiosPublic();
    const [addData, setAddData] = useState([]);
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');


    useEffect(() => {
        axiosPublic(`/add?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
            .then((res) => {
                setAddData(res.data);
            });
    }, [axiosPublic, asc, search]);

    const desiredStatus = 'verify';
    const filteredData = addData.filter(data => data.status === desiredStatus);


    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);
    }



    return (
        <div>
            <div className='image '>
                <div className='flex flex-col justify-center h-[80vh]'>
                    <h2 className="lg:text-5xl md:text-4xl text-lg font-bold  text-white text-center ">All Properties</h2>
                    <div className="join  mt-5 lg:ml-[600px] ">
                        <form onSubmit={handleSearch}>
                            <input className='input input-bordered join-item' type="text" name='search' placeholder='Search Here....' />
                            <input type="submit" value="Search" className='btn join-item' />
                        </form>
                    </div>
                </div>
            </div>



            <button onClick={() => setAsc(!asc)} className='btn btn-outline border-0 border-b-4 mt-6 bg-slate-100 text-blue-500 text-center mx-auto block'>
                {asc ? 'maxPrice: Low To High' : 'maxPrice: High to Low'}
            </button>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-screen-xl mx-auto'>
                {
                    filteredData.map(data => <AllPropertiesCard key={data._id} data={data}></AllPropertiesCard>)
                }
            </div>
        </div>

    );
};

export default AllProperties;
