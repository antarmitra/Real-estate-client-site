import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaHeart, FaUsers } from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { FaHandHoldingUsd, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import useAdmin from "../hook/useAdmin";
import useAgent from "../hook/useAgent";
import { MdOutlineRequestQuote } from "react-icons/md";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isAgent] = useAgent();

    return (
        <div className="flex">
            {/* dashboard side */}
            <div className="w-64 min-h-screen bg-sky-300">
                <ul className="menu p-4">

                    {/* user dashboard */}
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to='/dashboard/adminprofile'>
                                        <CgProfile className="text-xl"></CgProfile>
                                        <p className="text-base font-medium">Admin Profile</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageproperties'>
                                        <MdManageHistory className="text-xl"></MdManageHistory>
                                        <p className="text-base font-medium">Manage Properties</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/manageusers'>
                                        <FaUsers className="text-xl"></FaUsers>
                                        <p className="text-base font-medium">Manage Users</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/managereview'>
                                        <MdRateReview className="text-xl"></MdRateReview>
                                        <p className="text-base font-medium">Manage Reviews</p>
                                    </NavLink>
                                </li>
                            </>

                            :

                            isAgent ?
                                <>
                                    <li>
                                        <NavLink to='/dashboard/agentprofile'>
                                            <CgProfile className="text-xl"></CgProfile>
                                            <p className="text-base font-medium">Agent Profile</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/addproperty'>
                                            <MdManageHistory className="text-xl"></MdManageHistory>
                                            <p className="text-base font-medium">Add Property</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/myaddproperty'>
                                            <FaUsers className="text-xl"></FaUsers>
                                            <p className="text-base font-medium">My added Property</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/mysoldreviews'>
                                            <MdRateReview className="text-xl"></MdRateReview>
                                            <p className="text-base font-medium">My Sold Reviews</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/requestedproperty'>
                                            <MdOutlineRequestQuote className="text-xl"></MdOutlineRequestQuote>
                                            <p className="text-base font-medium">Requested Property</p>
                                        </NavLink>
                                    </li>
                                </>

                                :

                                <>
                                    <li>
                                        <NavLink to='/dashboard/userprofile'>
                                            <CgProfile className="text-xl"></CgProfile>
                                            <p className="text-base font-medium">My Profile</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/wishlist'>
                                            <FaHeart className="text-xl"></FaHeart>
                                            <p className="text-base font-medium"> My WishList</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/propertybought'>
                                            <FaHandHoldingUsd className="text-xl"></FaHandHoldingUsd>
                                            <p className="text-base font-medium">Property bought</p>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/userreview'>
                                            <MdRateReview className="text-xl"></MdRateReview>
                                            <p className="text-base font-medium">My reviews</p>
                                        </NavLink>
                                    </li>
                                </>
                    }







                    {/* Common navlink */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome className="text-xl"></FaHome>
                            <p className="text-base font-medium">Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <MdEmail className="text-xl"></MdEmail>
                            <p className="text-base font-medium">Contact</p>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;