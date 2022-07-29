import React from "react";
import "../../assets/css/style.css";
export default function Footer() {
  return (
    // <div>
    //   <div className="footer-css">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                PICT
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                PICT FOSS CLUB
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Team
              </a>
            </li>
          </ul>
          <p className="text-center text-muted">© 2022 PICT TnP Platform</p>
        </footer>
    //   </div>
    // </div>
  );
}
