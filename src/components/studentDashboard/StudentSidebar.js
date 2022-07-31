import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/css/style.css"
export default function StudentSidebar() {

  const navigate = useNavigate();

  const handleSignOut = () => {
    axios.post("http://localhost:8080/student/logout", {}, { withCredentials: true})
    .then(res => {
      console.log("Student Logout");
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


  var initial_url = window.location.href;
  var url = initial_url .split( '/' );

  var path = url[url.length-1];

  useEffect(()=>{
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
},[])

  return (
    <div>
      <header style={{marginTop:"-20px"}} className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" to="/student/dashboard">
          PICT TnP Platform
        </Link>
        <div className="userNavbar">
         Hello, Sangmeshwar!
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
                  <a className={`nav-link ${active.dash}`} aria-current="page" href="/student/dashboard">
                    <span
                      data-feather="home"
                      className="align-text-bottom"
                    ></span>
                    <i className="bi bi-house"></i>
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${active.company}`} aria-current="page" href="/student/company-table">
                    <span
                      data-feather="home"
                      className="align-text-bottom"
                    ></span>
                    <i className="bi bi-building"></i>
                    Company
                  </a>
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
                  <a className={`nav-link ${active.changePass}`} href="/student/password/update">
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    <i className="bi bi-key"></i>
                    Change Password
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${active.profile}`} href="/student/profile">
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    <i className="bi bi-person"></i>
                    Profile
                  </a>
                </li>
                <li className="nav-item" onClick={handleSignOut}>
                  <a className="nav-link" href="/">
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
          <Outlet />
        </div>
      </div>
    </div>
  );
}
