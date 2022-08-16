import Head from 'next/head'

export default function AboutUs() {
    return (
        <div className="container">
            <Head>
                
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {/* <!-- ------------------------------- Navbar End --------------------------------- --> */}

                {/* <!-- ---------------------------------------------------------------------------- -->
                <!-- ----------------------------- Header Start --------------------------------- -->
                <!-- ---------------------------------------------------------------------------- --> */}
                <header className="about-us-banner container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-center header-text">
                                <div>
                                    <h1 className="mb-3">About Us</h1>
                                    <h5>Mission is to bring the power of AI to every business.</h5>
                                    <p className="mt-4">Since our founding in 2021, we grew to understand the importance of time values,
                                        culture, design and development. We're not simply a team of high-tech professionals. We're resourceful
                                        problem solvers and prolific intrapreneurs. We're a team of more than 30 relentlessly curious project managers,
                                        business analysts, software engineers, who love their job every bit as much as you. </p>
                                    <p className="mt-4">
                                        The general purpose of Excel IT AI is to develop and promote advanced information technologies
                                        for multi-user operation. Excel IT AI business philosophy is to assure the highest quality product,
                                        total client satisfaction, timely delivery of solutions and the best quality price ratio found in the industry.
                                        We provide a wide range of services, including Mobile Application Development, Web Design And Development,
                                        Customized Application Development, Project Management System, CRMS, School Management System,
                                        Hospital Management System, Online Health System, UI/UX design services, e-commerce solutions, etc.
                                        We like solving difficult problems and creating high-performance software that's easy to use. Each day,
                                        we continue building long-lasting partnerships with our clients all across the world without ever losing
                                        the drive to strive for excellence and innovation.</p>
                                </div>

                            </div>
                            <div className="col-lg-6">
                                <div className="p-5sf">
                                    <img className="img-fluid" src="../../images/about-us/about-banner.jpg" alt="About Excel IT AI" srcSet="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <!-- ----------------------------- Header End --------------------------------- --> */}

                {/* <!-- ---------------------------------------------------------------------------- -->
                <!-- --------------------------- Main Content Start ----------------------------- -->
                <!-- ---------------------------------------------------------------------------- --> */}
                <main className="about-us container">
                    <div className="our-history">
                        <div className="text-cont">
                            <h2>OUR HISTORY</h2>
                            <h5>History begins in 2019 with the foundation</h5>
                        </div>
                        <div className="timeline-cont">
                            <img className="img-fluid" src="../../images/about-us/about-us-timeline.png" alt="Excel IT AI Timeline" srcSet="" />
                        </div>
                    </div>
                </main>
                {/* <!-- ---------------------------  Main Content End  ----------------------------- --> */}
            </main>
        </div>
    )
}
