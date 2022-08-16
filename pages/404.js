import Head from 'next/head';
import NotFoundImage from '../images/404.png';


export default function NotFound() {
    return (
        <div className="container">
            <Head>
                
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <!-- ---------------------------------------------------------------------------- -->
            <!-- --------------------------- Main Content Start ----------------------------- -->
            <!-- ---------------------------------------------------------------------------- --> */}
            <main className="not-found container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center not-found-left">
                        <div className="px-5">
                            <h1>404</h1>
                            <h3 className="mb-4">We can't find that page</h3>
                            <p>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on
                                it's behalf.</p>
                        </div>
                    </div>
                    <div className="col-md-6 p-5">
                        <div>
                            <img className="img-fluid" src="images/404.png" alt="Not Found Image" srcSet="" />
                        </div>
                    </div>
                </div>
            </main>
            {/* <!-- ---------------------------  Main Content End  ----------------------------- --> */}
        </div>
    )
}
