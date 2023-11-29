import { useEffect, useState } from "react";
import AdvertisementCard from "./AdvertisementCard";



const Advertisement = () => {
  const [adData, setAdData] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/advertisement')
      .then(res => res.json())
      .then(data => setAdData(data))
  }, [])
  // console.log(adData);


  return (

    <div className="mt-10">
      <div className="text-center mb-5">
        <h2 className="text-4xl font-bold py-2">Advertisement Properties</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto ">
        {
          adData?.map(data => <AdvertisementCard key={data.id} data={data}></AdvertisementCard>)
        }
      </div>
    </div>

  );
};

export default Advertisement;