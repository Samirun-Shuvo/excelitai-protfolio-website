import Link from 'next/link';
import React from 'react';

const ContactBanner = () => {
    return (
        <div className='contact-banner'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <h2>Looking for the Best IT Business Solutions?</h2>
                        <p className='mb-0'>As a app web crawler expert, We will help to organize.</p>
                    </div>
                    <div className="col-lg-3 d-flex align-items-center justify-content-center">
                        <Link href="services"><a className="btn primary-btn px-4">Contact Us</a></Link>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default ContactBanner;