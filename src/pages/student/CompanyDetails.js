import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/css/studentprofile.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { useToasts } from "react-toast-notifications";

const CompanyDetails = () => {
  const params = useParams();
  const [isLoading, setLoading] = useState(true);
  const [company, setCompany] = useState({});
  const [resume, setResume] = useState(null);

  const navigate = useNavigate();
  // const { addToast } = useToasts(); //react toast notifications:

  const location = useLocation();

  const state = location.state;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/company/job/details/${state.jobId}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("After get request:", res.data.data);
        setCompany(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error in get req:", err);
        setLoading(false);
      });
  }, [params.companyId]);

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
      console.log(company._id);
      axios
        .post(
          "http://localhost:8080/student/company/apply",
          { companyId: company._id },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("First ", res);
          if (res.status == 403) {
            return alert(
              "Oops! Please make sure you are eligible to apply for this company!"
            );
          }
          //
          const formData = new FormData();
          formData.append("resume", resume);
          const config = {
            headers: { "content-type": "multipart/form-data" },
            withCredentials: true,
          };
          axios
            .post(
              `http://localhost:8080/student/resume/upload/${company._id}`,
              formData,
              config
            )
            .then((res) => {
              console.log("Second ", res.data);
              alert("Successfully applied to the Company!");
              navigate("/student/dashboard");
            })
            .catch((err) => {
              console.log("Error while upload document.");
            });
        })
        .catch((err) => {
          console.log("Error", err);
          if (err.request.status == 403) {
            return alert(
              "Oops! Please make sure you are eligible to apply for this company!"
            );
          }
          // console.log("Error while applying to company.");
        });
    }
  };

  return (
    <div className="container company bootstrap snippets bootdey">
      <div>
        <div className="profile-info">
          <div className="panel"></div>
          <div className="panel">
            <div className="bio-graph-heading">
              <h1>{company.name}</h1>
              <span>{company.profile}</span>
              <p>₹ {company.ctc} LPA</p>
            </div>
            <div className="panel-body bio-graph-info">
              <h3>About company criteria</h3>
              <div className="row">
                <div className="companyROInfo">
                  <b> Branch: </b>
                  {company.criteria.branch.cs ? "CE" : ""}{" "}
                  {company.criteria.branch.it ? ", IT" : ""}{" "}
                  {company.criteria.branch.entc ? "and E&TC" : ""} (
                  {company.criteria.courseName.ug ? "UG" : ""}
                  {company.criteria.courseName.pg ? " PG" : ""})
                </div>
                <div className="companyROInfo">
                  <b>Minimum CGPA Criteria: </b>
                  {company.criteria.cgpa}
                </div>
                <div className="companyROInfo">
                  <b>Email: </b>
                  {company.email}
                </div>
                <div className="companyROInfo">
                  <b>Website: </b>
                  <a href={`http://${company.websiteUrl}`} target="_blank">
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
                  {company.driveDetails.map((drive, key) => (
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
                  {company.skillsRequired.map((skill, key) => (
                    <div key={key}>
                      <i className="bi bi-arrow-right-circle"></i> {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
