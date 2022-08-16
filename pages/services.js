import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import ContactBanner from '../components/ContactBanner/ContactBanner';
import ToolboxWeb from '../components/Toolbox/ToolboxWeb/ToolboxWeb';
import TooboxMob from '../components/Toolbox/TooboxMob/TooboxMob';
import ToolboxUIUX from '../components/Toolbox/ToolboxUIUX/ToolboxUIUX';
import WebApplicationRight from '../components/Services/WebApplication/WebApplicationRight';
import WebApplicationBottom from '../components/Services/WebApplication/WebApplicationBottom';
import AppDevelopmentRight from '../components/Services/AppDevelopment/AppDevelopmentRight';
import AppDevelopmentBottom from '../components/Services/AppDevelopment/AppDevelopmentBottom';
import CustomSoftwareRight from '../components/Services/CustomSoftware/CustomSoftwareRight';
import CustomSoftwareBottom from '../components/Services/CustomSoftware/CustomSoftwareBottom';
import UIUXDesignRight from '../components/Services/UIUXDesign/UIUXDesignRight';
import UIUXDesignBottom from '../components/Services/UIUXDesign/UIUXDesignBottom';

export default function Service() {
  const [serviceActiveTab, setServiceActiveTab] = useState('web-development');
  const router = useRouter();
  const { service } = router.query;


  useEffect(() => {
    if (service !== undefined) {
      setServiceActiveTab(service);

    }

  }, []);

  useEffect(() => {
    var tabPanes = document.querySelectorAll('.services-tab-content .tab-pane');
    for (let i = 0; i < tabPanes.length; i++) {
      if (tabPanes[i].classList.contains('active')) {
        document.getElementById(tabPanes[i].id).classList.remove('show');
        document.getElementById(tabPanes[i].id).classList.remove('active');
      }
    }

    document.getElementById(serviceActiveTab).classList.add('show');
    document.getElementById(serviceActiveTab).classList.add('active');

  }, [serviceActiveTab])

  const changeServiceTab = (id) => {
    setServiceActiveTab(id)
  }

  return (
    <div className="">
      <Head>

        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* <!-- ---------------------------------------------------------------------------- -->
      <!-- ----------------------------- Header Start --------------------------------- -->
      <!-- ---------------------------------------------------------------------------- --> */}
      <header className="services-header container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 px-5 d-flex align-items-center header-text">
              <div>
                <h1 className="pb-3">What we can provide? </h1>
                <p className="mt-4">We provide quality services throughout the world,
                  hence our clients bear the testimony of our services worldwide.
                  As we are a leader in the technology service arena, we explore
                  cutting-edge software around the globe. Our goal is to develop and
                  promote top-notch IT services for multi-user operations. With our
                  vast array of software development, product development, are experienced,
                  we believe the creation of a robust, user friendly and functionally rich
                  software solution is a risk-free proposition for Excel IT AI and Client.</p>
                <div className="mt-5">
                  <button className="btn primary-btn px-4 me-2">Our Services</button>
                  <button className="btn primary-transparent-btn px-4">Contact Us</button>
                </div>

              </div>

            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <img className="img-fluid" src="images/services/service-header.png" alt="Our Services" srcSet="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ----------------------------- Header End --------------------------------- --> */}


      {/* 
      <!-- ---------------------------------------------------------------------------- -->
      <!-- --------------------------- Main Content Start ----------------------------- -->
      <!-- ---------------------------------------------------------------------------- --> */}

      <main id='services' className="services container">

        {/* ----------------------Services Nav Tabs Start ------------------- */}
        <section>
          <ul className="nav nav-tabs justify-content-center mb-5" role="tablist">
            <li className="nav-item" role="presentation">
              <div className="nav-link active" data-bs-toggle="tab" onClick={() => changeServiceTab('web-development')} type="button"
                role="tab" aria-selected="true">
                <div>
                  <img src="images/services/carbon_application-web.png" alt="Web Development" srcSet="" />
                </div>
                <p>Web Development</p>
              </div>
            </li>
            <li className="nav-item" role="presentation">
              <div className="nav-link" data-bs-toggle="tab" onClick={() => changeServiceTab('app-development')} type="button"
                role="tab" aria-selected="true">
                <div>
                  <img src="images/services/mobile.png" alt="App Development" srcSet="" />
                </div>
                <p>App Development</p>
              </div>
            </li>
            <li className="nav-item" role="presentation">
              <div className="nav-link" data-bs-toggle="tab" onClick={() => changeServiceTab('custom-software')} type="button"
                role="tab" aria-selected="true">
                <div>
                  <img src="images/services/bi_code-slash.png" alt="Custom Software" srcSet="" />
                </div>
                <p>Custom Software</p>
              </div>
            </li>
            <li className="nav-item" role="presentation">
              <div className="nav-link" data-bs-toggle="tab" onClick={() => changeServiceTab('uiux')} type="button" role="tab"
                aria-selected="true">
                <div className="">
                  <img src="images/services/fluent_design-ideas-20-regular.png" alt="UI/UX Design" srcSet="" />
                </div>
                <p>UI/UX Design</p>
              </div>
            </li>
            <li className="nav-item" role="presentation">
              <div className="nav-link" data-bs-toggle="tab" onClick={() => changeServiceTab('digital-marketing')} type="button"
                role="tab" aria-selected="true">
                <div>
                  <img src="images/services/tabler_speakerphone.png" alt="Digital Marketing" srcSet="" />
                </div>
                <p>Digital Marketing</p>
              </div>
            </li>           
          </ul>

          <div className="service-details-title pt-3">
            <h2>Service Details</h2>
          </div>

          <div className="tab-content services-tab-content mt-5">
            {/* <!-- ------------- Web Development ------------ --> */}
            <div className="tab-pane fade show active" id="web-development" role="tabpanel">
              <div className="row service-content">
                <div className="col-md-5 p-5">
                  <div className="service-content-img-cont p-3">
                    <img className="img-fluid" src="images/services/web-development.jpg" alt="Web Development" srcSet="" />
                  </div>
                </div>
                <div className="col-md-7 p-5 d-flex align-items-center">
                  <div>                    
                      <WebApplicationRight></WebApplicationRight>
                  </div>
                </div>
              </div>
              <WebApplicationBottom></WebApplicationBottom>
            </div>



            {/* <!-- ------------- Mobile App Development ------------ --> */}
            <div className="tab-pane fade" id="app-development" role="tabpanel">
              <div className="row service-content">
                <div className="col-md-5 p-5">
                  <div className="service-content-img-cont p-3">
                    <img className="img-fluid" src="images/services/mobile-app.jpg" alt="Mobile App Development" srcSet="" />
                  </div>
                </div>
                <div className="col-md-7 p-5 d-flex align-items-center">
                  <div>
                    <h4>App Development</h4>
                    <AppDevelopmentRight></AppDevelopmentRight>                  
                  </div>
                </div>
              </div>
              <AppDevelopmentBottom></AppDevelopmentBottom>
            </div>


            {/* <!-- ------------- Custom Software Development ------------ --> */}
            <div className="tab-pane fade" id="custom-software" role="tabpanel">
              <div className="row service-content">
                <div className="col-md-5 p-5">
                  <div className="service-content-img-cont p-3">
                    <img className="img-fluid" src="images/services/custom-software.jpg" alt="Custom Software Development" srcSet="" />
                  </div>
                </div>
                <div className="col-md-7 p-5 d-flex align-items-center">
                  <div>
                    <h4>Custom Software  Development</h4>
                    <CustomSoftwareRight></CustomSoftwareRight>                    
                  </div>
                </div>
              </div>
              <CustomSoftwareBottom></CustomSoftwareBottom>
            </div>


            {/* <!-- ------------- UI/UX Design ------------ --> */}
            <div className="tab-pane fade" id="uiux" role="tabpanel">
              <div className="row service-content">
                <div className="col-md-5 p-5">
                  <div className="service-content-img-cont p-3">
                    <img className="img-fluid" src="images/services/uiux.jpg" alt="UI/UX Design" srcSet="" />
                  </div>
                </div>
                <div className="col-md-7 p-5 d-flex align-items-center">
                  <div>
                    <h4>UI/UX Design</h4>
                    <UIUXDesignRight></UIUXDesignRight>                    
                  </div>
                </div>
              </div>
              <UIUXDesignBottom></UIUXDesignBottom>
            </div>


            {/* <!-- ------------- Digital Marketing ------------ --> */}
            <div className="tab-pane fade" id="digital-marketing" role="tabpanel">
              <div className="row service-content">
                <div className="col-md-5 p-5">
                  <div className="service-content-img-cont p-3">
                    <img className="img-fluid" src="images/services/digital-markteing.jpg" alt="Digital Marketing" srcSet="" />
                  </div>
                </div>
                <div className="col-md-7 p-5 d-flex align-items-center">
                  <div>
                    <h4>Digital Marketing</h4>
                    <p>We have professional specialists who execute dynamic web advertising arrangements in order
                      to boost your business goals. We increase customer engagement with completely customized
                      strategies and centered site improved methodology. Also, we have digital marketing experts
                      who focus on customer engagement and ultimate conversion on each and every project. We will
                      provide you with Digital Marketing services that overreach your desires.
                      <br /><br />

                      Our Services: <br />
                      - Search Engine Optimization (SEO) <br />
                      - Search Engine Marketing (SEM) <br />
                      - Social Media marketing (SMM) <br />
                      - Email Marketing <br />
                      - Video Marketing <br />
                      - Audio Marketing <br />
                      - Affiliate Marketing <br />
                      - Content research <br />
                      - Content Marketing <br />
                      - Web Research <br />
                      - Lead Generation <br />


                    </p>
                    <div className="row service-content-icons mt-4">
                      <div className="col-md-4 col-12 d-flex align-items-center">
                        <div className="img-cont">
                          <img className="img-fluid" src="images/services/sd-security.png" alt="Security"
                            srcSet="" />
                        </div>
                        <h6>Money Back<br />Guarantee</h6>
                      </div>
                      <div className="col-md-4 col-12 d-flex align-items-center">
                        <div className="img-cont">
                          <img className="img-fluid" src="images/services/sd-quality.png" alt="Quality"
                            srcSet="" />
                        </div>
                        <h6>Best Quality<br />Support</h6>
                      </div>
                      <div className="col-md-4 col-12 d-flex align-items-center">
                        <div className="img-cont">
                          <img className="img-fluid" src="images/services/sd-cheap.png" alt="Cheap Price"
                            srcSet="" />
                        </div>
                        <h6>Cheap Price<br />Provider</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>           
          </div>
        </section>
        {/* ---------------------- Services Nav Tabs End ------------------- */}


        {/* ---------------------- Tools Start ------------------- */}
        <section className='toolbox mt-8'>
          <div className="service-details-title pt-3 mb-5">
            <h2>Our Toolbox</h2>
          </div>
          <ul className="nav nav-pills mb-3" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#tools-web" type="button" role="tab" aria-selected="true">Web Development</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" data-bs-toggle="pill" data-bs-target="#tools-mobile" type="button" role="tab" aria-selected="false">Mobile App Development</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" data-bs-toggle="pill" data-bs-target="#tools-uiux" type="button" role="tab" aria-selected="false">UI/UX Design</button>
            </li>
            {/* <li className="nav-item" role="presentation">
              <button className="nav-link" data-bs-toggle="pill" data-bs-target="#tools-digital-marketing" type="button" role="tab" aria-selected="false">Digital Marketing</button>
            </li> */}
          </ul>
          <div className="tab-content mt-5 mb-5">
            {/* ----------------------- Web Development ------------------------- */}
            <div className="tab-pane fade show active" id="tools-web" role="tabpanel">
              <ToolboxWeb></ToolboxWeb>
            </div>

            {/* -------------------- Mobile App Development --------------------- */}
            <div className="tab-pane fade" id="tools-mobile" role="tabpanel">
              <TooboxMob></TooboxMob>
            </div>

            {/* ----------------------- UI/UX Design ------------------------- */}
            <div className="tab-pane fade" id="tools-uiux" role="tabpanel">
              <ToolboxUIUX></ToolboxUIUX>
            </div>

            {/* -------------------- Digital Marketing ---------------------- */}
            <div className="tab-pane fade" id="digital-marketing" role="tabpanel">
              Digital Marketing
            </div>
          </div>
        </section>
        {/* ----------------------  Tools End  ------------------- */}
      </main>
      {/* <!-- ---------------------------  Main Content End  ----------------------------- --> */}
      <ContactBanner></ContactBanner>
    </div>
  )
}
