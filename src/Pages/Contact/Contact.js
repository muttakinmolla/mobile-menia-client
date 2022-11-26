import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
    return (
        <div className="main">
            <div className='container'>
                <div className="wrapper">
                    <form action="#" className="card-content">
                        <div className="container">
                            <div className="image m-auto">
                                <FontAwesomeIcon className='message' icon={faEnvelope}></FontAwesomeIcon>
                            </div>
                            <h1>Subscribe</h1>
                            <p>Subscribe to our newsletter and stay updated.</p>
                        </div>
                        <div className="form-input">
                            <input type="email" placeholder="Your Email" />
                            <button className="subscribe-btn">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;