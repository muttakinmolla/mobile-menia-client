import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';


const Category = ({ category }) => {
    const { _id, name } = category;
    return (
        <div className="col-lg-3 mb-5">

            <div className="card text-center text-class">
                {/* <img src={image} className="card-img-top img-fluid w-100 product-image" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title text-class">{name}</h5>
                    <p className="card-text text-class">Buy All type of {name} Phones</p>
                </div>

                <div className="card-body">
                    <Link to="#" className="card-link">Card link</Link>
                    <Link to="#" className="card-link">Another link</Link>
                </div>
            </div>
        </div>
    );
};

export default Category;