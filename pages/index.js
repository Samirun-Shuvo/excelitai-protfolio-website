import Head from 'next/head';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';
import ReactStars from 'react-stars'
import Products from '../components/Products/Products';

export default function Home({ clientReviews, products }) {

  var clientReviewSliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var brandsSliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className="container">
      <Head>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <!-- ---------------------------------------------------------------------------- -->
      <!-- ----------------------------- Header Start --------------------------------- -->
      <!-- ---------------------------------------------------------------------------- --> */}
      <header className="header-banner container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center px-2 px-lg-5 header-text">
              <div>
                <h1>Excel IT AI</h1>
                <h2>Software Development Company</h2>
                <p className="mt-4">Excel It AI is a top Solution providing software firm that offers a wide range of
                  consultation and development services with 100% client satisfaction.
                </p>
                <Link href="services"><a className="btn primary-btn px-4 py-2 mt-3">Get Started</a></Link>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="m-2 mt-5 m-lg-5">
                <img className="img-fluid" src="images/web_development.jpg" alt="Web Development" srcSet="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ----------------------------- Header End --------------------------------- --> */}

      {/* <!-- ---------------------------------------------------------------------------- -->
      <!-- --------------------------- Header Promo Start ----------------------------- -->
      <!-- ---------------------------------------------------------------------------- --> */}
      <section className="header-promo mt-8">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 justify-content-center">
          <div className="col">
            <div className="card h-100">
              <div className="text-center pt-3">
                <img src="images/008-daylight-savings-1.png" className="card-img-top img-fluid"
                  alt="Real time activity" />
              </div>

              <div className="card-body">
                <h6 className="card-title text-center">Real time activity</h6>
                <p className="card-text text-center mt-3">Our software supports real time database which allows
                  users to use simultaneously
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="text-center pt-3">
                <img src="images/003-cloud-network.png " className="card-img-top img-fluid" alt="Instant deploy" />
              </div>

              <div className="card-body">
                <h6 className="card-title text-center">Instant deploy</h6>
                <p className="card-text text-center mt-3">We are capable to deploy your desire
                  software product within a short period</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="text-center pt-3">
                <img src="images/002-tap.png " className="card-img-top img-fluid" alt="Easy integrations" />
              </div>

              <div className="card-body">
                <h6 className="card-title text-center">Easy integrations</h6>
                <p className="card-text text-center mt-3">Most of our software are built with modern
                  software architecture to make it scalable</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="text-center pt-3">
                <img src="images/pen-tool 1.png" className="card-img-top img-fluid" alt="Perfect UI/UX" />
              </div>

              <div className="card-body">
                <h6 className="card-title text-center">Perfect UI/UX</h6>
                <p className="card-text text-center mt-3">Our expert UI/UX team provides best quality
                  and user friendly interface
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="text-center pt-3">
                <img src="images/006-24-hours-support-1.png" className="card-img-top img-fluid"
                  alt="Friendly support" />
              </div>

              <div className="card-body">
                <h6 className="card-title text-center">Friendly support</h6>
                <p className="card-text text-center mt-3">Our support team is always ready to
                  serve you, our client can contact us anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- --------------------------- Header Promo Start ----------------------------- --> */}


      {/* <!-- ---------------------------------------------------------------------------- -->
        <!-- ------------------------------ Vision Start -------------------------------- -->
        <!-- ---------------------------------------------------------------------------- --> */}
      <section className="vision mt-8 mb-15">
        <img className="img-fluid" src="images/vision banner.jpg" alt="Our Vision" srcSet="" />
        <div className="vision-slider-cont">
          <div className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h5>Our Vision</h5>
                <h3>Vision Is To Bring The Power Of AI To Every Business</h3>
                <div className="bottom-line"></div>
                <p>Our vision is to implement AI-powered solutions to your business and enable it to
                  perform business operations smartly. Excel It AI is a top Solution providing
                  software firm that offers a wide range of consultation and development services
                  with 100% client satisfaction. <br />
                  As a Custom Software Development Company, ours is the best to offer Web Design,
                  for eCommerce Solutions, Mobile App Development, UI/UX design, and so on!
                  It is also a web application development company that provides the top-notch
                  solutions in Project Management Systems, School Management Systems,
                  Hospital Management Systems, Online Health Systems, HRMS Systems, and many more!
                </p>
              </div>
              <div className="carousel-item">
                <h5>Our Mission</h5>
                <h3>Vision Is To Bring The Power Of AI To Every Business</h3>
                <div className="bottom-line"></div>
                <p>As a marketing expert, Excel IT AI provides Digital Marketing Solutions to
                  enterprises like yours to increase your digital engagement and ultimately
                  boost your sales. We help your business overcome challenges as we create an
                  interspersed strategy tailored only for your business, then develop
                  custom software solutions, and ultimately implement them to perform the
                  challenging tasks smartly and efficiently. We strategize the complete
                  process in a way that drives your business forward.
                </p>
              </div>
              <div className="carousel-item">
                <h5>Our Goal</h5>
                <h3>Vision Is To Bring The Power Of AI To Every Business</h3>
                <div className="bottom-line"></div>
                <p>Ours is the Custom Software Development Company that encompasses
                  from databases to digital products to technology unified services.
                  We resolve complex problems by developing high-performance software
                  with the best user-friendly interface. We design, we build, we support,
                  everything we provide for the smooth operation of your business.
                  We, the Excel IT AI team, maintain effective communication and a thoughtful project management process throughout the entire project. The more days pass by, the more long-lasting partnerships Excel IT AI builds with clients all across the globe without losing the endeavor to strive for excellence and innovation ever.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------------------------ Vision End -------------------------------- --></div> */}


      {/* <!-- ---------------------------------------------------------------------------- -->
      <!-- ---------------------------- Our Services Start ---------------------------- -->
      <!-- ---------------------------------------------------------------------------- --> */}
      <section className="our-services mt-8 mb-12">
        <div>
          <h2>Our Services</h2>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-5 justify-content-center">
          <div className="col">
            <div className="card h-100">
              <div className="text-center img-cont">
                <img src="images/services/carbon_application-web.png" className="" alt="Web Application Development" />
              </div>

              <div className="card-body pt-0">
                <h5 className="card-title">Web Application Development</h5>
                <p className="card-text px-4">Our Web Application Dev-Team consists of industry experts. They can help you build...</p>
              </div>

              <div className="read-more text-center mt-3 mb-4">
                <Link href="services?service=web-development#services"><a className="btn primary-btn px-4 py-2"> Read More</a></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="text-center img-cont">
                <img src="images/services/Frame.png" className="" alt="Mobile Application Development" />
              </div>

              <div className="card-body pt-0">
                <h5 className="card-title">Mobile Application Development</h5>
                <p className="card-text px-4">The highly skilled Mobile Application Dev Team of Excel IT AI executes various domains and
                  topics for you...
                </p>
              </div>

              <div className="read-more text-center mt-3 mb-4">
                <Link href="services?service=app-development#services"><a className="btn primary-btn px-4 py-2"> Read More</a></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="text-center img-cont">
                <img src="images/services/bi_code-slash.png" className="" alt="Custom Software Development" />
              </div>

              <div className="card-body pt-0">
                <h5 className="card-title">Custom Software Development</h5>
                <p className="card-text px-4">Any customized software solution is a cup of tea to our extraordinary Software Team. They are
                  readily available...
                </p>
              </div>

              <div className="read-more text-center mt-3 mb-4">
                <Link href="services?service=custom-software#services"><a className="btn primary-btn px-4 py-2"> Read More</a></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="text-center img-cont">
                <img src="images/services/fluent_design-ideas-20-regular.png" className="" alt="UI/UX Design" />
              </div>

              <div className="card-body pt-0">
                <h5 className="card-title">UI/UX Design</h5>
                <p className="card-text px-4">Excel IT AI expert UI/UX Team designs the best User Interface and User Experience to proceed
                  with the development...
                </p>
              </div>

              <div className="read-more text-center mt-3 mb-4">
                <Link href="services?service=uiux#services"><a className="btn primary-btn px-4 py-2"> Read More</a></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="text-center img-cont">
                <img src="images/services/tabler_speakerphone.png" className="" alt="Digital Marketing" />
              </div>

              <div className="card-body pt-0">
                <h5 className="card-title">Digital Marketing</h5>
                <p className="card-text px-4">We have professional specialists who execute dynamic web advertising arrangements in order to boost your business goals.</p>
              </div>

              <div className="read-more text-center mt-3 mb-4">
                <Link href="services?service=digital-marketing#services"><a className="btn primary-btn px-4 py-2"> Read More</a></Link>
              </div>
            </div>
          </div>
        </div>


      </section>
      {/* <!-- ---------------------------- Our Services End ------------------------------ --> */}

      {/* <!-- ---------------------------------------------------------------------------- -->
      <!-- ---------------------------- Our Products Start ---------------------------- -->
      <!-- ---------------------------------------------------------------------------- --> */}
      <Products
        products={products}></Products>
      {/* <!-- ---------------------------- Our Products End ------------------------------ --> */}



      {/* <!-- ---------------------------------------------------------------------------- -->
      <!-- --------------------------- Client Review Start ---------------------------- -->
      <!-- ---------------------------------------------------------------------------- --> */}

      <section className="client-review mt-5 p-lg-5 p-3">
        <div className="row client-review-title">
          <div className="col-md-5 text-center p-0">

          </div>
          <div className="col-md-7 pe-5">
            <h2 className="mt-4">What Our clients say about us</h2>
            <div className="line mb-4"></div>
          </div>
        </div>


        <div className="row">
          <div className="col-md-5 d-flex align-items-center justify-content-center">
            <div>
              <img src="images/client-cover.png" className="img-fluid" alt="Excel IT Client" srcSet="" />
            </div>
          </div>
          <div className="col-md-7 pe-5">
            <div>
              <Slider className="client-review-slider mt-8" {...clientReviewSliderSettings}>
                {
                  clientReviews?.map(review => <div
                    className="client-review-slide"
                    key={review.id}
                  >
                    <div>
                      <p className="review-text">&quot;{review.review}&quot;</p>
                    </div>
                    <div className="client">
                      <div className="me-4">
                        <img src={`/clients/${review.image}`} alt={review.name} srcSet="" />
                      </div>
                      <div>
                        <h6>{review.name}</h6>
                        <p>{review.designation}</p>
                        <div><ReactStars
                          count={5}
                          value={parseInt(review.rating)}
                          size={24}
                          half={true}
                          edit={false}
                          color1={'#a1a1a1'}
                          color2={'#F79101'} />
                        </div>
                      </div>
                    </div>
                  </div>)
                }

              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ----------------------------Client Review End ------------------------------ --> */}

      {/* <!-- ---------------------------------------------------------------------------- -->
      <!-- ------------------------------ Brands Start -------------------------------- -->
      <!-- ---------------------------------------------------------------------------- --> */}
      <section className="brands mt-8 mb-8">
        <Slider className="brands-slider" {...brandsSliderSettings}>
          <div>
            <img className="img-fluid" src="images/brands/1.jpg" alt="Excel IT Partner 1" srcSet="" />
          </div>
          <div>
            <img className="img-fluid" src="images/brands/3.png" alt="Excel IT Partner 3" srcSet="" />
          </div>
          <div>
            <img className="img-fluid" src="images/brands/4.jpg" alt="Excel IT Partner 4" srcSet="" />
          </div>
          <div>
            <img className="img-fluid" src="images/brands/5.png" alt="Excel IT Partner 5" srcSet="" />
          </div>
          <div>
            <img className="img-fluid" src="images/brands/6.jpg" alt="Excel IT Partner 6" srcSet="" />
          </div>
          <div>
            <img className="img-fluid" src="images/brands/7.jpg" alt="Excel IT Partner 7" srcSet="" />
          </div>
          <div>
            <img className="img-fluid" src="images/brands/8.png" alt="Excel IT Partner 8" srcSet="" />
          </div>
          <div>
            <img className="img-fluid" src="images/brands/9.png" alt="Excel IT Partner 9" srcSet="" />
          </div>
          <div>
            <img className="img-fluid" src="images/brands/10.png" alt="Excel IT Partner 10" srcSet="" />
          </div>
        </Slider>
      </section>
      {/* <!-- ------------------------------  Brands End  -------------------------------- --> */}

    </div>
  )
}



// -----------------------------------------------------------------------------------------
// ------------------------------------  Fetch Data ----------------------------------------

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library


//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       clientReviews,
//     },
//   }
// }


export async function getServerSideProps() {
  //--------- Clients Reviews API -----------
  const resReviews = await fetch('https://excelitai.com/client-reviews.json');
  const clientReviews = await resReviews.json();

  //--------- Products API -----------
  const resProducts = await fetch('https://excelitai.com/backend/api/products');
  const products = await resProducts.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      clientReviews: clientReviews,
      products: products
    },
  }
}