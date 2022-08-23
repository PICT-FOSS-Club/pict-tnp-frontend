import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import "../../assets/css/style.css"
export default function StudentSidebar() {

  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();

  const handleSignOut = () => {
    axios.post("http://localhost:8080/student/logout", {}, { withCredentials: true})
    .then(res => {
      // console.log("Student Logout");
      setCookie("usertype", "", { path: "/" });
      setCookie("token1", "", { path: "/" });
      setCookie("username", "", { path: "/" });
      navigate("/");
    })
    .catch(err => {
      console.log("Error ",err);
    })
  }

  const [active,setActive] = useState({
    dash: 'active',
    company: '',
    profile: '',
    changePass: ''
  })





function setActiveTag() {
  var initial_url = window.location.href;
  var url = initial_url.split('/');

  var path = url[url.length - 1];
  if(path=='dashboard'){
    setActive({...active,dash:'active',company:'',profile:'',changePass:''});
  }else if(path=='profile'){
    setActive({...active,dash:'',company:'',profile:'active',changePass:''});
  }else if(path=='company-table'){
    setActive({...active,dash:'',company:'active',profile:'',changePass:''});
  }else if(path=='update'){
    setActive({...active,dash:'',company:'',profile:'',changePass:'active'});
  }else{
    setActive({...active,dash:'',company:'',profile:'',changePass:''})
  }
}


setInterval(() => {
  setActiveTag();
}, 10)

  return (
    <div>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" to="/student/dashboard">
          PICT TnP Platform
        </Link>
        <div className="userNavbar">
          Hello, {cookies.username}
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

      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className={`nav-link ${active.dash}`} aria-current="page" to="/student/dashboard">
                    <span
                      data-feather="home"
                      className="align-text-bottom"
                    ></span>
                    <i className="bi bi-house"></i>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${active.company}`} aria-current="page" to="/student/company-table">
                    <span
                      data-feather="home"
                      className="align-text-bottom"
                    ></span>
                    <i className="bi bi-building"></i>
                    Company
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
                  <Link className={`nav-link ${active.changePass}`} to="/student/password/update">
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    <i className="bi bi-key"></i>
                    Change Password
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${active.profile}`} to="/student/profile">
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    <i className="bi bi-person"></i>
                    Profile
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
          <Outlet />
        </div>
      </div>
    </div>
  );
}
