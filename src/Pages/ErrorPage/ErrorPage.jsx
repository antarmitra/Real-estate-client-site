import { NavLink } from "react-router-dom";
import error from '../../assets/error/error.json'
import Lottie from "lottie-react";


const ErrorPage = () => {
    return (
        <div>
            <div className="lg:w-[400px] md:w-[300px] w-[400px] mx-auto">
                <Lottie animationData={error}></Lottie>
            </div>
            <div>
                <NavLink className="text-lg lg:ml-[700px] md:ml-[320px] ml-[140px]  font-semibold text-white bg-blue-500 px-3 py-2 rounded-lg" to='/'>Go Back Home</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;