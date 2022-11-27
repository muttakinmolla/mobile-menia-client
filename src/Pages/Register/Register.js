import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/images/login.png';
import { AuthContext } from '../../contexts/AuthProvider';
import './Register.css';

const Register = () => {
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const googleProvider = new GoogleAuthProvider();
    const [error, setError] = useState('');
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();


    const handleSignUp = (data) => {
        const type = data.type ? 'seller' : 'buyer';
        setSignUpError('');
        createUser(data.email, data.password)

            .then(result => {
                const user = result.user;

                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, type);
                        toast.success('user created successfully');
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                setSignUpError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    name: user.displayName,
                    email: user.email,
                    userType: 'buyer',
                }
                const userType = 'buyer';

                saveUser(user.displayName, user.email, userType)


                setError('');
                toast.success('successfully login');
            })
            .catch(error => {
                setError(error.message);
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
                console.log(data)
                getUserToken(email)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const getUserToken = (email) => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate('/');
                }
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
                                                <input type="text" className="form-control" name='name' placeholder='type your name' {...register("name", {
                                                    required: "name is required",
                                                })} />
                                                <p className='text-danger'>{errors?.name && 'name field is required'}</p>
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Email address</label>
                                                <input type="email" className="form-control" name='email' placeholder='type your email' {...register("email", {
                                                    required: "Email is required",
                                                })} />
                                                <p className='text-danger'>{errors?.email && 'email field is required'}</p>
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control" name='password' placeholder='type your password' {...register("password", {
                                                    required: "password is required",
                                                    minLength: { value: 6, message: 'password must be six charecter long' },
                                                })} />
                                                <p className='text-danger'>{errors?.password?.message && errors.password.message}</p>
                                            </div>
                                            <div className=" mb-3 m-auto">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="type" id="flexRadioDefault1" {...register("type")} />
                                                    <label className="form-check-label text-danger ms-2">
                                                        Do you want be a seller? please check this.
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <div>
                                                    {
                                                        signUpError && <p className=' text-danger'>{signUpError}</p>
                                                    }
                                                </div>
                                            </div>
                                            <div className="m-auto pt-lg-2">
                                                <button type="submit" className="btn primary-bg bg-hover w-100">Register</button>
                                            </div>
                                        </form>
                                        <p className='text-center mt-lg-3'>OR</p>
                                        <div className="">
                                            <button onClick={handleGoogleSignIn} className='btn primary-bg bg-hover w-100'><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> login With Google</button>

                                        </div>
                                        <div>
                                            <p className="text-danger">{error}</p>
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