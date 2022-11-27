import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import './NavBar.css';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.log(error))
    }
    return (
        <div className='nav-bar'>
            <nav className="container navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid py-1">
                    <Link className="navbar-brand bike-picker px-3 rounded fw-bold" to="/"><span className='bike'>MOBILE</span> <span className='picker'>MENIA</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='w-100 d-lg-block d-md-block d-none'>
                        <marquee className='m-auto' direction="right">Choose your bike from here. Thousand of mobile collection is here. just choose and buy.</marquee>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-danger" aria-current="page" to="/"></Link>
                            </li>
                            <Link to='/dashboard/myWishlist' className=" position-relative">
                                <FontAwesomeIcon icon={faShoppingCart} className='fs-1'>


                                </FontAwesomeIcon>
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    99+
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </Link>
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/blog">Blog</Link>
                            </li>
                            {
                                user?.uid ?
                                    <>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle text-white" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {user?.displayName}
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className="dropdown-item" to="dashboard">Dashboard</Link></li>
                                                <li><button className="dropdown-item" onClick={handleLogOut} to="/">Logout</button></li>
                                                <li><hr className="dropdown-divider" /></li>
                                            </ul>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to="/login">login</Link>
                                        </li>
                                    </>

                            }



                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;