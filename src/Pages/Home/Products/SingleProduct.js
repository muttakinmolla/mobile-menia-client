import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import verify from '../../../assets/images/verify.jpg';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfrimationModal/ConfirmationModal';
import Loader from '../../Shared/Loader/Loader';
import { useQuery } from '@tanstack/react-query';

const SingleProduct = ({ product }) => {

    const { user } = useContext(AuthContext);
    const { _id, name, seller_name, email, category, resell_price, condition, mobile, location, purchase_year, posted_time, description, original_price, image } = product;

    const { data: seller, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/verifiedUser/${email}`,)
            const data = await res.json();
            return data;
        }
    });
    console.log(seller)


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

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className="col-lg-6 col-md-6 mb-5">
            <div id="product-container">
                <div className="product-details">
                    <h1 className='text-center'>{name}</h1>
                    <p className="information">Name : {seller_name} {seller?.isVerified === 'verify' && <span className='ms-4'>
                        <img src={verify} className="verify" alt="" /></span>}  </p>
                    <p className="information">Location : {location}  </p>
                    <p className="information">Contact : {mobile}  </p>
                    <p className="information">Condition : {condition}  </p>
                    <div className="product-control">

                        <button className="product-btn">
                            <span className="price">${resell_price}</span>
                            <span className="shopping-cart" onClick={() => handleWishlist(_id)}><FontAwesomeIcon icon={faShoppingCart} className='text-danger'></FontAwesomeIcon></span>
                            <span className="buy"><Link className='get-now' to={`/product/${_id}`}>Get now</Link></span>
                        </button>

                    </div>

                </div>

                <div className="product-image">

                    <img src={image} alt="" />

                    <div className="info">
                        <h2> Description</h2>
                        <ul>
                            <li><strong>purchase_year : </strong> {purchase_year} </li>
                            <li><strong>Name : </strong>{seller_name}</li>
                            <li><strong>Mobile: </strong>{mobile}</li>

                        </ul>
                    </div>
                </div>
            </div>
            {/* ********************* modal ******************************* */}

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ********************* modal ******************************* */}
        </div>
    );
};

export default SingleProduct;