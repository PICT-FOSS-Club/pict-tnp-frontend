import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/style.css"
import "../../assets/css/studentdashboardhome.css"
import { Link } from "react-router-dom";
import BranchPieChart from "./charts/BranchPiChart";
import BarChart from "./charts/BarChart";

export default function AdminDashboard() {

  const [dashboardDetials, setDashboardDetials] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/admin/dashboard/details", { withCredentials: true })
      .then(res => {
        setDashboardDetials(res.data.dashboard_details);
        console.log(res.data);
        setLoading(false);
      })
      .catch(err => {
        // console.log(err.data);
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
    <div>
      <div id="studentdashboard">
        <h1>Welcome to PICT TnP Cell!</h1>
        <div className="row">
          <div className="col-md-4 my-5">
            <Link to="/admin/student-table" style={{textDecoration:"none",color:"#565656"}}>
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
            </Link>
          </div>
          <div className="col-md-4 my-5">
          <Link to="/admin/company-table" style={{textDecoration:"none",color:"#565656"}}>
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Visited companies</h5>
                <p className="card-text"></p>
                <div className="col d-flex align-items-center">
                <i className="bi bi-building"></i>
                  <div>
                    <h4 className="fw-bold mb-0">{dashboardDetials.totalCompanies}</h4>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </div><div className="col-md-4 my-5">
          <Link to="/admin/placedStudents" style={{textDecoration:"none",color:"#565656"}}>
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Placed students</h5>
                <p className="card-text"></p>
                <div className="col d-flex align-items-center">
                <i className="bi bi-mortarboard"></i>
                  <div>
                    <h4 className="fw-bold mb-0">{dashboardDetials.placedStudents}</h4>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-md-4 my-5">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Average CTC</h5>
                <p className="card-text"></p>
                <div className="col d-flex align-items-center">
                <i className="bi bi-currency-rupee"></i>
                  <div>
                    <h4 className="fw-bold mb-0">{(dashboardDetials.avgSalaryBaggedByPlacedStudents !== null) ? parseFloat(dashboardDetials.avgSalaryBaggedByPlacedStudents).toFixed(3) : 0} LPA</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4">
          <BranchPieChart csPlacedStudents={dashboardDetials.csPlacedStudents} itPlacedStudents={dashboardDetials.itPlacedStudents} entcPlacedStudents={dashboardDetials.entcPlacedStudents} />
          </div>
          <div className="col-md-8">
            <BarChart />
          </div>
        </div>
        
      </div>
    </div>
  );
}
