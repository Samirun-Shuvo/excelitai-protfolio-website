import Head from 'next/head'
import { useEffect, useState } from 'react';

export default function Team({ employees }) {

    const [displayingTeam, setDisplayingTeam] = useState(employees);
    const [departments, setDepartments] = useState([]);


    // ----------- Get 
    useEffect(() => {
        // setDisplayingTeam(employees);
        const departments = [...new Set(employees.map(employee => employee.department))];
        setDepartments(departments);
    }, []);

    const changeDisplayEmployee = (department) => {
        if(department === "All"){
            setDisplayingTeam(employees);
        }
        else{
            const filteredEmployees = employees.filter(employee => employee.department === department);
            setDisplayingTeam(filteredEmployees);
        }        
    }


    return (
        <div className="">
            <Head>                
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <!-- ---------------------------------------------------------------------------- -->
            <!-- --------------------------- Main Content Start ----------------------------- -->
            <!-- ---------------------------------------------------------------------------- --> */}
            <main className="team container-fluid px-0">
                <div className="container">
                    <div className="team-title">
                        <h1>Our Managment & Team Member</h1>
                        <p className="mt-4">We Excel IT AI Team, Define Our Methodology <br /> In Nine Different Sections.</p>
                    </div>

                    <ul className="nav nav-tabs employee-nav" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" type="button"
                                data-bs-toggle="tab"
                                onClick={() => changeDisplayEmployee('All')}
                                role="tab">All Member</button>
                        </li>
                        {
                            departments?.map((department, index) => <li 
                                key={index}
                                className="nav-item" role="presentation">
                                <button className="nav-link" type="button"
                                    data-bs-toggle="tab"
                                    onClick={() => changeDisplayEmployee(department)}
                                    role="tab">{department}</button>
                            </li>)
                        }

                    </ul>

                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 employee-lists">
                        {
                            displayingTeam?.map(employee => <div
                                className='col'
                                key={employee.id}
                            >
                                <div className="card h-100">
                                    <div className="img-cont">
                                        <img src={employee.image} className="card-img-top img-fluid" alt={employee.name} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{employee.name}</h5>
                                        <p className="card-text">{employee.designation}</p>
                                    </div>
                                    <div className="card-footer">
                                        <a target="_blank" rel="noreferrer" href={employee.facebook}><i className="fa-brands fa-facebook-f"></i></a>
                                        <a target="_blank" rel="noreferrer" href={employee.twitter}><i className="fa-brands fa-twitter"></i></a>
                                        <a target="_blank" rel="noreferrer" href={employee.instagram}><i className="fa-brands fa-instagram"></i></a>
                                        <a target="_blank" rel="noreferrer" href={employee.linkedin}><i className="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            )}
                    </div>
                </div>



                {/* <!-- ---------------------------  Team Photo Start  ----------------------------- --> */}
                <section className="team-photo">
                    <h5>And here are our true hero’s</h5>
                    <div>
                        <img className="img-fluid" src="images/team/team.jpg" alt="Excel IT AI Team" srcSet="" />
                    </div>
                </section>
                {/* <!-- ---------------------------  Team Photo End  ----------------------------- --> */}
            </main >
            {/* <!-- ---------------------------  Main Content End  ----------------------------- --> */}
        </div >
    )
}




// -----------------------------------------------------------------------------------------
// ------------------------------------  Fetch Data ----------------------------------------

export async function getServerSideProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://excelitai.com/team.json');
    const employees = await res.json();

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            employees: employees,
        },
    }
}