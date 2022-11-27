import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfrimationModal/ConfirmationModal';
import Loader from '../../Shared/Loader/Loader';
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
    const { user, setBooking } = useContext(AuthContext);
    const product = useLoaderData();
    const { _id, name, seller_name, email, category, resell_price, condition, mobile, location, purchase_year, posted_time, description, original_price, image } = product;

    const [show, setShow] = useState(false);

    const handleBooking = (product) => {
        setShow(true);
        setBooking(product)
    }

    return (
        <div className='container'>

            <div className="body">
                <section className="product">
                    <div className="product__photo">
                        <div className="photo-container">
                            <div className="photo-main">
                                <div className="controls">
                                    {/* <i className="material-icons">share</i> */}
                                    <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                    {/* <i className="material-icons">favorite_border</i> */}
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <img src={image} className='img-fluid w-50' alt="green apple slice" />
                                </div>
                            </div>
                            <div className="photo-album">
                                <ul>
                                    <li><img src={image} alt="green apple" /></li>
                                    <li><img src={image} alt="green apple" /></li>
                                    <li><img src={image} alt="green apple" /></li>
                                    <li><img src={image} alt="green apple" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="product__info">
                        <div className="title">
                            <h1>{name}</h1>
                            <span>{condition}</span>
                        </div>
                        <div className="price">
                            $ <span>{resell_price}</span>
                        </div>
                        <div className="variant">
                            <h3>SELECT A COLOR</h3>
                            <ul>
                                {/* <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" /></li>
                                <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" /></li>
                                <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" /></li>
                                <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" /></li> */}

                            </ul>
                            <span className='badge bg-success me-2'>{purchase_year}</span>
                            <span className='badge bg-success me-2'>{original_price}</span>
                        </div>
                        <div className="description">
                            <h3>Seller Details</h3>
                            <ul>
                                <li>{seller_name}</li>
                                <li>{mobile}</li>
                                <li>{location}</li>
                                <li>{posted_time}</li>
                            </ul>
                            <p className='pe-3 ps-3'>{description}</p>
                        </div>
                        <button className="buy--btn" onClick={() => handleBooking(product)}>ADD TO CART</button>
                    </div>
                </section>
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

export default ProductDetails;