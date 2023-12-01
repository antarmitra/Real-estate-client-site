
import AdvertisementCard from "./AdvertisementCard";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loader from '../../../assets/loading/load.json'
// import useCart from "../../../hook/useCart";



const Advertisement = () => {
  // const [adData, setAdData] = useState();


  const axiosPublic = useAxiosPublic();
  const { data: cart = [], isPending } = useQuery({
    queryKey: ['advertising'],
    queryFn: async () => {
      const res = await axiosPublic.get("/advertisement");
      return res.data
    }
  })
  if(isPending){
    return <Lottie className="w-32 text-center mx-auto" animationData={loader}></Lottie>
  }



  return (
    <div>
      <SectionTitle heading="Advertisement Properties"></SectionTitle>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto ">
          {
            cart?.map(data => <AdvertisementCard key={data.id} data={data}></AdvertisementCard>)
          }
        </div>
      </div>
    </div>

  );
};

export default Advertisement;