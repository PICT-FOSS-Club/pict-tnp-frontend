import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/css/studentprofile.css";
import { useNavigate, useLocation } from "react-router-dom";
// import { useToasts } from "react-toast-notifications";

const CompanyDetails = () => {
  const [isLoading, setLoading] = useState(true);
  const [application, setApplication] = useState({});
  const [eligiblity, setEligiblity] = useState({});
  const [resume, setResume] = useState(null);

  const navigate = useNavigate();
  // const { addToast } = useToasts(); //react toast notifications:

  const location = useLocation();

  const state = location.state;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/job/details/${state.jobId}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("After get request:", res.data.data);
        setApplication(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error in get req:", err);
        setLoading(false);
      });

      axios
      .get(`http://localhost:8080/student/company/job/eligiblity/${state.jobId}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("After get request:", res.data.data);
        setLoading(false);
        setEligiblity(res.data.data)
      })
      .catch((err) => {
        console.log("Error in get req:", err);
        setLoading(false);
      });
  }, [state.jobId]);

  if (isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const handleChangeFile = (e) => {
    setResume(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (resume) {
      console.log(application._id);
      axios
        .post(
          "http://localhost:8080/student/company/job/apply",
          { jobId: application._id },
          { withCredentials: true }
        )
        .then((res) => {
          const formData = new FormData();
          formData.append("resume", resume);
          const config = {
            headers: { "content-type": "multipart/form-data" },
            withCredentials: true,
          };
          axios
            .post(
              `http://localhost:8080/student/resume/upload/${application._id}`,
              formData,
              config
            )
            .then((res) => {
              console.log("Second ", res.data);
              alert("Successfully applied to the application!");
              navigate("/student/dashboard");
            })
            .catch((err) => {
              console.log("Error while upload document.", err);
            });
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
  };

  return (
    <div className="container application bootstrap snippets bootdey">
      <div>
        <div className="profile-info">
          <div className="panel"></div>
          <div className="panel">
          <div className="bio-graph-heading">
              <h1>{application.company[0].name}</h1>
              <h4>{application.name}</h4>
              <h5>₹ {application.ctc}</h5>
              <h6>Eligible: {eligiblity.status ? "Yes" : "No"}</h6>
              {eligiblity.status ? <h6>Status: {eligiblity.newApplication ? "Not Applied" : "Applied"}</h6>: <></>}
              
          </div>
            <div className="panel-body bio-graph-info">
              <h3>About application criteria</h3>
              <div className="row">
                <div className="companyROInfo">
                <b className={`${(!eligiblity.branch || !eligiblity.course) ? "text-danger": ""}`} >Course and Branch: </b>
                  &emsp;
                  {(application.criteria.ug.cs || application.criteria.ug.it || application.criteria.ug.entc) ? <b>UG: </b> : <></>}
                  {application.criteria.ug.cs ? " CE " : ""}{" "}
                  {application.criteria.ug.it ? " IT " : ""}{" "}
                  {application.criteria.ug.entc ? " ENTC " : ""}
                  &emsp;
                  {(application.criteria.pg.cs || application.criteria.pg.it || application.criteria.pg.entc) ? <b>PG: </b> : <></>}
                  {application.criteria.pg.cs ? " CE " : ""}{" "}
                  {application.criteria.pg.it ? " IT " : ""}{" "}
                  {application.criteria.pg.entc ? " ENTC " : ""}
                </div>
                {application.criteria.aggrCgpa ? (
                  <div className="companyROInfo">
                  <b className={`${!eligiblity.aggrCgpa ? "text-danger": ""}`} >Minimum CGPA Criteria: </b>
                    {application.criteria.aggrCgpa}
                  </div>
                  ) : (<></>)
                }
                {application.criteria.sscPercentage ? (
                  <div className="companyROInfo">
                  <b className={`${!eligiblity.sscPercentage ? "text-danger": ""}`} >Minimum SSC Percentage: </b>
                    {application.criteria.sscPercentage}
                  </div>
                  ) : (<></>)
                }
                {application.criteria.attendance ? (
                  <div className="companyROInfo">
                  <b className={`${!eligiblity.attendance ? "text-danger": ""}`} >Minimum Attendence: </b>
                    {application.criteria.attendance}
                  </div>
                  ) : (<></>)
                }
                {application.criteria.amcatScore ? (
                  <div className="companyROInfo">
                    <b className={`${!eligiblity.amcatScore ? "text-danger": ""}`} >Minimum Amcat Score: </b>
                    {application.criteria.amcatScore}
                  </div>
                  ) : (<></>)
                }
                {application.criteria.activeBacklog ? (
                  <div className="companyROInfo">
                    <b className={`${!eligiblity.activeBacklog ? "text-danger": ""}`} >Minimum Active Backlog: </b>
                    {application.criteria.activeBacklog}
                  </div>
                  ) : (<></>)
                }
                {application.criteria.passiveBacklog ? (
                  <div className="companyROInfo">
                    <b className={`${!eligiblity.passiveBacklog ? "text-danger": ""}`} >Minimum Passive Backlog: </b>
                    {application.criteria.passiveBacklog}
                  </div>
                  ) : (<></>)
                }

                <div className="companyROInfo">
                  <b>Website: </b>
                  <a href={`http://${application.websiteUrl}`} target="_blank">
                    <i className="bi bi-globe"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="panel-body bio-graph-info">
              <h3>Round details</h3>
              <div className="row">
                <ul className="main__list">
                  <li className="main__list-item">
                    <div>
                      <p className="main__list-content">Center Point</p>
                    </div>
                  </li>
                  {application.roundDetails.map((drive, key) => (
                    <li className="main__list-item" key={key}>
                      <div className="main__list-content-wrap">
                        <p className="main__list-content">{drive.activity}</p>
                        <p className="main__list-sub gray">
                          Round No: {drive.roundNo}
                        </p>
                        <p className="main__list-sub gray">
                          Date: {drive.date}
                        </p>
                        <p className="main__list-sub gray">
                          Time: {drive.time}
                        </p>
                        <p className="main__list-sub gray">
                          Venue: {drive.venue}
                        </p>
                        <br />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="panel-body  bio-graph-info">
              <h3>Skills required</h3>
              <div className="row companySkillBody">
                <div>
                  {application.skillsRequired.map((obj, key) => (
                    <div key={key}>
                      <i className="bi bi-arrow-right-circle"></i> {obj.skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {(eligiblity.status && eligiblity.newApplication) ? (
              <div className="panel-body  bio-graph-info">
                <h3>Apply</h3>
                <div className="row companySkillBody">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        Select resume
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="exampleInputEmail1"
                        accept=".pdf"
                        onChange={handleChangeFile}
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text">
                        Select only if, you have other than default resume
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Apply
                    </button>
                  </form>
                </div>
              </div>
            ): (<></>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
