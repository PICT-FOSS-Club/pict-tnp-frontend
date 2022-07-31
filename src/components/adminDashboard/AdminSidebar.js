import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/css/style.css";

export default function AdminSidebar() {

  const navigate = useNavigate();

  const [active,setActive] = useState({
    dash: 'active',
    company: '',
    student: '',
    changePass: ''
  })


  var initial_url = window.location.href;
  var url = initial_url .split( '/' );

  var path = url[url.length-1];

  useEffect(()=>{
  if(path=='dashboard'){
    setActive({...active,dash:'active',company:'',student:'',changePass:''});
  }else if(path=='student-table'){
    setActive({...active,dash:'',company:'',student:'active',changePass:''});
  }else if(path=='company-table'){
    setActive({...active,dash:'',company:'active',student:'',changePass:''});
  }else if(path=='update'){
    setActive({...active,dash:'',company:'',student:'',changePass:'active'});
  }else{
    setActive({...active,dash:'',company:'',student:'',changePass:''})
  }
},[])

  const handleSignOut = () => {
    axios.post("http://localhost:8080/admin/logout", {}, { withCredentials: true})
    .then(res => {
      console.log("Admin Logout");
      navigate("/");
    })
    .catch(err => {
      console.log("Error ",err);
    })
  }

  return (
    <div>
      <header style={{marginTop:"-60px"}} className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
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
                    <a className={`nav-link ${active.dash}`} aria-current="page" href="/admin/dashboard">
                      <span
                        data-feather="home"
                        className="align-text-bottom"
                      ></span>
                      <i className="bi bi-house"></i>
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${active.student}`} href="/admin/student-table" >
                      <span
                        data-feather="file"
                        className="align-text-bottom"
                      ></span>
                      <i className="bi bi-person"></i>
                      Students
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${active.company}`} href="/admin/company-table">
                      <span
                        data-feather="shopping-cart"
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
                    <a className={`nav-link ${active.changePass}`} href="/admin/password/update">
                      <span
                        data-feather="file-text"
                        className="align-text-bottom"
                      ></span>
                      <i className="bi bi-key"></i>
                      Change Password
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
