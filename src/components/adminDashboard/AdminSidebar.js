import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../assets/css/style.css";
// import AdminDashboard from "../../pages/admin/AdminDashboard";
// import AdminStudentList from "../../pages/admin/AdminStudentList";
export default function AdminSidebar() {
  return (
    <div>
      <header style={{ marginTop: "-60px" }} className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
          PICT TnP Platform
        </a>
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
                    <Link className="nav-link active" aria-current="page" to="/admin/dashboard">
                      <span
                        data-feather="home"
                        className="align-text-bottom"
                      ></span>
                      <i className="bi bi-house"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/student-table">
                      <span
                        data-feather="file"
                        className="align-text-bottom"
                      ></span>
                      <i className="bi bi-person"></i>
                      Students
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/company-table">
                      <span
                        data-feather="shopping-cart"
                        className="align-text-bottom"
                      ></span>
                      <i className="bi bi-building"></i>
                      Company
                    </Link>
                  </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                  <span>Manage Account</span>
                  <a
                    className="link-secondary"
                    href="#"
                    aria-label="Add a new report"
                  >
                    <span
                      data-feather="plus-circle"
                      className="align-text-bottom"
                    ></span>
                  </a>
                </h6>
                <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span
                        data-feather="file-text"
                        className="align-text-bottom"
                      ></span>
                      <i className="bi bi-key"></i>
                      Change Password
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span
                        data-feather="file-text"
                        className="align-text-bottom"
                      ></span>
                      <i className="bi bi-box-arrow-right"></i>
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
