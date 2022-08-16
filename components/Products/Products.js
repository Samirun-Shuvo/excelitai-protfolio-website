import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Products = ({ products }) => {
    var productsSliderSettings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    const ongoingProducts = products.filter(product => product.status == 'ongoing');
    const completedProducts = products.filter(product => product.status == 'completed');
    const upcomingProducts = products.filter(product => product.status == 'upcoming');

    {/* //-------------------------- Toogle Display Products Content ----------------------------- */ }
    const toggleTabContent = (id, parentClass) => {
        var elementChildren = document.querySelectorAll(`.${parentClass} .tab-inner`);
        elementChildren.forEach(child => {
            child.classList = `tab-inner hidden`;
        });
        document.getElementById(id).classList = `tab-inner display`;
    }
    return (
        <section className="our-products mt-8 mb-8">
            <div>
                <h2>Our Products</h2>
            </div>

            {/* <!-- ------------ Nav ------------- --> */}
            <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" data-bs-toggle="pill"
                        onClick={() => toggleTabContent('ongoing-product-tab', 'our-products-content')} type="button"
                        role="tab" aria-selected="true">Ongoing Product</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" data-bs-toggle="pill" type="button" role="tab"
                        onClick={() => toggleTabContent('completed-product-tab', 'our-products-content')}
                        aria-selected="false">Complete Product</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" data-bs-toggle="pill" type="button" role="tab"
                        onClick={() => toggleTabContent('upcoming-product-tab', 'our-products-content')}
                        aria-selected="false">Upcoming Product</button>
                </li>
            </ul>

            {/* <!-- ------------ Tab Content ------------- --> */}
            <div className="tab-content our-products-content" id="our-products-content">

                {/* <!-- ------------ Ongoing Product Start ------------- --> */}
                <div className="tab-inner display" id="ongoing-product-tab">
                    <Slider
                        className="products-slider"
                        {...productsSliderSettings}>
                        {
                            ongoingProducts?.map(product =>
                                <div key={product.id} className="product-silde">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6 p-4">
                                            <img className="img-fluid" src={`https://excelitai.com/backend/assets/uploads/product/${product.image}`} alt={product?.title} srcSet="" />
                                        </div>
                                        <div className="col-lg-7 col-md-6 d-flex align-items-center">
                                            <div className="p-5">
                                                <h5 className="mb-3">{product?.title}</h5>
                                                <p>{product?.description}</p>
                                                <button className="btn primary-btn px-4 py-2 mt-6">View Portfolio</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Slider>
                </div>
                {/* <!-- ------------ Ongoing Product End ------------- --> */}

                {/* <!-- ------------ Complete Product Start ------------- --> */}
                <div className="tab-inner hidden" id="completed-product-tab">
                    <Slider
                        {...productsSliderSettings}
                        className="products-slider">
                        {
                            completedProducts?.map(product =>
                                <div key={product.id} className="product-silde">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6 p-4">
                                            <img className="img-fluid" src={`https://excelitai.com/backend/assets/uploads/product/${product.image}`} alt={product?.title} srcSet="" />
                                        </div>
                                        <div className="col-lg-7 col-md-6 d-flex align-items-center">
                                            <div className="p-5">
                                                <h5 className="mb-3">{product?.title}</h5>
                                                <p>{product?.description}</p>
                                                <button className="btn primary-btn px-4 py-2 mt-6">View Portfolio</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Slider>
                </div>
                {/* <!-- ------------ Complete Product End ------------- --> */}

                {/* <!-- ------------ Upcoming Product Start ------------- --> */}
                <div className="tab-inner hidden" id="upcoming-product-tab">
                    <Slider className="products-slider" {...productsSliderSettings}>
                    {
                            upcomingProducts?.map(product =>
                                <div key={product.id} className="product-silde">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6 p-4">
                                            <img className="img-fluid" src={`https://excelitai.com/backend/assets/uploads/product/${product.image}`} alt={product?.title} srcSet="" />
                                        </div>
                                        <div className="col-lg-7 col-md-6 d-flex align-items-center">
                                            <div className="p-5">
                                                <h5 className="mb-3">{product?.title}</h5>
                                                <p>{product?.description}</p>
                                                <button className="btn primary-btn px-4 py-2 mt-6">View Portfolio</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Slider>
                </div>
                {/* <!-- ------------ Upcoming Product End ------------- --> */}
            </div>
        </section>
    );
};

export default Products;