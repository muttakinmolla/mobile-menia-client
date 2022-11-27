import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfrimationModal/ConfirmationModal';
import Loader from '../../Shared/Loader/Loader';

const ProductDetails = () => {
    const { user, setBooking } = useContext(AuthContext);
    const product = useLoaderData();
    const { _id, name, seller_name, email, category, resell_price, condition, mobile, location, purchase_year, posted_time, description, original_price, image } = product;

    const [show, setShow] = useState(false);


    // const handleOrder = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const product_id = _id;
    //     const buyer_name = user?.displayName;
    //     const buyer_email = user?.email;
    //     const product_name = name;
    //     const buyer_mobile = form.buyer_mobile.value;
    //     const seller_mobile = mobile;
    //     const meting_location = form.meting_location.value;
    //     const opinion = form.opinion.value;

    //     const order = {
    //         product_id,
    //         buyer_name,
    //         seller_name,
    //         image,
    //         buyer_email,
    //         resell_price,
    //         product_name,
    //         buyer_mobile,
    //         seller_mobile,
    //         meting_location,
    //         opinion
    //     }
    //     console.log(order);

    //     fetch('http://localhost:5000/order', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(order)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.acknowledged) {

    //                 toast.success('Order submit successfully');
    //                 navigate('/')
    //             }
    //         })

    // }
    const handleBooking = (product) => {
        setShow(true);
        setBooking(product)
    }

    return (
        <div className='container'>
            {/* <div className='w-50 m-auto'>
                <h1 className=''>Order {name} now</h1>
            </div>
            <div className="row">
                <div className="col-lg-7">
                    <div className="card mb-3 px-4 py-4" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={image} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="d-flex">
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <p className=" m-0">Location :{location}</p>
                                        <p className=" m-0">Name :{seller_name}</p>
                                        <p className=" m-0">Email :{email}</p>
                                    </div>
                                    <div className='card-body'>
                                        <p className=" m-0">Sell Price :{resell_price}</p>
                                        <p className=" m-0">Condition :{condition}</p>
                                        <p className=" m-0">Mobile :{mobile}</p>
                                        <p className=" m-0">Bought Year :{purchase_year}</p>
                                        <p className=" m-0">Posted Time: {posted_time}</p>
                                        <p className=" m-0">original Price :{original_price}</p>
                                    </div>
                                </div>

                                <p className=" m-0">Description: {description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className='w-25 primary-bg mt-2 p-2 rounded text-center m-auto'>
                        <p>Give order</p>
                    </div>
                    {
                        user?.email ?
                            <form onSubmit={handleOrder}>
                                <div className="row mt-4">
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder='name' name="name" value={user?.displayName} readOnly />
                                        </div>

                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder='resell Price' name="resell" value={user.email} readOnly />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder='Original Price' name="original_price" value={resell_price} readOnly />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder='condition' name="condition" value={name} readOnly />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder='enter your mobile number' name="buyer_mobile" />
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder='location' name="meting_location" />
                                        </div>
                                        <div className="mb-3">
                                            <div className="">
                                                <textarea className="form-control textArea" name='opinion' placeholder="write your opinion" ></textarea>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <input className='btn save-btn' type="submit" name="" id="" />
                            </form> :
                            <p>Please Login for order this product</p>
                    }
                </div>
            </div> */}

            {/********************************************** ***************************************************/}

            <div className="body">
                <section className="product">
                    <div className="product__photo">
                        <div className="photo-container">
                            <div className="photo-main">
                                <div className="controls">
                                    <i className="material-icons">share</i>
                                    <i className="material-icons">favorite_border</i>
                                </div>
                                <img src="https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png" alt="green apple slice" />
                            </div>
                            <div className="photo-album">
                                <ul>
                                    <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" /></li>
                                    <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple" /></li>
                                    <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple" /></li>
                                    <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="product__info">
                        <div className="title">
                            <h1>Delicious Apples</h1>
                            <span>COD: 45999</span>
                        </div>
                        <div className="price">
                            R$ <span>7.93</span>
                        </div>
                        <div className="variant">
                            <h3>SELECT A COLOR</h3>
                            <ul>
                                <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple" /></li>
                                <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png" alt="yellow apple" /></li>
                                <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png" alt="orange apple" /></li>
                                <li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png" alt="red apple" /></li>
                            </ul>
                        </div>
                        <div className="description">
                            <h3>BENEFITS</h3>
                            <ul>
                                <li>Apples are nutricious</li>
                                <li>Apples may be good for weight loss</li>
                                <li>Apples may be good for bone health</li>
                                <li>They're linked to a lowest risk of diabetes</li>
                            </ul>
                        </div>
                        <button className="buy--btn" onClick={() => handleBooking(product)}>ADD TO CART</button>
                    </div>
                </section>
            </div>

            {/********************************************** ***************************************************/}

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