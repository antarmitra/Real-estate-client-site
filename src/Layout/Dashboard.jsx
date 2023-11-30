import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaHeart, FaUsers } from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { FaHandHoldingUsd, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";


const Dashboard = () => {
    const isAdmin = true;

    return (
        <div className="flex max-w-screen-xl mx-auto">
            {/* dashboard side */}
            <div className="w-64 min-h-screen bg-sky-500">
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
                                    <NavLink to='/dashboard/managereviews'>
                                        <MdRateReview className="text-xl"></MdRateReview>
                                        <p className="text-base font-medium">Manage Reviews</p>
                                    </NavLink>
                                </li>

                            </>
                            :
                            <>
                                <li>
                                    <NavLink to='/dashboard/myprofile'>
                                        <CgProfile className="text-xl"></CgProfile>
                                        <p className="text-base font-medium">My Profile</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'>
                                        <FaHeart className="text-xl"></FaHeart>
                                        <p className="text-base font-medium">WishList</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'>
                                        <FaHandHoldingUsd className="text-xl"></FaHandHoldingUsd>
                                        <p className="text-base font-medium">Property bought</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'>
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