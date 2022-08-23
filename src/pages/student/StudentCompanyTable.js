import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/admincompanytable.css";
import axios from "axios";

const StudentCompanyTable = () => {
  const [studentCompanyTable, setStudentCompanyTable] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/student/company/jobs", {
        withCredentials: true,
      })
      .then((res) => {
        console.log('res', res.data.data);
        setStudentCompanyTable(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("err", err);
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
    <div id="adminCOmpanyTable">
      <div className="col-md-6 col-sm-6 cl-sx-6 col-6">
        <h3>Company records</h3>
      </div>
      <div className="row my-3">
        <div className="d-flex justify-content-between">
          <div className="filter col-md-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Search company
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="search for..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Enter the name of company
            </div>
          </div>
        </div>
      </div>
<div className="row">
      {studentCompanyTable
        .filter((company) =>
          company.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((company) => (
          <div key={company.name} className="col-md-5 m-3">
            <div className="card">
              <div className="card-header">
                <h5>{company.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text" style={{ fontSize: "15px" }}>
                  <i>
                    <ol>
                      {company.jobDescriptions.length
                        ? company.jobDescriptions.map((desc, key) => (
                            <li key={key}>
                              {desc.name} (₹ {desc.ctc} LPA) : round -{" "}
                              {desc.currentRound}{" "}
                              <i className="bi bi-arrow-right"></i>{" "}
                              <Link
                                to="/student/company/details"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate("/student/company/details", {
                                    state: { jobId: desc._id },
                                  });
                                }}
                              >
                                Link
                              </Link>
                            </li>
                          ))
                        : "No job opening record available"}
                    </ol>
                  </i>
                </p>
              </div>
            </div>
          </div>
        ))}
</div>
      <div />
    </div>
  );
};

export default StudentCompanyTable;
