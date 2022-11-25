import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Loader from '../Shared/Loader/Loader';
import NavBar from '../Shared/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;