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

    const { user, setBooking } = useContext(AuthContext);
    const { _id, name, seller_name, email, category, resell_price, status, condition, mobile, location, purchase_year, posted_time, description, original_price, image } = product;
    const [show, setShow] = useState(false);

    const { data: seller, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://bike-picker-server.vercel.app/verifiedUser/${email}`,)
            const data = await res.json();
            return data;
        }
    });

    const handleBooking = (product) => {
        setShow(true);
        setBooking(product)
    }

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
            fetch('https://bike-picker-server.vercel.app/wishlist', {
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
                    <div type="button" className=" position-relative">
                        <h2 className='text-center'>{name}</h2>

                        <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${status === 'inStock' ? "bg-primary" : "bg-danger"}`}>
                            {status === 'inStock' ? 'Available' : 'Sold Out'}

                        </span>
                    </div>
                    <p className="information">Name : {seller_name} {seller?.isVerified === 'verify' && <span className='ms-4'>
                        <img src={verify} className="verify" alt="" /></span>}  </p>
                    <p className="information">Location : {location}  </p>
                    <p className="information">Contact : {mobile}  </p>
                    <p className="information">Condition : {condition}  </p>
                    <div className="d-flex justify-content-center">
                        <span className="btn primary-bg text-white"><Link className='see-more' to={`/product/${_id}`}>SEE DETAILS</Link></span>
                    </div>
                    <div className="product-control">

                        <button className="product-btn">
                            <span className="price">${resell_price}</span>
                            <span className="shopping-cart" onClick={() => handleWishlist(_id)}><FontAwesomeIcon icon={faShoppingCart} className='text-danger'></FontAwesomeIcon></span>

                            <button className='btn buy' onClick={() => handleBooking(product)}>Get Now</button>

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

            <ConfirmationModal
                show={show}
                setShow={setShow}
            ></ConfirmationModal>

            {/* ********************* modal ******************************* */}

        </div>
    );
};

export default SingleProduct;