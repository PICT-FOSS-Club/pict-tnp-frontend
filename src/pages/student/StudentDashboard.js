import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/studentdashboardhome.css";
import { Link } from "react-router-dom";

export default function StudentDashboard() {

  const [student, setStudent] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/student/me', { withCredentials: true })
      .then((res) => {
        console.log('After get request:', res.data.student);
        setStudent(res.data.student);
        setLoading(false)
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

  return <div id="studentdashboard">
    {/* <!-- LIST --> */}
    {/* <div className="main__list-heading-wrap">
          <h2 className="main__list-heading ss-heading">Recent Activities</h2>
        </div> */}

    <div className="row">
      {/* if no companies applied */}
      {student.appliedCompanies ? student.appliedCompanies.map((company, key) => {
        return (
          <div className="col-md-4 my-5" key={key}>
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{company.name}</h5>
                <p className="card-text"></p>
                <button
                  className={`btn ${company.totalRounds <= company.roundCleared ? 'btn-success' : (company.roundCleared > 0 && company.result) ? 'btn-primary' : (company.roundCleared > 0 && !company.result) ? 'btn-danger' : 'btn-secondary'}`}
                  data-tooltip={`${company.totalRounds <= company.roundCleared ? 'Placed' : !company.result ? 'Unplaced' : (!company.roundCleared && company.result) ? 'Applied' : `${company.roundCleared} Cleared`} `}>{!company.roundCleared && company.result === true ? "Upcoming" : company.roundCleared >= company.totalRounds ? "Placed" : !company.result ? `Round ${company.roundCleared} Uncleared` : `Round ${company.roundCleared} cleared`}</button>
              </div>
              <div className="card-footer text-muted">
                {company.totalRounds === company.roundCleared ? "Selected" : (company.roundCleared > 0 && !company.result) ? "Not selected" : `Next : Round ${company.roundCleared + 1}`} - <Link to={`/student/company/details/${company.companyId}`}> See schedule </Link>
              </div>
            </div>
          </div>
        )
      }) : "Not applied to any company"}
    </div>
  </div>;
}
