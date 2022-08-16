import Script from "next/script";
import Head from "next/head";
import './styles.css';
import Link from "next/link";
import Image from 'next/image';
import Logo from '../images/logo.png';

export default function MyApp({ Component, pageProps }) {

    const changeActiveStatusNavbar = (e, makeActive = null) => {
        const getAllNavlinks = document.querySelectorAll(".nav-link");
        for (let index = 0; index < getAllNavlinks.length; index++) {
            if (getAllNavlinks[index].classList.contains('active')) {
                getAllNavlinks[index].classList.remove('active');
            }
        }

        // if (e.target.classList.contains('dropdown-item')) {

        // }
        // else {
        if (makeActive === null) {
            e.target.classList.add('active');
        }
        else {
            document.getElementById(makeActive).classList.add('active');
        }
        // }



        // navbar-collapse change collapse for mobile
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (!navbarCollapse.classList.contains['collapse']) {
            navbarCollapse.classList.add('collapse');
            navbarCollapse.classList.remove('show');
        }
    }

    return (
        <>
            <Head>
                {/* <!-- --------------- Google Fonts ---------------- --> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@200;300;400;500;600;700;800&display=swap"
                    rel="stylesheet" />


                {/* <!-- -------------- Font Awesome CDN ------------------ --> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                    integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
                    crossOrigin="anonymous" referrerPolicy="no-referrer" />

                {/* <!-- --------------- Style Sheet ---------------- --> */}
                {/* <!-- Boostrap --> */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />

                {/* <!-- --------------- Slick Slider ---------------- --> */}
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css" integrity="sha512-6lLUdeQ5uheMFbWm3CP271l14RsX1xtx+J5x2yeIDkkiBpeVTNhTqijME7GgRKKi6hCqovwCoBTlRBEC20M8Mg==" crossOrigin="anonymous" referrerPolicy="no-referrer" /> */}

                <meta name="description" content="Excel IT AI is a top software company doing highly qualitative software development, web applicetion, UI/UX, project management, eCommerce & mobile apps solutions." />
                <title>Excelitai | Web & Mobile Application Development | Best Software Company</title>

                {/* <meta name="google-site-verification" content="XaE1YK01MEKRIAQJN06k6mDhwGjAAwuaEUUf1ryylZc" /> */}
            </Head>

            {/* <!-- ---------------------------------------------------------------------------- -->
            <!-- ----------------------------- Navbar Start --------------------------------- -->
            <!-- ---------------------------------------------------------------------------- --> */}
            <nav className="navbar navbar-expand-lg navbar-light" id="top-navbar">
                <div className="container">
                    {/* <Link href="/"><a onClick={(e) => changeActiveStatusNavbar(e, 'nav-link-home')} href="" className="navbar-brand" aria-current="page"><img src="./images/logo.png" alt="" srcSet="" /></a></Link> */}
                    <Link href="/"><a onClick={(e) => changeActiveStatusNavbar(e, 'nav-link-home')} href="" className="navbar-brand" aria-current="page"><Image alt="Excel IT Logo" src={Logo}/></a></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between bg-white" id="navbarNavAltMarkup">
                        <div className="navbar-nav flex-grow-1 d-flex justify-content-center">
                            <li className="nav-item">
                                <Link href="/"><a id="nav-link-home" onClick={(e) => changeActiveStatusNavbar(e)} href="" className="nav-link active" aria-current="page">Home</a></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navlink-company" href="" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Company
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link href="/about-us"><a onClick={(e) => changeActiveStatusNavbar(e, 'navlink-company')} className="dropdown-item">About Us</a></Link></li>
                                    <li><Link href="/why-choose-us"><a onClick={(e) => changeActiveStatusNavbar(e, 'navlink-company')} className="dropdown-item">Why Choose Us</a></Link></li>
                                    <li><Link href="/methodology"><a onClick={(e) => changeActiveStatusNavbar(e, 'navlink-company')} className="dropdown-item">Methodology</a></Link></li>
                                    <li><Link href="/team"><a onClick={(e) => changeActiveStatusNavbar(e, 'navlink-company')} className="dropdown-item">Team</a></Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link href="/services">
                                    <a onClick={(e) => changeActiveStatusNavbar(e)} href="" className="nav-link">Services</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/industries"><a onClick={(e) => changeActiveStatusNavbar(e)} href="" className="nav-link">Industries</a></Link>
                            </li>
                            <li className="nav-item">
                                <a onClick={(e) => changeActiveStatusNavbar(e)} href="https://excelitaiportfolio.com/" target="_blank" rel="noreferrer" className="nav-link">Our Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <Link href="/career"><a onClick={(e) => changeActiveStatusNavbar(e)} href="" className="nav-link">Career</a></Link>
                            </li>
                        </div>
                        <div className="mt-2 mt-md-0">
                            <Link href="/contact-us"><a onClick={(e) => changeActiveStatusNavbar(e)} href="" className="btn primary-btn px-4 py-2">Contact Us</a></Link>
                        </div>

                    </div>
                </div>
            </nav>
            {/* <!-- ------------------------------- Navbar End --------------------------------- --> */}

            <Component {...pageProps} />

            {/* <!-- ---------------------------------------------------------------------------- -->
            <!-- ------------------------------ Footer Start -------------------------------- -->
            <!-- ---------------------------------------------------------------------------- --> */}
            <footer className="footer container-fluid p-lg-5 py-4 px-3">
                <div className="row">
                    <div className="col-md-3 col-12 footer-1">
                        <div>
                            <img className="img-fluid" src="images/logo lg.png" alt="Excel IT AI Logo" srcSet="" />
                            <p className="mt-3">Our mission is to assist our businesses
                                in maintaining best-in-class positions in their respective
                                industries, and our team works so hard that pleasures must
                                be avoided. Excel IT AI is committed to exporting quality
                                software worldwide.</p>
                            <a target="_blank" rel="noreferrer" href="https://basis.org.bd/">
                                <img className="img-fluid mt-3" src="images/basis.png" alt="Basis Logo" srcSet="" />
                            </a>

                        </div>
                    </div>
                    <div className="col-md-3 col-12 footer-2">
                        <h6>Useful Links</h6>
                        <ul>
                            <li><a href="#">Fintech</a></li>
                            <li><a href="#">Healthcare & Medicine</a></li>
                            <li><a href="#">Financial & Banking</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Real Estate</a></li>
                            <li><a href="#">Retail Software</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-12 footer-3">
                        <h6>Quick Contact</h6>
                        <ul>
                            <li><i className="fa-solid fa-phone"></i>+88 01611815656</li>
                            <li><i className="fa-solid fa-phone"></i>+88 01407000293</li>
                            <li><i className="fa-solid fa-phone"></i>+88 01958444646</li>
                            <li><i className="fa-solid fa-envelope"></i>info@excelitai.com</li>
                        </ul>
                        <div className="social">
                            <a className="facebook" href="https://www.facebook.com/Excelitai/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                            <a className="twitter" href="https://twitter.com/excel_it_ai" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                            <a className="instagram" href="https://www.instagram.com/excelitai/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                            <a className="linkedin" href="https://bd.linkedin.com/company/excelitai" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <h6>Office Location</h6>
                        <p>17, Alhaz Samsuddin Mansion (9th Floor), Moghbazar, New Easkaton, Ramna, Dhaka-1217</p>
                        <div className="mt-3">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7303.963758625341!2d90.39435087503644!3d23.748025588361934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b926c620f459%3A0xf0b4514991e507c8!2sExcel%20IT%20AI!5e0!3m2!1sen!2sbd!4v1647327665745!5m2!1sen!2sbd"
                                allowFullScreen="" loading="lazy"></iframe>
                        </div>

                    </div>
                </div>
            </footer>
            {/* <!-- ------------------------------  Footer End  -------------------------------- --> */}
            <Script
                id="bootstrap-cdn"
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />

            <Script src="./commonScript.js" />
        </>);
}