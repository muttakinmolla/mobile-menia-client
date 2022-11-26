import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import verify from '../../../assets/images/verify.jpg';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfrimationModal/ConfirmationModal';
import Loader from '../../Shared/Loader/Loader';

const SingleProduct = ({ product }) => {

    const { user } = useContext(AuthContext);
    const { _id, name, seller_name, email, category, resell_price, condition, mobile, location, purchase_year, posted_time, description, original_price, image } = product;

    const [booking, setBooking] = useState({});
    console.log(booking)


    const handleWishlist = (id) => {
        if (user?.email) {
            const userName = user?.displayName;
            const productId = id;
            const productName = name;
            const userEmail = user?.email;
            const seller_email = email;
            const product = {
                userName,
                userEmail,
                seller_email,
                productId,
                productName,
                seller_name,
                original_price,
                resell_price
            }
            fetch('http://localhost:5000/wishlist', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success(`${productName} added to your wishlist`)
                    }
                })
        }
        else {
            toast.error('Please login first');
        }

    }
    return (
        <div className="col-lg-6 col-md-6 mb-5">
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
                <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <Link to='' className='btn primary-bg'>See Details</Link>
                    </div>
                    <div className='d-flex align-items-center'>
                        <FontAwesomeIcon icon={faHeart} onClick={() => handleWishlist(_id)}></FontAwesomeIcon>

                        <button type="button" onClick={() => setBooking(product)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
            <ConfirmationModal
                product={booking}
                setBooking={setBooking}
            ></ConfirmationModal>
        </div>
    );
};

export default SingleProduct;