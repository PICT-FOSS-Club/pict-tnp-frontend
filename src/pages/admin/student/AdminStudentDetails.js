import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import "../../../assets/css/studentprofile.css"


const AdminStudentDetails = () => {

    const params = useParams();
    const [isLoading, setLoading] = useState(true);
    const [student, setStudent] = useState({});


    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:8080/admin/student/profile/${params.studentId}`, { withCredentials: true })
            .then((res) => {
                // console.log('After get request:', res.data);
                setStudent(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                // console.log('Error in get req:', err);
                setLoading(false);
            })
    }, []);

    var dob = student.dob;

    if (isLoading) {
        return <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>;
    }

    return (
        <div className="container bootstrap snippets student bootdey">
            <div>
                <div className="profile-info">
                    <div className="panel">
                    </div>
                    <div className="panel">
                        <div className="bio-graph-heading">
                            <h1> {student.firstName} {student.middleName} {student.lastName}</h1>
                        </div>
                        <div className="panel-body bio-graph-info">
                            <h3>Applied Companies Status</h3>
                            {student.applications.length

                                ?

                                student.applications.map((company, key) => (
                                    <div className="companyRoundDetails" key={key}>
                                        <div className="card my-3">
                                            <div className="card-body">
                                                {company.job[0].company[0].name} <Link to="#" onClick={(e) => {
                                                    e.preventDefault();
                                                    navigate(`/admin/company/details/${company.jobId}`);
                                                }}> {company.job[0].name} </Link>
                                                {(company.studentRoundCleared === 0 && company.studentResult) ?
                                                    (<button type="button" className="btn btn-secondary" data-tooltip="Applied">Applied</button>) :
                                                    ((company.studentResult) ?
                                                        (<button type="button" className={`btn ${company.totalRounds === company.studentRoundCleared ? 'btn-sucess' : 'btn-primary'}`} data-tooltip={`${company.totalRounds === company.studentRoundCleared ? 'Selected' : 'Cleared'}`}>Round {`${company.studentRoundCleared}`}</button>) :
                                                        (<button type="button" className="btn btn-danger" data-tooltip="Uncleared">Round {`${company.studentRoundCleared + 1}`}</button>)
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                ))



                                : <p className='m-3'>No application available</p>

                            }

                            {/* {student.appliedCompanies.map((company, key) => (
                                <div className="companyRoundDetails" key={key}>
                                <div className="card my-3">
                                    <div className="card-body">
                                        <Link to={`/admin/company/details/${company.companyId}`}> {company.name} </Link>
                                        {(company.roundCleared === 0 && company.result) ? 
                                        (<button type="button" className="btn btn-secondary" data-tooltip="Applied">Applied</button>) : 
                                        ((company.result) ? 
                                            (<button type="button" className={`btn ${company.totalRounds === company.roundCleared ? 'btn-sucess' : 'btn-primary'}`} data-tooltip={`${company.totalRounds === company.roundCleared ? 'Selected' : 'Cleared'}`}>Round {`${company.roundCleared}`}</button>) : 
                                            (<button type="button" className="btn btn-danger" data-tooltip="Uncleared">Round {`${company.roundCleared+1}`}</button>)
                                        )}
                                    </div>
                                </div>
                            </div>
                            ))} */}
                        </div>
                        {/* {student.appliedCompanies.map((company, key) => (
                            <div className="companyRoundDetails" key={key}>
                            <div className="card my-3">
                                <div className="card-header">
                                    <Link to={`/admin/company/details/${company.companyId}`}> {company.name} </Link>
                                </div>
                                <div className="card-body">
                                    {(company.roundCleared === 0 && company.result) ? 
                                    (<button type="button" className="btn btn-secondary" data-tooltip="Applied">Applied</button>) : 
                                    ((company.result) ? 
                                        (<button type="button" className={`btn ${company.totalRounds === company.roundCleared ? 'btn-sucess' : 'btn-primary'}`} data-tooltip={`${company.totalRounds === company.roundCleared ? 'Selected' : 'Cleared'}`}>Round {`${company.roundCleared}`}</button>) : 
                                        (<button type="button" className="btn btn-danger" data-tooltip="Uncleared">Round {`${company.roundCleared+1}`}</button>)
                                    )}
                                </div>
                            </div>
                        </div>
                        ))} */}
                        {/* <div className="companyRoundDetails">
                            <div className="card my-3">
                                <div className="card-header">
                                    <Link to="/admin/company/details"> TCS </Link>
                                </div>
                                <div className="card-body">
                                    <button type="button" className="btn btn-secondary" data-tooltip="Applied">Applied</button>
                                    <button type="button" className="btn btn-primary" data-tooltip="Cleared">Round 1</button>
                                    <button type="button" className="btn btn-primary" data-tooltip="Cleared">Round 2</button>
                                    <button type="button" className="btn btn-primary" data-tooltip="Cleared">Round 3</button>
                                    <button type="button" className="btn btn-success" data-tooltip="Selected">Round 4</button>
                                </div>
                            </div>
                        </div>
                        <div className="companyRoundDetails">
                            <div className="card my-3">
                                <div className="card-header">
                                    <Link to="/admin/company/details"> PhonePe </Link>
                                </div>
                                <div className="card-body">
                                    <button type="button" className="btn btn-secondary" data-tooltip="Applied">Applied</button>
                                    <button type="button" className="btn btn-primary" data-tooltip="Cleared">Round 1</button>
                                    <button type="button" className="btn btn-danger" data-tooltip="Uncleared">Round 2</button>
                                </div>
                            </div>
                        </div> */}
                        <div className="panel-body bio-graph-info">
                            <h3> Personal Information</h3>
                            <div className="row">
                                <div className="bio-row">
                                    <p>
                                        <span>Email: </span> {student.email}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p>
                                        <span>Alternate email: </span> {student.alternateEmail}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Mobile: </span> {student.phone}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Alternate mobile: </span> {student.alternatePhone}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>DOB: </span> {dob.split('T')[0]}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Gender: </span> {student.gender}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Current address: </span> {student.currentAddress}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Permanant address: </span> {student.permanentAddress}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Adhaar number: </span> {student.aadharCard}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Pan number: </span> {student.panCard}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Passport: </span> {student.passportCard}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Citizenship: </span> {student.citizenship}
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="panel-body bio-graph-info">
                            <h3>Education Information</h3>
                            <div className="row">
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>10<sup>th</sup> percent: </span> {student.hscPercentage}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Board of 10th education: </span> {student.hscBoard}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Year of 10th passing: </span> {student.yearOFPassingHsc}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Education gap after 10th: </span> {student.gapAfterHsc}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Reason of gap: </span> {student.gapAfterHsc}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>12<sup>th</sup>/Diploma percent: </span> {student.sscPercentage}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Board of 12th/Diploma education: </span> {student.sscBoard}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Year of 12th/Diploma passing: </span> {student.yearOFPassingSsc}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="panel-body bio-graph-info">
                            <h3>College Information</h3>
                            <div className="row">
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>TE Roll no: </span> {student.rollNumber}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>TE section: </span> {student.teSection}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Branch: </span> {student.branch}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>PICT reg id: </span> {student.pictRegistrationId}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>University PRN: </span> {student.prn}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Year of 1st year: </span> {student.yearOfStartingCollege}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>1st year 1st sem cgpa: </span> {student.firstYearFirstSemCgpa}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>1st year 2nd sem cgpa: </span> {student.firstYearSecondSemCgpa}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>2nd year 1st sem cgpa: </span> {student.secondYearfirstSemCgpa}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>2nd year 2nd sem cgpa: </span> {student.secondYearSecondSemCgpa}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>3rd year 1st sem cgpa: </span> {student.thirdYearFirstSemCgpa}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Total active backlog: </span> {student.activeBacklog}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Total passive backlog: </span> {student.passiveBacklog}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Are you YD?: </span> {student.yearDrop}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Planning for higher education: </span> {student.planningForHigherEducation}
                                    </p>
                                </div>
                                <div className="bio-row">
                                    <p className="infoStudent">
                                        <span>Appeared for AMCAT: </span> {student.AmcatScore ? "Yes" : "No"}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminStudentDetails;