import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Pages/Layouts/DashboardLayout";
import Main from "../Pages/Layouts/Main";

const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>
    }
]);

export default router;