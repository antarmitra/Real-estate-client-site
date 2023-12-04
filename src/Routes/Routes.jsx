import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Home/Details/Details";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
// import MyProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile/AdminProfile";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import UserProfile from "../Pages/Dashboard/User/UserProfile/UserProfile";
import PropertyBought from "../Pages/Dashboard/User/PropertyBought/PropertyBought";
import UserReview from "../Pages/Dashboard/User/UserReview/UserReview";
import AgentProfile from "../Pages/Dashboard/Agent/AgentProfile/AgentProfile";
import AddProperty from "../Pages/Dashboard/Agent/AddProperty/AddProperty";
import MyAddProperty from "../Pages/Dashboard/Agent/MyAddProperty/MyAddProperty";
import ManageProperties from "../Pages/Dashboard/Admin/ManageProperties/ManageProperties";
import AllProperties from "../Pages/AllProperties/AllProperties";
import WishList from "../Pages/Dashboard/User/Wishlist/Wishlist";
import Offer from "../Pages/Dashboard/User/Offer/Offer";
import ManageReview from "../Pages/Dashboard/Admin/ManageReview/ManageReview";

// import ManageUser from "../Pages/Dashboard/Admin/ManageUser/ManageUser";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>
            },
            {
                path: '/offer/:id',
                element: <Offer></Offer>
            },
            {
                path: '/allproperties',
                element: <PrivateRoute><AllProperties></AllProperties></PrivateRoute>
            },
            {
                path: '/wishlist',
                element: <PrivateRoute><WishList></WishList></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }

        ]
    },
    // dashboard route
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // user routes
            {
                path: 'userprofile',
                element: <UserProfile></UserProfile>
            },
            {
                path: 'wishlist',
                element: <WishList></WishList>
            },
            {
                path: 'propertybought',
                element: <PropertyBought></PropertyBought>
            },
            {
                path: 'userreview',
                element: <UserReview></UserReview>
            },



            // agent routes
            {
                path: 'agentprofile',
                element: <AgentProfile></AgentProfile>
            },
            {
                path: 'addproperty',
                element: <AddProperty></AddProperty>
            },
            {
                path: 'myaddproperty',
                element: <MyAddProperty></MyAddProperty>
            }




            // admin routes
            ,
            {
                path: 'adminprofile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manageproperties',
                element: <ManageProperties></ManageProperties>
            },
            {
                path: 'managereview',
                element: <ManageReview>d</ManageReview>
            }
        ]
    }
]);