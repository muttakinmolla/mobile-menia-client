import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className='container'>
            <div className="d-flex justify-content-center">
                <div className=''>
                    <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                        <circle cx="170" cy="170" r="160" stroke="#E2007C" />
                        <circle cx="170" cy="170" r="135" stroke="#404041" />
                        <circle cx="170" cy="170" r="110" stroke="#E2007C" />
                        <circle cx="170" cy="170" r="85" stroke="#404041" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Loader;