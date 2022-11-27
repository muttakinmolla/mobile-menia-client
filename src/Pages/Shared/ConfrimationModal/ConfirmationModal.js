import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const ConfirmationModal = ({ show, setShow }) => {
    const { user, booking, setBooking } = useContext(AuthContext);
    const { _id, name, seller_name, email, category, resell_price, condition, mobile, location, purchase_year, posted_time, description, original_price, image } = booking;
    const navigate = useNavigate();

    const handleClose = () => {
        setShow(false);
        setBooking({})
    };

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const product_id = _id;
        const buyer_name = user?.displayName;
        const buyer_email = user?.email;
        const seller_email = email;
        const product_name = name;
        const buyer_mobile = form.buyer_mobile.value;
        const seller_mobile = mobile;
        const meting_location = form.meting_location.value;
        const opinion = form.opinion.value;

        const order = {
            product_id,
            buyer_name,
            seller_name,
            seller_email,
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
                    handleProductStatusUpdate(product_id)

                }
            })

    }

    const handleProductStatusUpdate = id => {
        fetch(`http://localhost:5000/product/status/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    handleClose();
                    toast.success('Order submit successfully');
                    navigate('/');
                }
            })
    }

    return (
        < >


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{booking.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

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
                                <div className="d-flex justify-content-between">
                                    <input className='btn save-btn' type="submit" name="" id="" />
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </div>
                            </form> :
                            <p>Please Login <Link to='/login'>LOGIN</Link> for order this product</p>
                    }

                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default ConfirmationModal;