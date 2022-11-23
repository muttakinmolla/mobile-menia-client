import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../Shared/NavBar';
import './Dashboard.css';


const DashboardLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='px-3'>
                <div className="row">
                    <div className="col-3 primary-bg aside">
                        <ul className='mt-lg-4'>
                            <li className='pt-2 pb-2 dashboard-li'><Link to='/dashboard'>dashboard</Link></li>
                            <li className='pt-3 pb-2 dashboard-li'><Link to='/dashboard'>dashboard</Link></li>
                            <li className='pt-3 pb-2 dashboard-li'><Link to='/dashboard'>dashboard</Link></li>
                            <li className='pt-3 pb-2 dashboard-li'><Link to='/dashboard'>dashboard</Link></li>
                            <li className='pt-3 pb-2 dashboard-li'><Link to='/dashboard'>dashboard</Link></li>
                            
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