import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const ProductDetails = () => {
    const { user } = useContext(AuthContext);
    const product = useLoaderData();
    const { _id, name, seller_name, email, category, resell_price, condition, mobile, location, purchase_year, posted_time, description, original_price, image } = product;
    const navigate = useNavigate();


    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const product_id = _id;
        const buyer_name = user?.displayName;
        const buyer_email = user?.email;
        const product_name = name;
        const buyer_mobile = form.buyer_mobile.value;
        const seller_mobile = mobile;
        const meting_location = form.meting_location.value;
        const opinion = form.opinion.value;

        const order = {
            product_id,
            buyer_name,
            seller_name,
            image,
            buyer_email,
            resell_price,
            product_name,
            buyer_mobile,
            seller_mobile,
            meting_location,
            opinion
        }
        console.log(order);

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('Order submit successfully');
                    navigate('/')
                }
            })

    }

    if (!user) {
        return <Loader></Loader>
    }
    return (
        <div className='container'>
            <div className='w-50 m-auto'>
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;