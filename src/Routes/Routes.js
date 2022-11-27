import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Category/Categories";
import AddCategory from "../Pages/Dashboard/AddCategory/AddCategory";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import ManageProduct from "../Pages/Dashboard/AddProduct/ManageProduct";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyBuyer from "../Pages/Dashboard/MyBuyer/MyBuyer";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyWishlist from "../Pages/Dashboard/MyWishlist/MyWishlist";
import ReportItem from "../Pages/Dashboard/ReportItem/ReportItem";
import DisplayError from "../Pages/DisplayError/DisplayError";
import Home from "../Pages/Home/Home/Home";
import ProductDetails from "../Pages/Home/Products/ProductDetails";
import DashboardLayout from "../Pages/Layouts/DashboardLayout";
import Main from "../Pages/Layouts/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute/AdminRoute";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/products/category/${params.id}`),
                element: <Categories></Categories>
            },
            {
                path: '/product/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            // =============================================== admin route goes here =====================================
            {
                path: '/dashboard/addCategory',
                element: <AdminRoute><AddCategory></AddCategory></AdminRoute>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allReport',
                element: <AdminRoute><ReportItem></ReportItem></AdminRoute>
            },
            // =============================================== admin route end from here =====================================


            // =============================================== seller route start from here =====================================
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/allProduct',
                element: <SellerRoute><ManageProduct></ManageProduct></SellerRoute>
            },
            {
                path: '/dashboard/myBuyer',
                element: <SellerRoute><MyBuyer></MyBuyer></SellerRoute>
            },
            // =============================================== seller route end from here =====================================


            // =============================================== buyer route start from here =====================================

            {
                path: '/dashboard/myOrders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/myWishlist',
                element: <BuyerRoute><MyWishlist></MyWishlist></BuyerRoute>
            },

            // =============================================== buyer route end from here =====================================

        ]
    }
]);

export default router;