import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/css/style.css";
import { useCookies } from "react-cookie";

export default function AdminSidebar() {

  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();

  const [active, setActive] = useState({
    dash: 'active',
    company: '',
    student: '',
    changePass: '',
    placeStudent: '',
    report: ''
  })


  function setActiveTag() {
    var initial_url = window.location.href;
    var url = initial_url.split('/');

    var path = url[url.length - 1];
    if (path == 'dashboard') {
      setActive({ ...active, dash: 'active', company: '', student: '', changePass: '', placeStudent: '', report: '' });
    } else if (path == 'student-table') {
      setActive({ ...active, dash: '', company: '', student: 'active', changePass: '', placeStudent: '', report: '' });
    } else if (path == 'company-table') {
      setActive({ ...active, dash: '', company: 'active', student: '', changePass: '', placeStudent: '', report: '' });
    } else if (path == 'update') {
      setActive({ ...active, dash: '', company: '', student: '', changePass: 'active', placeStudent: '', report: '' });
    } else if (path == 'placedStudents') {
      setActive({ ...active, dash: '', company: '', student: '', changePass: '', placeStudent: 'active', report: '' });
    } else if (path == 'generate-report') {
      setActive({ ...active, dash: '', company: '', student: '', changePass: '', placeStudent: '', report: 'active' });
    } else {
      setActive({ ...active, dash: '', company: '', student: '', changePass: '', placeStudent: '', report: '' })
    }
  }





  // setInterval(() => {
  //   setActiveTag();
  // }, 10)

  const handleSignOut = () => {
    axios.post("http://localhost:8080/admin/logout", {}, { withCredentials: true })
      .then(res => {
        console.log("Admin Logout");
        setCookie("usertype", "", { path: "/" });
        setCookie("token1", "", { path: "/" });
        setCookie("username", "", { path: "/" });
        navigate("/");
      })
      .catch(err => {
        console.log("Error ", err);
      })
  }

  return (
    <div>
      <header style={{ marginTop: "-60px" }} className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" to="/admin/dashboard">
          PICT TnP Platform
        </Link>
        <div className="userNavbar">
          Hello, Admin!
        </div>
        <button
          id="navBarBtn"
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </header>
      <div className="">
        <div className="container-fluid">
          <div className="row">
            <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className={`nav-link ${active.dash}`} aria-current="page" to="/admin/dashboard">
                      <span
                        data-feather="home"
                        className="align-text-bottom"
                      ></span>
                      <i className="bi bi-house"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${active.student}`} to="/admin/student-table" >
                      <span
                        data-feather="file"
                        className="align-text-bottom"
                      ></span>
                      <i className="bi bi-person"></i>
                      Students
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${active.placeStudent}`} to="/admin/placedStudents" >
                      <span
                        data-feather="file"
                        className="align-text-bottom"
                      ></span>
                      <i className="bi bi-mortarboard"></i>
                      Placed Students
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${active.company}`} to="/admin/company-table">
                      <span
                        data-feather="shopping-cart"
                        className="align-text-bottom"
                      ></span>
                      <i className="bi bi-building"></i>
                      Company
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${active.report}`} to="/admin/generate-report">
                      <span
                        data-feather="shopping-cart"
                        className="align-text-bottom"
                      ></span>
                      <i class="bi bi-clipboard2-data"></i>
                      Generate Report
                    </Link>
                  </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                  <span>Manage Account</span>
                  <Link
                    className="link-secondary"
                    to="#"
                    aria-label="Add a new report"
                  >
                    <span
                      data-feather="plus-circle"
                      className="align-text-bottom"
                    ></span>
                  </Link>
                </h6>
                <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <Link className={`nav-link ${active.changePass}`} to="/admin/password/update">
                      <span
                        data-feather="file-text"
                        className="align-text-bottom"
                      ></span>
                      <i className="bi bi-key"></i>
                      Change Password
                    </Link>
                  </li>
                  <li className="nav-item" onClick={handleSignOut}>
                    <Link className="nav-link" to="/">
                      <span
                        data-feather="file-text"
                        className="align-text-bottom"
                      ></span>
                      <i className="bi bi-box-arrow-right"></i>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
              </div>
            </main>

          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
