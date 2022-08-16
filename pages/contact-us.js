import Head from 'next/head'
import { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactUs() {

    const [errorMessage, setErrorMessage] = useState('');
    const [sendSuccessMessage, setSendSuccessMessage] = useState('');
    const [recaptchaValid, setRecaptchaValid] = useState(false);

    //------------------ Submit Contact Form Data -----------------------
    const submitContactForm = (event) => {
        event.preventDefault();
        const formDataName = event.target.name.value;
        const formDataEmail = event.target.email.value;
        const formDataSubject = event.target.subject.value;
        const formDataMessage = event.target.message.value;

        if (formDataName === undefined || formDataName === "") {
            setErrorMessage('Please Enter Your Name');
        }
        else if (formDataEmail === undefined || formDataEmail === "") {
            setErrorMessage('Please Enter Your Email');
        }
        else if (formDataSubject === undefined || formDataSubject === "") {
            setErrorMessage('Please Write The Subject');
        }
        else if (formDataMessage === undefined || formDataMessage === "") {
            setErrorMessage('Please Write Your Message');
        }
        else {

            
            const data = {
                name: formDataName,
                email: formDataEmail,
                subject: formDataSubject,
                message: formDataMessage
            }

            if(recaptchaValid === true){
                axios.post('https://excelitai.com/backend/api/send-message', data)
                .then(res => {
                    if (res.data === 1) {
                        setSendSuccessMessage('Your Message has Sent Successfully');
                        setErrorMessage('');
                    }
                    event.target.reset();
                });
            }
            else{
                setErrorMessage('Please verify recaptcha')
            }
            
        }      
    }


    //----------- Recaptcha Onchange -------------
    function recaptchaOnChange(value) {
        if(value === null){
            setRecaptchaValid(false);
        }
        else{
            setRecaptchaValid(true);
        }                       
    }


    return (
        <div className="container">
            <Head>

                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <!-- ---------------------------------------------------------------------------- -->
            <!-- ----------------------------- Header Start --------------------------------- -->
            <!-- ---------------------------------------------------------------------------- --> */}
            <header className="contact-us container">
                <div className="row my-5">
                    <div className="col-lg-6 px-5 d-flex align-items-center p-5">
                        <div className="contact-us-left p-5">
                            <h6>Contact Us</h6>
                            <h2 className="pb-2">How Can We Help You?</h2>
                            <p className="mt-3">If you have any question? So, Please Message or Contact with us. We can try to
                                answer on your questions.</p>
                            <div className="mt-4 contact-us-dial">
                                <p><i className="fa-solid fa-phone fa-sm"></i> +88 01611815656</p>
                                <p><i className="fa-solid fa-phone fa-sm"></i> +88 01407000293</p>
                                <p><i className="fa-solid fa-phone fa-sm"></i> +88 01958444646</p>
                                <p><i className="fa-solid fa-envelope fa-sm"></i> info@excelitai.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center px-5">
                        <div className="contact-us-right">
                            <form onSubmit={submitContactForm} className="contact-us-form mb-3" action="#">
                                <div className="mb-3">
                                    <input type="text" name='name' className="form-control" id="" placeholder="Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" name='email' className="form-control" id="" placeholder="example@yourmail.com" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" name='subject' className="form-control" id="" placeholder="Subject" />
                                </div>
                                <div className="mb-3">
                                    <textarea type="text" name='message' className="form-control" id="" placeholder="Message" rows="5"></textarea>
                                </div>
                                <p className='mb-0 mt-3 text-danger'>{errorMessage}</p>
                                <div className="mt-4">
                                    <input type="submit" className="btn primary-btn w-100 py-2" id="" value="SUBMIT" />
                                </div>
                            </form>
                            
                            <ReCAPTCHA
                                sitekey="6Lc50NofAAAAAOW0cgke1fGG_ye-SB7yEzmerPKu"
                                onChange={recaptchaOnChange}
                            />

                            <p className='mb-0 mt-3 text-success'>{sendSuccessMessage}</p>


                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ----------------------------- Header End --------------------------------- --> */}
            {/* 
            <!-- ---------------------------------------------------------------------------- -->
            <!-- --------------------------- Main Content Start ----------------------------- -->
            <!-- ---------------------------------------------------------------------------- --> */}
            <main className="contact-us-content container mt-5">
                <h2 className="pb-2">Our Location</h2>
                <p>This is our location. Please visit our company.</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1150.3025352857856!2d90.40338712379543!3d23.74798707035119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b926c620f459%3A0xf0b4514991e507c8!2sExcel%20IT%20AI!5e0!3m2!1sen!2sbd!4v1648438893516!5m2!1sen!2sbd"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>

            </main>
            {/* <!-- ---------------------------  Main Content End  ----------------------------- --> */}
        </div>
    )
}
