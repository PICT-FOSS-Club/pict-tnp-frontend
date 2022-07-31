import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/style.css"
import "../../assets/css/studentdashboardhome.css"

export default function AdminDashboard() {

  const [dashboardDetials, setDashboardDetials] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/admin/dashboard/details", { withCredentials: true })
      .then(res => {
        setDashboardDetials(res.data.dashboard_details);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.data);
      })
  }, []);

  return (
    <div>
      <div id="studentdashboard">
        <div className="row">
          <div className="col-md-4 my-5">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Enrolled students</h5>
                <p className="card-text"></p>
                <div className="col d-flex align-items-center">
                  <i className="bi bi-people"></i>
                  <div>
                    <h4 className="fw-bold mb-0">{dashboardDetials.totalStudents}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-5">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Visited companies</h5>
                <p className="card-text"></p>
                <div className="col d-flex align-items-center">
                <i class="bi bi-building"></i>
                  <div>
                    <h4 className="fw-bold mb-0">{dashboardDetials.totalCompanies}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div><div className="col-md-4 my-5">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Placed students</h5>
                <p className="card-text"></p>
                <div className="col d-flex align-items-center">
                <i class="bi bi-mortarboard"></i>
                  <div>
                    <h4 className="fw-bold mb-0">{dashboardDetials.placedStudents}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-5">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Average CTC</h5>
                <p className="card-text"></p>
                <div className="col d-flex align-items-center">
                <i class="bi bi-currency-rupee"></i>
                  <div>
                    <h4 className="fw-bold mb-0">{parseFloat(dashboardDetials.averageCTC).toFixed(3)} LPA</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
