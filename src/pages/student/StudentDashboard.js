import React from "react";
import "../../assets/css/studentdashboardhome.css";

export default function StudentDashboard() {
  return <div id="studentdashboard">
    {/* <!-- LIST --> */}
    <div className="main__list-heading-wrap">
          <h2 className="main__list-heading ss-heading">Recent Activities</h2>
        </div>

        <ul className="main__list">

          <li className="main__list-item">
            <div>
              <p className="main__list-content">Center Point</p>
            </div>
          </li>

          <li className="main__list-item">
            <div className="main__list-content-wrap">
              <p className="main__list-content">PhonePe</p>
              <p className="main__list-sub success">Round 1 - Cleared
              <p className="main__list-sub gray">29/07/2022</p>
              </p>
              
            </div>
          </li>

          <li className="main__list-item">
            <div className="main__list-content-wrap">
              <p className="main__list-content">Codenation</p>
              <p className="main__list-sub error">Round 2 - Uncleared
              <p className="main__list-sub gray">30/07/2022</p>
              </p>
            </div>
          </li>

          <li className="main__list-item">
            <div className="main__list-content-wrap">
              <p className="main__list-content">Codenation</p>
              <p className="main__list-sub success">Round 1 - Cleared
              <p className="main__list-sub gray">20/07/2022</p>
              </p>
            </div>
          </li>

          <li className="main__list-item">
            <div className="main__list-content-wrap">
              <p className="main__list-content">Amazon</p>
              <p className="main__list-sub error">Round 1 - Uncleared
              <p className="main__list-sub gray">22/07/2022</p>
              </p>
            </div>
          </li>

          <li className="main__list-item">
            <div className="main__list-content-wrap">
              <p className="main__list-content">Microsoft</p>
              <p className="main__list-sub success">Round 1 - Cleared
              <p className="main__list-sub gray">25/07/2022</p>
              </p>
            </div>
          </li>

        </ul>
  </div>;
}
