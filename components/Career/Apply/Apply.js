import React from 'react';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


const Apply = ({ show, handleClose, handleShow, career, showAlert, setShowAlert }) => {

    const [errorMessage, setErrorMessage] = useState('');
    const [sendSuccessMessage, setSendSuccessMessage] = useState('');
    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    }


    //------------------ Submit Contact Form Data -----------------------
    const submitContactForm = (event) => {
        event.preventDefault();
        const formDataName = event.target.name.value;
        const formDataEmail = event.target.email.value;
        const formDataPhone = event.target.phone.value;
        const formDataExperience = event.target.experience.value;
        const formDataPortfolio = event.target.portfolio.value;
        const formDataLinkedIn = event.target.linkedin.value;
        const formDataResume = selectedFile;

        if (formDataName === undefined || formDataName === "") {
            setErrorMessage('Please Enter Your Name');
        }
        else if (formDataEmail === undefined || formDataEmail === "") {
            setErrorMessage('Please Enter Your Email');
        }
        else if (formDataPhone === undefined || formDataPhone === "") {
            setErrorMessage('Please Enter Your Phone Number');
        }
        else if (formDataExperience === undefined || formDataExperience === "") {
            setErrorMessage('Please Enter Your Experience');
        }
        else if (formDataResume === undefined || formDataResume === null || formDataResume === "") {
            setErrorMessage('Please Upload Your Resume');
        }
        else {
            const data = {
                jobId: career.id,
                name: formDataName,
                email: formDataEmail,
                phone: formDataPhone,
                experience: formDataExperience,
                portfolio: formDataPortfolio,
                linkedin: formDataLinkedIn,
                resume: formDataResume
            }

            axios.post('https://excelitai.com/backend/api/apply-job', data, {
                headers: { "Content-Type": "multipart/form-data" }
            }
            )
                .then(res => {
                    if (res.data === 1) {
                        setSendSuccessMessage('Your Message has Sent Successfully');
                        setErrorMessage('');
                        event.target.reset();
                        setSelectedFile();
                        handleClose();
                        setShowAlert(true);
                    }
                });
        }
    }


    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="xl"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Applying for {career?.job_tittle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={submitContactForm} className="apply-job-form mb-3 px-4" action="#">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <label className="form-label">Name</label>
                                <input type="text" name='name' className="form-control" id="" placeholder="Your Full Name" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <label className="form-label">Email Address</label>
                                <input type="email" name='email' className="form-control" id="" placeholder="example@yourmail.com" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <label className="form-label">Phone Number</label>
                                <input type="text" name='phone' className="form-control" id="" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <label className="form-label">Years of Experience</label>
                                <input type="text" name='experience' className="form-control" id="" placeholder="How long you have been working relevant field" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <label className="form-label">Portfolio Link (Optional)</label>
                                <input type="text" name='portfolio' className="form-control" id="" placeholder="ex- yourportifolio.com" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <label className="form-label">LinkedIn (Optional)</label>
                                <input type="text" name='linkedin' className="form-control" id="" placeholder="Your LinkedIn account link" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <label className="form-label">Upload Resume</label>
                                <input type="file" onChange={handleFileSelect} accept=".pdf" className="form-control" />
                                <small>File Support: *.pdf</small>
                            </div>
                        </div>
                    </div>

                    <p className='mb-0 mt-3 text-danger'>{errorMessage}</p>
                    <div className="mt-4">
                        <input type="submit" className="btn primary-btn py-2 px-5" id="" value="Submit Application" />
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default Apply;