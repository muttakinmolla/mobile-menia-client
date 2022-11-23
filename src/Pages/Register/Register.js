import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/login.png';
import './Register.css';

const Register = () => {
    return (
        <div className="bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mt-lg-5 mb-lg-5 m-auto">
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-md-6 d-flex ">
                                    <img src={loginImage} className="img-fluid align-items-center p-2 rounded" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <form >
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control" name='name' placeholder='type your name' />
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Photo Url</label>
                                                <input type="text" className="form-control" name='photoUrl' placeholder='put your photoUrl' />
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Email address</label>
                                                <input type="email" className="form-control" name='email' placeholder='type your email' />
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control" name='password' placeholder='type your password' />
                                            </div>
                                            <div className="mb-3 m-auto">
                                                {/* <p className='text-danger'>{error}</p> */}
                                            </div>
                                            <div className="m-auto pt-lg-2">
                                                <button type="submit" className="btn primary-bg w-100">Register</button>
                                            </div>
                                        </form>
                                        <p className='text-center mt-lg-3'>OR</p>
                                        <div className="">
                                            <button  className='btn primary-bg w-100'><FontAwesomeIcon icon={faGoogle }></FontAwesomeIcon> login With Google</button>

                                        </div>
                                        <p className='ms-2 mt-2'>Already Have an Account? <Link to="/login">Login</Link></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Register;