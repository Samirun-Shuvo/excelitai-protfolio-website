import React from 'react';
import { useEffect, useState } from 'react';

const TeamSection = ({ employees }) => {
    const [displayingTeam, setDisplayingTeam] = useState([]);
    const [departments, setDepartments] = useState([]);


    // ----------- Get 
    useEffect(() => {
        console.log(employees);
        setDisplayingTeam(employees);
        const departments = [...new Set(employees?.map(employee => employee.department))];
        setDepartments(departments);
    }, []);

    const changeDisplayEmployee = (department) => {
        if (department === "All") {
            setDisplayingTeam(employees);
        }
        else {
            const filteredEmployees = employees.filter(employee => employee.department === department);
            setDisplayingTeam(filteredEmployees);
        }
    }
    return (
        <main className="team container-fluid px-0">
            <div className="container">
                <div className="team-title">
                    <h3>Our Managment & Team Member</h3>
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
                    <img className="img-fluid" src="images/team/team.jpg" alt="Excel IT Team" srcSet="" />
                </div>
            </section> 
            {/* <!-- ---------------------------  Team Photo End  ----------------------------- --> */}
        </main>
        // {/* <!-- ---------------------------  Main Content End  ----------------------------- --> */ }
    );
};

export default TeamSection;

