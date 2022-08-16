import Head from 'next/head'
import Link from 'next/link';

export default function Career({ career }) {
    return (
        <div className="">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='career'>
                {/* ----------- Join Our Team Banner ----------- */}
                <section className='container'>
                    <div className="row">
                        <div className="col-lg-6 career-left">
                            <div className='px-lg-5 px-3'>
                                <h1 className='mb-4'>Join Our Team</h1>
                                <p className='me-lg-5 me-0'>At Excel IT AI, we help our
                                    team members be at their
                                    natural best and innovate with
                                    their imaginations. Together, we
                                    can make a difference in the web
                                    sphere help people with their
                                    online presence.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 p-lg-5 p-3">
                            <img className='img-fluid' src="./images/career/career.png" alt="Excel IT Career" srcSet="" />
                        </div>
                    </div>

                </section>

                {/* ----------- Our Values----------- */}
                <section className='our-values container-fluid p-5'>
                    <h2>Our Values</h2>
                    <h5 className='mb-4'><img src="./images/career/check-circle.png" alt="Career Icon" srcSet="" /></h5>
                    <div className='values-points'>
                        <p>Effective Recruiting</p>
                        <p>|</p>
                        <p>Introduction Training </p>
                        <p>|</p>
                        <p>Employee Commitment</p>
                        <p>|</p>
                        <p>Team Integrity</p>
                    </div>
                </section>


                {/* ----------- Job Offers----------- */}
                <section className='job-offers mt-8 container'>
                    <h2 className='mb-4'>Our Job Offers</h2>
                    <p className='job-offers-slogan'>Great opportunity for you to be part of a Growing Software Company</p>
                    <p className='job-offers-email'>Email: career@excelitai.com</p>
                    <p className='job-offers-text mb-5'>You bring the paasion, we’ll give you the space to create. We offer you an extraordinary chance to learn and develop.  </p>

                    <div className="row row-cols-1 row-cols-md-2 g-4 mb-8">
                        {
                            career?.map(job => <div 
                                className="col"
                                key={job.id}>
                                <Link href={`career/${job?.id}`}>
                                    <div className="card h-100 p-3">
                                        <div className="card-body pb-2">
                                            <h5 className="card-title mb-4">{job?.job_tittle}</h5>
                                            <p className="card-text">Vacancy: <b>{job?.vacancy}</b> </p>
                                            <p className="card-text">Experience: <b>{job?.experience}</b></p>
                                            <p className="card-text">Deadline: <b>{job?.deadline}</b></p>                                        
                                        </div>
                                    </div>
                                </Link>                                
                            </div>)
                        }
                    </div>
                </section>
            </main>
        </div>
    )
}




// -----------------------------------------------------------------------------------------
// ------------------------------------  Fetch Data ----------------------------------------

export async function getServerSideProps() {

    //--------- Career API -----------
    const resCareer = await fetch('https://excelitai.com/backend/api/career');
    const career = await resCareer.json();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            career: career
        },
    }
}