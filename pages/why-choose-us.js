import Head from 'next/head'

export default function WhyChooseUs() {
    return (
        <div className="container">
            <Head>
                
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='why-choose-us'>
                {/* -------------- Header -------------- */}
                <section className='why-choose-us-header'>
                    <div className="row">
                        <div className="col-lg-7 why-choose-us-header-left">
                            <div>
                                <h2 className='mb-4'>Why Choose Us</h2>
                                <h6>We develop innovative and creative products and services that provide total communication and information solutions.</h6>
                                <p className='mt-4'>We, Excel IT AI, develop innovative IT products and services to provide
                                    complete solutions for the best information and communication system.
                                    As a leader in technology exploring, Excel IT AI is committed to exporting
                                    quality software worldwide.  As a leader in technology exploring,
                                    Excel IT AI is committed to exporting quality software worldwide. We offer lots of services,
                                    such as Web Application Development, Mobile Application Development, Customized Application Development,
                                    e-commerce solutions, School Management System, Hospital Management System, Online Health System,
                                    Project Management System, HRMS, etc. Excel IT AI business philosophy is to assure the highest
                                    quality product, total client satisfaction, timely delivery of solutions and the best quality
                                    price ratio found in the industry. </p>

                                <p className='mt-4'>With our vast array of software development, product development, are experienced,
                                    we believe the creation of a robust, user friendly and functionally rich software
                                    solution is a risk-free proposition for Excel IT AI and Client. We are confident
                                    that we will be able to create an exceptional system that will meet and exceed
                                    Client's expectations and vision for the proposed web application.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-center align-items-center">
                            <div className='p-5'>
                                <img className='img-fluid' src="./images/whychooseus/header.jpg" alt="Why Excel IT" srcSet="" />
                            </div>
                        </div>
                        <div className='mb-5'>                          
                            <p className='mt-3'>
                                We, Excel IT AI, ensure client satisfaction through high-quality products, timely delivery,
                                and the best price in the industry. Furthermore, we have experienced teams for individual
                                services to provide user-friendly, robust, and functionally rich solutions to our clients.
                                We are confident that we will be able to create an exceptional system that will meet and
                                exceed Client's expectations and vision for the proposed web application.
                            </p>
                        </div>
                    </div>
                </section>


                {/* -------------- Header -------------- */}
                <section className='why-choose-us-points'>
                    <h1>We Believe That</h1>
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <div className='p-5'>
                                <img className='img-fluid' src="./images/whychooseus/points.png" alt="Why Choose Us" srcSet="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className='why-choose-us-points-list'>
                                <li>
                                    <div className='d-flex'>
                                        <div className='point-number'>
                                            <h3 className='mb-0'>1</h3>
                                        </div>
                                        <div className='point-text'>
                                            <h4>Commitment To Transparency</h4>
                                            <p>Excel IT AI is committed to exporting quality software worldwide.
                                                Strong business relationships, we believe, are built on trust
                                                 and dependability. We collaborate with your team to design 
                                                 and build the ideal platform, and we are committed to 
                                                 providing fair and transparent pricing along the process. 
                                                 We provide you with all of the data you require to make 
                                                 informed business decisions.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='d-flex'>
                                        <div className='point-number'>
                                            <h3 className='mb-0'>2</h3>
                                        </div>
                                        <div className='point-text'>
                                            <h4>Comprehensive Experience</h4>
                                            <p>We're here to Solutions, Whatever your company's specific 
                                                requirements. We have a team of experienced and qualified 
                                                developers who can develop your specific requirements.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='d-flex'>
                                        <div className='point-number'>
                                            <h3 className='mb-0'>3</h3>
                                        </div>
                                        <div className='point-text'>
                                            <h4>Lean Business Model</h4>
                                            <p>The global company model is Syberry creates value for consumers 
                                                through such a lean. we're based in Austin, Texas, with an 
                                                operations center in Europe. This methodology equates to lower 
                                                costs and better service than what our competitors can provide.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='d-flex'>
                                        <div className='point-number'>
                                            <h3 className='mb-0'>4</h3>
                                        </div>
                                        <div className='point-text'>
                                            <h4>Customer-Centric Culture</h4>
                                            <p>Each employee at Excel IT AI is carefully selected to match our 
                                                consumer mentality. We're serious about providing the best
                                                quality software and service (at the best price) to 
                                                add value for our customers.  </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='d-flex'>
                                        <div className='point-number'>
                                            <h3 className='mb-0'>5</h3>
                                        </div>
                                        <div className='point-text'>
                                            <h4>Capacity To Scale</h4>
                                            <p>Our team of more than 100 expert engineers can scale 
                                                any project. That means your software can grow with your business.</p>
                                        </div>
                                    </div>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
