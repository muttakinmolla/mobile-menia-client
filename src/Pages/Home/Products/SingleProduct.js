import React from 'react';
import { Link } from 'react-router-dom';
import verify from '../../../assets/images/verify.jpg';

const SingleProduct = ({ product }) => {
    const { _id, name, seller_name, email, category, resell_price, condition, mobile, location, purchase_year, posted_time, description, original_price, image } = product;
    return (
        <div className="col-lg-4 mb-5">
            <div className="card">
                <img src={image} className="card-img-top img-fluid w-100 product-image" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">Name : {seller_name}
                        <img className='img-fluid verify' src={verify} alt="" />
                    </li>
                    <li className="list-group-item">Mobile : {mobile}</li>
                    <li className="list-group-item">email : {email}</li>
                    <li className="list-group-item">Location : {location}</li>
                    <li className="list-group-item">sell Price : {resell_price}</li>
                    <li className="list-group-item">new Price : {original_price}</li>
                    <li className="list-group-item">new Price : {original_price}</li>
                    <li className="list-group-item">Type : {condition}</li>
                    <li className="list-group-item">Type : {category}</li>
                    <li className="list-group-item">Buy Time : {purchase_year}</li>
                    <li className="list-group-item">Post Time: {posted_time}</li>
                </ul>
                <div className="card-body">
                    <Link to="#" className="card-link">Card link</Link>
                    <Link to="#" className="card-link">Another link</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;