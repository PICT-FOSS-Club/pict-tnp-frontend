import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import "../../assets/css/studentprofile.css"

const AdminCompanyDetails = () => {

    const params = useParams();
    const [company, setCompany] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/admin/company/details/${params.companyId}`, { withCredentials: true })
            .then((res) => {
                console.log('After get request:', res.data.data);
                setCompany(res.data.data);
            })
            .catch((err) => {
                console.log('Error in get req:', err);
            })
    }, [params.companyId]);

    return (
        <div className="container company bootstrap snippets bootdey">
            <div>
                <div className="profile-info">
                    <div className="panel">
                    </div>
                    <div className="panel">
                        <div className="bio-graph-heading">
                            <h1>{company.name}</h1>
                            <span>{company.profile}</span>
                            <p>₹ {company.ctc} LPA</p>
                        </div>
                        <div className="panel-body bio-graph-info">
                            <h3>About company criteria</h3>
                            <div className="row">
                                {/* <div className='companyInfo'>
                                    PhonePe is an Indian digital payments and financial technology company headquartered in Bengaluru, Karnataka, India. PhonePe was founded in December 2015, by Sameer Nigam, Rahul Chari and Burzin Engineer. The PhonePe app, based on the Unified Payments Interface (UPI), went live in August 2016. It is owned by Flipkart, a subsidiary of Walmart.
                                </div> */}
                                {/* <div className='companyROInfo'>
                                    <b> Date Time:  </b>
                                    {company.startDate}
                                </div> */}
                                <div className='companyROInfo'>
                                    <b> Branch:    </b>
                                    {/* {company.criteria.branch.cs ? "CE" : ""} {company.criteria.branch.it ? ", IT" : ""} {company.criteria.branch.entc ? "and E&TC" : ""} ({company.criteria.courseName.ug ? "UG" : ""} {company.criteria.courseName.pg ? ", PG" : ""}) */}
                                </div>
                                <div className='companyROInfo'>
                                    <b>Criteria:  </b>
                                    {/* cgpa {company.criteria.cgpa} */}
                                </div>
                                <div className='companyROInfo'>
                                    <b>Email:  </b>
                                    {company.email}
                                </div>
                                <div className='companyROInfo'>
                                    <b>Website:  </b><a href={`http://${company.websiteUrl}`}><i className="bi bi-globe"></i></a>

                                </div>
                            </div>
                        </div>
                        <div className="panel-body bio-graph-info">
                            <div className="roundHead">
                            <h3>Round details</h3>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#addCompanyForm" className="btn btn-outline-dark"><i className="bi bi-plus-circle"></i> Add round</button>
                            </div>

                            <div className="row">
                            <div className="alert my-2 roundDetails alert-success" role="alert">
                               <h6> Round 1 (Online test)</h6>
                                <div className="options">
                                    <Link to='#'><button type="button" className="btn btn-secondary" data-tooltip="Applied students">Applied</button></Link>
                                    <Link to='#'><button type="button" className="btn btn-success" data-tooltip="Cleared students">Cleared</button></Link>
                                    <Link to='#'><button type="button" className="btn btn-warning" data-tooltip="Uncleared students">Uncleared</button></Link>
                                    <button type="button" className="btn btn-danger" disabled data-tooltip="Cancel round"><i className="bi bi-trash"></i> Delete</button>
                                </div>
                            </div>

                            <div className="alert my-2 roundDetails alert-success" role="alert">
                               <h6> Round 2 (PPT)</h6>
                                <div className="options">
                                    <Link to='#'><button type="button" className="btn btn-secondary" data-tooltip="Applied students">Applied</button></Link>
                                    <Link to='#'><button type="button" className="btn btn-success" data-tooltip="Cleared students">Cleared</button></Link>
                                    <Link to='#'><button type="button" className="btn btn-warning" data-tooltip="Uncleared students">Uncleared</button></Link>
                                    <button type="button" className="btn btn-danger" disabled data-tooltip="Cancel round"><i className="bi bi-trash"></i> Delete</button>
                                </div>
                            </div>

                            <div className="alert my-2 roundDetails alert-secondary" role="alert">
                               <h6> Round 3 (Technical interview)</h6>
                                <div className="options">
                                    <Link to='#'><button type="button" className="btn btn-secondary" disabled data-tooltip="Applied students">Applied</button></Link>
                                    <Link to='#'><button type="button" className="btn btn-success" disabled data-tooltip="Cleared students">Cleared</button></Link>
                                    <Link to='#'><button type="button" className="btn btn-warning" disabled data-tooltip="Uncleared students">Uncleared</button></Link>
                                    <button type="button" className="btn btn-danger" data-tooltip="Cancel round"><i className="bi bi-trash"></i> Delete</button>
                                </div>
                            </div>

                            <div className="alert my-2 roundDetails alert-secondary" role="alert">
                               <h6> Round 4 (HR interview)</h6>
                                <div className="options">
                                    <Link to='#'><button type="button" className="btn btn-secondary" disabled data-tooltip="Applied students">Applied</button></Link>
                                    <Link to='#'><button type="button" className="btn btn-success" disabled data-tooltip="Cleared students">Cleared</button></Link>
                                    <Link to='#'><button type="button" className="btn btn-warning" disabled data-tooltip="Uncleared students">Uncleared</button></Link>
                                    <button type="button" className="btn btn-danger" data-tooltip="Cancel round"><i className="bi bi-trash"></i> Delete</button>
                                </div>
                            </div>
                                {/* <ul className="main__list">

                                    <li className="main__list-item">
                                        <div>
                                            <p className="main__list-content">Center Point</p>
                                        </div>
                                    </li> */}

                                     {/* {company.driveDetails.map((round)=>{
                                        return (<li className="main__list-item" key={round.roundNo}>
                                        <div className="main__list-content-wrap">
                                            <p className="main__list-content">{round.activity}</p>
                                            <p className="main__list-sub gray">Round {round.roundNo}  - {round.date > Date.now() ? "Upcoming" : "Ended"}
                                                <p className="main__list-sub gray">{round.date} {round.time}</p>
                                                <p className="main__list-sub gray">{round.venue}</p>
                                            </p>
                                        </div>
                                    </li>)
                                    })} */}


                                    {/* <li className="main__list-item">
                                        <div className="main__list-content-wrap">
                                            <p className="main__list-content">HR Interview of shortlisted students</p>
                                            <p className="main__list-sub gray">Round 4 - upcoming
                                                <p className="main__list-sub gray">29/08/2022</p>
                                            </p>
                                        </div>
                                    </li>

                                    <li className="main__list-item">
                                        <div className="main__list-content-wrap">
                                            <p className="main__list-content">Technical Interview</p>
                                            <p className="main__list-sub gray">Round 3 - upcoming
                                                <p className="main__list-sub gray">25/08/2022</p>
                                            </p>
                                        </div>
                                    </li>

                                    <li className="main__list-item">
                                        <div className="main__list-content-wrap">
                                            <p className="main__list-content">Online Test</p>
                                            <p className="main__list-sub error">Round 2 - ended
                                                <p className="main__list-sub gray">20/08/2022</p>
                                            </p>
                                        </div>
                                    </li>

                                    <li className="main__list-item">
                                        <div className="main__list-content-wrap">
                                            <p className="main__list-content">PPT</p>
                                            <p className="main__list-sub error">Round 1 - ended
                                                <p className="main__list-sub gray">15/08/2022</p>
                                            </p>
                                        </div>
                                    </li>
                                </ul> */}

                            </div>
                        </div>

                        <div className="panel-body  bio-graph-info">
                            <h3>Skills required</h3>
                            <div className="row companySkillBody">
                                <div>
                                     {/* {company.skillsRequired.map((skill)=>{
                                        return(
                                        <div key={skill+"1"}>
                                            <i className="bi bi-arrow-right-circle" /> {skill} <br /> <br />
                                        </div>
                                        )
                                    })} */}
                                    
                                    <i className="bi bi-arrow-right-circle"></i> Deep expertise in at least one programming language (e.g., Java, C, C++) & tech stack to write maintainable, scalable, unit-tested code. <br /> <br />
                                    <i className="bi bi-arrow-right-circle"></i> Understanding of object-oriented design skills, knowledge of design patterns, and huge passion and ability to <br /><br />
                                    <i className="bi bi-arrow-right-circle"></i> Ability to channel high-level guidance to direct the building of large and complex business applications and platforms. <br /><br />
                                    <i className="bi bi-arrow-right-circle"></i> Go-getter attitude that reflects in energy and intent behind assigned tasks <br /><br />
                                    <i className="bi bi-arrow-right-circle"></i> Some understanding of design patterns, optimizations, deployments and tuning, understanding of databases (e.g., MySQL), good to have is knowledge of NoSQL (e.g. HBase, Elasticsearch, Aerospike etc.) <br /><br />
                                </div>
                            </div>
                        </div>

                        {/* <div className="panel-body  bio-graph-info">
                            <h3>Apply</h3>
                            <div className="row companySkillBody">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Select resume</label>
                                        <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">Select only if, you have other than default resume</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Accept all terms and conditions</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Apply</button>
                                </form>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

                <div className="modal fade" id="addCompanyForm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Fill the round details</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form className="row g-3">
  <div className="col-md-12">
    <label htmlFor="validationDefault01" className="form-label">Round title</label>
    <input type="text" className="form-control" id="validationDefault01" required />
  </div>
  <div className="col-md-6">
    <label htmlFor="validationDefault02" className="form-label">Round date</label>
    <input type="date" className="form-control" id="validationDefault02" required />
  </div>
  <div className="col-md-6">
    <label htmlFor="validationDefaultUsername" className="form-label">Round time</label>
      <input type="time" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required />
  </div>
  <div className="col-md-12">
    <label htmlFor="validationDefault03" className="form-label">Round venue</label>
    <input type="text" className="form-control" id="validationDefault03" required />
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Add round</button>
  </div>
</form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>

        </div>
    );
}

export default AdminCompanyDetails;