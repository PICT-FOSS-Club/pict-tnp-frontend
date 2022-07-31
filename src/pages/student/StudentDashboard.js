import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/studentdashboardhome.css";

export default function StudentDashboard() {

  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/student/me', { withCredentials: true })
      .then((res) => {
        // console.log('After get request:', res.data.student);
        setStudent(res.data.student);
      })
      .catch((err) => {
        console.log('Error in get req:', err);
      })
  }, []);

  return <div id="studentdashboard">
    {/* <!-- LIST --> */}
    {/* <div className="main__list-heading-wrap">
          <h2 className="main__list-heading ss-heading">Recent Activities</h2>
        </div> */}

    <div className="row">
      <div className="col-md-4 my-5">
        <div className="card text-center">
          {/* <div className="card-header">
                  Featured
                </div> */}
          <div className="card-body">
            <h5 className="card-title">PhonePe</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-primary" data-tooltip="Cleared">Round 1 - cleared</a>
          </div>
          <div className="card-footer text-muted">
            Round 2 - 03/08/2022
          </div>
        </div>
      </div>
      <div className="col-md-4 my-5">
        <div className="card text-center">
          {/* <div className="card-header">
                  Featured
                </div> */}
          <div className="card-body">
            <h5 className="card-title">Codenation</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-secondary" data-tooltip="Applied">Round 1 - applied</a>
          </div>
          <div className="card-footer text-muted">
            Round 1 - 14/08/2022
          </div>
        </div>
      </div>
      <div className="col-md-4 my-5">
        <div className="card text-center">
          {/* <div className="card-header">
                  Featured
                </div> */}
          <div className="card-body">
            <h5 className="card-title">TCS</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-danger" data-tooltip="Uncleared">Round 3 - uncleared</a>
          </div>
          <div className="card-footer text-muted">
            Proccess ended
          </div>
        </div>
      </div>
      <div className="col-md-4 my-5">
        <div className="card text-center">
          {/* <div className="card-header">
                  Featured
                </div> */}
          <div className="card-body">
            <h5 className="card-title">Deutsche Bank</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-success" data-tooltip="Cleared">Round 4 - cleared</a>
          </div>
          <div className="card-footer text-muted">
            Selected
          </div>
        </div>
      </div>
      {/* if no companies applied */}
      {student.appliedCompanies ? student.appliedCompanies.map((company) => {
        return (
          <div className="col-md-4 my-5">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{company.name}</h5>
                <p className="card-text"></p>
                <a href="#" 
                className={`btn ${company.totalRounds <= company.roundCleared ? 'btn-success' : (company.roundCleared > 0 && company.result) ? 'btn-primary' : (company.roundCleared > 0 && !company.result) ? 'btn-danger' : 'btn-secondary'}`} 
                data-tooltip={`${company.totalRounds <= company.roundCleared ? 'Placed' : !company.result ? 'Unplaced' : (!company.roundCleared && company.result) ? 'Applied' : `${company.roundCleared} Cleared` } `}>{!company.roundCleared && company.result == true ? "Upcoming" : company.roundCleared == company.totalRounds ? "Placed" : !company.result ? `Round ${company.roundCleared} Uncleared` : `Round ${company.roundCleared} cleared`}</a>
              </div>
              <div className="card-footer text-muted">
                {company.totalRounds === company.roundCleared ? "Selected" : (company.roundCleared > 0 && !company.result) ? "Not selected" : `Next : Round ${company.roundCleared + 1} - See schedule `}
              </div>
            </div>
          </div>
        )
      }) : "Not applied to any company"}
    </div>

    {/* <ul className="main__list">

          <li className="main__list-item">
            <div>
              <p className="main__list-content">Center Point</p>
            </div>
          </li>

          <li className="main__list-item">
            <div className="main__list-content-wrap">
              <p className="main__list-content">PhonePe</p>
              <p className="main__list-sub success">Round 1 - Cleared
              <p className="main__list-sub gray">29/07/2022</p>
              </p>
              
            </div>
          </li>

          <li className="main__list-item">
            <div className="main__list-content-wrap">
              <p className="main__list-content">Codenation</p>
              <p className="main__list-sub error">Round 2 - Uncleared
              <p className="main__list-sub gray">30/07/2022</p>
              </p>
            </div>
          </li>

          <li className="main__list-item">
            <div className="main__list-content-wrap">
              <p className="main__list-content">Codenation</p>
              <p className="main__list-sub success">Round 1 - Cleared
              <p className="main__list-sub gray">20/07/2022</p>
              </p>
            </div>
          </li>

          <li className="main__list-item">
            <div className="main__list-content-wrap">
              <p className="main__list-content">Amazon</p>
              <p className="main__list-sub error">Round 1 - Uncleared
              <p className="main__list-sub gray">22/07/2022</p>
              </p>
            </div>
          </li>

          <li className="main__list-item">
            <div className="main__list-content-wrap">
              <p className="main__list-content">Microsoft</p>
              <p className="main__list-sub success">Round 1 - Cleared
              <p className="main__list-sub gray">25/07/2022</p>
              </p>
            </div>
          </li>

        </ul> */}
  </div>;
}
