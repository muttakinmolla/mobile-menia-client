import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import NavBar from '../Shared/NavBar';
import './Dashboard.css';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    return (
        <div>
            <NavBar></NavBar>
            <div className='px-3'>
                <div className="row">
                    <div className="col-3 primary-bg aside">
                        <ul className='mt-lg-4'>
                            <li className='pt-2 pb-2 dashboard-li'><Link to='/dashboard'>dashboard</Link></li>

                            {
                                isAdmin && <>
                                    <li className='pt-3 pb-2 dashboard-li'><Link to='/dashboard/addCategory'>Add Category</Link></li>
                                    <li className='pt-3 pb-2 dashboard-li'><Link to='/dashboard/allUsers'>All User</Link></li>
                                    <li className='pt-3 pb-2 dashboard-li'><Link to='/dashboard/allReport'>Reported Item</Link></li>
                                </>
                            }

                            {
                                isSeller && <>
                                    <li className='pt-3 pb-2 dashboard-li'><Link to='/dashboard/allProduct'>Manage Product</Link></li>
                                    <li className='pt-3 pb-2 dashboard-li'><Link to='/dashboard/addProduct'>Add Product</Link></li>
                                    <li className='pt-3 pb-2 dashboard-li'><Link to='/dashboard/myBuyer'>My Buyer</Link></li>
                                </>
                            }

                            {
                                isBuyer && <>

                                    <li className='pt-3 pb-2 dashboard-li'><Link to='/dashboard/myOrders'>My Orders</Link></li>
                                    <li className='pt-3 pb-2 dashboard-li'><Link to='/dashboard/myWishlist'>My Wishlist</Link></li>
                                </>
                            }

                        </ul>
                    </div>
                    <div className="col-9">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;