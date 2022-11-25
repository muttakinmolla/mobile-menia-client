import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='primary-bg'>
            <div className="container">
                <div className="row  pt-4 ">
                    <div className="col-lg-4 text-center">
                        <h2><Link className="navbar-brand bike-picker px-3 rounded fw-bold" to="/"><span className='bike'>MOBILE</span> <span className='picker'>MENIA</span></Link></h2>
                        <p>Head Office: Khalishpur, Khulna, 9000</p>
                        <p>Mob: 01711-338153</p>
                        <p>Email: muttakinmmolla@gamilc.om</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <h5>Most viewed Category</h5>
                        <span class="badge bg-primary m-1">iphone</span>
                        <span class="badge bg-primary m-1">samsung</span>
                        <span class="badge bg-primary m-1">sony</span>
                        <span class="badge bg-primary m-1">xiaomi</span>
                        <span class="badge bg-primary m-1">oppo</span>
                        <span class="badge bg-primary m-1">vivo</span>
                        <span class="badge bg-primary m-1">itel</span>
                        <span class="badge bg-primary m-1">huawei</span>
                        <span class="badge bg-primary m-1">onePlus</span>
                        <span class="badge bg-primary m-1">guru</span>
                        <span class="badge bg-primary m-1">intel</span>
                        <span class="badge bg-primary m-1">lgend</span>
                        <span class="badge bg-primary m-1">nokia</span>
                        <span class="badge bg-primary m-1">motorolla</span>
                    </div>
                    <div className="col-lg-4 text-center">
                        <h5>Our Social media LInk</h5>
                        <FontAwesomeIcon icon={faYoutube} className='p-2'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faFacebook} className='p-2'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faInstagram} className='p-2'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTwitter} className='p-2'></FontAwesomeIcon>
                    </div>
                </div>

                <p className='text-center'>copyRight: @md. muttakin molla, all right reserved</p>
            </div>
        </div>
    );
};

export default Footer;