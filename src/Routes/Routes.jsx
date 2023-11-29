import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Details from "../Pages/Home/Details/Details";
import WishList from "../Pages/Home/WishList/WishList";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <Details></Details>
            },
            {
                path: '/wishlist',
                element:<WishList></WishList>,
                // loader: fetch('http://localhost:5000/addProperty')
            },
            {

            }
        ]
    },
]);