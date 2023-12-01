import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../../hook/useAuth";
import SectionTitle from "../../../../component/SectionTitle/SectionTitle";


const AdminProfile = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div>
            <SectionTitle heading="Admin Profile">
            </SectionTitle>
            <div className="bg-slate-200 shadow-xl rounded-lg ml-10 space-y-5">
                <img className="w-32 h-32 rounded-full  mx-auto" src={user.photoURL} alt="" />
                <h1 className="text-center text-2xl font-medium">{user?.displayName}</h1>
                <h2 className="text-center text-xl font-medium">{user?.email}</h2>
                <h3 className="text-center text-lg">Web Developer</h3>
                <p className="text-center text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo numquam in quaerat distinctio rerum <br /> consequuntur obcaecati unde, veritatis iusto dolore?</p>
                <div className="flex justify-center gap-2 text-xl">
                    <p><FaFacebook className="text-sky-500"></FaFacebook></p>
                    <p><FaInstagram></FaInstagram></p>
                    <p><FcGoogle></FcGoogle></p>
                    <p><FaLinkedin className="text-sky-500"></FaLinkedin></p>
                    <p><FaWhatsapp className="text-green-500"></FaWhatsapp></p>
                </div>
                <div className="flex justify-center mt-5">
                    <button className="btn btn-outline btn-primary mr-5 ">Message</button>
                    <button className="btn btn-primary">Contact</button>
                </div>
            </div>

        </div>
    );
};

export default AdminProfile;