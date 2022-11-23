import { createBrowserRouter } from "react-router-dom";
import DisplayError from "../Pages/DisplayError/DisplayError";
import DashboardLayout from "../Pages/Layouts/DashboardLayout";
import Main from "../Pages/Layouts/Main";

const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <DisplayError></DisplayError>
    }
]);

export default router;