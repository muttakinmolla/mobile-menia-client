import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/login.png';
import { AuthContext } from '../../contexts/AuthProvider';
import './Register.css';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const imageHostKey = process.env.REACT_APP_imgbb_key;


    const handleSignUp = (data) => {
        const type = data.type ? 'seller' : 'buyer';
        saveUser(data)
        setSignUpError('');
        createUser(data.email, data.password)

            .then(result => {
                const user = result.user;
                toast.success('user created successfully');
                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, type);
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                setSignUpError(error.message)
            })
    }

    const saveUser = (name, email, userType) => {
        const user = { name, email, userType }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)

            })
    }

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
                                        <form onSubmit={handleSubmit(handleSignUp)}>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control" name='name' placeholder='type your name' {...register("name")} />
                                                {/* {errors?.name && errors}</p> */}
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Email address</label>
                                                <input type="email" className="form-control" name='email' placeholder='type your email' {...register("email", {
                                                    required: "Email is required",
                                                })} />
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control" name='password' placeholder='type your password' {...register("password", {
                                                    required: "password is required",
                                                    minLength: { value: 6, message: 'password must be six charecter long' },
                                                })} />
                                            </div>
                                            <div className=" mb-3 m-auto">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="type" id="flexRadioDefault1" {...register("type")} />
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Default radio
                                                    </label>
                                                </div>
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
                                            <button className='btn primary-bg w-100'><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> login With Google</button>

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