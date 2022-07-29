import React from "react";
import "../../assets/css/style.css"
export default function AdminDashboard() {
  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4" style={{justifyContent: "end",paddingTop:"7rem",paddingBottom:"3rem"}}  id="adminDashBoardNum">
      <div className="col d-flex align-items-start">
      <i className="bi bi-people"></i>
        {/* <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#bootstrap"></use></svg> */}
        <div>
          <h4 className="fw-bold mb-0">534</h4>
          <p>Enrolled students</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <i className="bi bi-building"></i>
        {/* <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#cpu-fill"></use></svg> */}
        <div>
          <h4 className="fw-bold mb-0">73</h4>
          <p>Visited companies</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
      <i className="bi bi-people"></i>
        {/* <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"><use xlink:href="#calendar3"></use></svg> */}
        <div>
          <h4 className="fw-bold mb-0">493</h4>
          <p>Placed students</p>
        </div>
      </div>
    </div>
    </div>
  );
}
