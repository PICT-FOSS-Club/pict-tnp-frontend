import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/studentdashboardhome.css";
import { Link, useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const [appliedCompanies, setAppliedCompanies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8080/student/company/job/applied", { withCredentials: true })
      .then((res) => {
        console.log("After get request:", res.data.data);
        setAppliedCompanies(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error in get req:", err);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div id="studentdashboard" style={{ marginTop: "15px" }}>
      {/* <!-- LIST --> */}
      {/* <div className="main__list-heading-wrap">
          <h2 className="main__list-heading ss-heading">Recent Activities</h2>
        </div> */}

      <div className="row">
        {/* if no companies applied */}
        {appliedCompanies
          ? appliedCompanies.map((application, key) => {
              return (
                <div className="col-md-4 my-5" key={key}>
                  <div className="card text-center">
                    <div className="card-body">
                      <h4 className="card-title">{application.job[0].company[0].name}</h4>
                      <h6 className="card-title">{application.job[0].name}</h6>
                      <button
                        className={`btn ${
                          application.job[0].totalRounds <= application.studentRoundCleared
                            ? "btn-success"
                            : application.studentRoundCleared > 0 && application.studentResult
                            ? "btn-primary"
                            : application.studentRoundCleared > 0 && !application.studentResult
                            ? "btn-danger"
                            : "btn-secondary"
                        }`}
                        data-tooltip={`${
                          application.job[0].totalRounds <= application.roundCleared
                            ? "Placed"
                            : !application.studentResult
                            ? "Unplaced"
                            : !application.studentRoundCleared && application.studentResult
                            ? "Applied"
                            : `${application.studentRoundCleared} Cleared`
                        } `}
                      >
                        {!application.studentRoundCleared && application.studentResult === true
                          ? "Upcoming"
                          : application.studentRoundCleared >= application.job[0].totalRounds
                          ? "Placed"
                          : !application.studentResult
                          ? `Round ${application.studentRoundCleared} Uncleared`
                          : `Round ${application.studentRoundCleared} cleared`}
                      </button>
                    </div>
                    <div className="card-footer text-muted">
                      {application.totalRounds === application.studentRoundCleared
                        ? "Selected"
                        : application.studentRoundCleared > 0 && !application.studentResult
                        ? "Not selected"
                        : `Next : Round ${application.studentRoundCleared + 1}`}{" "}
                      -{" "}
                      <Link
                        to={"/student/company/details"} onClick={(e)=>{ e.preventDefault(); navigate("/student/company/details", { state: { jobId: application.job[0]._id}})}}
                      >
                        {" "}
                        See schedule{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          : "Not applied to any company"}
      </div>
    </div>
  );
}
