import React from "react";
import "../../assets/css/style.css";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    // <div>
    //   <div className="footer-css">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="https://www.pict.edu" className="nav-link px-2 text-muted">
                PICT
              </a>
            </li>
            <li className="nav-item">
              <a href="https://pict-foss-club.github.io/" className="nav-link px-2 text-muted">
                PICT FOSS CLUB
              </a>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link px-2 text-muted">
                Team
              </Link>
            </li>
          </ul>
          <p className="text-center text-muted">© 2022 PICT TnP Platform</p>
        </footer>
    //   </div>
    // </div>
  );
}
