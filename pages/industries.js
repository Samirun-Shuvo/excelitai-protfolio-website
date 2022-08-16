import Head from 'next/head'
import ContactBanner from '../components/ContactBanner/ContactBanner'

export default function Industries() {
    return (
        <div className="">
            <Head>

                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <!-- ---------------------------------------------------------------------------- -->
            <!-- ----------------------------- Header Start --------------------------------- -->
            <!-- ---------------------------------------------------------------------------- --> */}
            <header className="industries-header container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 px-lg-5 px-3 d-flex align-items-center header-text">
                            <div>
                                <h1 className="pb-3">What we can provide? </h1>
                                <p className="mt-4">At Excel IT AI, we help our team members be at their natural best and innovate
                                    with their imaginations. Together, we can make a difference in the web sphere help people
                                    with their online presence.</p>
                                <div className="mt-5">
                                    <button className="btn primary-btn px-4 me-2">View All</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <img className="img-fluid" src="images/industries/industries-header.png" alt="" srcSet="" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ----------------------------- Header End --------------------------------- --> */}

            {/* <!-- ---------------------------------------------------------------------------- -->
            <!-- --------------------------- Main Content Start ----------------------------- -->
            <!-- ---------------------------------------------------------------------------- --> */}
            <main className="industries container">
                <ul className="nav nav-tabs justify-content-center mb-5" role="tablist">
                    <li className="nav-item" role="presentation">
                        <div className="nav-link active" data-bs-toggle="tab" data-bs-target="#tab-real-estate" type="button" role="tab"
                            aria-selected="true">
                            <div className="">
                                <img src="images/industries/Real-Estate.png" alt="" srcSet="" />
                            </div>
                            <p>Real Estate</p>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-fintech" type="button"
                            role="tab" aria-selected="true">
                            <div>
                                <img src="images/industries/Fintech.png" alt="" srcSet="" />
                            </div>
                            <p>Fintech</p>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-web-development" type="button"
                            role="tab" aria-selected="true">
                            <div>
                                <img src="images/industries/Fintech.png" alt="" srcSet="" />
                            </div>
                            <p>Health</p>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-web-development" type="button"
                            role="tab" aria-selected="true">
                            <div>
                                <img src="images/industries/Education.png" alt="" srcSet="" />
                            </div>
                            <p>Education</p>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-web-development" type="button"
                            role="tab" aria-selected="true">
                            <div>
                                <img src="images/industries/Retail-Store.png" alt="" srcSet="" />
                            </div>
                            <p>Retail Store</p>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-web-development" type="button"
                            role="tab" aria-selected="true">
                            <div>
                                <img src="images/industries/E-Commerce.png" alt="" srcSet="" />
                            </div>
                            <p>E-Commerce</p>
                        </div>
                    </li>
                </ul>


                <div className="tab-content mt-5">

                    {/* <!-- ------------- Real-Estate ------------ --> */}
                    <div className="tab-pane fade show active" id="tab-real-estate" role="tabpanel">
                        <div className="industrie-details-title pt-3">
                            <h2>Real Estate</h2>
                        </div>
                        <div className="row insdustry-content">
                            <div className="col-md-5 p-lg-5 p-3">
                                <div className="insdustry-content-img-cont p-3">
                                    <img className="img-fluid" src="images/services/uiux.png" alt="" srcSet="" />
                                </div>
                            </div>
                            <div className="col-md-7 p-lg-5 p-3 d-flex align-items-center">
                                <div>
                                    <h4>What we do?</h4>
                                    <p>We Help A Large Number Of Our Customers Better Understand What Challenges They Can
                                        Overcome By Adopting Fintech. The Fintech Ecosystem Is Growing Rapidly And Unites
                                        Thousands Of Solutions For Payments And Transfers, Lending And Financing, Insurance,
                                        Financial Management, Markets And Exchanges. <br /><br />

                                        Our Team Has Strong Experience Providing Fintech Software Development Services By
                                        Implementing Both Ready-Made Solutions And Custom Apps. We Not Only Deliver Innovative
                                        Software Products, But Also Ensure Professional Tech Advisory And Support To Manage
                                        Changes To Architecture That Arise After Implementation.
                                    </p>
                                    <div className="industry-keypoints mt-4">
                                        <h6>Key Advantage</h6>
                                        <ul>
                                            <li>Fintech Expertise</li>
                                            <li>Innovation Partner</li>
                                            <li>Focus On Results</li>
                                            <li>High Quality</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <!-- ------------- Fintech Details ------------ --> */}
                    <div className="tab-pane fade" id="tab-fintech" role="tabpanel">
                        <div className="industrie-details-title pt-3">
                            <h2>Fintech Details</h2>
                        </div>
                        <div className="row insdustry-content">
                            <div className="col-md-5 p-5">
                                <div className="insdustry-content-img-cont p-3">
                                    <img className="img-fluid" src="images/services/uiux.png" alt="" srcSet="" />
                                </div>
                            </div>
                            <div className="col-md-7 p-5 d-flex align-items-center">
                                <div>
                                    <h4>What we do?</h4>
                                    <p>We Help A Large Number Of Our Customers Better Understand What Challenges They Can
                                        Overcome By Adopting Fintech. The Fintech Ecosystem Is Growing Rapidly And Unites
                                        Thousands Of Solutions For Payments And Transfers, Lending And Financing, Insurance,
                                        Financial Management, Markets And Exchanges. <br /><br />

                                        Our Team Has Strong Experience Providing Fintech Software Development Services By
                                        Implementing Both Ready-Made Solutions And Custom Apps. We Not Only Deliver Innovative
                                        Software Products, But Also Ensure Professional Tech Advisory And Support To Manage
                                        Changes To Architecture That Arise After Implementation.
                                    </p>
                                    <div className="industry-keypoints mt-4">
                                        <h6>Key Advantage</h6>
                                        <ul>
                                            <li>Fintech Expertise</li>
                                            <li>Innovation Partner</li>
                                            <li>Focus On Results</li>
                                            <li>High Quality</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- ------------- Our Development Process ------------ --> */}
                <div className='development-process'>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-2">
                        <div className="col">
                            <div className="card">
                                <img src="images/industries/process/business_group.png" className="card-img-top p-4" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title orange">Business analysis</h5>
                                    <p className="card-text">Any fintech project starts with a discovery phase during which we collect all functional and non-functional requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="images/industries/process/development_group.png" className="card-img-top p-4" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title yellow">Development</h5>
                                    <p className="card-text">Our software development life cycle is built concerning best practices and approaches.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="images/industries/process/testing_group.png" className="card-img-top p-4" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title blue">Testing</h5>
                                    <p className="card-text">The testing strategy is developed at the beginning of the project and is adhered to across the development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="images/industries/process/deployment_group.png" className="card-img-top p-4" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title green">Deployment</h5>
                                    <p className="card-text">Your environment will be checked to identify if it is prepared for successful deployment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src="images/industries/process/support_group.png" className="card-img-top p-4" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title sky">Support and maintenance</h5>
                                    <p className="card-text">Troubleshooting, technical support, and maintenance are key services we offer after the software has been deployed.</p>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>

            </main>
            {/* <!-- ---------------------------  Main Content End  ----------------------------- --> */}

            <ContactBanner></ContactBanner>
        </div>
    )
}
