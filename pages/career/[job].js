import Head from 'next/head';
import Image from 'next/image';
import Logo from '../../images/logo.png';
import ReactHtmlParser from 'react-html-parser';
import Apply from '../../components/Career/Apply/Apply';
import { useState } from 'react';
import SweetAlert from 'sweetalert-react';

export default function ViewJobPost({ career, job }) {
    console.log(career);
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="container-fluid px-0">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css" integrity="sha512-fRVSQp1g2M/EqDBL+UFSams+aw2qk12Pl/REApotuUVK1qEXERk3nrCFChouag/PdDsPk387HJuetJ1HBx8qAg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </Head>

            <main className='view-job-details'>
                <div className="job-title">
                    <h2>{career?.job_tittle}</h2>
                </div>
                <section className='container'>
                    <div>
                        <Image src={Logo} />
                        <p className='text-gray'>Software Company</p>
                    </div>
                    <div className="row mt-6 mb-5">
                        <div className="col-lg-8">
                            <div>
                                <h6>Job Summary</h6>
                                <div className='job-description-text'>
                                    {ReactHtmlParser(career?.job_summary)}
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h6>Role & Responsibilities</h6>
                                <div className='job-description-text'>
                                    {ReactHtmlParser(career?.role_responsibilities)}
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h6>Minimum Qualifications</h6>
                                <div className='job-description-text'>
                                    {ReactHtmlParser(career?.minimum_qualification)}
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h6>Additional Qualifications</h6>
                                <div className='job-description-text'>
                                    {ReactHtmlParser(career?.additional_qualification)}
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h6>Compensation & Other benefits:</h6>
                                <div className='job-description-text'>
                                    {ReactHtmlParser(career?.compensation_other_benefit)}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='job-overview'>
                                <h6 className='text-center mb-4'>Job Overview</h6>

                                <div className='job-overview-item'>
                                    <div className='me-3'>
                                        <img src="../images/career/date.png" alt="Job Date" srcSet="" />
                                    </div>
                                    <div>
                                        <p>Date Posted</p>
                                        <p>{career?.created_at.slice(0, 10)}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='job-overview-item'>
                                    <div className='me-3'>
                                        <img src="../images/career/mail.png" alt="Job Mail" srcSet="" />
                                    </div>
                                    <div>
                                        <p>Email</p>
                                        <p>career@excelitai.com</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='job-overview-item'>
                                    <div className='me-3'>
                                        <img src="../images/career/phone-call.png" alt="" srcSet="" />
                                    </div>
                                    <div>
                                        <p>Phone Number</p>
                                        <p>+88 01611815656</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='job-overview-item'>
                                    <div className='me-3'>
                                        <img src="../images/career/map-pin.png" alt="Job Map" srcSet="" />
                                    </div>
                                    <div>
                                        <p>Location</p>
                                        <p>17, Alhaz Samsuddin Mansion (9th Floor), Moghbazar, New Easkaton, Ramna, Dhaka-1217</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='job-overview-item'>
                                    <div className='me-3'>
                                        <img src="../images/career/title.png" alt="Job Title" srcSet="" />
                                    </div>
                                    <div>
                                        <p>Job Title</p>
                                        <p>{career?.job_tittle}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className='job-overview-item'>
                                    <div className='me-3'>
                                        <img src="../images/career/title.png" alt="Job Type" srcSet="" />
                                    </div>
                                    <div>
                                        <p>Job Type</p>
                                        <p>{career?.job_type}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-5 text-center">
                        <p>If you are interested please apply by {career?.deadline}, with the subject line : “{career?.job_tittle}” and email to career@excelitai.com</p>
                        <p>or apply directly by clicking Apply Here below</p>
                        <div className='text-center'>
                            <button onClick={handleShow} className='btn primary-btn px-4 py-2'>Apply Here</button>
                        </div>
                    </div>
                </section>
            </main>
            <Apply
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                career={career}
                showAlert={showAlert}
                setShowAlert={setShowAlert}
            ></Apply>
            <SweetAlert               
                show={showAlert}
                title="Applied Successfully"
                text="We have received your application, our HR team will contact you soon. Thank you for applying."
                onConfirm={() => setShowAlert(false)}
            />
        </div>
    )
}


export async function getServerSideProps(context) {

    const { params } = context;
    const { job } = params;
    //--------- Career API -----------
    const resCareer = await fetch(`https://excelitai.com/backend/api/career/${job}`);
    const career = await resCareer.json();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            career: career,
            job
        },
    }
}
