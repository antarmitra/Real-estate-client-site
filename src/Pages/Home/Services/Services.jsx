import SectionTitle from "../../../component/SectionTitle/SectionTitle";
// import { IoHomeOutline } from "react-icons/io5";
import img from '../../../assets/service/home.png'
import img1 from '../../../assets/service/photo.svg'
import img2 from '../../../assets/service/hand.png'
import img3 from '../../../assets/service/dollar.png'


const Services = () => {
    return (
        <div>
            <SectionTitle heading='Top-notch Services'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 md:ml-0 ml-[68px]">
                <div className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img  src={img} alt="Shoes" className="rounded-xl w-20 h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sell Your Home</h2>
                        <p>Get a free evaluation before selling your home.</p>
                        <div className="card-actions">
                            <button className="text-blue-500 font-medium">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl w-20 h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Free photoshoot</h2>
                        <p>Free photoshoot with professional equipment.</p>
                        <div className="card-actions">
                            <button className="text-blue-500 font-medium">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl w-20 h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Buy a home</h2>
                        <p>Buy a home that checks all your requirements.</p>
                        <div className="card-actions">
                            <button className="text-blue-500 font-medium">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl w-20 h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Free appraisal</h2>
                        <p>Get a free appraisal from our legal departments.</p>
                        <div className="card-actions">
                            <button className="text-blue-500 font-medium">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;