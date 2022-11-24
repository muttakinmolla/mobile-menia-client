import React from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Shared/Loader/Loader';
import NavBar from '../Shared/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;