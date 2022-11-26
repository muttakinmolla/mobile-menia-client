import React from 'react';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Contact></Contact>
        </div>
    );
};

export default Home;