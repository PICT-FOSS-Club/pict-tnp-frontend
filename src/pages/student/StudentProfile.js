import React, { useEffect, useState } from 'react'
import axios from 'axios';

import "../../assets/css/studentprofile.css"

const StudentProfile = () => {

  const [student, setStudent] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/student/me', { withCredentials: true })
      .then((res) => {
        // console.log('After get request:', res.data);
        setStudent(res.data.student);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error in get req:', err);
        setLoading(false);
      })
  }, []);

  if (isLoading) {
    return <div className="text-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>;
}

  return (
    <div className="container bootstrap student snippets bootdey">
      <div>
        <div className="profile-info">
          <div className="panel">
          </div>
          <div className="panel">
            <div className="bio-graph-heading">
              <h1> {student.firstName} {student.middleName} {student.lastName}</h1>
            </div>
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
                  <p>
                    <span>Mobile: </span> {student.phone}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Alternate mobile: </span> {student.alternatePhone}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>DOB: </span> {student.dob.split('T')[0]}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Gender: </span> {student.gender}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Current address: </span> {student.currentAddress}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Permanant address: </span> {student.permanentAddress}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Adhaar number: </span> {student.aadharCard}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Pan number: </span> {student.panCard}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Passport: </span> {student.passportCard}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Citizenship: </span> {student.citizenship}
                  </p>
                </div>
              </div>
            </div>


            <div className="panel-body bio-graph-info">
              <h3>Education Information</h3>
              <div className="row">
                <div className="bio-row">
                  <p>
                    <span>10<sup>th</sup> percent: </span> {student.hscPercentage}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Board of 10th education: </span> {student.hscBoard}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Year of 10th passing: </span> {student.yearOFPassingHsc}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Education gap after 10th: </span> {student.gapAfterHsc}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Reason of gap: </span> {student.gapAfterHsc}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>12<sup>th</sup>/Diploma percent: </span> {student.sscPercentage}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Board of 12th/Diploma education: </span> {student.sscBoard}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Year of 12th/Diploma passing: </span> {student.yearOFPassingSsc}
                  </p>
                </div>

              </div>
            </div>

            <div className="panel-body bio-graph-info">
              <h3>College Information</h3>
              <div className="row">
                <div className="bio-row">
                  <p>
                    <span>TE Roll no: </span> {student.rollNumber}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>TE section: </span> {student.teSection}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Branch: </span> {student.branch}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>PICT reg id: </span> {student.pictRegistrationId}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>University PRN: </span> {student.prn}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Year of 1st year: </span> {student.yearOfStartingCollege}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>1st year 1st sem cgpa: </span> {student.firstYearFirstSemCgpa}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>1st year 2nd sem cgpa: </span> {student.firstYearSecondSemCgpa}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>2nd year 1st sem cgpa: </span> {student.secondYearfirstSemCgpa}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>2nd year 2nd sem cgpa: </span> {student.secondYearSecondSemCgpa}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>3rd year 1st sem cgpa: </span> {student.thirdYearFirstSemCgpa}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Total active backlog: </span> {student.activeBacklog}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Total passive backlog: </span> {student.passiveBacklog}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Are you YD?: </span> {student.yearDrop}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Planning for higher education: </span> {student.planningForHigherEducation}
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Amcat Score: </span> {student.amcatScore}
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

export default StudentProfile